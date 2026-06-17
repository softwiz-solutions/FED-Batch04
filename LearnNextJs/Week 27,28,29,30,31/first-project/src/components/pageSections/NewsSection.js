import React from "react";
import NewsCard from "../cards/NewsCards";

const NewsSection = ({ newsData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {newsData.map((article) => (
        <NewsCard key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsSection;
