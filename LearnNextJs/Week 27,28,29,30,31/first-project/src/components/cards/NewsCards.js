import Image from "next/image";
import Link from "next/link";

export default function NewsCard({ article }) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    },
  );

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-64 w-full overflow-hidden bg-slate-100">
        {/* <Image
          src={article.urlToImage}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 420px"
          priority
        /> */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-slate-900 backdrop-blur-md">
          {article.source?.name}
        </span>
      </div>

      <div className="relative space-y-4 p-6">
        <div className="flex items-center justify-between gap-4 text-sm text-slate-500">
          <span>{article.author || "Unknown Author"}</span>
          <time dateTime={article.publishedAt}>{formattedDate}</time>
        </div>

        <h2 className="line-clamp-2 text-2xl font-bold leading-tight text-slate-950 transition-colors duration-300 group-hover:text-indigo-600">
          {article.title}
        </h2>

        <p className="line-clamp-3 text-sm leading-6 text-slate-600">
          {article.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <Link
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-600"
          >
            Read More
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
            News
          </span>
        </div>
      </div>
    </article>
  );
}
