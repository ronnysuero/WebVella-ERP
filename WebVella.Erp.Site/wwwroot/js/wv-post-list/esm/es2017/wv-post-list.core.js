/*!
 * WvPostList: Core, es2017
 * Built with http://stenciljs.com
 */
function e(e,t){let n,o,i=null,l=!1,s=!1,r=arguments.length;for(;r-- >2;)v.push(arguments[r]);for(;v.length>0;){let t=v.pop();if(t&&void 0!==t.pop)for(r=t.length;r--;)v.push(t[r]);else"boolean"==typeof t&&(t=null),(s="function"!=typeof e)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(s=!1)),s&&l?i[i.length-1].vtext+=t:null===i?i=[s?{vtext:t}:t]:i.push(s?{vtext:t}:t),l=s}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(r in t.class)t.class[r]&&v.push(r);t.class=v.join(" "),v.length=0}null!=t.key&&(n=t.key),null!=t.name&&(o=t.name)}return"function"==typeof e?e(t,i||[],b):{vtag:e,vchildren:i,vtext:void 0,vattrs:t,vkey:n,vname:o,t:void 0,o:!1}}function t(e,t,o={}){let i=Array.isArray(t)?t:[t];const l=e.document,r=o.hydratedCssClass||"hydrated",a=o.exclude;a&&(i=i.filter(e=>-1===a.indexOf(e[0])));const f=i.map(e=>e[0]);if(f.length>0){const e=l.createElement("style");e.innerHTML=f.join()+"{visibility:hidden}."+r+"{visibility:inherit}",e.setAttribute("data-styles",""),l.head.insertBefore(e,l.head.firstChild)}const c=o.namespace||"WvPostList";return W||(W=!0,function u(e,t,n){(e["s-apps"]=e["s-apps"]||[]).push(t),n.componentOnReady||(n.componentOnReady=function t(){function n(t){if(o.nodeName.indexOf("-")>0){for(var n=e["s-apps"],i=0,l=0;l<n.length;l++)if(e[n[l]].componentOnReady){if(e[n[l]].componentOnReady(o,t))return;i++}if(i<n.length)return void(e["s-cr"]=e["s-cr"]||[]).push([o,t])}t(null)}var o=this;return e.Promise?new e.Promise(n):{then:n}})}(e,c,e.HTMLElement.prototype)),applyPolyfills(e).then(()=>{if(!S[c]){const t={},s=o.resourcesUrl||"./";n(c,t,e,l,s,r),S[c]=O(c,t,e,l,s,r,i)}(function t(){i.forEach(t=>{let n;!function o(e){return/\{\s*\[native code\]\s*\}/.test(""+e)}(e.customElements.define)?(n=function(t){return e.HTMLElement.call(this,t)}).prototype=Object.create(e.HTMLElement.prototype,{constructor:{value:n,configurable:!0}}):n=new Function("w","return class extends w.HTMLElement{}")(e),S[c].i(function i(e){const t=m(e),n=t.l,o=s(e[0]);return t.l=(({mode:e,scoped:t})=>(function i(e,t,n){return import(
/* webpackInclude: /\.entry\.js$/ */
/* webpackMode: "lazy" */
`./build/${e}${t?".sc":""}.entry.js`).then(e=>e[n])})("string"==typeof n?n:n[e],t,o)),t}(t),n)})})()})}import n from"./wv-post-list.global.js";function applyPolyfills(){return Promise.resolve()}const o={},i=e=>null!=e,l=e=>e.toLowerCase(),s=e=>l(e).split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""),r=(e,t,n,o,i,s)=>{if("class"!==n||s)if("style"===n){for(const e in o)i&&null!=i[e]||(/-/.test(e)?t.style.removeProperty(e):t.style[e]="");for(const e in i)o&&i[e]===o[e]||(/-/.test(e)?t.style.setProperty(e,i[e]):t.style[e]=i[e])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in t)if("list"!==n&&"type"!==n&&!s&&(n in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=e.s(t);o&&o.u&&o.u[n]?f(t,n,i):"ref"!==n&&(f(t,n,null==i?"":i),null!=i&&!1!==i||e.v.p(t,n))}else null!=i&&"key"!==n?((e,t,n,o="boolean"==typeof n,i)=>{i=t!==(t=t.replace(/^xlink\:?/,"")),null==n||o&&(!n||"false"===n)?i?e.removeAttributeNS("http://www.w3.org/1999/xlink",l(t)):e.removeAttribute(t):"function"!=typeof n&&(n=o?"":n.toString(),i?e.setAttributeNS("http://www.w3.org/1999/xlink",l(t),n):e.setAttribute(t,n))})(t,n,i):(s||e.v.m(t,n)&&(null==i||!1===i))&&e.v.p(t,n);else n=l(n)in t?l(n.substring(2)):l(n[2])+n.substring(3),i?i!==o&&e.v.M(t,n,i,0):e.v.g(t,n,0);else if(o!==i){const e=a(o),n=a(i),l=e.filter(e=>!n.includes(e)),s=a(t.className).filter(e=>!l.includes(e)),r=n.filter(t=>!e.includes(t)&&!s.includes(t));s.push(...r),t.className=s.join(" ")}},a=e=>null==e||""===e?[]:e.trim().split(/\s+/),f=(e,t,n)=>{try{e[t]=n}catch(e){}},c=(e,t,n,i,l)=>{const s=11===n.t.nodeType&&n.t.host?n.t.host:n.t,a=t&&t.vattrs||o,f=n.vattrs||o;for(l in a)f&&null!=f[l]||null==a[l]||r(e,s,l,a[l],void 0,i,n.o);for(l in f)l in a&&f[l]===("value"===l||"checked"===l?s[l]:a[l])||r(e,s,l,a[l],f[l],i,n.o)};let u=!1;const p=(e,t)=>{e&&(e.vattrs&&e.vattrs.ref&&e.vattrs.ref(t?null:e.t),e.vchildren&&e.vchildren.forEach(e=>{p(e,t)}))},d=(e,t)=>{{let n=0,o=!1;const i=()=>t.performance.now(),l=!1!==e.asyncQueue,s=Promise.resolve(),r=[],a=[],f=[],c=[],u=t=>n=>{t.push(n),o||(o=!0,e.raf(v))},p=e=>{for(let t=0;t<e.length;t++)try{e[t](i())}catch(e){console.error(e)}e.length=0},d=(e,t)=>{let n,o=0;for(;o<e.length&&(n=i())<t;)try{e[o++](n)}catch(e){console.error(e)}o===e.length?e.length=0:0!==o&&e.splice(0,o)},v=()=>{n++,p(a);const t=l?i()+7*Math.ceil(n*(1/22)):Infinity;d(f,t),d(c,t),f.length>0&&(c.push(...f),f.length=0),(o=a.length+f.length+c.length>0)?e.raf(v):n=0};return e.raf||(e.raf=t.requestAnimationFrame.bind(t)),{tick(e){r.push(e),1===r.length&&s.then(()=>p(r))},read:u(a),write:u(f)}}},v=[],b={forEach:(e,t)=>e.forEach(t),map:(e,t)=>e.map(t)},m=(e,t,n)=>{const[o,i,,l,s,r]=e,a={color:{k:"color"}};if(l)for(t=0;t<l.length;t++)a[(n=l[t])[0]]={C:n[1],j:!!n[2],k:"string"==typeof n[3]?n[3]:n[3]?n[0]:0,A:n[4]};return{_:o,l:i,u:Object.assign({},a),O:s,S:r?r.map(y):void 0}},y=e=>({W:e[0],N:e[1],P:!!e[2],L:!!e[3],R:!!e[4]}),h=(e,t)=>i(t)&&"object"!=typeof t&&"function"!=typeof t?e===Boolean||4===e?"false"!==t&&(""===t||!!t):e===Number||8===e?parseFloat(t):e===String||2===e?t.toString():t:t,w=(e,t,n)=>{e.T.add(t),e.D.has(t)||(e.D.set(t,!0),e.H?e.queue.write(()=>M(e,t,n)):e.queue.tick(()=>M(e,t,n)))},M=async(t,n,o,i,l,s)=>{if(t.D.delete(n),!t.q.has(n)){if(!(l=t.B.get(n))){if((s=t.F.get(n))&&!s["s-rn"])return void(s["s-rc"]=s["s-rc"]||[]).push(()=>{M(t,n,o)});if(l=E(t,n,t.I.get(n),o))try{l.componentWillLoad&&await l.componentWillLoad()}catch(e){t.U(e,3,n)}}((t,n,o,i)=>{try{const l=n.Y.host,s=n.Y.encapsulation,r=!1;let a,f=o;if(i.render||i.hostData||l||a){t.Z=!0;const n=i.render&&i.render();let l;t.Z=!1;const a=e(null,l,n),c=t.G.get(o)||{};c.t=f,t.G.set(o,t.render(o,c,a,r,s))}o["s-rn"]=!0,o["s-rc"]&&(o["s-rc"].forEach(e=>e()),o["s-rc"]=null)}catch(e){t.Z=!1,t.U(e,8,o,!0)}})(t,t.s(n),n,l),n["s-init"]()}},g=(e,t,n,o,l,s,r,a,f)=>{if(t.type||t.state){const c=e.J.get(n);t.state||(!t.attr||void 0!==c[l]&&""!==c[l]||(a=s&&s.K)&&i(f=a[t.attr])&&(c[l]=h(t.type,f)),n.hasOwnProperty(l)&&(void 0===c[l]&&(c[l]=h(t.type,n[l])),"mode"!==l&&delete n[l])),o.hasOwnProperty(l)&&void 0===c[l]&&(c[l]=o[l]),C(o,l,function c(t){return(t=e.J.get(e.V.get(this)))&&t[l]},function u(n,o){(o=e.V.get(this))&&(t.state||t.mutable)&&$(e,o,l,n,r)})}else if(t.context){const i=e.X(t.context);void 0!==i&&k(o,l,i.getContext&&i.getContext(n)||i)}},$=(e,t,n,o,i,l,s)=>{(s=e.J.get(t))||e.J.set(t,s={}),o!==s[n]&&(s[n]=o,e.B.get(t)&&!e.Z&&t["s-rn"]&&w(e,t,i))},k=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,value:n})},C=(e,t,n,o)=>{Object.defineProperty(e,t,{configurable:!0,get:n,set:o})},E=(e,t,n,o,i,l)=>{try{i=new(l=e.s(t).Y),((e,t,n,o,i,l)=>{e.V.set(o,n),e.J.has(n)||e.J.set(n,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(([t,s])=>{g(e,s,n,o,t,i,l)})})(e,l,t,i,n,o)}catch(n){i={},e.U(n,7,t,!0)}return e.B.set(t,i),i},j=(e,t,n,o,i,l)=>{if(e.T.delete(t),(i=e.F.get(t))&&((o=i["s-ld"])&&((n=o.indexOf(t))>-1&&o.splice(n,1),o.length||i["s-init"]&&i["s-init"]()),e.F.delete(t)),e.ee.length&&!e.T.size)for(;l=e.ee.shift();)l()},A=(e,t,n,o)=>{t.forEach(([t,i])=>{3&i.C&&C(n,t,function n(){return(e.J.get(this)||{})[t]},function n(l){$(e,this,t,h(i.A,l),o)})})},_=(e,t,n,o,i)=>{if(n.connectedCallback=function(){((e,t,n)=>{e.q.delete(n),e.te.has(n)||(e.ne=!0,e.T.add(n),e.te.set(n,!0),((e,t,n)=>{for(n=t;n=e.v.oe(n);)if(e.ie(n)){e.le.has(t)||(e.F.set(t,n),(n["s-ld"]=n["s-ld"]||[]).push(t));break}})(e,n),e.queue.tick(()=>{e.I.set(n,((e,t,n,o,i)=>(n.mode||(n.mode=e.se(n)),n["s-cr"]||e.re(n,"ssrv")||e.ae&&1===t.O||(n["s-cr"]=e.fe(""),n["s-cr"]["s-cn"]=!0,e.ce(n,n["s-cr"],e.ue(n)[0])),o={K:{}},t.u&&Object.keys(t.u).forEach(l=>{(i=t.u[l].k)&&(o.K[i]=e.re(n,i))}),o))(e.v,t,n)),e.pe(t,n)}))})(e,t,this)},n.disconnectedCallback=function(){((e,t)=>{!e.de&&((e,t)=>{for(;t;){if(!e.ve(t))return 9!==e.be(t);t=e.ve(t)}})(e.v,t)&&(e.q.set(t,!0),j(e,t),p(e.G.get(t),!0),e.v.g(t),e.me.delete(t),[e.F,e.ye,e.I].forEach(e=>e.delete(t)))})(e,this)},n["s-init"]=function(){((e,t,n,o,i,l,s)=>{if((i=e.B.get(t))&&!e.q.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){e.le.set(t,!0),(s=e.he.has(t))||(e.he.set(t,!0),t["s-ld"]=void 0,e.v.we(t,n));try{p(e.G.get(t)),(l=e.ye.get(t))&&(l.forEach(e=>e(t)),e.ye.delete(t)),!s&&i.componentDidLoad&&i.componentDidLoad()}catch(n){e.U(n,4,t)}j(e,t)}})(e,this,o)},n.forceUpdate=function(){w(e,this,i)},t.u){const o=Object.entries(t.u);{let e={};o.forEach(([t,{k:n}])=>{n&&(e[n]=t)}),e=Object.assign({},e),n.attributeChangedCallback=function(t,n,o){(function i(e,t,n,o){const i=e[l(n)];i&&(t[i]=(null!==o||"boolean"!=typeof t[i])&&o)})(e,this,t,o)}}A(e,o,n,i)}},O=(t,n,o,s,r,a)=>{const f=o.performance,p={html:{}},v=o[t]=o[t]||{},b=((e,t,n)=>{const o=new WeakMap,i={Me:n,ae:!!n.documentElement.attachShadow,ge:!1,be:e=>e.nodeType,$e:e=>n.createElement(e),ke:(e,t)=>n.createElementNS(e,t),fe:e=>n.createTextNode(e),Ce:e=>n.createComment(e),ce:(e,t,n)=>e.insertBefore(t,n),Ee:e=>e.remove(),je:(e,t)=>e.appendChild(t),we:(e,t)=>{e.classList.add(t)},ue:e=>e.childNodes,ve:e=>e.parentNode,Ae:e=>e.nextSibling,_e:e=>e.previousSibling,Oe:e=>l(e.nodeName),Se:e=>e.textContent,We:(e,t)=>e.textContent=t,re:(e,t)=>e.getAttribute(t),Ne:(e,t,n)=>e.setAttribute(t,n),p:(e,t)=>e.removeAttribute(t),m:(e,t)=>e.hasAttribute(t),se:t=>t.getAttribute("mode")||(e.Context||{}).mode,xe:(e,o)=>"child"===o?e.firstElementChild:"parent"===o?i.oe(e):"body"===o?n.body:"document"===o?n:"window"===o?t:e,M:(t,n,l,s,r,a,f,c,u,p)=>{let d=t,v=l,b=o.get(t);p=n+s,b&&b[p]&&b[p](),"object"==typeof f&&(d=f),d&&(c=i.ge?{capture:!!r,passive:!!a}:!!r,e.ael(d,n,v,c),b||o.set(t,b={}),b[p]=(()=>{d&&e.rel(d,n,v,c),b[p]=null}))},g:(e,t,n,i)=>{(i=o.get(e))&&(t?i[t+n]&&i[t+n]():Object.keys(i).forEach(e=>{i[e]&&i[e]()}))},Pe:(e,n,o,i)=>(i=new t.CustomEvent(n,o),e&&e.dispatchEvent(i),i),oe:(e,t)=>(t=i.ve(e))&&11===i.be(t)?t.host:t,Le:(e,t,n,o)=>e.setAttributeNS(t,n,o)};return e.ael||(e.ael=((e,t,n,o)=>e.addEventListener(t,n,o)),e.rel=((e,t,n,o)=>e.removeEventListener(t,n,o))),i})(v,o,s),m=b.Me.documentElement,y=o["s-defined"]=o["s-defined"]||{},h={v:b,i:(e,t)=>{o.customElements.get(e._)||(_(h,p[e._]=e,t.prototype,a,f),t.observedAttributes=Object.values(e.u).map(e=>e.k).filter(e=>!!e),o.customElements.define(e._,t))},s:e=>p[b.Oe(e)],X:e=>n[e],isClient:!0,ie:e=>!(!y[b.Oe(e)]&&!h.s(e)),U:(e,t,n)=>console.error(e,t,n&&n.tagName),queue:n.queue=d(v,o),pe:(e,t)=>{{const n=!1,o={mode:t.mode,scoped:n};e.l(o).then(n=>{try{e.Y=n}catch(t){console.error(t),e.Y=class{}}w(h,t,f)})}},Z:!1,H:!1,de:!1,Re:void 0,F:new WeakMap,Te:new WeakMap,te:new WeakMap,me:new WeakMap,he:new WeakMap,le:new WeakMap,V:new WeakMap,I:new WeakMap,B:new WeakMap,q:new WeakMap,D:new WeakMap,ye:new WeakMap,De:new WeakMap,G:new WeakMap,J:new WeakMap,T:new Set,ee:[]};return n.isServer=n.isPrerender=!(n.isClient=!0),n.window=o,n.location=o.location,n.document=s,n.resourcesUrl=n.publicPath=r,v.h=e,v.Context=n,v.onReady=(()=>new Promise(e=>h.queue.write(()=>h.T.size?h.ee.push(e):e()))),h.render=((e,t)=>{let n,o,l,s,r,a,f;const p=(l,v,b,m,y,h,w,M,g)=>{if(M=v.vchildren[b],n||(s=!0,"slot"===M.vtag&&(o&&t.we(m,o+"-s"),M.vchildren?M.He=!0:M.qe=!0)),i(M.vtext))M.t=t.fe(M.vtext);else if(M.qe)M.t=t.fe("");else{if(h=M.t=u||"svg"===M.vtag?t.ke("http://www.w3.org/2000/svg",M.vtag):t.$e(M.He?"slot-fb":M.vtag),e.ie(h)&&e.le.delete(f),u="svg"===M.vtag||"foreignObject"!==M.vtag&&u,c(e,null,M,u),i(o)&&h["s-si"]!==o&&t.we(h,h["s-si"]=o),M.vchildren)for(y=0;y<M.vchildren.length;++y)(w=p(l,M,y,h))&&t.je(h,w);"svg"===M.vtag&&(u=!1)}return M.t["s-hn"]=a,(M.He||M.qe)&&(M.t["s-sr"]=!0,M.t["s-cr"]=r,M.t["s-sn"]=M.vname||"",(g=l&&l.vchildren&&l.vchildren[b])&&g.vtag===M.vtag&&l.t&&d(l.t)),M.t},d=(n,o,i,l)=>{e.de=!0;const r=t.ue(n);for(i=r.length-1;i>=0;i--)(l=r[i])["s-hn"]!==a&&l["s-ol"]&&(t.Ee(l),t.ce(h(l),l,y(l)),t.Ee(l["s-ol"]),l["s-ol"]=null,s=!0),o&&d(l,o);e.de=!1},v=(e,n,o,l,s,r,f,c)=>{const u=e["s-cr"];for((f=u&&t.ve(u)||e).shadowRoot&&t.Oe(f)===a&&(f=f.shadowRoot);s<=r;++s)l[s]&&(c=i(l[s].vtext)?t.fe(l[s].vtext):p(null,o,s,e))&&(l[s].t=c,t.ce(f,c,y(n)))},b=(e,n,o,s)=>{for(;n<=o;++n)i(e[n])&&(s=e[n].t,l=!0,s["s-ol"]?t.Ee(s["s-ol"]):d(s,!0),t.Ee(s))},m=(e,t)=>e.vtag===t.vtag&&e.vkey===t.vkey&&("slot"!==e.vtag||e.vname===t.vname),y=e=>e&&e["s-ol"]?e["s-ol"]:e,h=e=>t.ve(e["s-ol"]?e["s-ol"]:e),w=(n,o,l)=>{const s=o.t=n.t,r=n.vchildren,a=o.vchildren;u=o.t&&i(t.oe(o.t))&&void 0!==o.t.ownerSVGElement,u="svg"===o.vtag||"foreignObject"!==o.vtag&&u,i(o.vtext)?(l=s["s-cr"])?t.We(t.ve(l),o.vtext):n.vtext!==o.vtext&&t.We(s,o.vtext):("slot"!==o.vtag&&c(e,n,o,u),i(r)&&i(a)?((e,n,o,l,s,r,a,f)=>{let c=0,u=0,M=n.length-1,g=n[0],$=n[M],k=l.length-1,C=l[0],E=l[k];for(;c<=M&&u<=k;)if(null==g)g=n[++c];else if(null==$)$=n[--M];else if(null==C)C=l[++u];else if(null==E)E=l[--k];else if(m(g,C))w(g,C),g=n[++c],C=l[++u];else if(m($,E))w($,E),$=n[--M],E=l[--k];else if(m(g,E))"slot"!==g.vtag&&"slot"!==E.vtag||d(t.ve(g.t)),w(g,E),t.ce(e,g.t,t.Ae($.t)),g=n[++c],E=l[--k];else if(m($,C))"slot"!==g.vtag&&"slot"!==E.vtag||d(t.ve($.t)),w($,C),t.ce(e,$.t,g.t),$=n[--M],C=l[++u];else{for(s=null,r=c;r<=M;++r)if(n[r]&&i(n[r].vkey)&&n[r].vkey===C.vkey){s=r;break}i(s)?((f=n[s]).vtag!==C.vtag?a=p(n&&n[u],o,s,e):(w(f,C),n[s]=void 0,a=f.t),C=l[++u]):(a=p(n&&n[u],o,u,e),C=l[++u]),a&&t.ce(h(g.t),a,y(g.t))}c>M?v(e,null==l[k+1]?null:l[k+1].t,o,l,u,k):u>k&&b(n,c,M)})(s,r,o,a):i(a)?(i(n.vtext)&&t.We(s,""),v(s,null,o,a,0,a.length-1)):i(r)&&b(r,0,r.length-1)),u&&"svg"===o.vtag&&(u=!1)},M=(e,n,o,i,l,s,r,a)=>{for(i=0,l=(o=t.ue(e)).length;i<l;i++)if(n=o[i],1===t.be(n)){if(n["s-sr"])for(r=n["s-sn"],n.hidden=!1,s=0;s<l;s++)if(o[s]["s-hn"]!==n["s-hn"])if(a=t.be(o[s]),""!==r){if(1===a&&r===t.re(o[s],"slot")){n.hidden=!0;break}}else if(1===a||3===a&&""!==t.Se(o[s]).trim()){n.hidden=!0;break}M(n)}},g=[],$=(e,n,o,i,s,r,a,f,c,u)=>{for(s=0,r=(n=t.ue(e)).length;s<r;s++){if((o=n[s])["s-sr"]&&(i=o["s-cr"]))for(f=t.ue(t.ve(i)),c=o["s-sn"],a=f.length-1;a>=0;a--)(i=f[a])["s-cn"]||i["s-nr"]||i["s-hn"]===o["s-hn"]||((3===(u=t.be(i))||8===u)&&""===c||1===u&&null===t.re(i,"slot")&&""===c||1===u&&t.re(i,"slot")===c)&&(g.some(e=>e.Be===i)||(l=!0,i["s-sn"]=c,g.push({Fe:o,Be:i})));1===t.be(o)&&$(o)}};return(i,c,u,p,d,v,b,m,y,h,k,C)=>{if(f=i,a=t.Oe(f),r=f["s-cr"],n=p,o=f["s-sc"],s=l=!1,w(c,u),s){for($(u.t),b=0;b<g.length;b++)(m=g[b]).Be["s-ol"]||((y=t.fe(""))["s-nr"]=m.Be,t.ce(t.ve(m.Be),m.Be["s-ol"]=y,m.Be));for(e.de=!0,b=0;b<g.length;b++){for(m=g[b],k=t.ve(m.Fe),C=t.Ae(m.Fe),y=m.Be["s-ol"];y=t._e(y);)if((h=y["s-nr"])&&h&&h["s-sn"]===m.Be["s-sn"]&&k===t.ve(h)&&(h=t.Ae(h))&&h&&!h["s-nr"]){C=h;break}(!C&&k!==t.ve(m.Be)||t.Ae(m.Be)!==C)&&m.Be!==C&&(t.Ee(m.Be),t.ce(k,m.Be,C))}e.de=!1}return l&&M(u.t),g.length=0,u}})(h,b),m["s-ld"]=[],m["s-rn"]=!0,m["s-init"]=(()=>{h.le.set(m,v.loaded=h.H=!0),b.Pe(o,"appload",{detail:{namespace:t}})}),((e,t,n,o,i,l)=>{if(t.componentOnReady=((t,n)=>{if(!t.nodeName.includes("-"))return n(null),!1;const o=e.s(t);if(o)if(e.le.has(t))n(t);else{const o=e.ye.get(t)||[];o.push(n),e.ye.set(t,o)}return!!o}),i){for(l=i.length-1;l>=0;l--)t.componentOnReady(i[l][0],i[l][1])&&i.splice(l,1);for(l=0;l<o.length;l++)if(!n[o[l]].componentOnReady)return;for(l=0;l<i.length;l++)i[l][1](null);i.length=0}})(h,v,o,o["s-apps"],o["s-cr"]),v.initialized=!0,h},S={};let W=!1;export{t as defineCustomElement,e as h};