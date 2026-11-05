import React from 'react';
import { Volume2, VolumeX, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  isPlayingAudio: boolean;
  onToggleAudioTour: () => void;
  onOpenRfqModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isPlayingAudio,
  onToggleAudioTour,
  onOpenRfqModal
}) => {
  return (
    <header className="sticky top-0 z-50 liquid-glass-header transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a href="#" className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 group">
          <span className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-black shadow-md shadow-emerald-900/20 group-hover:bg-emerald-500 transition-colors">
            C
          </span>
          <span className="text-stone-900 font-extrabold tracking-tight">CIRCULO</span>
          <span className="text-xs font-mono text-emerald-800 font-semibold tracking-wider px-2 py-0.5 rounded border border-emerald-300 bg-emerald-50 shadow-xs">
            CodeCrusaders
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-stone-700">
          <a href="#problem" className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0">
            Crisis & Context
          </a>
          <a href="#statistics" className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0">
            Agronomic Toll
          </a>
          <a href="#solution" className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0">
            Dual-Pipeline Solution
          </a>
          <a href="#economics" className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0">
            Stakeholder Impact
          </a>
          <a href="#state-mapping" className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0">
            Residue Explorer
          </a>
          <a href="#b2b-software" className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0">
            B2B Software & RQS
          </a>
          <a href="#workflow" className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0">
            Workflow & KVKs
          </a>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleAudioTour}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              isPlayingAudio
                ? 'bg-amber-100 text-amber-900 border-amber-300 shadow-xs animate-pulse'
                : 'bg-white/80 text-stone-700 border-stone-200 hover:bg-stone-100 hover:text-stone-900 shadow-xs'
            }`}
            title="Listen to Executive Audio Narration"
          >
            {isPlayingAudio ? <VolumeX className="w-3.5 h-3.5 text-amber-700" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-600" />}
            <span>{isPlayingAudio ? 'Mute Voice' : 'Audio Tour'}</span>
          </button>

          <button
            onClick={onOpenRfqModal}
            className="px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm shadow-emerald-900/20 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <span>Request Bulk Residue</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </div>
    </header>
  );
};
