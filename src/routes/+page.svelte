<script>
    import { initializeApp, getApp, getApps } from "firebase/app";
    import { getDatabase, get, set, ref, child } from "firebase/database";
    import { browser } from "$app/environment";
    import Auth from "./Auth.svelte";
    import Navigation from "./Navigation.svelte";
    import AnnouncementTableRow from "./AnnouncementTableRow.svelte";
    import Footer from "./Footer.svelte";

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
    if (browser) {
        let announcements = [];
        get(child(ref(database), `/announcements/`)).then((snapshot) => {
            if (snapshot.exists()) {
                for (const [key, value] of Object.entries(snapshot.val())) {
                    announcements.push(value);
                }
                for (let i = announcements.length - 1; i > -1; i--) {
                    new AnnouncementTableRow({
                        target: announcementsRow,
                        props: {
                            title: announcements[i].title,
                            author: announcements[i].author,
                            content: announcements[i].content,
                        },
                    });
                }
            }
        });
    }
</script>

<svelte:head>
    <meta charset="utf-8" />
    <meta
        name="google-site-verification"
        content="lUKKjxqRuE0azrMidIronf1LujkFmZTJ4JHmLy2Bdvw"
    />
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
    />
    <title>{webAppTitleState}</title>
</svelte:head>

<Auth
    bind:this={webAppAuthComponent}
    bind:currentUserInformation
    bind:userAuthState
    bind:signUp
    bind:signIn
    bind:authErrorState
    bind:competitiveUserInformation
/>
<div
    class="container"
    style="text-align: center;background: transparent;color: transparent;max-width: 1000px;"
>
    <Navigation bind:currentUserInformation bind:currentColorTheme />
    <div class="card" style="margin-top: 0px;">
        <div class="card-body">
            <div class="row">
                <div class="col">
                    <div class="table-responsive">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th style="text-align: left;width:30px;"
                                        >Announcements</th
                                    >
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody bind:this={announcementsRow}> </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <a href="/people/">See rankings...</a>
        </div>
    </div>
</div>
<Footer />
