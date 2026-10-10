import { categories } from "../data/categories";
import type { Article } from "../types";

interface ArticleGridProps {
  articles: Article[];
}

export function ArticleGrid({ articles }: ArticleGridProps) {
  const articlesByCategory = categories
    .map((category) => ({
      category,
      items: articles.filter((article) => article.categoryId === category.id),
    }))
    .filter((group) => group.items.length > 0);

  if (articlesByCategory.length === 0) {
    return (
      <div className="rounded-[2rem] border border-dashed border-stone-300 bg-white/70 px-6 py-12 text-center">
        <p className="text-lg font-medium text-stone-900">没有匹配到文章</p>
        <p className="mt-3 text-sm leading-6 text-stone-500">
          可以尝试切换分类，或减少搜索关键词。
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {articlesByCategory.map(({ category, items }) => (
        <section key={category.id} className="space-y-5">
          <div className="rounded-[1.75rem] border border-stone-200 bg-white/75 p-5 shadow-soft">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <h3 className="text-2xl font-semibold text-stone-900">{category.name}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {category.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs text-stone-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {items.map((article) => (
              <article
                key={article.id}
                className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-stone-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,241,233,0.95))] p-5 shadow-soft transition hover:-translate-y-1 hover:border-stone-300/40"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-stone-200 bg-white/80 px-3 py-1 text-xs text-stone-600">
                    {category.name}
                  </span>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] ${
                      article.highlightLabel
                        ? "border-amber-300/90 bg-[linear-gradient(180deg,rgba(255,250,240,0.98),rgba(255,236,199,0.98))] text-stone-700 shadow-[0_10px_24px_rgba(245,158,11,0.12)]"
                        : "border-stone-200 bg-white/80 text-stone-400"
                    }`}
                  >
                    Article
                  </span>
                </div>
                <h4 className="mt-5 text-xl font-semibold leading-8 text-stone-900">
                  {article.title}
                </h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {article.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs text-stone-700"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-7 text-stone-600">
                  {article.summary}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-stone-700 transition hover:text-stone-900"
                >
                  打开原文
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
