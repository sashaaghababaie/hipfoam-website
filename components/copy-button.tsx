import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function CopyButton({ textToCopy }: { textToCopy: string }) {
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    if (!copy) return;
    const timer = setTimeout(() => setCopy(false), 500);
    return () => clearTimeout(timer);
  }, [copy]);

  return (
    <CopyToClipboard text={textToCopy} onCopy={() => setCopy(true)}>
      <div
        className={`w-10 flex items-center justify-center text-sm text-hip-black rounded-lg border border-hip-black ${copy ? "opacity-0 transition-all duration-700" : "opacity-100"} hover:text-zinc-500 hover:border-zinc-500 cursor-pointer`}
      >
        {!copy ? "کپی" : <CheckMark />}
      </div>
    </CopyToClipboard>
  );
}

const CheckMark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);
