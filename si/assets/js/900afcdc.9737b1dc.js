"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1799],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const r=n.p+"assets/images/short_content_auto-9b17533cb94c799181be8ee128a081b6.webp",i={sidebar_position:3},s="\ud83d\udfe2 Solve Discussion Questions",l={unversionedId:"applied_prompting/short_response",id:"applied_prompting/short_response",title:"\ud83d\udfe2 Solve Discussion Questions",description:"With the right prompting, GPT-3 is very capable of writing short form responses. To demonstrate this, I will be looking at solving discussion questions, a common weekly assignment in many college courses. A response to a discussion question is usually about 100-700 words. Longer content can be a bit more tricky as LLMs have limited memory and have difficulty understanding the global picture of what they are writing(@jin2022plot).",source:"@site/docs/applied_prompting/short_response.md",sourceDirName:"applied_prompting",slug:"/applied_prompting/short_response",permalink:"/si/docs/applied_prompting/short_response",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/applied_prompting/short_response.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Multiple Choice Questions",permalink:"/si/docs/applied_prompting/mc_tutorial"},next:{title:"\ud83d\udfe2 Build ChatGPT from GPT-3",permalink:"/si/docs/applied_prompting/build_chatgpt"}},p={},d=[{value:"Many discussion questions are not effective for prompting.",id:"many-discussion-questions-are-not-effective-for-prompting",level:3},{value:"Automate well defined prompt rewriting with GPT-3",id:"automate-well-defined-prompt-rewriting-with-gpt-3",level:3},{value:"Iteration",id:"iteration",level:3}],u={toc:d},c="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-solve-discussion-questions"},"\ud83d\udfe2 Solve Discussion Questions"),(0,o.kt)("p",null,"With the right prompting, GPT-3 is very capable of writing short form responses. To demonstrate this, I will be looking at ",(0,o.kt)("strong",{parentName:"p"},"solving discussion questions"),", a common weekly assignment in many college courses. A response to a discussion question is usually about 100-700 words. Longer content can be a bit more tricky as LLMs have limited memory and have difficulty understanding the global picture of what they are writing",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,o.kt)("p",null,"Let's look at an example of a basic discussion question:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},'"What are the most pressing environmental issues facing our planet today, and what steps can individuals take to help address these issues?"'))),(0,o.kt)("p",null,"We can turn this into a simple prompt for GPT-3 by prepending ",(0,o.kt)("span",{className:"yellow-highlight"},"Respond to the following:")," to it."),(0,o.kt)("pre",null,(0,o.kt)("span",{className:"yellow-highlight"},"Respond to the following:"),(0,o.kt)("br",null),(0,o.kt)("br",null),"What are the most pressing environmental issues facing our planet today, and what steps can individuals take to help address these issues?"),(0,o.kt)("p",null,"Results generated with this prompt aren't consistent, and a few are only a sentence or two. A typical discussion response should have multiple paragraphs, so these results aren't ideal. A good prompt should give ",(0,o.kt)("strong",{parentName:"p"},"specific instructions about format and content"),". You want to remove ambiguity in your language to improve consistency and quality. Here is a better prompt."),(0,o.kt)("pre",null,(0,o.kt)("span",{className:"yellow-highlight"},"Write a highly detailed essay with introduction, body, and conclusion paragraphs responding to the following:"),(0,o.kt)("br",null),(0,o.kt)("br",null),"What are the most pressing environmental issues facing our planet today, and what steps can individuals take to help address these issues?"),(0,o.kt)("iframe",{src:"https://player.vimeo.com/video/778327269?h=77d739ae72&badge=0&autopause=0&player_id=0&app_id=58479",width:"600",height:"400",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:!0,title:"example"}),(0,o.kt)("p",null,"The second prompt generates longer outputs with better structure on average. The use of the term \u2018essay\u2019 in the prompt was intentional, as GPT-3 can comprehend the definition of an essay, and is thus more likely to generate coherent, structured responses. "),(0,o.kt)("h3",{id:"many-discussion-questions-are-not-effective-for-prompting"},"Many discussion questions are not effective for prompting."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},'"The Civil War a conflict over expansion? Agree our Disagree and why?"'))),(0,o.kt)("p",null,"Here is a real discussion question from a college history course. It is not worded correctly and is far too open ended. ",(0,o.kt)("strong",{parentName:"p"},"To get good discussion responses, you need to rewrite the question into a well defined prompt.")," A well defined prompt for the discussion question above could be:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},'"Explain the causes of the Civil War and whether expansion played a role in the conflict. Include evidence to support your argument."'))),(0,o.kt)("p",null,"Now we can add formatting and context directions."),(0,o.kt)("pre",null,(0,o.kt)("span",{className:"yellow-highlight"},"Write a highly detailed discussion response, in the structure of an essay, responding to the following prompt:"),(0,o.kt)("br",null),(0,o.kt)("br",null),"Explain the causes of the Civil War and whether expansion played a role in the conflict. Include evidence to support your argument."),(0,o.kt)("h3",{id:"automate-well-defined-prompt-rewriting-with-gpt-3"},"Automate well defined prompt rewriting with GPT-3"),(0,o.kt)("p",null,"The rewriting example above was generated with OpenAI's ",(0,o.kt)("a",{parentName:"p",href:"https://openai.com/blog/chatgpt/"},"ChatGPT"),"."),(0,o.kt)("div",{style:{textAlign:"left"}},(0,o.kt)("img",{src:r,style:{width:"500px"}})),(0,o.kt)("h3",{id:"iteration"},"Iteration"),(0,o.kt)("p",null,"After crafting an effective prompt for your discussion question, you now need to refine the results GPT-3 generates. This may involve adjusting the output to adhere to constraints such as word count, or combining concepts from different generated results. "),(0,o.kt)("p",null,"A simple method for iterating is to generate multiple outputs and review them to gain an understanding of the concepts GPT-3 is utilizing and the structure it adheres to. Once the outputs have been evaluated, you can select the most suitable outputs and combine them into a cohesive response. "),(0,o.kt)("p",null,"Another way to iterate is to start and then ",(0,o.kt)("strong",{parentName:"p"},"expand step by step"),". This requires more than one prompt: A starter prompt to write the initial paragraph or so and then other prompts to expand on what was already written."),(0,o.kt)("p",null,"Here is a potential philosophical discussion question:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},'"Is math invented or discovered? Use careful reasoning to explain your answer."'))),(0,o.kt)("p",null,"Add it into a simple prompt like this:"),(0,o.kt)("pre",null,(0,o.kt)("span",{className:"yellow-highlight"},"Write a beginning paragraph responding to the following:"),(0,o.kt)("br",null),(0,o.kt)("br",null),"Is math invented or discovered? Use careful reasoning to explain your answer"),(0,o.kt)("p",null,"I generated a few responses and found one I liked:"),(0,o.kt)("pre",null,(0,o.kt)("span",{className:"bluegreen-highlight"},"There is much debate among philosophers and mathematicians as to whether math is invented or discovered. Some argue that mathematical concepts and principles exist independently of human minds and can therefore be considered as discovered rather than invented. For example, the concept of numbers, ratios, and geometric shapes are observed in the natural world and can be abstracted and studied in a systematic way.")),(0,o.kt)("p",null,"This is a pretty good start. I then followed this up with another prompt to expand:"),(0,o.kt)("pre",null,(0,o.kt)("span",{className:"yellow-highlight"},"I am writing a detailed short essay responding to the following prompt:"),(0,o.kt)("br",null),(0,o.kt)("br",null),"Is math invented or discovered? Use careful reasoning to explain your answer.",(0,o.kt)("span",{className:"yellow-highlight"},(0,o.kt)("p",null),"Here is what I have so far:"),(0,o.kt)("br",null),(0,o.kt)("br",null),"There is much debate among philosophers and mathematicians as to whether math is invented or discovered. Some argue that mathematical concepts and principles exist independently of human minds and can therefore be considered as discovered rather than invented. For example, the concept of numbers, ratios, and geometric shapes are observed in the natural world and can be abstracted and studied in a systematic way.",(0,o.kt)("p",null),(0,o.kt)("span",{className:"yellow-highlight"},"Write the next paragraph of my essay.")),(0,o.kt)("p",null,"Try this expansion prompt out with the demo below (you will need your OpenAI API key)"),(0,o.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Ik9uIHRoZSBvdGhlciBoYW5kLCBzb21lIGFyZ3VlIHRoYXQgbWF0aCBpcyBsYXJnZWx5IGFuIGludmVudGlvbiBvZiB0aGUgaHVtYW4gbWluZC4gTWF0aGVtYXRpY2FsIHByaW5jaXBsZXMgYXJlIGJhc2VkIG9uIGxvZ2ljYWwgcmVhc29uaW5nLCB3aGljaCBpcyBhIGZlYXR1cmUgb2YgdGhlIGh1bWFuIG1pbmQuIEZvciBpbnN0YW5jZSwgRXVjbGlkZWFuIGdlb21ldHJ5IGlzIGJhc2VkIG9uIGFic3RyYWN0IGF4aW9tcyBhbmQgcG9zdHVsYXRlcywgd2hpY2ggYXJlIGFjY2VwdGVkIGFzIHRydWUgd2l0aG91dCBwcm9vZi4gQXMgc3VjaCwgaXQgY2FuIGJlIGFyZ3VlZCB0aGF0IGdlb21ldHJ5IGlzIGFuIGludmVudGlvbiBvZiB0aGUgaHVtYW4gbWluZCByYXRoZXIgdGhhbiBhIGRpc2NvdmVyeS4gU2ltaWxhcmx5LCBtYXRoZW1hdGljYWwgZm9ybXVsYXMgYW5kIGVxdWF0aW9ucyBhcmUgdXNlZCB0byBtb2RlbCBhbmQgcHJlZGljdCBwaHlzaWNhbCBwaGVub21lbmEsIHdoaWNoIGFyZSBhZ2FpbiB0aGUgcmVzdWx0IG9mIGh1bWFuIHJlYXNvbmluZy4iLCJwcm9tcHQiOiJJIGFtIHdyaXRpbmcgYSBkZXRhaWxlZCBzaG9ydCBlc3NheSByZXNwb25kaW5nIHRvIHRoZSBmb2xsb3dpbmcgcHJvbXB0OiBcbklzIG1hdGggaW52ZW50ZWQgb3IgZGlzY292ZXJlZD8gVXNlIGNhcmVmdWwgcmVhc29uaW5nIHRvIGV4cGxhaW4geW91ciBhbnN3ZXIuIFxuXG5IZXJlIGlzIHdoYXQgSSBoYXZlIHNvIGZhcjogVGhlcmUgaXMgbXVjaCBkZWJhdGUgYW1vbmcgcGhpbG9zb3BoZXJzIGFuZCBtYXRoZW1hdGljaWFucyBhcyB0byB3aGV0aGVyIG1hdGggaXMgaW52ZW50ZWQgb3IgZGlzY292ZXJlZC4gU29tZSBhcmd1ZSB0aGF0IG1hdGhlbWF0aWNhbCBjb25jZXB0cyBhbmQgcHJpbmNpcGxlcyBleGlzdCBpbmRlcGVuZGVudGx5IG9mIGh1bWFuIG1pbmRzIGFuZCBjYW4gdGhlcmVmb3JlIGJlIGNvbnNpZGVyZWQgYXMgZGlzY292ZXJlZCByYXRoZXIgdGhhbiBpbnZlbnRlZC4gRm9yIGV4YW1wbGUsIHRoZSBjb25jZXB0IG9mIG51bWJlcnMsIHJhdGlvcywgYW5kIGdlb21ldHJpYyBzaGFwZXMgYXJlIG9ic2VydmVkIGluIHRoZSBuYXR1cmFsIHdvcmxkIGFuZCBjYW4gYmUgYWJzdHJhY3RlZCBhbmQgc3R1ZGllZCBpbiBhIHN5c3RlbWF0aWMgd2F5LiBcblxuV3JpdGUgdGhlIG5leHQgcGFyYWdyYXBoIG9mIG15IGVzc2F5LiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,o.kt)("br",null),(0,o.kt)("p",null,"I generated a few expansions with this prompt and selected one I liked to end up with the following final result:"),(0,o.kt)("pre",null,"There is much debate among philosophers and mathematicians as to whether",(0,o.kt)("br",null),"math is invented or discovered. Some argue that mathematical concepts and principles exist",(0,o.kt)("br",null),"independently of human minds and can therefore be considered as discovered rather than invented.",(0,o.kt)("br",null),"For example, the concept of numbers, ratios, and geometric shapes are observed in the natural",(0,o.kt)("br",null),"world and can be abstracted and studied in a systematic way.",(0,o.kt)("span",{className:"bluegreen-highlight"},(0,o.kt)("br",null),(0,o.kt)("br",null),"On the other hand, some argue that math is largely an invention of the human mind. Mathematical",(0,o.kt)("br",null),"principles are based on logical reasoning, which is a feature of the human mind. For instance,",(0,o.kt)("br",null),"Euclidean geometry is based on abstract axioms and postulates, which are accepted as true without",(0,o.kt)("br",null),"proof. As such, it can be argued that geometry is an invention of the human mind rather than",(0,o.kt)("br",null),"a discovery. Similarly, mathematical formulas and equations are used to model and predict physical",(0,o.kt)("br",null),"phenomena, which are again the result of human reasoning.")),(0,o.kt)("p",null,"Using expansion prompts, we can write more incrementally and iterate at each step. This is useful for when you need to ",(0,o.kt)("strong",{parentName:"p"},"produce a higher quality output and want to modify the incremental steps"),"."),(0,o.kt)("p",null,"Written by ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/jayo782"},"jayo78"),"."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Jin, Y., Kadam, V., & Wanvarie, D. (2022). Plot Writing From Pre-Trained Language Models.\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0}}]);