"use strict";(self.webpackChunkntu_dsai_github_io=self.webpackChunkntu_dsai_github_io||[]).push([[5684],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=u(r),m=i,p=f["".concat(l,".").concat(m)]||f[m]||d[m]||o;return r?n.createElement(p,c(c({ref:t},s),{},{components:r})):n.createElement(p,c({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5360:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(7294),i=r(9960),o=r(9575),c=r(6010),a="cardContainer_woeA",l="cardTitle_pNjP",u="cardDescription_qC_k",s=r(3919),d=r(5999);function f(e){var t=e.href,r=e.children;return n.createElement(i.Z,{href:t,className:(0,c.Z)("card padding--lg",a)},r)}function m(e){var t=e.href,r=e.icon,i=e.title,o=e.description;return n.createElement(f,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",l),title:i},r," ",i),o&&n.createElement("p",{className:(0,c.Z)("text--truncate",u),title:o},o))}function p(e){var t=e.item,r=(0,o.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function E(e){var t,r=e.item,i=(0,s.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,o.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(m,{href:r.href,icon:i,title:r.label,description:null==c?void 0:c.description})}function y(e){var t=e.item;switch(t.type){case"link":return n.createElement(E,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.items;return n.createElement("div",{className:"row"},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,o.Wl)(e)}))}(t).map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{key:t,item:e}))})))}},3720:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return E},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),c=r(5360),a=r(9575),l=["components"],u={id:"electronic-electrical-engineering",sidebar_position:1,title:"Electronic and Electrical Engineering",description:"General overview of EEE modules",keywords:["ntu","course","eee","module"]},s=void 0,d={unversionedId:"Module-Review/BDEs/EEE/electronic-electrical-engineering",id:"Module-Review/BDEs/EEE/electronic-electrical-engineering",title:"Electronic and Electrical Engineering",description:"General overview of EEE modules",source:"@site/docs/Module-Review/BDEs/EEE/index.md",sourceDirName:"Module-Review/BDEs/EEE",slug:"/Module-Review/BDEs/EEE/",permalink:"/docs/Module-Review/BDEs/EEE/",editUrl:"https://github.com/NTU-DSAI/NTU-DSAI.github.io/tree/master/docs/Module-Review/BDEs/EEE/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"electronic-electrical-engineering",sidebar_position:1,title:"Electronic and Electrical Engineering",description:"General overview of EEE modules",keywords:["ntu","course","eee","module"]},sidebar:"tutorialSidebar",previous:{title:"BDEs",permalink:"/docs/Module-Review/BDEs/"},next:{title:"EE8086 Astronomy",permalink:"/docs/Module-Review/BDEs/EEE/ee8086-astronomy"}},f={},m=[],p={toc:m};function E(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}E.isMDXComponent=!0}}]);