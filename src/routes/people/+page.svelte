<script>
    import { initializeApp, getApp, getApps } from "firebase/app";
    import { getDatabase, get, set, ref, child } from "firebase/database";
    import { browser } from "$app/environment";
    import Auth from "../Auth.svelte";
    import Navigation from "../Navigation.svelte";
    import Footer from "../Footer.svelte";
    import PeopleTableRow from "./PeopleTableRow.svelte";

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
    let people = [];
    if (browser) {
        //DO NOT DELETE THIS IF STATEMENT. IF YOU DO YOU WILL GET THE MOST FUCKING ANNOYING ERROR IN EXISTENCE AND YOU WON'T KNOW WHY.
        const database = getDatabase(firebaseApp);
        
        get(child(ref(database), `/users/`)).then((snapshot) => {
            if (snapshot.exists()) {
                
                for (const [key, value] of Object.entries(snapshot.val())) {
                    //console.log(value);
                    let battle_cry;
                    if (value.battle_cry === "") {
                        battle_cry = "No battle cry...";
                    } else {
                        battle_cry = value.battle_cry;
                    }
                    people.push([key,{rating:value.username,origin:parseInt(value.elo),statement:battle_cry}])
                    
                }
                people.sort(function(a,b){return(a[1].origin-b[1].origin)});
                for(let i=people.length-1;i>-1;i--) {
                    new PeopleTableRow({
                        target: peopleRow,
                        props: {
                            rating: people[i][1].rating,
                            origin: people[i][1].origin,
                            statement: people[i][1].statement,
                            link: people[i][0],
                        },
                    });
                }
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
                    <h4 style="text-align: left;">People</h4>
                    <div class="row">
                        <div class="col">
                            <div class="table-responsive">
                                <table class="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th
                                                style="text-align: left;width: 111.188px;"
                                                >Username</th
                                            >
                                            <th
                                                style="text-align: center;width: 695.188px;"
                                                >Battle Cry</th
                                            >
                                            <th
                                                style="text-align: center;width: 111.188px;"
                                                >Elo</th
                                            >
                                        </tr>
                                    </thead>
                                    {#await people}
                                        <p>Loading people...</p>
                                    {:then}
                                        <tbody bind:this={peopleRow}> </tbody>
                                    {/await}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    <Footer />
</html>
