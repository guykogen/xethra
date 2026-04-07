import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <Logo height={44} />
          <div>
            <p className="font-semibold text-white">Xethra LLC</p>
            <p className="mt-1 text-sm text-slate-500">
              Engineering next-generation digital ecosystems.
            </p>
          </div>
        </div>
        <address className="not-italic text-sm leading-relaxed text-slate-400">
          <p className="font-medium text-slate-300">Mailing address</p>
          <p className="mt-2">
            1001 S Main St, Ste 600
            <br />
            Kalispell, MT 59901
            <br />
            United States
          </p>
        </address>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-white/5 pt-8 text-center text-xs text-slate-600 sm:text-left">
        © {new Date().getFullYear()} Xethra LLC. All rights reserved.
      </div>
    </footer>
  );
}
