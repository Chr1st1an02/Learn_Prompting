"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[7522],{8842:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>d,default:()=>b,frontMatter:()=>r,metadata:()=>c,toc:()=>n});var o=t(7462),i=(t(7294),t(3905));const l=t.p+"assets/images/math-79b401d521d572664f685639576a3aec.webp";var s=t(9145);const r={sidebar_position:70},d="\ud83d\udfe1 Matem\xe1tica",c={unversionedId:"reliability/math",id:"reliability/math",title:"\ud83d\udfe1 Matem\xe1tica",description:"Durante este curso, vimos muitos m\xe9todos de prompt diferentes que podem ser usados \u200b\u200bpara melhorar a habilidade matem\xe1tica de um %%LLM|LLM%%. Uma abordagem recente, MathPrompter(@imani2023mathprompter), une alguns desses m\xe9todos: (%%Cadeia de Pensamento|CoT prompting%%, %%PAL|PAL%%, etc.) em uma \xfanica t\xe9cnica. A ideia principal \xe9 dividir uma quest\xe3o matem\xe1tica em termos alg\xe9bricos e, em seguida, usar c\xf3digo Python para resolv\xea-la de maneiras diferentes.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/reliability/math.md",sourceDirName:"reliability",slug:"/reliability/math",permalink:"/pt/docs/reliability/math",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/reliability/math.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd34 Calibrandos LLMs",permalink:"/pt/docs/reliability/calibration"},next:{title:"\ud83d\uddbc\ufe0f Image Prompting",permalink:"/pt/docs/category/\ufe0f-image-prompting"}},m={},n=[{value:"Passo 1: Gerar o modelo alg\xe9brico",id:"passo-1-gerar-o-modelo-alg\xe9brico",level:2},{value:"Passo 2: Prompts Matem\xe1ticos",id:"passo-2-prompts-matem\xe1ticos",level:2},{value:"2a: Declara\xe7\xe3o Alg\xe9brica",id:"2a-declara\xe7\xe3o-alg\xe9brica",level:3},{value:"2b: C\xf3digo em Python",id:"2b-c\xf3digo-em-python",level:3},{value:"Gera\xe7\xe3o de Respostas",id:"gera\xe7\xe3o-de-respostas",level:3},{value:"Passo 4: Auto-Consist\xeancia",id:"passo-4-auto-consist\xeancia",level:2},{value:"Conclus\xe3o",id:"conclus\xe3o",level:2}],p={toc:n},g="wrapper";function b(e){let{components:a,...t}=e;return(0,i.kt)(g,(0,o.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-matem\xe1tica"},"\ud83d\udfe1 Matem\xe1tica"),(0,i.kt)("p",null,"Durante este curso, vimos muitos m\xe9todos de prompt diferentes que podem ser usados \u200b\u200bpara melhorar a habilidade matem\xe1tica de um ",(0,i.kt)("a",{parentName:"p",id:"LLM_0_129_1689879420237","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,i.kt)(s.u,{anchorId:"LLM_0_129_1689879420237",clickable:!0,mdxType:"Tooltip"}),". Uma abordagem recente, MathPrompter",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", une alguns desses m\xe9todos: (",(0,i.kt)("a",{parentName:"p",id:"CoT prompting_5_30_1689879420237","data-tooltip-html":"The main idea of CoT is that by showing the LLM some few shot exemplars where the reasoning process is explained in the exemplars, the LLM will also show the reasoning process when answering the prompt.","data-tooltip-place":"top"},"Cadeia de Pensamento"),(0,i.kt)(s.u,{anchorId:"CoT prompting_5_30_1689879420237",clickable:!0,mdxType:"Tooltip"}),", ",(0,i.kt)("a",{parentName:"p",id:"PAL_8_2_1689879420237","data-tooltip-html":"A method that uses code as intermediate reasoning<br>see <a href='https://learnprompting.org/docs/advanced_applications/pal'>PAL</a>","data-tooltip-place":"top"},"PAL"),(0,i.kt)(s.u,{anchorId:"PAL_8_2_1689879420237",clickable:!0,mdxType:"Tooltip"}),", etc.) em uma \xfanica t\xe9cnica. A ideia principal \xe9 dividir uma quest\xe3o matem\xe1tica em termos alg\xe9bricos e, em seguida, usar c\xf3digo Python para resolv\xea-la de maneiras diferentes."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:l,style:{width:"500px"}})),(0,i.kt)("p",null,"O MathPrompter possui ",(0,i.kt)("strong",{parentName:"p"},"quatro")," etapas. Explicaremos as etapas usando o seguinte exemplo. O exemplo \xe9 retirado diretamente do artigo."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"P: Em um restaurante, cada refei\xe7\xe3o para adultos custa R$5 e as crian\xe7as comem de gra\xe7a. Se um grupo de 15\npessoas entrasse e 8 fossem crian\xe7as, quanto isso custaria para o grupo comer?\n")),(0,i.kt)("h2",{id:"passo-1-gerar-o-modelo-alg\xe9brico"},"Passo 1: Gerar o modelo alg\xe9brico"),(0,i.kt)("p",null,"A primeira etapa \xe9 atribuir uma vari\xe1vel a cada n\xfamero na pergunta. Isso ajuda porque permite uma tradu\xe7\xe3o mais f\xe1cil da pergunta para uma quest\xe3o matem\xe1tica abstrata, bem como para o c\xf3digo de programa\xe7\xe3o."),(0,i.kt)("p",null,"Isso pode ser feito por meio de poucos prompts com exemplo:"),(0,i.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Ik1BOiBFbSB1bSByZXN0YXVyYW50ZSwgY2FkYSByZWZlaefjbyBwYXJhIGFkdWx0b3MgY3VzdGEgJEEgZSBhcyBjcmlhbudhcyBjb21lbSBkZSBncmHnYS4gU2UgdW0gZ3J1cG8gZGUgQiBwZXNzb2FzIGVudHJhciBlIEMgZm9yZW0gY3JpYW7nYXMsIHF1YW50byBpc3NvIGN1c3RhcmlhIHBhcmEgbyBncnVwbyBjb21lcj9NQVBFQU1FTlRPOiB7QTogNSwgQjogMTUsIEM6IDh9IiwicHJvbXB0IjoiUDogVW0gem9vbPNnaWNvIGNvYnJhIFIkMTIgcG9yIGluZ3Jlc3NvIHBhcmEgYWR1bHRvcyBlIHBlcm1pdGUgcXVlIGFzIGNyaWFu52FzIGNvbSBtZW5vcyBkZSA1IGFub3MgZW50cmVtIGRlIGdyYedhLiBVbWEgZmFt7WxpYSBkZSA0IGFkdWx0b3MgZSAyIGNyaWFu52FzIGNvbSBtZW5vcyBkZSA1IGFub3MgdmlzaXRhbSBvIHpvb2zzZ2ljby4gUXVhbCDpIG8gY3VzdG8gdG90YWwgcGFyYSBhIGZhbe1saWEgZW50cmFyP1xuTUE6IEVtIHVtIHpvb2zzZ2ljbywgY2FkYSBpbmdyZXNzbyBwYXJhIGFkdWx0b3MgY3VzdGEgJEEgZSBhcyBjcmlhbudhcyBjb20gbWVub3MgZGUgNSBhbm9zIHBvZGVtIGVudHJhciBkZSBncmHnYS4gU2UgdW1hIGZhbe1saWEgZGUgQiBhZHVsdG9zIGUgQyBjcmlhbudhcyBjb20gbWVub3MgZGUgNSBhbm9zIHZpc2l0YXIgbyB6b29s82dpY28sIHF1YWwg6SBvIGN1c3RvIHRvdGFsIHBhcmEgYSBmYW3tbGlhIGVudHJhcj9cbk1BUEVBTUVOVE86IHtBOiAxMiwgQjogNCwgQzogMn1cblxuUDogVW1hIGxvamEgdmVuZGUgc2FwYXRvcyBhICQ2MCBwb3IgcGFyIGUgbWVpYXMgYSAkOCBwb3IgcGFyLiBTZSB1bSBjbGllbnRlIGNvbXByYXIgMiBwYXJlcyBkZSBzYXBhdG9zIGUgMyBwYXJlcyBkZSBtZWlhcywgcXVhbCDpIG8gY3VzdG8gdG90YWwgZGEgY29tcHJhP1xuTUE6IEVtIHVtYSBsb2phLCBvcyBzYXBhdG9zIGN1c3RhbSAkQSBwb3IgcGFyIGUgYXMgbWVpYXMgY3VzdGFtICRCIHBvciBwYXIuIFNlIHVtIGNsaWVudGUgY29tcHJhciBDIHBhcmVzIGRlIHNhcGF0b3MgZSBEIHBhcmVzIGRlIG1laWFzLCBxdWFsIOkgbyBjdXN0byB0b3RhbCBkYSBjb21wcmE%2FXG5NQVBFQU1FTlRPOiB7QTogNjAsIEI6IDgsIEM6IDIsIEQ6IDN9XG5cblA6IEVtIHVtIHJlc3RhdXJhbnRlLCBjYWRhIHJlZmVp5%2BNvIHBhcmEgYWR1bHRvcyBjdXN0YSAkNSBlIGFzIGNyaWFu52FzIGNvbWVtIGRlIGdyYedhLiBTZSB1bSBncnVwbyBkZSAxNSBwZXNzb2FzIGVudHJhc3NlIGUgOCBmb3NzZW0gY3JpYW7nYXMsIHF1YW50byBpc3NvIGN1c3RhcmlhIHBhcmEgbyBncnVwbyBjb21lcj8iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,i.kt)("h2",{id:"passo-2-prompts-matem\xe1ticos"},"Passo 2: Prompts Matem\xe1ticos"),(0,i.kt)("p",null,"O objetivo deste passo \xe9 formular o problema como uma declara\xe7\xe3o alg\xe9brica e como c\xf3digo Python. Este passo tem dois prompts simult\xe2neos, que ajudam a dar representa\xe7\xf5es diversas do problema."),(0,i.kt)("h3",{id:"2a-declara\xe7\xe3o-alg\xe9brica"},"2a: Declara\xe7\xe3o Alg\xe9brica"),(0,i.kt)("p",null,'Podemos fazer o prompt de poucas amostras (few-shot) para que o LLM represente o problema matem\xe1tico como uma declara\xe7\xe3o alg\xe9brica. Isso \xe9 feito pedindo ao LLM para gerar o formato da resposta, come\xe7ando com "Resposta =".'),(0,i.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlJlc3Bvc3RhID0gQSAqIEIgLSBBICogQyIsInByb21wdCI6IlA6IEVtIHVtIHpvb2zzZ2ljbywgY2FkYSBpbmdyZXNzbyBkZSBhZHVsdG8gY3VzdGEgJCBBIGUgY3JpYW7nYXMgbWVub3JlcyBkZSA1IGFub3MgcG9kZW0gZW50cmFyIGRlIGdyYedhLiBTZSB1bWEgZmFt7WxpYSBkZSBCIGFkdWx0b3MgZSBDIGNyaWFu52FzIG1lbm9yZXMgZGUgNSBhbm9zIHZpc2l0YXIgbyB6b29s82dpY28sIHF1YWwg6SBvIGN1c3RvIHRvdGFsIHBhcmEgYSBmYW3tbGlhIGVudHJhcj9cbk1hcGVhbWVudG86IHtBOiAxMiwgQjogNCwgQzogMn1cblxuRXNjcmV2YSB1bWEgZXF1YefjbyBtYXRlbeF0aWNhIGUgZ2VyZSBvIGZvcm1hdG8gZGUgcmVzcG9zdGEgY29tZedhbmRvIGNvbSAnUmVzcG9zdGEgPSdcblJlc3Bvc3RhID0gQSAqIEJcblxuUDogRW0gdW1hIGxvamEsIG9zIHNhcGF0b3MgY3VzdGFtICQgQSBwb3IgcGFyIGUgYXMgbWVpYXMgY3VzdGFtICQgQiBwb3IgcGFyLiBTZSB1bSBjbGllbnRlIGNvbXByYSBDIHBhcmVzIGRlIHNhcGF0b3MgZSBEIHBhcmVzIGRlIG1laWFzLCBxdWFsIOkgbyBjdXN0byB0b3RhbCBkYSBjb21wcmE%2FTWFwZWFtZW50bzoge0E6IDYwLCBCOiA4LCBDOiAyLCBEOiAzfVxuXG5Fc2NyZXZhIHVtYSBlcXVh5%2BNvIG1hdGVt4XRpY2EgZSBnZXJlIG8gZm9ybWF0byBkZSByZXNwb3N0YVxuY29tZedhbmRvIGNvbSAnUmVzcG9zdGEgPSdcblxuUmVzcG9zdGEgPSBBICogQyArIEIgKiBEXG5cblA6IEVtIHVtIHJlc3RhdXJhbnRlLCBjYWRhIHJlZmVp5%2BNvIHBhcmEgYWR1bHRvIGN1c3RhICQgQSBlIGFzIGNyaWFu52FzIGNvbWVtIGRlIGdyYedhLiBTZSB1bSBncnVwbyBkZSBCIHBlc3NvYXMgZW50cm91IGUgQyBlcmFtIGNyaWFu52FzLCBxdWFudG8gY3VzdGFyaWEgcGFyYSBvIGdydXBvIGNvbWVyP1xuTWFwZWFtZW50bzoge0E6IDUsIEI6IDE1LCBDOiA4fVxuXG5Fc2NyZXZhIHVtYSBlcXVh5%2BNvIG1hdGVt4XRpY2EgZSBnZXJlIG8gZm9ybWF0byBkZSByZXNwb3N0YSBjb21l52FuZG8gY29tICdSZXNwb3N0YSA9JyIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,i.kt)("h3",{id:"2b-c\xf3digo-em-python"},"2b: C\xf3digo em Python"),(0,i.kt)("p",null,"Tamb\xe9m podemos pedir ao ",(0,i.kt)("a",{parentName:"p",id:"LLM_0_24_1689879420237","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,i.kt)(s.u,{anchorId:"LLM_0_24_1689879420237",clickable:!0,mdxType:"Tooltip"})," que gere c\xf3digo Python que resolva o problema. Isso \xe9 feito pedindo ao LLM para gerar uma fun\xe7\xe3o Python."),(0,i.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6ImRlZiBjdXN0b19yZXN0YXVyYW50ZShBLCBCLCBDKTpcbiAgcmV0dXJuIEEgKiAoQiAtIEMpIiwicHJvbXB0IjoiUXQ6IEVtIHVtIHpvb2zzZ2ljbywgY2FkYSBpbmdyZXNzbyBhZHVsdG8gY3VzdGEgJCBBIGUgY3JpYW7nYXMgbWVub3JlcyBkZSA1IGFub3MgcG9kZW0gZW50cmFyIGRlIGdyYedhLiBTZSB1bWEgZmFt7WxpYSBkZSBCIGFkdWx0b3MgZSBDIGNyaWFu52FzIG1lbm9yZXMgZGUgNSBhbm9zIHZpc2l0YXIgbyB6b29s82dpY28sIHF1YWwg6SBvIGN1c3RvIHRvdGFsIHBhcmEgYSBmYW3tbGlhIGVudHJhcj9cblxuTWFwZWFtZW50bzoge0E6IDEyLCBCOiA0LCBDOiAyfVxuXG5Fc2NyZXZhIHVtYSBmdW7n428gUHl0aG9uIHF1ZSByZXRvcm5lIGEgcmVzcG9zdGEuXG5cbmRlZiBjdXN0b196b28oQSwgQiwgQyk6XG4gIHJldHVybiBBICogQlxuXG5cblF0OiBFbSB1bWEgbG9qYSwgc2FwYXRvcyBjdXN0YW0gJCBBIHBvciBwYXIgZSBtZWlhcyBjdXN0YW0gJCBCIHBvciBwYXIuIFNlIHVtIGNsaWVudGUgY29tcHJhciBDIHBhcmVzIGRlIHNhcGF0b3MgZSBEIHBhcmVzIGRlIG1laWFzLCBxdWFsIOkgbyBjdXN0byB0b3RhbCBkYSBjb21wcmE%2FXG5cbkVzY3JldmEgdW1hIGZ1bufjbyBQeXRob24gcXVlIHJldG9ybmUgYSByZXNwb3N0YS5cblxuZGVmIGN1c3RvX2xvamEoQSwgQiwgQywgRCk6XG4gIHJldHVybiAoQSAqIEMpICsgKEIgKiBEKVxuXG5cblF0OiBFbSB1bSByZXN0YXVyYW50ZSwgY2FkYSByZWZlaefjbyBhZHVsdGEgY3VzdGEgJCBBIGUgY3JpYW7nYXMgY29tZW0gZGUgZ3Jh52EuIFNlIHVtIGdydXBvIGRlIEIgcGVzc29hcyBlbnRyb3UgZSBDIGVyYW0gY3JpYW7nYXMsIHF1YW50byBjdXN0YXJpYSBwYXJhIG8gZ3J1cG8gY29tZXI%2FXG5cbkVzY3JldmEgdW1hIGZ1bufjbyBQeXRob24gcXVlIHJldG9ybmUgYSByZXNwb3N0YS4iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,i.kt)("h3",{id:"gera\xe7\xe3o-de-respostas"},"Gera\xe7\xe3o de Respostas"),(0,i.kt)("p",null,"Agora, podemos usar o Mapeamento que geramos anteriormente para preencher automaticamente as vari\xe1veis."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Mapeamento: {A: 5, B: 15, C: 8}\n")),(0,i.kt)("p",null,"Alg\xe9brico: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Answer = 5 * 15 - 5 * 8\n")),(0,i.kt)("p",null,"C\xf3digo em Python:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def custo_restaurante(A=5, B=15, C=8):\n  return A * (B - C)\n")),(0,i.kt)("p",null,"Podemos avaliar ambos usando Python."),(0,i.kt)("p",null,"Alg\xe9brico:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'>>> eval("5 * 15 - 5 * 8")\n35\n')),(0,i.kt)("p",null,"C\xf3digo em Python:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},">>> custo_restaurante()\n35\n")),(0,i.kt)("h2",{id:"passo-4-auto-consist\xeancia"},"Passo 4: Auto-Consist\xeancia"),(0,i.kt)("p",null,"Finalmente, vamos aproveitar a ",(0,i.kt)("a",{parentName:"p",id:"self_consistency_0_31_1689879420237","data-tooltip-html":"Generating multiple chains of thought and taking the majority answer.<br>See <a href='https://learnprompting.org/docs/intermediate/self_consistency'>Self Consistency</a>","data-tooltip-place":"top"},"Auto-Consist\xeancia"),(0,i.kt)(s.u,{anchorId:"self_consistency_0_31_1689879420237",clickable:!0,mdxType:"Tooltip"})," para executar o processo acima v\xe1rias vezes (~5), e ent\xe3o tomar a resposta da maioria."),(0,i.kt)("h2",{id:"conclus\xe3o"},"Conclus\xe3o"),(0,i.kt)("p",null,"O MathPrompter relata 92,5% de precis\xe3o no conjunto de dados MultiArith",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),". O sucesso dessa t\xe9cnica \xe9 um \xf3timo exemplo de como ",(0,i.kt)("strong",{parentName:"p"},"voc\xea"),", como um engenheiro de prompts, pode combinar m\xe9todos que aprendeu ao longo deste curso e combin\xe1-los para lidar com problemas maiores."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Imani, S., Du, L., & Shrivastava, H. (2023). MathPrompter: Mathematical Reasoning using Large Language Models.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Roy, S., & Roth, D. (2015). Solving General Arithmetic Word Problems. Proceedings of the 2015 Conference on Empirical Methods in Natural Language Processing, 1743\u20131752. https://doi.org/10.18653/v1/D15-1202\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}b.isMDXComponent=!0}}]);