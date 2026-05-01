// app/blog/[slug]/page.js
// استبدل محتوى هذا الملف بالكود أدناه

export async function generateStaticParams() {
  return [
    { slug: "inventory-waste" },
    { slug: "peak-hours" },
    { slug: "staff-management" },
    { slug: "menu-engineering" },
    { slug: "order-routing" },
    { slug: "iraq-restaurant-market" },
    { slug: "digital-transformation" },
    { slug: "customer-experience" },
    { slug: "supplier-management" },
  ];
}

export { default } from "./BlogPostClient";
