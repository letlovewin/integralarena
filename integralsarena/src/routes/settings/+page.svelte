<script>
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";
    import {getApps, initializeApp, getApp} from "firebase/app";
    import {getAuth} from "firebase/auth";
    import Auth from "../Auth.svelte";
    import Navigation from "../Navigation.svelte";
    import { signOut } from "firebase/auth";

    let webAppAuthComponent,
        webAppTitleState = "IntegralsArena",
        currentUserInformation,
        competitiveUserInformation,
        userAuthState,
        signUp,
        signIn,
        authErrorState,
        instField,
        sendVerificationEmail,
        saveChangesOnSettings;
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
    const auth = getAuth(firebaseApp);
    function logOut() {
        signOut(auth);
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
                bind:sendVerificationEmail
                bind:saveChangesOnSettings
            />
            <Navigation bind:currentUserInformation />
            <div class="card" style="margin-top: 0px;">
                <div class="card-body">
                    <h4 style="text-align: left;">Settings</h4>
                    {#key currentUserInformation}
                        {#if currentUserInformation != null}
                            <div
                                class="container text-center text-wrap p-5 w-75"
                            >
                                {#if !currentUserInformation.emailVerified}
                                    <h3>Your email isn't verified!</h3>
                                    <p>
                                        You won't be able to make any changes to
                                        your account until you verify your
                                        email.
                                    </p>
                                    <p>
                                        If you don't see an email from us, look
                                        in your junk folder, or click the button
                                        below. If you mistakenly signed up with
                                        a wrong email, <a
                                            href="mailto:quitelean@gmail.com"
                                            >contact us</a
                                        >.
                                    </p>
                                    <button
                                        class="btn btn-sm text-primary"
                                        style="background-transparency:100%"
                                        on:click={() => {
                                            sendVerificationEmail();
                                        }}>Send me a verification email</button
                                    >
                                    <button
                                        class="btn btn-outline-secondary"
                                        on:click={() => {
                                            logOut();
                                        }}>Log Out</button
                                    >
                                {:else}
                                    <p class="text-wrap">
                                        UID: {currentUserInformation.uid}
                                    </p>
                                    <div class="input-group mb-3">
                                        <span
                                            class="input-group-text"
                                            id="username-addon">@</span
                                        >
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder={currentUserInformation.displayName}
                                            aria-label={currentUserInformation.displayName}
                                            aria-describedby="username-addon"
                                            disabled
                                        />
                                    </div>
                                    <div class="input-group mb-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Battle Cry"
                                            aria-label="Battle Cry"
                                            bind:value={instField}
                                        />
                                    </div>
                                    <button
                                        class="btn btn-primary"
                                        on:click={() => {
                                            saveChangesOnSettings(instField);
                                        }}>Save changes</button
                                    >
                                    <button
                                        class="btn btn-outline-secondary"
                                        on:click={() => {
                                            logOut();
                                        }}>Log Out</button
                                    >
                                {/if}
                            </div>
                        {/if}
                    {/key}
                </div>
            </div>
        </div></body
    >
</html>
