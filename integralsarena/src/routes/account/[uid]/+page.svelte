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
    import { onMount } from "svelte";
    let webAppAuthComponent,
        webAppTitleState = "IntegralsArena",
        currentUserInformation,
        competitiveUserInformation,
        userAuthState,
        signUp,
        signIn,
        authErrorState;
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
    if (
        browser
    ) {
        onValue(ref(database, `/usernames/${username}`), (uidSnapshot) => {
            if (uidSnapshot.exists()) {
                onValue(
                    ref(database, `/users/${uidSnapshot.val().uid}`),
                    (trueUserData) => {
                        display = trueUserData.val().username;
                        institution = trueUserData.val().battle_cry;
                        if (institution === "") {
                            institution =
                                'No battle cry <a href="https://emoji.gg/emoji/3794-joobifrown"><img src="https://cdn3.emoji.gg/emojis/3794-joobifrown.png" width="64px" height="64px" alt="joobifrown"></a>';
                        }
                        rating = trueUserData.val().elo;
                    },
                );
            } else {
                goto("/");
            }
        });
    }
</script>

<html data-bs-theme="light" lang="en">
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
            <Navigation bind:currentUserInformation />
            <div class="card" style="margin-top: 0px;">
                <div class="card-body">
                    <h3 style="text-align: left;">
                        <strong>{username}</strong>
                    </h3>
                    <blockquote>
                        <em>{@html institution}</em>
                    </blockquote>
                    <h6 style="text-align: left;">Elo: {rating}</h6>
                </div>
            </div>
        </div></body
    >
</html>
