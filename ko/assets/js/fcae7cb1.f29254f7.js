"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[3545],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},96018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i=n.p+"assets/images/chain_of_thought_example-37c925a2720c9c4bb4c823d237bc72c8.png",o=n.p+"assets/images/prompted_palm-20fba06418ed8569b51f0dd376c03b41.png",l={sidebar_position:3,locale:"en-us",style:"chicago"},s="\ud83d\udfe2 \uc0ac\uace0 \uc0ac\uc2ac \ud504\ub86c\ud504\ud305",p={unversionedId:"intermediate/chain_of_thought",id:"intermediate/chain_of_thought",title:"\ud83d\udfe2 \uc0ac\uace0 \uc0ac\uc2ac \ud504\ub86c\ud504\ud305",description:"\uc0ac\uace0 \uc0ac\uc2ac (CoT) \ud504\ub86c\ud504\ud305 (@wei2022chain)\uc740 \ucd5c\uadfc\uc5d0 \uac1c\ubc1c\ub41c \ubc29\ubc95\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/intermediate/chain_of_thought.md",sourceDirName:"intermediate",slug:"/intermediate/chain_of_thought",permalink:"/ko/docs/intermediate/chain_of_thought",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/intermediate/chain_of_thought.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,locale:"en-us",style:"chicago"},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddd9\u200d\u2642\ufe0f Intermediate",permalink:"/ko/docs/category/\ufe0f-intermediate"},next:{title:"\ud83d\udfe2 \uc81c\ub85c\uc0f7(zero shot) \uc0ac\uace0 \uc0ac\uc2ac \ud504\ub86c\ud504\ud305",permalink:"/ko/docs/intermediate/zero_shot_cot"}},c={},u=[{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:2},{value:"Incorrect",id:"incorrect",level:4},{value:"Correct",id:"correct",level:4},{value:"\uacb0\uacfc",id:"\uacb0\uacfc",level:2},{value:"\uc81c\ud55c",id:"\uc81c\ud55c",level:2},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:2}],m={toc:u},f="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-\uc0ac\uace0-\uc0ac\uc2ac-\ud504\ub86c\ud504\ud305"},"\ud83d\udfe2 \uc0ac\uace0 \uc0ac\uc2ac \ud504\ub86c\ud504\ud305"),(0,r.kt)("p",null,"\uc0ac\uace0 \uc0ac\uc2ac (CoT) \ud504\ub86c\ud504\ud305",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\uc740 \ucd5c\uadfc\uc5d0 \uac1c\ubc1c\ub41c \ubc29\ubc95\uc785\ub2c8\ub2e4.\nLLM\uc5d0\uac8c \uc774\uc720\uc5d0 \ub300\ud574\uc11c \uc124\uba85\ud558\ub3c4\ub85d \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4.\n\uc544\ub798\uc758 \uc0ac\uc9c4\uc5d0\uc11c",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," %%\ud4e8\uc0f7 \ud45c\uc900 \ud504\ub86c\ud504\ud2b8|\ud4e8\uc0f7 \ud45c\uc900 \ud504\ub86c\ud504\ud2b8%% (\uc67c\ucabd) \uc0ac\uace0 \uc0ac\uc2ac \ud504\ub86c\ud504\ud305(\uc624\ub978\ucabd)\uc744 \ube44\uad50\ud574 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:i,style:{width:"750px"}})),(0,r.kt)("div",{style:{textAlign:"center"}},"\uadf8\ub0e5 \ud504\ub86c\ud504\ud305 vs CoT (Wei et al.)"),(0,r.kt)("p",null,"COT\uc758 \uba54\uc778 \uc544\uc774\ub514\uc5b4\ub294 LLM\uc5d0\uac8c \ub2f5\uc774 \ub098\uc624\ub294 \uacfc\uc815\uc5d0 \ub300\ud574\uc11c \uc124\uba85\ud55c %%\ud45c\ubcf8|\ud45c\ubcf8%%\uc744 \ubcf4\uc5ec\uc90c\uc73c\ub85c\uc368 LLM\uc774 \ud504\ub86c\ud504\ud2b8\uc5d0 \ub2f5\ud560 \ub54c \ub611\uac19\uc774 \uadf8\uc5d0 \ub300\ud55c \uacfc\uc815\uc744 \uc124\uba85\ud558\ub3c4\ub85d \ub9cc\ub4dc\ub294 \uac83\uc785\ub2c8\ub2e4.\n\uc774\uc720\uc5d0 \ub300\ud55c \uc124\uba85\uc740 \uc885\uc885 \ub2f5\uc744 \ub354 \uc815\ud655\ud558\uac8c \ub9cc\ub4ed\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),(0,r.kt)("p",null,"\uba87\uac00\uc9c0 \uc608\uc2dc\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uba3c\uc800 GPT-3 (davinci-003)\uac00 \uba87\uac00\uc9c0 \uac04\ub2e8\ud55c \ub2e8\uc5b4 \ubb38\uc81c\ub97c \ud2c0\ub9b0 \uac83\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ub450 \ubc88\uc9f8\uc5d0\uc11c\ub294 GPT-3(davinci-003)\uc774 COT\ub97c \ud1b5\ud574\uc11c \uac19\uc740 \ubb38\uc81c\ub97c \ub9de\uc740 \uac83\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"incorrect"},"Incorrect"),(0,r.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"Which is a faster way to get to work?\\nOption 1: Take a 1000 minute bus, then a half hour train, and finally a 10 minute bike ride.\\nOption 2: Take an 800 minute bus, then an hour train, and finally a 30 minute bike ride.","initial-response":"Option 1 is a faster way to get to work.","max-tokens":"256","box-rows":"7","model-temp":"0","top-p":"0"}),(0,r.kt)("h4",{id:"correct"},"Correct"),(0,r.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"Which is a faster way to get home?\\nOption 1: Take an 10 minutes bus, then an 40 minute bus, and finally a 10 minute train.\\nOption 2: Take a 90 minutes train, then a 45 minute bike ride, and finally a 10 minute bus.\\nOption 1 will take 10+40+10 = 60 minutes.\\nOption 2 will take 90+45+10=145 minutes.\\nSince Option 1 takes 60 minutes and Option 2 takes 145 minutes, Option 1 is faster.\\n\\nWhich is a faster way to get to work?\\nOption 1: Take a 1000 minute bus, then a half hour train, and finally a 10 minute bike ride.\\nOption 2: Take an 800 minute bus, then an hour train, and finally a 30 minute bike ride.","initial-response":"Option 1 will take 1000+30+10 = 1040 minutes.\nOption 2 will take 800+60+30 = 890 minutes.\nSince Option 2 takes 890 minutes and Option 1 takes 1040 minutes, Option 2 is faster.","max-tokens":"256","box-rows":"18","model-temp":"0","top-p":"0"}),(0,r.kt)("h2",{id:"\uacb0\uacfc"},"\uacb0\uacfc"),(0,r.kt)("p",null,"COT\ub294 \uc0b0\uc220\uc801, \uc0c1\uc2dd\uc801, \uc0c1\uc9d5\uc801 \ucd94\ub860 \uacfc\uc81c",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\uc640 \uac19\uc740 \uc77c\ub4e4\uc5d0 \ub354 \ud6a8\uc728\uc801\uc73c\ub85c \ub098\uc740 \uacb0\uacfc\ub97c \ub9cc\ub4e4\uc5b4 \ub0c8\ub2e4.\n\ud2b9\ud788 PaLM 540B",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"\ub294 GSM8K",(0,r.kt)("sup",{parentName:"p",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),"\uc5d0\uc11c 57%\uc758 \uc815\ud655\ub3c4 \ud5a5\uc0c1\uc744 \ubcf4\uc600\ub2e4."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:o,style:{width:"300px"}})),(0,r.kt)("div",{style:{textAlign:"center"}},"Comparison of models on the GSM8K benchmark (Wei et al.)"),(0,r.kt)("h2",{id:"\uc81c\ud55c"},"\uc81c\ud55c"),(0,r.kt)("p",null,'Wei \ub4f1\uc5d0 \ub530\ub974\uba74, "COT\ub294 ~100B \ud30c\ub77c\ubbf8\ud130 \ubaa8\ub378\uc5d0\uc11c\ub9cc \uc131\ub2a5 \ud5a5\uc0c1\uc744 \ubcf4\uc778\ub2e4.". \ub354 \uc791\uc740 \ubaa8\ub378\uc740 \ube44\ub17c\ub9ac\uc801\uc778 \uc0ac\uace0 \uc0ac\uc2ac\uc744 \uc791\uc131\ud588\uace0 \uc774\ub294 \ud45c\uc900 \ud504\ub86c\ud504\ud2b8\ub85c \uc791\uc131\ud560 \ub54c \ubcf4\ub2e4 \ub354 \ubd80\uc815\ud655\ud588\ub2e4.\n\ubaa8\ub378\ub4e4\uc740 \ubcf4\ud1b5 \ubaa8\ub378\uc758 \ud06c\uae30\uc5d0 \ube44\ub840\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c COT\ud504\ub86c\ud504\ud2b8\uc5d0 \ub530\ub978 \uc131\ub2a5 \ud5a5\uc0c1\uc744 \ubcf4\uc600\ub2e4.'),(0,r.kt)("h2",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,r.kt)("p",null,"\uc774 \ucc55\ud130\ub97c \uc791\uc131\ud558\ub294 \uacfc\uc815\uc5d0\uc11c \uc5b4\ub5a4 \uc5b8\uc5b4 \ubaa8\ub378\ub3c4 \ub2e4\uce58\uc9c0 \uc54a\uc558\ub2f5\ub2c8\ub2e4\ud83d\ude0a."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain of Thought Prompting Elicits Reasoning in Large Language Models.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"Chowdhery, A., Narang, S., Devlin, J., Bosma, M., Mishra, G., Roberts, A., Barham, P., Chung, H. W., Sutton, C., Gehrmann, S., Schuh, P., Shi, K., Tsvyashchenko, S., Maynez, J., Rao, A., Barnes, P., Tay, Y., Shazeer, N., Prabhakaran, V., \u2026 Fiedel, N. (2022). PaLM: Scaling Language Modeling with Pathways.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3"},"Cobbe, K., Kosaraju, V., Bavarian, M., Chen, M., Jun, H., Kaiser, L., Plappert, M., Tworek, J., Hilton, J., Nakano, R., Hesse, C., & Schulman, J. (2021). Training Verifiers to Solve Math Word Problems.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);