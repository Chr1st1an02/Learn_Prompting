"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[9789],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>f});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=m(o),d=a,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||n;return o?r.createElement(f,s(s({ref:t},l),{},{components:o})):r.createElement(f,s({ref:t},l))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,s=new Array(n);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var m=2;m<n;m++)s[m]=o[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8070:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var r=o(7462),a=(o(7294),o(3905));const n=o.p+"assets/images/prompt_tuning-6a04ae02ae3666c98fd9f1c5e9131d34.webp",s={sidebar_position:1},i="\ud83d\udd34 Prompts Suaves",p={unversionedId:"trainable/soft_prompting",id:"trainable/soft_prompting",title:"\ud83d\udd34 Prompts Suaves",description:"A afina\xe7\xe3o de prompts (@lester2021power), uma alternativa \xe0 afina\xe7\xe3o fina de modelos (@khashabi2021prompt), congela os pesos do modelo e atualiza os par\xe2metros de um prompt. O prompt resultante \xe9 um 'prompt suave'.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/trainable/soft_prompting.md",sourceDirName:"trainable",slug:"/trainable/soft_prompting",permalink:"/pt/docs/trainable/soft_prompting",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/trainable/soft_prompting.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcaa Prompt Tuning",permalink:"/pt/docs/category/-prompt-tuning"},next:{title:"\ud83d\udd34 Prompts Suaves Interpret\xe1veis",permalink:"/pt/docs/trainable/discretized"}},m={},l=[{value:"Como funciona",id:"como-funciona",level:2}],u={toc:l},c="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-prompts-suaves"},"\ud83d\udd34 Prompts Suaves"),(0,a.kt)("p",null,"A afina\xe7\xe3o de prompts",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", uma alternativa \xe0 afina\xe7\xe3o fina de modelos",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),", congela os pesos do modelo e atualiza os par\xe2metros de um prompt. O prompt resultante \xe9 um 'prompt suave'."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:n,style:{width:"500px"}})),(0,a.kt)("div",{style:{textAlign:"center"}},"Ajuste de Modelo vs Ajuste de Prompt (Lester et al.)"),(0,a.kt)("p",null,"A imagem acima contrasta o ajuste de modelo com o ajuste de prompt. No ajuste de modelo, voc\xea afina o mesmo modelo em diferentes tarefas. Isso lhe d\xe1 alguns modelos diferentes, com os quais n\xe3o \xe9 necessariamente f\xe1cil agrupar entradas."),(0,a.kt)("p",null,"Por outro lado, o ajuste de prompt permite que voc\xea use o mesmo modelo para todas as tarefas. Voc\xea s\xf3 precisa anexar os prompts apropriados no momento da infer\xeancia, o que facilita o agrupamento entre tarefas diferentes. Isso \xe9 praticamente a mesma vantagem que o prompting regular tem. Al\xe9m disso, prompts suaves treinados para um \xfanico modelo em v\xe1rias tarefas muitas vezes ter\xe3o o mesmo comprimento de token."),(0,a.kt)("h2",{id:"como-funciona"},"Como funciona"),(0,a.kt)("p",null,"Para entender a l\xf3gica b\xe1sica por tr\xe1s do prompt suave, pense em como a ",(0,a.kt)("strong",{parentName:"p"},"infer\xeancia do modelo")," funciona em um prompt espec\xedfico: ",(0,a.kt)("inlineCode",{parentName:"p"},'"Quanto \xe9 2+2?"'),"."),(0,a.kt)("p",null,"1) Pode ser tokenizado como What, 's, 2, +, 2, ?."),(0,a.kt)("p",null,"2) Em seguida, cada token ser\xe1 convertido em um vetor de valores."),(0,a.kt)("p",null,"3) Esses vetores de valores podem ser considerados como par\xe2metros do modelo. O modelo pode ser posteriormente treinado, ajustando apenas os pesos desses prompts."),(0,a.kt)("p",null,"Observe que assim que come\xe7amos a atualizar esses pesos, os vetores dos tokens n\xe3o correspondem mais a embeddings reais do vocabul\xe1rio."),(0,a.kt)("h1",{id:"resultados"},"Resultados"),(0,a.kt)("p",null,"O ajuste de prompt tem melhor desempenho com modelos maiores. Modelos maiores tamb\xe9m requerem menos tokens de prompt suave. Independentemente disso, mais de 20 tokens n\xe3o proporcionam ganhos significativos de desempenho."),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Lester, B., Al-Rfou, R., & Constant, N. (2021). The Power of Scale for Parameter-Efficient Prompt Tuning.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Khashabi, D., Lyu, S., Min, S., Qin, L., Richardson, K., Welleck, S., Hajishirzi, H., Khot, T., Sabharwal, A., Singh, S., & Choi, Y. (2021). Prompt Waywardness: The Curious Case of Discretized Interpretation of Continuous Prompts.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);