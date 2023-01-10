(function(){"use strict";var n={1529:function(n,e,t){var r=t(9242),i=t(3396);function o(n,e,t,r,o,u){const s=(0,i.up)("Indecision");return(0,i.wg)(),(0,i.j4)(s)}var u=t(7139);const s=(0,i._)("sup",null,"2",-1);function a(n,e,t,r,o,a){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("h2",null,(0,u.zw)(a.customTitle),1),(0,i._)("p",null,[(0,i.Uk)((0,u.zw)(o.counter)+" ",1),s,(0,i.Uk)(" = "+(0,u.zw)(a.squareCounter),1)]),(0,i._)("button",{onClick:e[0]||(e[0]=(...n)=>a.increase&&a.increase(...n))},"+ 1"),(0,i._)("button",{onClick:e[1]||(e[1]=(...n)=>a.decrease&&a.decrease(...n))},"- 1")],64)}var c={props:{title:String,start:{type:Number,default:100,validator(n){return n>100}}},data(){return{counter:this.start}},methods:{getSquareValue(){return this.counter*this.counter},increase(){this.counter++},decrease(){this.counter--}},computed:{squareCounter(){return this.counter*this.counter},customTitle(){return this.title||"Counter"}}},l=t(89);const d=(0,l.Z)(c,[["render",a]]);var f=d;const p=n=>((0,i.dD)("data-v-1563f53d"),n=n(),(0,i.Cn)(),n),h=["src"],v=p((()=>(0,i._)("div",{class:"bg-dark"},null,-1))),w={class:"indecision-container"},g=p((()=>(0,i._)("h1",null,"Indecision App",-1))),m=p((()=>(0,i._)("p",{class:"text-note"},"Recuerda terminar con un signo de interrogación (?)",-1))),b=p((()=>(0,i._)("p",{class:"text-note"},[(0,i._)("b",null,"NOTA: "),(0,i.Uk)(" Esta app es con fines de entretenimiento, en ningun momento la respuesta deberias aplicarla en desisiones de tu vida real.")],-1))),_={key:0};function y(n,e,t,o,s,a){return(0,i.wg)(),(0,i.iD)(i.HY,null,[n.img?((0,i.wg)(),(0,i.iD)("img",{key:0,src:n.img,alt:"bg"},null,8,h)):(0,i.kq)("",!0),v,(0,i._)("div",w,[g,(0,i.wy)((0,i._)("input",{type:"text",name:"question",id:"question",placeholder:"Hazme una pregunta","onUpdate:modelValue":e[0]||(e[0]=n=>s.question=n)},null,512),[[r.nr,s.question]]),m,b,s.isValidQuestion?((0,i.wg)(),(0,i.iD)("div",_,[(0,i._)("h2",null,(0,u.zw)(s.question),1),(0,i._)("h1",null,(0,u.zw)(s.answer),1)])):(0,i.kq)("",!0)])],64)}var k={data(){return{question:null,answer:null,isValidQuestion:!1}},methods:{async getAnswer(){this.answer="Pensando..";const{answer:n,image:e}=await fetch("https://yesno.wtf/api").then((n=>n.json()));this.answer="yes"===n?"Sí!":"No!",this.img=e}},watch:{question(n,e){this.isValidQuestion=!1,n.includes("?")&&(this.isValidQuestion=!0,this.getAnswer())}}};const q=(0,l.Z)(k,[["render",y],["__scopeId","data-v-1563f53d"]]);var O=q,C={name:"App",components:{Counter:f,Indecision:O}};const j=(0,l.Z)(C,[["render",o]]);var x=j;(0,r.ri)(x).mount("#app")}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,function(){var n=[];t.O=function(e,r,i,o){if(!r){var u=1/0;for(l=0;l<n.length;l++){r=n[l][0],i=n[l][1],o=n[l][2];for(var s=!0,a=0;a<r.length;a++)(!1&o||u>=o)&&Object.keys(t.O).every((function(n){return t.O[n](r[a])}))?r.splice(a--,1):(s=!1,o<u&&(u=o));if(s){n.splice(l--,1);var c=i();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=n.length;l>0&&n[l-1][2]>o;l--)n[l]=n[l-1];n[l]=[r,i,o]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,r){var i,o,u=r[0],s=r[1],a=r[2],c=0;if(u.some((function(e){return 0!==n[e]}))){for(i in s)t.o(s,i)&&(t.m[i]=s[i]);if(a)var l=a(t)}for(e&&e(r);c<u.length;c++)o=u[c],t.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return t.O(l)},r=self["webpackChunkIndecisionApp"]=self["webpackChunkIndecisionApp"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(1529)}));r=t.O(r)})();
//# sourceMappingURL=app.fa94958d.js.map