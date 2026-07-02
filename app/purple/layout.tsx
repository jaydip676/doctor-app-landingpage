import type { ReactNode } from "react";

/** Apply indigo tokens before paint to avoid a flash of teal on /purple */
export default function PurpleLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.setAttribute("data-theme","indigo");`,
        }}
      />
      {children}
    </>
  );
}
