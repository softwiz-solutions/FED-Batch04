import ArticleCard from "@/components/ArticleCard";
import NewArrivalSection from "@/components/pageSections/NewArrivalSection";
import Link from "next/link";

export default function Blog() {
  const articles = [
    {
      title: "Article First",
      content:
        "This is the content of the first article. It provides insights into various topics and offers valuable information for readers.",
      slug: "/article-first",
      src: "/images/car.webp",
      author: "John Doe",
    },
    {
      title: "Article Second",
      content:
        "This is the content of the second article. It delves into different subjects and shares useful knowledge for the audience.",
      slug: "/article-second",
      src: "/images/car.webp",

      author: "John Doe 2",
    },
    {
      title: "Article Second",
      content:
        "This is the content of the second article. It delves into different subjects and shares useful knowledge for the audience.",
      slug: "/article-second",
      src: "/images/car.webp",

      author: "John Doe 2",
    },
  ];

  return (
    <div className="bg-white">
      <h1>Blog Page</h1>
      <Link href="/blog/article-first" className="text-blue-500 hover:underline">
        Read Article First
      </Link>
      <div className="flex gap-2">
        {/* <ArticleCard
          title="Article First"
          content="This is the content of the first article. It provides insights into various topics and offers valuable information for readers."
          author="John Doe"
          slug="/article-first"
        />
        <ArticleCard
          title="Article First"
          content="This is the content of the first article. It provides insights into various topics and offers valuable information for readers."
          author="John Doe"
          slug="/article-first"
        /> */}

        {articles.map((article) => (
          <ArticleCard
            src={article.src}
            key={article.slug}
            title={article.title}
            content={article.content}
            author={article.author}
            slug={article.slug}
          />
        ))}

      </div>
    </div>
  );
}
