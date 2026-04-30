// app/blog/[slug]/page.js

import dynamic from "next/dynamic";

const BlogPostClient = dynamic(() => import("./BlogPostClient"), { ssr: false });

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
  return <BlogPostClient params={params} />;
}
