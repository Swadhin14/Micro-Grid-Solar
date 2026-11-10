import React from "react";
import { AlertCircle } from "lucide-react";

export function DemoBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-500/15 text-amber-800 border border-amber-300 dark:border-amber-700/50 ${className}`}
      title="All generation, load, and battery scheduling outputs are calculated using verified physics models in demo simulation mode."
    >
      <AlertCircle className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
      <span className="tracking-wide">DEMO / SIMULATED DATA</span>
    </div>
  );
}
