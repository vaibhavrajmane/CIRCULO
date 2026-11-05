import React, { useState } from 'react';
import { Droplets, Wind, Volume2 } from 'lucide-react';
import { NARRATION_SECTIONS } from '../data/narrations';
import { NarrationSection } from '../types';

interface StatisticsSectionProps {
  onPlayNarration: (sec: NarrationSection) => void;
  activeNarrationId: string | null;
  isPlayingAudio: boolean;
}

export const StatisticsSection: React.FC<StatisticsSectionProps> = ({
  onPlayNarration,
  activeNarrationId,
  isPlayingAudio
}) => {
  const [tonnesBurned, setTonnesBurned] = useState<number>(100);
  const narration = NARRATION_SECTIONS.find((s) => s.id === 'statistics')!;
  const isNarrating = activeNarrationId === 'statistics' && isPlayingAudio;

  // Real MoEF / ICAR emission coefficients per tonne of residue
  const co2EmissionsKg = tonnesBurned * 1460;
  const pmEmissionsKg = tonnesBurned * 13;
  const nitrogenLostKg = tonnesBurned * 5.5;
  const potentialFarmerRevenueInr = tonnesBurned * 2400;

  return (
    <section id="statistics" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Sub-header & Voice Tour */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 text-xs text-stone-600">
            <span className="text-emerald-800 font-bold uppercase tracking-wider font-mono">02. Empirical Reality</span>
            <span aria-hidden="true">·</span>
            <span>2024–2026 Statistical Data</span>
            <span aria-hidden="true">·</span>
            <span>MoEF, ICAR & NITI Aayog Benchmarks</span>
          </div>

          <button
            onClick={() => onPlayNarration(narration)}
            className={`px-3.5 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-2 transition-all ${
              isNarrating
                ? 'bg-amber-400 text-stone-900 font-bold border-amber-500 shadow-sm'
                : 'bg-white/90 text-stone-800 border-stone-200 hover:bg-stone-50 hover:text-emerald-800 shadow-xs'
            }`}
          >
            <Volume2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>{isNarrating ? 'Playing Data Narration...' : 'Listen to Statistical Toll'}</span>
          </button>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-stone-900 mb-4">
            The Staggering Scale: 230 Million Tonnes of Surplus Biomass
          </h2>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
            India generates up to 700 million tonnes of gross crop residue annually across 140.7 million hectares of net sown area. 
            Without structured B2B off-take, burning emits over 1.4 tonnes of CO₂ for every single tonne consumed.
          </p>
        </div>

        {/* Macro KPI Cards (Liquid Glass Cards with Crisp Dark Numbers) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="liquid-glass-card rounded-2xl p-5 border border-white/80">
            <div className="text-xs text-stone-600 font-semibold mb-1">Gross Annual Residue</div>
            <div className="text-2xl sm:text-3xl font-black text-stone-900 font-mono tabular-nums tracking-tight">
              350–700 MT
            </div>
            <div className="text-xs text-stone-500 mt-2">All major cereal & cash crops</div>
          </div>

          <div className="liquid-glass-card rounded-2xl p-5 border border-white/80">
            <div className="text-xs text-stone-600 font-semibold mb-1">Unutilized Surplus</div>
            <div className="text-2xl sm:text-3xl font-black text-amber-700 font-mono tabular-nums tracking-tight">
              ~230 MT/yr
            </div>
            <div className="text-xs text-stone-500 mt-2">Available for circular routing</div>
          </div>

          <div className="liquid-glass-card rounded-2xl p-5 border border-white/80">
            <div className="text-xs text-stone-600 font-semibold mb-1">CO₂ Per Tonne Burnt</div>
            <div className="text-2xl sm:text-3xl font-black text-rose-700 font-mono tabular-nums tracking-tight">
              1,460 kg
            </div>
            <div className="text-xs text-stone-500 mt-2">+13 kg Particulate Matter (PM)</div>
          </div>

          <div className="liquid-glass-card rounded-2xl p-5 border border-white/80">
            <div className="text-xs text-stone-600 font-semibold mb-1">Bio-Economy by 2050</div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-700 font-mono tabular-nums tracking-tight">
              $2 Trillion
            </div>
            <div className="text-xs text-stone-500 mt-2">10 Million jobs projected</div>
          </div>
        </div>

        {/* Agronomic Breakdown: The Triple Toll on Environment, Farm, and Farmer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Toll 1: Soil Physics & Agronomy (Liquid Glass) */}
          <div className="liquid-glass rounded-2xl p-6 sm:p-8 border border-white/80 shadow-md shadow-emerald-950/5">
            <h3 className="text-lg font-bold text-stone-900 mb-2 flex items-center gap-2">
              <Droplets className="w-5 h-5 text-blue-600" />
              <span>Agronomic Impact: Burning vs. Zero-Tillage Mulch</span>
            </h3>
            <p className="text-xs text-stone-600 mb-6">
              Empirical data from ICAR, ResearchGate, and Punjab Agricultural University studies on in-situ vs. ex-situ residue dynamics.
            </p>

            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-xs mb-1.5 font-medium">
                  <span className="text-stone-800">Soil Bulk Density (Compaction)</span>
                  <span className="text-rose-700 font-mono font-bold">1.78 g/cm³ (Burnt) vs 1.67 (Retained)</span>
                </div>
                <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden flex">
                  <div className="bg-emerald-600 h-full" style={{ width: '48%' }} title="Retained 1.67" />
                  <div className="bg-rose-500 h-full" style={{ width: '52%' }} title="Burnt 1.78" />
                </div>
                <span className="text-[11px] text-stone-600 mt-1 block">
                  Lower density under residue incorporation enhances root penetration and aeration.
                </span>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5 font-medium">
                  <span className="text-stone-800">Soil Moisture Retention</span>
                  <span className="text-emerald-700 font-mono font-bold">+9% to +36% improvement</span>
                </div>
                <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-600 h-full rounded-full" style={{ width: '74%' }} />
                </div>
                <span className="text-[11px] text-stone-600 mt-1 block">
                  Surface residue cuts evaporative loss, insulating soil temperature against heatwaves.
                </span>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5 font-medium">
                  <span className="text-stone-800">Net Farmer Return (Per Hectare)</span>
                  <span className="text-emerald-700 font-mono font-bold">₹59,025 (Advanced) vs ₹48,850 (Burning)</span>
                </div>
                <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden flex">
                  <div className="bg-stone-400 h-full" style={{ width: '45%' }} />
                  <div className="bg-emerald-600 h-full" style={{ width: '55%' }} />
                </div>
                <span className="text-[11px] text-stone-600 mt-1 block">
                  ₹10,175/ha direct uplift; Happy Seeder saves ₹1,000/ha in seedbed tillage diesel.
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Live Emissions Simulator (Liquid Glass) */}
          <div className="liquid-glass rounded-2xl p-6 sm:p-8 border border-white/80 shadow-md shadow-emerald-950/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                  <Wind className="w-5 h-5 text-amber-600" />
                  <span>Interactive Toll Calculator</span>
                </h3>
                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Real-Time Model
                </span>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="tonnes-input" className="text-xs font-bold text-stone-800">
                    Residue Batch Size (Tonnes of Straw):
                  </label>
                  <span className="text-base font-black text-amber-700 font-mono tabular-nums">
                    {tonnesBurned} Tonnes
                  </span>
                </div>
                <input
                  id="tonnes-input"
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={tonnesBurned}
                  onChange={(e) => setTonnesBurned(Number(e.target.value))}
                  className="w-full accent-emerald-600 bg-stone-200 h-2.5 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-stone-500 font-mono mt-1">
                  <span>10 Tonnes (Village)</span>
                  <span>500 Tonnes (Cluster)</span>
                  <span>1,000 Tonnes</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-xs">
                  <div className="text-[11px] text-stone-500 font-medium">Avoided CO₂ Emissions</div>
                  <div className="text-lg font-black text-rose-700 font-mono tabular-nums">
                    {(co2EmissionsKg / 1000).toFixed(1)} MT CO₂
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-xs">
                  <div className="text-[11px] text-stone-500 font-medium">Toxic Particulate Matter</div>
                  <div className="text-lg font-black text-amber-700 font-mono tabular-nums">
                    {pmEmissionsKg.toLocaleString()} kg PM2.5
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-xs">
                  <div className="text-[11px] text-stone-500 font-medium">Soil Nitrogen Conserved</div>
                  <div className="text-lg font-black text-emerald-700 font-mono tabular-nums">
                    {nitrogenLostKg.toLocaleString()} kg Organic N
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-xs">
                  <div className="text-[11px] text-stone-500 font-medium">Farmer Extra Cash Flow</div>
                  <div className="text-lg font-black text-stone-900 font-mono tabular-nums">
                    ₹{potentialFarmerRevenueInr.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 font-medium">
              <span className="font-bold text-emerald-800">CIRCULO Impact Guarantee:</span> Every 100 tonnes diverted via CIRCULO prevents 146 tonnes of CO₂ equivalent while unlocking ₹2,40,000 in rural income.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
