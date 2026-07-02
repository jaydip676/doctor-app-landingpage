import type { ReactNode } from "react";

export function FeatureList({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ul className="mt-6 flex flex-col gap-[13px] list-none">
      {items.map((item) => (
        <li
          key={item.title}
          className="relative pl-[18px] text-[14.5px] text-ink-soft leading-[1.5] before:content-[''] before:absolute before:left-0 before:top-2 before:w-[7px] before:h-[7px] before:rounded-[2px] before:bg-teal"
        >
          <b className="block text-ink font-semibold">{item.title}</b>
          {item.body}
        </li>
      ))}
    </ul>
  );
}

export function FlowList({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ul className="mt-[22px] flex flex-col list-none">
      {items.map((item) => (
        <li
          key={item.title}
          className="relative py-[9px] pl-[26px] text-[14.5px] text-ink-soft before:content-[''] before:absolute before:left-[7px] before:top-0 before:bottom-0 before:w-px before:bg-line after:content-[''] after:absolute after:left-1 after:top-[15px] after:w-[7px] after:h-[7px] after:rounded-full after:bg-teal after:shadow-[0_0_0_3px_var(--teal-tint)]"
        >
          <b className="text-ink font-semibold">{item.title}</b> {item.body}
        </li>
      ))}
    </ul>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <p className="mt-6 text-[15px] text-ink border-l-2 border-teal pl-3.5 leading-[1.5]">
      {children}
    </p>
  );
}

export function ChipRow({ chips }: { chips: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-[22px]">
      {chips.map((chip) => (
        <span
          key={chip}
          className="text-[12.5px] font-semibold text-teal-ink bg-teal-tint border border-teal/15 px-[13px] py-[7px] rounded-full"
        >
          {chip}
        </span>
      ))}
    </div>
  );
}

