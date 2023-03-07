"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[6056],{10180:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>k,frontMatter:()=>p,metadata:()=>h,toc:()=>c});var o=a(87462),n=(a(67294),a(3905));const i=a.p+"assets/images/knowledge_generation-ad0b3ce05cb7d9da5a615285f0bfa5ab.png",r=a.p+"assets/images/gen_k_p1-13cb7c5d4bcd11edceda40a150b4f2cd.png",s=a.p+"assets/images/recitation-44850021739151c272aeb2eb07551a82.png";var l=a(39145);const p={sidebar_position:7},d="\ud83d\udfe1 Generated Knowledge",h={unversionedId:"intermediate/generated_knowledge",id:"intermediate/generated_knowledge",title:"\ud83d\udfe1 Generated Knowledge",description:"The idea behind the generated knowledge approach(@liu2021generated) is to ask the %%LLM|LLM%% to generate potentially useful information about a given question/prompt before generating a final response.",source:"@site/docs/intermediate/generated_knowledge.md",sourceDirName:"intermediate",slug:"/intermediate/generated_knowledge",permalink:"/ko/docs/intermediate/generated_knowledge",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/intermediate/generated_knowledge.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe1 Self-Consistency",permalink:"/ko/docs/intermediate/self_consistency"},next:{title:"\ud83d\udfe1 Least to Most Prompting",permalink:"/ko/docs/intermediate/least_to_most"}},m={},c=[{value:"Single prompt approach",id:"single-prompt-approach",level:2},{value:"Dual prompt approach",id:"dual-prompt-approach",level:2},{value:"Another use case",id:"another-use-case",level:2},{value:"A more technical discussion",id:"a-more-technical-discussion",level:2},{value:"Knowledge Generation",id:"knowledge-generation",level:3},{value:"Knowledge Integration",id:"knowledge-integration",level:3},{value:"Recitation-Augmented Language Models",id:"recitation-augmented-language-models",level:2},{value:"Notes",id:"notes",level:2}],g={toc:c},u="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,o.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-generated-knowledge"},"\ud83d\udfe1 Generated Knowledge"),(0,n.kt)("p",null,"The idea behind the generated knowledge approach",(0,n.kt)("sup",{parentName:"p",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," is to ask the ",(0,n.kt)("a",{parentName:"p",id:"LLM_2_15_1678150987148","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,n.kt)(l.u,{anchorId:"LLM_2_15_1678150987148",clickable:!0,mdxType:"Tooltip"})," to generate potentially useful information about a given question/prompt before generating a final response."),(0,n.kt)("p",null,"For example, say you want to write a small blog post about some animal, like ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Kermode_bear"},"Spirit bears"),". Before asking the ",(0,n.kt)("a",{parentName:"p",id:"LLM_2_20_1678150987148","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,n.kt)(l.u,{anchorId:"LLM_2_20_1678150987148",clickable:!0,mdxType:"Tooltip"})," to write the blog post, you can ask it to generate some facts about Spirit bears. This will help the LLM write a more informative blog post. There are two simple ways of going about this."),(0,n.kt)("h2",{id:"single-prompt-approach"},"Single prompt approach"),(0,n.kt)("p",null,"The first approach asks the LLM to generate knowledge then write the post, all with a single prompt."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"Generate 4 facts about the Kermode bear, then use these facts to write a short blog post using the information:\n// highlight-start\nThe Kermode bear, also known as the spirit bear, is a rare subspecies of the American black bear that is found in the coastal regions of British Columbia, Canada. \n\n1. The Kermode bear is a unique subspecies of the American black bear, with approximately 10% of the population having white fur. \n\n2. The Kermode bear is a symbol of the First Nations people of British Columbia, and is seen as a spirit animal. \n\n3. The Kermode bear is an important part of the ecosystem, helping to disperse seeds and maintain the balance of the forest. \n\n4. The Kermode bear is a protected species, and its population is monitored closely by the provincial government.\n\nThe Kermode bear is a unique and special animal that is found in the coastal regions of British Columbia, Canada. Approximately 10% of the population of this subspecies of the American black bear have white fur, making them a rare sight. The Kermode bear is a symbol of the First Nations people of British Columbia, and is seen as a spirit animal. It is an important part of the ecosystem, helping to disperse seeds and maintain the balance of the forest. The Kermode bear is a protected species, and its population is monitored closely by the provincial government. It is a beautiful and majestic animal, and it is important that we do our part to protect and conserve this species.\n// highlight-end\n")),(0,n.kt)("h2",{id:"dual-prompt-approach"},"Dual prompt approach"),(0,n.kt)("p",null,"In this approach, we first prompt the ",(0,n.kt)("a",{parentName:"p",id:"LLM_0_38_1678150987148","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,n.kt)(l.u,{anchorId:"LLM_0_38_1678150987148",clickable:!0,mdxType:"Tooltip"})," to generate facts about the bear:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"Generate 10 facts about the Kermode bear:\n// highlight-start\n1. The Kermode bear, also known as the Spirit Bear, is a rare subspecies of the American black bear found in British Columbia, Canada.\n\n2. The Kermode bear has a unique white or cream-colored coat, which is caused by a recessive gene.\n\n3. The Kermode bear is a symbol of hope and renewal for the First Nations people of British Columbia.\n\n4. The Kermode bear is a protected species and is listed as a species of special concern by the Committee on the Status of Endangered Wildlife in Canada.\n// highlight-end\n")),(0,n.kt)("p",null,"Then, we feed that information into another prompt to write the blog post:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"1. The Kermode bear, also known as the Spirit Bear, is a rare subspecies of the American black bear found in British Columbia, Canada.\n\n2. The Kermode bear has a unique white or cream-colored coat, which is caused by a recessive gene.\n\n3. The Kermode bear is a symbol of hope and renewal for the First Nations people of British Columbia.\n\n4. The Kermode bear is a protected species and is listed as a species of special concern by the Committee on the Status of Endangered Wildlife in Canada.\n\nUse the above facts to write a one paragraph blog post about the Kermode bear:\n\n// highlight-start\n\nThe Kermode bear, also known as the Spirit Bear, is a rare subspecies of the American black bear found in British Columbia, Canada. This unique bear has a white or cream-colored coat, caused by a recessive gene, and is a symbol of hope and renewal for the First Nations people of British Columbia. The Kermode bear is a protected species and is listed as a species of special concern by the Committee on the Status of Endangered Wildlife in Canada, making it an important part of the region's biodiversity.\n\n// highlight-end\n")),(0,n.kt)("p",null,"I recommend this second approach since it can produce longer content more reliably."),(0,n.kt)("h2",{id:"another-use-case"},"Another use case"),(0,n.kt)("p",null,"The generated knowledge approach was actually introduced for a completely different task, that of answering difficult questions. Consider the following question, which GPT-3 answers incorrectly: "),(0,n.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"Which country is larger, Congo or South Africa?","initial-response":"South Africa is larger than Congo.","max-tokens":"256","box-rows":"3","model-temp":"0","top-p":"0"},(0,n.kt)("noscript",null,"Failed to load Dyno Embed: JavaScript must be enabled")),(0,n.kt)("br",null),(0,n.kt)("p",null,"If we first ask the ",(0,n.kt)("a",{parentName:"p",id:"LLM_0_20_1678150987148","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,n.kt)(l.u,{anchorId:"LLM_0_20_1678150987148",clickable:!0,mdxType:"Tooltip"})," to generate facts about Congo and South Africa, we can then use that information to answer the question correctly. In theory, this is similar to ",(0,n.kt)("a",{parentName:"p",id:"CoT prompting_3_146_1678150987148","data-tooltip-html":"The main idea of CoT is that by showing the LLM some few shot exemplars where the reasoning process is explained in the exemplars, the LLM will also show the reasoning process when answering the prompt.","data-tooltip-place":"top"},"CoT"),(0,n.kt)(l.u,{anchorId:"CoT prompting_3_146_1678150987148",clickable:!0,mdxType:"Tooltip"}),", since we are effectively getting the LLM to generate intermediate reasoning in the form of related facts."),(0,n.kt)("p",null,"Let's start with the first step, ",(0,n.kt)("em",{parentName:"p"},"knowledge generation"),". We can ask the ",(0,n.kt)("a",{parentName:"p",id:"LLM_2_17_1678150987148","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,n.kt)(l.u,{anchorId:"LLM_2_17_1678150987148",clickable:!0,mdxType:"Tooltip"})," to generate facts about Congo and South Africa:"),(0,n.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"Generate some knowledge about the sizes of South Africa and Congo:","initial-response":"South Africa is the 25th largest country in the world, with an area of 1,221,037 square kilometers (471,445 square miles). Congo, on the other hand, is the 11th largest country in the world, with an area of 2,344,858 square kilometers (905,567 square miles). South Africa is almost half the size of Congo, with a population of 57.7 million compared to Congo's population of 84.3 million. South Africa is the most populous country in the region, while Congo is the second most populous.","max-tokens":"256","box-rows":"6","model-temp":"0","top-p":"0"},(0,n.kt)("noscript",null,"Failed to load Dyno Embed: JavaScript must be enabled")),(0,n.kt)("br",null),(0,n.kt)("p",null,"Next, let's use that knowledge to answer the question correctly. This is the ",(0,n.kt)("em",{parentName:"p"},"knowledge integration")," step!"),(0,n.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"South Africa is the 25th largest country in the world, with an area of 1,221,037 square kilometers (471,445 square miles). Congo, on the other hand, is the 11th largest country in the world, with an area of 2,344,858 square kilometers (905,567 square miles). South Africa is almost half the size of Congo, with a population of 57.7 million compared to Congo's population of 84.3 million. South Africa is the most populous country in the region, while Congo is the second most populous.\\n\\nWhich country is larger, Congo or South Africa?","initial-response":"Congo is larger than South Africa.","max-tokens":"256","box-rows":"15","model-temp":"0","top-p":"0"},(0,n.kt)("noscript",null,"Failed to load Dyno Embed: JavaScript must be enabled")),(0,n.kt)("h2",{id:"a-more-technical-discussion"},"A more technical discussion"),(0,n.kt)("p",null,"Although the above use case was similar to the way generated knowledge was originally introduced, it is not exactly the same. The below content covers the more technical context in which the approach was introduced. It follows the two intermediate steps (knowledge generation and knowledge integration) pattern that we saw above."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:i,style:{width:"750px"}})),(0,n.kt)("div",{style:{textAlign:"center"}},"Generated Knowledge (Liu et al.)"),(0,n.kt)("h3",{id:"knowledge-generation"},"Knowledge Generation"),(0,n.kt)("p",null,"In the knowledge generation step, the ",(0,n.kt)("a",{parentName:"p",id:"LLM_0_38_1678150987148","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,n.kt)(l.u,{anchorId:"LLM_0_38_1678150987148",clickable:!0,mdxType:"Tooltip"})," is asked to generate a set of facts\nabout the ",(0,n.kt)("strong",{parentName:"p"},"question"),". The LLM is prompted in few-shot fashion as seen below.\nM different completions are generated using this same prompt (similar to the self-consistency approach)."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:r,style:{width:"500px"}})),(0,n.kt)("div",{style:{textAlign:"center"}},"Generated Knowledge Example (Liu et al.)"),(0,n.kt)("h3",{id:"knowledge-integration"},"Knowledge Integration"),(0,n.kt)("p",null,'Next, we generate "knowledge augmented" questions and prompt the ',(0,n.kt)("a",{parentName:"p",id:"LLM_0_65_1678150987148","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,n.kt)(l.u,{anchorId:"LLM_0_65_1678150987148",clickable:!0,mdxType:"Tooltip"})," with them\nto get final answers. The easiest way to understand this is to go through an example."),(0,n.kt)("p",null,"Let's assume we are attempting to answer the ",(0,n.kt)("strong",{parentName:"p"},"question"),'\n"Most Kangaroos have <mask',">",' limbs". Assume that at the knowledge generation step\nwe generated 2 knowledges (M=2):'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Knowledge 1: ",(0,n.kt)("inlineCode",{parentName:"p"},"Kangaroos are marsupials that live in Australia."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Knowledge 2: ",(0,n.kt)("inlineCode",{parentName:"p"},"Kangaroos are marsupials that have 5 limbs.")))),(0,n.kt)("p",null,"Now, we concatenate each knowledge with the question to generate knowledge augmented questions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Knowledge Augmented Question 1: ",(0,n.kt)("inlineCode",{parentName:"p"},"Most Kangaroos have <mask\\> limbs. Kangaroos are marsupials that live in Australia."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Knowledge Augmented Question 2: ",(0,n.kt)("inlineCode",{parentName:"p"},"Most Kangaroos have <mask\\> limbs. Kangaroos are marsupials that have 5 limbs.")))),(0,n.kt)("p",null,"We then prompt the LLM with these knowledge augmented questions and get the final answer proposals:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Answer 1: ",(0,n.kt)("inlineCode",{parentName:"p"},"4"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Answer 2: ",(0,n.kt)("inlineCode",{parentName:"p"},"5")))),(0,n.kt)("p",null,"We select the answer with the highest probability as the final answer. The\nhighest probability could be the softmax probability of the answer token, or the\nlog probability of the answer token(s)."),(0,n.kt)("h2",{id:"recitation-augmented-language-models"},"Recitation-Augmented Language Models"),(0,n.kt)("p",null,"The recitation-augmented",(0,n.kt)("sup",{parentName:"p",id:"fnref-2"},(0,n.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," approach it is similar to generated knowledge (basically the same). However, is much less complex than the formal implementation of generated knowledge."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:s,style:{width:"250px"}})),(0,n.kt)("p",null,"The idea here is to few shot prompt the LLM to generate information ",(0,n.kt)("em",{parentName:"p"},"and")," answer in the ",(0,n.kt)("em",{parentName:"p"},"same")," step. The fact that it is reciting/generating knowledge and answering the question in the same step is the main difference from the generated knowledge approach."),(0,n.kt)("p",null,"To reiterate, this approach prompts the model with multiple (question, recitation, answer) exemplars, then asks the question. The authors note that this approach can be combined with self consistency or multiple completion paths."),(0,n.kt)("h2",{id:"notes"},"Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Generated knowledge shows improvements on various commonsense datasets.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The knowledge corresponding to the selected answer is called the ",(0,n.kt)("em",{parentName:"p"},"selected knowledge"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In practice, you could take the most frequently occurring answer as the final one."))),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1"},"Liu, J., Liu, A., Lu, X., Welleck, S., West, P., Bras, R. L., Choi, Y., & Hajishirzi, H. (2021). Generated Knowledge Prompting for Commonsense Reasoning.\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-2"},"Sun, Z., Wang, X., Tay, Y., Yang, Y., & Zhou, D. (2022). Recitation-Augmented Language Models.\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}k.isMDXComponent=!0}}]);