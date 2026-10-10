import { useMemo, useState } from "react";
import { ArticleFilters } from "./components/ArticleFilters";
import { ArticleGrid } from "./components/ArticleGrid";
import { FeaturedCasesSection } from "./components/FeaturedCasesSection";
import { FooterSection } from "./components/FooterSection";
import { HeroSection } from "./components/HeroSection";
import { SectionHeading } from "./components/SectionHeading";
import { TopNav } from "./components/TopNav";
import { articles } from "./data/articles";
import { allCategoryId } from "./data/categories";
import type { CategoryId } from "./types";

function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryId | typeof allCategoryId>(
    allCategoryId
  );

  const featuredArticles = useMemo(
    () =>
      articles
        .filter((article) => article.featured)
        .sort((left, right) => (left.featuredRank ?? 0) - (right.featuredRank ?? 0)),
    []
  );

  const visibleArticles = useMemo(() => {
    return articles
      .filter((article) => {
        if (activeCategory === allCategoryId) {
          return true;
        }

        return article.categoryId === activeCategory;
      })
      .sort((left, right) => left.order - right.order);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-transparent text-stone-900">
      <TopNav />
      <HeroSection />
      <main>
        <FeaturedCasesSection articles={featuredArticles} />

        <section
          id="article-library"
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow="Capabilities"
            title="我的全部攻略作品"
            description="当前页面收录共 19 篇作品，文章按能力维度分组分别展示我做过什么。"
          />

          <div className="mt-10">
            <ArticleFilters
              activeCategory={activeCategory}
              onCategoryChange={(categoryId) => setActiveCategory(categoryId)}
            />
          </div>

          <div className="mt-10">
            <ArticleGrid articles={visibleArticles} />
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
