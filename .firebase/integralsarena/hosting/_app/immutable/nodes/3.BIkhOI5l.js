import{s as ie,n as le,b as L,a as K}from"../chunks/scheduler.Dk__3NQe.js";import{S as de,i as _e,e as g,t as J,s as H,c as b,a as E,b as Q,d as p,f as N,g as P,h as u,j as $,p as B,k as W,l as ee,m as ge,n as te,q as z,r as ne,u as se,v as ae,w as re,H as ue,A as fe,o as pe}from"../chunks/index.DhH_vOA0.js";import{A as be,N as ve,F as ye,g as Ae,i as Ee,a as Ie,b as ke,o as Te,r as oe,c as ce,d as Fe}from"../chunks/Footer.DMx_q6JX.js";import{g as Ue}from"../chunks/entry.DzDABR_o.js";function we({params:n}){let t=n.uid;if(t!="+layout.svelte")return{information:{username:t}}}const ze=Object.freeze(Object.defineProperty({__proto__:null,load:we},Symbol.toStringTag,{value:"Module"}));function Se(n){let t,e;return{c(){t=g("td"),e=J(n[2])},l(a){t=b(a,"TD",{});var r=E(t);e=Q(r,n[2]),r.forEach(p)},m(a,r){P(a,t,r),u(t,e)},p(a,r){r&4&&$(e,a[2])},d(a){a&&p(t)}}}function Ce(n){let t,e,a,r;return{c(){t=g("td"),e=g("a"),a=J(n[2]),this.h()},l(o){t=b(o,"TD",{});var i=E(t);e=b(i,"A",{href:!0});var v=E(e);a=Q(v,n[2]),v.forEach(p),i.forEach(p),this.h()},h(){B(e,"href",r="/problems/"+n[2]+"/")},m(o,i){P(o,t,i),u(t,e),u(e,a)},p(o,i){i&4&&$(a,o[2]),i&4&&r!==(r="/problems/"+o[2]+"/")&&B(e,"href",r)},d(o){o&&p(t)}}}function De(n){let t,e;return{c(){t=g("td"),e=J(n[0]),this.h()},l(a){t=b(a,"TD",{class:!0});var r=E(t);e=Q(r,n[0]),r.forEach(p),this.h()},h(){B(t,"class","text-success")},m(a,r){P(a,t,r),u(t,e)},p(a,r){r&1&&$(e,a[0])},d(a){a&&p(t)}}}function je(n){let t,e;return{c(){t=g("td"),e=J(n[0]),this.h()},l(a){t=b(a,"TD",{class:!0});var r=E(t);e=Q(r,n[0]),r.forEach(p),this.h()},h(){B(t,"class","text-danger")},m(a,r){P(a,t,r),u(t,e)},p(a,r){r&1&&$(e,a[0])},d(a){a&&p(t)}}}function He(n){let t,e,a,r,o;function i(f,m){return f[2]!="No submissions yet..."?Ce:Se}let v=i(n),d=v(n);function U(f,m){if(f[0]=="RJ")return je;if(f[0]=="AC")return De}let y=U(n),h=y&&y(n);return{c(){t=g("tr"),e=g("td"),a=J(n[1]),r=H(),d.c(),o=H(),h&&h.c()},l(f){t=b(f,"TR",{});var m=E(t);e=b(m,"TD",{});var A=E(e);a=Q(A,n[1]),A.forEach(p),r=N(m),d.l(m),o=N(m),h&&h.l(m),m.forEach(p)},m(f,m){P(f,t,m),u(t,e),u(e,a),u(t,r),d.m(t,null),u(t,o),h&&h.m(t,null)},p(f,[m]){m&2&&$(a,f[1]),v===(v=i(f))&&d?d.p(f,m):(d.d(1),d=v(f),d&&(d.c(),d.m(t,o))),y===(y=U(f))&&h?h.p(f,m):(h&&h.d(1),h=y&&y(f),h&&(h.c(),h.m(t,null)))},i:le,o:le,d(f){f&&p(t),d.d(),h&&h.d()}}}function Ne(n,t,e){let{verdict:a,date:r,problem:o}=t;return n.$$set=i=>{"verdict"in i&&e(0,a=i.verdict),"date"in i&&e(1,r=i.date),"problem"in i&&e(2,o=i.problem)},[a,r,o]}class he extends de{constructor(t){super(),_e(this,t,Ne,He,ie,{verdict:0,date:1,problem:2})}}function me(n){let t,e,a,r,o,i,v,d,U,y,h,f,m,A,w,S,q,D,M="Submissions",T,I,j,O,Y='<tr><th>Date</th> <th>Problem</th> <th style="width: 145.312px;">Verdict</th></tr>',X,V;return{c(){t=g("div"),e=g("div"),a=g("h3"),r=g("strong"),o=J(n[14]),i=H(),v=g("p"),d=new ue(!1),U=H(),y=g("h6"),h=J("Elo: "),f=J(n[12]),m=H(),A=g("blockquote"),w=g("em"),S=new ue(!1),q=H(),D=g("p"),D.textContent=M,T=H(),I=g("div"),j=g("table"),O=g("thead"),O.innerHTML=Y,X=H(),V=g("tbody"),this.h()},l(C){t=b(C,"DIV",{class:!0,style:!0});var k=E(t);e=b(k,"DIV",{class:!0});var F=E(e);a=b(F,"H3",{style:!0});var Z=E(a);r=b(Z,"STRONG",{});var R=E(r);o=Q(R,n[14]),R.forEach(p),Z.forEach(p),i=N(F),v=b(F,"P",{style:!0});var l=E(v);d=fe(l,!1),l.forEach(p),U=N(F),y=b(F,"H6",{style:!0});var s=E(y);h=Q(s,"Elo: "),f=Q(s,n[12]),s.forEach(p),m=N(F),A=b(F,"BLOCKQUOTE",{});var c=E(A);w=b(c,"EM",{});var _=E(w);S=fe(_,!1),_.forEach(p),c.forEach(p),q=N(F),D=b(F,"P",{"data-svelte-h":!0}),pe(D)!=="svelte-1t336m5"&&(D.textContent=M),T=N(F),I=b(F,"DIV",{class:!0,style:!0});var G=E(I);j=b(G,"TABLE",{class:!0});var x=E(j);O=b(x,"THEAD",{"data-svelte-h":!0}),pe(O)!=="svelte-mh7gx"&&(O.innerHTML=Y),X=N(x),V=b(x,"TBODY",{}),E(V).forEach(p),x.forEach(p),G.forEach(p),F.forEach(p),k.forEach(p),this.h()},h(){z(a,"text-align","left"),d.a=null,z(v,"text-align","left"),z(y,"text-align","left"),S.a=null,B(j,"class","table table-striped table-hover"),B(I,"class","table-responsive overflow-scroll"),z(I,"max-height","450px"),B(e,"class","card-body"),B(t,"class","card"),z(t,"margin-top","0px")},m(C,k){P(C,t,k),u(t,e),u(e,a),u(a,r),u(r,o),u(e,i),u(e,v),d.m(n[9],v),u(e,U),u(e,y),u(y,h),u(y,f),u(e,m),u(e,A),u(A,w),S.m(n[11],w),u(e,q),u(e,D),u(e,T),u(e,I),u(I,j),u(j,O),u(j,X),u(j,V),n[25](V)},p(C,k){k&512&&d.p(C[9]),k&4096&&$(f,C[12]),k&2048&&S.p(C[11])},d(C){C&&p(t),n[25](null)}}}function Be(n){let t,e,a,r,o,i,v,d,U,y,h,f,m,A,w,S,q,D=n[10],M,T,I;document.title=a=n[13];function j(s){n[17](s)}function O(s){n[18](s)}function Y(s){n[19](s)}function X(s){n[20](s)}function V(s){n[21](s)}function C(s){n[22](s)}let k={};n[1]!==void 0&&(k.currentUserInformation=n[1]),n[3]!==void 0&&(k.userAuthState=n[3]),n[4]!==void 0&&(k.signUp=n[4]),n[5]!==void 0&&(k.signIn=n[5]),n[6]!==void 0&&(k.authErrorState=n[6]),n[2]!==void 0&&(k.competitiveUserInformation=n[2]),i=new be({props:k}),n[16](i),L.push(()=>W(i,"currentUserInformation",j)),L.push(()=>W(i,"userAuthState",O)),L.push(()=>W(i,"signUp",Y)),L.push(()=>W(i,"signIn",X)),L.push(()=>W(i,"authErrorState",V)),L.push(()=>W(i,"competitiveUserInformation",C));function F(s){n[23](s)}function Z(s){n[24](s)}let R={};n[1]!==void 0&&(R.currentUserInformation=n[1]),n[7]!==void 0&&(R.currentColorTheme=n[7]),A=new ve({props:R}),L.push(()=>W(A,"currentUserInformation",F)),L.push(()=>W(A,"currentColorTheme",Z));let l=me(n);return T=new ye({}),{c(){t=g("meta"),e=g("meta"),r=H(),o=g("div"),ee(i.$$.fragment),m=H(),ee(A.$$.fragment),q=H(),l.c(),M=H(),ee(T.$$.fragment),this.h()},l(s){const c=ge("svelte-i1ljz8",document.head);t=b(c,"META",{charset:!0}),e=b(c,"META",{name:!0,content:!0}),c.forEach(p),r=N(s),o=b(s,"DIV",{class:!0,style:!0});var _=E(o);te(i.$$.fragment,_),m=N(_),te(A.$$.fragment,_),q=N(_),l.l(_),_.forEach(p),M=N(s),te(T.$$.fragment,s),this.h()},h(){B(t,"charset","utf-8"),B(e,"name","viewport"),B(e,"content","width=device-width, initial-scale=1.0, shrink-to-fit=no"),B(o,"class","container"),z(o,"text-align","center"),z(o,"background","transparent"),z(o,"color","transparent"),z(o,"max-width","1000px")},m(s,c){u(document.head,t),u(document.head,e),P(s,r,c),P(s,o,c),ne(i,o,null),u(o,m),ne(A,o,null),u(o,q),l.m(o,null),P(s,M,c),ne(T,s,c),I=!0},p(s,[c]){(!I||c&8192)&&a!==(a=s[13])&&(document.title=a);const _={};!v&&c&2&&(v=!0,_.currentUserInformation=s[1],K(()=>v=!1)),!d&&c&8&&(d=!0,_.userAuthState=s[3],K(()=>d=!1)),!U&&c&16&&(U=!0,_.signUp=s[4],K(()=>U=!1)),!y&&c&32&&(y=!0,_.signIn=s[5],K(()=>y=!1)),!h&&c&64&&(h=!0,_.authErrorState=s[6],K(()=>h=!1)),!f&&c&4&&(f=!0,_.competitiveUserInformation=s[2],K(()=>f=!1)),i.$set(_);const G={};!w&&c&2&&(w=!0,G.currentUserInformation=s[1],K(()=>w=!1)),!S&&c&128&&(S=!0,G.currentColorTheme=s[7],K(()=>S=!1)),A.$set(G),c&1024&&ie(D,D=s[10])?(l.d(1),l=me(s),l.c(),l.m(o,null)):l.p(s,c)},i(s){I||(se(i.$$.fragment,s),se(A.$$.fragment,s),se(T.$$.fragment,s),I=!0)},o(s){ae(i.$$.fragment,s),ae(A.$$.fragment,s),ae(T.$$.fragment,s),I=!1},d(s){s&&(p(r),p(o),p(M)),p(t),p(e),n[16](null),re(i),re(A),l.d(s),re(T,s)}}}function qe(n,t,e){let a,r="IntegralsArena",o,i,v,d,U,y,h="light",f,m;const A={apiKey:"AIzaSyDiDHodqqgXhmjtaharNv0yCLBnc-kDWe0",authDomain:"integralsarena.firebaseapp.com",projectId:"integralsarena",storageBucket:"integralsarena.appspot.com",messagingSenderId:"978478141428",appId:"1:978478141428:web:f3566e7bc6ea602177b3a1",measurementId:"G-N5T6SMBHL2"};let w;Ae().length===0?w=Ee(A):w=Ie();const S=ke(w);let{data:q}=t,D=q.information.username,M="",T="",I=0;Te(oe(S,`/usernames/${D}`),l=>{l.exists()?ce(oe(S,`/users/${l.val().uid}`)).then(s=>{e(10,M=s.val().username),e(11,T=s.val().battle_cry),T===""&&e(11,T='No battle cry <a href="https://emoji.gg/emoji/3794-joobifrown"><img src="https://cdn3.emoji.gg/emojis/3794-joobifrown.png" width="64px" height="64px" alt="joobifrown"></a>'),e(12,I=s.val().elo),M==="admin"?e(9,m='<span style="color:#FA0000">C</span><span style="color:#FA4100">r</span><span style="color:#FA8200">e</span><span style="color:#FAC400">a</span><span style="color:#EFFA00">t</span><span style="color:#AEFA00">o</span><span style="color:#6DFA00">r</span> <span style="color:#2BFA00">o</span><span style="color:#00FA16">f</span> <span style="color:#00FA57">I</span><span style="color:#00FA98">n</span><span style="color:#00FAD9">t</span><span style="color:#00D9FA">e</span><span style="color:#0098FA">g</span><span style="color:#0057FA">r</span><span style="color:#0016FA">a</span><span style="color:#2B00FA">l</span><span style="color:#6D00FA">s</span><span style="color:#AE00FA">A</span><span style="color:#EF00FA">r</span><span style="color:#FA00C4">e</span><span style="color:#FA0082">n</span><span style="color:#FA0041">a</span>'):I<=70?e(9,m='<p class="text-primary" style="text-align:left;">Novice integrator</p>'):I<=140?e(9,m='<p class="text-warning" style="text-align:left;">Warming up</p>'):e(9,m='<p class="text-danger" style="text-align:left;">Integration wizard</p>')}).then(ce(Fe(oe(S),`/users/${l.val().uid}/submissions`)).then(s=>{if(s.exists()){let c=[];for(const[_,G]of Object.entries(s.val()))c.push([_,{key:G}]);for(let _=c.length-1;_>-1;_--)new he({target:f,props:{date:c[_][0],problem:c[_][1].key.problem,verdict:c[_][1].key.verdict}})}else new he({target:f,props:{date:"",problem:"No submissions yet...",verdict:""}})})):Ue("/")});function j(l){L[l?"unshift":"push"](()=>{a=l,e(0,a)})}function O(l){o=l,e(1,o)}function Y(l){v=l,e(3,v)}function X(l){d=l,e(4,d)}function V(l){U=l,e(5,U)}function C(l){y=l,e(6,y)}function k(l){i=l,e(2,i)}function F(l){o=l,e(1,o)}function Z(l){h=l,e(7,h)}function R(l){L[l?"unshift":"push"](()=>{f=l,e(8,f)})}return n.$$set=l=>{"data"in l&&e(15,q=l.data)},[a,o,i,v,d,U,y,h,f,m,M,T,I,r,D,q,j,O,Y,X,V,C,k,F,Z,R]}class Pe extends de{constructor(t){super(),_e(this,t,qe,Be,ie,{data:15})}}export{Pe as component,ze as universal};
