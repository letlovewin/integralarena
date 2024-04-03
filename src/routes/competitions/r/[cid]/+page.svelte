<script>
    import { initializeApp, getApp, getApps } from "firebase/app";
    import { getDatabase, get, set, ref, child } from "firebase/database";
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";
    import Auth from "../../../Auth.svelte";
    import Navigation from "../../../Navigation.svelte";
    import Footer from "../../../Footer.svelte";

    let webAppAuthComponent,
        webAppTitleState = "IntegralsArena",
        currentUserInformation,
        competitiveUserInformation,
        userAuthState,
        signUp,
        signIn,
        authErrorState,
        peopleRow,
        currentColorTheme = "light";

    let currentCompetitionsBody, pastCompetitionsBody;

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

    export let data;
    let cid = data.information.contest_id;
    let status;
    let time_limit;
    let time_created;
    let submissions;
    let name;
    let description;
    let participants = [];
    let problems = [];

    let status_color;

    if (browser) {
        //DO NOT DELETE THIS IF STATEMENT. IF YOU DO YOU WILL GET THE MOST FUCKING ANNOYING ERROR IN EXISTENCE AND YOU WON'T KNOW WHY.
        const database = getDatabase(firebaseApp);
        get(child(ref(database), `/past_competitions/${cid}`)).then(
            (snapshot) => {
                if (snapshot.exists()) {
                    let info = snapshot.val();
                    status = info.status;
                    time_limit = info.time_limit;
                    time_created = info.time_created;
                    submissions = info.submissions;
                    name = info.name;
                    description = info.description;
                    participants = info.participants;
                    problems = info.problems;
                } else {
                    get(child(ref(database), `/current_competitions/${cid}`)).then( //try again but with current competitions
                        (snapshot2) => {
                            if (snapshot2.exists()) {
                                let info = snapshot2.val();
                                status = info.status;
                                if(status=="open") {
                                    status_color = "bg-success";
                                    status = "Open";
                                } else {
                                    status_color = "bg-danger";
                                    status = "Closed";
                                }
                                time_limit = info.time_limit;
                                time_created = info.time_created;
                                submissions = info.submissions;
                                name = info.name;
                                description = info.description;
                                participants = info.participants;
                                problems = info.problems;
                            } else {
                                goto("/competitions/");
                            }
                        },
                    );
                }
            },
        );
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
    <div class="card" style="margin-top: 0px;">
        <div class="card-body">
            <h4 style="text-align: left;">{name}</h4>
            <p style="width:128px;" class="rounded-pill {status_color}">Status: {status}</p>
            <p><em>"{description}"</em></p>
        </div>
    </div>
</div>
<Footer />
