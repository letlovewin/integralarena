import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/stores.js";
import { getApps, initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { A as Auth, N as Navigation, F as Footer } from "../../../chunks/Footer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let webAppAuthComponent, webAppTitleState = "IntegralsArena", currentUserInformation, competitiveUserInformation, userAuthState, signUp, signIn, authErrorState, instField, sendVerificationEmail, saveChangesOnSettings, currentColorTheme = "light", settingsBody;
  const appConfig = {
    apiKey: "AIzaSyDiDHodqqgXhmjtaharNv0yCLBnc-kDWe0",
    authDomain: "integralsarena.firebaseapp.com",
    projectId: "integralsarena",
    storageBucket: "integralsarena.appspot.com",
    messagingSenderId: "978478141428",
    appId: "1:978478141428:web:f3566e7bc6ea602177b3a1",
    measurementId: "G-N5T6SMBHL2"
  };
  let firebaseApp;
  if (getApps().length === 0) {
    firebaseApp = initializeApp(appConfig);
  } else {
    firebaseApp = getApp();
  }
  getAuth(firebaseApp);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<html${add_attribute("data-bs-theme", currentColorTheme, 0)} lang="en"><head><meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"> <title>${escape(webAppTitleState)}</title></head> <body class="bg-body" style="background: var(--bs-secondary-bg);color: var(--bs-card-bg);"><div class="container" style="text-align: center;background: transparent;color: transparent;max-width: 1000px;">${validate_component(Auth, "Auth").$$render(
      $$result,
      {
        this: webAppAuthComponent,
        currentUserInformation,
        userAuthState,
        signUp,
        signIn,
        authErrorState,
        competitiveUserInformation,
        sendVerificationEmail,
        saveChangesOnSettings
      },
      {
        this: ($$value) => {
          webAppAuthComponent = $$value;
          $$settled = false;
        },
        currentUserInformation: ($$value) => {
          currentUserInformation = $$value;
          $$settled = false;
        },
        userAuthState: ($$value) => {
          userAuthState = $$value;
          $$settled = false;
        },
        signUp: ($$value) => {
          signUp = $$value;
          $$settled = false;
        },
        signIn: ($$value) => {
          signIn = $$value;
          $$settled = false;
        },
        authErrorState: ($$value) => {
          authErrorState = $$value;
          $$settled = false;
        },
        competitiveUserInformation: ($$value) => {
          competitiveUserInformation = $$value;
          $$settled = false;
        },
        sendVerificationEmail: ($$value) => {
          sendVerificationEmail = $$value;
          $$settled = false;
        },
        saveChangesOnSettings: ($$value) => {
          saveChangesOnSettings = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Navigation, "Navigation").$$render(
      $$result,
      {
        currentUserInformation,
        currentColorTheme
      },
      {
        currentUserInformation: ($$value) => {
          currentUserInformation = $$value;
          $$settled = false;
        },
        currentColorTheme: ($$value) => {
          currentColorTheme = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="card" style="margin-top: 0px;"><div class="card-body"${add_attribute("this", settingsBody, 0)}><h4 style="text-align: left;" data-svelte-h="svelte-7abwi2">Settings</h4> ${currentUserInformation != null ? `${currentUserInformation != "nouser" ? `<div class="container text-center text-wrap p-5 w-75">${!currentUserInformation.emailVerified ? `<h3 data-svelte-h="svelte-1uyq26x">Your email isn&#39;t verified!</h3> <p data-svelte-h="svelte-dlmgwh">You won&#39;t be able to make any
                                            changes to your account until you
                                            verify your email.</p> <p data-svelte-h="svelte-1aoq588">If you don&#39;t see an email from us,
                                            look in your junk folder, or click
                                            the button below. If you mistakenly
                                            signed up with a wrong email, <a href="mailto:portughalam@gmail.com">contact me</a>.</p> <button class="btn btn-sm text-primary" style="background-transparency:100%" data-svelte-h="svelte-kc2bq4">Send me a verification email</button> <button class="btn btn-outline-secondary" data-svelte-h="svelte-15r89kl">Log Out</button>` : `<p class="text-wrap">UID: ${escape(currentUserInformation.uid)}</p> <div class="input-group mb-3"><span class="input-group-text" id="username-addon" data-svelte-h="svelte-13yd4um">@</span> <input type="text" class="form-control"${add_attribute("placeholder", currentUserInformation.displayName, 0)}${add_attribute("aria-label", currentUserInformation.displayName, 0)} aria-describedby="username-addon" disabled></div> <div class="input-group mb-3"><input type="text" class="form-control" placeholder="Battle Cry" aria-label="Battle Cry"${add_attribute("value", instField, 0)}></div> <button class="btn btn-primary" data-svelte-h="svelte-1iqwzbf">Save changes</button> <button class="btn btn-outline-secondary" data-svelte-h="svelte-15r89kl">Log Out</button>`}</div>` : ``}` : ``}</div></div></div></body> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</html>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
