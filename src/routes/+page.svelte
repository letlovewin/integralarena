<script>
    import { initializeApp, getApp, getApps } from "firebase/app";
    import { getDatabase, get, set, ref, child } from "firebase/database";
    import { browser } from "$app/environment";
    import Auth from "./Auth.svelte";
    import Navigation from "./Navigation.svelte";
    import AnnouncementTableRow from "./AnnouncementTableRow.svelte";

    let webAppAuthComponent,
        webAppTitleState = "IntegralsArena",
        currentUserInformation,
        competitiveUserInformation,
        userAuthState,
        signUp,
        signIn,
        authErrorState,
        announcementsRow,
        currentColorTheme = "light";

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

    const database = getDatabase(firebaseApp);
    if(browser) {
        get(child(ref(database), `/announcements/`)).then((snapshot) => {
        if (snapshot.exists()) {
            for (const [key, value] of Object.entries(snapshot.val())) {
                //console.log(value);
                new AnnouncementTableRow({
                    target: announcementsRow,
                    props: {
                        title: value.title,
                        author: value.author,
                        content: value.content,
                        
                    },
                });
            }
        }
    });
    }
    
</script>

<html data-bs-theme="{currentColorTheme}" lang="en">
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
            <Navigation bind:currentUserInformation bind:currentColorTheme/>
            <div class="card" style="margin-top: 0px;">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th style="text-align: left;"
                                                >Announcements</th
                                            >
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody bind:this={announcementsRow}>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
