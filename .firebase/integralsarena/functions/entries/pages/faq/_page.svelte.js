import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import "firebase/app";
import "firebase/database";
import { A as Auth, N as Navigation, F as Footer } from "../../../chunks/Footer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let webAppAuthComponent, webAppTitleState = "IntegralsArena", currentUserInformation, competitiveUserInformation, userAuthState, signUp, signIn, authErrorState, currentColorTheme = "light";
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
    )} <div class="card" style="margin-top: 0px;" data-svelte-h="svelte-1j6m77c"><div class="card-body"><h4 style="text-align:left;">FAQ</h4> <ul style="text-align:left;"><li><strong>On indefinite integrals, do I have to include
                                the constant of integration?</strong></li> <p>Yes, include them.</p> <li><strong>When are new problems added?</strong></li> <p><a href="mailto:portughalam@gmail.com">Email me</a> and
                            submit more problems. Please include where you got the
                            problem from.</p> <li><strong>What format do I submit answers in?</strong></li> <p>Formatting is mostly the same. Please look at <a href="https://mathjs.org/docs/expressions/syntax.html">this document</a> to know the formatting in its entirety, though.</p> <li><strong>What do the different verdicts mean?</strong></li> <p><span class="text-danger">RJ</span> - Your submission was rejected.</p> <p><span class="text-success">AC</span> - Your submission was accepted.</p> <p>You can see all of your submissions on your profile.</p> <li><strong>What can I put in my battle cry?</strong></li> <p>Literally anything. You can put emojis, images, whatever.</p></ul></div></div></div></body> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</html>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
