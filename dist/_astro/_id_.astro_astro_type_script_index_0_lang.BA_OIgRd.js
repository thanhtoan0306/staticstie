import{i as f}from"./auth.orSIlS3t.js";f()||(window.location.href=`/login?return=${encodeURIComponent(window.location.pathname)}`);const l=document.getElementById("blog-form"),c=document.getElementById("old-slug")?.getAttribute("value");l?.addEventListener("submit",a=>{a.preventDefault();const t=new FormData(l),i=t.get("tags")?.toString().split(",").map(o=>o.trim()).filter(o=>o)||[],d=t.get("title")?.toString()||"",e=t.get("slug")?.toString()||"",g=t.get("excerpt")?.toString()||"",s=t.get("content")?.toString()||"",m=t.get("author")?.toString()||"",p=new Date().toISOString().split("T")[0],u=new Date().toISOString().split("T")[0],h=`---
title: "${d.replace(/"/g,'\\"')}"
excerpt: "${g.replace(/"/g,'\\"')}"
author: "${m.replace(/"/g,'\\"')}"
publishedAt: ${u}
updatedAt: ${p}
${i.length>0?`tags:
${i.map(o=>`  - ${o}`).join(`
`)}`:""}
---

${s}`,b=new Blob([h],{type:"text/markdown"}),r=URL.createObjectURL(b),n=document.createElement("a");n.href=r,n.download=`${e}.md`,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(r);const $=c===e?`File ${e}.md đã được tải về!

Bước tiếp theo:
1. Thay thế file ${c}.md trong src/content/blog/
2. Chạy npm run build
3. Bài viết đã được cập nhật!`:`File ${e}.md đã được tải về!

Bước tiếp theo:
1. Xóa file ${c}.md cũ trong src/content/blog/
2. Thêm file ${e}.md mới vào src/content/blog/
3. Chạy npm run build
4. Bài viết đã được cập nhật!`;alert($)});
