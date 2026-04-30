
import { useState, useEffect } from "react";

export function generateStaticParams() {
  return [
    { slug: "inventory-waste" },
    { slug: "peak-hours" },
    { slug: "staff-management" },
    { slug: "menu-engineering" },
    { slug: "order-routing" },
    { slug: "iraq-restaurant-market" },
  ];
}

const POSTS = {
  "inventory-waste": {
    title: "كيف تقلل هدر مطعمك بنسبة 30% خلال شهر واحد",
    category: "المخزون", categoryColor: "#ffd60a", date: "15 أبريل 2026", readTime: "6 دقائق", icon: "📦",
    content: `<h2>لماذا الهدر يدمر أرباحك؟</h2><p>في متوسط المطاعم العراقية، يصل الهدر الغذائي إلى <strong>25-35%</strong> من إجمالي تكاليف المواد الخام.</p><blockquote><p>الهدر ليس قدراً — هو نتيجة غياب النظام.</p></blockquote><h2>الأسباب الحقيقية</h2><ul><li>غياب نظام تتبع المخزون</li><li>الطلبيات العشوائية</li><li>سوء التخزين</li><li>عدم حساب استهلاك الأصناف</li></ul><h2>الحل خطوة بخطوة</h2><h3>1. جرد شامل</h3><p>ابدأ بجرد يدوي كامل لكل ما في مطبخك.</p><h3>2. احسب استهلاك كل طبق</h3><p>لكل صنف، حدد بالضبط كم يستهلك من كل مادة خام.</p><h3>3. اربط المخزون بالطلبات</h3><p>كل ما يُباع يُخصم تلقائياً من المخزون.</p><h3>4. تنبيهات الحد الأدنى</h3><p>حدد لكل مادة مستوى أدنى وتنبيه فوري.</p><h2>النتائج المتوقعة</h2><ul><li>تقليل الهدر 25-35% خلال شهر</li><li>توفير 15-20% من تكاليف المواد</li><li>القضاء على نفاد الأصناف المفاجئ</li></ul>`
  },
  "peak-hours": {
    title: "ساعات الذروة: كيف تستعد وتضاعف إيراداتك",
    category: "التحليلات", categoryColor: "#00c3ff", date: "8 أبريل 2026", readTime: "5 دقائق", icon: "📊",
    content: `<h2>ما هي ساعات الذروة؟</h2><p>الفترات التي يرتفع فيها الطلب — الغداء 12-2 والعشاء 7-9. معظم المطاعم تخسر لأنها غير مستعدة.</p><h2>كيف تعرف ذروتك؟</h2><ul><li>حلّل بيانات مبيعاتك اليومية شهر كامل</li><li>حدد الساعات الأعلى طلباً</li><li>قارن بين أيام الأسبوع</li></ul><h2>الاستعداد الصح</h2><p>قبل ساعة من الذروة: جهوزية المطبخ، المواد الخام، الطاقم كامل.</p><blockquote><p>الذروة فرصة ذهبية — من يستعد يضاعف إيراداته.</p></blockquote>`
  },
  "staff-management": {
    title: "إدارة موظفي المطعم: من الفوضى إلى النظام",
    category: "الموظفون", categoryColor: "#00ff88", date: "1 أبريل 2026", readTime: "8 دقائق", icon: "👥",
    content: `<h2>المشكلة الحقيقية</h2><p>فريق غير منظم يكلفك أكثر من فريق صغير منضبط.</p><h2>4 خطوات للنظام</h2><h3>1. حدد الأدوار</h3><p>كل موظف يعرف مهامه بالضبط.</p><h3>2. جداول ذكية</h3><p>مبنية على ساعات الذروة الفعلية.</p><h3>3. تقييم الأداء</h3><p>أرقام واضحة — طلبات، سرعة، رضا عملاء.</p><h3>4. تدريب مستمر</h3><p>تدريب أسبوعي قصير يحسن الأداء خلال شهر.</p>`
  },
  "menu-engineering": {
    title: "هندسة قائمة الطعام: أي أصناف تجلب الربح؟",
    category: "الربحية", categoryColor: "#ff2d7a", date: "24 مارس 2026", readTime: "7 دقائق", icon: "🍽️",
    content: `<h2>ليس كل صنف يستحق مكانه</h2><p>هندسة القائمة علم يحدد أي الأصناف تجلب أكبر ربح.</p><h2>تصنيف الأصناف</h2><ul><li><strong>النجوم:</strong> مبيعات عالية + ربح عالي</li><li><strong>الأبقار:</strong> مبيعات عالية + ربح منخفض</li><li><strong>الألغاز:</strong> مبيعات منخفضة + ربح عالي</li><li><strong>الكلاب:</strong> مبيعات منخفضة + ربح منخفض — احذفها</li></ul><blockquote><p>حذف 3-5 أصناف غير مربحة يرفع أرباحك 15%.</p></blockquote>`
  },
  "order-routing": {
    title: "توجيه الطلبات الذكي: كيف تنهي فوضى المطبخ",
    category: "العمليات", categoryColor: "#00c3ff", date: "15 مارس 2026", readTime: "5 دقائق", icon: "⚡",
    content: `<h2>الفوضى ليست قدراً</h2><p>نظام توجيه الطلبات الصحيح يقلل وقت التحضير 40%.</p><h2>عناصر النظام الذكي</h2><ul><li>توزيع تلقائي على المحطات</li><li>أولويات واضحة للطاولات</li><li>تنبيهات عند تجاوز وقت التحضير</li><li>تتبع كل طلب من الاستلام للتسليم</li></ul><blockquote><p>مطعم منظم يخدم 40% زبائن أكثر بنفس الفريق.</p></blockquote>`
  },
  "iraq-restaurant-market": {
    title: "سوق المطاعم في العراق 2026: الفرص والتحديات",
    category: "السوق العراقي", categoryColor: "#ffd60a", date: "5 مارس 2026", readTime: "10 دقائق", icon: "🇮🇶",
    content: `<h2>واقع السوق العراقي</h2><p>قطاع المطاعم ينمو بسرعة — لكن معظمها يفتقر للأنظمة الاحترافية.</p><h2>الفرص</h2><ul><li>طبقة وسطى متنامية وإنفاق متزايد</li><li>انتشار التوصيل والطلب الإلكتروني</li><li>غياب المنافسة الاحترافية في معظم المدن</li></ul><h2>التحديات</h2><ul><li>غياب الكوادر المدربة</li><li>ارتفاع تكاليف المواد الخام</li><li>منافسة غير منظمة</li></ul><blockquote><p>المطعم الذي يمتلك نظاماً احترافياً اليوم سيكون رائداً غداً.</p></blockquote>`
  },
};

const G = `
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Space+Mono:wght@400;700&display=swap');
  *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
  body{background:#000814;font-family:'Cairo',sans-serif;overflow-x:hidden}
  ::-webkit-scrollbar{width:4px} ::-webkit-scrollbar-thumb{background:#ff2d7a;border-radius:99px}
  @keyframes fadeUp{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
  @keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}
  @keyframes orb{0%,100%{transform:translate(0,0)}50%{transform:translate(30px,-20px)}}
  .prose p{font-size:16px;color:rgba(240,244,255,.6);line-height:2;margin-bottom:20px}
  .prose h2{font-size:24px;font-weight:900;color:#f0f4ff;margin:40px 0 16px}
  .prose h3{font-size:18px;font-weight:700;color:rgba(240,244,255,.8);margin:28px 0 12px}
  .prose ul{padding-right:20px;margin-bottom:20px}
  .prose li{font-size:15px;color:rgba(240,244,255,.55);line-height:1.9;margin-bottom:8px;list-style:none;padding-right:20px;position:relative}
  .prose li::before{content:"◆";position:absolute;right:0;color:#ff2d7a;font-size:8px;top:8px}
  .prose strong{color:#f0f4ff;font-weight:700}
  .prose blockquote{border-right:3px solid #ff2d7a;padding:16px 24px;background:rgba(255,45,122,.06);border-radius:0 8px 8px 0;margin:24px 0}
  .prose blockquote p{color:rgba(240,244,255,.7);font-style:italic;margin:0}
`;

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"16px 48px",display:"flex",alignItems:"center",justifyContent:"space-between",background:scrolled?"rgba(0,8,20,.95)":"rgba(0,8,20,.7)",backdropFilter:"blur(24px)",borderBottom:"1px solid rgba(255,255,255,.05)",direction:"rtl"}}>
      <a href="/" style={{fontFamily:"Space Mono",fontSize:18,fontWeight:700,color:"#f0f4ff",textDecoration:"none",display:"flex",alignItems:"center",gap:8}}>
        <span style={{width:8,height:8,background:"#ff2d7a",borderRadius:"50%",animation:"blink 2s infinite"}}/>IQR
      </a>
      <div style={{display:"flex",gap:20,alignItems:"center"}}>
        <a href="/blog" style={{fontFamily:"Cairo",fontSize:13,fontWeight:700,color:"rgba(240,244,255,.5)",textDecoration:"none"}}>← المدونة</a>
        <a href="https://wa.me/9647734383437" target="_blank" style={{fontFamily:"Cairo",fontSize:13,fontWeight:700,padding:"8px 20px",background:"#ff2d7a",color:"#fff",borderRadius:4,textDecoration:"none"}}>تواصل 💬</a>
      </div>
    </nav>
  );
}

export default function BlogPostPage({ params }) {
  const post = POSTS[params.slug] || POSTS["inventory-waste"];
  return (
    <>
      <style>{G}</style>
      <div style={{position:"fixed",inset:0,zIndex:0,pointerEvents:"none"}}>
        <div style={{position:"absolute",width:500,height:500,borderRadius:"50%",background:"radial-gradient(ellipse,rgba(255,45,122,.06),transparent 70%)",top:0,right:0,filter:"blur(80px)",animation:"orb 15s ease-in-out infinite"}}/>
      </div>
      <Nav/>
      <article style={{maxWidth:760,margin:"0 auto",padding:"120px 48px 100px",position:"relative",zIndex:2,direction:"rtl",animation:"fadeUp .8s ease both"}}>
        <div style={{marginBottom:48}}>
          <div style={{display:"flex",gap:12,alignItems:"center",marginBottom:24}}>
            <a href="/blog" style={{fontFamily:"Cairo",fontSize:12,color:"rgba(240,244,255,.3)",textDecoration:"none"}}>المدونة</a>
            <span style={{color:"rgba(240,244,255,.2)"}}>›</span>
            <span style={{fontFamily:"Cairo",fontSize:12,color:post.categoryColor,fontWeight:700}}>{post.category}</span>
          </div>
          <div style={{fontSize:48,marginBottom:20}}>{post.icon}</div>
          <h1 style={{fontFamily:"Cairo",fontSize:"clamp(26px,4vw,44px)",fontWeight:900,color:"#f0f4ff",lineHeight:1.2,marginBottom:20}}>{post.title}</h1>
          <div style={{display:"flex",gap:20,alignItems:"center"}}>
            <span style={{fontFamily:"Cairo",fontSize:13,color:"rgba(240,244,255,.3)"}}>{post.date}</span>
            <span style={{width:4,height:4,borderRadius:"50%",background:"rgba(255,255,255,.2)"}}/>
            <span style={{fontFamily:"Space Mono",fontSize:12,color:"rgba(240,244,255,.3)"}}>{post.readTime}</span>
          </div>
          <div style={{height:1,background:"linear-gradient(to left,transparent,#ff2d7a,transparent)",marginTop:32}}/>
        </div>
        <div className="prose" dangerouslySetInnerHTML={{__html:post.content}}/>
        <div style={{marginTop:60,padding:"40px",background:"linear-gradient(135deg,rgba(255,45,122,.08),rgba(0,195,255,.04))",border:"1px solid rgba(255,45,122,.2)",borderRadius:16,textAlign:"center"}}>
          <h3 style={{fontFamily:"Cairo",fontSize:22,fontWeight:900,color:"#f0f4ff",marginBottom:12}}>تبي تطبق هذا في مطعمك؟</h3>
          <p style={{fontFamily:"Cairo",fontSize:14,color:"rgba(240,244,255,.45)",marginBottom:24,lineHeight:1.8}}>محادثة مجانية — نحلل وضعك ونحدد من أين تبدأ</p>
          <a href="https://wa.me/9647734383437" target="_blank" style={{display:"inline-flex",alignItems:"center",gap:10,fontFamily:"Cairo",fontSize:14,fontWeight:700,padding:"14px 36px",background:"#ff2d7a",color:"#fff",borderRadius:8,textDecoration:"none",boxShadow:"0 0 30px rgba(255,45,122,.3)"}}>📲 تواصل على واتساب</a>
        </div>
        <div style={{marginTop:40,textAlign:"center"}}>
          <a href="/blog" style={{fontFamily:"Cairo",fontSize:13,color:"rgba(240,244,255,.3)",textDecoration:"none"}}>← العودة للمدونة</a>
        </div>
      </article>
      <footer style={{background:"#000510",borderTop:"1px solid rgba(255,255,255,.05)",padding:"40px 48px",textAlign:"center",position:"relative",zIndex:2}}>
        <p style={{fontFamily:"Cairo",fontSize:12,color:"rgba(240,244,255,.2)"}}>© 2026 IQR لإدارة وتطوير المطاعم — العراق</p>
      </footer>
    </>
  );
}


شوفه بي مشلكة؟
