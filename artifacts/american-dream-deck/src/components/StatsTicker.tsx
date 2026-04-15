import React from 'react';

export default function StatsTicker() {
  return (
    <div className="w-full bg-[#111] border-y border-[#C9A84C] overflow-hidden flex items-center h-12 relative z-20">
      <div className="flex whitespace-nowrap animate-ticker">
        <span className="text-sm font-bold text-[#C9A84C] tracking-[0.2em] uppercase mx-4">
          40M ANNUAL VISITORS  ·  450+ TENANTS  ·  3M SQ FT  ·  8 MILES FROM NYC  ·  $5B INVESTED  ·  500+ ANNUAL EVENTS  ·  8 MAJOR ATTRACTIONS  ·  #1 NORTHEAST DESTINATION  ·  
        </span>
        <span className="text-sm font-bold text-[#C9A84C] tracking-[0.2em] uppercase mx-4">
          40M ANNUAL VISITORS  ·  450+ TENANTS  ·  3M SQ FT  ·  8 MILES FROM NYC  ·  $5B INVESTED  ·  500+ ANNUAL EVENTS  ·  8 MAJOR ATTRACTIONS  ·  #1 NORTHEAST DESTINATION  ·  
        </span>
      </div>
    </div>
  );
}