const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const { initializeApp } = require("firebase-admin/app");
const { getDatabase } = require("firebase-admin/database")
const { getAuth } = require("firebase-admin/auth")
const { create, all } = require("mathjs");

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

const firebaseApp = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp);
const firebaseDatabase = getDatabase(firebaseApp);

function random(size) {
    //returns a crypto-safe random
    return require("crypto").randomBytes(size).toString('hex');
}



/*
    @Function judgeMathematicalExpression
    @Description Function that judges a given mathematical expression.

*/

exports.judgeMathematicalExpression = onRequest({ cors: true }, (request, response) => {
    const Res = request.body;
    const expression = Res.expression;
    const problemid = Res.problemid;
    const user = Res.user_info;
    const answerRef = firebaseDatabase.ref(`solutions/${problemid}`);
    const config = {
        epsilon: 1e-12,
        matrix: 'Matrix',
        number: 'number',
        precision: 64,
        predictable: false,
        randomSeed: null
    }
    const math = create(all, config)
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
                    if(ans==true) {
                        verd = "AC";
                        if(submissions==undefined) {
                            submissions = {};
                            submissions[`${datetime}`] = {problem: problemid, verdict: verd};
                        } else {
                            submissions[`${datetime}`] = {problem: problemid, verdict: verd};
                        }
                        let battle_cry = userSnapshot.val().battle_cry;
    
                        if(solved_problems==undefined) {
                            solved_problems = {};
                            solved_problems[`${problemid}`] = 1;
                            elo +=  answerSnapshot.val().rating;
                        } else {
                            if(solved_problems[`${problemid}`]==undefined) {
                                elo +=  answerSnapshot.val().rating;
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
                    } else {
                        verd = "RJ";
                        if(submissions==undefined) {
                            submissions = {};
                            submissions[`${datetime}`] = {problem: problemid, verdict: verd};
                        } else {
                            submissions[`${datetime}`] = {problem: problemid, verdict: verd};
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

//https://ominous-chainsaw-5j67v69j556fjpg-5001.app.github.dev/integralsarena/us-central1/judgeMathematicalExpression

/*

    @Function createAccount
    @Description Function that creates an account given a username, email, and password.

*/

exports.createAccount = onRequest({ cors: true }, (request, response) => {
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
