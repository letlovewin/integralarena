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
    import Footer from "../../Footer.svelte";
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
                get(ref(database, `/users/${uidSnapshot.val().uid}`))
                    .then((trueUserData) => {
                        display = trueUserData.val().username;
                        institution = trueUserData.val().battle_cry;
                        if (institution === "") {
                            institution =
                                'No battle cry <a href="https://emoji.gg/emoji/3794-joobifrown"><img src="https://cdn3.emoji.gg/emojis/3794-joobifrown.png" width="64px" height="64px" alt="joobifrown"></a>';
                        }
                        rating = trueUserData.val().elo;
                        if (display === "admin") {
                            givenTitle =
                                '<span style="color:#FA0000">C</span><span style="color:#FA4100">r</span><span style="color:#FA8200">e</span><span style="color:#FAC400">a</span><span style="color:#EFFA00">t</span><span style="color:#AEFA00">o</span><span style="color:#6DFA00">r</span> <span style="color:#2BFA00">o</span><span style="color:#00FA16">f</span> <span style="color:#00FA57">I</span><span style="color:#00FA98">n</span><span style="color:#00FAD9">t</span><span style="color:#00D9FA">e</span><span style="color:#0098FA">g</span><span style="color:#0057FA">r</span><span style="color:#0016FA">a</span><span style="color:#2B00FA">l</span><span style="color:#6D00FA">s</span><span style="color:#AE00FA">A</span><span style="color:#EF00FA">r</span><span style="color:#FA00C4">e</span><span style="color:#FA0082">n</span><span style="color:#FA0041">a</span>';
                        } else if (rating <= 70) {
                            givenTitle =
                                '<p style="color:#1f95cc" style="text-align:left;">Novice integrator</p>';
                        } else if (rating <= 140) {
                            givenTitle =
                                '<p class="text-warning" style="text-align:left;">Warming up</p>';
                        } else {
                            givenTitle =
                                '<p class="text-danger" style="text-align:left;">Integration wizard</p>';
                        }
                    })
                    .then(
                        get(
                            child(
                                ref(database),
                                `/users/${uidSnapshot.val().uid}/submissions`,
                            ),
                        ).then((snapshot) => {
                            if (snapshot.exists()) {
                                let submissions = [];
                                for (const [key, value] of Object.entries(
                                    snapshot.val(),
                                )) {
                                    submissions.push([key, { key: value }]);
                                }
                                for (
                                    let i = 0;
                                    i < submissions.length;
                                    i++
                                ) {
                                    new SubmissionsRow({
                                        target: submissionsTable,
                                        props: {
                                            date: submissions[i][0],
                                            problem:
                                                submissions[i][1].key.problem,
                                            verdict:
                                                submissions[i][1].key.verdict,
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
                        }),
                    );
            } else {
                goto("/");
            }
        });
    }
</script>

<svelte:head>
    <meta charset="utf-8" />
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
    />
    <title>{webAppTitleState}</title>
</svelte:head>

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
    {#key data}
        <div class="card" style="margin-top: 0px;">
            <div class="card-body">
                <div class="hstack">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                    </svg>
                    <h3 style="text-align: left;">
                        <strong>{username}</strong>
                    </h3>
                </div>
                
                <p style="text-align: left;">
                    {@html givenTitle}
                </p>
                <h6 style="text-align: left;">Elo: {rating}</h6>
                <blockquote>
                    <em>{@html institution}</em>
                </blockquote>

                <p>Submissions</p>
                <div
                    class="table-responsive overflow-scroll"
                    style="max-height:450px;"
                >
                    <table class="table table-striped table-hover">
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
    {/key}
</div>
<Footer />
