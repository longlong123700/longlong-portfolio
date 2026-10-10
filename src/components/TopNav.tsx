const navItems = [
  { label: "重点案例", href: "#featured-cases" },
  { label: "攻略分类", href: "#article-library" },
  { label: "更多作品", href: "#contact" },
];

export function TopNav() {
  return (
    <div className="sticky top-0 z-50 border-b border-stone-200/70 bg-[rgba(250,245,237,0.82)] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex gap-3 overflow-x-auto text-sm text-stone-600">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-stone-200 bg-white/70 px-4 py-2 transition hover:border-stone-300/60 hover:bg-white hover:text-stone-900"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
