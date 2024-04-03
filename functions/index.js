import { onRequest, HttpsError } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

import { initializeApp } from "firebase-admin/app";
import { getDatabase } from "firebase-admin/database";
import { getAuth } from "firebase-admin/auth";
import { create } from "mathjs";

import { onTaskDispatched } from "firebase-functions/v2/tasks";


import { randomBytes } from "crypto";

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

function random(size) {
    return randomBytes(size).toString('hex');
}

const dateToCron = (date) => {
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const days = date.getDate();
    const months = date.getMonth() + 1;
    const dayOfWeek = date.getDay();

    return `${minutes} ${hours} ${days} ${months} ${dayOfWeek}`;
};

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
    const time = new Date();
    const Req = request.body;
    if (parseInt(Req.time_limit) > 23 || parseInt(Req.time_limit < 0)) {
        response.send({ code: "tle" });
        return;
    }
    const competition_information = {
        status: "open",
        time_limit: Req.time_limit,
        time_created: time,
        problems: Req.problems,
        participants: {},
        submissions: {},
        cid: random(8),
        name: Req.name,
        description: Req.description
    };
    const currentCompetitionRef = firebaseDatabase.ref(`/current_competitions/${competition_information.cid}`);
    currentCompetitionRef.set(competition_information, () => {
        /**
         * @todo
         * Manage cloud task scheduler
         */
        
    })
})

export const joinCompetition = onRequest({ cors: true }, (request, response) => {
    const Req = request.body;
    const cid = Req.cid;
    const user_info = Req.user;
    const cidRef = firebaseDatabase.ref(`/current_competitions/${cid}`)
    cidRef.on('value', (cidSnapshot) => {
        if (!cidSnapshot.exists()) {
            response.send({ code: "dne" });
            return;
        }
        let info = cidSnapshot.val();
        if(info.status==="closed") {
            response.send({ code: "closed" });
        }
        let participants = info.participants;
        if(participants==undefined) {
            participants = {};
        }
        if(participants[`${user_info.displayName}`]==undefined) {
            participants[`${user_info.displayName}`] = 1;
        } else {
            response.send({ code: "existing_user" })
        }
    })
})

export const closeCompetition = onRequest({ cors: true }, (request, response) => {
    const Req = request.body;
    const cid = Req.cid;
    const currentCompetitionRef = firebaseDatabase.ref(`/current_competitions/${cid}/status`);5
    currentCompetitionRef.set("closed") //Competition closed, frontend should not allow the submission of new problems.
})

/**
 * @function judgeCompetitionMathematicalExpression
 * @params request
 * @description Returns true if the given expression is correct, false otherwise.
 */

export const judgeCompetitionMathematicalExpression = onRequest({ cors: true }, (request, response) => {
    const Req = request.body;
    const expression = Req.expression;
    const problemid = Req.problemid;
    const user = Req.user_info;
    const cid = Req.cid;
    const answerRef = firebaseDatabase.ref(`solutions/${problemid}`);

    const math = create(all, mathConfig);

    answerRef.once('value', (answerSnapshot) => {
        const solution = answerSnapshot.val().solution;
        try {
            const ans = math.symbolicEqual(solution, expression);
            const competitionInformationRef = firebaseDatabase.ref(`/current_competitions/${cid}`);
            /**
             * @todo
             * Write problem judgement in the context of competitions.
             * In the DB, competitions should have their own context for submissions and elo among participants.
             * So competitions should be closed off from the regular activities of users.
             */
            competitionInformationRef.on('value', (competitionSnapshot) => {
                let info = competitionSnapshot.val();
                if (info.status != "open") {
                    response.send({ code: "compclosed" });
                    return;
                }
                if (info.participants[`${user.displayName}`] == undefined) {
                    response.send({ code: "userdne" });
                    return;
                }
                let verd = "";
                if (ans) {
                    verd = "AC";
                    const problemInformationRef = firebaseDatabase.ref(`/problems/${problemid}`)
                    problemInformationRef.on('value', (problemInformationSnapshot) => {
                        info.participants[`${user.displayName}`].elo += parseInt(problemInformationSnapshot.val().rating);
                    })
                } else {
                    verd = "RJ";
                }
                let currtime = new Date();
                let submission = {
                    problemid: problemid,
                    verdict: verd,
                }
                let submissions = info.submissions;
                if (submissions[`${user.displayName}`] == undefined) {
                    submissions[`${user.displayName}`] = { currtime: submission };
                } else {
                    submissions[`${user.displayName}`][`${currtime}`] = submission;
                }
                info.submissions = submissions;
                competitionInformationRef.set(info, () => {

                }).catch((error) => {

                });
            })

        } catch (error) {
            response.send({ code: `${error}` });
            return;
        }
    })

})

