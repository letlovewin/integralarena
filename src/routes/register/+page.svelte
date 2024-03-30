<script>
    import { goto } from "$app/navigation";
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
        currentColorTheme="light";

    let usernameInputField,
        emailInputField,
        passwordInputField,
        confirmPasswordInputField;
</script>

<html data-bs-theme="{currentColorTheme}" lang="en" style>
    <head>
        <meta charset="utf-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
        <title>{webAppTitleState}</title>
    </head>

    <body>
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
        <Navigation bind:currentUserInformation bind:currentColorTheme/>
            <h4 style="color: var(--bs-emphasis-color);text-align: left;">
                Register
            </h4>
            <div class="input-group"></div>
            <hr style="color: var(--bs-emphasis-color);" />
            <div class="container vstack">
                <div class="input-group mb-3">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        bind:this={usernameInputField}
                        on:keypress={(key) => {
                            if (key.code == "Enter") {
                                signUp(
                                    usernameInputField.value,
                                    emailInputField.value,
                                    passwordInputField.value,
                                    confirmPasswordInputField.value,
                                );
                            }
                        }}
                    />
                </div>
                <div class="input-group mb-3">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Email"
                        aria-label="Email"
                        bind:this={emailInputField}
                        on:keypress={(key) => {
                            if (key.code == "Enter") {
                                signUp(
                                    usernameInputField.value,
                                    emailInputField.value,
                                    passwordInputField.value,
                                    confirmPasswordInputField.value,
                                );
                            }
                        }}
                    />
                </div>
                <div class="input-group mb-3">
                    <input
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        aria-label="Password"
                        bind:this={passwordInputField}
                        on:keypress={(key) => {
                            if (key.code == "Enter") {
                                signUp(
                                    usernameInputField.value,
                                    emailInputField.value,
                                    passwordInputField.value,
                                    confirmPasswordInputField.value,
                                );
                            }
                        }}
                    />
                </div>
                <div class="input-group mb-3">
                    <input
                        type="password"
                        class="form-control"
                        placeholder="Confirm password"
                        aria-label="Confirm password"
                        bind:this={confirmPasswordInputField}
                        on:keypress={(key) => {
                            if (key.code == "Enter") {
                                signUp(
                                    usernameInputField.value,
                                    emailInputField.value,
                                    passwordInputField.value,
                                    confirmPasswordInputField.value,
                                );
                            }
                        }}
                    />
                </div>
                <!--
<button class="btn text-secondary" style="background-transparency:100%">Forgot password</button>
                -->
                <p
                    style="color: var(--bs-form-invalid-border-color);margin-top: 4px;"
                >
                    {authErrorState}
                </p>
            </div>
            <button
                class="btn btn-primary"
                on:click={() => {
                    signUp(
                        usernameInputField.value,
                        emailInputField.value,
                        passwordInputField.value,
                        confirmPasswordInputField.value,
                    );
                }}>Register</button
            >
        </div>
    </body>
</html>
