(this["webpackJsonpalex-sapozhnikov"]=this["webpackJsonpalex-sapozhnikov"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,c){},,,,,,,function(e,t,c){},function(e,t,c){},,,,,,,,,function(e,t,c){},function(e,t,c){},,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(23),i=c.n(s),o=(c(30),c(31),c(3)),r=c(4),l=c(6),j=c(5),b=c(9),u=(c(14),c(32),c(0)),d=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(e){var a;return Object(o.a)(this,c),(a=t.call(this,e)).openMenu=function(){a.setState({show:!0}),document.body.style.overflow="hidden"},a.closeMenu=function(){a.setState({show:!1}),document.body.style.overflow="visible"},a.escFunction=function(e){27===e.keyCode&&a.setState({show:!1})},a.state={show:!1},a}return Object(r.a)(c,[{key:"componentDidMount",value:function(){this.setState({show:!1}),document.addEventListener("keydown",this.escFunction,!1)}},{key:"render",value:function(){var e=Object(u.jsxs)("div",{className:"menu__place",onKeyDown:this.escFunction,children:[Object(u.jsx)("span",{className:"menu__i",children:Object(u.jsx)("i",{className:"fas fa-times",onClick:this.closeMenu})}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[" ",Object(u.jsx)(b.b,{to:"/about",onClick:this.closeMenu,children:"\u041e\u0431\u043e \u043c\u043d\u0435"})]}),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)(b.b,{to:"/portfolio",onClick:this.closeMenu,children:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e"})]}),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)(b.b,{to:"/contact",onClick:this.closeMenu,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]})]})]}),t=this.state.show?e:null;return Object(u.jsxs)("div",{className:"menu",children:[Object(u.jsx)("span",{className:"menu__i",children:Object(u.jsx)("i",{className:"fas fa-bars",onClick:this.openMenu})}),t]})}}]),c}(n.a.Component),h=(c(39),function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)(b.b,{to:"/",children:Object(u.jsx)("div",{className:"header-logo",children:Object(u.jsxs)("div",{className:"header-name",children:[Object(u.jsx)("b",{children:"Alex "}),"Sapozhnikov"]})})}),Object(u.jsx)("nav",{className:"header-nav",children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[" ",Object(u.jsx)(b.b,{to:"/about",children:"\u041e\u0431\u043e \u043c\u043d\u0435"})]}),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)(b.b,{to:"/portfolio",children:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e"})]}),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)(b.b,{to:"/contact",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]})]})}),Object(u.jsx)(d,{})]})}}]),c}(n.a.Component)),O=c(7),m=(c(40),function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"about-main",children:[Object(u.jsx)("div",{className:"about-main__photo"}),Object(u.jsxs)("div",{className:"about-main__info",children:[Object(u.jsx)("div",{className:"about-main__subtitle",children:"Frontend-developer"}),Object(u.jsx)("h1",{className:"about-main__title",children:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u0421\u0430\u043f\u043e\u0436\u043d\u0438\u043a\u043e\u0432"}),Object(u.jsx)("div",{className:"about-main__describe",children:"\u042f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0439 \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u0438\u0437 \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0430. \u041d\u0430 \u0434\u0430\u043d\u043d\u043e\u043c \u044d\u0442\u0430\u043f\u0435 \u044d\u0442\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0430 \u0434\u043b\u044f \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0440\u0430\u0431\u043e\u0442\u043e\u0434\u0430\u0442\u0435\u043b\u0435\u0439. \u042f \u043d\u0430\u0447\u0430\u043b \u0441\u0432\u043e\u044e \u043a\u0430\u0440\u044c\u0435\u0440\u0443 \u0432 IT \u0441 \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430, \u043d\u0430\u0443\u0447\u0438\u043b\u0441\u044f \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 \u0431\u0430\u0437\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445. \u0421\u0435\u0439\u0447\u0430\u0441 \u043c\u043d\u0435 \u043e\u0447\u0435\u043d\u044c \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u0430 \u0441\u0444\u0435\u0440\u0430 \u0412\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"}),Object(u.jsxs)("div",{className:"about-main__buttons",children:[Object(u.jsx)(b.b,{to:"https://drive.google.com/file/d/1Ht9ooz9aWBY-ZDal1V4n7fJ7nBygiNju/view?usp=sharing",target:"_blank",download:!0,children:Object(u.jsx)("button",{className:"about-main__button button recomended",children:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0420\u0435\u0437\u044e\u043c\u0435"})}),Object(u.jsx)(b.b,{to:"/contact",children:Object(u.jsx)("button",{className:"about-main__button button",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})]})]})]})}}]),c}(n.a.Component)),f=c(46),x=(c(41),function(e){var t=e.className,c=e.name;return Object(u.jsxs)("div",{className:"about-skills__item",children:[Object(u.jsx)("i",{className:t}),Object(u.jsx)("h4",{className:"about-skills__itemTittle",children:c})]})}),p=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"about-skills",children:[Object(u.jsx)("div",{className:"about-skills__title",children:Object(u.jsx)("h2",{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"})}),Object(u.jsxs)("div",{className:"about-skills__items",children:[Object(u.jsx)(x,{className:"fab fa-react",name:"React"}),Object(u.jsx)(x,{className:"fab fa-js",name:"JavaScript"}),Object(u.jsx)(x,{className:"fab fa-sass",name:"Sass"}),Object(u.jsx)(x,{className:"fab fa-node-js",name:"Node.js"}),Object(u.jsx)(x,{className:"fab fa-css3-alt",name:"CSS"}),Object(u.jsx)(x,{className:"fab fa-figma",name:"Figma"}),Object(u.jsx)(x,{className:"fab fa-html5",name:"HTML5"}),Object(u.jsx)(x,{className:"fas fa-database",name:"SQL"})]})]})}}]),c}(n.a.Component),v=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(u.jsx)(f.a,{children:Object(u.jsxs)("section",{className:"about content",children:[Object(u.jsx)(m,{}),Object(u.jsx)(p,{})]})})}}]),c}(n.a.Component),N=(c(21),function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"portfolio-works__wrapper",children:[Object(u.jsx)(k,{classForImg:"food",name:"Food",describe:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442. \u041e\u0441\u0432\u0430\u0438\u0432\u0430\u043b: \u043e\u0441\u043d\u043e\u0432\u044b JavaScript, \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b, GIT, \u043e\u0441\u043d\u043e\u0432\u044b \u041e\u041e\u041f, \u0440\u0430\u0431\u043e\u0442\u0430 \u0441 DOM, async/await, \u043a\u043b\u0430\u0441\u0441\u044b"}),Object(u.jsx)(k,{classForImg:"got",name:"Game of Thrones",describe:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 react \u043f\u0440\u043e\u0435\u043a\u0442. \u041e\u0441\u0432\u0430\u0438\u0432\u0430\u043b: \u0440\u0430\u0431\u043e\u0442\u0443 \u0441 \u043f\u0440\u043e\u043c\u0438\u0441\u0430\u043c\u0438, Fetch, \u0443\u0441\u043b\u043e\u0432\u043d\u044b\u0439 \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u043d\u0433, \u043c\u043e\u0434\u0443\u043b\u044c\u043d\u0443\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443",url:"https://dancaless.github.io/got/"}),Object(u.jsx)(k,{classForImg:"restoservice",name:"Resto Service",describe:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 react \u043f\u0440\u043e\u0435\u043a\u0442. \u041e\u0441\u0432\u0430\u0438\u0432\u0430\u043b: json-sever, \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u0439 \u0446\u0438\u043a\u043b \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432, hoc.Context, \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 JEST+Enzyme"})]})}}]),c}(n.a.Component)),k=function(e){var t=e.classForImg,c=e.name,a=e.describe,n=e.url,s=void 0===n?"https://yandex.ru/pogoda/?via=hl&lat=60.035255&lon=30.252818":n;return Object(u.jsxs)("a",{href:s,target:"_blank",rel:"noreferrer",className:"portfolio-work ".concat(t),children:[Object(u.jsx)("div",{className:"portfolio-work__name",children:c}),Object(u.jsx)("div",{className:"portfolio-work__describe",children:a})]})},_=(c(42),function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){var e=this.props.value;return Object(u.jsx)("div",{className:"heading",children:Object(u.jsx)("h1",{className:"heading_title",children:e})})}}]),c}(n.a.Component)),g=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("section",{className:"portfolio content",children:[Object(u.jsx)(_,{value:"\u041c\u043e\u0438 \u0440\u0430\u0431\u043e\u0442\u044b"}),Object(u.jsx)(f.a,{children:Object(u.jsx)(N,{})})]})}}]),c}(n.a.Component),y=(c(22),function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(u.jsx)("section",{className:"contact",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)(w,{img:"far fa-envelope",S:!0,value:"dancaless@gmail.com",link:"mailto:dancaless@gmail.com",clickable:!0}),Object(u.jsx)(w,{img:"fas fa-mobile-alt",value:"+79214355184",link:"tel:+79214355184",clickable:!0}),Object(u.jsx)(w,{img:"fas fa-map-marker-alt",value:"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433"})]})})}}]),c}(n.a.Component)),w=function(e){var t=e.img,c=e.value,a=e.link,n=void 0===a?"":a,s=e.clickable;return void 0!==s&&s?Object(u.jsx)("li",{className:"contact_item",children:Object(u.jsxs)("a",{href:n,children:[Object(u.jsx)("i",{className:t}),Object(u.jsx)("h4",{children:c})]})}):Object(u.jsxs)("div",{className:"contact_item",children:[Object(u.jsx)("i",{className:t}),Object(u.jsx)("h4",{children:c})]})},C=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("section",{className:"contact content",children:[Object(u.jsx)(_,{value:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),Object(u.jsx)(f.a,{children:Object(u.jsx)(y,{})})]})}}]),c}(n.a.Component),S=(c(43),function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(u.jsx)("section",{className:"footer",children:Object(u.jsxs)(f.a,{children:[Object(u.jsx)("a",{href:"mailto:dancaless@gmail.com",children:Object(u.jsx)("i",{className:"far fa-envelope"})}),Object(u.jsx)("a",{href:"https://t.me/dancaless",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("i",{className:"fab fa-telegram"})}),Object(u.jsx)("a",{href:"https://www.linkedin.com/in/alex-sapozhnikov/",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("i",{className:"fab fa-linkedin-in"})})]})})}}]),c}(n.a.Component));c(44);var F=function(){return Object(u.jsx)("div",{className:"app",children:Object(u.jsxs)(b.a,{basename:"myportfolio",children:[Object(u.jsx)(h,{}),Object(u.jsxs)(O.c,{children:[Object(u.jsx)(O.a,{path:"/",component:v,exact:!0}),Object(u.jsx)(O.a,{path:"/about",component:v}),Object(u.jsx)(O.a,{path:"/portfolio",component:g}),Object(u.jsx)(O.a,{path:"/contact",component:C})]}),Object(u.jsx)(S,{})]})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,47)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(F,{})}),document.getElementById("root")),M()}],[[45,1,2]]]);
//# sourceMappingURL=main.9a9922ea.chunk.js.map