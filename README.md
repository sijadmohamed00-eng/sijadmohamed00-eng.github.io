# IQR Website 🍽️

موقع IQR لإدارة وتطوير المطاعم في العراق

---

## 🚀 خطوات الرفع على Vercel (مجاني — دقيقتين)

### الخطوة 1 — رفع على GitHub

1. روح على [github.com](https://github.com) وسجل دخول
2. اضغط **New repository**
3. اسمّه `iqr-website`
4. اضغط **Create repository**
5. حمّل كل الملفات (اسحبهم وضعهم)
6. اضغط **Commit changes**

---

### الخطوة 2 — ربط Vercel

1. روح على [vercel.com](https://vercel.com)
2. سجل دخول بحساب GitHub
3. اضغط **Add New → Project**
4. اختار الـ repo اسمه `iqr-website`
5. اضغط **Deploy**
6. انتظر دقيقة ✅

---

### الخطوة 3 — ربط دومين iqrhq.me

1. في Vercel → روح **Settings → Domains**
2. اكتب `iqrhq.me` واضغط **Add**
3. Vercel يعطيك **DNS records**
4. روح لموقع اشتريت منه الدومين (GoDaddy / Namecheap)
5. أضف الـ DNS records اللي أعطاك Vercel
6. انتظر 10-30 دقيقة → الموقع يطلع على iqrhq.me ✅

---

## 💻 تشغيل محلي (اختياري)

```bash
npm install
npm run dev
```

افتح المتصفح على: http://localhost:3000

---

## 📁 هيكل المشروع

```
iqr-website/
├── app/
│   ├── layout.js       ← إعدادات الصفحة (title, fonts)
│   ├── page.js         ← نقطة الدخول
│   └── globals.css     ← CSS عام
├── components/
│   └── IQRSite.jsx     ← الكود الرئيسي للموقع
├── public/             ← صور وملفات ثابتة
├── package.json
└── next.config.js
```

---

## 🛠 تعديل المحتوى

كل المحتوى موجود في: `components/IQRSite.jsx`

- **رقم الواتساب:** ابحث عن `9647734383437`
- **الإيميل:** ابحث عن `info@iqrhq.me`
- **الخدمات:** ابحث عن `const svcs`
- **النتائج/الأرقام:** ابحث عن `const nums`

---

© 2026 IQR — جميع الحقوق محفوظة
