"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[204],{3311:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>b,frontMatter:()=>d,metadata:()=>p,toc:()=>m});var i=a(7462),o=(a(7294),a(3905));const l=a.p+"assets/images/chain_of_thought_example-ad98abdca61405f66417751bdb3fba05.webp",n=a.p+"assets/images/prompted_palm-f378b4af8aff82ed8a0fdcd33e934b7b.webp";var r=a(9145);const d={sidebar_position:3,locale:"\u0410\u043d\u0433\u043b\u0456\u0439\u0441\u044c\u043a\u0430 (\u0421\u0428\u0410)",style:"chicago"},s="\ud83d\udfe2 \u041b\u0430\u043d\u0446\u044e\u0433 \u0434\u0443\u043c\u043e\u043a",p={unversionedId:"intermediate/chain_of_thought",id:"intermediate/chain_of_thought",title:"\ud83d\udfe2 \u041b\u0430\u043d\u0446\u044e\u0433 \u0434\u0443\u043c\u043e\u043a",description:"\u041b\u0430\u043d\u0446\u044e\u0433 \u0434\u0443\u043c\u043e\u043a (CoT) (@wei2022chain) \u2014 \u043d\u0435\u0449\u043e\u0434\u0430\u0432\u043d\u043e \u0440\u043e\u0437\u0440\u043e\u0431\u043b\u0435\u043d\u0438\u0439 \u043c\u0435\u0442\u043e\u0434 \u0437\u0430\u043f\u0438\u0442\u0456\u0432, \u0449\u043e \u0441\u043f\u043e\u043d\u0443\u043a\u0430\u0454 \u0412\u041c\u041c \u0430\u0440\u0491\u0443\u043c\u0435\u043d\u0442\u0443\u0432\u0430\u0442\u0438 \u0441\u0432\u043e\u0457 \u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043d\u044f. \u041d\u0430 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u0456 \u043d\u0438\u0436\u0447\u0435 (@wei2022chain) \u043f\u0440\u043e\u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u043e\u0432\u0430\u043d\u043e %%\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0438\u0439 \u0437\u0430\u043f\u0438\u0442|few shot standard prompt%% (\u043b\u0456\u0432\u043e\u0440\u0443\u0447) \u0443 \u043f\u043e\u0440\u0456\u0432\u043d\u044f\u043d\u043d\u0456 \u0437\u0456 \u0437\u0430\u043f\u0438\u0442\u043e\u043c \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 \u043c\u0435\u0442\u043e\u0434\u0443 \u043b\u0430\u043d\u0446\u044e\u0433\u0430 \u0434\u0443\u043c\u043e\u043a (\u043f\u0440\u0430\u0432\u043e\u0440\u0443\u0447).",source:"@site/i18n/uk/docusaurus-plugin-content-docs/current/intermediate/chain_of_thought.md",sourceDirName:"intermediate",slug:"/intermediate/chain_of_thought",permalink:"/uk/docs/intermediate/chain_of_thought",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intermediate/chain_of_thought.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,locale:"\u0410\u043d\u0433\u043b\u0456\u0439\u0441\u044c\u043a\u0430 (\u0421\u0428\u0410)",style:"chicago"},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddd9\u200d\u2642\ufe0f Intermediate",permalink:"/uk/docs/category/\ufe0f-intermediate"},next:{title:"\ud83d\udfe2 \u041b\u0430\u043d\u0446\u044e\u0433 \u0434\u0443\u043c\u043e\u043a \u0431\u0435\u0437 \u0456\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0456\u0439",permalink:"/uk/docs/intermediate/zero_shot_cot"}},h={},m=[{value:"\u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434",id:"\u043d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434",level:2},{value:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e",id:"\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e",level:4},{value:"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e",id:"\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e",level:4},{value:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438",id:"\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438",level:2},{value:"\u041e\u0431\u043c\u0435\u0436\u0435\u043d\u043d\u044f",id:"\u043e\u0431\u043c\u0435\u0436\u0435\u043d\u043d\u044f",level:2},{value:"\u041f\u0440\u0438\u043c\u0456\u0442\u043a\u0438",id:"\u043f\u0440\u0438\u043c\u0456\u0442\u043a\u0438",level:2}],g=(c="LazyLoadImage",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var c;const u={toc:m},I="wrapper";function b(e){let{components:t,...a}=e;return(0,o.kt)(I,(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-\u043b\u0430\u043d\u0446\u044e\u0433-\u0434\u0443\u043c\u043e\u043a"},"\ud83d\udfe2 \u041b\u0430\u043d\u0446\u044e\u0433 \u0434\u0443\u043c\u043e\u043a"),(0,o.kt)("p",null,"\u041b\u0430\u043d\u0446\u044e\u0433 \u0434\u0443\u043c\u043e\u043a (CoT)",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," \u2014 \u043d\u0435\u0449\u043e\u0434\u0430\u0432\u043d\u043e \u0440\u043e\u0437\u0440\u043e\u0431\u043b\u0435\u043d\u0438\u0439 \u043c\u0435\u0442\u043e\u0434 \u0437\u0430\u043f\u0438\u0442\u0456\u0432, \u0449\u043e \u0441\u043f\u043e\u043d\u0443\u043a\u0430\u0454 \u0412\u041c\u041c \u0430\u0440\u0491\u0443\u043c\u0435\u043d\u0442\u0443\u0432\u0430\u0442\u0438 \u0441\u0432\u043e\u0457 \u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043d\u044f. \u041d\u0430 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u0456 \u043d\u0438\u0436\u0447\u0435",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," \u043f\u0440\u043e\u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u043e\u0432\u0430\u043d\u043e ",(0,o.kt)("a",{parentName:"p",id:"few shot standard prompt_4_18_1689879890426","data-tooltip-html":"Standard prompts that have exemplars in them. Exemplars are examples of the task that the prompt is trying to solve, which are included in the prompt itself.","data-tooltip-place":"top"},"\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0438\u0439 \u0437\u0430\u043f\u0438\u0442"),(0,o.kt)(r.u,{anchorId:"few shot standard prompt_4_18_1689879890426",clickable:!0,mdxType:"Tooltip"})," (\u043b\u0456\u0432\u043e\u0440\u0443\u0447) \u0443 \u043f\u043e\u0440\u0456\u0432\u043d\u044f\u043d\u043d\u0456 \u0437\u0456 \u0437\u0430\u043f\u0438\u0442\u043e\u043c \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 \u043c\u0435\u0442\u043e\u0434\u0443 \u043b\u0430\u043d\u0446\u044e\u0433\u0430 \u0434\u0443\u043c\u043e\u043a (\u043f\u0440\u0430\u0432\u043e\u0440\u0443\u0447)."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:l,style:{width:"750px"}})),(0,o.kt)("div",{style:{textAlign:"center"}},"\u0417\u0432\u0438\u0447\u0430\u0439\u043d\u0456 \u0437\u0430\u043f\u0438\u0442\u0438 \u043f\u0440\u043e\u0442\u0438 CoT (\u0412\u0435\u0439 \u0442\u0430 \u0456\u043d.)"),(0,o.kt)("p",null,"\u041e\u0441\u043d\u043e\u0432\u043d\u0430 \u0456\u0434\u0435\u044f CoT \u043f\u043e\u043b\u044f\u0433\u0430\u0454 \u0432 \u0442\u043e\u043c\u0443, \u0449\u043e, \u043f\u043e\u043a\u0430\u0437\u0443\u044e\u0447\u0438 \u0412\u041c\u041c \u043a\u0456\u043b\u044c\u043a\u0430 \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0456\u0432 ",(0,o.kt)("a",{parentName:"p",id:"exemplars_0_68_1689879890426","data-tooltip-html":"Examples of the task that the prompt is trying to solve, which are included in the prompt itself.","data-tooltip-place":"top"},"\u0437\u0440\u0430\u0437\u043a\u0438"),(0,o.kt)(r.u,{anchorId:"exemplars_0_68_1689879890426",clickable:!0,mdxType:"Tooltip"}),"\u201a \u0434\u0435 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e \u0437\u0440\u0430\u0437\u043a\u0456\u0432 \u043f\u043e\u044f\u0441\u043d\u044e\u0454\u0442\u044c\u0441\u044f \u043c\u0456\u0440\u043a\u0443\u0432\u0430\u043d\u043d\u044f, \u0412\u041c\u041c \u0442\u0430\u043a\u043e\u0436 \u043f\u043e\u043a\u0430\u0436\u0435 \u043f\u0440\u043e\u0446\u0435\u0441 \u043c\u0456\u0440\u043a\u0443\u0432\u0430\u043d\u043d\u044f \u043f\u0456\u0434 \u0447\u0430\u0441 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456 \u043d\u0430 \u0437\u0430\u043f\u0438\u0442. \u0422\u0430\u043a\u0435 \u043f\u043e\u044f\u0441\u043d\u0435\u043d\u043d\u044f \u043c\u0456\u0440\u043a\u0443\u0432\u0430\u043d\u044c \u0447\u0430\u0441\u0442\u043e \u0441\u043f\u0440\u0438\u044f\u0454 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044e \u0431\u0456\u043b\u044c\u0448 \u0432\u043b\u0443\u0447\u043d\u0438\u0445 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0456\u0432."),(0,o.kt)("h2",{id:"\u043d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434"},"\u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434"),(0,o.kt)("p",null,"\u041e\u0441\u044c \u043a\u0456\u043b\u044c\u043a\u0430 \u0434\u0435\u043c\u043e\u0437\u0430\u043f\u0438\u0441\u0456\u0432. \u041f\u0435\u0440\u0448\u0438\u0439 \u043f\u043e\u043a\u0430\u0437\u0443\u0454, \u0449\u043e GPT-3 (davinci-003) \u043d\u0435 \u043c\u043e\u0436\u0435 \u0440\u043e\u0437\u0432\u2019\u044f\u0437\u0430\u0442\u0438 \u043f\u0440\u043e\u0441\u0442\u0443 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u0443 \u0437\u0430\u0434\u0430\u0447\u0443. \u041d\u0430 \u0434\u0440\u0443\u0433\u043e\u043c\u0443 \u0436 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e, \u044f\u043a GPT-3 (davinci-003) \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0440\u043e\u0437\u0432'\u044f\u0437\u0443\u0454 \u0446\u044e \u0436 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e \u043f\u0456\u0434\u043a\u0430\u0437\u043e\u043a CoT."),(0,o.kt)("h4",{id:"\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e"},"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e"),(0,o.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Ik9wdGlvbiAxIGlzIGEgZmFzdGVyIHdheSB0byBnZXQgdG8gd29yay4iLCJwcm9tcHQiOiJXaGljaCBpcyBhIGZhc3RlciB3YXkgdG8gZ2V0IHRvIHdvcms%2FXG5PcHRpb24gMTogVGFrZSBhIDEwMDAgbWludXRlIGJ1cywgdGhlbiBhIGhhbGYgaG91ciB0cmFpbiwgYW5kIGZpbmFsbHkgYSAxMCBtaW51dGUgYmlrZSByaWRlLlxuT3B0aW9uIDI6IFRha2UgYW4gODAwIG1pbnV0ZSBidXMsIHRoZW4gYW4gaG91ciB0cmFpbiwgYW5kIGZpbmFsbHkgYSAzMCBtaW51dGUgYmlrZSByaWRlLiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,o.kt)("h4",{id:"\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e"},"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e"),(0,o.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Ik9wdGlvbiAxIHdpbGwgdGFrZSAxMDAwKzMwKzEwID0gMTA0MCBtaW51dGVzLlxuT3B0aW9uIDIgd2lsbCB0YWtlIDgwMCs2MCszMCA9IDg5MCBtaW51dGVzLlxuU2luY2UgT3B0aW9uIDIgdGFrZXMgODkwIG1pbnV0ZXMgYW5kIE9wdGlvbiAxIHRha2VzIDEwNDAgbWludXRlcywgT3B0aW9uIDIgaXMgZmFzdGVyLiIsInByb21wdCI6IldoaWNoIGlzIGEgZmFzdGVyIHdheSB0byBnZXQgaG9tZT9cbk9wdGlvbiAxOiBUYWtlIGFuIDEwIG1pbnV0ZXMgYnVzLCB0aGVuIGFuIDQwIG1pbnV0ZSBidXMsIGFuZCBmaW5hbGx5IGEgMTAgbWludXRlIHRyYWluLlxuT3B0aW9uIDI6IFRha2UgYSA5MCBtaW51dGVzIHRyYWluLCB0aGVuIGEgNDUgbWludXRlIGJpa2UgcmlkZSwgYW5kIGZpbmFsbHkgYSAxMCBtaW51dGUgYnVzLlxuT3B0aW9uIDEgd2lsbCB0YWtlIDEwKzQwKzEwID0gNjAgbWludXRlcy5cbk9wdGlvbiAyIHdpbGwgdGFrZSA5MCs0NSsxMD0xNDUgbWludXRlcy5cblNpbmNlIE9wdGlvbiAxIHRha2VzIDYwIG1pbnV0ZXMgYW5kIE9wdGlvbiAyIHRha2VzIDE0NSBtaW51dGVzLCBPcHRpb24gMSBpcyBmYXN0ZXIuXG5cbldoaWNoIGlzIGEgZmFzdGVyIHdheSB0byBnZXQgdG8gd29yaz9cbk9wdGlvbiAxOiBUYWtlIGEgMTAwMCBtaW51dGUgYnVzLCB0aGVuIGEgaGFsZiBob3VyIHRyYWluLCBhbmQgZmluYWxseSBhIDEwIG1pbnV0ZSBiaWtlIHJpZGUuXG5PcHRpb24gMjogVGFrZSBhbiA4MDAgbWludXRlIGJ1cywgdGhlbiBhbiBob3VyIHRyYWluLCBhbmQgZmluYWxseSBhIDMwIG1pbnV0ZSBiaWtlIHJpZGUuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,o.kt)("h2",{id:"\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438"},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438"),(0,o.kt)("p",null,"\u0411\u0443\u043b\u043e \u0434\u043e\u0432\u0435\u0434\u0435\u043d\u043e, \u0449\u043e CoT \u0435\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e \u043f\u043e\u043a\u0440\u0430\u0449\u0443\u0454 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438 \u0432 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f\u0445 \u043d\u0430 \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044f, \u043b\u043e\u0433\u0456\u043a\u0443 \u0442\u0430 \u0441\u0438\u043c\u0432\u043e\u043b\u044c\u043d\u0456 \u043c\u0456\u0440\u043a\u0443\u0432\u0430\u043d\u043d\u044f",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". \u0417\u043e\u043a\u0440\u0435\u043c\u0430, \u0437\u0430\u043f\u0440\u043e\u043f\u043e\u043d\u043e\u0432\u0430\u043d\u0438\u0439 PaLM 540B",(0,o.kt)("sup",{parentName:"p",id:"fnref-2"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," \u0434\u043e\u0441\u044f\u0433\u0430\u0454 57% \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u0456 \u0440\u043e\u0437\u0432\u2019\u044f\u0437\u0430\u043d\u043d\u044f \u043d\u0430 GSM8K",(0,o.kt)("sup",{parentName:"p",id:"fnref-3"},(0,o.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," (\u043d\u0430 \u0442\u043e\u0439 \u0447\u0430\u0441 SOTA)."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)(g,{src:n,style:{width:"300px"},mdxType:"LazyLoadImage"})),(0,o.kt)("div",{style:{textAlign:"center"}},"\u041f\u043e\u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u0443 \u0431\u0435\u043d\u0447\u043c\u0430\u0440\u043a\u0443 GSM8K (\u0412\u0435\u0439 \u0442\u0430 \u0456\u043d.)"),(0,o.kt)("h2",{id:"\u043e\u0431\u043c\u0435\u0436\u0435\u043d\u043d\u044f"},"\u041e\u0431\u043c\u0435\u0436\u0435\u043d\u043d\u044f"),(0,o.kt)("p",null,"\u0412\u0430\u0436\u043b\u0438\u0432\u043e \u0437\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u0438, \u0449\u043e, \u0437\u0430 \u0441\u043b\u043e\u0432\u0430\u043c\u0438 \u0412\u0435\u0439 \u0442\u0430 \u0456\u043d., \xabCoT \u0434\u0430\u0454 \u043f\u0440\u0438\u0440\u0456\u0441\u0442 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0456 \u043b\u0438\u0448\u0435 \u0442\u043e\u0434\u0456, \u043a\u043e\u043b\u0438 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u0437 \u043c\u043e\u0434\u0435\u043b\u044f\u043c\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0456\u0432 \u223c100B\xbb. \u041c\u0435\u043d\u0448\u0456 \u043c\u043e\u0434\u0435\u043b\u0456 \u0431\u0443\u0434\u0443\u0432\u0430\u043b\u0438 \u043d\u0435\u043b\u043e\u0433\u0456\u0447\u043d\u0456 \u043b\u0430\u043d\u0446\u044e\u0433\u0438 \u0434\u0443\u043c\u043e\u043a, \u0449\u043e \u0441\u043f\u0440\u0438\u0447\u0438\u043d\u044f\u043b\u043e \u0431\u0456\u043b\u044c\u0448\u0435 \u043d\u0435\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u043e\u0441\u0442\u0435\u0439 \u0443 \u043f\u043e\u0440\u0456\u0432\u043d\u044f\u043d\u043d\u0456 \u0437\u0456 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0438\u043c\u0438 \u0437\u0430\u043f\u0438\u0442\u0430\u043c\u0438. \u041c\u043e\u0434\u0435\u043b\u0456 \u0437\u0430\u0437\u0432\u0438\u0447\u0430\u0439 \u043e\u0442\u0440\u0438\u043c\u0443\u044e\u0442\u044c \u043f\u0440\u0438\u0440\u0456\u0441\u0442 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0456 \u0432\u0456\u0434 \u0437\u0430\u043f\u0438\u0442\u0456\u0432 CoT \u043f\u0440\u043e\u043f\u043e\u0440\u0446\u0456\u0439\u043d\u043e \u0434\u043e \u0440\u043e\u0437\u043c\u0456\u0440\u0443 \u043c\u043e\u0434\u0435\u043b\u0456."),(0,o.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0456\u0442\u043a\u0438"},"\u041f\u0440\u0438\u043c\u0456\u0442\u043a\u0438"),(0,o.kt)("p",null,"\u0416\u043e\u0434\u043d\u0430 \u043c\u043e\u0432\u043d\u0430 \u043c\u043e\u0434\u0435\u043b\u044c ",(0,o.kt)("del",{parentName:"p"},"\u043d\u0435 \u043f\u043e\u0441\u0442\u0440\u0430\u0436\u0434\u0430\u043b\u0430")," \u043f\u0456\u0434 \u0447\u0430\u0441 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u044f \u0446\u044c\u043e\u0433\u043e \u0440\u043e\u0437\u0434\u0456\u043b\u0443 \ud83d\ude0a."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain of Thought Prompting Elicits Reasoning in Large Language Models.\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2"},"Chowdhery, A., Narang, S., Devlin, J., Bosma, M., Mishra, G., Roberts, A., Barham, P., Chung, H. W., Sutton, C., Gehrmann, S., Schuh, P., Shi, K., Tsvyashchenko, S., Maynez, J., Rao, A., Barnes, P., Tay, Y., Shazeer, N., Prabhakaran, V., \u2026 Fiedel, N. (2022). PaLM: Scaling Language Modeling with Pathways.\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-3"},"Cobbe, K., Kosaraju, V., Bavarian, M., Chen, M., Jun, H., Kaiser, L., Plappert, M., Tworek, J., Hilton, J., Nakano, R., Hesse, C., & Schulman, J. (2021). Training Verifiers to Solve Math Word Problems.\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}b.isMDXComponent=!0}}]);