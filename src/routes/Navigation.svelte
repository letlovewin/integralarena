<script>
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";

    function nav(url) {
        if (browser) {
            goto(url);
        }
    }

    export let currentUserInformation, currentColorTheme;
</script>

<svelte:head>
    <script src="/bootstrap/js/bootstrap.min.js"></script>
</svelte:head>

<header
    class="text-start bg-body"
    style="margin-top: 12px;margin-bottom: 12px;padding-top: 0px;padding-bottom: 0px;"
>
    <a
        class="navbar-brand fs-4 text-start link-body-emphasis"
        href="/"
        style="margin-top: 4px;margin-bottom:12px;"
        ><img
            alt="Icon"
            src={"/img/output-onlinepngtools.png"}
            width="24"
            height="24"
            style="margin-right:5px;"
        />IntegralsArena.tech</a
    >

    {#key currentUserInformation}
        {#if currentUserInformation != undefined}
            {#if currentUserInformation == "nouser"}
                <a href="/login" class="float-end" style="margin-right: 5px;"
                    >Login</a
                ><a
                    href="/register"
                    class="float-end"
                    style="margin-right: 5px;margin-left: 5px;">Register</a
                >
            {:else}
                <a
                    data-sveltekit-reload
                    href="/account/{currentUserInformation.displayName}"
                    class="float-end"
                    style="margin-right: 10px;margin-left: 10px;">My Profile</a
                >
            {/if}
        {/if}
    {/key}

    <nav class="navbar navbar-expand-md bg-body-secondary">
        <div class="container-fluid">
            <a
                class="navbar-brand fs-6 text-start link-body-emphasis"
                href="/"
                style="margin-top: 6px;">IntegralsArena</a
            ><button
                class="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navcol-5"
                ><span class="visually-hidden">Toggle navigation</span><span
                    class="navbar-toggler-icon"
                ></span></button
            >
            <div id="navcol-5" class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/problems/"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-pencil-fill"
                                viewBox="0 0 16 16"
                                style="margin-right:5px;"
                            >
                                <path
                                    d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"
                                />
                            </svg>Problems</a
                        >
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link" href="/competitions/"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-bar-chart-fill"
                                viewBox="0 0 16 16"
                                style="margin-right:5px;"
                            >
                                <path
                                    d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"
                                />
                            </svg>Competitions</a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/people/"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-person-fill"
                                viewBox="0 0 16 16"
                                style="margin-right:5px;"
                            >
                                <path
                                    d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
                                />
                            </svg>People</a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/faq/"
                            ><svg
                                class="bi bi-question-lg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14"
                                ></path>
                            </svg>FAQ</a
                        >
                    </li>
                    {#key currentUserInformation}
                        {#if currentUserInformation != null}
                            {#if currentUserInformation != "nouser"}
                                <li class="nav-item">
                                    <a class="nav-link" href="/settings/"
                                        ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-gear-fill"
                                            viewBox="0 0 16 16"
                                            style="margin-right:5px;"
                                        >
                                            <path
                                                d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
                                            />
                                        </svg>Settings</a
                                    >
                                </li>
                            {/if}
                        {/if}
                    {/key}
                </ul>
            </div>
        </div>
    </nav>
</header>
