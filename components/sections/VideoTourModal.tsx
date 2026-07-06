"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { productTourVideoUrl } from "@/lib/home-content";

export function VideoTourModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
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

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[50] flex items-center justify-center p-4 sm:p-6 bg-ink/55 backdrop-blur-sm"
      role="dialog"
      aria-modal
      aria-labelledby="video-tour-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[900px] bg-surface border border-line rounded-[20px] shadow-[var(--shadow-card)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-line">
          <h2 id="video-tour-title" className="font-display font-semibold text-lg">
            90-second clinic tour
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-ink-soft hover:text-ink text-sm font-semibold px-3 py-1 rounded-full border border-line"
          >
            Close
          </button>
        </div>
        <div className="aspect-video bg-canvas flex items-center justify-center p-8 text-center">
          {productTourVideoUrl ? (
            <iframe
              title="Lampros product tour"
              src={productTourVideoUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
}

export function VideoTourTrigger({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex w-fit max-w-full shrink-0 items-center gap-2.5 font-semibold text-[15px] text-ink border border-line bg-[var(--btn-ghost-fill)] px-5 py-[15px] rounded-full hover:border-ink-faint transition-colors ${className}`}
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-white">


          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z" fill="#ffffff" />
          </svg>
        </span>
        Watch the tour
      </button>
      <VideoTourModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
