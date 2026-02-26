import React from "react";

export default function ProductDetailSection({
  name,
  description,
  price,
  image,
}) {
  console.log("🚀 ~ ProductDetailSection ~ image:", image)
  return (
    <div>
      <img src={image} alt="Product Image" />
      <h2>{name}</h2>
      <p>{description} </p>
      <p>Price: ${price}</p>
      <button className="bg-blue-500 text-white px-4 py-2">Add to Cart</button>
    </div>
  );
}
