import React from 'react';
import { Flame, Clock, Layers, Users, Volume2, ArrowRight, RefreshCw, Sprout, HeartHandshake, Globe2 } from 'lucide-react';
import { NARRATION_SECTIONS } from '../data/narrations';
import { NarrationSection } from '../types';

interface HeroProblemSectionProps {
  onPlayNarration: (sec: NarrationSection) => void;
  activeNarrationId: string | null;
  isPlayingAudio: boolean;
}

export const HeroProblemSection: React.FC<HeroProblemSectionProps> = ({
  onPlayNarration,
  activeNarrationId,
  isPlayingAudio
}) => {
  const narration = NARRATION_SECTIONS.find((s) => s.id === 'problem')!;
  const isNarrating = activeNarrationId === 'problem' && isPlayingAudio;

  return (
    <section id="problem" className="relative pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Banner from user vision: Turning Agricultural Residue into a Brighter Tomorrow */}
        <div className="mb-10 liquid-glass rounded-3xl p-6 sm:p-8 border border-white/80 shadow-lg shadow-emerald-950/5 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider mb-2">
                <Sprout className="w-4 h-4 text-emerald-600" />
                <span>CIRCULO · Sustainable Indian Bio-Economy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight leading-tight mb-3">
                Turning Agricultural Residue into a <span className="text-emerald-700">Brighter Tomorrow</span>
              </h2>
              <p className="text-sm sm:text-base font-medium text-stone-700 mb-4">
                Recycle · Support Farmers · Grow Sustainably
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-stone-600">
                <div className="flex items-center gap-1.5 bg-emerald-50/80 px-2.5 py-1 rounded-lg border border-emerald-200 text-emerald-900">
                  <Sprout className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Sustainable Agriculture</span>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-50/80 px-2.5 py-1 rounded-lg border border-emerald-200 text-emerald-900">
                  <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Farmer Wellbeing</span>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-50/80 px-2.5 py-1 rounded-lg border border-emerald-200 text-emerald-900">
                  <RefreshCw className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Circular Economy</span>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-50/80 px-2.5 py-1 rounded-lg border border-emerald-200 text-emerald-900">
                  <Globe2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>A Greener Future</span>
                </div>
              </div>
            </div>

            {/* Circular Valorization Loop Graphic */}
            <div className="w-full lg:w-auto flex-1 max-w-md bg-emerald-900/5 p-4 rounded-2xl border border-emerald-200/80">
              <div className="text-xs font-mono uppercase font-bold text-emerald-800 mb-3 text-center">
                Closed-Loop Agronomic Valorization
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-white/90 p-2.5 rounded-xl border border-emerald-200/60 shadow-xs">
                  <div className="font-bold text-stone-900">1. Crop Residue</div>
                  <div className="text-[11px] text-stone-600">Golden Straw Bales</div>
                </div>
                <div className="bg-white/90 p-2.5 rounded-xl border border-emerald-200/60 shadow-xs">
                  <div className="font-bold text-stone-900">2. Processing</div>
                  <div className="text-[11px] text-stone-600">CIRCULO Hub QA</div>
                </div>
                <div className="bg-white/90 p-2.5 rounded-xl border border-emerald-200/60 shadow-xs">
                  <div className="font-bold text-stone-900">3. Organic Extracts</div>
                  <div className="text-[11px] text-stone-600">Pellets & Bioactives</div>
                </div>
                <div className="bg-white/90 p-2.5 rounded-xl border border-emerald-200/60 shadow-xs">
                  <div className="font-bold text-stone-900">4. Healthier Soil</div>
                  <div className="text-[11px] text-stone-600">Microbial Carbon</div>
                </div>
                <div className="bg-white/90 p-2.5 rounded-xl border border-emerald-200/60 shadow-xs col-span-2 sm:col-span-2">
                  <div className="font-bold text-emerald-800">5. Stronger Farmers & Yields</div>
                  <div className="text-[11px] text-stone-600">+₹10,175/ha net uplift & zero penalties</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Sub-header & Voice Narration Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 text-xs text-stone-600">
            <span className="text-emerald-800 font-bold uppercase tracking-wider font-mono">01. Problem Statement</span>
            <span aria-hidden="true">·</span>
            <span>The Crisis of 2026</span>
            <span aria-hidden="true">·</span>
            <span>Indo-Gangetic Plains & Maharashtra</span>
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
            <span>{isNarrating ? 'Playing Problem Narration...' : 'Listen to Problem Brief'}</span>
          </button>
        </div>

        {/* Hero Title & Value Proposition */}
        <div className="max-w-4xl mb-12">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-stone-900 leading-[1.12] mb-6 text-balance">
            India’s Agricultural Wealth Is Going Up In Smoke.
          </h1>
          <p className="text-lg sm:text-xl text-stone-700 leading-relaxed font-normal">
            Every October and November, 12 to 22 million tonnes of crop residue are set ablaze across northern India. 
            A narrow 20-day planting window, lack of on-site residue grading, and broken market linkages force farmers into a corner—destroying soil biology and blanketing millions in catastrophic smog.
          </p>
        </div>

        {/* Visual Exposition Grid: The 3 Core Pain Points (Liquid Glass Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Card 1: 20-Day Temporal Window */}
          <div className="liquid-glass-card rounded-2xl p-6 relative flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mb-5">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">The 20-Day Harvest Squeeze</h3>
              <p className="text-sm text-stone-700 leading-relaxed mb-4">
                Between the combine-harvesting of Kharif paddy and the precision sowing of Rabi wheat, farmers have barely 15 to 20 days. 
                Any delay beyond mid-November risks high terminal heat and severe yield drop in wheat crops.
              </p>
            </div>
            <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-600 font-mono">
              <span>Window: Oct 20 – Nov 10</span>
              <span className="text-amber-800 font-bold">Critical Bottleneck</span>
            </div>
          </div>

          {/* Card 2: Agronomic Soil Destruction */}
          <div className="liquid-glass-card rounded-2xl p-6 relative flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 flex items-center justify-center mb-5">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">Invisible Soil Degradation</h3>
              <p className="text-sm text-stone-700 leading-relaxed mb-4">
                Open burning bakes topsoil, destroying Soil Organic Carbon (SOC), earthworms, and microbial enzymes. 
                Bulk density spikes from 1.67 to 1.78 g/cm³, reducing water filtration and forcing higher synthetic chemical fertilizer use.
              </p>
            </div>
            <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-600 font-mono">
              <span>Bulk Density: +6.6%</span>
              <span className="text-rose-700 font-bold">Fertility Depletion</span>
            </div>
          </div>

          {/* Card 3: Farmer Union & Economic Dilemma */}
          <div className="liquid-glass-card rounded-2xl p-6 relative flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 text-orange-700 flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">Farmer Union Resistance</h3>
              <p className="text-sm text-stone-700 leading-relaxed mb-4">
                Associations like Bharatiya Kisan Union (BKU) and Shetkari Sanghatana reject punitive fines and police FIRs. 
                Clearing stubble manually costs ₹3,500/acre; without guaranteed buyers or affordable balers, burning remains the only viable survival tactic.
              </p>
            </div>
            <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-600 font-mono">
              <span>Manual Cost: ₹3,500/ac</span>
              <span className="text-orange-800 font-bold">Policy Impasse</span>
            </div>
          </div>
        </div>

        {/* Extracted Satellite Observation Evidence: NASA Research Figures (Liquid Glass) */}
        <div className="mb-12 liquid-glass rounded-2xl p-6 sm:p-8 border border-white/80 shadow-md shadow-emerald-950/5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200">
            <div>
              <div className="text-xs font-mono text-emerald-800 uppercase tracking-wider font-bold">
                Remote-Sensing Documented Evidence
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                Satellite Imagery: Macro Atmospheric & Ground Thermal Anomalies
              </h3>
            </div>
            <div className="text-xs text-stone-600 font-mono">
              Published in <span className="text-emerald-700 font-bold">MDPI IJERPH 2019, 16, 832</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Figure 1: NASA Fog & Haze Distribution */}
            <div className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-sm flex flex-col justify-between">
              <div className="relative group overflow-hidden bg-stone-100 aspect-[16/10]">
                <img
                  src="/images/figure1_nasa_haze_blanket.jpg"
                  alt="Figure 1: NASA Earth Observatory image of fog and haze distribution over the Northern States of India"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-stone-900 font-bold border border-stone-200 shadow-xs">
                  Figure 1 · Atmospheric Smog Blanket
                </div>
              </div>

              <div className="p-5">
                <h4 className="text-sm font-bold text-stone-900 mb-2 leading-snug">
                  Haze & Particulate Fog Blanketing Northern India (NASA MODIS Observation)
                </h4>
                <p className="text-xs text-stone-700 leading-relaxed mb-3">
                  Natural-color satellite capture from NASA’s Aqua satellite (MODIS) illustrating dense toxic haze stretching across Pakistan, Punjab, Haryana, Delhi, and Uttar Pradesh. 
                  Delhi’s mean PM2.5 reached 98 µg/m³—exceeding WHO permissible safety limits tenfold.
                </p>
                <div className="pt-3 border-t border-stone-100 text-[11px] font-mono text-stone-600 flex flex-col gap-1">
                  <div>
                    <span className="text-stone-400">Source: </span>
                    <a
                      href="https://earthobservatory.nasa.gov/images/91240/haze-blankets-northern-india"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-semibold hover:underline"
                    >
                      NASA Earth Observatory / Allen & Voiland (Nov 2017)
                    </a>
                  </div>
                  <div>
                    <span className="text-stone-400">Citation: </span>
                    <span>Int. J. Environ. Res. Public Health 2019, 16(5), 832 (Fig. 1)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Figure 2: NASA Thermal Anomalies / Red Fire Hotspots */}
            <div className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-sm flex flex-col justify-between">
              <div className="relative group overflow-hidden bg-stone-100 aspect-[16/10]">
                <img
                  src="/images/figure2_nasa_stubble_fires.jpg"
                  alt="Figure 2: Crop burning areas in Punjab and Haryana, as captured by NASA"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-rose-700 font-bold border border-rose-200 shadow-xs">
                  Figure 2 · Active Fire Clusters (Red Dots)
                </div>
              </div>

              <div className="p-5">
                <h4 className="text-sm font-bold text-stone-900 mb-2 leading-snug">
                  Concentrated Crop Stubble Fire Hotspots Across Punjab & Haryana
                </h4>
                <p className="text-xs text-stone-700 leading-relaxed mb-3">
                  Thermal anomaly detection captured by NASA (VIIRS/MODIS) and monitored by the Punjab Pollution Control Board (PPCB). 
                  Each localized red dot denotes open-field crop residue burning, where desperation forces farmers to incinerate over 12 million tonnes of straw in days.
                </p>
                <div className="pt-3 border-t border-stone-100 text-[11px] font-mono text-stone-600 flex flex-col gap-1">
                  <div>
                    <span className="text-stone-400">Source: </span>
                    <a
                      href="https://earthobservatory.nasa.gov/images/86982/stubble-burning-in-punjab-india"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-semibold hover:underline"
                    >
                      NASA Earth Observatory / Schmaltz & Voiland (Nov 2015/2017)
                    </a>
                  </div>
                  <div>
                    <span className="text-stone-400">Citation: </span>
                    <span>Int. J. Environ. Res. Public Health 2019, 16(5), 832 (Fig. 2)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Diagram: Contrast Infographic (The Stubble Paradox vs CIRCULO Flow) */}
        <div className="liquid-glass rounded-2xl p-6 sm:p-8 border border-white/80 shadow-md shadow-emerald-950/5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-mono text-stone-500 uppercase tracking-wider font-semibold">Visual Diagnostic Comparison</div>
              <h4 className="text-xl font-bold text-stone-900 mt-1">Current Stubble Burning vs. Planned Resource Valorization</h4>
            </div>
            <span className="text-xs text-stone-500 font-mono">Sources: ICAR, MoEF & NITI Aayog Data</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: Current Destructive Cycle */}
            <div className="bg-rose-50/90 border border-rose-200/90 rounded-xl p-5 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <h5 className="font-bold text-rose-900 text-sm">Status Quo: Burn & Despair</h5>
              </div>
              <ul className="space-y-3 text-xs text-stone-700">
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold font-mono">1.</span>
                  <span>Combine harvester leaves 30–40 cm standing loose straw across fields.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold font-mono">2.</span>
                  <span>Seed drill tractors jam on loose straw; balers charge high custom fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold font-mono">3.</span>
                  <span>Farmer sets fire out of desperation; air quality index (AQI) surges past 450.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold font-mono">4.</span>
                  <span>Government enforces police FIRs & ₹2,500–₹15,000 penalties, straining trust.</span>
                </li>
              </ul>
            </div>

            {/* Right: CIRCULO Valorized Route */}
            <div className="bg-emerald-50/90 border border-emerald-200/90 rounded-xl p-5 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                <h5 className="font-bold text-emerald-900 text-sm">CIRCULO: Graded Resource Routing</h5>
              </div>
              <ul className="space-y-3 text-xs text-stone-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold font-mono">1.</span>
                  <span>Custom Hiring Centres (CHCs) deploy Happy Seeders & balers with QR tags.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold font-mono">2.</span>
                  <span>CIRCULO on-site sensor grades moisture, ash, and calorific value in 60 seconds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold font-mono">3.</span>
                  <span>Straw routed to 71 CAQM coal plants; bagasse & citrus peels routed to pharma & natural products.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold font-mono">4.</span>
                  <span>Farmer receives instant escrow bank transfer +₹10,175/ha above crop sales.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
