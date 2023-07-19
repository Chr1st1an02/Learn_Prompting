"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[8863],{9163:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var n=o(7462),i=(o(7294),o(3905));const r=o.p+"assets/images/least_to_most_formal-486e9639afd8c95f3b069b29872d9dfd.webp";var u=o(9145);const a={sidebar_position:7},l="\ud83d\udfe1 \u6700\u5c11\u5230\u6700\u591a\u63d0\u793a\u8fc7\u7a0b",p={unversionedId:"intermediate/least_to_most",id:"intermediate/least_to_most",title:"\ud83d\udfe1 \u6700\u5c11\u5230\u6700\u591a\u63d0\u793a\u8fc7\u7a0b",description:"\u6700\u5c11\u5230\u6700\u591a\u63d0\u793a\u8fc7\u7a0b (Least to Most prompting, LtM)(@zhou2022leasttomost) \u5c06 %%\u601d\u7ef4\u94fe\u63d0\u793a\u8fc7\u7a0b (CoT prompting)|CoT prompting%% \u8fdb\u4e00\u6b65\u53d1\u5c55\uff0c\u9996\u5148\u5c06\u95ee\u9898\u5206\u89e3\u4e3a\u5b50\u95ee\u9898\uff0c\u7136\u540e\u9010\u4e2a\u89e3\u51b3\u3002\u5b83\u662f\u53d7\u5230\u9488\u5bf9\u513f\u7ae5\u7684\u73b0\u5b9e\u6559\u80b2\u7b56\u7565\u7684\u542f\u53d1\u800c\u53d1\u5c55\u51fa\u7684\u4e00\u79cd\u6280\u672f\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/intermediate/least_to_most.md",sourceDirName:"intermediate",slug:"/intermediate/least_to_most",permalink:"/zh-Hans/docs/intermediate/least_to_most",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intermediate/least_to_most.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe1 \u77e5\u8bc6\u751f\u6210",permalink:"/zh-Hans/docs/intermediate/generated_knowledge"},next:{title:"\ud83d\udfe2 \u63d0\u793a\u7684\u5173\u952e\u8981\u7d20",permalink:"/zh-Hans/docs/intermediate/whats_in_a_prompt"}},s={},d=[{value:"\u793a\u4f8b\uff1a\u56de\u590d\u5ba2\u6237\u54a8\u8be2",id:"\u793a\u4f8b\u56de\u590d\u5ba2\u6237\u54a8\u8be2",level:2},{value:"\u793a\u4f8b\uff1a\u5b57\u7b26\u8fde\u63a5",id:"\u793a\u4f8b\u5b57\u7b26\u8fde\u63a5",level:2},{value:"\u7b2c\u4e00\u6b21\u5c1d\u8bd5\uff1a\u6807\u51c6\u63d0\u793a",id:"\u7b2c\u4e00\u6b21\u5c1d\u8bd5\u6807\u51c6\u63d0\u793a",level:3},{value:"\u7b2c\u4e8c\u6b21\u5c1d\u8bd5\uff1a\u601d\u7ef4\u94fe",id:"\u7b2c\u4e8c\u6b21\u5c1d\u8bd5\u601d\u7ef4\u94fe",level:3},{value:"\u7b2c\u4e09\u6b21\u5c1d\u8bd5\uff1aLtM\uff08\u5355\u4e00\u63d0\u793a\uff09",id:"\u7b2c\u4e09\u6b21\u5c1d\u8bd5ltm\u5355\u4e00\u63d0\u793a",level:3},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:3},{value:"\u793a\u4f8b\uff1a\u7ec4\u5408\u6cdb\u5316\u95ee\u9898(compositional generalization) (SCAN)",id:"\u793a\u4f8b\u7ec4\u5408\u6cdb\u5316\u95ee\u9898compositional-generalization-scan",level:2},{value:"\u7b2c\u4e00\u6b21\u5c1d\u8bd5\uff1a\u6807\u51c6\u63d0\u793a",id:"\u7b2c\u4e00\u6b21\u5c1d\u8bd5\u6807\u51c6\u63d0\u793a-1",level:3},{value:"\u7b2c\u4e8c\u6b21\u5c1d\u8bd5\uff1aLtM\uff0c\u7b2c\u4e00\u6b65 - \u7f29\u51cf",id:"\u7b2c\u4e8c\u6b21\u5c1d\u8bd5ltm\u7b2c\u4e00\u6b65---\u7f29\u51cf",level:3},{value:"\u7b2c\u4e8c\u6b21\u5c1d\u8bd5\uff1aLtM\uff0c\u7b2c\u4e8c\u6b65 - \u6620\u5c04",id:"\u7b2c\u4e8c\u6b21\u5c1d\u8bd5ltm\u7b2c\u4e8c\u6b65---\u6620\u5c04",level:3},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba-1",level:3}],h=(f="LazyLoadImage",function(t){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)});var f;const c={toc:d},m="wrapper";function k(t){let{components:e,...o}=t;return(0,i.kt)(m,(0,n.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-\u6700\u5c11\u5230\u6700\u591a\u63d0\u793a\u8fc7\u7a0b"},"\ud83d\udfe1 \u6700\u5c11\u5230\u6700\u591a\u63d0\u793a\u8fc7\u7a0b"),(0,i.kt)("p",null,"\u6700\u5c11\u5230\u6700\u591a\u63d0\u793a\u8fc7\u7a0b (Least to Most prompting, LtM)",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," \u5c06 ",(0,i.kt)("a",{parentName:"p",id:"CoT prompting_2_3_1689801952795","data-tooltip-html":"The main idea of CoT is that by showing the LLM some few shot exemplars where the reasoning process is explained in the exemplars, the LLM will also show the reasoning process when answering the prompt.","data-tooltip-place":"top"},"\u601d\u7ef4\u94fe\u63d0\u793a\u8fc7\u7a0b (CoT prompting)"),(0,i.kt)(u.u,{anchorId:"CoT prompting_2_3_1689801952795",clickable:!0,mdxType:"Tooltip"})," \u8fdb\u4e00\u6b65\u53d1\u5c55\uff0c\u9996\u5148\u5c06\u95ee\u9898\u5206\u89e3\u4e3a\u5b50\u95ee\u9898\uff0c\u7136\u540e\u9010\u4e2a\u89e3\u51b3\u3002\u5b83\u662f\u53d7\u5230\u9488\u5bf9\u513f\u7ae5\u7684\u73b0\u5b9e\u6559\u80b2\u7b56\u7565\u7684\u542f\u53d1\u800c\u53d1\u5c55\u51fa\u7684\u4e00\u79cd\u6280\u672f\u3002"),(0,i.kt)("p",null,"\u4e0e\u601d\u7ef4\u94fe\u63d0\u793a\u8fc7\u7a0b\u7c7b\u4f3c\uff0c\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898\u88ab\u5206\u89e3\u6210\u4e00\u7ec4\u5efa\u7acb\u5728\u5f7c\u6b64\u4e4b\u4e0a\u7684\u5b50\u95ee\u9898\u3002\u5728\u7b2c\u4e8c\u6b65\u4e2d\uff0c\u8fd9\u4e9b\u5b50\u95ee\u9898\u88ab\u9010\u4e2a\u89e3\u51b3\u3002\u4e0e\u601d\u7ef4\u94fe\u4e0d\u540c\u7684\u662f\uff0c\u5148\u524d\u5b50\u95ee\u9898\u7684\u89e3\u51b3\u65b9\u6848\u88ab\u8f93\u5165\u5230\u63d0\u793a\u4e2d\uff0c\u4ee5\u5c1d\u8bd5\u89e3\u51b3\u4e0b\u4e00\u4e2a\u95ee\u9898\u3002"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)(h,{src:r,style:{width:"600px"},alt:"LtM \u7684\u56fe\u793a",mdxType:"LazyLoadImage"})),(0,i.kt)("div",{style:{textAlign:"center"}},"LtM \u7684\u56fe\u793a"),(0,i.kt)("h2",{id:"\u793a\u4f8b\u56de\u590d\u5ba2\u6237\u54a8\u8be2"},"\u793a\u4f8b\uff1a\u56de\u590d\u5ba2\u6237\u54a8\u8be2"),(0,i.kt)("p",null,"\u8ba9\u6211\u4eec\u95ee\u4e00\u4e2a\u7a0d\u5fae\u590d\u6742\u7684\u5ba2\u670d\u95ee\u9898\uff1a"),(0,i.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"\u5ba2\u6237\u54a8\u8be2:\\n\u6211\u57283\u67081\u65e5\u8d2d\u4e70\u4e86\u4f60\u4eec Arnold \u7cfb\u5217\u7684\u4e00\u4ef6T\u6064\u3002\u6211\u770b\u5230\u5b83\u6709\u6298\u6263\uff0c\u6240\u4ee5\u4e70\u4e86\u4e00\u4ef6\u539f\u4ef7\u4e3a 30 \u7f8e\u5143\u7684\u886c\u886b\uff0c\u6253\u4e86 6 \u6298\u3002\u6211\u53d1\u73b0\u4f60\u4eec\u73b0\u5728\u6709\u4e00\u4e2a\u65b0\u7684T\u6064\u6298\u6263\u6d3b\u52a8\uff0c50% off\u3002\u6211\u60f3\u77e5\u9053\u6211\u662f\u5426\u53ef\u4ee5\u9000\u8d27\uff0c\u540c\u65f6\u62e5\u6709\u8db3\u591f\u7684\u5e97\u5185\u79ef\u5206\u6765\u8d2d\u4e70\u4e24\u4ef6\u4f60\u4eec\u7684T\u6064\uff1f\\n\\n\u6307\u4ee4:\\n\u4f60\u662f\u4e00\u540d\u5ba2\u6237\u670d\u52a1\u4ee3\u8868\uff0c\u8d1f\u8d23\u53cb\u597d\u5730\u56de\u590d\u5ba2\u6237\u7684\u67e5\u8be2\u3002\u9000\u8d27\u5728 30 \u5929\u5185\u5141\u8bb8\u3002\u4eca\u5929\u662f 3 \u6708 29 \u65e5\u3002\u76ee\u524d\u6240\u6709\u886c\u886b\u90fd\u6709 50% \u7684\u6298\u6263\u3002\u4f60\u7684\u5e97\u91cc\u886c\u886b\u4ef7\u683c\u5728 18-100 \u7f8e\u5143\u4e4b\u95f4\u3002\u8bf7\u52ff\u7f16\u9020\u4efb\u4f55\u5173\u4e8e\u6298\u6263\u653f\u7b56\u7684\u4fe1\u606f\u3002","initial-response":"\u5c0a\u656c\u7684\u5ba2\u6237\uff0c\\n\u611f\u8c22\u60a8\u8d2d\u4e70\u6211\u4eec\u7684 Arnold \u7cfb\u5217T\u6064\u3002\u6211\u4eec\u5f88\u9ad8\u5174\u80fd\u4e3a\u60a8\u63d0\u4f9b\u670d\u52a1\u3002\\n\\n\u5f88\u9057\u61be\uff0c\u6211\u4eec\u4e0d\u80fd\u63a5\u53d7\u60a8\u7684\u9000\u8d27\uff0c\u56e0\u4e3a\u60a8\u5df2\u7ecf\u8d85\u8fc7\u4e86\u6211\u4eec\u768430\u5929\u9000\u8d27\u653f\u7b56\u3002\u4f46\u662f\uff0c\u6211\u4eec\u73b0\u5728\u6b63\u5728\u4e3e\u884c\u4e00\u4e2a\u7279\u522b\u7684T\u6064\u6298\u6263\u6d3b\u52a8\uff0c\u6240\u6709T\u6064\u90fd\u670950\uff05\u7684\u6298\u6263\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u60a8\u7684\u5e97\u5185\u79ef\u5206\u6765\u8d2d\u4e70\u4e24\u4ef6T\u6064","max-tokens":"256","box-rows":"16","model-temp":"0","top-p":"0"},(0,i.kt)("noscript",null,"Failed to load Dyno Embed: JavaScript must be enabled")),(0,i.kt)("br",null),"\u8fd9\u4e2a\u56de\u7b54\u662f\u9519\u8bef\u7684\uff08\u76ee\u524d\u8fd8\u5728\u9000\u8d27\u65f6\u95f4\u5185\uff09\uff0c\u90a3\u6211\u4eec\u6765\u5c06\u95ee\u9898\u5206\u89e3\u4e3a\u5b50\u95ee\u9898\u8bd5\u8bd5\uff1a",(0,i.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"\u5ba2\u6237\u54a8\u8be2:\\n\u6211\u57283\u67081\u65e5\u8d2d\u4e70\u4e86\u4f60\u4eec Arnold \u7cfb\u5217\u7684\u4e00\u4ef6T\u6064\u3002\u6211\u770b\u5230\u5b83\u6709\u6298\u6263\uff0c\u6240\u4ee5\u4e70\u4e86\u4e00\u4ef6\u539f\u4ef7\u4e3a 30 \u7f8e\u5143\u7684\u886c\u886b\uff0c\u6253\u4e86 6 \u6298\u3002\u6211\u53d1\u73b0\u4f60\u4eec\u73b0\u5728\u6709\u4e00\u4e2a\u65b0\u7684T\u6064\u6298\u6263\u6d3b\u52a8\uff0c50% off\u3002\u6211\u60f3\u77e5\u9053\u6211\u662f\u5426\u53ef\u4ee5\u9000\u8d27\uff0c\u540c\u65f6\u62e5\u6709\u8db3\u591f\u7684\u5e97\u5185\u79ef\u5206\u6765\u8d2d\u4e70\u4e24\u4ef6\u4f60\u4eec\u7684T\u6064\uff1f\\n\\n\u6307\u4ee4:\\n\u4f60\u662f\u4e00\u540d\u5ba2\u6237\u670d\u52a1\u4ee3\u8868\uff0c\u8d1f\u8d23\u53cb\u597d\u5730\u56de\u590d\u5ba2\u6237\u7684\u67e5\u8be2\u3002\u9000\u8d27\u5728 30 \u5929\u5185\u5141\u8bb8\u3002\u4eca\u5929\u662f 3 \u6708 29 \u65e5\u3002\u76ee\u524d\u6240\u6709\u886c\u886b\u90fd\u6709 50% \u7684\u6298\u6263\u3002\u4f60\u7684\u5e97\u91cc\u886c\u886b\u4ef7\u683c\u5728 18-100 \u7f8e\u5143\u4e4b\u95f4\u3002\u8bf7\u52ff\u7f16\u9020\u4efb\u4f55\u5173\u4e8e\u6298\u6263\u653f\u7b56\u7684\u4fe1\u606f\u3002\\n\u5728\u56de\u7b54\u8fd9\u4e2a\u95ee\u9898\u4e4b\u524d\uff0c\u5fc5\u987b\u89e3\u51b3\u54ea\u4e9b\u5b50\u95ee\u9898\uff1f","initial-response":"1.\u5ba2\u6237\u8d2d\u4e70\u886c\u886b\u7684\u65e5\u671f\uff1b\\n2.\u5f53\u524d\u7684\u6298\u6263\u6d3b\u52a8\uff1b\\n3.\u5e97\u5185\u886c\u886b\u7684\u4ef7\u683c\u8303\u56f4\uff1b\\n4.\u5ba2\u6237\u662f\u5426\u6709\u8db3\u591f\u7684\u5e97\u5185\u79ef\u5206\uff1b\\n5.\u5ba2\u6237\u9000\u8d27\u7684\u653f\u7b56\u3002","max-tokens":"256","box-rows":"12","model-temp":"0","top-p":"0"},(0,i.kt)("noscript",null,"Failed to load Dyno Embed: JavaScript must be enabled")),(0,i.kt)("br",null),"\u8ba9\u6211\u4eec\u8bd5\u7740\u89e3\u51b3\u7b2c\u4e00\u4e2a\u5b50\u95ee\u9898\uff1a",(0,i.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"\u5ba2\u6237\u54a8\u8be2:\\n\u6211\u57283\u67081\u65e5\u8d2d\u4e70\u4e86\u4f60\u4eec Arnold \u7cfb\u5217\u7684\u4e00\u4ef6T\u6064\u3002\u6211\u770b\u5230\u5b83\u6709\u6298\u6263\uff0c\u6240\u4ee5\u4e70\u4e86\u4e00\u4ef6\u539f\u4ef7\u4e3a 30 \u7f8e\u5143\u7684\u886c\u886b\uff0c\u6253\u4e86 6 \u6298\u3002\u6211\u53d1\u73b0\u4f60\u4eec\u73b0\u5728\u6709\u4e00\u4e2a\u65b0\u7684T\u6064\u6298\u6263\u6d3b\u52a8\uff0c50% off\u3002\u6211\u60f3\u77e5\u9053\u6211\u662f\u5426\u53ef\u4ee5\u9000\u8d27\uff0c\u540c\u65f6\u62e5\u6709\u8db3\u591f\u7684\u5e97\u5185\u79ef\u5206\u6765\u8d2d\u4e70\u4e24\u4ef6\u4f60\u4eec\u7684T\u6064\uff1f\\n\\n\u6307\u4ee4:\\n\u4f60\u662f\u4e00\u540d\u5ba2\u6237\u670d\u52a1\u4ee3\u8868\uff0c\u8d1f\u8d23\u53cb\u597d\u5730\u56de\u590d\u5ba2\u6237\u7684\u67e5\u8be2\u3002\u9000\u8d27\u5728 30 \u5929\u5185\u5141\u8bb8\u3002\u4eca\u5929\u662f 3 \u6708 29 \u65e5\u3002\u76ee\u524d\u6240\u6709\u886c\u886b\u90fd\u6709 50% \u7684\u6298\u6263\u3002\u4f60\u7684\u5e97\u91cc\u886c\u886b\u4ef7\u683c\u5728 18-100 \u7f8e\u5143\u4e4b\u95f4\u3002\u8bf7\u52ff\u7f16\u9020\u4efb\u4f55\u5173\u4e8e\u6298\u6263\u653f\u7b56\u7684\u4fe1\u606f\u3002\\n\u786e\u5b9a\u5ba2\u6237\u662f\u5426\u572830\u5929\u7684\u9000\u8d27\u671f\u5185\u3002\u8ba9\u6211\u4eec\u4e00\u6b65\u4e00\u6b65\u6765\u3002","initial-response":"\u5c0a\u656c\u7684\u5ba2\u6237\uff0c\u975e\u5e38\u611f\u8c22\u60a8\u5bf9 Arnold \u7cfb\u5217\u7684\u652f\u6301\uff01\u6211\u4eec\u5f88\u9ad8\u5174\u5730\u5411\u60a8\u63d0\u4f9b\u670d\u52a1\u3002\u6211\u4eec\u7684\u9000\u8d27\u653f\u7b56\u662f\uff0c\u5ba2\u6237\u53ef\u4ee5\u5728\u8d2d\u4e70\u5546\u54c1\u7684 30 \u5929\u5185\u8fdb\u884c\u9000\u8d27\u3002\u7531\u4e8e\u60a8\u662f\u5728 3 \u6708 1 \u65e5\u8d2d\u4e70\u7684\uff0c\u6240\u4ee5\u60a8\u4ecd\u7136\u5728\u9000\u8d27\u671f\u5185\uff0c\u53ef\u4ee5\u9000\u8d27\u3002\\n\\n\u6b64\u5916\uff0c\u6211\u4eec\u76ee\u524d\u6b63\u5728\u4e3e\u884c\u4e00\u4e2a 50% \u7684\u6298\u6263\u6d3b\u52a8\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u60a8\u7684\u5e97\u5185\u79ef\u5206\u8d2d\u4e70\u4e24\u4ef6 Arnold \u7cfb\u5217\u7684 T \u6064\u3002\u6211\u4eec\u7684\u886c\u886b\u4ef7\u683c\u5728 18-100 \u7f8e\u5143\u4e4b\u95f4\uff0c\u60a8\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u9009\u62e9\u5408\u9002\u7684\u886c\u886b\u3002\\n\\n\u5982\u679c\u60a8\u6709\u4efb\u4f55\u5176\u4ed6\u95ee\u9898\uff0c\u8bf7\u968f\u65f6\u4e0e\u6211\u4eec\u8054\u7cfb\u3002\u6211\u4eec\u5c06\u7aed\u8bda\u4e3a\u60a8\u670d\u52a1\uff01","max-tokens":"512","box-rows":"19","model-temp":"0","top-p":"0"},(0,i.kt)("noscript",null,"Failed to load Dyno Embed: JavaScript must be enabled")),(0,i.kt)("p",null,"\u4ec5\u4ec5\u901a\u8fc7\u89e3\u51b3\u7b2c\u4e00\u4e2a\u5b50\u95ee\u9898\uff0c\u6211\u4eec\u5c31\u80fd\u89e3\u51b3\u6574\u4e2a\u95ee\u9898\u3002\u5982\u679c GPT-3 \u6ca1\u6709\u7acb\u5373\u7ed9\u51fa\u7b54\u6848\uff0c\u6211\u4eec\u53ef\u4ee5\u89e3\u51b3\u4e0b\u4e00\u4e2a\u5b50\u95ee\u9898\uff0c\u76f4\u5230\u5b83\u8fd4\u56de\u7b54\u6848\u3002\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u8ba9\u6211\u4eec\u4e00\u6b65\u4e00\u6b65\u6765")," \u7684\u63d0\u793a\u77ed\u8bed\u3002\u8fd9\u4e2a\u63d0\u793a\u4e0d\u662f\u5fc5\u987b\u7684\uff0c\u4f46\u5bf9\u4e8e\u8fd9\u4e2a\u4f8b\u5b50\u6765\u8bf4\u6548\u679c\u5f88\u597d\u3002"),(0,i.kt)("h2",{id:"\u793a\u4f8b\u5b57\u7b26\u8fde\u63a5"},"\u793a\u4f8b\uff1a\u5b57\u7b26\u8fde\u63a5"),(0,i.kt)("p",null,"LtM \u6700\u521d\u662f\u4f7f\u7528 few-shot \u63d0\u793a\u7684\u65b9\u5f0f\u5f15\u5165\u7684\uff0c\u800c\u4e0d\u662f\u663e\u5f0f\u6307\u4ee4\u5c06\u95ee\u9898\u5206\u89e3\u4e3a\u591a\u4e2a\u6b65\u9aa4\uff08\u5982\u4e0a\u6240\u793a\uff09\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u6709\u65f6\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5355\u4e00\u63d0\u793a\u800c\u4e0d\u662f\u63d0\u793a\u94fe\u6765\u5b9e\u73b0\u5b83\u3002\u8ba9\u6211\u4eec\u6765\u770b\u770b\u5b57\u7b26\u8fde\u63a5\u7684\u5c3e\u5b57\u95ee\u9898",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"\uff0c\u4f8b\u5982\u7ed9\u5b9a\u8f93\u5165\u8bcd\u8bed ",(0,i.kt)("inlineCode",{parentName:"p"},"\u601d\u8003\u3001\u673a\u5668"),"\uff0c\u5219\u8f93\u51fa\u5e94\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"\u8003\u5668"),"\u3002"),(0,i.kt)("h3",{id:"\u7b2c\u4e00\u6b21\u5c1d\u8bd5\u6807\u51c6\u63d0\u793a"},"\u7b2c\u4e00\u6b21\u5c1d\u8bd5\uff1a\u6807\u51c6\u63d0\u793a"),(0,i.kt)("p",null,"\u5373\u4f7f\u4f7f\u7528\u66f4\u5148\u8fdb\u7684\u6a21\u578b\uff08\u5982 text-davinci-003\uff09\uff0c\u6807\u51c6\u63d0\u793a\u4e0e few-shot \u793a\u4f8b\u7684\u8868\u73b0\u4e5f\u975e\u5e38\u7cdf\u7cd5\u3002"),(0,i.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"Q: \u601d\u8003\u3001\u673a\u5668\\nA: \u8003\u5668\\n\\nQ: \u5b66\u4e60\u3001\u63a8\u7406\u3001\u5f52\u7eb3\\nA: \u4e60\u7406\u7eb3\\n\\nQ: \u4eba\u5de5\u3001\u667a\u80fd\\nA: \u5de5\u80fd\\n\\nQ: \u8f6c\u5316\u5668\u3001\u8bed\u8a00\u3001\u89c6\u89c9\\nA: \u5668\u8a00\u89c9\\n\\nQ: \u5f20\u4e09\u3001\u674e\u56db\u3001\u624b\u673a\u3001\u94b1\u5305\\nA:","initial-response":"\u4e09\u56db\u624b\u94b1","max-tokens":"256","box-rows":"18","model-temp":"0.2"}),(0,i.kt)("h3",{id:"\u7b2c\u4e8c\u6b21\u5c1d\u8bd5\u601d\u7ef4\u94fe"},"\u7b2c\u4e8c\u6b21\u5c1d\u8bd5\uff1a\u601d\u7ef4\u94fe"),(0,i.kt)("p",null,"\u601d\u7ef4\u94fe\u7684\u8868\u73b0\u6bd4\u6807\u51c6\u63d0\u793a\u597d\u5f97\u591a\u3002\u8fd9\u662f\u56e0\u4e3a\u5b83\u73b0\u5728\u5141\u8bb8\u6a21\u578b\u8003\u8651\u81ea\u5df1\u63d0\u53d6\u6bcf\u4e2a\u5355\u8bcd\u7684\u6700\u540e\u4e00\u4e2a\u5b57\u6bcd\uff0c\u5c06\u590d\u6742\u6027\u964d\u4f4e\u5230\u5206\u7ec4\u5df2\u7ecf\u6536\u96c6\u7684\u5b57\u6bcd\u7684\u884c\u4e3a\u3002\u7136\u800c\uff0c\u8fd9\u79cd\u65b9\u6cd5\u5728\u66f4\u957f\u7684\u8f93\u5165\u4e0b\u4e5f\u53ef\u80fd\u6162\u6162\u51fa\u73b0\u95ee\u9898\u3002"),(0,i.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"Q: \u601d\u8003\u3001\u673a\u5668\\nA: '\u601d\u8003'\u7684\u5c3e\u5b57\u662f'\u8003'\uff0c'\u673a\u5668'\u7684\u5c3e\u5b57\u662f'\u5668'\uff0c\u6240\u4ee5\u7b54\u6848\u662f'\u8003\u5668'\\n\\nQ: \u5b66\u4e60\u3001\u63a8\u7406\u3001\u5f52\u7eb3\\nA: '\u5b66\u4e60'\u7684\u5c3e\u5b57\u662f'\u4e60'\uff0c'\u63a8\u7406'\u7684\u5c3e\u5b57\u662f'\u7406'\uff0c'\u5f52\u7eb3'\u7684\u5c3e\u5b57\u662f'\u7eb3'\uff0c\u6240\u4ee5\u7b54\u6848\u662f'\u4e60\u7406\u7eb3'\\n\\nQ: \u8f6c\u5316\u5668\u3001\u8bed\u8a00\u3001\u89c6\u89c9\\nA: '\u8f6c\u5316\u5668'\u7684\u5c3e\u5b57\u662f'\u5668'\uff0c'\u8bed\u8a00'\u7684\u5c3e\u5b57\u662f'\u8a00'\uff0c'\u89c6\u89c9'\u7684\u5c3e\u5b57\u662f'\u89c9'\uff0c\u6240\u4ee5\u7b54\u6848\u662f'\u5668\u8a00\u89c9'\\n\\nQ: \u5f20\u4e09\u3001\u674e\u56db\u3001\u624b\u673a\u3001\u94b1\u5305\\nA: ","initial-response":"'\u5f20\u4e09'\u7684\u5c3e\u5b57\u662f'\u4e09'\uff0c'\u674e\u56db'\u7684\u5c3e\u5b57\u662f'\u56db'\uff0c'\u624b\u673a'\u7684\u5c3e\u5b57\u662f'\u673a'\uff0c'\u94b1\u5305'\u7684\u5c3e\u5b57\u662f'\u5305'\uff0c\u6240\u4ee5\u7b54\u6848\u662f'\u4e09\u56db\u673a\u5305'","max-tokens":"256","box-rows":"18","model-temp":"0.2"}),(0,i.kt)("h3",{id:"\u7b2c\u4e09\u6b21\u5c1d\u8bd5ltm\u5355\u4e00\u63d0\u793a"},"\u7b2c\u4e09\u6b21\u5c1d\u8bd5\uff1aLtM\uff08\u5355\u4e00\u63d0\u793a\uff09"),(0,i.kt)("p",null,"\u4f7f\u7528 LtM\uff0c\u6211\u4eec\u901a\u8fc7\u91cd\u65b0\u8868\u8ff0\u5148\u524d\u4e32\u8054\u7684\u7ed3\u679c\u6765\u589e\u5f3a\u601d\u7ef4\u94fe\u7684\u6982\u5ff5\u3002\u8fd9\u79cd\u505a\u6cd5\u4f7f\u5f97\u6bcf\u4e2a\u6b65\u9aa4\u53d8\u7684\u7b80\u5355\uff0c\u5373\u6bcf\u6b21\u53ea\u9700\u8981\u8fde\u63a5\u4e00\u4e2a\u5b57\u7b26\u3002\u8fd9\u79cd\u65b9\u6cd5\u5e26\u6765\u4e86\u975e\u5e38\u597d\u7684\u6548\u679c\uff0c12 \u4e2a\u4e43\u81f3\u66f4\u591a\u7684\u8bcd\u90fd\u80fd\u5f97\u5230\u6b63\u786e\u7ed3\u679c\u3002"),(0,i.kt)("p",null,"\u8fd9\u79cd\u65b9\u6cd5\u770b\u8d77\u6765\u4e0e\u601d\u7ef4\u94fe\u975e\u5e38\u76f8\u4f3c\uff0c\u4f46\u5728\u6982\u5ff5\u4e0a\u5927\u6709\u4e0d\u540c\u3002\u5728\u8fd9\u91cc\uff0c\u6bcf\u4e00\u6b65\u90fd\u5f15\u5165\u4e86\u4e0a\u4e00\u6b65\u8fde\u63a5\u7684\u7ed3\u679c\u3002\u4f8b\u5982\uff0c\u5728\u201c\u601d\u8003\u3001\u673a\u5668\u3001\u5b66\u4e60\u201d\u7684\u8fd9\u4e2a\u4f8b\u5b50\u79cd\uff0c\u5b83\u4e0d\u4f1a\u5355\u72ec\u8fde\u63a5\u5b57\u7b26\u201c\u8003\u201d\uff0c\u201c\u5668\u201d\uff0c\u201c\u4e60\u201d\uff0c\u800c\u662f\u8fde\u63a5\u201c\u8003\u201d\u548c\u201c\u5668\u201d\uff0c\u7136\u540e\u8fde\u63a5\u201c\u8003\u5668\u201d\u548c\u201c\u4e60\u201d\u3002\u7531\u4e8e\u91cd\u65b0\u5f15\u5165\u4e86\u4e0a\u4e00\u6b65\u7684\u7ed3\u679c\uff0c\u6a21\u578b\u73b0\u5728\u53ef\u4ee5\u63a8\u5e7f\u5230\u66f4\u957f\u7684\u94fe\uff0c\u56e0\u4e3a\u5b83\u6bcf\u4e00\u6b65\u90fd\u5e26\u7740\u589e\u91cf\u7ed3\u679c\uff0c\u540c\u65f6\u5355\u6b65\u9aa4\u5185\u53ea\u9700\u8981\u505a\u5f88\u5c11\u7684\u5de5\u4f5c\u3002"),(0,i.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"Q: \u601d\u8003|\u673a\u5668\\nA: '\u601d\u8003'\u7684\u6700\u540e\u4e00\u4e2a\u5b57\u6bcd\u662f'\u8003'\uff0c'\u673a\u5668'\u7684\u6700\u540e\u4e00\u4e2a\u5b57\u6bcd\u662f'\u5668'\u3002\u5c06'\u8003'\u548c'\u5668'\u4e32\u8054\u8d77\u6765\u5c31\u5f97\u5230'\u8003\u5668'\u3002\u6240\u4ee5'\u601d\u8003|\u673a\u5668'\u7684\u8f93\u51fa\u7ed3\u679c\u662f'\u8003\u5668'\u3002\\n\\nQ: \u601d\u8003|\u673a\u5668|\u5b66\u4e60\\nA: '\u601d\u8003|\u673a\u5668'\u8f93\u51fa\u7ed3\u679c\u662f'\u8003\u5668'\uff0c'\u5b66\u4e60'\u7684\u6700\u540e\u4e00\u4e2a\u5b57\u6bcd\u662f'\u4e60'\u3002\u5c06'\u8003\u5668'\u548c'\u4e60'\u4e32\u8054\u8d77\u6765\u5c31\u5f97\u5230'\u8003\u5668\u4e60'\u3002\u6240\u4ee5'\u601d\u8003|\u673a\u5668|\u5b66\u4e60'\u7684\u8f93\u51fa\u7ed3\u679c\u662f'\u8003\u5668\u4e60'\u3002\\n\\nQ: \u8f6c\u5316\u5668|\u8bed\u8a00\\nA: '\u8f6c\u5316\u5668'\u7684\u6700\u540e\u4e00\u4e2a\u5b57\u6bcd\u662f'\u5668'\uff0c'\u8bed\u8a00'\u7684\u6700\u540e\u4e00\u4e2a\u5b57\u6bcd\u662f'\u8a00'\u3002\u5c06'\u5668'\u548c'\u8a00'\u4e32\u8054\u8d77\u6765\u5c31\u5f97\u5230'\u5668\u8a00'\u3002\u6240\u4ee5'\u8f6c\u5316\u5668|\u8bed\u8a00'\u7684\u8f93\u51fa\u7ed3\u679c\u662f'\u5668\u8a00'\u3002\\n\\nQ: \u8f6c\u5316\u5668|\u8bed\u8a00|\u89c6\u89c9\\nA: '\u8f6c\u5316\u5668|\u8bed\u8a00'\u7684\u8f93\u51fa\u7ed3\u679c\u662f'\u5668\u8a00'\uff0c'\u89c6\u89c9'\u7684\u6700\u540e\u4e00\u4e2a\u5b57\u6bcd\u662f'\u89c9'\u3002\u5c06'\u5668\u8a00'\u548c'\u89c9'\u4e32\u8054\u8d77\u6765\u5c31\u5f97\u5230'\u5668\u8a00\u89c9'\u3002\u6240\u4ee5'\u8f6c\u5316\u5668|\u8bed\u8a00|\u89c6\u89c9'\u7684\u8f93\u51fa\u7ed3\u679c\u662f'\u5668\u8a00\u89c9'\u3002\\n\\nQ: \u5f20\u4e09|\u674e\u56db|\u624b\u673a|\u94b1\u5305|\u94a5\u5319|\u623f\u5b50|\u6c7d\u8f66|\u7535\u8111|\u4e66|\u7535\u89c6|\u53ef\u4e50|\u96ea\u78a7|\u6a58\u732b\\nA: ","initial-response":"'\u5f20\u4e09|\u674e\u56db'\u7684\u8f93\u51fa\u7ed3\u679c\u662f'\u4e09\u56db'\uff0c'\u624b\u673a|\u94b1\u5305'\u7684\u8f93\u51fa\u7ed3\u679c\u662f'\u673a\u5305'\uff0c'\u94a5\u5319|\u623f\u5b50'\u7684\u8f93\u51fa\u7ed3\u679c\u662f'\u5319\u5b50'\uff0c'\u6c7d\u8f66|\u7535\u8111'\u7684\u8f93\u51fa\u7ed3\u679c\u662f'\u8f66\u8111'\uff0c'\u4e66|\u7535\u89c6'\u7684\u8f93\u51fa\u7ed3\u679c\u662f'\u4e66\u89c6'\uff0c'\u53ef\u4e50|\u96ea\u78a7'\u7684\u8f93\u51fa\u7ed3\u679c\u662f'\u4e50\u78a7'\uff0c'\u6a58\u732b'\u7684\u8f93\u51fa\u7ed3\u679c\u662f'\u732b'\u3002\u5c06\u8fd9\u4e9b\u8f93\u51fa\u7ed3\u679c\u4e32\u8054\u8d77\u6765\u5c31\u5f97\u5230'\u4e09\u56db\u673a\u5305\u5319\u5b50\u8f66\u8111\u4e66\u89c6\u4e50\u78a7\u732b'\u3002\u6240\u4ee5'\u5f20\u4e09|\u674e\u56db|\u624b\u673a|\u94b1\u5305|\u94a5\u5319|\u623f\u5b50|\u6c7d\u8f66|\u7535\u8111|\u4e66|\u7535\u89c6|\u53ef\u4e50|\u96ea\u78a7|\u6a58\u732b'\u7684\u8f93\u51fa\u7ed3\u679c\u662f'\u4e09\u56db\u673a\u5305\u5319\u5b50\u8f66\u8111\u4e66\u89c6\u4e50\u78a7\u732b'\u3002","max-tokens":"1024","box-rows":"18","model-temp":"0.2"}),"\uff08\u8bd1\u6ce8\uff1a\u8be5\u4f8b\u5b50\u4f7f\u7528\u4e86 '|' \u800c\u975e '\uff0c'\uff0c\u662f\u56e0\u4e3a\u4e2d\u6587\u7684\u9017\u53f7\u7ecf\u5e38\u4e0d\u88ab\u8bc6\u522b\u4e3a\u5206\u9694\u7b26\uff09\u3002",(0,i.kt)("h3",{id:"\u7ed3\u8bba"},"\u7ed3\u8bba"),(0,i.kt)("p",null,"\u5728\u5177\u6709 12 \u4e2a\u8bcd\u7684\u5b57\u7b26\u95ee\u9898\u4e0a\uff0c\u601d\u7ef4\u94fe\u7684\u51c6\u786e\u7387\u4e3a 34\uff05\uff0c\u800c LtM \u7684\u51c6\u786e\u7387\u4e3a 74\uff05\uff08\u8be5\u8bba\u6587\u4f7f\u7528 text-davinci-002 \u4f5c\u4e3a\u6a21\u578b\uff09\uff08\u8bd1\u6ce8\uff1a\u4e0a\u9762\u7684\u793a\u4f8b\u56e0\u4e3a\u7ffb\u8bd1\u6210\u4e86\u4e2d\u6587\uff0c\u6240\u4ee5\u51c6\u786e\u7387\u4e0e\u539f\u6587\u4e2d\u7684\u503c\u5e94\u8be5\u4e0d\u540c\uff09\u3002"),(0,i.kt)("h2",{id:"\u793a\u4f8b\u7ec4\u5408\u6cdb\u5316\u95ee\u9898compositional-generalization-scan"},"\u793a\u4f8b\uff1a\u7ec4\u5408\u6cdb\u5316\u95ee\u9898(compositional generalization) (SCAN)"),(0,i.kt)("p",null,"SCAN \u57fa\u51c6\u6d4b\u8bd5",(0,i.kt)("sup",{parentName:"p",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),"\u8981\u6c42\u6a21\u578b\u5c06\u81ea\u7136\u8bed\u8a00\u8f6c\u6362\u4e3a\u52a8\u4f5c\u5e8f\u5217\u3002\u4f8b\u5982\uff0c\u53e5\u5b50 \u201crun left and walk twice\u201d \u5c06\u88ab\u7ffb\u8bd1\u4e3a \u201cTURN_LEFT + RUN + WALK * 2\u201d\u3002\u5f53\u9762\u5bf9\u8bad\u7ec3\u96c6\u4e2d\u957f\u5ea6\u66f4\u957f\u7684\u5e8f\u5217\u65f6\uff0c\u8bed\u8a00\u6a21\u578b\u7684\u8868\u73b0\u5c24\u5176\u5dee\u3002"),(0,i.kt)("h3",{id:"\u7b2c\u4e00\u6b21\u5c1d\u8bd5\u6807\u51c6\u63d0\u793a-1"},"\u7b2c\u4e00\u6b21\u5c1d\u8bd5\uff1a\u6807\u51c6\u63d0\u793a"),(0,i.kt)("p",null,"\u4f7f\u7528\u7b80\u5355\u7684\u6807\u51c6\u63d0\u793a\uff0ctext-davinci-003 \u7684\u8868\u73b0\u975e\u5e38\u51fa\u8272\uff0c\u4f46\u4ecd\u7136\u5931\u8d25\u4e86\u3002"),(0,i.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":'Q: turn left\\nA: TURN LEFT\\n\\nQ: turn right\\nA: TURN RIGHT\\n\\nQ: jump left\\nA: TURN LEFT + JUMP\\n\\nQ: run right\\nA: TURN RIGHT + RUN\\n\\nQ: look twice\\nA: LOOK * 2\\n\\nQ: run and look twice\\nA: RUN + LOOK * 2\\n\\nQ: jump right thrice\\nA: (TURN RIGHT + JUMP) * 3\\n\\nQ: walk after run\\nA: RUN + WALK\\n\\nQ: turn opposite left\\nA: TURN LEFT * 2\\n\\nQ: turn around left\\nA: TURN LEFT * 4\\n\\nQ: turn opposite right\\nA: TURN RIGHT * 2\\n\\nQ: turn around right\\nA: TURN RIGHT * 4\\n\\nQ: walk opposite left\\nA: TURN LEFT * 2 + WALK\\n\\nQ: walk around left\\nA: (TURN LEFT + WALK) * 4\\n\\nQ: "jump around left twice after walk opposite left thrice" \\nA:',"initial-response":"(TURN LEFT * 2 + WALK) * 3 + (TURN LEFT + JUMP) * 2","max-tokens":"512","box-rows":"18","model-temp":"0.2"}),(0,i.kt)("p",null,"\uff08\u8bd1\u6ce8\uff1a\u8be5\u793a\u4f8b\u5982\u679c\u7ffb\u8bd1\u6210\u4e2d\u6587\uff0c\u65e0\u6cd5\u590d\u73b0\u6548\u679c\uff0c\u56e0\u6b64\u4fdd\u6301\u539f\u6587\uff09"),(0,i.kt)("h3",{id:"\u7b2c\u4e8c\u6b21\u5c1d\u8bd5ltm\u7b2c\u4e00\u6b65---\u7f29\u51cf"},"\u7b2c\u4e8c\u6b21\u5c1d\u8bd5\uff1aLtM\uff0c\u7b2c\u4e00\u6b65 - \u7f29\u51cf"),(0,i.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u4f7f\u7528\u4e24\u4e2a\u4e0d\u540c\u7684\u63d0\u793a\u3002\u7b2c\u4e00\u4e2a\u63d0\u793a\u7528\u4e8e\u5c06\u8f93\u5165\u95ee\u9898\u7f29\u51cf\u4e3a\u4e00\u4e2a\u6b65\u9aa4\u5e8f\u5217\u3002\u7b2c\u4e8c\u4e2a\u63d0\u793a\u7528\u4e8e\u5c06\u8fd9\u4e2a\u7f29\u51cf\u540e\u7684\u6b65\u9aa4\u5e8f\u5217\u6620\u5c04\u5230\u5b9e\u9645\u7684\u64cd\u4f5c\u4e2d\u3002"),(0,i.kt)("p",null,"\u8fd9\u4e24\u4e2a\u63d0\u793a\u90fd\u76f8\u5f53\u957f\uff0c\u56e0\u800c\u4f7f\u7528\u538b\u7f29\u7684 Python \u7b26\u53f7\u8868\u793a\u64cd\u4f5c\uff0c\u4ee5\u8282\u7701\u6807\u8bb0\uff08tokens\uff09\u3002"),(0,i.kt)("p",null,"\u7b2c\u4e00\u6b65\u5c06\u81ea\u7136\u8bed\u8a00\u63cf\u8ff0\u5206\u89e3\u4e3a\u66f4\u660e\u786e\u4f46\u4ecd\u7c7b\u4f3c\u4eba\u7c7b\u7684\u8bed\u8a00\u3002\u8fd9\u5c06\u6709\u52a9\u4e8e\u6620\u5c04\u6b65\u9aa4\u6309\u987a\u5e8f\u89e3\u51b3\u95ee\u9898\u3002\n\u4f8b\u5982\uff0c\u201cjump around left twice\u201d \u88ab\u7b80\u5316\u4e3a \u201cjump left\u201d -> TURN_LEFT + JUMP \u548c \u201cjump around left\u201d -> (TURN_LEFT + JUMP) * 4\u3002\u540c\u6837\uff0c\u51cf\u5c11\u6b65\u9aa4\u662f\u7528\u6765\u89e3\u91ca\u91cd\u590d\u6982\u5ff5\uff08twice\u3001thrice \u7b49\uff09\u7684\u3002"),(0,i.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":'Q: look right after look twice\\nA: "look right after look twice" can be solved by: "look right", "look twice".\\n\\nQ: jump opposite right thrice and walk\\nA: "jump opposite right thrice" can be solved by: "jump opposite right", "jump opposite right thrice". "walk" can be solved by: "walk". So, "jump opposite right thrice and walk" can be solved by: "jump opposite right", "jump opposite right thrice", "walk".\\n\\nQ: run left twice and run right\\nA: "run left twice" can be solved by: "run left", "run left twice". "run right" can be solved by "run right". So, "run left twice and run right" can.be solved by: "run left", "run left twice", "run right".\\n\\nQ: run opposite right\\nA: "run opposite right" can be solved by "run opposite right".\\n\\nQ: look opposite right thrice after walk\\nA: "look opposite right thrice" can be solved by: "look opposite right", "look opposite right thrice". "walk" can be solved by "walk". So, "look opposite right thrice after walk" can be solved by: "look opposite right", "look opposite right thrice", "walk".\\n\\nQ: jump around right\\nA: "jump around right" can be solved by: "jump right", "jump around right". So, "jump around right" can be solved by: "jump right", "jump around right".\\n\\nQ: look around right thrice and walk\\nA: "look around right thrice" can be solved by: "look right", "look around right", "look around right thrice". "walk" can be solved by "walk". So, "look around right thrice and walk" can be solved by: "look right", "look around right", "look around right thrice", "walk".\\n\\nQ: turn right after run right thrice\\nA: "turn right" can be solved by: "turn right". "run right thrice" can be solved by: "run right", "run right thrice". So, "turn right after run right thrice" can be solved by: "turn right", "run right", "run right thrice".\\n\\nQ: jump around left twice after walk opposite left thrice\\nA:',"initial-response":'"jump around left twice" can be solved by: "jump left", "jump around left", "jump around left twice". "walk opposite left thrice" can be solved by: "walk opposite left", "walk opposite left thrice". So, "jump around left twice after walk opposite left thrice" can be solved by: "jump left", "jump around left", "jump around left twice", "walk opposite left", "walk opposite left thrice".',"max-tokens":"256","box-rows":"18","model-temp":"0.2"}),(0,i.kt)("h3",{id:"\u7b2c\u4e8c\u6b21\u5c1d\u8bd5ltm\u7b2c\u4e8c\u6b65---\u6620\u5c04"},"\u7b2c\u4e8c\u6b21\u5c1d\u8bd5\uff1aLtM\uff0c\u7b2c\u4e8c\u6b65 - \u6620\u5c04"),(0,i.kt)("p",null,"\u5728\u7b2c\u4e8c\u6b65\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u7f29\u51cf\u8fc7\u7684\u7ed3\u679c\uff0c\u5e76\u518d\u6b21\u4f7f\u7528\u76f8\u5f53\u957f\u7684\u63d0\u793a\uff0814\u4e2a\u6848\u4f8b\uff09\u5c06\u7b80\u5316\u7684\u81ea\u7136\u8bed\u8a00\u63cf\u8ff0\u8f6c\u6362\u4e3a\u4e00\u7cfb\u5217\u64cd\u4f5c\u3002"),(0,i.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u6ce8\u5165\u7b2c\u4e00\u6b65\u7684\u8f93\u51fa\uff1a"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'"jump around left twice" can be solved by: "jump left", "jump around left", "jump around left twice". "walk opposite left thrice" can be solved by: "walk opposite left", "walk opposite left thrice". So, "jump around left twice after walk opposite left thrice" can be solved by: "jump left", "jump around left", "jump around left twice", "walk opposite left", "walk opposite left thrice".')),(0,i.kt)("p",null,"\u5230 LLM \u4e2d\u3002"),(0,i.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":'Q: turn left\\nA: "turn left" outputs "TURN LEFT".\\n\\nQ: turn right\\nA: "turn right" outputs "TURN RIGHT".\\n\\nQ: jump left\\nA: The output of "jump left" concatenates: the output of "turn left", the output of "jump". "turn left" outputs "TURN LEFT". "jump" outputs "JUMP". So concatenating the output of "turn left" and the out- put of "jump" leads to "TURN LEFT" + "JUMP". So the output of "jump left" is "TURN LEFT" + "JUMP".\\n\\nQ: run right\\nA: The output of "run right" concatenates: the output of "turn right", the output of "run". "turn right" outputs "TURN RIGHT". "run" outputs "RUN". So concatenating the output of "turn right" and the output of "run" leads to "TURN RIGHT" + "RUN". So the output of "run right" is "TURN RIGHT" + "RUN".\\n\\nQ: look twice\\nA: The output of "look twice" concatenates: the output of "look", the output of "look". "look" outputs "LOOK". So repeating the output of "look" two times leads to "LOOK" * 2. So the output of "look twice" is "LOOK" * 2.\\n\\nQ: run and look twice\\nA: The output of "run and look twice" concatenates: the output of "run", the output of "look twice". "run" outputs "RUN". "look twice" outputs "LOOK" * 2. So concatenating the output of "run" and the output of "look twice" leads to "RUN" + "LOOK" * 2. So the output of "run and look twice" is "RUN" + "LOOK" * 2.\\n\\nQ: jump right thrice\\nA: The output of "jump right thrice" concatenates: the output of "jump right", the output of "jump right", the output of "jump right". "jump right" outputs "TURN RIGHT" + "JUMP". So repeating the output of "jump right" three times leads to ("TURN RIGHT" + "JUMP") * 3. So the output of "jump right thrice" is ("TURN RIGHT" + "JUMP") * 3.\\n\\nQ: walk after run\\nA: The output of "walk after run" concatenates: the output of "run", the output of "walk". "run" outputs "RUN". "walk" outputs "WALK". So concatenating the output of "run" and the output of "walk" leads to "RUN" + "WALK". So the output of "walk after run" is "RUN" + "WALK".\\n\\nQ: turn opposite left\\nA: The output of "turn opposite left" concatenates: the output of "turn left", the output of "turn left". "turn left" outputs "TURN LEFT". So repeating the output of "turn left" twice leads to "TURN LEFT" * 2. So the output of "turn opposite left" is "TURN LEFT" * 2.\\n\\nQ: turn around left\\nA: The output of "turn around left" concatenates: the output of "turn left", the output of "turn left", the output of "turn left", the output of "turn left". "turn left" outputs "TURN LEFT". So repeating the output of "turn left" four times leads to "TURN LEFT" * 4. So the output of "turn around left" is "TURN LEFT" * 4.\\n\\nQ: turn opposite right\\nA: The output of "turn opposite right" concatenates: the output of "turn right", the output of "turn right". "turn right" outputs "TURN RIGHT". So repeating the output of "turn right" twice leads to "TURN RIGHT" * 2. So the output of "turn opposite right" is "TURN RIGHT" * 2.\\n\\nQ: turn around right\\nA: The output of "turn around right" concatenates: the output of "turn right", the output of "turn right", the output of "turn right", the output of "turn right". "turn right" outputs "TURN RIGHT". So repeating the output of "turn right" four times leads to "TURN RIGHT" * 4. So the output of "turn around right" is "TURN RIGHT" * 4.\\n\\nQ: walk opposite left\\nA: The output of "walk opposite left" concatenates: the output of "turn opposite left", the output of "walk". "turn opposite left" outputs "TURN LEFT" * 2. "walk" outputs "WALK". So concatenating the output of "turn opposite left" and the output of "walk" leads to "TURN LEFT" * 2 + "WALK". So the output of "walk opposite left" is "TURN LEFT" * 2 + "WALK".\\n\\nQ: walk around left\\nA: The output of "walk around left" concatenates: the output of "walk left", the output of "walk left", the output of "walk left", the output of "walk left". "walk left" outputs "TURN LEFT" + "WALK". So repeating the output of "walk around left" four times leads to ("TURN LEFT" + "WALK") * 4. So the output of "walk around left" is ("TURN LEFT" + "WALK") * 4.\\n\\nQ: "jump around left twice after walk opposite left thrice" \\nA:',"initial-response":'The output of "jump around left twice after walk opposite left thrice" concatenates: the output of "walk opposite left thrice", the output of "jump around left twice". "walk opposite left thrice" outputs "TURN LEFT" * 2 + "WALK" * 3. "jump around left twice" outputs ("TURN LEFT" + "JUMP") * 4. So concatenating the output of "walk opposite left thrice" and the output of "jump around left twice" leads to "TURN LEFT" * 2 + "WALK" * 3 + ("TURN LEFT" + "JUMP") * 4. So the output of "jump around left twice after walk opposite left thrice" is "TURN LEFT" * 2 + "WALK" * 3 + ("TURN LEFT" + "JUMP") * 4.',"max-tokens":"1024","box-rows":"18","model-temp":"0.2"}),(0,i.kt)("h3",{id:"\u7ed3\u8bba-1"},"\u7ed3\u8bba"),(0,i.kt)("p",null,"LtM \u5e26\u6765\u4e86\u591a\u9879\u63d0\u5347\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u76f8\u5bf9\u4e8e\u601d\u7ef4\u94fe\u63d0\u9ad8\u4e86\u51c6\u786e\u6027"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u96be\u5ea6\u9ad8\u4e8e\u63d0\u793a\u7684\u95ee\u9898\u4e0a\u63d0\u5347\u4e86\u6cdb\u5316\u80fd\u529b"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u7ec4\u5408\u6cdb\u5316\u65b9\u9762\u7684\u6027\u80fd\u5f97\u5230\u4e86\u663e\u8457\u63d0\u9ad8\uff0c\u7279\u522b\u662f\u5728SCAN\u57fa\u51c6\u6d4b\u8bd5",(0,i.kt)("sup",{parentName:"li",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),"\u4e2d")),(0,i.kt)("p",null,"\u4f7f\u7528 text-davinci-002\uff08\u8bba\u6587\u4e2d\u4f7f\u7528\u7684\u6a21\u578b\uff09\u7684\u6807\u51c6\u63d0\u793a\u89e3\u51b3\u4e86 6% \u7684 SCAN \u95ee\u9898\uff0c\u800c LtM \u63d0\u793a\u5219\u53d6\u5f97\u4e86\u60ca\u4eba\u7684 76% \u7684\u6210\u529f\u7387\u3002\u5728 code-davinci-002 \u4e2d\uff0c\u7ed3\u679c\u66f4\u4e3a\u663e\u8457\uff0cLtM \u8fbe\u5230\u4e86 99.7% \u7684\u6210\u529f\u7387\u3002"),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Zhou, D., Sch\xe4rli, N., Hou, L., Wei, J., Scales, N., Wang, X., Schuurmans, D., Cui, C., Bousquet, O., Le, Q., & Chi, E. (2022). Least-to-Most Prompting Enables Complex Reasoning in Large Language Models.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain of Thought Prompting Elicits Reasoning in Large Language Models.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-3"},"Lake, B. M., & Baroni, M. (2018). Generalization without Systematicity: On the Compositional Skills of Sequence-to-Sequence Recurrent Networks. https://doi.org/10.48550/arXiv.1711.00350\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}k.isMDXComponent=!0}}]);