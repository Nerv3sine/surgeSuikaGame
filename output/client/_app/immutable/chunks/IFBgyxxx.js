var On=Array.isArray,Gt=Array.prototype.indexOf,Nn=Array.from,Cn=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,$t=Object.getOwnPropertyDescriptors,Pn=Object.prototype,bn=Array.prototype,Kt=Object.getPrototypeOf;const Fn=()=>{};function Mn(t){return t()}function Et(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,wt=4,at=8,st=16,R=32,C=64,B=128,d=256,U=512,E=1024,D=2048,P=4096,O=8192,W=16384,Zt=32768,yt=65536,qn=1<<17,zt=1<<19,gt=1<<20,ct=Symbol("$state"),Ln=Symbol("legacy props");function Tt(t){return t===this.v}function Wt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function mt(t){return!Wt(t,this.v)}function Xt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Jt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Qt(t){throw new Error("https://svelte.dev/e/effect_orphan")}function tn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Yn(){throw new Error("https://svelte.dev/e/hydration_failed")}function jn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Hn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Bn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function nn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function rn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let X=!1;function Un(){X=!0}const Vn=1,Gn=2,$n=16,Kn=1,Zn=2,zn=4,Wn=8,Xn=16,Jn=1,Qn=2,en="[",ln="[!",an="]",At={},tr=Symbol(),nr="http://www.w3.org/1999/xhtml";function xt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let i=null;function vt(t){i=t}function rr(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},X&&!n&&(i.l={s:null,u:null,r1:[],r2:ut(!1)})}function er(t){const n=i;if(n!==null){const s=n.e;if(s!==null){var r=o,e=u;n.e=null;try{for(var a=0;a<s.length;a++){var l=s[a];K(l.effect),$(l.reaction),Ct(l.fn)}}finally{K(r),$(e)}}i=n.p,n.m=!0}return{}}function J(){return!X||i!==null&&i.l===null}function ut(t,n){var r={f:0,v:t,reactions:null,equals:Tt,rv:0,wv:0};return r}function lr(t){return sn(ut(t))}function ar(t,n=!1){var e;const r=ut(t);return n||(r.equals=mt),X&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function sn(t){return u!==null&&!w&&(u.f&y)!==0&&(T===null?gn([t]):T.push(t)),t}function sr(t,n){return u!==null&&!w&&J()&&(u.f&(y|st))!==0&&(T===null||!T.includes(t))&&rn(),un(t,n)}function un(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=jt(),Rt(t,D),J()&&o!==null&&(o.f&E)!==0&&(o.f&(R|C))===0&&(m===null?Tn([t]):m.push(t))),n}function Rt(t,n){var r=t.reactions;if(r!==null)for(var e=J(),a=r.length,l=0;l<a;l++){var s=r[l],f=s.f;(f&D)===0&&(!e&&s===o||(x(s,n),(f&(E|d))!==0&&((f&y)!==0?Rt(s,P):tt(s))))}}let N=!1;function ur(t){N=t}let A;function M(t){if(t===null)throw xt(),At;return A=t}function or(){return M(b(A))}function fr(t){if(N){if(b(A)!==null)throw xt(),At;A=t}}function ir(){for(var t=0,n=A;;){if(n.nodeType===8){var r=n.data;if(r===an){if(t===0)return n;t-=1}else(r===en||r===ln)&&(t+=1)}var e=b(n);n.remove(),n=e}}var pt,on,fn,kt,Dt;function _r(){if(pt===void 0){pt=window,on=document,fn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;kt=_t(n,"firstChild").get,Dt=_t(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return kt.call(t)}function b(t){return Dt.call(t)}function cr(t,n){if(!N)return rt(t);var r=rt(A);if(r===null)r=A.appendChild(nt());else if(n&&r.nodeType!==3){var e=nt();return r==null||r.before(e),M(e),e}return M(r),r}function vr(t,n){if(!N){var r=rt(t);return r instanceof Comment&&r.data===""?b(r):r}return A}function pr(t,n=1,r=!1){let e=N?A:t;for(var a;n--;)a=e,e=b(e);if(!N)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var s=nt();return e===null?a==null||a.after(s):e.before(s),M(s),s}return M(e),e}function hr(t){t.textContent=""}function It(t){var n=y|D,r=u!==null&&(u.f&y)!==0?u:null;return o===null||r!==null&&(r.f&d)!==0?n|=d:o.f|=gt,{ctx:i,deps:null,effects:null,equals:Tt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??o}}function dr(t){const n=It(t);return n.equals=mt,n}function St(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)S(n[r])}}function _n(t){for(var n=t.parent;n!==null;){if((n.f&y)===0)return n;n=n.parent}return null}function cn(t){var n,r=o;K(_n(t));try{St(t),n=Bt(t)}finally{K(r)}return n}function Ot(t){var n=cn(t),r=(k||(t.f&d)!==0)&&t.deps!==null?P:E;x(t,r),t.equals(n)||(t.v=n,t.wv=jt())}function Nt(t){o===null&&u===null&&Qt(),u!==null&&(u.f&d)!==0&&o===null&&Jt(),ot&&Xt()}function vn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function L(t,n,r,e=!0){var a=o,l={ctx:i,deps:null,nodes_start:null,nodes_end:null,f:t|D,first:null,fn:n,last:null,next:null,parent:a,prev:null,teardown:null,transitions:null,wv:0};if(r)try{ft(l),l.f|=Zt}catch(_){throw S(l),_}else n!==null&&tt(l);var s=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(gt|B))===0;if(!s&&e&&(a!==null&&vn(l,a),u!==null&&(u.f&y)!==0)){var f=u;(f.effects??(f.effects=[])).push(l)}return l}function Er(t){Nt();var n=o!==null&&(o.f&R)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=Ct(t);return e}}function wr(t){return Nt(),pn(t)}function yr(t){const n=L(C,t,!0);return(r={})=>new Promise(e=>{r.outro?En(n,()=>{S(n),e(void 0)}):(S(n),e(void 0))})}function Ct(t){return L(wt,t,!1)}function pn(t){return L(at,t,!0)}function gr(t,n=[],r=It){const e=n.map(r);return hn(()=>t(...e.map(Vt)))}function hn(t,n=0){return L(at|st|n,t,!0)}function Tr(t,n=!0){return L(at|R,t,!0,n)}function Pt(t){var n=t.teardown;if(n!==null){const r=ot,e=u;dt(!0),$(null);try{n.call(null)}finally{dt(r),$(e)}}}function bt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;(r.f&C)!==0?r.parent=null:S(r,n),r=e}}function dn(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&R)===0&&S(n),n=r}}function S(t,n=!0){var r=!1;if((n||(t.f&zt)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,a=t.nodes_end;e!==null;){var l=e===a?null:b(e);e.remove(),e=l}r=!0}bt(t,n&&!r),z(t,0),x(t,W);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();Pt(t);var f=t.parent;f!==null&&f.first!==null&&Ft(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ft(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function En(t,n){var r=[];Mt(t,r,!0),wn(r,()=>{S(t),n&&n()})}function wn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var a of t)a.out(e)}else n()}function Mt(t,n,r){if((t.f&O)===0){if(t.f^=O,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var a=e.next,l=(e.f&yt)!==0||(e.f&R)!==0;Mt(e,n,l?r:!1),e=a}}}function mr(t){qt(t,!0)}function qt(t,n){if((t.f&O)!==0){t.f^=O,(t.f&E)===0&&(t.f^=E),Y(t)&&(x(t,D),tt(t));for(var r=t.first;r!==null;){var e=r.next,a=(r.f&yt)!==0||(r.f&R)!==0;qt(r,a?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let q=[],et=[];function Lt(){var t=q;q=[],Et(t)}function yn(){var t=et;et=[],Et(t)}function Ar(t){q.length===0&&queueMicrotask(Lt),q.push(t)}function ht(){q.length>0&&Lt(),et.length>0&&yn()}let H=!1,V=!1,G=null,I=!1,ot=!1;function dt(t){ot=t}let F=[];let u=null,w=!1;function $(t){u=t}let o=null;function K(t){o=t}let T=null;function gn(t){T=t}let c=null,h=0,m=null;function Tn(t){m=t}let Yt=1,Z=0,k=!1;function jt(){return++Yt}function Y(t){var v;var n=t.f;if((n&D)!==0)return!0;if((n&P)!==0){var r=t.deps,e=(n&d)!==0;if(r!==null){var a,l,s=(n&U)!==0,f=e&&o!==null&&!k,_=r.length;if(s||f){var g=t,j=g.parent;for(a=0;a<_;a++)l=r[a],(s||!((v=l==null?void 0:l.reactions)!=null&&v.includes(g)))&&(l.reactions??(l.reactions=[])).push(g);s&&(g.f^=U),f&&j!==null&&(j.f&d)===0&&(g.f^=d)}for(a=0;a<_;a++)if(l=r[a],Y(l)&&Ot(l),l.wv>t.wv)return!0}(!e||o!==null&&!k)&&x(t,E)}return!1}function mn(t,n){for(var r=n;r!==null;){if((r.f&B)!==0)try{r.fn(t);return}catch{r.f^=B}r=r.parent}throw H=!1,t}function An(t){return(t.f&W)===0&&(t.parent===null||(t.parent.f&B)===0)}function Q(t,n,r,e){if(H){if(r===null&&(H=!1),An(n))throw t;return}r!==null&&(H=!0);{mn(t,n);return}}function Ht(t,n,r=!0){var e=t.reactions;if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];(l.f&y)!==0?Ht(l,n,!1):n===l&&(r?x(l,D):(l.f&E)!==0&&x(l,P),tt(l))}}function Bt(t){var it;var n=c,r=h,e=m,a=u,l=k,s=T,f=i,_=w,g=t.f;c=null,h=0,m=null,k=(g&d)!==0&&(w||!I||u===null),u=(g&(R|C))===0?t:null,T=null,vt(t.ctx),w=!1,Z++;try{var j=(0,t.fn)(),v=t.deps;if(c!==null){var p;if(z(t,h),v!==null&&h>0)for(v.length=h+c.length,p=0;p<c.length;p++)v[h+p]=c[p];else t.deps=v=c;if(!k)for(p=h;p<v.length;p++)((it=v[p]).reactions??(it.reactions=[])).push(t)}else v!==null&&h<v.length&&(z(t,h),v.length=h);if(J()&&m!==null&&!w&&v!==null&&(t.f&(y|P|D))===0)for(p=0;p<m.length;p++)Ht(m[p],t);return a!==null&&Z++,j}finally{c=n,h=r,m=e,u=a,k=l,T=s,vt(f),w=_}}function xn(t,n){let r=n.reactions;if(r!==null){var e=Gt.call(r,t);if(e!==-1){var a=r.length-1;a===0?r=n.reactions=null:(r[e]=r[a],r.pop())}}r===null&&(n.f&y)!==0&&(c===null||!c.includes(n))&&(x(n,P),(n.f&(d|U))===0&&(n.f^=U),St(n),z(n,0))}function z(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)xn(t,r[e])}function ft(t){var n=t.f;if((n&W)===0){x(t,E);var r=o,e=i,a=I;o=t,I=!0;try{(n&st)!==0?dn(t):bt(t),Pt(t);var l=Bt(t);t.teardown=typeof l=="function"?l:null,t.wv=Yt;var s=t.deps,f}catch(_){Q(_,t,r,e||t.ctx)}finally{I=a,o=r}}}function Rn(){try{tn()}catch(t){if(G!==null)Q(t,G,null);else throw t}}function Ut(){var t=I;try{var n=0;for(I=!0;F.length>0;){n++>1e3&&Rn();var r=F,e=r.length;F=[];for(var a=0;a<e;a++){var l=Dn(r[a]);kn(l)}}}finally{V=!1,I=t,G=null}}function kn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(W|O))===0)try{Y(e)&&(ft(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ft(e):e.fn=null))}catch(a){Q(a,e,null,e.ctx)}}}function tt(t){V||(V=!0,queueMicrotask(Ut));for(var n=G=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(C|R))!==0){if((r&E)===0)return;n.f^=E}}F.push(n)}function Dn(t){for(var n=[],r=t;r!==null;){var e=r.f,a=(e&(R|C))!==0,l=a&&(e&E)!==0;if(!l&&(e&O)===0){if((e&wt)!==0)n.push(r);else if(a)r.f^=E;else{var s=u;try{u=r,Y(r)&&ft(r)}catch(g){Q(g,r,null,r.ctx)}finally{u=s}}var f=r.first;if(f!==null){r=f;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function In(t){var n;for(ht();F.length>0;)V=!0,Ut(),ht();return n}async function xr(){await Promise.resolve(),In()}function Vt(t){var n=t.f,r=(n&y)!==0;if(u!==null&&!w){T!==null&&T.includes(t)&&nn();var e=u.deps;t.rv<Z&&(t.rv=Z,c===null&&e!==null&&e[h]===t?h++:c===null?c=[t]:(!k||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var a=t,l=a.parent;l!==null&&(l.f&d)===0&&(a.f^=d)}return r&&(a=t,Y(a)&&Ot(a)),t.v}function Rr(t){return t&&Vt(t)}function kr(t){var n=w;try{return w=!0,t()}finally{w=n}}const Sn=-7169;function x(t,n){t.f=t.f&Sn|n}function Dr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ct in t)lt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ct in r&&lt(r)}}}function lt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{lt(t[e],n)}catch{}const r=Kt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=$t(r);for(let a in e){const l=e[a].get;if(l)try{l.call(t)}catch{}}}}}export{on as $,_r as A,rt as B,b as C,At as D,yt as E,an as F,xt as G,en as H,Yn as I,hr as J,Nn as K,yr as L,nt as M,rr as N,er as O,wr as P,Et as Q,Mn as R,ct as S,Vt as T,tr as U,Dr as V,It as W,gr as X,cr as Y,fr as Z,pr as _,kr as a,zt as a0,fn as a1,Jn as a2,Qn as a3,Pn as a4,bn as a5,ut as a6,Bn as a7,sr as a8,_t as a9,Rr as aA,Fn as aB,Wt as aC,Hn as aa,Kt as ab,jn as ac,qn as ad,dr as ae,zn as af,mt as ag,ar as ah,Wn as ai,Ln as aj,Zn as ak,Kn as al,Xn as am,In as an,lr as ao,xr as ap,O as aq,un as ar,Gn as as,Mt as at,wn as au,S as av,Vn as aw,$n as ax,nr as ay,$t as az,hn as b,i as c,or as d,Un as e,ln as f,ur as g,N as h,mr as i,Tr as j,A as k,X as l,Ct as m,pn as n,vr as o,En as p,Ar as q,ir as r,M as s,Cn as t,Er as u,$ as v,K as w,On as x,u as y,o as z};
