import{s as mt,n as B,b as L,a as F}from"../chunks/scheduler.Dk__3NQe.js";import{S as pt,i as _t,e as g,t as ct,s as G,H as wt,c as m,a as w,b as dt,d as c,f as K,A as Ct,p as T,q as _,g as J,h as u,j as gt,k as O,l as at,m as St,n as rt,o as et,r as it,u as ot,v as st,w as lt}from"../chunks/index.DhH_vOA0.js";import{h as Dt,u as yt}from"../chunks/await_block.C3IcbcNR.js";import{A as Ht,N as Lt,F as Mt,g as zt,i as Bt,a as Vt,b as jt,c as Nt,d as qt,r as Pt}from"../chunks/Footer.DMx_q6JX.js";function Rt(t){let n,e,i,p,s,o,f,h,E,D,v,C;return{c(){n=g("tr"),e=g("td"),i=g("a"),p=ct(t[2]),o=G(),f=g("td"),h=g("em"),E=new wt(!1),D=G(),v=g("td"),C=ct(t[1]),this.h()},l(b){n=m(b,"TR",{});var l=w(n);e=m(l,"TD",{class:!0,style:!0});var I=w(e);i=m(I,"A",{href:!0});var V=w(i);p=dt(V,t[2]),V.forEach(c),I.forEach(c),o=K(l),f=m(l,"TD",{style:!0});var j=w(f);h=m(j,"EM",{});var S=w(h);E=Ct(S,!1),S.forEach(c),j.forEach(c),D=K(l),v=m(l,"TD",{style:!0});var k=w(v);C=dt(k,t[1]),k.forEach(c),l.forEach(c),this.h()},h(){T(i,"href",s="/account/"+t[2]),T(e,"class","my-auto"),_(e,"height","25px"),_(e,"text-align","left"),_(e,"width","45px"),_(e,"vertical-align","middle"),_(e,"color",t[3]),E.a=null,_(f,"height","25px"),_(f,"font-size","large"),_(f,"vertical-align","middle"),_(v,"height","25px"),_(v,"width","100px"),_(v,"vertical-align","middle")},m(b,l){J(b,n,l),u(n,e),u(e,i),u(i,p),u(n,o),u(n,f),u(f,h),E.m(t[0],h),u(n,D),u(n,v),u(v,C)},p(b,[l]){l&4&&gt(p,b[2]),l&4&&s!==(s="/account/"+b[2])&&T(i,"href",s),l&8&&_(e,"color",b[3]),l&1&&E.p(b[0]),l&2&&gt(C,b[1])},i:B,o:B,d(b){b&&c(n)}}}function Ft(t,n,e){let{link:i,statement:p,origin:s,rating:o}=n,f;return o<5?f="#0b03fc":o<=10?f="#0088ff":o<=20?f="#4c008f":o<=100&&(f="#8f000c"),t.$$set=h=>{"link"in h&&e(4,i=h.link),"statement"in h&&e(0,p=h.statement),"origin"in h&&e(1,s=h.origin),"rating"in h&&e(2,o=h.rating)},[p,s,o,f,i]}class Ot extends pt{constructor(n){super(),_t(this,n,Ft,Rt,mt,{link:4,statement:0,origin:1,rating:2})}}function Gt(t){return{c:B,l:B,m:B,p:B,d:B}}function Kt(t){let n,e="";return{c(){n=g("tbody"),n.innerHTML=e},l(i){n=m(i,"TBODY",{"data-svelte-h":!0}),et(n)!=="svelte-1l4v907"&&(n.innerHTML=e)},m(i,p){J(i,n,p),t[20](n)},p:B,d(i){i&&c(n),t[20](null)}}}function Wt(t){let n,e="Loading people...";return{c(){n=g("p"),n.textContent=e},l(i){n=m(i,"P",{"data-svelte-h":!0}),et(n)!=="svelte-18k1xf7"&&(n.textContent=e)},m(i,p){J(i,n,p)},p:B,d(i){i&&c(n)}}}function Xt(t){let n,e,i,p,s,o,f,h,E,D,v,C,b,l,I,V,j,S,k,M,$="People",Q,N,q,P,r,z,A='<tr><th style="text-align: left;width: 111.188px;">Username</th> <th style="text-align: center;width: 695.188px;">Battle Cry</th> <th style="text-align: center;width: 111.188px;">Elo</th></tr>',H,R,W,Z;document.title=i=t[9];function vt(a){t[12](a)}function bt(a){t[13](a)}function It(a){t[14](a)}function Ut(a){t[15](a)}function Et(a){t[16](a)}function kt(a){t[17](a)}let X={};t[1]!==void 0&&(X.currentUserInformation=t[1]),t[3]!==void 0&&(X.userAuthState=t[3]),t[4]!==void 0&&(X.signUp=t[4]),t[5]!==void 0&&(X.signIn=t[5]),t[6]!==void 0&&(X.authErrorState=t[6]),t[2]!==void 0&&(X.competitiveUserInformation=t[2]),o=new Ht({props:X}),t[11](o),L.push(()=>O(o,"currentUserInformation",vt)),L.push(()=>O(o,"userAuthState",bt)),L.push(()=>O(o,"signUp",It)),L.push(()=>O(o,"signIn",Ut)),L.push(()=>O(o,"authErrorState",Et)),L.push(()=>O(o,"competitiveUserInformation",kt));function At(a){t[18](a)}function Tt(a){t[19](a)}let nt={};t[1]!==void 0&&(nt.currentUserInformation=t[1]),t[8]!==void 0&&(nt.currentColorTheme=t[8]),l=new Lt({props:nt}),L.push(()=>O(l,"currentUserInformation",At)),L.push(()=>O(l,"currentColorTheme",Tt));let y={ctx:t,current:null,token:null,hasCatch:!1,pending:Wt,then:Kt,catch:Gt};return Dt(t[10],y),W=new Mt({}),{c(){n=g("meta"),e=g("meta"),p=G(),s=g("div"),at(o.$$.fragment),b=G(),at(l.$$.fragment),j=G(),S=g("div"),k=g("div"),M=g("h4"),M.textContent=$,Q=G(),N=g("div"),q=g("div"),P=g("div"),r=g("table"),z=g("thead"),z.innerHTML=A,H=G(),y.block.c(),R=G(),at(W.$$.fragment),this.h()},l(a){const d=St("svelte-i1ljz8",document.head);n=m(d,"META",{charset:!0}),e=m(d,"META",{name:!0,content:!0}),d.forEach(c),p=K(a),s=m(a,"DIV",{class:!0,style:!0});var U=w(s);rt(o.$$.fragment,U),b=K(U),rt(l.$$.fragment,U),j=K(U),S=m(U,"DIV",{class:!0,style:!0});var Y=w(S);k=m(Y,"DIV",{class:!0});var x=w(k);M=m(x,"H4",{style:!0,"data-svelte-h":!0}),et(M)!=="svelte-16hzwbo"&&(M.textContent=$),Q=K(x),N=m(x,"DIV",{class:!0});var ut=w(N);q=m(ut,"DIV",{class:!0});var ft=w(q);P=m(ft,"DIV",{class:!0});var ht=w(P);r=m(ht,"TABLE",{class:!0});var tt=w(r);z=m(tt,"THEAD",{"data-svelte-h":!0}),et(z)!=="svelte-1c6gfcz"&&(z.innerHTML=A),H=K(tt),y.block.l(tt),tt.forEach(c),ht.forEach(c),ft.forEach(c),ut.forEach(c),x.forEach(c),Y.forEach(c),U.forEach(c),R=K(a),rt(W.$$.fragment,a),this.h()},h(){T(n,"charset","utf-8"),T(e,"name","viewport"),T(e,"content","width=device-width, initial-scale=1.0, shrink-to-fit=no"),_(M,"text-align","left"),T(r,"class","table table-striped table-hover"),T(P,"class","table-responsive"),T(q,"class","col"),T(N,"class","row"),T(k,"class","card-body"),T(S,"class","card"),_(S,"margin-top","0px"),T(s,"class","container"),_(s,"text-align","center"),_(s,"background","transparent"),_(s,"color","transparent"),_(s,"max-width","1000px")},m(a,d){u(document.head,n),u(document.head,e),J(a,p,d),J(a,s,d),it(o,s,null),u(s,b),it(l,s,null),u(s,j),u(s,S),u(S,k),u(k,M),u(k,Q),u(k,N),u(N,q),u(q,P),u(P,r),u(r,z),u(r,H),y.block.m(r,y.anchor=null),y.mount=()=>r,y.anchor=null,J(a,R,d),it(W,a,d),Z=!0},p(a,[d]){t=a,(!Z||d&512)&&i!==(i=t[9])&&(document.title=i);const U={};!f&&d&2&&(f=!0,U.currentUserInformation=t[1],F(()=>f=!1)),!h&&d&8&&(h=!0,U.userAuthState=t[3],F(()=>h=!1)),!E&&d&16&&(E=!0,U.signUp=t[4],F(()=>E=!1)),!D&&d&32&&(D=!0,U.signIn=t[5],F(()=>D=!1)),!v&&d&64&&(v=!0,U.authErrorState=t[6],F(()=>v=!1)),!C&&d&4&&(C=!0,U.competitiveUserInformation=t[2],F(()=>C=!1)),o.$set(U);const Y={};!I&&d&2&&(I=!0,Y.currentUserInformation=t[1],F(()=>I=!1)),!V&&d&256&&(V=!0,Y.currentColorTheme=t[8],F(()=>V=!1)),l.$set(Y),yt(y,t,d)},i(a){Z||(ot(o.$$.fragment,a),ot(l.$$.fragment,a),ot(W.$$.fragment,a),Z=!0)},o(a){st(o.$$.fragment,a),st(l.$$.fragment,a),st(W.$$.fragment,a),Z=!1},d(a){a&&(c(p),c(s),c(R)),c(n),c(e),t[11](null),lt(o),lt(l),y.block.d(),y.token=null,y=null,lt(W,a)}}}function Yt(t,n,e){let i,p="IntegralsArena",s,o,f,h,E,D,v,C="light";const b={apiKey:"AIzaSyDiDHodqqgXhmjtaharNv0yCLBnc-kDWe0",authDomain:"integralsarena.firebaseapp.com",projectId:"integralsarena",storageBucket:"integralsarena.appspot.com",messagingSenderId:"978478141428",appId:"1:978478141428:web:f3566e7bc6ea602177b3a1",measurementId:"G-N5T6SMBHL2"};let l;zt().length===0?l=Bt(b):l=Vt();let I=[];{const r=jt(l);Nt(qt(Pt(r),"/users/")).then(z=>{if(z.exists()){for(const[A,H]of Object.entries(z.val())){let R;H.battle_cry===""?R="No battle cry...":R=H.battle_cry,I.push([A,{rating:H.username,origin:parseInt(H.elo),statement:R}])}I.sort(function(A,H){return A[1].origin-H[1].origin});for(let A=I.length-1;A>-1;A--)new Ot({target:v,props:{rating:I[A][1].rating,origin:I[A][1].origin,statement:I[A][1].statement,link:I[A][0]}})}})}function V(r){L[r?"unshift":"push"](()=>{i=r,e(0,i)})}function j(r){s=r,e(1,s)}function S(r){f=r,e(3,f)}function k(r){h=r,e(4,h)}function M(r){E=r,e(5,E)}function $(r){D=r,e(6,D)}function Q(r){o=r,e(2,o)}function N(r){s=r,e(1,s)}function q(r){C=r,e(8,C)}function P(r){L[r?"unshift":"push"](()=>{v=r,e(7,v)})}return[i,s,o,f,h,E,D,v,C,p,I,V,j,S,k,M,$,Q,N,q,P]}class xt extends pt{constructor(n){super(),_t(this,n,Yt,Xt,mt,{})}}export{xt as component};
