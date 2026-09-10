const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Voom</title>
<style>#searchBtn{position:absolute;left:20px;top:12px}</style><style>
*{box-sizing:border-box}
body{margin:0;background:#ffffff;color:#222222;font-family:Arial,sans-serif}
header{
height:56px;background:#ffffff;display:flex;align-items:center;
justify-content:space-between;padding:0 16px;position:sticky;top:0
}
.logo{font-size:24px;font-weight:700;color:#e53935;letter-spacing:1px}
.search{font-size:21px;color:#777;padding:5px 9px;border-radius:50%;background:#f5f5f5}
.grid{padding:0}
.card{margin-bottom:18px;background:#fff;border-radius:0;overflow:hidden;box-shadow:none}
.thumb{
height:200px;background:#f8f8f8;border-radius:12px;
display:flex;align-items:center;justify-content:center;
font-size:55px
}
.title{font-size:18px;font-weight:bold;margin-top:9px}
.channel{color:#aaa;margin-top:6px}
.section{font-size:22px;font-weight:bold;margin:25px 5px 12px}
.shorts{display:flex;gap:10px;overflow:hidden}
.short{width:120px;height:180px;flex:0 0 auto;border-radius:14px;overflow:hidden;background:#f5f2ea;border:1px solid #e5d8ad;
min-width:160px;height:250px;background:#f8f8f8;border-radius:12px;
display:flex;align-items:center;justify-content:center;font-size:40px
}
.bottom{
position:fixed;bottom:0;left:0;right:0;height:70px;
background:#ffffff;border-top:1px solid #d8c27a;
display:flex;justify-content:space-around;align-items:center
}
.nav{font-size:12px;text-align:center;font-size:12px;color:#777}
.nav b{display:block;font-size:20px;color:#e53935;margin-bottom:3px}
.plus{width:42px;height:42px;border-radius:50%;font-size:24px;background:#c9a227;color:#fff;display:flex;align-items:center;justify-content:center;
background:white;color:black;border-radius:50%;
width:48px;height:48px;display:flex;align-items:center;
justify-content:center;font-size:30px
}
main{padding-bottom:85px}
</style>
</head>

<body>

<header>
<div class="logo">Voom</div>
<div id="searchBtn" class="search" onclick="searchVoom()">⌕</div><div class="search" onclick="alert('لا توجد إشعارات جديدة 🔔')">🔔</div>
</header>

<main>
<script>document.addEventListener("DOMContentLoaded",async function(){const z=localStorage.getItem("voomVideo");if(!z)return;const v=JSON.parse(z);const c=await caches.open("voom-media");const vr=await c.match("/voom-video");const tr=await c.match("/voom-thumb");if(!vr||!tr)return;const vb=URL.createObjectURL(await vr.blob());const tb=URL.createObjectURL(await tr.blob());const d=document.createElement("div");d.className="card";const vid=document.createElement("video");vid.src=vb;vid.poster=tb;vid.controls=true;vid.style.width="100%";vid.style.aspectRatio="16/9";vid.style.borderRadius="12px";const h=document.createElement("h3");h.textContent=v.title;const p=document.createElement("p");p.textContent=v.desc;d.append(vid,h,p);document.querySelector("main").prepend(d)})</script>

<div class="grid">

<div class="card" onclick="openVideo()">
<div class="thumb">🎬</div>
<div class="title">أول فيديو في منصة Voom</div>
<div class="channel" onclick="channelVoom()">Voom Gaming</div><br><input placeholder="اكتب تعليقك..." style="padding:10px;border:1px solid #ddd;border-radius:8px"><button onclick="const i=this.previousElementSibling;if(i.value.trim()){const p=document.createElement('p');p.textContent='💬 '+i.value;p.style.padding='8px 12px';p.style.background='#f5f5f5';p.style.borderRadius='8px';this.parentElement.appendChild(p);i.value=''}">💬 تعليق</button><button onclick="this.textContent=this.textContent.includes('👍')?'💛 تم الإعجاب':'👍 إعجاب'">👍 إعجاب</button> <button onclick="this.textContent=this.textContent.includes('🔖')?'✅ تم الحفظ':'🔖 حفظ'">🔖 حفظ</button><button onclick="creatorDashboard()">📊 لوحة التحكم</button>
</div>

<div class="card" onclick="openVideo()">
<div class="thumb">🎮</div>
<div class="title">أفضل ألعاب 2026</div>
<div class="channel">Voom Gaming</div>
</div>

<div class="section">Shorts</div>

<div class="shorts">
<div class="short" onclick="alert('فتح Shorts 🎬')">🎮</div>
<div class="short">🔥</div>
<div class="short">😂</div>
</div>

<div class="section">الاشتراكات</div>

<div class="card">
<div class="thumb">📺</div>
<div class="title">فيديو جديد من قناتك</div>
<div class="channel">Voom Creator</div>
</div>

</div>

</main>

<div class="bottom">
<div class="nav"><b>⌂</b>الرئيسية</div>
<div class="nav"><b>▣</b>Shorts</div>
<div class="plus" onclick="uploadVoom()">+</div>
<div class="nav"><b>▶</b>الاشتراكات</div>
<div class="nav" onclick="loginVoom()"><b>●</b>أنت</div>
</div>
<script>function uploadVoom(){const i=document.createElement("input");i.type="file";i.accept="video/*";i.onchange=function(){const video=i.files[0];if(!video)return;const t=document.createElement("input");t.type="file";t.accept="image/*";t.onchange=function(){const img=t.files[0];if(!img)return;const m=document.querySelector("main");m.innerHTML="";const box=document.createElement("div");box.style.padding="20px";const h=document.createElement("h2");h.textContent="نشر فيديو جديد";const preview=document.createElement("img");preview.src=URL.createObjectURL(img);preview.style.width="100%";preview.style.aspectRatio="16/9";preview.style.objectFit="cover";preview.style.borderRadius="12px";const name=document.createElement("p");name.textContent="🎬 "+video.name;const title=document.createElement("input");title.placeholder="عنوان الفيديو";title.style.width="100%";title.style.padding="12px";title.style.boxSizing="border-box";const desc=document.createElement("textarea");desc.placeholder="وصف الفيديو";desc.style.width="100%";desc.style.height="100px";desc.style.boxSizing="border-box";const publish=document.createElement("button");publish.textContent="🚀 نشر الفيديو";publish.onclick=async function(){const c=await caches.open("voom-media");await c.put("/voom-video",new Response(video));await c.put("/voom-thumb",new Response(img));localStorage.setItem("voomVideo",JSON.stringify({title:title.value||"فيديو جديد",desc:desc.value||""}));alert("تم نشر الفيديو بنجاح ✅");location.reload()};const back=document.createElement("button");back.textContent="← رجوع";back.onclick=function(){location.reload()};box.append(h,preview,name,title,document.createElement("br"),desc,document.createElement("br"),publish,back);m.appendChild(box)};t.click()};i.click()}</script>

<script>async function openVideo(){const m=document.querySelector("main");m.innerHTML="";m.style.direction="rtl";const c=await caches.open("voom-media");const vr=await c.match("/voom-video");const tr=await c.match("/voom-thumb");const z=localStorage.getItem("voomVideo");const data=z?JSON.parse(z):null;const box=document.createElement("div");box.style.background="#fff";box.style.paddingBottom="30px";if(vr){const video=document.createElement("video");video.src=URL.createObjectURL(await vr.blob());if(tr)video.poster=URL.createObjectURL(await tr.blob());video.controls=true;video.style.width="calc(100% - 20px)";video.style.margin="10px";video.style.borderRadius="18px";video.style.aspectRatio="16/9";video.style.objectFit="contain";video.style.background="#000";box.appendChild(video)}const content=document.createElement("div");content.style.padding="16px";const title=document.createElement("h2");title.textContent=data?data.title:"فيديو جديد";title.style.margin="8px 0";const info=document.createElement("p");info.textContent="85  •  مشاهدة  •  قبل 3 أسابيع";info.style.color="#777";const channel=document.createElement("div");channel.style.display="flex";channel.style.alignItems="center";channel.style.gap="12px";const avatar=document.createElement("div");avatar.textContent="V";avatar.style.width="48px";avatar.style.height="48px";avatar.style.borderRadius="50%";avatar.style.background="#111";avatar.style.color="#fff";avatar.style.display="flex";avatar.style.alignItems="center";avatar.style.justifyContent="center";avatar.style.fontSize="22px";const chname=document.createElement("div");chname.innerHTML="<b>Voom Gaming</b><br><span style=color:#777>85 متابعًا</span>";const sub=document.createElement("button");sub.textContent="اشترك";sub.style.background="#e53935";sub.style.color="#fff";sub.style.border="0";sub.style.borderRadius="24px";sub.style.padding="7px 18px";sub.style.fontSize="13px";sub.onclick=function(){sub.textContent="مشترك ✓"};channel.append(avatar,chname,sub);const row=document.createElement("div");row.style.display="flex";row.style.gap="6px";row.style.flexWrap="nowrap";row.style.justifyContent="center";row.style.width="100%";const fans=document.createElement("button");fans.textContent="♡ معجبون 0";fans.onclick=function(){const n=parseInt(fans.textContent.match(/\d+/)?.[0]||0)+1;fans.textContent="♥ معجبون "+n};const like=document.createElement("button");like.textContent="♡ اعجاب";like.onclick=function(){like.textContent=like.textContent.includes("اعجاب")?"♥ معجب":"♡ اعجاب"};const share=document.createElement("button");share.textContent="↗ مشاركة";share.onclick=async function(){try{await navigator.clipboard.writeText(location.href);share.textContent="✓ تم النسخ"}catch(e){share.textContent="تعذر النسخ"}};const save=document.createElement("button");save.textContent="▢ حفظ";save.onclick=function(){save.textContent="✓ محفوظ"};[fans,like,share,save].forEach(x=>{x.style.border="0";x.style.borderRadius="24px";x.style.padding="9px 16px";x.style.background="#f7f7f7";x.style.color="#222";x.style.fontSize="12px";x.style.minWidth="0";x.style.flex="1";x.style.padding="7px 3px"});row.append(fans,like,share,save);const desc=document.createElement("p");desc.textContent=data?data.desc:"وصف الفيديو";desc.style.color="#444";desc.style.lineHeight="1.8";desc.style.background="#f7f7f7";desc.style.borderRadius="16px";desc.style.padding="14px 16px";desc.style.margin="16px 0";const comments=document.createElement("h3");comments.textContent="التعليقات";comments.style.borderTop="1px solid #eee";comments.style.paddingTop="14px";comments.style.fontSize="18px";comments.style.marginBottom="12px";const input=document.createElement("input");input.placeholder="اكتب تعليقك...";input.style.width="calc(100% - 95px)";input.style.padding="9px 12px";input.style.border="1px solid #ddd";input.style.borderRadius="20px";const cb=document.createElement("button");cb.textContent="تعليق";cb.style.background="#e53935";cb.style.color="#fff";cb.style.border="0";cb.style.borderRadius="20px";cb.style.padding="8px 13px";cb.onclick=function(){if(input.value.trim()){const x=document.createElement("div");x.textContent="💬 "+input.value;x.style.padding="12px";x.style.marginTop="10px";x.style.background="#f7f7f7";x.style.borderRadius="12px";content.appendChild(x);input.value=""}};const back=document.createElement("button");back.textContent="← رجوع";back.style.marginTop="20px";back.onclick=function(){location.reload()};content.append(title,info,channel,row,desc,comments,input,cb,document.createElement("br"),back);box.appendChild(content);m.appendChild(box)}</script><script>function searchVoom(){const q=prompt("ابحث في Voom");if(!q)return;document.querySelectorAll(".card").forEach(c=>c.style.display=c.innerText.toLowerCase().includes(q.toLowerCase())?"block":"none")}</script><script>function loginVoom(){const m=document.querySelector("main");m.innerHTML="<div style=padding:20px;text-align:center><div style=font-size:64px>👤</div><h2>حسابي في Voom</h2><p style=color:#777>مرحبًا بك في حسابك</p><div style=display:flex;justify-content:center;gap:25px;margin:20px><div><b>85</b><br>متابع</div><div><b>12</b><br>فيديو</div><div><b>24</b><br>محفوظ</div></div><button onclick=creatorDashboard()>📊 لوحة التحكم</button><button onclick=settingsVoom()>⚙️ الإعدادات</button><br><br><button onclick=location.reload()>← رجوع</button></div>"}</script></body>
</html>
  `);
});

app.listen(3000, () => {
  console.log('Voom يعمل على http://localhost:3000');
});
