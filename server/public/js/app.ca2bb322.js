(function(e){function t(t){for(var r,s,i=t[0],l=t[1],u=t[2],d=0,m=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&m.push(a[s][0]),a[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(m.length)m.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1c29":function(e,t,n){},"21bb":function(e,t,n){"use strict";n("2dad")},"2cfc":function(e,t,n){},"2dad":function(e,t,n){},"3f86":function(e,t,n){"use strict";n("c18b")},"477b":function(e,t,n){},"4ec8":function(e,t,n){e.exports=n.p+"img/onboarding-3.54fa67e4.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},o=[],s=(n("5da1"),n("2877")),i={},l=Object(s["a"])(i,a,o,!1,null,"5c5de384",null),u=l.exports,c=n("9483");Object(c["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var d,m,p=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"login"},[n("h1",[e._v("Bloom")]),n("h2",[e._v("Welkom")]),e.submitted?e._e():n("form",{attrs:{action:"/",method:"POST",enctype:"application/x-www-form-urlencoded"}},[n("fieldset",[n("legend",[n("label",{attrs:{for:"emailAddress"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.emailAddress,expression:"user.emailAddress"}],attrs:{type:"text",placeholder:"E-mailadres",id:"emailAddress",name:"emailAddress"},domProps:{value:e.user.emailAddress},on:{input:function(t){t.target.composing||e.$set(e.user,"emailAddress",t.target.value)}}})]),n("label",{attrs:{for:"password"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{type:"password",placeholder:"Wachtwoord",id:"password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),n("button",{on:{click:e.login}},[e._v("Inloggen")]),n("router-link",{attrs:{to:"/forgot-password","active-class":"forgot-password"}},[e._v("Wachtwoord vergeten")]),n("router-link",{attrs:{to:"/register","active-class":"register"}},[e._v("Ik heb nog geen account")])],1)])])])},f=[],g=n("d4ec"),h=n("bee2"),b=n("bc3a"),w=n.n(b),k=w.a.create({headers:{"Content-type":"application/json"}}),x=function(){function e(){Object(g["a"])(this,e)}return Object(h["a"])(e,[{key:"createUser",value:function(e){return k.post("/api/register",e)}},{key:"loginUser",value:function(e){return k.post("/api/login",e)}}]),e}(),_=new x,j={name:"Login",data:function(){return{user:{id:null,title:"",description:"",published:!1},submitted:!1}},methods:{login:function(){var e={emailAddress:this.user.emailAddress,password:this.user.password};_.loginUser(e).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}}},y=j,N=(n("6ba9"),Object(s["a"])(y,v,f,!1,null,null,null)),A=N.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"register"},[n("h2",[e._v("Register")]),e.submitted?e._e():n("form",{attrs:{action:"/register",method:"POST",enctype:"application/x-www-form-urlencoded"}},[n("fieldset",[n("legend",[n("label",{attrs:{for:"firstName"}},[e._v("Voornaam "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.firstName,expression:"user.firstName"}],attrs:{type:"text",id:"firstName",name:"firstName"},domProps:{value:e.user.firstName},on:{input:function(t){t.target.composing||e.$set(e.user,"firstName",t.target.value)}}})]),n("label",{attrs:{for:"surName"}},[e._v("Achternaam "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.surName,expression:"user.surName"}],attrs:{type:"text",id:"surName",name:"surName"},domProps:{value:e.user.surName},on:{input:function(t){t.target.composing||e.$set(e.user,"surName",t.target.value)}}})]),n("label",{attrs:{for:"emailAddress"}},[e._v("E-mailadres "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.emailAddress,expression:"user.emailAddress"}],attrs:{type:"text",id:"emailAddress",name:"emailAddress"},domProps:{value:e.user.emailAddress},on:{input:function(t){t.target.composing||e.$set(e.user,"emailAddress",t.target.value)}}})]),n("label",{attrs:{for:"password"}},[e._v("Wachtwoord "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{type:"password",id:"password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),n("label",{attrs:{for:"birthDate"}},[e._v("Geboortedatum "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.birthDate,expression:"user.birthDate"}],attrs:{type:"date",id:"birthDate",name:"birthDate"},domProps:{value:e.user.birthDate},on:{input:function(t){t.target.composing||e.$set(e.user,"birthDate",t.target.value)}}})]),n("label",{attrs:{for:"town"}},[e._v("Woonplaats "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.town,expression:"user.town"}],attrs:{type:"text",id:"town",name:"town"},domProps:{value:e.user.town},on:{input:function(t){t.target.composing||e.$set(e.user,"town",t.target.value)}}})]),n("h3",[e._v("gender")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.gender,expression:"user.gender"}],attrs:{type:"radio",id:"men",value:"Man",name:"gender"},domProps:{checked:e._q(e.user.gender,"Man")},on:{change:function(t){return e.$set(e.user,"gender","Man")}}}),n("label",{attrs:{for:"men"}},[e._v("Man")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.gender,expression:"user.gender"}],attrs:{type:"radio",id:"woman",value:"Vrouw",name:"gender"},domProps:{checked:e._q(e.user.gender,"Vrouw")},on:{change:function(t){return e.$set(e.user,"gender","Vrouw")}}}),n("label",{attrs:{for:"woman"}},[e._v("Vrouw")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.gender,expression:"user.gender"}],attrs:{type:"radio",id:"neutral",value:"Vrouw",name:"gender"},domProps:{checked:e._q(e.user.gender,"Vrouw")},on:{change:function(t){return e.$set(e.user,"gender","Vrouw")}}}),n("label",{attrs:{for:"neutral"}},[e._v("Neutraal")]),n("label",{attrs:{for:"typeIllness"}},[e._v("Type kanker "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.typeIllness,expression:"user.typeIllness"}],attrs:{type:"text",id:"typeIllness",name:"typeIllness"},domProps:{value:e.user.typeIllness},on:{input:function(t){t.target.composing||e.$set(e.user,"typeIllness",t.target.value)}}})]),n("label",{attrs:{for:"profileAvatar"}},[e._v("Profiel avatar (radio btns met created avatars) (render in template) "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.profileAvatar,expression:"user.profileAvatar"}],attrs:{type:"text",id:"profileAvatar",name:"profileAvatar"},domProps:{value:e.user.profileAvatar},on:{input:function(t){t.target.composing||e.$set(e.user,"profileAvatar",t.target.value)}}})]),n("label",{attrs:{for:"about"}},[e._v("Vertel iets over jezelf "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.about,expression:"user.about"}],attrs:{type:"textarea",id:"about",name:"about"},domProps:{value:e.user.about},on:{input:function(t){t.target.composing||e.$set(e.user,"about",t.target.value)}}})]),n("button",{on:{click:e.saveUser}},[e._v("Aanmaken")])])])])])},$=[],P={name:"Register",data:function(){return{user:{id:null,title:"",description:"",published:!1},submitted:!1}},methods:{saveUser:function(){var e={firstName:this.user.firstName,surName:this.user.surName,emailAddress:this.user.emailAddress,password:this.user.password,birthDate:this.user.birthDate,town:this.user.town,gender:this.user.gender,typeIllness:this.user.typeIllness,profileAvatar:this.user.profileAvatar,about:this.user.about};_.createUser(e).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}}},I=P,S=(n("3f86"),Object(s["a"])(I,O,$,!1,null,null,null)),C=S.exports,D={},B=Object(s["a"])(D,d,m,!1,null,null,null),E=B.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("section",{staticClass:"index__page"},[e._m(0),n("router-link",{staticClass:"start",attrs:{to:"/onboarding"}},[e._v("Starten")])],1)])},V=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("p",[e._v("Welkom bij")]),n("h1",[e._v("bloom")])])}],z={name:"Home"},T=z,U=(n("21bb"),Object(s["a"])(T,M,V,!1,null,null,null)),L=U.exports,W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("header",[r("nav",[e._m(0),r("li",[r("router-link",{staticClass:"skip",attrs:{to:"/login"}},[e._v("skip")])],1)])]),e._l(e.articles,(function(t,a){return r("article",{key:a,staticClass:"artikel",class:{"card-slider-inactive":a!==e.$store.state.activeIndex}},[r("div",{staticClass:"container"},[r("img",{staticClass:"image",attrs:{src:n("7202")("./"+t.img)}}),r("div",{staticClass:"text"},[r("h2",[e._v(e._s(t.heading))]),r("p",[e._v(e._s(t.text))])])])])})),r("div",{staticClass:"buttons"},[r("Button",{attrs:{message:"volgende",isSlider:!0}}),r("div",{staticClass:"circles"},e._l(e.maxslides,(function(t){return r("span",{key:t,class:{"fill-active":t-1===e.$store.state.activeIndex},on:{click:function(n){return e.nextSlide(t)}}})})),0)],1)],2)},q=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"logo"},[n("h2",[e._v("bloom")])])}],F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isSlider?n("a",{staticClass:"nextButton",on:{click:function(t){return e.nextSlide()}}},[e._v(" "+e._s(e.message)+" "),n("span",[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 7.246 11.941"}},[n("path",{attrs:{fill:"#f07904",d:"M7.054 6.434a.656.656 0 000-.928L1.74.192a.656.656 0 00-.928 0l-.62.62a.656.656 0 000 .927l4.21 4.231-4.211 4.231a.656.656 0 000 .927l.62.62a.656.656 0 00.928 0z"}})])])]):n("router-link",{staticClass:"nextButton",attrs:{to:e.slug}},[e._v(" "+e._s(e.message)+" "),n("span",[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 7.246 11.941"}},[n("path",{attrs:{fill:"#f07904",d:"M7.054 6.434a.656.656 0 000-.928L1.74.192a.656.656 0 00-.928 0l-.62.62a.656.656 0 000 .927l4.21 4.231-4.211 4.231a.656.656 0 000 .927l.62.62a.656.656 0 00.928 0z"}})])])])},H=[],J={props:{message:{type:String,default:"Volgende"},isSlider:{type:Boolean,default:!0},slug:{type:String,default:"/"}},methods:{nextSlide:function(){return this.$store.commit("nextSlide")}}},R=J,G=(n("d92c"),Object(s["a"])(R,F,H,!1,null,"40dd0a31",null)),K=G.exports,Z={components:{Button:K},methods:{nextSlide:function(e){return this.$store.commit("nextSlide",e)}},data:function(){return{maxslides:3,articles:[{img:"onboarding-1.jpg",heading:"Grote invloed op je leven",text:"Kanker kan grote gevolgen hebben voor je werk, je relaties en je dagelijks leven. Alles is anders. Dat kan je boos, onzeker, eenzaam of somber maken. Veel mensen met kanker hebben dit soort gevoelens. Dat kan tijdens de behandeling zijn, maar juist ook de jaren daarna. Bloom helpt je om na het behandelingstraject het dagelijks leven weer op te pakken."},{img:"onboarding-2.jpg",heading:"Psychosociale klachten",text:"De gevoelens en emoties waar je mee te maken kan krijgen noem je psychosociale klachten. Ben je vaak moe, bang of somber? Maak je je zorgen over je inkomen of je relatie? Bloom geeft je inzicht in een aantal van deze klachten. Je krijgt hierbij meer informatie en praktische tips, maar ook doorschakeling naar professionele hulp."},{img:"onboarding-3.jpg",heading:"Lotgenoten contact",text:"Het is belangrijk om te praten over je gevoelens. Dat kan opluchten. Bovendien kunnen anderen je beter helpen als ze weten hoe het met je gaat. Zo sta je er niet helemaal alleen voor. Over je ziekte en problemen praten is niet altijd makkelijk. Toch is het goed én belangrijk. Daarom kun je via Bloom ook in contact komen met lotgenoten."}]}}},Q=Z,X=(n("eed6"),Object(s["a"])(Q,W,q,!1,null,"fc64330c",null)),Y=X.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"intro"},[n("h1",[e._v("Introkaartjes")]),n("router-link",{attrs:{to:"/login"}},[e._v("Volgende(Inloggen)")])],1)},te=[],ne={name:"Intro"},re=ne,ae=Object(s["a"])(re,ee,te,!1,null,null,null),oe=ae.exports;r["a"].use(p["a"]);var se=[{path:"/login",name:"Login",component:A},{path:"/register",name:"Register",component:C},{path:"/forgot-password",name:"Forgot password",component:E},{path:"/",name:"Home",component:L},{path:"/intro",name:"Intro",component:oe},{path:"/onboarding",name:"onboarding",component:Y}],ie=new p["a"]({mode:"history",base:"/",routes:se}),le=ie,ue=n("2f62");r["a"].use(ue["a"]);var ce=new ue["a"].Store({state:{activeIndex:0,Onboardingmax:3},mutations:{nextSlide:function(e,t){return t?e.activeIndex=t-1:e.activeIndex===e.Onboardingmax-1?e.activeIndex=0:e.activeIndex++}},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:le,store:ce,render:function(e){return e(u)}}).$mount("#app")},"5da1":function(e,t,n){"use strict";n("2cfc")},"5f8e":function(e,t,n){e.exports=n.p+"img/onboarding-2.c8e6ff47.jpg"},"6ba9":function(e,t,n){"use strict";n("477b")},7202:function(e,t,n){var r={"./onboarding-1.jpg":"c6ab","./onboarding-2.jpg":"5f8e","./onboarding-3.jpg":"4ec8"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="7202"},b31c:function(e,t,n){},c18b:function(e,t,n){},c6ab:function(e,t,n){e.exports=n.p+"img/onboarding-1.c6c71a25.jpg"},d92c:function(e,t,n){"use strict";n("1c29")},eed6:function(e,t,n){"use strict";n("b31c")}});
//# sourceMappingURL=app.ca2bb322.js.map