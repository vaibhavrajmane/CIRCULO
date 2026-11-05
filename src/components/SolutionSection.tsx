import React, { useState } from 'react';
import { Cpu, Scale, Droplet, Eye, Volume2, Beaker, Sprout, Flame } from 'lucide-react';
import { NARRATION_SECTIONS } from '../data/narrations';
import { NarrationSection } from '../types';

interface SolutionSectionProps {
  onPlayNarration: (sec: NarrationSection) => void;
  activeNarrationId: string | null;
  isPlayingAudio: boolean;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({
  onPlayNarration,
  activeNarrationId,
  isPlayingAudio
}) => {
  const [activePipeline, setActivePipeline] = useState<'energy' | 'phytochemical' | 'soil'>('phytochemical');
  const [selectedSensor, setSelectedSensor] = useState<string>('camera');

  const narration = NARRATION_SECTIONS.find((s) => s.id === 'solution')!;
  const isNarrating = activeNarrationId === 'solution' && isPlayingAudio;

  return (
    <section id="solution" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Sub-header & Voice Narration */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 text-xs text-stone-600">
            <span className="text-emerald-800 font-bold uppercase tracking-wider font-mono">03. The CIRCULO Architecture</span>
            <span aria-hidden="true">·</span>
            <span>Hardware Sensing Hub & Triple-Pipeline Valorization</span>
            <span aria-hidden="true">·</span>
            <span>CodeCrusaders Platform</span>
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
            <span>{isNarrating ? 'Playing Solution Audio...' : 'Listen to Solution Pitch'}</span>
          </button>
        </div>

        {/* Section Title */}
        <div className="max-w-4xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-900 mb-4">
            From Indiscriminate Burning to Precision Resource Routing
          </h2>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
            CIRCULO replaces slow laboratory testing with an on-site, low-cost multi-sensor grading station. 
            Within 60 seconds, incoming residue batches are assigned a verified Residue Quality Score (RQS) and routed to the most economically lucrative and environmentally sound industrial off-taker.
          </p>
        </div>

        {/* Interactive Hardware Hub Demonstrator (Liquid Glass Container) */}
        <div className="liquid-glass rounded-3xl p-6 sm:p-8 mb-16 border border-white/80 shadow-md shadow-emerald-950/5">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-stone-200">
            <div>
              <div className="text-xs font-mono text-emerald-800 uppercase tracking-wider font-bold">Physical Hardware Layer (ESP32 Powered)</div>
              <h3 className="text-xl font-bold text-stone-900 mt-1">Farm-Gate Automated Grading & Routing Station</h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-stone-600 font-mono">
              <span className="text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">Target Build: ₹45,000–₹70,000</span>
              <span aria-hidden="true">·</span>
              <span>120 kg/hr Prototype Capacity</span>
            </div>
          </div>

          {/* Hardware Blueprint Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Schematic Diagram (Left 7 Cols) */}
            <div className="lg:col-span-7 bg-white/90 rounded-2xl p-6 border border-stone-200/80 shadow-sm relative">
              <div className="text-xs font-mono text-stone-500 mb-4 flex items-center justify-between font-medium">
                <span>INTAKE BLUEPRINT SCHEMATIC</span>
                <span className="text-emerald-700 font-bold">STATUS: CALIBRATED</span>
              </div>

              {/* Visual Conveyor & Sensor Stations */}
              <div className="space-y-3.5">
                {/* 1. Intake Hopper & Load Cell */}
                <button
                  type="button"
                  onClick={() => setSelectedSensor('loadcell')}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                    selectedSensor === 'loadcell'
                      ? 'bg-emerald-50 border-emerald-500 text-stone-900 shadow-xs ring-1 ring-emerald-500'
                      : 'bg-stone-50/80 border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800">
                      <Scale className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-900">Station 1: High-Capacity Digital Load Cell</div>
                      <div className="text-[11px] text-stone-600">Tare & gross mass measurement (accuracy ±20g)</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-800">0.0 – 50.0 kg</span>
                </button>

                {/* 2. Dual-Frequency Moisture Probe */}
                <button
                  type="button"
                  onClick={() => setSelectedSensor('moisture')}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                    selectedSensor === 'moisture'
                      ? 'bg-emerald-50 border-emerald-500 text-stone-900 shadow-xs ring-1 ring-emerald-500'
                      : 'bg-stone-50/80 border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-800">
                      <Droplet className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-900">Station 2: Capacitive Multi-Depth Moisture Probe</div>
                      <div className="text-[11px] text-stone-600">Instant core wetness reading; oven-dry lab calibrated</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-700">8.0% – 85.0% RH</span>
                </button>

                {/* 3. Optical RGB Camera & Spectral Inspection */}
                <button
                  type="button"
                  onClick={() => setSelectedSensor('camera')}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                    selectedSensor === 'camera'
                      ? 'bg-emerald-50 border-emerald-500 text-stone-900 shadow-xs ring-1 ring-emerald-500'
                      : 'bg-stone-50/80 border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-800">
                      <Eye className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-900">Station 3: Computer Vision & Optical Purity Camera</div>
                      <div className="text-[11px] text-stone-600">Detects foreign mud, stones, weeds, mold & particle size</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-purple-700">Edge ML Model</span>
                </button>

                {/* 4. Automated Diverter & Modular Processing */}
                <button
                  type="button"
                  onClick={() => setSelectedSensor('diverter')}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                    selectedSensor === 'diverter'
                      ? 'bg-emerald-50 border-emerald-500 text-stone-900 shadow-xs ring-1 ring-emerald-500'
                      : 'bg-stone-50/80 border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-900">Station 4: ESP32 Automated Diverter & Safety Shredder</div>
                      <div className="text-[11px] text-stone-600">Linear actuator diverts batch to assigned processing bay</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-800">&lt;1.2s Actuation</span>
                </button>
              </div>
            </div>

            {/* Live Sensor Specification Inspector (Right 5 Cols) */}
            <div className="lg:col-span-5 bg-white/90 border border-stone-200/80 rounded-2xl p-6 shadow-sm">
              <div className="text-xs font-mono text-stone-500 uppercase tracking-wider font-semibold mb-2">Module Deep Dive</div>
              {selectedSensor === 'loadcell' && (
                <div>
                  <h4 className="text-base font-bold text-stone-900 mb-2">Load Cell Weighing Mechanism</h4>
                  <p className="text-xs text-stone-700 leading-relaxed mb-4">
                    Mounted under the stainless intake hopper. Captures batch tare, gross mass, and volumetric bulk density to identify compaction ratios (e.g. 50 kg/m³ for loose straw vs 220 kg/m³ for groundnut shells).
                  </p>
                  <div className="bg-stone-50 p-3.5 rounded-xl text-xs font-mono space-y-1.5 border border-stone-200">
                    <div className="flex justify-between text-stone-600"><span>Sampling Rate:</span> <span className="text-stone-900 font-bold">80 Hz via HX711</span></div>
                    <div className="flex justify-between text-stone-600"><span>Overload Protection:</span> <span className="text-stone-900 font-bold">150% Rated Limit</span></div>
                    <div className="flex justify-between text-stone-600"><span>Calibration Protocol:</span> <span className="text-emerald-700 font-bold">Standard Class M1</span></div>
                  </div>
                </div>
              )}

              {selectedSensor === 'moisture' && (
                <div>
                  <h4 className="text-base font-bold text-stone-900 mb-2">Dual-Frequency Moisture Probe</h4>
                  <p className="text-xs text-stone-700 leading-relaxed mb-4">
                    Measures dielectric permittivity inside residue bales. Calibrated rigorously against laboratory oven-dry tests (105°C for 24h) across wheat, paddy, and bagasse samples in Maharashtra.
                  </p>
                  <div className="bg-stone-50 p-3.5 rounded-xl text-xs font-mono space-y-1.5 border border-stone-200">
                    <div className="flex justify-between text-stone-600"><span>Accuracy Target:</span> <span className="text-emerald-700 font-bold">±3.0% In-Field</span></div>
                    <div className="flex justify-between text-stone-600"><span>Optimal Pellet Window:</span> <span className="text-stone-900 font-bold">&lt;15% Moisture</span></div>
                    <div className="flex justify-between text-stone-600"><span>Fresh Milling Baseline:</span> <span className="text-amber-800 font-bold">45–52% Bagasse</span></div>
                  </div>
                </div>
              )}

              {selectedSensor === 'camera' && (
                <div>
                  <h4 className="text-base font-bold text-stone-900 mb-2">Computer Vision Quality Inspector</h4>
                  <p className="text-xs text-stone-700 leading-relaxed mb-4">
                    High-frame-rate RGB camera running a quantized edge vision model. Flags mud clumps, plastic twine, stone contamination, and mold discoloration before biomass reaches downstream equipment.
                  </p>
                  <div className="bg-stone-50 p-3.5 rounded-xl text-xs font-mono space-y-1.5 border border-stone-200">
                    <div className="flex justify-between text-stone-600"><span>Inference Latency:</span> <span className="text-stone-900 font-bold">&lt;85 ms</span></div>
                    <div className="flex justify-between text-stone-600"><span>Foreign Matter Cutoff:</span> <span className="text-rose-700 font-bold">&gt;4% Triggers Reject</span></div>
                    <div className="flex justify-between text-stone-600"><span>Model Accuracy:</span> <span className="text-emerald-700 font-bold">94.2% Validation</span></div>
                  </div>
                </div>
              )}

              {selectedSensor === 'diverter' && (
                <div>
                  <h4 className="text-base font-bold text-stone-900 mb-2">ESP32 Diverter & Precision Shredder</h4>
                  <p className="text-xs text-stone-700 leading-relaxed mb-4">
                    Drives servo diverter gates to channel material into 3 bays: Bio-Energy Pelleting, Phytochemical Extraction, or Soil Organic Mulching. Dual safety interlocks prevent mechanical pinch hazards.
                  </p>
                  <div className="bg-stone-50 p-3.5 rounded-xl text-xs font-mono space-y-1.5 border border-stone-200">
                    <div className="flex justify-between text-stone-600"><span>Controller:</span> <span className="text-stone-900 font-bold">ESP32-S3 Dual Core</span></div>
                    <div className="flex justify-between text-stone-600"><span>Safety Interlocks:</span> <span className="text-emerald-700 font-bold">Magnetic Guard Cutoff</span></div>
                    <div className="flex justify-between text-stone-600"><span>Data Telemetry:</span> <span className="text-stone-900 font-bold">GSM / BLE Cloud Sync</span></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* The 3 Valorization Pipelines (Light Theme Liquid Glass) */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-mono text-stone-500 uppercase tracking-wider font-semibold">Multi-Stream Routing</div>
              <h3 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                The Triple-Pipeline Segregation Model
              </h3>
            </div>
            
            {/* Interactive Pipeline Tabs */}
            <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-xl border border-stone-200 shadow-xs">
              <button
                onClick={() => setActivePipeline('phytochemical')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
                  activePipeline === 'phytochemical'
                    ? 'bg-purple-700 text-white shadow-xs'
                    : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                Phytochemicals & Natural Products
              </button>
              <button
                onClick={() => setActivePipeline('energy')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
                  activePipeline === 'energy'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                Bio-Energy & Pellets
              </button>
              <button
                onClick={() => setActivePipeline('soil')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
                  activePipeline === 'soil'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                Regenerative Soil Nutrients
              </button>
            </div>
          </div>

          {/* Active Pipeline Content (Liquid Glass) */}
          {activePipeline === 'phytochemical' && (
            <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-purple-200/80 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
                <span className="text-xs font-mono uppercase text-purple-900 tracking-wider font-bold">
                  Primary Innovation: High-Margin Biochemical Segregation
                </span>
              </div>
              <h4 className="text-2xl font-black text-stone-900 mb-4">
                Phytochemical Extraction for Natural Products Manufacturers
              </h4>
              <p className="text-sm text-stone-700 leading-relaxed mb-6 max-w-4xl font-normal">
                While traditional projects view residues solely as combustible fuel, non-edible crop fractions are dense repositories of high-value bioactives. 
                CIRCULO isolates and certifies residue streams for pharmaceutical, cosmetic, and sustainable textile manufacturers at 3x–6x higher margins than raw boiler fuel.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-2xl border border-purple-100 shadow-xs">
                  <div className="text-xs text-purple-700 font-mono font-bold mb-1">Sugarcane Bagasse</div>
                  <div className="text-base font-bold text-stone-900 mb-2">Cellulose & Polyphenols</div>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    Contains 32–45% cellulose and 17–32% lignin. Yields pharmaceutical-grade hydroxyethyl cellulose, cellulose acetate, and valuable antioxidant polyphenols: <strong>quercetin, p-coumaric acid, and ferulic acid</strong>.
                  </p>
                  <div className="text-[11px] font-mono font-bold text-purple-800">Market Value: ₹180–₹650/kg derived active</div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-purple-100 shadow-xs">
                  <div className="text-xs text-purple-700 font-mono font-bold mb-1">Citrus Peels (Nagpur / Abohar)</div>
                  <div className="text-base font-bold text-stone-900 mb-2">Flavonoids & D-Limonene</div>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    Rich in medicinal flavonoids <strong>hesperidin and naringin</strong> with anti-inflammatory properties, alongside pure <strong>D-limonene</strong> green industrial solvents and food-grade high-methoxyl pectin.
                  </p>
                  <div className="text-[11px] font-mono font-bold text-purple-800">Market Value: Up to ₹4,500/kg pure hesperidin</div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-purple-100 shadow-xs">
                  <div className="text-xs text-purple-700 font-mono font-bold mb-1">Banana Pseudostem & Rice Husk</div>
                  <div className="text-base font-bold text-stone-900 mb-2">Textile Fiber & Green Silica</div>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    Banana pseudostem yields 60–65% cellulose fiber for biodegradable textiles; rice husk ash yields &gt;90% <strong>precipitated amorphous silica</strong> replacing petroleum carbon-black in green tyres.
                  </p>
                  <div className="text-[11px] font-mono font-bold text-purple-800">Market Value: ₹95–₹140/kg green silica</div>
                </div>
              </div>
            </div>
          )}

          {activePipeline === 'energy' && (
            <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                <span className="text-xs font-mono uppercase text-amber-900 tracking-wider font-bold">
                  Industrial Bio-Energy Off-Take
                </span>
              </div>
              <h4 className="text-2xl font-black text-stone-900 mb-4">
                Biomass Pellets, Briquettes & Coal Co-Firing Feedstock
              </h4>
              <p className="text-sm text-stone-700 leading-relaxed mb-6 max-w-4xl font-normal">
                Government mandates enforced by the Commission for Air Quality Management (CAQM) require 71 regional coal-fired thermal power plants to co-fire 5–10% biomass pellets. 
                CIRCULO ensures strict compliance with Bureau of Indian Standards (BIS) parameters, preventing boiler ash slagging and clinker formation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-2xl border border-amber-100 shadow-xs">
                  <div className="text-xs text-amber-700 font-mono font-bold mb-1">Mandatory Off-Take</div>
                  <div className="text-base font-bold text-stone-900 mb-2">71 Power Plants Co-Firing</div>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    Steady institutional demand from NTPC and state thermal plants for torrefied & non-torrefied agricultural biomass pellets.
                  </p>
                  <div className="text-[11px] font-mono font-bold text-amber-800">Price: ₹7.50–₹12.00/kg pellet</div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-amber-100 shadow-xs">
                  <div className="text-xs text-amber-700 font-mono font-bold mb-1">Quality Assurance</div>
                  <div className="text-base font-bold text-stone-900 mb-2">BIS Standard Compliance</div>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    Guaranteed Ash Content &lt;10%, Gross Calorific Value (GCV) &gt;3,400 kcal/kg, and moisture &lt;14% eliminating plant rejections.
                  </p>
                  <div className="text-[11px] font-mono font-bold text-amber-800">Rejection Rate: Drop from 28% to &lt;2%</div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-amber-100 shadow-xs">
                  <div className="text-xs text-amber-700 font-mono font-bold mb-1">GOBARdhan Integration</div>
                  <div className="text-base font-bold text-stone-900 mb-2">Compressed Biogas (CBG)</div>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    Connecting moist and fibrous fractions to 979 operational biogas plants across India under the Ministry of Jal Shakti framework.
                  </p>
                  <div className="text-[11px] font-mono font-bold text-amber-800">National Policy: SATAT Scheme</div>
                </div>
              </div>
            </div>
          )}

          {activePipeline === 'soil' && (
            <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-emerald-200/80 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                <span className="text-xs font-mono uppercase text-emerald-900 tracking-wider font-bold">
                  Agronomic Regeneration
                </span>
              </div>
              <h4 className="text-2xl font-black text-stone-900 mb-4">
                Biochar & Organic Soil Conditioning for Regenerative Agriculture
              </h4>
              <p className="text-sm text-stone-700 leading-relaxed mb-6 max-w-4xl font-normal">
                Not all residue leaves the farm. Lower-grade, high-silica residues like paddy husk and weed biomass undergo controlled pyrolysis into high-porosity biochar or are enriched with trichoderma for organic compost, replenishing soil carbon.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-xs">
                  <div className="text-xs text-emerald-700 font-mono font-bold mb-1">Carbon Sequestration</div>
                  <div className="text-base font-bold text-stone-900 mb-2">Agricultural Biochar</div>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    Fixed carbon persists in soil for hundreds of years, drastically expanding cation exchange capacity and nutrient retention.
                  </p>
                  <div className="text-[11px] font-mono font-bold text-emerald-800">Indicative Price: ₹10–₹30/kg bulk</div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-xs">
                  <div className="text-xs text-emerald-700 font-mono font-bold mb-1">Fertility Restitution</div>
                  <div className="text-base font-bold text-stone-900 mb-2">High-Humus Compost</div>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    Microbially fermented compost restores depleted nitrogen, phosphorus, and potassium while reducing synthetic urea dependency.
                  </p>
                  <div className="text-[11px] font-mono font-bold text-emerald-800">Market Rate: ₹7/kg packaged compost</div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-xs">
                  <div className="text-xs text-emerald-700 font-mono font-bold mb-1">Institutional Backing</div>
                  <div className="text-base font-bold text-stone-900 mb-2">ICAR & KVK Validated</div>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    Direct integration with ICAR-CIFRI Waste-to-Wealth protocols and KVK Baramati frontline demonstration plots.
                  </p>
                  <div className="text-[11px] font-mono font-bold text-emerald-800">Certified Organic Standard</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
