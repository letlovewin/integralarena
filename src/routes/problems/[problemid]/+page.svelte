<script>
    import { initializeApp, getApp, getApps } from "firebase/app";
    import { getDatabase, ref, get, child } from "firebase/database";
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";
    import Auth from "../../Auth.svelte";
    import Navigation from "../../Navigation.svelte";

    import { ComputeEngine } from "@cortex-js/compute-engine";
    import IncorrectVerdict from "./IncorrectVerdict.svelte";
    import Footer from "../../Footer.svelte";
    import ErrorVerdict from "./ErrorVerdict.svelte";

    let webAppAuthComponent,
        webAppTitleState = "IntegralsArena",
        currentUserInformation,
        competitiveUserInformation,
        userAuthState,
        signUp,
        signIn,
        authErrorState,
        currentColorTheme = "light",
        mathematicalExpressionInput,
        verdictBody,
        submissionButton = false;
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
    const count = 200,
        defaults = {
            origin: { y: 0.7 },
        };

    function fire(particleRatio, opts) {
        confetti(
            Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio),
            }),
        );
    }
    const virtualJudgeAPIUrl =
        "https://us-central1-integralsarena.cloudfunctions.net/judgeMathematicalExpression";

    function realisticFireConfetti() {
        fire(0.25, {
            spread: 26,
            startVelocity: 55,
        });

        fire(0.2, {
            spread: 60,
        });

        fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8,
        });

        fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2,
        });

        fire(0.1, {
            spread: 120,
            startVelocity: 45,
        });
    }

    function submitMathematicalExpression(expression) {
        console.log(expression);
        submissionButton = true;
        fetch(virtualJudgeAPIUrl, {
            method: "POST",
            body: JSON.stringify({
                expression: mathematicalExpressionInput.getValue("ascii-math"),
                problemid: pid,
                user_info: currentUserInformation,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((code) => {
                return code.json();
            })
            .then((Res) => {
                let code = Res.code;
                //console.log(code);
                submissionButton = false;
                if (code == "true") {
                    realisticFireConfetti();
                    setTimeout(() => {
                        goto(`/account/${competitiveUserInformation.username}`);
                    }, 1500);
                } else if (code == "false") {
                    new IncorrectVerdict({ target: verdictBody });
                } else {
                    new ErrorVerdict({ target: verdictBody });
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
    <script defer src="//unpkg.com/mathlive"></script>
    <script
        src="https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.0.3/tsparticles.confetti.bundle.min.js"
    ></script>
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
        <div class="card-body float-end" bind:this={verdictBody}>
            <h1>{@html statement}</h1>
            <h6 class="text-primary">{rating} points</h6>
            <h6><em>{title}</em></h6>
            {#key currentUserInformation}
                {#if currentUserInformation != null}
                    {#if currentUserInformation == "nouser"}
                        <p>
                            Oops! It seems like you're not logged in. Want to <a
                                href="/login/">log in</a
                            >?
                        </p>
                    {:else}
                        <math-field
                            class="w-100"
                            style="font-size:1rem; display: block"
                            bind:this={mathematicalExpressionInput}
                        ></math-field>
                        <button
                            class="btn btn-primary mt-4"
                            type="button"
                            disabled={submissionButton}
                            on:click={() => {
                                submitMathematicalExpression(
                                    mathematicalExpressionInput.value,
                                );
                            }}>Submit</button
                        >
                        <br />
                        {#key submissionButton}
                            {#if submissionButton == true}
                                <img
                                    src={"/img/loading.gif"}
                                    alt="Loading gif"
                                    style="width:64px;height:64px;margin-top:4px;"
                                />
                            {/if}
                        {/key}
                    {/if}
                {/if}
            {/key}
        </div>
    </div>
</div>
<Footer />
