"use strict";(self.webpackChunkotstudios_github_io=self.webpackChunkotstudios_github_io||[]).push([[804],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=l,k=d["".concat(a,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),l=(r(7294),r(3905));const i={sidebar_position:2},o="getSkill",s={unversionedId:"skills/Exports/Server/getSkill",id:"skills/Exports/Server/getSkill",title:"getSkill",description:"Returns table of data for specified skill.",source:"@site/docs/skills/Exports/Server/getSkill.md",sourceDirName:"skills/Exports/Server",slug:"/skills/Exports/Server/getSkill",permalink:"/docs/skills/Exports/Server/getSkill",draft:!1,editUrl:"https://github.com/OTSTUDIOS/otstudios.github.io/tree/main/docs/skills/Exports/Server/getSkill.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"skills",previous:{title:"addXP",permalink:"/docs/skills/Exports/Server/addXP"},next:{title:"registerSkill",permalink:"/docs/skills/Exports/Server/registerSkill"}},a={},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getskill"},"getSkill"),(0,l.kt)("p",null,"Returns table of data for specified skill."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"-- source: number\n-- skill: string\nexports.OT_skills:getSkill(source, skill)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"    local skill = exports.OT_skills:getSkill(source, skill)\n    print(skill.level)\n    print(skill.xp)\n\n    if skill.level >= 1 then\n    -- your code\n    end\n")))}u.isMDXComponent=!0}}]);