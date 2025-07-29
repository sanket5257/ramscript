import { useState } from "react";

export default function HoverTracker({ text }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <span className="relative z-10">{text}</span>
      {visible && (
        <span
          className="absolute z-99 pointer-events-none text-black text-xs font-semibold bg-[#FFD506] px-3 py-2 rounded-xl transition-all duration-200"
          style={{
            transform: "translate(-50%, -50%)",
            whiteSpace: "nowrap",
          }}
        >
          {text}
        </span>
      )}
    </div>
  );
}
