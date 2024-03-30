<script>
    import { initializeApp, getApp, getApps } from "firebase/app";
    import { getDatabase, get, set, ref, child } from "firebase/database";
    import { browser } from "$app/environment";
    import Auth from "../Auth.svelte";
    import Navigation from "../Navigation.svelte";
    import ProblemTableRow from "./ProblemTableRow.svelte";

    let webAppAuthComponent,
        webAppTitleState = "IntegralsArena",
        currentUserInformation,
        competitiveUserInformation,
        userAuthState,
        signUp,
        signIn,
        authErrorState,
        problemsRow;
    const appConfig = {
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
        firebaseApp = initializeApp(appConfig);
    } else {
        firebaseApp = getApp();
    }
    if (browser) { //DO NOT DELETE THIS IF STATEMENT. IF YOU DO YOU WILL GET THE MOST FUCKING ANNOYING ERROR IN EXISTENCE AND YOU WON'T KNOW WHY.
        const database = getDatabase(firebaseApp);
        let problemset;
        get(child(ref(database), `/problems/`)).then((snapshot) => {
            if (snapshot.exists()) {
                for (const [key, value] of Object.entries(snapshot.val())) {
                    //console.log(value);
                    new ProblemTableRow({
                        target: problemsRow,
                        props: {
                            rating: value.rating,
                            origin: value.origin,
                            statement: value.statement,
                            link: `${key}`,
                        },
                    });
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
                <div class="card-body">
                    <h4 style="text-align: left;">Problems</h4>
                    <div class="row">
                        <div class="col">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th
                                                style="text-align: left;width: 111.188px;"
                                                >Link</th
                                            >
                                            <th
                                                style="text-align: left;width: 111.188px;"
                                                >Rating</th
                                            >
                                            <th
                                                style="text-align: center;width: 695.188px;"
                                                >Problem</th
                                            >
                                            <th>Origin</th>
                                        </tr>
                                    </thead>
                                    <tbody bind:this={problemsRow}> </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
