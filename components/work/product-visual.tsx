import { cn } from "@/lib/utils";

type ProductVisualProps = {
  title: string;
  category: string;
  accent: string;
  compact?: boolean;
};

export function ProductVisual({
  title,
  category,
  accent,
  compact = false
}: ProductVisualProps) {
  return (
    <div
      aria-label={`${title} product visual placeholder`}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br p-4 text-white shadow-2xl shadow-black/20",
        accent,
        compact ? "min-h-56" : "min-h-72"
      )}
      role="img"
    >
      <div className="absolute inset-0 surface-grid opacity-[0.08]" />
      <div className="absolute -right-16 -top-20 size-56 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 left-10 size-64 rounded-full bg-white/10 blur-3xl" />

      <div className="relative flex h-full min-h-[inherit] flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-white/70 backdrop-blur">
            {category}
          </div>
          <div className="flex gap-1.5">
            <span className="size-2 rounded-full bg-white/35" />
            <span className="size-2 rounded-full bg-white/25" />
            <span className="size-2 rounded-full bg-white/15" />
          </div>
        </div>

        <div className="rounded-2xl border border-white/12 bg-black/20 p-4 backdrop-blur-md">
          <div className="mb-5 h-2 w-24 rounded-full bg-white/20" />
          <div className="grid gap-3">
            <div className="h-3 rounded-full bg-white/70" />
            <div className="h-3 w-4/5 rounded-full bg-white/35" />
            <div className="h-3 w-2/3 rounded-full bg-white/25" />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-2">
            <div className="h-16 rounded-2xl bg-white/10" />
            <div className="h-16 rounded-2xl bg-white/15" />
            <div className="h-16 rounded-2xl bg-white/10" />
          </div>
        </div>

        <div>
          <p className="text-2xl font-semibold tracking-tight">{title}</p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-white/68">
            Product story placeholder for a future image, prototype, or launch artifact.
          </p>
        </div>
      </div>
    </div>
  );
}
