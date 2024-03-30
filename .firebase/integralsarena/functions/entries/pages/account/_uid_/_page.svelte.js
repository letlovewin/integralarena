import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../../../chunks/ssr.js";
import { getApps, initializeApp, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import "../../../../chunks/stores.js";
import { A as Auth, N as Navigation } from "../../../../chunks/Navigation.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let webAppAuthComponent, webAppTitleState = "IntegralsArena", currentUserInformation, competitiveUserInformation, userAuthState, signUp, signIn, authErrorState, currentColorTheme = "light", submissionsTable, givenTitle;
  const firebaseConfig = {
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
    firebaseApp = initializeApp(firebaseConfig);
  } else {
    firebaseApp = getApp();
  }
  getDatabase(firebaseApp);
  let { data } = $$props;
  let username = data.information.username;
  let institution = "";
  let rating = 0;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
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
        competitiveUserInformation
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
    )} <div class="card" style="margin-top: 0px;"><div class="card-body"><h3 style="text-align: left;"><strong>${escape(username)}</strong></h3> <!-- HTML_TAG_START -->${givenTitle}<!-- HTML_TAG_END --> <blockquote><em><!-- HTML_TAG_START -->${institution}<!-- HTML_TAG_END --></em></blockquote> <h6 style="text-align: left;">Elo: ${escape(rating)}</h6> <p data-svelte-h="svelte-1t336m5">Submissions</p> <div class="table-responsive"><table class="table table-striped"><thead data-svelte-h="svelte-1vo7axd"><tr><th>Date</th> <th>Problem</th> <th style="width: 145.312px;">Verdict</th></tr></thead> <tbody${add_attribute("this", submissionsTable, 0)}></tbody></table></div></div></div></div></body></html>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
