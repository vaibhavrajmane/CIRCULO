import React, { useState } from 'react';
import { Play, Square, Volume2, ChevronUp, ChevronDown, FileText, X } from 'lucide-react';
import { NARRATION_SECTIONS } from '../data/narrations';
import { NarrationSection } from '../types';

interface AudioNarratorBarProps {
  isPlaying: boolean;
  activeSectionId: string | null;
  onPlaySection: (section: NarrationSection) => void;
  onStop: () => void;
  rate: number;
  onRateChange: (newRate: number) => void;
}

export const AudioNarratorBar: React.FC<AudioNarratorBarProps> = ({
  isPlaying,
  activeSectionId,
  onPlaySection,
  onStop,
  rate,
  onRateChange
}) => {
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [showTranscript, setShowTranscript] = useState<boolean>(false);

  const currentSection = NARRATION_SECTIONS.find((s) => s.id === activeSectionId) || NARRATION_SECTIONS[0];

  // Minimized Compact Pill Mode (Light Theme Liquid Glass)
  if (isMinimized) {
    return (
      <aside aria-label="Audio Narration Controller" className="fixed bottom-4 right-4 z-40 flex items-center gap-2 bg-white/95 border border-emerald-300 rounded-full shadow-xl backdrop-blur-xl px-3 py-2 text-stone-800 transition-all hover:border-emerald-500">
        <button
          onClick={() => {
            if (isPlaying) onStop();
            else onPlaySection(currentSection);
          }}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            isPlaying
              ? 'bg-emerald-600 text-white shadow-md animate-pulse'
              : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
          }`}
          title={isPlaying ? 'Pause Narration' : 'Play Narration'}
        >
          {isPlaying ? <Square className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
        </button>

        <div className="flex flex-col text-left pr-2 cursor-pointer" onClick={() => setIsMinimized(false)}>
          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold">
            {isPlaying ? 'Speaking...' : 'Executive Voice'}
          </span>
          <span className="text-xs font-bold text-stone-900 max-w-[140px] truncate">
            {currentSection.title.split(':')[0]}
          </span>
        </div>

        <button
          onClick={() => setIsMinimized(false)}
          className="p-1.5 text-stone-500 hover:text-stone-900 rounded-full hover:bg-stone-100 transition-colors"
          title="Expand Audio Console"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      </aside>
    );
  }

  // Full Screen Responsive Docked Bottom Bar (Light Theme Liquid Glass)
  return (
    <aside aria-label="Audio Narration Console" className="fixed bottom-0 inset-x-0 z-40 bg-white/92 border-t border-emerald-100/90 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl text-stone-800 transition-all">
      {/* Live Transcript Drawer */}
      {showTranscript && (
        <div className="border-b border-stone-200 bg-white/95 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold mb-1">
                Executive Pitch Voiceover Script — {currentSection.title}
              </div>
              <p className="text-xs text-stone-800 leading-relaxed italic max-h-20 overflow-y-auto pr-2 font-medium">
                "{currentSection.spokenText}"
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowTranscript(false)}
            className="text-stone-400 hover:text-stone-800 p-1 rounded-md hover:bg-stone-100 transition-colors shrink-0"
            title="Close Transcript"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Controls Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex flex-wrap md:flex-nowrap items-center justify-between gap-3 sm:gap-6">
        {/* Left: Section Info & Play Indicator */}
        <div className="flex items-center gap-3 min-w-0 flex-1 md:flex-initial">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
              isPlaying
                ? 'bg-emerald-100 border-emerald-400 text-emerald-800 shadow-sm'
                : 'bg-stone-100 border-stone-200 text-stone-600'
            }`}
          >
            <Volume2 className={`w-4 h-4 ${isPlaying ? 'animate-pulse text-emerald-700' : ''}`} />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs text-stone-600 leading-tight">
              <span className="font-bold text-emerald-800 tracking-wider uppercase font-mono text-[10px]">
                {isPlaying ? 'Narration Live' : 'Voice Tour'}
              </span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span className="truncate hidden sm:inline text-stone-600 font-medium">{currentSection.subtitle}</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-stone-900 truncate mt-0.5">
              {currentSection.title}
            </div>
          </div>
        </div>

        {/* Center: Quick Chapter Navigator (7 Parts) */}
        <div className="hidden xl:flex items-center gap-1 bg-stone-100/80 p-1 rounded-xl border border-stone-200 shrink-0">
          {NARRATION_SECTIONS.map((sec, i) => {
            const isThisActive = activeSectionId === sec.id && isPlaying;
            return (
              <button
                key={sec.id}
                onClick={() => onPlaySection(sec)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  isThisActive
                    ? 'bg-emerald-600 text-white font-bold shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
                title={`Part ${i + 1}: ${sec.title}`}
              >
                Part {i + 1}
              </button>
            );
          })}
        </div>

        {/* Right: Controls (Rate, Transcript Toggle, Play/Stop, Minimize) */}
        <div className="flex items-center gap-2.5 shrink-0 justify-end">
          {/* Rate Switcher */}
          <div className="flex items-center bg-stone-100/90 rounded-lg border border-stone-200 p-0.5 text-xs text-stone-700 font-mono">
            {[0.8, 1.0, 1.2].map((r) => (
              <button
                key={r}
                onClick={() => onRateChange(r)}
                className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
                  rate === r ? 'bg-white text-emerald-800 font-bold shadow-xs' : 'text-stone-500 hover:text-stone-900'
                }`}
                title={`Playback speed ${r}x`}
              >
                {r}x
              </button>
            ))}
          </div>

          {/* Transcript Drawer Toggle */}
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className={`px-2.5 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-colors ${
              showTranscript
                ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50 hover:text-stone-900'
            }`}
            title="Toggle Transcript Text"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-700" />
            <span className="hidden sm:inline">Script</span>
          </button>

          {/* Play / Stop Button */}
          {isPlaying ? (
            <button
              onClick={onStop}
              className="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <Square className="w-3.5 h-3.5 fill-current" />
              <span>Stop</span>
            </button>
          ) : (
            <button
              onClick={() => onPlaySection(currentSection)}
              className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Listen</span>
            </button>
          )}

          {/* Minimize Button */}
          <button
            onClick={() => setIsMinimized(true)}
            className="p-1.5 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors ml-1"
            title="Minimize audio bar"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
