import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/stores.js";
import { A as Auth, N as Navigation } from "../../../chunks/Navigation.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let webAppAuthComponent, webAppTitleState = "IntegralsArena", currentUserInformation, competitiveUserInformation, userAuthState, signUp, signIn, authErrorState, currentColorTheme;
  let emailInputField, passwordInputField;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<html${add_attribute("data-bs-theme", currentColorTheme, 0)} lang="en" style><head><meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"> <title>${escape(webAppTitleState)}</title></head> <body>${validate_component(Auth, "Auth").$$render(
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
    )} <div class="container" style="text-align: center;background: transparent;color: transparent;max-width: 1000px;">${validate_component(Navigation, "Navigation").$$render(
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
    )} <h4 style="color: var(--bs-emphasis-color);text-align: left;" data-svelte-h="svelte-duvfjk">Login</h4> <div class="input-group"></div> <hr style="color: var(--bs-emphasis-color);"> <div class="container vstack"><div class="input-group mb-3"><input type="text" class="form-control" placeholder="Email" aria-label="Email"${add_attribute("this", emailInputField, 0)}></div> <div class="input-group mb-3"><input type="password" class="form-control" placeholder="Password" aria-label="Password"${add_attribute("this", passwordInputField, 0)}></div>  <p style="color: var(--bs-form-invalid-border-color);margin-top: 4px;">${escape(authErrorState)}</p></div> <button class="btn btn-primary" data-svelte-h="svelte-4og2ga">Login</button></div></body></html>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
