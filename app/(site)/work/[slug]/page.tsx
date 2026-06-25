import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductStory } from "@/components/work/product-story";
import { getProductBySlug, products } from "@/content/portfolio";
import { createMetadata } from "@/lib/seo";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug
  }));
}

export async function generateMetadata({
  params
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return createMetadata({
      title: "Work",
      path: "/work"
    });
  }

  return createMetadata({
    title: `${product.title} - Product Story`,
    description: product.summary,
    path: `/work/${product.slug}`
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductStory product={product} />;
}
