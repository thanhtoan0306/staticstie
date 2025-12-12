import{i as f}from"./auth.orSIlS3t.js";f()||(window.location.href=`/login?return=${encodeURIComponent(window.location.pathname)}`);const l=document.getElementById("blog-form"),a=document.getElementById("title"),s=document.getElementById("slug");a?.addEventListener("input",()=>{const o=a.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");s&&(s.value=o)});l?.addEventListener("submit",o=>{o.preventDefault();const t=new FormData(l),c=t.get("tags")?.toString().split(",").map(n=>n.trim()).filter(n=>n)||[],g=t.get("title")?.toString()||"",r=t.get("slug")?.toString()||"",u=t.get("excerpt")?.toString()||"",d=t.get("content")?.toString()||"",m=t.get("author")?.toString()||"",p=new Date().toISOString().split("T")[0],h=`---
title: "${g.replace(/"/g,'\\"')}"
excerpt: "${u.replace(/"/g,'\\"')}"
author: "${m.replace(/"/g,'\\"')}"
publishedAt: ${p}
${c.length>0?`tags:
${c.map(n=>`  - ${n}`).join(`
`)}`:""}
---

${d}`,b=new Blob([h],{type:"text/markdown"}),i=URL.createObjectURL(b),e=document.createElement("a");e.href=i,e.download=`${r}.md`,document.body.appendChild(e),e.click(),document.body.removeChild(e),URL.revokeObjectURL(i),alert(`File ${r}.md đã được tải về!

Bước tiếp theo:
1. Đặt file vào thư mục src/content/blog/
2. Chạy npm run build
3. Bài viết sẽ xuất hiện trên website`)});
