import React from "react";
import Para from "../Para";
import Header from "../Header";
import { newArrival } from "@/data/products";
import NewArrivalCard from "../NewArrivalCard";

export default function NewArrivalSection() {
  return (
    <div className="bg-red-300 p-3 text-center">
      <div>
        <Header>Discover the Latest Arrivals in Our Collection</Header>
        <Para>Recently Added</Para>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {newArrival.map((item) => (
          <NewArrivalCard
            id={item.id}
            key={item.id}
            title={item.name}
            price={item.price}
            src={item.image}
          />
        ))}
      </div>
    </div>
  );
}
