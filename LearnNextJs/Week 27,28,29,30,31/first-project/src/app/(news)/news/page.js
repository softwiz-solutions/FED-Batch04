import Header from "@/components/Header";
import NewsSection from "@/components/pageSections/NewsSection";

const getNews = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`,
  );
  const data = await res.json();
  return data;
};
export default async function News() {
  const newsData = await getNews();
  console.log("🚀 ~ News ~ newsData:", newsData)
  return (
    <div className="bg-zinc-50 font-sans">
      <Header>News App</Header>
      <NewsSection newsData={newsData.articles} />
    </div>
  );
}
