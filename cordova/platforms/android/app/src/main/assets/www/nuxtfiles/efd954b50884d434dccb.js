(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{293:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return m}));var r=n(299),o=n(5),d=Object(o.g)("v-card__actions"),c=Object(o.g)("v-card__subtitle"),l=Object(o.g)("v-card__text"),m=Object(o.g)("v-card__title");r.a},297:function(t,e,n){"use strict";var r=n(3),o=n(1);var d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return o.default.extend({name:"proxyable",model:{prop:t,event:e},props:Object(r.a)({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(r.a)({},t,(function(t){this.internalLazyValue=t}))})}();e.a=d},312:function(t,e,n){var content=n(335);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("718399b8",content,!0,{sourceMap:!1})},334:function(t,e,n){"use strict";var r=n(312);n.n(r).a},335:function(t,e,n){(e=n(23)(!1)).push([t.i,".footer-container[data-v-d6d75906]{-webkit-box-flex:1;flex-grow:1;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.media-container[data-v-d6d75906]{-webkit-box-flex:0;flex:0 0 auto}.media-and-footer-container[data-v-d6d75906]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.v-responsive.v-image[data-v-d6d75906]{padding-top:75%;height:0;position:relative;width:100%}.v-responsive__sizer[data-v-d6d75906]{padding:0}.v-image__image[data-v-d6d75906]{background:url(http://i.imgur.com/SrPdUD4.png) 50% 50% no-repeat;background-color:#000;position:absolute;width:100%;height:100%}@media screen and (orientation:landscape){.v-image__image[data-v-d6d75906]{background:url(http://i.imgur.com/SrPdUD4.png) no-repeat;position:absolute;width:300px;height:200px}.v-card-body[data-v-d6d75906]{margin-right:2.5em}.v-card-body div[data-v-d6d75906]{cursor:pointer}.v-responsive.v-image[data-v-d6d75906]{height:200px;width:300px}@media (min-width:48em){.v-card-body[data-v-d6d75906]{margin-right:0;padding-right:1em;width:50%}.v-responsive.v-image[data-v-d6d75906]{height:250px;width:350px}.v-image__image[data-v-d6d75906]{width:100%;height:100%}}@media (min-width:64em){.v-card-body[data-v-d6d75906]{width:25%;padding-right:3em}}@media (min-width:100em){.v-card-body[data-v-d6d75906]{width:20%;padding-right:3em}}}@media screen and (min-width:27.5em) and (orientation:portrait){.v-card-body[data-v-d6d75906]{width:50%;padding-right:1em}}.v-card-body[data-v-d6d75906]{margin-bottom:1.5em;align-self:stretch}.v-card__title[data-v-d6d75906]{font-weight:600;font-size:1em;padding:.5em 0 0;line-height:1em;color:#1a1a1a}.theme--light.v-card .v-card__subtitle[data-v-d6d75906]{padding:0;color:#1a1a1a;font-weight:300;font-size:.9em;line-height:12px}",""]),t.exports=e},378:function(t,e,n){var content=n(671);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("5ec3aaac",content,!0,{sourceMap:!1})},408:function(t,e,n){"use strict";var r={name:"courseCard",props:["title","description","image","teacher","slug"]},o=(n(334),n(39)),d=n(43),c=n.n(d),l=n(299),m=n(293),v=n(775),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"v-card-body",attrs:{elevation:"0",color:"transparent",tile:!0}},[n("n-link",{attrs:{to:"curso/"+t.slug}},[n("v-img",{attrs:{src:t.image}})],1),t._v(" "),n("div",{staticClass:"media-and-footer-container"},[n("n-link",{staticClass:"footer-container",attrs:{to:"curso/"+t.slug}},[n("v-card-title",{attrs:{to:"/curso/"+t.slug}},[t._v(t._s(t.title))]),t._v(" "),n("v-card-subtitle",{staticClass:"mt-0",attrs:{to:"/curso/"+t.slug}},[t._v(t._s(t.teacher))])],1)],1)],1)}),[],!1,null,"d6d75906",null);e.a=component.exports;c()(component,{VCard:l.a,VCardSubtitle:m.b,VCardTitle:m.d,VImg:v.a})},670:function(t,e,n){"use strict";var r=n(378);n.n(r).a},671:function(t,e,n){(e=n(23)(!1)).push([t.i,"#page[data-v-89f52bce]{height:100vh}.welcome[data-v-89f52bce]{padding:2em 0 0 1.5em;text-transform:uppercase}h1[data-v-89f52bce]{font-weight:900;font-size:1.5rem;line-height:24px}.welcome-title[data-v-89f52bce]{color:#1a1a1a}.welcome-subtitle[data-v-89f52bce]{color:#60c;font-size:1.1rem}@media screen and (orientation:portrait){.article-container[data-v-89f52bce]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column wrap}@media (min-width:27.5em){.article-container[data-v-89f52bce]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;padding:0 1em 56px 1.5em}}}@media screen and (orientation:landscape){.article-container[data-v-89f52bce]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row nowrap;-webkit-box-pack:start;justify-content:flex-start;align-content:flex-start;margin:0 2em 56px 1.5em;padding:0}@media (min-width:48em){.article-container[data-v-89f52bce]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;margin:0}}}@media (min-width:48em){.welcome[data-v-89f52bce]{padding-top:2em}.welcome-title[data-v-89f52bce]{font-size:2em;line-height:.8em}.welcome-subtitle[data-v-89f52bce]{font-size:1.3em}}.article-container[data-v-89f52bce]{display:-webkit-box;display:flex;max-width:100vw;padding:0 2em 56px 1.5em}.max-content[data-v-89f52bce]{max-height:100vh;width:100%;box-sizing:border-box;margin:0 auto}.title-section[data-v-89f52bce]{font-weight:900;font-size:.9rem;line-height:17px;color:#60c;padding:1.25em 0 .5em 1.6em;text-transform:uppercase}",""]),t.exports=e},759:function(t,e,n){"use strict";n.r(e);n(17),n(32);var r=n(408),o=n(123),d={components:{CourseCard:r.a},data:function(){return{title:"Bem-vindo",list:[],loading:!0}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Seja bem vindo(a) ao aplicativo da New School - Levamos educação de qualidade na linguagem da quebrada para as periferias do Brasil, através da tecnologia e da curadoria de conteúdos baseados nas habilidades do futuro."}]}},computed:{user:function(){return this.$store.state.user.data}},methods:{loadUserName:function(){return this.user.name.split(" ")[0]}},mounted:function(){var t=this;return o.a.getAll("/api/v1/course").then((function(e){t.list=e.data,t.loading=!1}))},asyncData:function(t){var e=t.store;t.data,t.params,t.$axios;return o.a.getAll("".concat("api/v1/course-taken/user/").concat(e.state.user.data.id)).then((function(t){return e.commit("courses/set",t.data)}))}},c=(n(670),n(39)),l=n(43),m=n.n(l),v=n(117),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"max-content",attrs:{id:"page"}},[n("header",{staticClass:"welcome"},[n("h1",{staticClass:"welcome-title"},[t._v(t._s("Salve, "+t.loadUserName()+"!"))]),t._v(" "),n("h2",{staticClass:"welcome-subtitle"},[t._v("Seja bem-vindo")])]),t._v(" "),n("h3",{staticClass:"title-section"},[t._v("CURSOS")]),t._v(" "),t.loading?n("div",[n("div",{staticClass:"container-spinner"},[n("v-progress-circular",{attrs:{size:70,width:5,indeterminate:"",color:"#6600cc"}})],1)]):n("article",{staticClass:"article-container"},t._l(t.list,(function(t){return n("course-card",{key:t.id,attrs:{title:t.title,description:t.description,teacher:t.authorName,image:t.thumbUrl,slug:t.slug}})})),1)])}),[],!1,null,"89f52bce",null);e.default=component.exports;m()(component,{VProgressCircular:v.a})}}]);