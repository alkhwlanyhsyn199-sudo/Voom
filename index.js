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
<style>
*{box-sizing:border-box}
body{margin:0;background:#ffffff;color:#222222;font-family:Arial,sans-serif}
header{
height:56px;background:#ffffff;display:flex;align-items:center;
justify-content:space-between;padding:0 16px;position:sticky;top:0
}
.logo{font-size:24px;font-weight:700;color:#c9a227;letter-spacing:1px}
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
.nav b{display:block;font-size:20px;color:#c9a227;margin-bottom:3px}
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
<div class="search" onclick="searchVoom()">⌕</div><div class="search" onclick="alert("لا توجد إشعارات جديدة 🔔")">🔔</div>
</header>

<main>

<div class="grid">

<div class="card" onclick="openVideo()">
<div class="thumb">🎬</div>
<div class="title">أول فيديو في منصة Voom</div>
<div class="channel">Voom Gaming</div><br><input placeholder="اكتب تعليقك..." style="padding:10px;border:1px solid #ddd;border-radius:8px"><button>💬 تعليق</button><button>👍 إعجاب</button> <button>🔖 حفظ</button>
</div>

<div class="card" onclick="openVideo()">
<div class="thumb">🎮</div>
<div class="title">أفضل ألعاب 2026</div>
<div class="channel">Voom Gaming</div>
</div>

<div class="section">Shorts</div>

<div class="shorts">
<div class="short">🎮</div>
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

<script>function openVideo(){const m=document.querySelector("main");m.innerHTML="";const box=document.createElement("div");box.style.padding="12px";const v=document.createElement("div");v.className="thumb";v.style.height="auto";v.style.aspectRatio="16/9";v.style.display="flex";v.style.alignItems="center";v.style.justifyContent="center";v.style.fontSize="60px";v.textContent="🎬";const h=document.createElement("h2");h.textContent="أول فيديو في منصة Voom";const p=document.createElement("p");p.style.color="#777";p.textContent="Voom Gaming";const b=document.createElement("button");b.textContent="← رجوع";b.onclick=()=>location.reload();box.append(v,h,p,b);m.appendChild(box)}</script><script>function searchVoom(){const q=prompt("ابحث في Voom");if(!q)return;document.querySelectorAll(".card").forEach(c=>c.style.display=c.innerText.toLowerCase().includes(q.toLowerCase())?"block":"none")}</script><script>function loginVoom(){document.querySelector("main").innerHTML="<div style="padding:20px;text-align:center"><div style="font-size:60px">👤</div><h2>تسجيل الدخول إلى Voom</h2><input placeholder="البريد الإلكتروني" style="padding:12px;margin:8px;border:1px solid #ddd;border-radius:8px"><input type="password" placeholder="كلمة المرور" style="padding:12px;margin:8px;border:1px solid #ddd;border-radius:8px"><br><button>تسجيل الدخول</button><button>إنشاء حساب</button><p style="color:#777">مرحبًا بك في Voom</p><button onclick="location.reload()">← رجوع</button></div>"}</script><script>function uploadVoom(){const i=document.createElement("input");i.type="file";i.accept="video/*";i.onchange=()=>alert("تم اختيار الفيديو: "+i.files[0].name);i.click()}</script></body>
</html>
  `);
});

app.listen(3000, () => {
  console.log('Voom يعمل على http://localhost:3000');
});
