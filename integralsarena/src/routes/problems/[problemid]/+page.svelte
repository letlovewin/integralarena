<script>
    import { initializeApp, getApp, getApps } from "firebase/app";
    import { getDatabase, ref, get, child } from "firebase/database";
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";
    import Auth from "../../Auth.svelte";
    import Navigation from "../../Navigation.svelte";
    let webAppAuthComponent,
        webAppTitleState = "QuiteLean",
        currentUserInformation,
        competitiveUserInformation,
        userAuthState,
        signUp,
        signIn,
        authErrorState,
        currEditor;
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
    let pid = data.information.title;
    let statement = "";
    let title = "";
    let rating = 0;

    if (browser) {
        get(child(ref(database), `/problems/`)).then((snapshot) => {
            if (snapshot.exists()) {
                if (snapshot.val()[pid] !== "undefined") {
                    let meat = snapshot.val()[pid];
                    if (meat != undefined) {
                        statement = meat.statement;
                        title = meat.origin;
                        rating = meat.rating;
                    } else {
                        goto("/");
                    }
                } else {
                    goto("/");
                }
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
                <div class="card-body float-end">
                    <h1>{@html statement}</h1>
                    <h6>{title}</h6>
                    <h5>Rating: {rating}</h5>
                    <input type="text" />
                </div>
            </div>
        </div>
    </body>
</html>
