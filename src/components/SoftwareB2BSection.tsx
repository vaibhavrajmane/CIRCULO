import React, { useState } from 'react';
import { Activity, BarChart2, FileText, CheckCircle2, Volume2, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { NARRATION_SECTIONS } from '../data/narrations';
import { NarrationSection, RfqSubmission } from '../types';
import { CROP_RESIDUES } from '../data/cropResidues';

interface SoftwareB2BSectionProps {
  onPlayNarration: (sec: NarrationSection) => void;
  activeNarrationId: string | null;
  isPlayingAudio: boolean;
  selectedResidueFromExplorer?: string;
  onOpenBulkModal: () => void;
}

export const SoftwareB2BSection: React.FC<SoftwareB2BSectionProps> = ({
  onPlayNarration,
  activeNarrationId,
  isPlayingAudio,
  selectedResidueFromExplorer,
  onOpenBulkModal
}) => {
  const [activeTab, setActiveTab] = useState<'rqs' | 'humidity' | 'content' | 'rfq'>('rqs');

  const [selectedCrop, setSelectedCrop] = useState<string>(selectedResidueFromExplorer || 'wheat-straw');
  const [buyerType, setBuyerType] = useState<'boiler' | 'phytochemical' | 'biochar' | 'silica'>('boiler');
  const [inputMoisture, setInputMoisture] = useState<number>(14);
  const [inputAsh, setInputAsh] = useState<number>(9);
  const [inputImpurity, setInputImpurity] = useState<number>(2);

  const [elapsedHarvestHours, setElapsedHarvestHours] = useState<number>(24);
  const [ambientTemp, setAmbientTemp] = useState<number>(31);
  const [ambientRh, setAmbientRh] = useState<number>(42);

  const [rfqCrop, setRfqCrop] = useState<string>('Wheat Straw');
  const [rfqQuantity, setRfqQuantity] = useState<number>(3500);
  const [rfqAshMax, setRfqAshMax] = useState<number>(10);
  const [rfqRadius, setRfqRadius] = useState<number>(50);
  const [submittedRfq, setSubmittedRfq] = useState<RfqSubmission | null>(null);

  const narration = NARRATION_SECTIONS.find((s) => s.id === 'software')!;
  const isNarrating = activeNarrationId === 'software' && isPlayingAudio;

  const computeRqs = () => {
    let score = 90;
    if (buyerType === 'boiler') {
      if (inputMoisture > 15) score -= (inputMoisture - 15) * 3.5;
      if (inputAsh > 10) score -= (inputAsh - 10) * 4.0;
      score -= inputImpurity * 2.5;
    } else if (buyerType === 'phytochemical') {
      if (inputMoisture > 30) score -= (inputMoisture - 30) * 0.8;
      score -= inputImpurity * 4.0;
      if (inputAsh > 12) score -= (inputAsh - 12) * 1.5;
      score += 8;
    } else if (buyerType === 'biochar') {
      if (inputMoisture > 20) score -= (inputMoisture - 20) * 2.0;
      score -= inputImpurity * 1.5;
    } else if (buyerType === 'silica') {
      if (inputAsh >= 15) score += 10;
      score -= inputImpurity * 3.0;
    }
    return Math.max(15, Math.min(99, Math.round(score)));
  };

  const calculatedRqs = computeRqs();

  const initialMoisture = selectedCrop === 'citrus-peel-waste' ? 75 : selectedCrop === 'sugarcane-bagasse' ? 50 : 25;
  const dryingRate = 0.045 * (ambientTemp / 30) * (1 - ambientRh / 100);
  const currentSimulatedMoisture = Math.max(9, Math.round(initialMoisture * Math.exp(-dryingRate * elapsedHarvestHours) * 10) / 10);
  const optimalThreshold = 15.0;
  const isOptimal = currentSimulatedMoisture <= optimalThreshold;

  const currentResidueObj = CROP_RESIDUES.find((r) => r.id === selectedCrop) || CROP_RESIDUES[0];

  const handleCreateRfq = (e: React.FormEvent) => {
    e.preventDefault();
    const farmersAgg = Math.round(rfqQuantity / 25);
    const totalVal = rfqQuantity * 1000 * 2.65;
    const rfq: RfqSubmission = {
      id: `RFQ-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      buyerCompany: 'National Energy & Biorefinery Corp',
      residueType: rfqCrop,
      targetQuantityMt: rfqQuantity,
      maxAshPercent: rfqAshMax,
      minGcvKcalKg: 3500,
      targetPipeline: 'Bio-Energy',
      maxMoisturePercent: 15,
      deliveryState: 'Punjab & Western UP',
      radiusKm: rfqRadius,
      estimatedFarmersAggregated: farmersAgg,
      estimatedTotalValueInr: totalVal,
      status: 'Escrow Secured',
      timestamp: '2026-10-12 11:30 IST'
    };
    setSubmittedRfq(rfq);
  };

  return (
    <section id="b2b-software" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header & Voice Tour */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 text-xs text-stone-600">
            <span className="text-emerald-800 font-bold uppercase tracking-wider font-mono">06. Enterprise B2B Engine</span>
            <span aria-hidden="true">·</span>
            <span>Residue Quality Score (RQS) & Smart RFQ</span>
            <span aria-hidden="true">·</span>
            <span>SaaS Architecture</span>
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
            <span>{isNarrating ? 'Playing Software Audio...' : 'Listen to B2B Architecture'}</span>
          </button>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-stone-900 mb-4">
            The CIRCULO Software Suite: Enterprise Quality Verification & Bulk Trade
          </h2>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
            Industrial thermal boilers and natural product manufacturers cannot purchase biomass blindly. 
            Our digital platform evaluates physical and biochemical invariants, simulates field drying curves, and aggregates hundreds of smallholder batches into verified bulk contracts.
          </p>
        </div>

        {/* Navigation Tabs (Liquid Glass) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 border-b border-stone-200">
          <button
            onClick={() => setActiveTab('rqs')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'rqs'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white/80 text-stone-700 border border-stone-200 hover:bg-stone-50'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>1. Dynamic RQS Calculator</span>
          </button>

          <button
            onClick={() => setActiveTab('humidity')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'humidity'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white/80 text-stone-700 border border-stone-200 hover:bg-stone-50'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>2. Real-Time Drying Curves</span>
          </button>

          <button
            onClick={() => setActiveTab('content')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'content'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white/80 text-stone-700 border border-stone-200 hover:bg-stone-50'
            }`}
          >
            <BarChart2 className="w-3.5 h-3.5" />
            <span>3. Biochemical Content Profiler</span>
          </button>

          <button
            onClick={() => setActiveTab('rfq')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'rfq'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white/80 text-stone-700 border border-stone-200 hover:bg-stone-50'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>4. Smart Bulk RFQ Workflow</span>
          </button>
        </div>

        {/* Tab 1: Dynamic RQS Calculator (Liquid Glass) */}
        {activeTab === 'rqs' && (
          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-white/80 shadow-md">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-stone-200">
              <div>
                <div className="text-xs font-mono text-emerald-800 uppercase tracking-wider font-bold">Algorithmic Scoring Engine</div>
                <h3 className="text-xl font-bold text-stone-900 mt-1">Residue Quality Score (RQS) Live Tester</h3>
                <p className="text-xs text-stone-600 mt-1">
                  Adjust sensor inputs below to see how RQS adjusts dynamic penalties and bonuses for specific industrial buyers.
                </p>
              </div>

              {/* Live Score Display */}
              <div className="flex items-center gap-4 bg-white px-5 py-3 rounded-2xl border border-stone-200 shadow-xs">
                <div className="text-right">
                  <div className="text-[10px] font-mono text-stone-500 uppercase font-semibold">Live Grade Score</div>
                  <div className="text-2xl font-black font-mono tabular-nums text-stone-900">
                    {calculatedRqs} <span className="text-xs text-stone-400">/ 100</span>
                  </div>
                </div>
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg ${
                    calculatedRqs >= 80
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : calculatedRqs >= 60
                      ? 'bg-amber-100 text-amber-800 border border-amber-300'
                      : 'bg-rose-100 text-rose-800 border border-rose-300'
                  }`}
                >
                  {calculatedRqs >= 80 ? 'A+' : calculatedRqs >= 60 ? 'B' : 'C-'}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Controls */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="crop-select" className="text-xs font-bold text-stone-800 block mb-1">Select Residue Feedstock:</label>
                  <select
                    id="crop-select"
                    value={selectedCrop}
                    onChange={(e) => setSelectedCrop(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-emerald-600"
                  >
                    {CROP_RESIDUES.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name} ({r.cropSource})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="buyer-select" className="text-xs font-bold text-stone-800 block mb-1">Intended Buyer Profile:</label>
                  <select
                    id="buyer-select"
                    value={buyerType}
                    onChange={(e) => setBuyerType(e.target.value as any)}
                    className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-emerald-600"
                  >
                    <option value="boiler">Thermal Power Boiler (Strict Low-Ash &lt;10%, Dry &lt;15%)</option>
                    <option value="phytochemical">Natural Products / Pharma (High Purity, Flavonoid/Cellulose Focus)</option>
                    <option value="biochar">Pyrolysis Biochar Plant (Moderate Ash Tolerant)</option>
                    <option value="silica">Industrial Silica Extraction (High Ash / Silica Bonus)</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <label htmlFor="moisture-slider" className="text-stone-800 font-semibold">Measured Moisture Content (%):</label>
                    <span className="font-mono text-emerald-800 font-bold">{inputMoisture}%</span>
                  </div>
                  <input
                    id="moisture-slider"
                    type="range"
                    min="8"
                    max="65"
                    value={inputMoisture}
                    onChange={(e) => setInputMoisture(Number(e.target.value))}
                    className="w-full accent-emerald-600 bg-stone-200 h-2 rounded cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <label htmlFor="ash-slider" className="text-stone-800 font-semibold">Measured Ash Content (%):</label>
                    <span className="font-mono text-amber-800 font-bold">{inputAsh}%</span>
                  </div>
                  <input
                    id="ash-slider"
                    type="range"
                    min="2"
                    max="22"
                    value={inputAsh}
                    onChange={(e) => setInputAsh(Number(e.target.value))}
                    className="w-full accent-amber-600 bg-stone-200 h-2 rounded cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <label htmlFor="impurity-slider" className="text-stone-800 font-semibold">Optical Foreign Matter / Dirt (%):</label>
                    <span className="font-mono text-rose-700 font-bold">{inputImpurity}%</span>
                  </div>
                  <input
                    id="impurity-slider"
                    type="range"
                    min="0"
                    max="10"
                    value={inputImpurity}
                    onChange={(e) => setInputImpurity(Number(e.target.value))}
                    className="w-full accent-rose-600 bg-stone-200 h-2 rounded cursor-pointer"
                  />
                </div>
              </div>

              {/* RQS Breakdown Explanations */}
              <div className="bg-white p-6 rounded-2xl border border-stone-200 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="text-xs font-mono text-stone-500 uppercase tracking-wider font-bold mb-3">
                    Scoring Attribution Breakdown
                  </div>
                  <ul className="space-y-3 text-xs text-stone-700">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-700 font-bold">✓</span>
                      <span>
                        <strong>Moisture Factor:</strong> {inputMoisture <= 15 ? 'Optimal dry state. No energy loss in drying.' : `Above ideal 15% threshold; ${((inputMoisture - 15) * 3.5).toFixed(0)} penalty applied for boiler fuel.`}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className={inputAsh <= 10 ? 'text-emerald-700 font-bold' : 'text-amber-700 font-bold'}>
                        {inputAsh <= 10 ? '✓' : '⚠'}
                      </span>
                      <span>
                        <strong>Ash Content:</strong> {inputAsh <= 10 ? 'Complies with BIS standards. Minimal slagging risk.' : buyerType === 'boiler' ? 'High ash risk! Clinker penalty triggered.' : 'Ash acceptable for biochar or silica recovery.'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className={inputImpurity <= 3 ? 'text-emerald-700 font-bold' : 'text-rose-700 font-bold'}>
                        {inputImpurity <= 3 ? '✓' : '✗'}
                      </span>
                      <span>
                        <strong>Optical Impurity:</strong> {inputImpurity <= 3 ? 'Clean batch verified by RGB camera.' : 'Severe dirt/stone contamination detected. Gate rejection risk.'}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200 text-xs">
                  <div className="text-stone-500 mb-1 font-medium">Recommended Pathway:</div>
                  <div className="font-bold text-emerald-800">
                    {calculatedRqs >= 80
                      ? 'Direct Dispatch to NTPC / Industrial Pellet Line'
                      : buyerType === 'phytochemical'
                      ? 'Routed to Natural Products Laboratory for Solvent Extraction'
                      : 'Routed to Controlled Pyrolysis Biochar Demonstrator'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Humidity Drying Curve Simulator (Liquid Glass) */}
        {activeTab === 'humidity' && (
          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-white/80 shadow-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-stone-200">
              <div>
                <div className="text-xs font-mono text-emerald-800 uppercase tracking-wider font-bold">Meteorological Simulation</div>
                <h3 className="text-xl font-bold text-stone-900 mt-1">Real-Time Field Drying Curve Tracker</h3>
                <p className="text-xs text-stone-600 mt-1">
                  Cross-references time of harvest with hyper-local weather APIs to predict when moisture drops below 15% for efficient logistics.
                </p>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-mono text-stone-500 font-semibold">Current Moisture</div>
                <div className={`text-2xl font-black font-mono tabular-nums ${isOptimal ? 'text-emerald-700' : 'text-amber-700'}`}>
                  {currentSimulatedMoisture}%
                </div>
                <div className="text-[10px] font-mono text-stone-500 font-bold">
                  {isOptimal ? 'READY FOR DISPATCH' : 'DRYING IN FIELD'}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="flex justify-between text-xs mb-1 font-semibold text-stone-800">
                  <label htmlFor="drying-hours-slider">Elapsed Sun-Drying Hours:</label>
                  <span className="font-mono text-emerald-800 font-bold">{elapsedHarvestHours} Hours</span>
                </div>
                <input
                  id="drying-hours-slider"
                  type="range"
                  min="0"
                  max="72"
                  value={elapsedHarvestHours}
                  onChange={(e) => setElapsedHarvestHours(Number(e.target.value))}
                  className="w-full accent-emerald-600 bg-stone-200 h-2 rounded cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1 font-semibold text-stone-800">
                  <label htmlFor="ambient-temp-slider">Ambient Temperature (°C):</label>
                  <span className="font-mono text-amber-800 font-bold">{ambientTemp}°C</span>
                </div>
                <input
                  id="ambient-temp-slider"
                  type="range"
                  min="18"
                  max="44"
                  value={ambientTemp}
                  onChange={(e) => setAmbientTemp(Number(e.target.value))}
                  className="w-full accent-amber-600 bg-stone-200 h-2 rounded cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1 font-semibold text-stone-800">
                  <label htmlFor="ambient-rh-slider">Ambient Relative Humidity (%):</label>
                  <span className="font-mono text-blue-800 font-bold">{ambientRh}%</span>
                </div>
                <input
                  id="ambient-rh-slider"
                  type="range"
                  min="20"
                  max="80"
                  value={ambientRh}
                  onChange={(e) => setAmbientRh(Number(e.target.value))}
                  className="w-full accent-blue-600 bg-stone-200 h-2 rounded cursor-pointer"
                />
              </div>
            </div>

            {/* Visual Drying Timeline Curve */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
              <div className="text-xs font-mono text-stone-600 mb-4 flex items-center justify-between font-bold">
                <span>PREDICTIVE MOISTURE CURVE (0H TO 72H)</span>
                <span className="text-emerald-700">TARGET: &lt;15.0% FOR PELLETING</span>
              </div>

              <div className="h-28 flex items-end gap-1.5 pt-4 pb-2">
                {[0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72].map((hour) => {
                  const m = Math.max(9, Math.round(initialMoisture * Math.exp(-dryingRate * hour) * 10) / 10);
                  const isCurrent = Math.abs(elapsedHarvestHours - hour) <= 3;
                  const isUnder = m <= 15;
                  const heightPercent = Math.min(100, Math.max(15, (m / initialMoisture) * 100));

                  return (
                    <div key={hour} className="flex-1 flex flex-col items-center h-full justify-end group">
                      <div className="text-[9px] font-mono text-stone-500 opacity-0 group-hover:opacity-100 mb-1 transition-opacity">
                        {m}%
                      </div>
                      <div
                        style={{ height: `${heightPercent}%` }}
                        className={`w-full rounded-t transition-all ${
                          isCurrent
                            ? 'bg-emerald-600 ring-2 ring-emerald-400'
                            : isUnder
                            ? 'bg-emerald-500/80 hover:bg-emerald-600'
                            : 'bg-amber-400/80 hover:bg-amber-500'
                        }`}
                      />
                      <span className="text-[10px] font-mono text-stone-600 font-medium mt-1">{hour}h</span>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between text-xs text-stone-600 pt-3 border-t border-stone-200 mt-2 font-mono">
                <span>Harvest Baseline: {initialMoisture}%</span>
                <span className="text-emerald-800 font-bold">Optimal Transport Window: Hour 18+</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Biochemical Content Profiler (Liquid Glass) */}
        {activeTab === 'content' && (
          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-white/80 shadow-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-stone-200">
              <div>
                <div className="text-xs font-mono text-purple-800 uppercase tracking-wider font-bold">Natural Products Specification</div>
                <h3 className="text-xl font-bold text-stone-900 mt-1">Residue Content Variation Profiling</h3>
                <p className="text-xs text-stone-600 mt-1">
                  Estimated biochemical matrices synthesized with regional Krishi Vigyan Kendra (KVK) soil and crop datasets.
                </p>
              </div>
              <div className="text-right">
                <div className="text-xs font-mono text-stone-500 font-semibold">Selected Feedstock</div>
                <div className="text-base font-bold text-stone-900">{currentResidueObj.name}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
                <div className="text-xs text-stone-500 font-semibold mb-1">Cellulose Fraction</div>
                <div className="text-xl font-black text-purple-800 font-mono tabular-nums">
                  {currentResidueObj.cellulosePercent[0]}% – {currentResidueObj.cellulosePercent[1]}%
                </div>
                <div className="text-[10px] text-stone-500 mt-1">Biopolymer precursor</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
                <div className="text-xs text-stone-500 font-semibold mb-1">Hemicellulose</div>
                <div className="text-xl font-black text-blue-800 font-mono tabular-nums">
                  {currentResidueObj.hemicellulosePercent[0]}% – {currentResidueObj.hemicellulosePercent[1]}%
                </div>
                <div className="text-[10px] text-stone-500 mt-1">Pentose fermentation</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
                <div className="text-xs text-stone-500 font-semibold mb-1">Lignin Index</div>
                <div className="text-xl font-black text-amber-800 font-mono tabular-nums">
                  {currentResidueObj.ligninPercent[0]}% – {currentResidueObj.ligninPercent[1]}%
                </div>
                <div className="text-[10px] text-stone-500 mt-1">Natural bio-resins</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
                <div className="text-xs text-stone-500 font-semibold mb-1">Ash Content</div>
                <div className="text-xl font-black text-stone-900 font-mono tabular-nums">
                  {currentResidueObj.ashContentPercent[0]}% – {currentResidueObj.ashContentPercent[1]}%
                </div>
                <div className="text-[10px] text-stone-500 mt-1">Silica constituents</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-purple-50 border border-purple-200 text-xs">
              <div className="font-bold text-purple-900 mb-2">Natural Products Commercial Applications:</div>
              <p className="text-stone-700 leading-relaxed mb-3">
                {currentResidueObj.industrialApplications.phytochemical}
              </p>
              <div className="text-purple-800 font-mono text-[11px] font-bold">
                Active Compounds: {currentResidueObj.bioactiveCompounds.join(', ')}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Smart Bulk RFQ Workflow (Liquid Glass) */}
        {activeTab === 'rfq' && (
          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-white/80 shadow-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-stone-200">
              <div>
                <div className="text-xs font-mono text-emerald-800 uppercase tracking-wider font-bold">Enterprise Procurement Gateway</div>
                <h3 className="text-xl font-bold text-stone-900 mt-1">Smart Bulk Request for Quotation (RFQ)</h3>
                <p className="text-xs text-stone-600 mt-1">
                  Procurement officers can raise multi-thousand-tonne bulk orders with strict physical parameters.
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded border border-emerald-200 shadow-xs">
                Escrow Protected
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form */}
              <form onSubmit={handleCreateRfq} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="rfq-residue-select" className="text-xs font-bold text-stone-800 block mb-1">Residue Feedstock:</label>
                    <select
                      id="rfq-residue-select"
                      value={rfqCrop}
                      onChange={(e) => setRfqCrop(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900"
                    >
                      <option value="Wheat Straw">Wheat Straw</option>
                      <option value="Rice Straw">Rice Straw (Paddy)</option>
                      <option value="Sugarcane Bagasse">Sugarcane Bagasse</option>
                      <option value="Groundnut Shells">Groundnut Shells</option>
                      <option value="Citrus Peels">Citrus Peels (Hesperidin Grade)</option>
                      <option value="Cotton Stalks">Cotton Stalks</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="rfq-qty-input" className="text-xs font-bold text-stone-800 block mb-1">Volume (Tonnes):</label>
                    <input
                      id="rfq-qty-input"
                      type="number"
                      step="100"
                      value={rfqQuantity}
                      onChange={(e) => setRfqQuantity(Number(e.target.value))}
                      className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="rfq-ash-max-input" className="text-xs font-bold text-stone-800 block mb-1">Max Ash Allowed (%):</label>
                    <input
                      id="rfq-ash-max-input"
                      type="number"
                      value={rfqAshMax}
                      onChange={(e) => setRfqAshMax(Number(e.target.value))}
                      className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 font-mono"
                    />
                  </div>

                  <div>
                    <label htmlFor="rfq-radius-input" className="text-xs font-bold text-stone-800 block mb-1">Geofence Radius (km):</label>
                    <input
                      id="rfq-radius-input"
                      type="number"
                      value={rfqRadius}
                      onChange={(e) => setRfqRadius(Number(e.target.value))}
                      className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 font-mono"
                    />
                  </div>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-stone-200 text-xs space-y-1.5 font-mono shadow-xs">
                  <div className="flex justify-between text-stone-600">
                    <span>Estimated Micro-Producers Aggregated:</span>
                    <span className="text-stone-900 font-bold">{Math.round(rfqQuantity / 25)} Farmers</span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>Participating Custom Hiring Centres (CHCs):</span>
                    <span className="text-stone-900 font-bold">{Math.ceil(rfqQuantity / 600)} Hubs</span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>Estimated Escrow Contract Value:</span>
                    <span className="text-emerald-800 font-bold">₹{((rfqQuantity * 1000 * 2.65) / 10000000).toFixed(2)} Crore</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Submit Smart RFQ & Lock Escrow</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>

              {/* Dynamic Contract Preview */}
              <div className="bg-white p-6 rounded-2xl border border-stone-200 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="text-xs font-mono text-stone-500 uppercase tracking-wider font-bold mb-2">
                    Digital Smart Contract Status
                  </div>
                  {submittedRfq ? (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-emerald-700 text-xs font-mono font-bold">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Contract {submittedRfq.id} Created</span>
                      </div>
                      <div className="text-sm font-bold text-stone-900">
                        {submittedRfq.targetQuantityMt.toLocaleString()} MT {submittedRfq.residueType}
                      </div>
                      <p className="text-xs text-stone-700 leading-relaxed">
                        Geofencing engine has pinged {submittedRfq.estimatedFarmersAggregated} registered smallholders within a {submittedRfq.radiusKm} km radius.
                        Escrow funds locked in platform account.
                      </p>
                      <div className="text-[11px] font-mono text-stone-600 bg-stone-50 p-3 rounded-xl border border-stone-200">
                        <div>Max Ash Spec: &le;{submittedRfq.maxAshPercent}%</div>
                        <div>Max Moisture: &le;{submittedRfq.maxMoisturePercent}%</div>
                        <div>Total Value: ₹{(submittedRfq.estimatedTotalValueInr).toLocaleString()}</div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-xs text-stone-600 leading-relaxed">
                      Submit the form to generate an aggregated multi-farmer smart contract. 
                      CIRCULO handles logistics dispatch, batch QR tracking, and automated bank disbursement, cutting corporate procurement friction by 90%.
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-stone-200 text-[11px] text-stone-600 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Backed by Agriculture Infrastructure Fund (AIF) compliance SOPs.</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
