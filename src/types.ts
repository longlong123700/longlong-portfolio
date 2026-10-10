export type CategoryId =
  | "set-analysis"
  | "resource-economy"
  | "runes-reforge"
  | "character-analysis"
  | "pve-strategy"
  | "pvp-strategy"
  | "community-content";

export interface Article {
  id: string;
  title: string;
  url: string;
  categoryId: CategoryId;
  keywords: string[];
  summary: string;
  featured?: boolean;
  featuredRank?: number;
  highlightLabel?: string;
  order: number;
}

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  tags: string[];
  order: number;
}

export interface HeroStat {
  value: string;
  label: string;
  detail: string;
}
