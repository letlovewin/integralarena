import { c as create_ssr_component, e as escape, v as validate_component, i as is_promise, n as noop, d as add_attribute } from "../../../chunks/ssr.js";
import { getApps, initializeApp, getApp } from "firebase/app";
import "firebase/database";
import { A as Auth, N as Navigation, F as Footer } from "../../../chunks/Footer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let webAppAuthComponent, webAppTitleState = "IntegralsArena", currentUserInformation, competitiveUserInformation, userAuthState, signUp, signIn, authErrorState, problemsRow, currentColorTheme = "light";
  const appConfig = {
    apiKey: "AIzaSyDiDHodqqgXhmjtaharNv0yCLBnc-kDWe0",
    authDomain: "integralsarena.firebaseapp.com",
    projectId: "integralsarena",
    storageBucket: "integralsarena.appspot.com",
    messagingSenderId: "978478141428",
    appId: "1:978478141428:web:f3566e7bc6ea602177b3a1",
    measurementId: "G-N5T6SMBHL2"
  };
  if (getApps().length === 0) {
    initializeApp(appConfig);
  } else {
    getApp();
  }
  let problems = [];
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-i1ljz8_START --><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">${$$result.title = `<title>${escape(webAppTitleState)}</title>`, ""}<!-- HEAD_svelte-i1ljz8_END -->`, ""} <div class="container" style="text-align: center;background: transparent;color: transparent;max-width: 1000px;">${validate_component(Auth, "Auth").$$render(
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
    )} <div class="card" style="margin-top: 0px;"><div class="card-body"><h4 style="text-align: left;" data-svelte-h="svelte-1gkpsen">Problems</h4> <div class="row"><div class="col"><div class="table-responsive"><table class="table table-striped table-hover"><thead data-svelte-h="svelte-195srak"><tr><th style="text-align: left;width: 111.188px;">Link</th> <th style="text-align: left;width: 111.188px;">Rating</th> <th style="text-align: center;width: 695.188px;">Problem</th> <th>Origin</th></tr></thead> ${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ` <p data-svelte-h="svelte-pf4dju">Loading problems...</p> `;
      }
      return function() {
        return ` <tbody${add_attribute("this", problemsRow, 0)} data-svelte-h="svelte-9bz9z8"></tbody> `;
      }();
    }(problems)}</table></div></div></div></div></div></div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
