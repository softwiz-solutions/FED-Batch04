import Link from "next/link";
import React from "react";

export default function BlogNavbar() {
  const blogArticles = [
    {
      id: 1,
      title: "Article 1",
      slug: "article-first",
    },
    {
      id: 2,
      title: "Article 2",
      slug: "article-second",
    },
    {
      id: 3,
      title: "Article 3",
      slug: "article-third",
    },
    {
      id: 4,
      title: "Article 4",
      slug: "article-fourth",
    },
  ];

  return (
    <div className="bg-gray-800 text-white p-4">
      <h1 className="text-xl font-bold">Blog Navbar</h1>
      {/* <a href="/blog" className="mr-4">
        Blog HOme
      </a>
      <a href="/blog/article-first" className="mr-4">
        Article 1
      </a>
      <a href="/blog/article-second" className="mr-4">
        Article 2
      </a> */}

      {blogArticles.map((article) => (
        <Link
          key={article.id}
          href={`/blog/${article.slug}`}
        
          className="mr-4 hover:text-gray-400"
        >
          {article.title}
        </Link>
      ))}
    </div>
  );
}
