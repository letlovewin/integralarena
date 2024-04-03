<script>
    import { initializeApp, getApp, getApps } from "firebase/app";
    import { getDatabase, get, set, ref, child } from "firebase/database";
    import { browser } from "$app/environment";
    import Auth from "../Auth.svelte";
    import Navigation from "../Navigation.svelte";
    import Footer from "../Footer.svelte";
    import CompetitionsTableRow from "./CompetitionsTableRow.svelte";

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
    let past_competitions = [];
    let current_competitions = [];
    if (browser) {
        //DO NOT DELETE THIS IF STATEMENT. IF YOU DO YOU WILL GET THE MOST FUCKING ANNOYING ERROR IN EXISTENCE AND YOU WON'T KNOW WHY.
        const database = getDatabase(firebaseApp);
        get(child(ref(database), `/past_competitions/`)).then((snapshot) => {
            if (snapshot.exists()) {
                for (const [key, value] of Object.entries(snapshot.val())) {
                    past_competitions.push([
                        key,
                        {
                            title: value.title,
                            description: value.description,
                            runtime: value.runtime,
                        },
                    ]);
                }
                if(past_competitions.length==0) {
                    new CompetitionsTableRow({
                        target: pastCompetitionsBody,
                        props: {
                            cid: "",
                            title: "",
                            description: "No past competitions...",
                            runtime: ""
                        },
                    });
                }
                for (let i = past_competitions.length - 1; i > -1; i--) {
                    new CompetitionsTableRow({
                        target: pastCompetitionsBody,
                        props: {
                            cid: past_competitions[i][0],
                            title: past_competitions[i][1].title,
                            description: past_competitions[i][1].description,
                            runtime: past_competitions[i][1].runtime
                        },
                    });
                }
            } else {
                new CompetitionsTableRow({
                        target: pastCompetitionsBody,
                        props: {
                            cid: "",
                            title: "",
                            description: "No past competitions...",
                            runtime: ""
                        },
                    });
            }
        });

        get(child(ref(database), `/current_competitions/`)).then((snapshot) => {
            if (snapshot.exists()) {
                for (const [key, value] of Object.entries(snapshot.val())) {
                    current_competitions.push([
                        key,
                        {
                            title: value.name,
                            description: value.description,
                            runtime: value.time_limit + " hours",
                        },
                    ]);
                }
                if(current_competitions.length==0) {
                    new CompetitionsTableRow({
                        target: currentCompetitionsBody,
                        props: {
                            cid: "",
                            title: "",
                            description: "No current competitions...",
                            runtime: ""
                        },
                    });
                }
                for (let i = current_competitions.length - 1; i > -1; i--) {
                    new CompetitionsTableRow({
                        target: currentCompetitionsBody,
                        props: {
                            cid: current_competitions[i][0],
                            title: current_competitions[i][1].title,
                            description: current_competitions[i][1].description,
                            runtime: current_competitions[i][1].runtime
                        },
                    });
                }
            } else {
                new CompetitionsTableRow({
                        target: currentCompetitionsBody,
                        props: {
                            cid: "",
                            title: "",
                            description: "No current competitions...",
                            runtime: ""
                        },
                    });
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
    <div class="card" style="margin-top: 0px;">
        <div class="card-body">
            <h4 style="text-align: left;">Competitions</h4>
            {#key currentUserInformation}
            {#if currentUserInformation!=undefined && currentUserInformation!="nouser"}
            <a href="/competitions/create" class="float-end" style="text-align: right;">Start a competition</a>
            {/if}
            {/key}
            <br />
            <div class="row">
                <h5 style="text-align: left;">Current competitions</h5>
                <div class="col">
                    <div class="table-responsive">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th
                                        style="text-align: left;width: 111.188px;"
                                        >Name</th
                                    >
                                    <th
                                        style="text-align: center;width: 695.188px;"
                                        >Description</th
                                    >
                                    <th
                                        style="text-align: center;width: 111.188px;"
                                        >Runtime</th
                                    >
                                </tr>
                            </thead>
                            <tbody bind:this={currentCompetitionsBody}>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row">
                <h5 style="text-align: left;">Past competitions</h5>
                <div class="col">
                    <div class="table-responsive">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th
                                        style="text-align: left;width: 111.188px;"
                                        >Name</th
                                    >
                                    <th
                                        style="text-align: center;width: 695.188px;"
                                        >Description</th
                                    >
                                    <th
                                        style="text-align: center;width: 111.188px;"
                                        >Runtime</th
                                    >
                                </tr>
                            </thead>
                            <tbody bind:this={pastCompetitionsBody}>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<Footer />
