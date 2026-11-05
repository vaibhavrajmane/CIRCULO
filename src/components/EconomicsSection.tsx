import React, { useState } from 'react';
import { Users, Factory, Briefcase, TrendingUp, Volume2, Calculator } from 'lucide-react';
import { NARRATION_SECTIONS } from '../data/narrations';
import { NarrationSection } from '../types';

interface EconomicsSectionProps {
  onPlayNarration: (sec: NarrationSection) => void;
  activeNarrationId: string | null;
  isPlayingAudio: boolean;
}

export const EconomicsSection: React.FC<EconomicsSectionProps> = ({
  onPlayNarration,
  activeNarrationId,
  isPlayingAudio
}) => {
  const [hubTonnage, setHubTonnage] = useState<number>(15);
  const narration = NARRATION_SECTIONS.find((s) => s.id === 'economics')!;
  const isNarrating = activeNarrationId === 'economics' && isPlayingAudio;

  const farmerExtraIncomePerHub = hubTonnage * 1000 * 2.5; 
  const recyclerSavingsPerHub = hubTonnage * 1000 * 0.75;
  const employeeWagesPerHub = Math.min(65000, Math.max(22000, Math.round(hubTonnage * 2800)));
  const startupMonthlyMargin = (hubTonnage * 1000 * 2.5 * 0.07) + 12500;

  return (
    <section id="economics" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header & Voice Tour */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 text-xs text-stone-600">
            <span className="text-emerald-800 font-bold uppercase tracking-wider font-mono">04. Multi-Stakeholder Economics</span>
            <span aria-hidden="true">·</span>
            <span>Financial Model & Unit Economics</span>
            <span aria-hidden="true">·</span>
            <span>Realized Income Distribution</span>
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
            <span>{isNarrating ? 'Playing Economics Audio...' : 'Listen to Value Model'}</span>
          </button>
        </div>

        {/* Headline */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-stone-900 mb-4">
            Four-Way Value Creation: A Self-Sustaining Rural Bio-Economy
          </h2>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
            CIRCULO aligns financial incentives so every player profits. We eliminate predatory middleman cuts, ensuring farmers gain cash above MSP while factories receive verified high-GCV biomass.
          </p>
        </div>

        {/* 4 Stakeholder Cards Grid (Liquid Glass Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Stakeholder 1: The Farmer */}
          <div className="liquid-glass-card rounded-2xl p-6 flex flex-col justify-between border border-white/80">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 text-emerald-800 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-emerald-800 uppercase tracking-wider font-bold mb-1">Primary Producer</div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">The Smallholder Farmer</h3>
              <p className="text-xs text-stone-700 leading-relaxed mb-4">
                Transforms an expensive disposal burden into immediate liquid income. Selling baled straw offsets machinery rental costs and avoids punitive fines.
              </p>
              <ul className="space-y-2 text-xs text-stone-700 border-t border-stone-200/80 pt-3">
                <li className="flex justify-between">
                  <span>Net Return / Hectare:</span>
                  <span className="text-emerald-800 font-mono font-bold">₹59,025/ha (+21%)</span>
                </li>
                <li className="flex justify-between">
                  <span>Tillage Diesel Saved:</span>
                  <span className="text-stone-900 font-mono font-bold">₹1,000/ha</span>
                </li>
                <li className="flex justify-between">
                  <span>7-Year ICAR Yield Gain:</span>
                  <span className="text-emerald-800 font-mono font-bold">+65% FFP Uplift</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-500">
              Direct payout via platform escrow upon gate QA pass.
            </div>
          </div>

          {/* Stakeholder 2: The Recycler / Pellet Factory */}
          <div className="liquid-glass-card rounded-2xl p-6 flex flex-col justify-between border border-white/80">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 text-amber-800 flex items-center justify-center mb-4">
                <Factory className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-amber-800 uppercase tracking-wider font-bold mb-1">Off-Taker / Processor</div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">Pellet & Natural Plants</h3>
              <p className="text-xs text-stone-700 leading-relaxed mb-4">
                Procure quality-certified biomass without moisture adulteration or clinker-causing high ash. Direct farm-gate sourcing cuts procurement overhead.
              </p>
              <ul className="space-y-2 text-xs text-stone-700 border-t border-stone-200/80 pt-3">
                <li className="flex justify-between">
                  <span>Procurement Cost:</span>
                  <span className="text-amber-800 font-mono font-bold">-18% Middleman Cut</span>
                </li>
                <li className="flex justify-between">
                  <span>Boiler Rejection Rate:</span>
                  <span className="text-stone-900 font-mono font-bold">Down to &lt;2%</span>
                </li>
                <li className="flex justify-between">
                  <span>Ash Clinker Savings:</span>
                  <span className="text-amber-800 font-mono font-bold">₹4.5L / Shutdown</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-500">
              Guaranteed BIS and CAQM boiler compliance.
            </div>
          </div>

          {/* Stakeholder 3: Centre Staff & Gig Logistics */}
          <div className="liquid-glass-card rounded-2xl p-6 flex flex-col justify-between border border-white/80">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 text-blue-800 flex items-center justify-center mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-blue-800 uppercase tracking-wider font-bold mb-1">Rural Youth Employment</div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">Hub & Logistics Operators</h3>
              <p className="text-xs text-stone-700 leading-relaxed mb-4">
                Creates dignified decentralized technical employment at Custom Hiring Centres (CHCs) for baler operation, transport, and sensor verification.
              </p>
              <ul className="space-y-2 text-xs text-stone-700 border-t border-stone-200/80 pt-3">
                <li className="flex justify-between">
                  <span>Monthly Wages:</span>
                  <span className="text-blue-800 font-mono font-bold">₹15,000–₹22,000</span>
                </li>
                <li className="flex justify-between">
                  <span>Job Category:</span>
                  <span className="text-stone-900 font-mono font-bold">Certified Hub Operator</span>
                </li>
                <li className="flex justify-between">
                  <span>National Target:</span>
                  <span className="text-blue-800 font-mono font-bold">10M Bio-Jobs 2050</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-500">
              Funded through Agriculture Infrastructure Fund (AIF).
            </div>
          </div>

          {/* Stakeholder 4: CIRCULO Startup Revenue */}
          <div className="liquid-glass-card rounded-2xl p-6 flex flex-col justify-between border border-white/80">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 text-purple-800 flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-purple-800 uppercase tracking-wider font-bold mb-1">Sustainable Venture</div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">CIRCULO Platform Economics</h3>
              <p className="text-xs text-stone-700 leading-relaxed mb-4">
                Scalable B2B SaaS + marketplace take-rate model. Low capital intensity enables rapid franchising across FPO networks and sugar mills.
              </p>
              <ul className="space-y-2 text-xs text-stone-700 border-t border-stone-200/80 pt-3">
                <li className="flex justify-between">
                  <span>B2B Take Rate:</span>
                  <span className="text-purple-800 font-mono font-bold">5%–8% Take Fee</span>
                </li>
                <li className="flex justify-between">
                  <span>Enterprise SaaS:</span>
                  <span className="text-stone-900 font-mono font-bold">₹10K–₹15K/mo per Plant</span>
                </li>
                <li className="flex justify-between">
                  <span>Hub Payback:</span>
                  <span className="text-purple-800 font-mono font-bold">12–18 Months</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-500">
              Commercial Hub CAPEX: ₹3.0–₹4.5 Lakh.
            </div>
          </div>
        </div>

        {/* Interactive Multi-Stakeholder Financial Simulator (Liquid Glass) */}
        <div className="liquid-glass rounded-2xl p-6 sm:p-8 border border-white/80 shadow-md shadow-emerald-950/5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-mono text-stone-600 uppercase tracking-wider flex items-center gap-1.5 font-bold">
                <Calculator className="w-3.5 h-3.5 text-emerald-700" />
                <span>Decentralized Hub Financial Simulator</span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mt-1">Live Monthly Cash Flow Distribution per Hub</h3>
            </div>
            <span className="text-xs text-stone-600 font-mono">Calibrated to Maharashtra Pilot Data</span>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="hub-tonnage-input" className="text-xs font-bold text-stone-800">
                Monthly Handled Residue Volume (Tonnes / Month):
              </label>
              <span className="text-base font-black text-emerald-800 font-mono tabular-nums">
                {hubTonnage} Tonnes / Month ({(hubTonnage * 1000 / 26).toFixed(0)} kg/day)
              </span>
            </div>
            <input
              id="hub-tonnage-input"
              type="range"
              min="5"
              max="50"
              step="1"
              value={hubTonnage}
              onChange={(e) => setHubTonnage(Number(e.target.value))}
              className="w-full accent-emerald-600 bg-stone-200 h-2.5 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-stone-500 font-mono mt-1">
              <span>6 T/mo (Conservative)</span>
              <span>15 T/mo (Base Case)</span>
              <span>30 T/mo (Cluster)</span>
              <span>50 T/mo</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-stone-200">
            <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
              <div className="text-xs text-stone-500 font-medium mb-1">Farmer Gross Payout</div>
              <div className="text-xl font-black text-emerald-700 font-mono tabular-nums">
                ₹{farmerExtraIncomePerHub.toLocaleString()}
              </div>
              <div className="text-[10px] text-stone-400 mt-1">@ ₹2.5/kg baled farm gate</div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
              <div className="text-xs text-stone-500 font-medium mb-1">Factory Cost Savings</div>
              <div className="text-xl font-black text-amber-700 font-mono tabular-nums">
                ₹{recyclerSavingsPerHub.toLocaleString()}
              </div>
              <div className="text-[10px] text-stone-400 mt-1">Direct QA procurement saving</div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
              <div className="text-xs text-stone-500 font-medium mb-1">Local Rural Wages</div>
              <div className="text-xl font-black text-blue-700 font-mono tabular-nums">
                ₹{employeeWagesPerHub.toLocaleString()}
              </div>
              <div className="text-[10px] text-stone-400 mt-1">Baling, loading & testing</div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
              <div className="text-xs text-stone-500 font-medium mb-1">Startup Gross Margin</div>
              <div className="text-xl font-black text-purple-700 font-mono tabular-nums">
                ₹{Math.round(startupMonthlyMargin).toLocaleString()}
              </div>
              <div className="text-[10px] text-stone-400 mt-1">7% Fee + ₹12.5K SaaS sub</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
