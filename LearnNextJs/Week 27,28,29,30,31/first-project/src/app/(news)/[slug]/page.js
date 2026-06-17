import Header from "@/components/Header";
import NewsSection from "@/components/pageSections/NewsSection";

const getNews = async (slug) => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${slug}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`,
  );
  const data = await res.json();
  return data;
};
export default async function News({ params }) {
  const { slug } = await params;
  const newsData = await getNews(slug);
  return (
    <div className="bg-zinc-50 font-sans">
      <Header>{slug} App</Header>
      <NewsSection newsData={newsData.articles} />
    </div>
  );
}
