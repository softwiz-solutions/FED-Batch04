import ProductDetailSection from "@/components/pageSections/ProductDetailSection";
import { newArrival } from "@/data/products";
import React from "react";

export default async function page({ params }) {
  const values = await params;
  console.log("🚀 ~ page ~ values:", values);
  const product = newArrival.find((item) => item.id === parseInt(values.slug));
  console.log("🚀 ~ page ~ product:", product);
  return (
    <div className="min-h-screen bg-red-500">
      <h1>Product Details</h1>
      <ProductDetailSection
        name={product.name}
        image={product.image}
        price={product.price}
      />
    </div>
  );
}
