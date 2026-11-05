import React, { useState } from 'react';
import { MapPin, Beaker, Volume2, ArrowRight } from 'lucide-react';
import { CROP_RESIDUES, STATES_AGRI_DATA } from '../data/cropResidues';
import { NARRATION_SECTIONS } from '../data/narrations';
import { NarrationSection } from '../types';

interface StateExplorerSectionProps {
  onPlayNarration: (sec: NarrationSection) => void;
  activeNarrationId: string | null;
  isPlayingAudio: boolean;
  onSelectResidueForRfq: (residueName: string) => void;
}

export const StateExplorerSection: React.FC<StateExplorerSectionProps> = ({
  onPlayNarration,
  activeNarrationId,
  isPlayingAudio,
  onSelectResidueForRfq
}) => {
  const [selectedState, setSelectedState] = useState<string>('All');
  const [selectedSeason, setSelectedSeason] = useState<string>('All');
  const [selectedPipeline, setSelectedPipeline] = useState<string>('All');

  const narration = NARRATION_SECTIONS.find((s) => s.id === 'geography')!;
  const isNarrating = activeNarrationId === 'geography' && isPlayingAudio;

  const filteredResidues = CROP_RESIDUES.filter((residue) => {
    const matchesState = selectedState === 'All' || residue.states.includes(selectedState);
    const matchesSeason = selectedSeason === 'All' || residue.season === selectedSeason || residue.season === 'All-Year';
    const matchesPipeline =
      selectedPipeline === 'All' ||
      (selectedPipeline === 'Bio-Energy' && residue.gcvKcalKg > 3500) ||
      (selectedPipeline === 'Phytochemicals' && residue.bioactiveCompounds.length > 0) ||
      (selectedPipeline === 'Natural Materials' && residue.cellulosePercent[1] >= 40);
    return matchesState && matchesSeason && matchesPipeline;
  });

  return (
    <section id="state-mapping" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header & Voice Tour */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 text-xs text-stone-600">
            <span className="text-emerald-800 font-bold uppercase tracking-wider font-mono">05. Geographical & Seasonal Mapping</span>
            <span aria-hidden="true">·</span>
            <span>State Agri-GDP Rankings</span>
            <span aria-hidden="true">·</span>
            <span>Crop Residue Availability Matrix</span>
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
            <span>{isNarrating ? 'Playing Geography Audio...' : 'Listen to State Mapping'}</span>
          </button>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-stone-900 mb-4">
            Pan-India Agricultural Residue Mapping by State GDP & Season
          </h2>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
            India’s agricultural surplus varies radically across cropping calendars and agro-climatic zones. 
            CIRCULO synchronizes multi-state procurement across Kharif and Rabi cycles, linking local sugar mills, paddy belts, and horticulture zones directly with industrial buyers.
          </p>
        </div>

        {/* State GDP Summary Bar (Liquid Glass) */}
        <div className="liquid-glass rounded-2xl p-5 mb-8 border border-white/80 shadow-sm">
          <div className="text-xs font-mono text-stone-600 uppercase tracking-wider font-bold mb-3">
            Top Agricultural States by Gross Value Added (GVA) Contribution
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            <button
              onClick={() => setSelectedState('All')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedState === 'All'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              All India (230 MT Surplus)
            </button>
            {STATES_AGRI_DATA.map((state) => (
              <button
                key={state.id}
                onClick={() => setSelectedState(state.stateName)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                  selectedState === state.stateName
                    ? 'bg-emerald-600 text-white font-bold shadow-xs'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                <span>#{state.gdpRank} {state.stateName}</span>
                <span className="text-[10px] opacity-80 font-mono">({state.annualSurplusTonnageMt} MT)</span>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 liquid-glass p-4 rounded-xl border border-white/80 shadow-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-stone-600 font-mono font-bold mr-1">Season Filter:</span>
            {['All', 'Kharif', 'Rabi', 'All-Year'].map((season) => (
              <button
                key={season}
                onClick={() => setSelectedSeason(season)}
                className={`px-2.5 py-1 text-xs rounded-md font-semibold transition-colors ${
                  selectedSeason === season
                    ? 'bg-emerald-700 text-white'
                    : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
                }`}
              >
                {season === 'All' ? 'All Seasons' : season}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-stone-600 font-mono font-bold mr-1">Target Application:</span>
            {['All', 'Phytochemicals', 'Bio-Energy', 'Natural Materials'].map((pipe) => (
              <button
                key={pipe}
                onClick={() => setSelectedPipeline(pipe)}
                className={`px-2.5 py-1 text-xs rounded-md font-semibold transition-colors ${
                  selectedPipeline === pipe
                    ? 'bg-purple-700 text-white'
                    : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
                }`}
              >
                {pipe}
              </button>
            ))}
          </div>
        </div>

        {/* Residues Grid (Liquid Glass Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResidues.map((residue) => (
            <div
              key={residue.id}
              className="liquid-glass-card rounded-2xl p-6 flex flex-col justify-between transition-all group border border-white/90 shadow-sm hover:shadow-md"
            >
              <div>
                {/* Header info */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">
                      {residue.name}
                    </h3>
                    <div className="text-xs text-stone-600 flex items-center gap-2 mt-0.5 font-medium">
                      <span>{residue.cropSource}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono text-emerald-800 font-bold">{residue.season}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono text-stone-500">GCV (Dry)</div>
                    <div className="text-sm font-black text-amber-700 font-mono tabular-nums">
                      {residue.gcvKcalKg} kcal/kg
                    </div>
                  </div>
                </div>

                {/* States list */}
                <div className="flex flex-wrap gap-1 mb-4 text-[11px] text-stone-600 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-stone-400 inline shrink-0" />
                  <span>{residue.states.join(', ')}</span>
                </div>

                {/* Chemical & Physical Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 bg-stone-50 p-3 rounded-xl border border-stone-200 mb-4 text-xs font-mono">
                  <div>
                    <div className="text-[10px] text-stone-500">Ash Content</div>
                    <div className="font-bold text-stone-900">
                      {residue.ashContentPercent[0]}–{residue.ashContentPercent[1]}%
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-stone-500">Cellulose</div>
                    <div className="font-bold text-purple-700">
                      {residue.cellulosePercent[0]}–{residue.cellulosePercent[1]}%
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-stone-500">Lignin</div>
                    <div className="font-bold text-stone-900">
                      {residue.ligninPercent[0]}–{residue.ligninPercent[1]}%
                    </div>
                  </div>
                </div>

                {/* Bioactive Extracts Tagging */}
                <div className="mb-4">
                  <div className="text-[11px] font-mono text-purple-800 font-bold mb-1 flex items-center gap-1">
                    <Beaker className="w-3 h-3 text-purple-600" />
                    <span>Extractable Natural Bioactives:</span>
                  </div>
                  <div className="text-xs text-stone-700 leading-relaxed bg-white p-2.5 rounded-lg border border-purple-100 shadow-2xs font-medium">
                    {residue.bioactiveCompounds.join(', ')}
                  </div>
                </div>

                {/* Key Insight */}
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {residue.keyInsight}
                </p>
              </div>

              {/* Action: Bulk RFQ CTA */}
              <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-stone-500">
                  Bulk density: {residue.densityKgM3[0]}–{residue.densityKgM3[1]} kg/m³
                </span>
                <button
                  onClick={() => onSelectResidueForRfq(residue.name)}
                  className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1 shadow-xs"
                >
                  <span>Procure</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
