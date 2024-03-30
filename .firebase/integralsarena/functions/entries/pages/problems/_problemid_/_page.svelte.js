import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../../../chunks/ssr.js";
import { getApps, initializeApp, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import "../../../../chunks/stores.js";
import { A as Auth, N as Navigation } from "../../../../chunks/Navigation.js";
import "@cortex-js/compute-engine";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let webAppAuthComponent, webAppTitleState = "IntegralsArena", currentUserInformation, competitiveUserInformation, userAuthState, signUp, signIn, authErrorState, currentColorTheme = "light", mathematicalExpressionInput, verdictBody;
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
  data.information.title;
  let statement = "";
  let title = "";
  let rating = 0;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<html${add_attribute("data-bs-theme", currentColorTheme, 0)} lang="en"><head><meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"> <script defer src="//unpkg.com/mathlive" data-svelte-h="svelte-l0rqga"><\/script> <script src="https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.0.3/tsparticles.confetti.bundle.min.js" data-svelte-h="svelte-1mkpkuv"><\/script> <title>${escape(webAppTitleState)}</title></head> <body class="bg-body" style="background: var(--bs-secondary-bg);color: var(--bs-card-bg);"><div class="container" style="text-align: center;background: transparent;color: transparent;max-width: 1000px;">${validate_component(Auth, "Auth").$$render(
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
    )} <div class="card" style="margin-top: 0px;"><div class="card-body float-end"${add_attribute("this", verdictBody, 0)}><h1><!-- HTML_TAG_START -->${statement}<!-- HTML_TAG_END --></h1> <h6>${escape(title)}</h6> <h5>Rating: ${escape(rating)}</h5> <input type="text"${add_attribute("this", mathematicalExpressionInput, 0)}> <button class="btn btn-primary" data-svelte-h="svelte-1e9qe2b">Submit</button></div></div></div></body></html>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
