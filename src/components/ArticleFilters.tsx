import { allCategoryId, categories } from "../data/categories";
import type { CategoryId } from "../types";

interface ArticleFiltersProps {
  activeCategory: CategoryId | typeof allCategoryId;
  onCategoryChange: (categoryId: CategoryId | typeof allCategoryId) => void;
}

export function ArticleFilters({
  activeCategory,
  onCategoryChange,
}: ArticleFiltersProps) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      <button
        type="button"
        onClick={() => onCategoryChange(allCategoryId)}
        className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition ${
          activeCategory === allCategoryId
            ? "border-stone-900 bg-stone-900 text-stone-50"
            : "border-stone-200 bg-white/75 text-stone-600 hover:border-stone-300/50 hover:bg-white hover:text-stone-900"
        }`}
      >
        查看全部
      </button>

      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          onClick={() => onCategoryChange(category.id)}
          className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition ${
            activeCategory === category.id
              ? "border-stone-900 bg-stone-900 text-stone-50"
              : "border-stone-200 bg-white/75 text-stone-600 hover:border-stone-300/50 hover:bg-white hover:text-stone-900"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
