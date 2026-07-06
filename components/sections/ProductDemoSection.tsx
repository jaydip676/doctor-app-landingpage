"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { WideSection } from "@/components/layout/SectionShell";
import { getLightMotionSnapshot } from "@/lib/motion-preference";

const chapters = [
  "Book",
  "Queue",
  "History",
  "Prescribe",
  "Collect",
  "Analyse",
];

const urls = [
  "appointments",
  "appointments",
  "patients",
  "prescriptions",
  "billing",
  "analytics",
];

const navItems = [
  { label: "Appointments", step: 0 },
  { label: "Patients", step: 2 },
  { label: "Prescriptions", step: 3 },
  { label: "Billing", step: 4 },
  { label: "Analytics", step: 5 },
];

function Avatar({ children }: { children: string }) {
  return (
    <div className="w-[30px] h-[30px] rounded-full bg-teal-tint text-teal-ink flex items-center justify-center text-xs font-semibold">
      {children}
    </div>
  );
}

function Badge({
  children,
  variant = "ok",
}: {
  children: React.ReactNode;
  variant?: "ok" | "wait" | "coral";
}) {
  const styles = {
    ok: "bg-teal-tint text-teal-ink",
    wait: "bg-[#fbf0da] text-[#9a6b00]",
    coral: "bg-[#ffebe4] text-[#c2410c]",
  };
  return (
    <span
      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

export function ProductDemoSection() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [url, setUrl] = useState(urls[0]);
  const [queueStatus, setQueueStatus] = useState("Waiting");
  const [showBookRow, setShowBookRow] = useState(false);
  const [bookRowHighlight, setBookRowHighlight] = useState(false);
  const [showRxBadge, setShowRxBadge] = useState(false);
  const [showPaidBadge, setShowPaidBadge] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const rootRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<SVGSVGElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const bookBtnRef = useRef<HTMLButtonElement>(null);

  const setStepState = useCallback((i: number) => {
    setStep(i);
    setUrl(urls[i] ?? urls[0]);
  }, []);

  useEffect(() => {
    const reduce = getLightMotionSnapshot();
    if (reduce) {
      setShowBookRow(true);
      return;
    }

    const main = mainRef.current;
    const cursor = cursorRef.current;
    if (!main || !cursor) return;

    const center = (el: Element) => {
      const pr = main.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      return {
        x: r.left - pr.left + r.width / 2 - 11,
        y: r.top - pr.top + r.height / 2 - 2,
      };
    };

    const moveCursor = (el: Element, tl: gsap.core.Timeline, pos: number | string) => {
      const c = center(el);
      tl.to(cursor, { left: c.x, top: c.y, duration: 0.7, ease: "power2.inOut" }, pos);
    };

    const clickAt = (tl: gsap.core.Timeline, pos: string) => {
      tl.call(() => {
        cursor.classList.remove("demo-click");
        void cursor.getBoundingClientRect();
        cursor.classList.add("demo-click");
      }, undefined, pos);
    };

    const tl = gsap.timeline({
      repeat: -1,
      onUpdate: () => setProgress(tl.progress() * 100),
    });

    tl.call(() => {
      setStepState(0);
      setShowBookRow(false);
      setShowRxBadge(false);
      setShowPaidBadge(false);
      setBookRowHighlight(false);
      setQueueStatus("Waiting");
    });
    if (bookBtnRef.current) moveCursor(bookBtnRef.current, tl, 0.2);
    clickAt(tl, "+=0.05");
    tl.call(() => {
      setShowBookRow(true);
      setBookRowHighlight(true);
      setToast("Appointment booked · SMS sent");
    }, undefined, "+=0.15");
    tl.to({}, { duration: 1.6, onComplete: () => setToast(null) });

    tl.call(() => {
      setStepState(1);
      setQueueStatus("Waiting");
    });
    tl.to({}, { duration: 0.9 });
    tl.call(() => {
      setQueueStatus("In room");
      setToast("Riya checked in");
    });
    tl.to({}, { duration: 1.4, onComplete: () => setToast(null) });

    tl.call(() => setStepState(2));
    tl.to({}, { duration: 1.5 });

    tl.call(() => setStepState(3));
    tl.to({}, { duration: 0.8 });
    tl.call(() => {
      setShowRxBadge(true);
      setToast("Prescription signed · PDF ready");
    });
    tl.to({}, { duration: 1.4, onComplete: () => setToast(null) });

    tl.call(() => setStepState(4));
    tl.to({}, { duration: 0.5 });
    tl.call(() => {
      setShowPaidBadge(true);
      setToast("₹1,220 received · UPI");
    });
    tl.to({}, { duration: 1.5, onComplete: () => setToast(null) });

    tl.call(() => setStepState(5));
    tl.to({}, { duration: 2 });

    timelineRef.current = tl;

    const stage = rootRef.current?.querySelector(".demo-stage");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!playing) return;
          if (e.isIntersecting) tl.play();
          else tl.pause();
        });
      },
      { threshold: 0.15 },
    );
    if (stage) io.observe(stage);

    return () => {
      io.disconnect();
      tl.kill();
    };
  }, [playing, setStepState]);

  const onChapterClick = (i: number) => {
    const tl = timelineRef.current;
    if (tl) tl.progress(i / 6);
    setStepState(i);
  };

  const togglePlay = () => {
    const tl = timelineRef.current;
    setPlaying((p) => {
      const next = !p;
      if (tl) {
        if (next) tl.play();
        else tl.pause();
      }
      return next;
    });
  };

  return (
    <WideSection id="seeit" alt>
      <div ref={rootRef}>
        <div className="text-center max-w-[48ch] mx-auto mb-3.5 motion-reveal">
          <div className="text-[13px] tracking-[0.04em] text-ink-soft mb-3.5">
            — See it in action
          </div>
          <h2 className="font-display font-semibold text-[clamp(2rem,4.4vw,3.75rem)] tracking-[-0.03em] leading-[1.02]">
            One patient, start to finish.
          </h2>
          <p className="text-ink-soft text-base mt-3 leading-normal">
            Not static screenshots — watch a real visit flow through Lampros, end
            to end.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center my-[30px] mb-[22px] motion-reveal">
          {chapters.map((label, i) => (
            <button
              key={label}
              type="button"
              onClick={() => onChapterClick(i)}
              className={`flex items-center gap-2 text-[13px] font-semibold px-4 py-2 rounded-full border transition cursor-pointer ${
                step === i
                  ? "text-ink border-line bg-surface"
                  : "text-ink-faint border-transparent"
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full border flex items-center justify-center text-[11px] ${
                  step === i
                    ? "bg-teal border-teal text-white"
                    : "border-line"
                }`}
              >
                {i + 1}
              </span>
              {label}
            </button>
          ))}
        </div>

        <div className="demo-stage relative border border-line rounded-[20px] bg-surface shadow-[var(--shadow-card)] overflow-hidden max-w-[1000px] mx-auto motion-reveal">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-[var(--app-chrome)]">
            <i className="w-2.5 h-2.5 rounded-full bg-line" />
            <i className="w-2.5 h-2.5 rounded-full bg-line" />
            <i className="w-2.5 h-2.5 rounded-full bg-line" />
            <span className="ml-2.5 text-xs text-ink-faint font-mono bg-canvas px-3 py-1 rounded-md">
              app.lamprosclinic.in / {url}
            </span>
            <span className="ml-auto text-[11px] font-bold tracking-widest text-teal-ink flex items-center gap-1.5">
              <span className="w-[7px] h-[7px] rounded-full bg-teal animate-[lampros-live-pulse_1.6s_infinite]" />
              LIVE DEMO
            </span>
          </div>
          <div className="grid grid-cols-1 min-[680px]:grid-cols-[188px_1fr] min-h-[420px]">
            <aside className="hidden min-[680px]:block border-r border-line p-4 bg-[var(--demo-sidebar)]">
              <div className="font-display font-bold text-base mb-4 pl-1.5">
                Lampros<b className="text-teal">.</b>
              </div>
              {navItems.map((n) => (
                <div
                  key={n.label}
                  className={`flex items-center gap-2 text-[13px] px-2.5 py-2 rounded-lg mb-0.5 ${
                    step === n.step
                      ? "bg-teal-tint text-teal-ink font-semibold"
                      : "text-ink-soft"
                  }`}
                >
                  <span className="w-3.5 h-3.5 rounded bg-current opacity-50" />
                  {n.label}
                </div>
              ))}
            </aside>
            <div ref={mainRef} className="p-6 relative overflow-hidden min-h-[360px]">
              {step === 0 && (
                <div>
                  <div className="font-display font-semibold text-[19px]">
                    Book appointment
                  </div>
                  <div className="text-[13px] text-ink-soft mb-4">
                    Tuesday · Dr. Mehta
                  </div>
                  {showBookRow ? (
                    <div
                      className={`flex items-center justify-between px-3.5 py-3 border rounded-[11px] text-[13.5px] mb-2 bg-surface ${
                        bookRowHighlight
                          ? "border-teal shadow-[0_0_0_3px_var(--teal-tint)]"
                          : "border-line"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Avatar>RS</Avatar>
                        Riya Shah · 10:00
                      </div>
                      <Badge>New</Badge>
                    </div>
                  ) : null}
                  <div className="flex items-center justify-between px-3.5 py-3 border border-line rounded-[11px] text-[13.5px] mb-2 bg-surface">
                    <div className="flex items-center gap-2.5">
                      <Avatar>AK</Avatar>
                      Arjun Kumar · 10:15
                    </div>
                    <Badge>Booked</Badge>
                  </div>
                  <div className="flex items-center justify-between px-3.5 py-3 border border-line rounded-[11px] text-[13.5px] mb-2 bg-surface">
                    <div className="flex items-center gap-2.5">
                      <Avatar>MP</Avatar>
                      Meera Patel · 10:30
                    </div>
                    <Badge>Booked</Badge>
                  </div>
                  <button
                    ref={bookBtnRef}
                    type="button"
                    className="w-full flex justify-center px-3.5 py-3 border border-teal rounded-[11px] text-teal-ink font-semibold text-[13.5px] bg-surface"
                  >
                    + Book new appointment
                  </button>
                </div>
              )}
              {step === 1 && (
                <div>
                  <div className="font-display font-semibold text-[19px]">
                    Today&apos;s queue
                  </div>
                  <div className="text-[13px] text-ink-soft mb-4">
                    18 visits · live status
                  </div>
                  <div className="flex items-center justify-between px-3.5 py-3 border border-line rounded-[11px] text-[13.5px] mb-2 bg-surface">
                    <div className="flex items-center gap-2.5">
                      <Avatar>RS</Avatar>
                      Riya Shah · 10:00
                    </div>
                    <Badge variant={queueStatus === "Waiting" ? "wait" : "ok"}>
                      {queueStatus}
                    </Badge>
                  </div>
                </div>
              )}
              {step === 2 && (
                <div>
                  <div className="font-display font-semibold text-[19px]">
                    Riya Shah · 34
                  </div>
                  <div className="text-[13px] text-ink-soft mb-4">
                    Hypertension · 3 past visits · last seen 12 Mar
                  </div>
                  {[
                    ["BP trending down", "Improving"],
                    ["HbA1c due", "Action"],
                    ["Lipid report uploaded", "On file"],
                  ].map(([label, status]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between px-3.5 py-3 border border-line rounded-[11px] text-[13.5px] mb-2 bg-surface"
                    >
                      <span>{label}</span>
                      <Badge variant={status === "Action" ? "coral" : "ok"}>
                        {status}
                      </Badge>
                    </div>
                  ))}
                </div>
              )}
              {step === 3 && (
                <div>
                  <div className="font-display font-semibold text-[19px]">
                    New prescription
                  </div>
                  <div className="text-[13px] text-ink-soft mb-4">
                    Riya Shah · auto-filled from history
                  </div>
                  <div className="border border-line rounded-[11px] p-4 mb-2 bg-[var(--demo-sidebar)]">
                    {[
                      ["Amlodipine 5mg", "1-0-0 · 30 days"],
                      ["Telmisartan 40mg", "0-0-1 · 30 days"],
                      ["Atorvastatin 10mg", "0-0-1 · 30 days"],
                    ].map(([med, dose]) => (
                      <div
                        key={med}
                        className="flex justify-between text-[13.5px] py-2 border-b border-dashed border-line last:border-0"
                      >
                        <span>{med}</span>
                        <span className="text-ink-soft">{dose}</span>
                      </div>
                    ))}
                  </div>
                  {showRxBadge ? (
                    <Badge>✓ Signed & PDF ready</Badge>
                  ) : null}
                </div>
              )}
              {step === 4 && (
                <div>
                  <div className="font-display font-semibold text-[19px]">
                    Invoice · #LMP-2041
                  </div>
                  <div className="text-[13px] text-ink-soft mb-4">
                    Riya Shah · 18 Mar
                  </div>
                  <div className="border border-line rounded-[11px] overflow-hidden">
                    {[
                      ["Consultation", "₹500"],
                      ["ECG", "₹300"],
                      ["Pharmacy", "₹420"],
                    ].map(([l, v]) => (
                      <div
                        key={l}
                        className="flex justify-between text-[13.5px] px-4 py-2.5 border-b border-line"
                      >
                        <span>{l}</span>
                        <span>{v}</span>
                      </div>
                    ))}
                    <div className="flex justify-between font-bold text-[13.5px] px-4 py-2.5 bg-[var(--app-chrome)]">
                      <span>Total</span>
                      <span>₹1,220</span>
                    </div>
                  </div>
                  {showPaidBadge ? (
                    <div className="mt-3">
                      <Badge>✓ Paid · UPI</Badge>
                    </div>
                  ) : null}
                </div>
              )}
              {step === 5 && (
                <div>
                  <div className="font-display font-semibold text-[19px]">
                    This week
                  </div>
                  <div className="text-[13px] text-ink-soft mb-4">
                    Practice performance
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      ["126", "visits"],
                      ["₹1.4L", "collected"],
                      ["8%", "no-shows"],
                    ].map(([v, l]) => (
                      <div
                        key={l}
                        className="border border-line rounded-xl p-3.5"
                      >
                        <b className="block font-display text-[26px] font-semibold">
                          {v}
                        </b>
                        <span className="text-xs text-ink-soft">{l}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-end gap-2.5 h-[150px] p-3.5 border border-line rounded-xl">
                    {[46, 62, 54, 78, 70, 88, 60].map((h) => (
                      <i
                        key={h}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-teal-ink to-teal opacity-85"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {toast ? (
                <div className="absolute right-6 bottom-5 bg-[var(--demo-toast-bg)] text-[var(--demo-toast-fg)] text-[13px] font-medium px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-card border border-line z-[6]">
                  <span className="w-[18px] h-[18px] rounded-full bg-teal flex items-center justify-center text-[11px]">
                    ✓
                  </span>
                  {toast}
                </div>
              ) : null}

              <svg
                ref={cursorRef}
                className="demo-cursor absolute z-[8] w-[22px] h-[22px] pointer-events-none drop-shadow-md text-[var(--demo-cursor-fill)] [&.demo-click]:after:content-[''] [&.demo-click]:after:absolute [&.demo-click]:after:-left-2 [&.demo-click]:after:-top-2 [&.demo-click]:after:w-10 [&.demo-click]:after:h-10 [&.demo-click]:after:rounded-full [&.demo-click]:after:border-2 [&.demo-click]:after:border-teal [&.demo-click]:after:animate-[lampros-cursor-ring_0.5s_ease-out]"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="var(--surface)"
                strokeWidth="1.4"
              >
                <path d="M5 3l15 9-6 1.5L18 20l-3 1.5L11 14l-4 4z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3.5 mt-5 motion-reveal">
          <button
            type="button"
            onClick={togglePlay}
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-ink-soft px-4 py-2 rounded-full border border-line bg-surface"
          >
            <span>{playing ? "❚❚" : "►"}</span>
            <span>{playing ? "Pause" : "Play"}</span>
          </button>
          <div className="w-[180px] h-1 rounded bg-line overflow-hidden">
            <i
              className="block h-full bg-teal rounded transition-[width]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </WideSection>
  );
}
