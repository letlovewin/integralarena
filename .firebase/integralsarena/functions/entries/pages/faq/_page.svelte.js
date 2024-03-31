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
    )} <div class="card" style="margin-top: 0px;" data-svelte-h="svelte-kjv5sl"><div class="card-body"><h4 style="text-align:left;">FAQ</h4> <ul style="text-align:left;"><li><strong>On indefinite integrals, do I have to include
                                the constant of integration?</strong></li> <p>Don&#39;t include the constant of integration, you will
                            be marked wrong by the virtual judge!</p> <li><strong>When are new problems added?</strong></li> <p><a href="mailto:portughalam@gmail.com">Email me</a> and
                            submit more problems. Please include where you got the
                            problem from.</p> <li><strong>What format do I submit answers in?</strong></li> <p>They should be in the same format that you&#39;d type in
                            expressions on a scientific calculator. For example,
                            <math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>cos</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> should be written as (2/3)*cos(x) if you&#39;re doing an answer submission. Unforunately, the virtual judge only supports raw expressions like these at the moment.</p> <li><strong>What do the different verdicts mean?</strong></li> <p><span class="text-danger">RJ</span> - Your submission was rejected.</p> <p><span class="text-success">AC</span> - Your submission was accepted.</p> <p>You can see all of your submissions on your profile. The last 10, anyway.</p> <li><strong>What can I put in my battle cry?</strong></li> <p>Literally anything. You can put emojis, images, whatever.</p></ul></div></div></div></body> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</html>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
