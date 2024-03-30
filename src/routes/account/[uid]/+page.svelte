<script>
    /*
        @File: +page.svelte for people/[uid]
        @Author: Gray 

    */
    import { initializeApp, getApp, getApps } from "firebase/app";
    import { getDatabase, ref, get, child, onValue } from "firebase/database";
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";
    import Auth from "../../Auth.svelte";
    import Navigation from "../../Navigation.svelte";
    import SubmissionsRow from "./SubmissionsRow.svelte";
    import { onMount } from "svelte";
    let webAppAuthComponent,
        webAppTitleState = "IntegralsArena",
        currentUserInformation,
        competitiveUserInformation,
        userAuthState,
        signUp,
        signIn,
        authErrorState,
        currentColorTheme = "light",
        submissionsTable,
        givenTitle;
    const firebaseConfig = {
        apiKey: "AIzaSyDiDHodqqgXhmjtaharNv0yCLBnc-kDWe0",
        authDomain: "integralsarena.firebaseapp.com",
        projectId: "integralsarena",
        storageBucket: "integralsarena.appspot.com",
        messagingSenderId: "978478141428",
        appId: "1:978478141428:web:f3566e7bc6ea602177b3a1",
        measurementId: "G-N5T6SMBHL2",
    };
    let firebaseApp;
    if (getApps().length === 0) {
        firebaseApp = initializeApp(firebaseConfig);
    } else {
        firebaseApp = getApp();
    }

    const database = getDatabase(firebaseApp);
    export let data;
    let username = data.information.username;
    let display = "";
    let institution = "";
    let rating = 0;
    if (browser) {
        onValue(ref(database, `/usernames/${username}`), (uidSnapshot) => {
            if (uidSnapshot.exists()) {
                get(ref(database, `/users/${uidSnapshot.val().uid}`)).then(
                    (trueUserData) => {
                        display = trueUserData.val().username;
                        institution = trueUserData.val().battle_cry;
                        if (institution === "") {
                            institution =
                                'No battle cry <a href="https://emoji.gg/emoji/3794-joobifrown"><img src="https://cdn3.emoji.gg/emojis/3794-joobifrown.png" width="64px" height="64px" alt="joobifrown"></a>';
                        }
                        rating = trueUserData.val().elo;
                        if (rating <= 70) {
                            givenTitle =
                                '<p class="text-primary" style="text-align:left;">Novice integrator</p>';
                        } else if (rating <= 140) {
                            givenTitle =
                                '<p class="text-warning" style="text-align:left;">Warming up</p>';
                        } else {
                            givenTitle =
                                '<p class="text-danger" style="text-align:left;">Integration wizard</p>';
                        }
                    },
                ).then(
                get(
                    child(
                        ref(database),
                        `/users/${uidSnapshot.val().uid}/submissions`,
                    ),
                ).then((snapshot) => {
                    if (snapshot.exists()) {
                        for (const [key, value] of Object.entries(
                            snapshot.val(),
                        )) {
                            new SubmissionsRow({
                                target: submissionsTable,
                                props: {
                                    date: key,
                                    problem: value.problem,
                                    verdict: value.verdict,
                                },
                            });
                        }
                    } else {
                        new SubmissionsRow({
                                target: submissionsTable,
                                props: {
                                    date: "",
                                    problem: "No submissions yet...",
                                    verdict: "",
                                },
                            });
                    }
                }));
            } else {
                goto("/");
            }
        });
    }
</script>

<html data-bs-theme={currentColorTheme} lang="en">
    <head>
        <meta charset="utf-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
        <title>{webAppTitleState}</title>
    </head>

    <body
        class="bg-body"
        style="background: var(--bs-secondary-bg);color: var(--bs-card-bg);"
    >
        <div
            class="container"
            style="text-align: center;background: transparent;color: transparent;max-width: 1000px;"
        >
            <Auth
                bind:this={webAppAuthComponent}
                bind:currentUserInformation
                bind:userAuthState
                bind:signUp
                bind:signIn
                bind:authErrorState
                bind:competitiveUserInformation
            />
            <Navigation bind:currentUserInformation bind:currentColorTheme />
            <div class="card" style="margin-top: 0px;">
                <div class="card-body">
                    <h3 style="text-align: left;">
                        <strong>{username}</strong>
                    </h3>
                    {@html givenTitle}
                    <blockquote>
                        <em>{@html institution}</em>
                    </blockquote>
                    <h6 style="text-align: left;">Elo: {rating}</h6>
                    <p>Submissions</p>
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Problem</th>
                                    <th style="width: 145.312px;">Verdict</th>
                                </tr>
                            </thead>
                            <tbody bind:this={submissionsTable}></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div></body
    >
</html>
