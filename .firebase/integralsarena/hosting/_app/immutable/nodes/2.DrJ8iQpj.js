import{s as bt,n as ht,b as w,a as V}from"../chunks/scheduler.D_sqSeie.js";import{S as It,i as Et,e as l,t as $,s as j,c as f,a as v,b as x,d,f as N,p as y,o as p,g as Ut,h as i,j as nt,k as q,l as ct,m as dt,n as mt,q as gt,r as _t,u as pt,v as vt}from"../chunks/index.CMhCYZte.js";import{A as Ht,N as Lt,g as Mt,i as Bt,a as Vt,c as qt,d as jt,e as Nt,r as Ot}from"../chunks/Navigation.DBZ_97fb.js";function Rt(t){let s,n,g,A,u,h,U,I,b,m,o;return{c(){s=l("tr"),n=l("td"),g=$(t[0]),A=j(),u=l("td"),h=$(t[1]),U=j(),I=l("td"),b=l("a"),m=$(t[2]),this.h()},l(r){s=f(r,"TR",{});var c=v(s);n=f(c,"TD",{style:!0});var S=v(n);g=x(S,t[0]),S.forEach(d),A=N(c),u=f(c,"TD",{style:!0});var k=v(u);h=x(k,t[1]),k.forEach(d),U=N(c),I=f(c,"TD",{style:!0});var H=v(I);b=f(H,"A",{href:!0});var L=v(b);m=x(L,t[2]),L.forEach(d),H.forEach(d),c.forEach(d),this.h()},h(){y(n,"text-align","left"),y(u,"width","61.906px"),p(b,"href",o="account/"+t[2]),y(I,"width","71.938px")},m(r,c){Ut(r,s,c),i(s,n),i(n,g),i(s,A),i(s,u),i(u,h),i(s,U),i(s,I),i(I,b),i(b,m)},p(r,[c]){c&1&&nt(g,r[0]),c&2&&nt(h,r[1]),c&4&&nt(m,r[2]),c&4&&o!==(o="account/"+r[2])&&p(b,"href",o)},i:ht,o:ht,d(r){r&&d(s)}}}function zt(t,s,n){let{title:g,content:A,author:u}=s;return t.$$set=h=>{"title"in h&&n(0,g=h.title),"content"in h&&n(1,A=h.content),"author"in h&&n(2,u=h.author)},[g,A,u]}class Yt extends It{constructor(s){super(),Et(this,s,zt,Rt,bt,{title:0,content:1,author:2})}}function Gt(t){let s,n,g,A,u,h,U,I,b,m,o,r,c,S,k,H,L,P,W,T,X,F,J,C,M,a,O,D,B,Y,at='<tr><th style="text-align: left;">Announcements</th> <th></th> <th></th></tr>',tt,R,rt="",Q;function At(e){t[11](e)}function Tt(e){t[12](e)}function St(e){t[13](e)}function Dt(e){t[14](e)}function wt(e){t[15](e)}function yt(e){t[16](e)}let z={};t[1]!==void 0&&(z.currentUserInformation=t[1]),t[3]!==void 0&&(z.userAuthState=t[3]),t[4]!==void 0&&(z.signUp=t[4]),t[5]!==void 0&&(z.signIn=t[5]),t[6]!==void 0&&(z.authErrorState=t[6]),t[2]!==void 0&&(z.competitiveUserInformation=t[2]),r=new Ht({props:z}),t[10](r),w.push(()=>q(r,"currentUserInformation",At)),w.push(()=>q(r,"userAuthState",Tt)),w.push(()=>q(r,"signUp",St)),w.push(()=>q(r,"signIn",Dt)),w.push(()=>q(r,"authErrorState",wt)),w.push(()=>q(r,"competitiveUserInformation",yt));function Ct(e){t[17](e)}function kt(e){t[18](e)}let et={};return t[1]!==void 0&&(et.currentUserInformation=t[1]),t[8]!==void 0&&(et.currentColorTheme=t[8]),T=new Lt({props:et}),w.push(()=>q(T,"currentUserInformation",Ct)),w.push(()=>q(T,"currentColorTheme",kt)),{c(){s=l("html"),n=l("head"),g=l("meta"),A=j(),u=l("meta"),h=j(),U=l("title"),I=$(t[9]),b=j(),m=l("body"),o=l("div"),ct(r.$$.fragment),W=j(),ct(T.$$.fragment),J=j(),C=l("div"),M=l("div"),a=l("div"),O=l("div"),D=l("div"),B=l("table"),Y=l("thead"),Y.innerHTML=at,tt=j(),R=l("tbody"),R.innerHTML=rt,this.h()},l(e){s=f(e,"HTML",{"data-bs-theme":!0,lang:!0});var _=v(s);n=f(_,"HEAD",{});var E=v(n);g=f(E,"META",{charset:!0}),A=N(E),u=f(E,"META",{name:!0,content:!0}),h=N(E),U=f(E,"TITLE",{});var G=v(U);I=x(G,t[9]),G.forEach(d),E.forEach(d),b=N(_),m=f(_,"BODY",{class:!0,style:!0});var it=v(m);o=f(it,"DIV",{class:!0,style:!0});var K=v(o);dt(r.$$.fragment,K),W=N(K),dt(T.$$.fragment,K),J=N(K),C=f(K,"DIV",{class:!0,style:!0});var st=v(C);M=f(st,"DIV",{class:!0});var ot=v(M);a=f(ot,"DIV",{class:!0});var ut=v(a);O=f(ut,"DIV",{class:!0});var lt=v(O);D=f(lt,"DIV",{class:!0});var ft=v(D);B=f(ft,"TABLE",{class:!0});var Z=v(B);Y=f(Z,"THEAD",{"data-svelte-h":!0}),mt(Y)!=="svelte-1cmkqft"&&(Y.innerHTML=at),tt=N(Z),R=f(Z,"TBODY",{"data-svelte-h":!0}),mt(R)!=="svelte-78fyru"&&(R.innerHTML=rt),Z.forEach(d),ft.forEach(d),lt.forEach(d),ut.forEach(d),ot.forEach(d),st.forEach(d),K.forEach(d),it.forEach(d),_.forEach(d),this.h()},h(){p(g,"charset","utf-8"),p(u,"name","viewport"),p(u,"content","width=device-width, initial-scale=1.0, shrink-to-fit=no"),p(B,"class","table"),p(D,"class","table-responsive"),p(O,"class","col"),p(a,"class","row"),p(M,"class","card-body"),p(C,"class","card"),y(C,"margin-top","0px"),p(o,"class","container"),y(o,"text-align","center"),y(o,"background","transparent"),y(o,"color","transparent"),y(o,"max-width","1000px"),p(m,"class","bg-body"),y(m,"background","var(--bs-secondary-bg)"),y(m,"color","var(--bs-card-bg)"),p(s,"data-bs-theme",t[8]),p(s,"lang","en")},m(e,_){Ut(e,s,_),i(s,n),i(n,g),i(n,A),i(n,u),i(n,h),i(n,U),i(U,I),i(s,b),i(s,m),i(m,o),gt(r,o,null),i(o,W),gt(T,o,null),i(o,J),i(o,C),i(C,M),i(M,a),i(a,O),i(O,D),i(D,B),i(B,Y),i(B,tt),i(B,R),t[19](R),Q=!0},p(e,[_]){const E={};!c&&_&2&&(c=!0,E.currentUserInformation=e[1],V(()=>c=!1)),!S&&_&8&&(S=!0,E.userAuthState=e[3],V(()=>S=!1)),!k&&_&16&&(k=!0,E.signUp=e[4],V(()=>k=!1)),!H&&_&32&&(H=!0,E.signIn=e[5],V(()=>H=!1)),!L&&_&64&&(L=!0,E.authErrorState=e[6],V(()=>L=!1)),!P&&_&4&&(P=!0,E.competitiveUserInformation=e[2],V(()=>P=!1)),r.$set(E);const G={};!X&&_&2&&(X=!0,G.currentUserInformation=e[1],V(()=>X=!1)),!F&&_&256&&(F=!0,G.currentColorTheme=e[8],V(()=>F=!1)),T.$set(G),(!Q||_&256)&&p(s,"data-bs-theme",e[8])},i(e){Q||(_t(r.$$.fragment,e),_t(T.$$.fragment,e),Q=!0)},o(e){pt(r.$$.fragment,e),pt(T.$$.fragment,e),Q=!1},d(e){e&&d(s),t[10](null),vt(r),vt(T),t[19](null)}}}function Kt(t,s,n){let g,A="IntegralsArena",u,h,U,I,b,m,o,r="light";const c={apiKey:"AIzaSyDiDHodqqgXhmjtaharNv0yCLBnc-kDWe0",authDomain:"integralsarena.firebaseapp.com",projectId:"integralsarena",storageBucket:"integralsarena.appspot.com",messagingSenderId:"978478141428",appId:"1:978478141428:web:f3566e7bc6ea602177b3a1",measurementId:"G-N5T6SMBHL2"};let S;Mt().length===0?S=Bt(c):S=Vt();const k=qt(S);jt(Nt(Ot(k),"/announcements/")).then(a=>{if(a.exists())for(const[O,D]of Object.entries(a.val()))new Yt({target:o,props:{title:D.title,author:D.author,content:D.content}})});function H(a){w[a?"unshift":"push"](()=>{g=a,n(0,g)})}function L(a){u=a,n(1,u)}function P(a){U=a,n(3,U)}function W(a){I=a,n(4,I)}function T(a){b=a,n(5,b)}function X(a){m=a,n(6,m)}function F(a){h=a,n(2,h)}function J(a){u=a,n(1,u)}function C(a){r=a,n(8,r)}function M(a){w[a?"unshift":"push"](()=>{o=a,n(7,o)})}return[g,u,h,U,I,b,m,o,r,A,H,L,P,W,T,X,F,J,C,M]}class Ft extends It{constructor(s){super(),Et(this,s,Kt,Gt,bt,{})}}export{Ft as component};
