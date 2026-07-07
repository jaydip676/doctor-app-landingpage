"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { getProductTourVideoEmbedUrl } from "@/lib/product-tour-video";

export function VideoTourModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const embedUrl = useMemo(() => getProductTourVideoEmbedUrl(), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex h-dvh w-full items-center justify-center bg-ink/55 p-4 backdrop-blur-sm overscroll-contain sm:p-6 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))]"
      role="dialog"
      aria-modal
      aria-labelledby="video-tour-title"
      onClick={onClose}
    >
      <div
        className="flex max-h-[min(90dvh,calc(100dvh-2rem))] w-[min(92vw,clamp(900px,59vw,1440px))] min-w-[min(100%,20rem)] flex-col overflow-hidden rounded-[20px] border border-line bg-surface shadow-[var(--shadow-card)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-line px-5 py-4">
          <h2 id="video-tour-title" className="font-display font-semibold text-lg">
            Lampros Healthcare Tour
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-ink-soft hover:text-ink text-sm font-semibold px-3 py-1 rounded-full border border-line"
          >
            Close
          </button>
        </div>
        <div className="relative w-full aspect-video min-h-[12.5rem] bg-canvas sm:min-h-[17.5rem]">
          {embedUrl ? (
            <iframe
              title="Lampros product tour"
              src={embedUrl}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
              <div className="max-w-md">
                <p className="text-ink-soft text-[15px] leading-relaxed mb-5">
                  Your hosted walkthrough video goes here. Until then, explore the
                  interactive demo below — the same flow, step by step.
                </p>
                <Link
                  href="#seeit"
                  onClick={onClose}
                  className="inline-flex items-center justify-center font-semibold text-[15px] px-6 py-3 rounded-full bg-[var(--btn-primary-bg)] !text-[var(--btn-primary-fg)] shadow-[var(--btn-primary-shadow)]"
                >
                  Watch interactive demo
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}

export function VideoTourTrigger({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex w-fit max-w-full shrink-0 cursor-pointer items-center gap-2.5 font-semibold text-[clamp(15px,0.99vw,20px)] text-ink border border-line bg-[var(--btn-ghost-fill)] px-[clamp(20px,1.32vw,26px)] py-[clamp(15px,0.99vw,20px)] rounded-full hover:border-ink-faint transition-colors ${className}`}
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-white">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z" />
          </svg>
        </span>
        Watch the tour
      </button>
      <VideoTourModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
