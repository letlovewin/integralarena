<script>
    import { initializeApp, getApp, getApps } from "firebase/app";
    import { getDatabase, get, set, ref, child } from "firebase/database";
    import { browser } from "$app/environment";
    import Auth from "../Auth.svelte";
    import Navigation from "../Navigation.svelte";

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
                    <h4>FAQ</h4>
                    <ul style="text-align:left;">
                        <li><strong>On indefinite integrals, do I have to include the constant of integration?</strong></li>
                        <p>Don't include the constant of integration, you will be marked wrong by the virtual judge!</p>
                        <li><strong>When are new problems added?</strong></li>
                        <p><a href="mailto:portughalam@gmail.com">Email me</a> and submit more problems. Please include where you got the problem from.</p>
                    </ul>
                </div>
            </div>
        </div>
    </body>
</html>
