import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

import { initializeApp } from "firebase-admin/app";
import { getDatabase } from "firebase-admin/database";
import { getAuth } from "firebase-admin/auth";
import { create } from "mathjs";

const firebaseConfig = {
    apiKey: "AIzaSyDiDHodqqgXhmjtaharNv0yCLBnc-kDWe0",
    authDomain: "integralsarena.firebaseapp.com",
    projectId: "integralsarena",
    storageBucket: "integralsarena.appspot.com",
    messagingSenderId: "978478141428",
    appId: "1:978478141428:web:f3566e7bc6ea602177b3a1",
    measurementId: "G-N5T6SMBHL2",
    databaseURL: "https://integralsarena-default-rtdb.firebaseio.com/"
};

const mathConfig = {
    epsilon: 1e-12,
    matrix: 'Matrix',
    number: 'number',
    precision: 64,
    predictable: false,
    randomSeed: null
}

const firebaseApp = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp);
const firebaseDatabase = getDatabase(firebaseApp);

/**
 * @function judgeMathematicalExpression
 * @params request
 * @description Returns true if the given expression is correct, false otherwise.
 */

export const judgeMathematicalExpression = onRequest({ cors: true }, (request, response) => {
    const Res = request.body;
    const expression = Res.expression;
    const problemid = Res.problemid;
    const user = Res.user_info;
    const answerRef = firebaseDatabase.ref(`solutions/${problemid}`);
    
    const math = create(all, mathConfig);

    answerRef.once('value', (answerSnapshot) => {
        const solution = answerSnapshot.val().solution;
        try {
            const ans = math.symbolicEqual(solution, expression);
            const uidRef = firebaseDatabase.ref(`users/${user.uid}`)
            uidRef.once('value', (userSnapshot) => {
                logger.info(userSnapshot.val());
                let username = userSnapshot.val().username;
                let uid = userSnapshot.val().uid;
                let elo = userSnapshot.val().elo;
                let submissions = userSnapshot.val().submissions;
                let solved_problems = userSnapshot.val().solved_problems;
                let datetime = new Date();
                let verd;
                if (ans == true) {
                    verd = "AC";
                    if (submissions == undefined) {
                        submissions = {};
                        submissions[`${datetime}`] = { problem: problemid, verdict: verd };
                    } else {
                        submissions[`${datetime}`] = { problem: problemid, verdict: verd };
                    }
                    let battle_cry = userSnapshot.val().battle_cry;
                    const problemRef = firebaseDatabase.ref(`problems/${problemid}`);
                    problemRef.once('value', (problemSnapshot) => {
                        if (solved_problems == undefined) {
                            solved_problems = {};
                            solved_problems[`${problemid}`] = 1;
                            elo += problemSnapshot.val().rating;
                        } else {
                            if (solved_problems[`${problemid}`] == undefined) {
                                elo += problemSnapshot.val().rating;
                                solved_problems[`${problemid}`] = 1;
                            }
                        }
                        uidRef.set({
                            username: username,
                            uid: uid,
                            elo: elo,
                            solved_problems: solved_problems,
                            submissions: submissions,
                            battle_cry: battle_cry
                        }).then(() => {
                            response.send({ code: `${ans}` });
                            return;
                        });
                    })

                } else {
                    verd = "RJ";
                    if (submissions == undefined) {
                        submissions = {};
                        submissions[`${datetime}`] = { problem: problemid, verdict: verd };
                    } else {
                        submissions[`${datetime}`] = { problem: problemid, verdict: verd };
                    }
                    let battle_cry = userSnapshot.val().battle_cry;
                    uidRef.set({
                        username: username,
                        uid: uid,
                        elo: elo,
                        solved_problems: solved_problems,
                        submissions: submissions,
                        battle_cry: battle_cry
                    }).then(() => {
                        response.send({ code: `${ans}` });
                        return;
                    });
                }

            })
        } catch (error) {
            response.send({ code: `${error}` });
            return;
        }


    })

})

/**
 * @function createAccount
 * @description Creates an account for the user from an API call.
 * @params request
 * @var username
 * @var email
 * @var password
 * @returns string
 */

export const createAccount = onRequest({ cors: true }, (request, response) => {
    const Res = request.body;
    const username = Res.body_username;
    const email = Res.body_email;
    const password = Res.body_password;
    const usernameRegexExpression = /^[a-zA-Z0-9]{3,20}$/;
    if (!username.match(usernameRegexExpression)) {
        //Checks for username validity-- if the username isn't 3-20 characters long 
        //or it's not alphanumeric the API responds with an error.
        response.send({ error_code: "error-username-invalid" });
        return;
    }
    const usernameRef = firebaseDatabase.ref(`usernames/${username}`);
    usernameRef.once('value', (usernameValiditySnapshot) => {
        if (!usernameValiditySnapshot.exists()) {
            firebaseAuth.createUser({
                email: email,
                emailVerified: false,
                password: password,
                displayName: username,
                disabled: false
            })
                .then((user) => {
                    usernameRef.set({ uid: user.uid }).then(() => {
                        const uidRef = firebaseDatabase.ref(`users/${user.uid}`)
                        uidRef.set({
                            username: username,
                            uid: user.uid,
                            elo: 0,
                            solved_problems: {},
                            battle_cry: ""
                        }).then(() => {
                            response.send({ error_code: "ok" })
                        });
                    }).catch((error) => {
                        //If there's an error of any sort, the user is deleted to stop
                        //a duplicate user creation from happening.
                        firebaseAuth.deleteUser(user.uid);
                        let code = error.code;
                        response.send({ error_code: code });
                        return;
                    });

                })
                .catch((error) => {
                    let code = error.code;
                    response.send({ error_code: code });
                    return;
                })
        } else {
            response.send({ error_code: "error-username-in-use" });
            return;
        }
    })


})

/**
 * @function openCompetition
 * @description Creates an entry in the realtime database for a competition, leaving it open to join.
 * @params request
 */

export const openCompetition = onRequest({ cors: true }, (request, response) => {
    const Req = request.body;
    if(parseInt(Req.time_limit)>23) {
        response.send({code:"tle"});
        return;
    }
    const competition_information = {
        status: "open",
        time_limit: Req.time_limit,
        problems: Req.problems,
        participants: {},
        cid: 0,
    };
    const currentCompetitionRef = firebaseDatabase.ref(`/current_competitions/${competition_information.cid}`);
    currentCompetitionRef.set(competition_information, ()=>{
        /**
         * @todo
         * Manage cloud task scheduler
         */
    })
})

export const closeCompetition = onRequest({cors:true},(request,response)=>{
    const Req = request.body;
    if(parseInt(Req.time_limit)>23) {
        response.send({code:"tle"});
        return;
    }
    const competition_information = {
        status: "closed",
        time_limit: Req.time_limit,
        problems: Req.problems,
        participants: Req.participants,
        cid: Req.cid,
    };
    const currentCompetitionRef = firebaseDatabase.ref(`/current_competitions/${competition_information.cid}`);
    currentCompetitionRef.set(competition_information) //Competition closed, frontend should not allow the submission of new problems.
})

/**
 * @function judgeCompetitionMathematicalExpression
 * @params request
 * @description Returns true if the given expression is correct, false otherwise.
 */

export const judgeCompetitionMathematicalExpression = onRequest({ cors: true }, (request, response) => {
    const Res = request.body;
    const expression = Res.expression;
    const problemid = Res.problemid;
    const user = Res.user_info;
    const answerRef = firebaseDatabase.ref(`solutions/${problemid}`);
    
    const math = create(all, mathConfig);

    answerRef.once('value', (answerSnapshot) => {
        const solution = answerSnapshot.val().solution;
        try {
            const ans = math.symbolicEqual(solution, expression);
            const uidRef = firebaseDatabase.ref(`users/${user.uid}`)

        } catch (error) {
            response.send({ code: `${error}` });
            return;
        }
    })

})

