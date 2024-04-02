import { c as create_ssr_component, e as escape, v as validate_component, d as add_attribute } from "../../../chunks/ssr.js";
import "../../../chunks/stores.js";
import { A as Auth, N as Navigation, F as Footer } from "../../../chunks/Footer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let webAppAuthComponent, webAppTitleState = "IntegralsArena", currentUserInformation, competitiveUserInformation, userAuthState, signUp, signIn, authErrorState, currentColorTheme = "light";
  let usernameInputField, emailInputField, passwordInputField, confirmPasswordInputField;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-i1ljz8_START --><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">${$$result.title = `<title>${escape(webAppTitleState)}</title>`, ""}<!-- HEAD_svelte-i1ljz8_END -->`, ""} ${validate_component(Auth, "Auth").$$render(
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
    )} <h4 style="color: var(--bs-emphasis-color);text-align: left;" data-svelte-h="svelte-1cdj1b8">Register</h4> <div class="input-group"></div> <hr style="color: var(--bs-emphasis-color);"> <div class="container vstack"><div class="input-group mb-3"><input type="text" class="form-control" placeholder="Username" aria-label="Username"${add_attribute("this", usernameInputField, 0)}></div> <div class="input-group mb-3"><input type="text" class="form-control" placeholder="Email" aria-label="Email"${add_attribute("this", emailInputField, 0)}></div> <div class="input-group mb-3"><input type="password" class="form-control" placeholder="Password" aria-label="Password"${add_attribute("this", passwordInputField, 0)}></div> <div class="input-group mb-3"><input type="password" class="form-control" placeholder="Confirm password" aria-label="Confirm password"${add_attribute("this", confirmPasswordInputField, 0)}></div>  <p style="color: var(--bs-form-invalid-border-color);margin-top: 4px;">${escape(authErrorState)}</p></div> <button class="btn btn-primary" data-svelte-h="svelte-1oad8er">Register</button></div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
