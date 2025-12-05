import React, { useState, useEffect } from "react";

export default function DynamicMultiRowSlider({ items = [], speed = 30 }) {
  const [topRow, setTopRow] = useState(items);
  const [bottomRow, setBottomRow] = useState(items);

  useEffect(() => {
    const interval = setInterval(() => {
      setTopRow([...items].sort(() => Math.random() - 0.5));
      setBottomRow([...items].sort(() => Math.random() - 0.5));
    }, speed * 5000);

    return () => clearInterval(interval);
  }, [items, speed]);

  const renderTrack = (rowItems, rowKey) => (
    <>
      {rowItems.map((i) => (
        <div className="logo-item" key={`${rowKey}-${i.id}`}>
          <img src={i.img} alt={i.label} />
          <span>{i.label}</span>
        </div>
      ))}
      {rowItems.map((i) => (
        <div className="logo-item" key={`${rowKey}-d-${i.id}`}>
          <img src={i.img} alt={i.label} />
          <span>{i.label}</span>
        </div>
      ))}
    </>
  );

  return (
    <div className="multi-logo-slider">
      <div className="logo-row">
        <div className="logo-track" style={{ "--speed": `${speed}s` }}>
          {renderTrack(topRow, "r1")}
        </div>
      </div>
      <div className="logo-row reverse">
        <div className="logo-track" style={{ "--speed": `${speed}s` }}>
          {renderTrack(bottomRow, "r2")}
        </div>
      </div>

      <style>{`
        .multi-logo-slider { width:100%; overflow:hidden; padding:16px 0; background: #090A0E; }
        .logo-row { overflow:hidden; margin-bottom:16px; }
        .logo-track { display:flex; gap:16px; width:max-content; animation:scroll var(--speed) linear infinite; }
        .logo-row.reverse .logo-track { animation-direction: reverse; }
        .logo-item { display:flex; align-items:center; gap:8px; padding:14px 24px 14px 16px; background: #0C0D12; border-radius:40px; border:1px solid rgba(34, 38, 43, 1); white-space:nowrap; }
        .logo-item img { width:48px; height:48px; object-fit:contain; border-radius:50%; margin-right:12px; }
        .logo-item span { font-size:24px; color:#fff; font-weight:600; line-height:33px; fontstyle:semibold; verticaltrim: Cap height; }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}
