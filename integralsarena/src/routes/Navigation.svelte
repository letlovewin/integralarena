<script>
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";

    function nav(url) {
        if (browser) {
            goto(url);
        }
    }

    export let currentUserInformation;
</script>

<header
    class="text-start bg-body"
    style="margin-top: 12px;margin-bottom: 12px;padding-top: 0px;padding-bottom: 0px;"
>
    <a
        class="navbar-brand fs-4 text-start link-body-emphasis"
        href="/"
        style="margin-top: 6px;"
        ><img
            alt="Icon"
            src={"/img/output-onlinepngtools.png"}
            width="28"
            height="28"
            style="margin-right: 5px;"
        />IntegralsArena</a
    >
    {#key currentUserInformation}
        {#if currentUserInformation === "nouser"}
            <a href="/login" style="margin-right: 10px;margin-left: 10px;"
                >Login</a
            ><a href="/register" style="margin-right: 10px;margin-left: 10px;"
                >Register</a
            >
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
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/problems/"
                            ><svg
                                class="bi bi-pencil"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                style="margin-left: 0px;margin-right: 5px;"
                            >
                                <path
                                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                                ></path>
                            </svg>Problems</a
                        >
                    </li>
                    {#key currentUserInformation}
                        {#if currentUserInformation!="nouser"}
                            <li class="nav-item">
                                <a class="nav-link" href="/settings/"
                                    ><svg
                                        class="bi bi-gear"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        style="margin-right: 5px;"
                                    >
                                        <path
                                            d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"
                                        ></path>
                                        <path
                                            d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"
                                        ></path>
                                    </svg>Settings</a
                                >
                            </li>
                        {/if}
                    {/key}
                </ul>
            </div>
        </div>
    </nav>
</header>
