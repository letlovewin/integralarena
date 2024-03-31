import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape } from "./ssr.js";
import { getApps, initializeApp, getApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, AuthErrorCodes, sendEmailVerification } from "firebase/auth";
import { getDatabase, ref, onValue, get, set } from "firebase/database";
import { p as page } from "./stores.js";
const createAccountUrl = "https://createaccount-33v4mh7ysq-uc.a.run.app";
const Auth = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const firebaseConfig = {
    apiKey: "AIzaSyDiDHodqqgXhmjtaharNv0yCLBnc-kDWe0",
    authDomain: "integralsarena.firebaseapp.com",
    projectId: "integralsarena",
    storageBucket: "integralsarena.appspot.com",
    messagingSenderId: "978478141428",
    appId: "1:978478141428:web:f3566e7bc6ea602177b3a1",
    measurementId: "G-N5T6SMBHL2"
  };
  let { firebaseApp, firebaseAuth, firebaseDatabase, currentUserInformation = null, authErrorState = "", userAuthState, competitiveUserInformation = { elo: "NILL" }, appConfig } = $$props;
  appConfig = firebaseConfig;
  if (getApps().length === 0) {
    firebaseApp = initializeApp(firebaseConfig);
  } else {
    firebaseApp = getApp();
  }
  firebaseAuth = getAuth(firebaseApp);
  firebaseDatabase = getDatabase(firebaseApp);
  setPersistence(firebaseAuth, browserLocalPersistence);
  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) {
      userAuthState = true;
      currentUserInformation = user.toJSON();
      const compInfoRef = ref(firebaseDatabase, `users/${user.uid}`);
      onValue(compInfoRef, (snapshot) => {
        competitiveUserInformation = snapshot.val();
      });
    } else {
      userAuthState = false;
      currentUserInformation = "nouser";
      if ($page.route.id === "/settings")
        ;
    }
  });
  const resetPassword = async function(email) {
    sendPasswordResetEmail(firebaseAuth, email).then(() => {
    }).catch((error) => {
      authErrorState = "An unknown error occurred. Please reload the website and try again";
    });
  };
  const saveChangesOnSettings = async function(inst) {
    if (userAuthState) {
      const userInfoRef = ref(firebaseDatabase, `users/${currentUserInformation.uid}`);
      get(userInfoRef).then((userInformation) => {
        let old_inst = userInformation.val().institution;
        if (old_inst == inst)
          ;
        else {
          if (userInformation.val().submissions != void 0 && userInformation.val().solved_problems != void 0) {
            set(
              ref(firebaseDatabase, `users/${currentUserInformation.uid}`),
              {
                elo: userInformation.val().elo,
                uid: userInformation.val().uid,
                username: userInformation.val().username,
                battle_cry: inst,
                submissions: userInformation.val().submissions,
                solved_problems: userInformation.val().solved_problems
              }
            );
          } else {
            set(ref(firebaseDatabase, `users/${currentUserInformation.uid}`), {
              elo: userInformation.val().elo,
              uid: userInformation.val().uid,
              username: userInformation.val().username,
              battle_cry: inst
            });
          }
        }
      });
    }
  };
  const signIn = function(email, password) {
    authErrorState = "";
    if (!(email && password)) {
      authErrorState = "Please fill all fields";
      return;
    }
    signInWithEmailAndPassword(firebaseAuth, email, password).then((user) => {
    }).catch((error) => {
      let code = error.code;
      if (code == AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
        authErrorState = "Incorrect email or password";
      } else if (code == AuthErrorCodes.INVALID_EMAIL) {
        authErrorState = "Invalid email";
      }
    });
  };
  const sendVerificationEmail = function() {
    if (currentUserInformation != void 0 && firebaseAuth.currentUser != void 0) {
      sendEmailVerification(firebaseAuth.currentUser);
    }
  };
  const signUp = function(username, email, password, confirmPassword) {
    authErrorState = "";
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
      authErrorState = "Please fill all fields";
      return;
    }
    if (password != confirmPassword) {
      authErrorState = "Both passwords must match";
      return;
    }
    fetch(createAccountUrl, {
      method: "POST",
      body: JSON.stringify({
        body_username: username,
        body_password: password,
        body_email: email
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then((code) => {
      return code.json();
    }).then((Res) => {
      let code = Res.error_code;
      if (code == AuthErrorCodes.EMAIL_EXISTS) {
        authErrorState = "Email already in use";
      } else if (code == AuthErrorCodes.INTERNAL_ERROR) {
        authErrorState = "Unknown error, please try again";
      } else if (code == AuthErrorCodes.INVALID_EMAIL) {
        authErrorState = "Please enter a valid email";
      } else if (code == AuthErrorCodes.INVALID_PASSWORD) {
        authErrorState = "Password is too weak";
      } else if (code == "error-username-invalid") {
        authErrorState = "Username must be 3-20 characters and be alphanumeric";
      } else if (code == "error-username-in-use") {
        authErrorState = "Username already in use";
      } else if (code == "ok") {
        signInWithEmailAndPassword(firebaseAuth, email, password).then((user) => {
          sendEmailVerification();
        });
      }
    });
  };
  if ($$props.firebaseApp === void 0 && $$bindings.firebaseApp && firebaseApp !== void 0)
    $$bindings.firebaseApp(firebaseApp);
  if ($$props.firebaseAuth === void 0 && $$bindings.firebaseAuth && firebaseAuth !== void 0)
    $$bindings.firebaseAuth(firebaseAuth);
  if ($$props.firebaseDatabase === void 0 && $$bindings.firebaseDatabase && firebaseDatabase !== void 0)
    $$bindings.firebaseDatabase(firebaseDatabase);
  if ($$props.currentUserInformation === void 0 && $$bindings.currentUserInformation && currentUserInformation !== void 0)
    $$bindings.currentUserInformation(currentUserInformation);
  if ($$props.authErrorState === void 0 && $$bindings.authErrorState && authErrorState !== void 0)
    $$bindings.authErrorState(authErrorState);
  if ($$props.userAuthState === void 0 && $$bindings.userAuthState && userAuthState !== void 0)
    $$bindings.userAuthState(userAuthState);
  if ($$props.competitiveUserInformation === void 0 && $$bindings.competitiveUserInformation && competitiveUserInformation !== void 0)
    $$bindings.competitiveUserInformation(competitiveUserInformation);
  if ($$props.appConfig === void 0 && $$bindings.appConfig && appConfig !== void 0)
    $$bindings.appConfig(appConfig);
  if ($$props.resetPassword === void 0 && $$bindings.resetPassword && resetPassword !== void 0)
    $$bindings.resetPassword(resetPassword);
  if ($$props.saveChangesOnSettings === void 0 && $$bindings.saveChangesOnSettings && saveChangesOnSettings !== void 0)
    $$bindings.saveChangesOnSettings(saveChangesOnSettings);
  if ($$props.signIn === void 0 && $$bindings.signIn && signIn !== void 0)
    $$bindings.signIn(signIn);
  if ($$props.sendVerificationEmail === void 0 && $$bindings.sendVerificationEmail && sendVerificationEmail !== void 0)
    $$bindings.sendVerificationEmail(sendVerificationEmail);
  if ($$props.signUp === void 0 && $$bindings.signUp && signUp !== void 0)
    $$bindings.signUp(signUp);
  $$unsubscribe_page();
  return `<div></div>`;
});
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentUserInformation, currentColorTheme } = $$props;
  if ($$props.currentUserInformation === void 0 && $$bindings.currentUserInformation && currentUserInformation !== void 0)
    $$bindings.currentUserInformation(currentUserInformation);
  if ($$props.currentColorTheme === void 0 && $$bindings.currentColorTheme && currentColorTheme !== void 0)
    $$bindings.currentColorTheme(currentColorTheme);
  return `${$$result.head += `<!-- HEAD_svelte-1at4czf_START --><script src="/bootstrap/js/bootstrap.min.js" data-svelte-h="svelte-16qunse"><\/script><!-- HEAD_svelte-1at4czf_END -->`, ""} <header class="text-start bg-body" style="margin-top: 12px;margin-bottom: 12px;padding-top: 0px;padding-bottom: 0px;"><a class="navbar-brand fs-4 text-start link-body-emphasis" href="/" style="margin-top: 4px;margin-bottom:8px;" data-svelte-h="svelte-lk4w77"><img alt="Icon"${add_attribute("src", "/img/output-onlinepngtools.png", 0)} width="28" height="28" style="margin-right: 5px;">IntegralsArena</a> ${currentUserInformation != void 0 ? `${currentUserInformation == "nouser" ? `<a href="/login" class="float-end" style="margin-right: 10px;margin-left: 10px;" data-svelte-h="svelte-a98njl">Login</a><a href="/register" class="float-end" style="margin-right: 10px;margin-left: 10px;" data-svelte-h="svelte-neo40f">Register</a>` : `<a data-sveltekit-reload href="${"/account/" + escape(currentUserInformation.displayName, true)}" class="float-end" style="margin-right: 10px;margin-left: 10px;">My Profile</a>`}` : ``} <nav class="navbar navbar-expand-md bg-body-secondary"><div class="container-fluid"><a class="navbar-brand fs-6 text-start link-body-emphasis" href="/" style="margin-top: 6px;" data-svelte-h="svelte-takzht">IntegralsArena</a><button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-5" data-svelte-h="svelte-1l12zdd"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button> <div id="navcol-5" class="collapse navbar-collapse"><ul class="navbar-nav"><li class="nav-item" data-svelte-h="svelte-1mf1z0s"><a class="nav-link" href="/problems/"><svg class="bi bi-pencil" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" style="margin-left: 0px;margin-right: 5px;"><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"></path></svg>Problems</a></li> <li class="nav-item" data-svelte-h="svelte-10omlde"><a class="nav-link" href="/faq/"><svg class="bi bi-question-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14"></path></svg>FAQ</a></li> <li class="nav-item" data-svelte-h="svelte-1y040ha"><a class="nav-link" href="/people/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"></path></svg>People</a></li> ${currentUserInformation != null ? `${currentUserInformation != "nouser" ? `<li class="nav-item" data-svelte-h="svelte-1n3ayqq"><a class="nav-link" href="/settings/"><svg class="bi bi-gear" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" style="margin-right: 5px;"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"></path><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"></path></svg>Settings</a></li>` : ``}` : ``}</ul></div></div></nav></header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer data-svelte-h="svelte-16ncbu0"><div class="text-center"><p class="text-secondary">IntegralsArena | <a href="https://letlovewin.github.io">letlovewin.github.io</a> | <a href="https://github.com/letlovewin/integralarena">An open source project</a></p></div></footer>`;
});
export {
  Auth as A,
  Footer as F,
  Navigation as N
};
