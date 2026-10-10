import { heroStats, profile } from "../data/profile";

export function HeroSection() {
  return (
    <header className="relative overflow-hidden border-b border-stone-200/80">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(235,207,216,0.20),transparent_24%),radial-gradient(circle_at_top_left,rgba(225,197,143,0.20),transparent_26%),linear-gradient(180deg,rgba(255,248,226,0.98),rgba(253,231,240,0.96))]" />
      <div className="absolute inset-0 bg-grid bg-[size:32px_32px] [mask-image:linear-gradient(180deg,rgba(255,255,255,0.9),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-amber-200 bg-white/75 px-4 py-2 text-sm leading-6 text-stone-700 shadow-soft">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span>面向数值策划 / 游戏数据分析等岗位</span>
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-xl text-stone-700 sm:text-2xl">{profile.role}</p>
            <p className="mt-3 text-base text-stone-600 sm:text-lg">
              {profile.identity}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#featured-cases"
                className="rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-stone-50 transition hover:bg-stone-800"
              >
                查看重点案例
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-200/80 bg-white/80 p-5 shadow-card backdrop-blur">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-700/80">
                Core Signals
              </p>
              <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs text-stone-700">
                玩家侧收益框架
              </span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {heroStats.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-3xl border border-stone-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,241,233,0.94))] p-4"
                >
                  <p className="text-2xl font-semibold text-stone-900">{stat.value}</p>
                  <p className="mt-2 text-sm font-medium text-stone-700">{stat.label}</p>
                  <p className="mt-2 text-sm leading-6 text-stone-500">{stat.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
