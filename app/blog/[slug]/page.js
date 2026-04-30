export async function generateStaticParams() {
  return [
    { slug: "inventory-waste" },
    { slug: "peak-hours" },
    { slug: "staff-management" },
    { slug: "menu-engineering" },
    { slug: "order-routing" },
    { slug: "iraq-restaurant-market" }
  ];
}

export default function Page({ params }) {
  return (
    <div style={{ backgroundColor: '#000814', color: '#fff', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', direction: 'rtl' }}>
      <div>
        <h1>مقال: {params.slug}</h1>
        <a href="/blog" style={{ color: '#ff2d7a' }}>العودة للمدونة</a>
      </div>
    </div>
  );
}
