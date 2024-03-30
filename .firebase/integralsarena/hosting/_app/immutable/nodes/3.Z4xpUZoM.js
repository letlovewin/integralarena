import{s as Re,n as De,b as D,a as P}from"../chunks/scheduler.D_sqSeie.js";import{S as Ge,i as Ke,e as d,t as N,s as A,c,a as g,b as L,d as h,f as S,g as ae,h as r,j as re,o as T,k as R,l as je,H as He,m as Ne,z as Le,n as Me,p as H,q as Oe,r as qe,u as Be,v as Ve}from"../chunks/index.CMhCYZte.js";import{A as xe,N as et,g as tt,i as nt,a as at,c as rt,o as it,r as Ee,d as ze,e as st}from"../chunks/Navigation.DBZ_97fb.js";import{g as ot}from"../chunks/entry.BYlfhTy_.js";function lt({params:e}){let t=e.uid;if(t!="+layout.svelte")return{information:{username:t}}}const It=Object.freeze(Object.defineProperty({__proto__:null,load:lt},Symbol.toStringTag,{value:"Module"}));function ut(e){let t,n;return{c(){t=d("td"),n=N(e[2])},l(a){t=c(a,"TD",{});var o=g(t);n=L(o,e[2]),o.forEach(h)},m(a,o){ae(a,t,o),r(t,n)},p(a,o){o&4&&re(n,a[2])},d(a){a&&h(t)}}}function ft(e){let t,n,a,o;return{c(){t=d("td"),n=d("a"),a=N(e[2]),this.h()},l(f){t=c(f,"TD",{});var m=g(t);n=c(m,"A",{href:!0});var I=g(n);a=L(I,e[2]),I.forEach(h),m.forEach(h),this.h()},h(){T(n,"href",o="/problems/"+e[2]+"/")},m(f,m){ae(f,t,m),r(t,n),r(n,a)},p(f,m){m&4&&re(a,f[2]),m&4&&o!==(o="/problems/"+f[2]+"/")&&T(n,"href",o)},d(f){f&&h(t)}}}function ht(e){let t,n;return{c(){t=d("td"),n=N(e[0]),this.h()},l(a){t=c(a,"TD",{class:!0});var o=g(t);n=L(o,e[0]),o.forEach(h),this.h()},h(){T(t,"class","text-success")},m(a,o){ae(a,t,o),r(t,n)},p(a,o){o&1&&re(n,a[0])},d(a){a&&h(t)}}}function dt(e){let t,n;return{c(){t=d("td"),n=N(e[0]),this.h()},l(a){t=c(a,"TD",{class:!0});var o=g(t);n=L(o,e[0]),o.forEach(h),this.h()},h(){T(t,"class","text-danger")},m(a,o){ae(a,t,o),r(t,n)},p(a,o){o&1&&re(n,a[0])},d(a){a&&h(t)}}}function ct(e){let t,n,a,o,f;function m(i,_){return i[2]!="No submissions yet..."?ft:ut}let I=m(e),p=I(e);function C(i,_){if(i[0]=="RJ")return dt;if(i[0]=="AC")return ht}let b=C(e),l=b&&b(e);return{c(){t=d("tr"),n=d("td"),a=N(e[1]),o=A(),p.c(),f=A(),l&&l.c()},l(i){t=c(i,"TR",{});var _=g(t);n=c(_,"TD",{});var M=g(n);a=L(M,e[1]),M.forEach(h),o=S(_),p.l(_),f=S(_),l&&l.l(_),_.forEach(h)},m(i,_){ae(i,t,_),r(t,n),r(n,a),r(t,o),p.m(t,null),r(t,f),l&&l.m(t,null)},p(i,[_]){_&2&&re(a,i[1]),I===(I=m(i))&&p?p.p(i,_):(p.d(1),p=I(i),p&&(p.c(),p.m(t,f))),b===(b=C(i))&&l?l.p(i,_):(l&&l.d(1),l=b&&b(i),l&&(l.c(),l.m(t,null)))},i:De,o:De,d(i){i&&h(t),p.d(),l&&l.d()}}}function mt(e,t,n){let{verdict:a,date:o,problem:f}=t;return e.$$set=m=>{"verdict"in m&&n(0,a=m.verdict),"date"in m&&n(1,o=m.date),"problem"in m&&n(2,f=m.problem)},[a,o,f]}class Pe extends Ge{constructor(t){super(),Ke(this,t,mt,ct,Re,{verdict:0,date:1,problem:2})}}function _t(e){let t,n,a,o,f,m,I,p,C,b,l,i,_,M,G,K,W,Z,O,y,ie,se,oe,j,E,q,Y,le,ue,J,u,k,Q,B,ce,X,me,he,_e,$,Ie="Submissions",ge,x,V,ee,Te='<tr><th>Date</th> <th>Problem</th> <th style="width: 145.312px;">Verdict</th></tr>',pe,fe,z;function We(s){e[16](s)}function Ye(s){e[17](s)}function Je(s){e[18](s)}function Qe(s){e[19](s)}function Xe(s){e[20](s)}function Fe(s){e[21](s)}let F={};e[1]!==void 0&&(F.currentUserInformation=e[1]),e[3]!==void 0&&(F.userAuthState=e[3]),e[4]!==void 0&&(F.signUp=e[4]),e[5]!==void 0&&(F.signIn=e[5]),e[6]!==void 0&&(F.authErrorState=e[6]),e[2]!==void 0&&(F.competitiveUserInformation=e[2]),i=new xe({props:F}),e[15](i),D.push(()=>R(i,"currentUserInformation",We)),D.push(()=>R(i,"userAuthState",Ye)),D.push(()=>R(i,"signUp",Je)),D.push(()=>R(i,"signIn",Qe)),D.push(()=>R(i,"authErrorState",Xe)),D.push(()=>R(i,"competitiveUserInformation",Fe));function Ze(s){e[22](s)}function $e(s){e[23](s)}let be={};return e[1]!==void 0&&(be.currentUserInformation=e[1]),e[7]!==void 0&&(be.currentColorTheme=e[7]),y=new et({props:be}),D.push(()=>R(y,"currentUserInformation",Ze)),D.push(()=>R(y,"currentColorTheme",$e)),{c(){t=d("html"),n=d("head"),a=d("meta"),o=A(),f=d("meta"),m=A(),I=d("title"),p=N(e[12]),C=A(),b=d("body"),l=d("div"),je(i.$$.fragment),O=A(),je(y.$$.fragment),oe=A(),j=d("div"),E=d("div"),q=d("h3"),Y=d("strong"),le=N(e[13]),ue=A(),J=new He(!1),u=A(),k=d("blockquote"),Q=d("em"),B=new He(!1),ce=A(),X=d("h6"),me=N("Elo: "),he=N(e[11]),_e=A(),$=d("p"),$.textContent=Ie,ge=A(),x=d("div"),V=d("table"),ee=d("thead"),ee.innerHTML=Te,pe=A(),fe=d("tbody"),this.h()},l(s){t=c(s,"HTML",{"data-bs-theme":!0,lang:!0});var v=g(t);n=c(v,"HEAD",{});var U=g(n);a=c(U,"META",{charset:!0}),o=S(U),f=c(U,"META",{name:!0,content:!0}),m=S(U),I=c(U,"TITLE",{});var te=g(I);p=L(te,e[12]),te.forEach(h),U.forEach(h),C=S(v),b=c(v,"BODY",{class:!0,style:!0});var ye=g(b);l=c(ye,"DIV",{class:!0,style:!0});var ne=g(l);Ne(i.$$.fragment,ne),O=S(ne),Ne(y.$$.fragment,ne),oe=S(ne),j=c(ne,"DIV",{class:!0,style:!0});var Ue=g(j);E=c(Ue,"DIV",{class:!0});var w=g(E);q=c(w,"H3",{style:!0});var Ae=g(q);Y=c(Ae,"STRONG",{});var Se=g(Y);le=L(Se,e[13]),Se.forEach(h),Ae.forEach(h),ue=S(w),J=Le(w,!1),u=S(w),k=c(w,"BLOCKQUOTE",{});var ke=g(k);Q=c(ke,"EM",{});var we=g(Q);B=Le(we,!1),we.forEach(h),ke.forEach(h),ce=S(w),X=c(w,"H6",{style:!0});var ve=g(X);me=L(ve,"Elo: "),he=L(ve,e[11]),ve.forEach(h),_e=S(w),$=c(w,"P",{"data-svelte-h":!0}),Me($)!=="svelte-1t336m5"&&($.textContent=Ie),ge=S(w),x=c(w,"DIV",{class:!0});var Ce=g(x);V=c(Ce,"TABLE",{class:!0});var de=g(V);ee=c(de,"THEAD",{"data-svelte-h":!0}),Me(ee)!=="svelte-1vo7axd"&&(ee.innerHTML=Te),pe=S(de),fe=c(de,"TBODY",{}),g(fe).forEach(h),de.forEach(h),Ce.forEach(h),w.forEach(h),Ue.forEach(h),ne.forEach(h),ye.forEach(h),v.forEach(h),this.h()},h(){T(a,"charset","utf-8"),T(f,"name","viewport"),T(f,"content","width=device-width, initial-scale=1.0, shrink-to-fit=no"),H(q,"text-align","left"),J.a=u,B.a=null,H(X,"text-align","left"),T(V,"class","table table-striped"),T(x,"class","table-responsive"),T(E,"class","card-body"),T(j,"class","card"),H(j,"margin-top","0px"),T(l,"class","container"),H(l,"text-align","center"),H(l,"background","transparent"),H(l,"color","transparent"),H(l,"max-width","1000px"),T(b,"class","bg-body"),H(b,"background","var(--bs-secondary-bg)"),H(b,"color","var(--bs-card-bg)"),T(t,"data-bs-theme",e[7]),T(t,"lang","en")},m(s,v){ae(s,t,v),r(t,n),r(n,a),r(n,o),r(n,f),r(n,m),r(n,I),r(I,p),r(t,C),r(t,b),r(b,l),Oe(i,l,null),r(l,O),Oe(y,l,null),r(l,oe),r(l,j),r(j,E),r(E,q),r(q,Y),r(Y,le),r(E,ue),J.m(e[9],E),r(E,u),r(E,k),r(k,Q),B.m(e[10],Q),r(E,ce),r(E,X),r(X,me),r(X,he),r(E,_e),r(E,$),r(E,ge),r(E,x),r(x,V),r(V,ee),r(V,pe),r(V,fe),e[24](fe),z=!0},p(s,[v]){const U={};!_&&v&2&&(_=!0,U.currentUserInformation=s[1],P(()=>_=!1)),!M&&v&8&&(M=!0,U.userAuthState=s[3],P(()=>M=!1)),!G&&v&16&&(G=!0,U.signUp=s[4],P(()=>G=!1)),!K&&v&32&&(K=!0,U.signIn=s[5],P(()=>K=!1)),!W&&v&64&&(W=!0,U.authErrorState=s[6],P(()=>W=!1)),!Z&&v&4&&(Z=!0,U.competitiveUserInformation=s[2],P(()=>Z=!1)),i.$set(U);const te={};!ie&&v&2&&(ie=!0,te.currentUserInformation=s[1],P(()=>ie=!1)),!se&&v&128&&(se=!0,te.currentColorTheme=s[7],P(()=>se=!1)),y.$set(te),(!z||v&512)&&J.p(s[9]),(!z||v&1024)&&B.p(s[10]),(!z||v&2048)&&re(he,s[11]),(!z||v&128)&&T(t,"data-bs-theme",s[7])},i(s){z||(qe(i.$$.fragment,s),qe(y.$$.fragment,s),z=!0)},o(s){Be(i.$$.fragment,s),Be(y.$$.fragment,s),z=!1},d(s){s&&h(t),e[15](null),Ve(i),Ve(y),e[24](null)}}}function gt(e,t,n){let a,o="IntegralsArena",f,m,I,p,C,b,l="light",i,_;const M={apiKey:"AIzaSyDiDHodqqgXhmjtaharNv0yCLBnc-kDWe0",authDomain:"integralsarena.firebaseapp.com",projectId:"integralsarena",storageBucket:"integralsarena.appspot.com",messagingSenderId:"978478141428",appId:"1:978478141428:web:f3566e7bc6ea602177b3a1",measurementId:"G-N5T6SMBHL2"};let G;tt().length===0?G=nt(M):G=at();const K=rt(G);let{data:W}=t,Z=W.information.username,O="",y=0;it(Ee(K,`/usernames/${Z}`),u=>{u.exists()?ze(Ee(K,`/users/${u.val().uid}`)).then(k=>{k.val().username,n(10,O=k.val().battle_cry),O===""&&n(10,O='No battle cry <a href="https://emoji.gg/emoji/3794-joobifrown"><img src="https://cdn3.emoji.gg/emojis/3794-joobifrown.png" width="64px" height="64px" alt="joobifrown"></a>'),n(11,y=k.val().elo),y<=70?n(9,_='<p class="text-primary" style="text-align:left;">Novice integrator</p>'):y<=140?n(9,_='<p class="text-warning" style="text-align:left;">Warming up</p>'):n(9,_='<p class="text-danger" style="text-align:left;">Integration wizard</p>')}).then(ze(st(Ee(K),`/users/${u.val().uid}/submissions`)).then(k=>{if(k.exists())for(const[Q,B]of Object.entries(k.val()))new Pe({target:i,props:{date:Q,problem:B.problem,verdict:B.verdict}});else new Pe({target:i,props:{date:"",problem:"No submissions yet...",verdict:""}})})):ot("/")});function ie(u){D[u?"unshift":"push"](()=>{a=u,n(0,a)})}function se(u){f=u,n(1,f)}function oe(u){I=u,n(3,I)}function j(u){p=u,n(4,p)}function E(u){C=u,n(5,C)}function q(u){b=u,n(6,b)}function Y(u){m=u,n(2,m)}function le(u){f=u,n(1,f)}function ue(u){l=u,n(7,l)}function J(u){D[u?"unshift":"push"](()=>{i=u,n(8,i)})}return e.$$set=u=>{"data"in u&&n(14,W=u.data)},[a,f,m,I,p,C,b,l,i,_,O,y,o,Z,W,ie,se,oe,j,E,q,Y,le,ue,J]}class Tt extends Ge{constructor(t){super(),Ke(this,t,gt,_t,Re,{data:14})}}export{Tt as component,It as universal};
