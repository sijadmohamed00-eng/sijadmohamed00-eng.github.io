// 1. الدالة الأساسية للبناء (اللي كانت تسبب المشكلة)
export async function generateStaticParams() {
  return [
    { slug: "inventory-waste" },
    { slug: "peak-hours" },
    { slug: "staff-management" },
    { slug: "menu-engineering" },
    { slug: "order-routing" },
    { slug: "iraq-restaurant-market" },
  ];
}

// 2. المكون الذي يعرض الصفحة (بشكل بسيط جداً لضمان النجاح)
export default function BlogPostPage({ params }) {
  return (
    <div style={{ direction: "rtl", padding: "100px 20px", textAlign: "center", color: "#fff", background: "#000814", minHeight: "100vh" }}>
      <h1 style={{ fontFamily: "Cairo, sans-serif" }}>جاري تجهيز المقال: {params.slug}</h1>
      <p style={{ marginTop: "20px", color: "rgba(255,255,255,0.5)" }}>براند IQRHQ - الإدارة الذكية للمطاعم</p>
      <a href="/" style={{ color: "#ff2d7a", textDecoration: "none", marginTop: "30px", display: "inline-block" }}>← العودة للرئيسية</a>
    </div>
  );
}
