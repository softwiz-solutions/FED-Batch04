import React from "react";

export default async function BlogDynamicRoute({ params }) {
  const { slug } = await params;
  return (
    <div>
      <h1>Dynamic Blog Route: {slug}</h1>
    </div>
  );
}
