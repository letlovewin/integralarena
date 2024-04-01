import{s as kt,n as q,b as B,a as Y}from"../chunks/scheduler.Dk__3NQe.js";import{S as At,i as wt,e as h,t as rt,s as L,H as Bt,c as d,a as U,b as it,d as m,f as M,z as Vt,o as v,p as c,g as ot,h as a,j as ht,k as G,l as dt,m as gt,n as st,q as ct,r as mt,u as pt,v as _t}from"../chunks/index.YBxWRTly.js";import{h as jt,u as Pt}from"../chunks/await_block.CWGX2-UG.js";import{A as qt,N as Nt,F as Ot,g as Rt,i as Ft,a as Yt,b as Gt,c as Kt,d as Wt,r as Xt}from"../chunks/Footer.eyh5GOhS.js";function Jt(t){let e,n,r,I,p,E,l,g,y,k,o,u,V,A,T;return{c(){e=h("tr"),n=h("td"),r=h("a"),I=rt(t[0]),E=L(),l=h("td"),g=rt(t[3]),k=L(),o=h("td"),u=new Bt(!1),V=L(),A=h("td"),T=rt(t[2]),this.h()},l(b){e=d(b,"TR",{});var f=U(e);n=d(f,"TD",{style:!0});var N=U(n);r=d(N,"A",{href:!0});var O=U(r);I=it(O,t[0]),O.forEach(m),N.forEach(m),E=M(f),l=d(f,"TD",{class:!0,style:!0});var w=U(l);g=it(w,t[3]),w.forEach(m),k=M(f),o=d(f,"TD",{style:!0});var R=U(o);u=Vt(R,!1),R.forEach(m),V=M(f),A=d(f,"TD",{style:!0});var F=U(A);T=it(F,t[2]),F.forEach(m),f.forEach(m),this.h()},h(){v(r,"href",p="/problems/"+t[0]),c(n,"height","25px"),c(n,"text-align","left"),c(n,"vertical-align","middle"),c(n,"width","25px"),v(l,"class",y=t[4]+" my-auto"),c(l,"height","25px"),c(l,"text-align","left"),c(l,"width","25px"),c(l,"vertical-align","middle"),u.a=null,c(o,"height","25px"),c(o,"font-size","large"),c(o,"vertical-align","middle"),c(A,"height","25px"),c(A,"vertical-align","middle")},m(b,f){ot(b,e,f),a(e,n),a(n,r),a(r,I),a(e,E),a(e,l),a(l,g),a(e,k),a(e,o),u.m(t[1],o),a(e,V),a(e,A),a(A,T)},p(b,[f]){f&1&&ht(I,b[0]),f&1&&p!==(p="/problems/"+b[0])&&v(r,"href",p),f&8&&ht(g,b[3]),f&16&&y!==(y=b[4]+" my-auto")&&v(l,"class",y),f&2&&u.p(b[1]),f&4&&ht(T,b[2])},i:q,o:q,d(b){b&&m(e)}}}function Qt(t,e,n){let{link:r,statement:I,origin:p,rating:E}=e,l;return E<5?l="":E<=10?l="text-primary":E<=20&&(l="text-success"),t.$$set=g=>{"link"in g&&n(0,r=g.link),"statement"in g&&n(1,I=g.statement),"origin"in g&&n(2,p=g.origin),"rating"in g&&n(3,E=g.rating)},[r,I,p,E,l]}class Zt extends At{constructor(e){super(),wt(this,e,Qt,Jt,kt,{link:0,statement:1,origin:2,rating:3})}}function $t(t){return{c:q,l:q,m:q,p:q,d:q}}function xt(t){let e,n="";return{c(){e=h("tbody"),e.innerHTML=n},l(r){e=d(r,"TBODY",{"data-svelte-h":!0}),st(e)!=="svelte-9bz9z8"&&(e.innerHTML=n)},m(r,I){ot(r,e,I),t[20](e)},p:q,d(r){r&&m(e),t[20](null)}}}function te(t){let e,n="Loading problems...";return{c(){e=h("p"),e.textContent=n},l(r){e=d(r,"P",{"data-svelte-h":!0}),st(e)!=="svelte-pf4dju"&&(e.textContent=n)},m(r,I){ot(r,e,I)},p:q,d(r){r&&m(e)}}}function ee(t){let e,n,r,I,p,E,l,g,y,k,o,u,V,A,T,b,f,N,O,w,R,F,x,j,z,i,tt="Problems",C,D,X,J,P,Q,bt='<tr><th style="text-align: left;width: 111.188px;">Link</th> <th style="text-align: left;width: 111.188px;">Rating</th> <th style="text-align: center;width: 695.188px;">Problem</th> <th>Origin</th></tr>',lt,ut,K,et;function Ct(s){t[12](s)}function St(s){t[13](s)}function yt(s){t[14](s)}function Dt(s){t[15](s)}function Ht(s){t[16](s)}function Lt(s){t[17](s)}let W={};t[1]!==void 0&&(W.currentUserInformation=t[1]),t[3]!==void 0&&(W.userAuthState=t[3]),t[4]!==void 0&&(W.signUp=t[4]),t[5]!==void 0&&(W.signIn=t[5]),t[6]!==void 0&&(W.authErrorState=t[6]),t[2]!==void 0&&(W.competitiveUserInformation=t[2]),u=new qt({props:W}),t[11](u),B.push(()=>G(u,"currentUserInformation",Ct)),B.push(()=>G(u,"userAuthState",St)),B.push(()=>G(u,"signUp",yt)),B.push(()=>G(u,"signIn",Dt)),B.push(()=>G(u,"authErrorState",Ht)),B.push(()=>G(u,"competitiveUserInformation",Lt));function Mt(s){t[18](s)}function zt(s){t[19](s)}let ft={};t[1]!==void 0&&(ft.currentUserInformation=t[1]),t[8]!==void 0&&(ft.currentColorTheme=t[8]),w=new Nt({props:ft}),B.push(()=>G(w,"currentUserInformation",Mt)),B.push(()=>G(w,"currentColorTheme",zt));let H={ctx:t,current:null,token:null,hasCatch:!1,pending:te,then:xt,catch:$t};return jt(t[10],H),K=new Ot({}),{c(){e=h("html"),n=h("head"),r=h("meta"),I=L(),p=h("meta"),E=L(),l=h("title"),g=rt(t[9]),y=L(),k=h("body"),o=h("div"),dt(u.$$.fragment),O=L(),dt(w.$$.fragment),x=L(),j=h("div"),z=h("div"),i=h("h4"),i.textContent=tt,C=L(),D=h("div"),X=h("div"),J=h("div"),P=h("table"),Q=h("thead"),Q.innerHTML=bt,lt=L(),H.block.c(),ut=L(),dt(K.$$.fragment),this.h()},l(s){e=d(s,"HTML",{"data-bs-theme":!0,lang:!0});var _=U(e);n=d(_,"HEAD",{});var S=U(n);r=d(S,"META",{charset:!0}),I=M(S),p=d(S,"META",{name:!0,content:!0}),E=M(S),l=d(S,"TITLE",{});var Z=U(l);g=it(Z,t[9]),Z.forEach(m),S.forEach(m),y=M(_),k=d(_,"BODY",{class:!0,style:!0});var vt=U(k);o=d(vt,"DIV",{class:!0,style:!0});var $=U(o);gt(u.$$.fragment,$),O=M($),gt(w.$$.fragment,$),x=M($),j=d($,"DIV",{class:!0,style:!0});var It=U(j);z=d(It,"DIV",{class:!0});var nt=U(z);i=d(nt,"H4",{style:!0,"data-svelte-h":!0}),st(i)!=="svelte-1gkpsen"&&(i.textContent=tt),C=M(nt),D=d(nt,"DIV",{class:!0});var Et=U(D);X=d(Et,"DIV",{class:!0});var Tt=U(X);J=d(Tt,"DIV",{class:!0});var Ut=U(J);P=d(Ut,"TABLE",{class:!0});var at=U(P);Q=d(at,"THEAD",{"data-svelte-h":!0}),st(Q)!=="svelte-1yt3dbg"&&(Q.innerHTML=bt),lt=M(at),H.block.l(at),at.forEach(m),Ut.forEach(m),Tt.forEach(m),Et.forEach(m),nt.forEach(m),It.forEach(m),$.forEach(m),vt.forEach(m),ut=M(_),gt(K.$$.fragment,_),_.forEach(m),this.h()},h(){v(r,"charset","utf-8"),v(p,"name","viewport"),v(p,"content","width=device-width, initial-scale=1.0, shrink-to-fit=no"),c(i,"text-align","left"),v(P,"class","table table-striped table-hover"),v(J,"class","table-responsive"),v(X,"class","col"),v(D,"class","row"),v(z,"class","card-body"),v(j,"class","card"),c(j,"margin-top","0px"),v(o,"class","container"),c(o,"text-align","center"),c(o,"background","transparent"),c(o,"color","transparent"),c(o,"max-width","1000px"),v(k,"class","bg-body"),c(k,"background","var(--bs-secondary-bg)"),c(k,"color","var(--bs-card-bg)"),v(e,"data-bs-theme",t[8]),v(e,"lang","en")},m(s,_){ot(s,e,_),a(e,n),a(n,r),a(n,I),a(n,p),a(n,E),a(n,l),a(l,g),a(e,y),a(e,k),a(k,o),ct(u,o,null),a(o,O),ct(w,o,null),a(o,x),a(o,j),a(j,z),a(z,i),a(z,C),a(z,D),a(D,X),a(X,J),a(J,P),a(P,Q),a(P,lt),H.block.m(P,H.anchor=null),H.mount=()=>P,H.anchor=null,a(e,ut),ct(K,e,null),et=!0},p(s,[_]){t=s;const S={};!V&&_&2&&(V=!0,S.currentUserInformation=t[1],Y(()=>V=!1)),!A&&_&8&&(A=!0,S.userAuthState=t[3],Y(()=>A=!1)),!T&&_&16&&(T=!0,S.signUp=t[4],Y(()=>T=!1)),!b&&_&32&&(b=!0,S.signIn=t[5],Y(()=>b=!1)),!f&&_&64&&(f=!0,S.authErrorState=t[6],Y(()=>f=!1)),!N&&_&4&&(N=!0,S.competitiveUserInformation=t[2],Y(()=>N=!1)),u.$set(S);const Z={};!R&&_&2&&(R=!0,Z.currentUserInformation=t[1],Y(()=>R=!1)),!F&&_&256&&(F=!0,Z.currentColorTheme=t[8],Y(()=>F=!1)),w.$set(Z),Pt(H,t,_),(!et||_&256)&&v(e,"data-bs-theme",t[8])},i(s){et||(mt(u.$$.fragment,s),mt(w.$$.fragment,s),mt(K.$$.fragment,s),et=!0)},o(s){pt(u.$$.fragment,s),pt(w.$$.fragment,s),pt(K.$$.fragment,s),et=!1},d(s){s&&m(e),t[11](null),_t(u),_t(w),H.block.d(),H.token=null,H=null,_t(K)}}}function ne(t,e,n){let r,I="IntegralsArena",p,E,l,g,y,k,o,u="light";const V={apiKey:"AIzaSyDiDHodqqgXhmjtaharNv0yCLBnc-kDWe0",authDomain:"integralsarena.firebaseapp.com",projectId:"integralsarena",storageBucket:"integralsarena.appspot.com",messagingSenderId:"978478141428",appId:"1:978478141428:web:f3566e7bc6ea602177b3a1",measurementId:"G-N5T6SMBHL2"};let A;Rt().length===0?A=Ft(V):A=Yt();let T=[];{const i=Gt(A);Kt(Wt(Xt(i),"/problems/")).then(tt=>{if(tt.exists()){for(const[C,D]of Object.entries(tt.val()))T.push([C,{rating:D.rating,origin:D.origin,statement:D.statement}]);T.sort(function(C,D){return C[1].rating-D[1].rating});for(let C=T.length-1;C>-1;C--)new Zt({target:o,props:{rating:T[C][1].rating,origin:T[C][1].origin,statement:T[C][1].statement,link:T[C][0]}})}})}function b(i){B[i?"unshift":"push"](()=>{r=i,n(0,r)})}function f(i){p=i,n(1,p)}function N(i){l=i,n(3,l)}function O(i){g=i,n(4,g)}function w(i){y=i,n(5,y)}function R(i){k=i,n(6,k)}function F(i){E=i,n(2,E)}function x(i){p=i,n(1,p)}function j(i){u=i,n(8,u)}function z(i){B[i?"unshift":"push"](()=>{o=i,n(7,o)})}return[r,p,E,l,g,y,k,o,u,I,T,b,f,N,O,w,R,F,x,j,z]}class oe extends At{constructor(e){super(),wt(this,e,ne,ee,kt,{})}}export{oe as component};
