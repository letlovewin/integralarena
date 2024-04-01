<script>
    import { initializeApp, getApp, getApps } from "firebase/app";
    import { getDatabase, get, set, ref, child } from "firebase/database";
    import { browser } from "$app/environment";
    import Auth from "../Auth.svelte";
    import Navigation from "../Navigation.svelte";
    import Footer from "../Footer.svelte";

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
            <h4 style="text-align:left;">FAQ</h4>
            <ul style="text-align:left;">
                <li>
                    <strong
                        >On indefinite integrals, do I have to include the
                        constant of integration?</strong
                    >
                </li>
                <p>Yes, include them.</p>
                <li><strong>When are new problems added?</strong></li>
                <p>
                    <a href="mailto:portughalam@gmail.com">Email me</a> and submit
                    more problems. Please include where you got the problem from.
                </p>
                <li>
                    <strong>What format do I submit answers in?</strong>
                </li>
                <p>
                    Formatting is mostly the same. Please look at <a
                        href="https://mathjs.org/docs/expressions/syntax.html"
                        >this document</a
                    > to know the formatting in its entirety, though.
                </p>
                <li>
                    <strong>What do the different verdicts mean?</strong>
                </li>
                <p>
                    <span class="text-danger">RJ</span> - Your submission was rejected.
                </p>
                <p>
                    <span class="text-success">AC</span> - Your submission was accepted.
                </p>
                <p>You can see all of your submissions on your profile.</p>
                <li>
                    <strong>What can I put in my battle cry?</strong>
                </li>
                <p>Literally anything. You can put emojis, images, whatever.</p>
            </ul>
        </div>
    </div>
</div>
<Footer />
