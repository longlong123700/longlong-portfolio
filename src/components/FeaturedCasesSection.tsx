import type { Article } from "../types";
import { profile } from "../data/profile";
import { SectionHeading } from "./SectionHeading";

interface FeaturedCasesSectionProps {
  articles: Article[];
}

export function FeaturedCasesSection({
  articles,
}: FeaturedCasesSectionProps) {
  return (
    <section id="featured-cases" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Featured Topic"
        title={profile.featuredTopicTitle}
        description={profile.featuredTopicDescription}
      />

      <div className="mt-10 grid gap-6 xl:grid-cols-3">
        {articles.map((article, index) => (
          <article
            key={article.id}
            className="group relative overflow-hidden rounded-[2rem] border border-stone-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,239,229,0.96))] p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-stone-300/40"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(235,207,216,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.1),transparent_26%)] opacity-80" />
            <div className="relative">
              <div className="flex items-center gap-4">
                <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs uppercase tracking-[0.24em] text-stone-700">
                  Case 0{index + 1}
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold leading-9 text-stone-900">
                {article.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {article.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-stone-200 bg-white/80 px-3 py-1 text-xs text-stone-600"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-stone-600">{article.summary}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/80 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-stone-300/50 hover:bg-white hover:text-stone-900"
              >
                查看原文
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
