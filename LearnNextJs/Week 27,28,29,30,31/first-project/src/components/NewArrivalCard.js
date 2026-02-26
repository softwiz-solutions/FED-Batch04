import Link from "next/link";
import React from "react";

export default function NewArrivalCard({ title, price, src, id }) {
  return (
    <div className="bg-white p-4">
      <img src={src} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      <Link href={`/products/${id}`} className="text-blue-500 hover:underline">
        View Details
      </Link>
    </div>
  );
}
