'use client'
import { useState } from 'react'

export default function HoverTracker({ text }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  return (
    <div
      className="relative inline-block"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
        setVisible(true)
      }}
      onMouseLeave={() => setVisible(false)}
    >
      <span className="relative z-10">{text}</span>
      {visible && (
        <span
          className="absolute z-99 pointer-events-none text-black text-xs font-semibold bg-[#FFD506] px-3 py-2 rounded-xl transition-all duration-200"
          style={{
            top: pos.y + 30,
            left: pos.x + 50,
            transform: 'translate(-50%, -50%)',
            whiteSpace: 'nowrap',
          }}
        >
          {text}
        </span>
      )}
    </div>
  )
}
