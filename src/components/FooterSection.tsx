import { profile } from "../data/profile";

export function FooterSection() {
  return (
    <footer
      id="contact"
      className="border-t border-stone-200/80 bg-[linear-gradient(180deg,rgba(250,245,237,0.2),rgba(241,232,219,0.88))]"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-stone-200 bg-white/78 p-6 shadow-soft backdrop-blur lg:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
              Explore
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-stone-900">继续了解我的作品</h2>
            <div className="mt-6 flex flex-wrap gap-4">

              <a href="#featured-cases" className="rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-stone-50">查看重点案例</a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(245,238,228,0.92))] p-6 shadow-soft lg:p-7">
            <h3 className="text-xl font-semibold text-stone-900">快速入口</h3>
            <div className="mt-5 space-y-4 text-sm text-stone-600">

              <a
                href={profile.communityHref}
                target="_blank"
                rel="noreferrer noopener"
                className="block rounded-2xl border border-stone-200 bg-white/80 p-4 transition hover:border-stone-300/40 hover:bg-white hover:text-stone-900"
              >
                诗悦官方社区主页入口 ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
