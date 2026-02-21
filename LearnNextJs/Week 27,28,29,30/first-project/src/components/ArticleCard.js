import Link from "next/link";
import React from "react";

export default function ArticleCard({ title, content, author, slug,src }) {
  return (
    <div className="bg-blue-300 p-2">
      <img src={src} height={200} width={300}/>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>Author: {author}</p>
      <Link href={`/blog${slug}`} className="text-blue-500 hover:underline">
        Read More
      </Link>
    </div>
  );
}
