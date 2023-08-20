import{e as g}from"./render.01033038.js";import{N as w,v as x,O as C,P as E,Q as R,R as T}from"./index.b3d3122f.js";function N(e,t){const r=e.style;for(const o in t)r[o]=t[o]}function S(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=w(e);if(t)return t.$el||t}function O(e,t=250){let r=!1,o;return function(){return r===!1&&(r=!0,setTimeout(()=>{r=!1},t),o=e.apply(this,arguments)),o}}function h(e,t,r,o){r.modifiers.stop===!0&&R(e);const s=r.modifiers.color;let p=r.modifiers.center;p=p===!0||o===!0;const a=document.createElement("span"),i=document.createElement("span"),d=T(e),{left:_,top:$,width:l,height:c}=t.getBoundingClientRect(),n=Math.sqrt(l*l+c*c),f=n/2,m=`${(l-n)/2}px`,k=p?m:`${d.left-_-f}px`,y=`${(c-n)/2}px`,b=p?y:`${d.top-$-f}px`;i.className="q-ripple__inner",N(i,{height:`${n}px`,width:`${n}px`,transform:`translate3d(${k},${b},0) scale3d(.2,.2,1)`,opacity:0}),a.className=`q-ripple${s?" text-"+s:""}`,a.setAttribute("dir","ltr"),a.appendChild(i),t.appendChild(a);const v=()=>{a.remove(),clearTimeout(u)};r.abort.push(v);let u=setTimeout(()=>{i.classList.add("q-ripple__inner--enter"),i.style.transform=`translate3d(${m},${y},0) scale3d(1,1,1)`,i.style.opacity=.2,u=setTimeout(()=>{i.classList.remove("q-ripple__inner--enter"),i.classList.add("q-ripple__inner--leave"),i.style.opacity=0,u=setTimeout(()=>{a.remove(),r.abort.splice(r.abort.indexOf(v),1)},275)},250)},50)}function q(e,{modifiers:t,value:r,arg:o}){const s=Object.assign({},e.cfg.ripple,t,r);e.modifiers={early:s.early===!0,stop:s.stop===!0,center:s.center===!0,color:s.color||o,keyCodes:[].concat(s.keyCodes||13)}}var j=g({name:"ripple",beforeMount(e,t){const r=t.instance.$.appContext.config.globalProperties.$q.config||{};if(r.ripple===!1)return;const o={cfg:r,enabled:t.value!==!1,modifiers:{},abort:[],start(s){o.enabled===!0&&s.qSkipRipple!==!0&&s.type===(o.modifiers.early===!0?"pointerdown":"click")&&h(s,e,o,s.qKeyEvent===!0)},keystart:O(s=>{o.enabled===!0&&s.qSkipRipple!==!0&&x(s,o.modifiers.keyCodes)===!0&&s.type===`key${o.modifiers.early===!0?"down":"up"}`&&h(s,e,o,!0)},300)};q(o,t),e.__qripple=o,C(o,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const r=e.__qripple;r!==void 0&&(r.enabled=t.value!==!1,r.enabled===!0&&Object(t.value)===t.value&&q(r,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(r=>{r()}),E(t,"main"),delete e._qripple)}});export{j as R,N as c,S as g};