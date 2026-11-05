/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { AudioNarratorBar } from './components/AudioNarratorBar';
import { HeroProblemSection } from './components/HeroProblemSection';
import { StatisticsSection } from './components/StatisticsSection';
import { SolutionSection } from './components/SolutionSection';
import { EconomicsSection } from './components/EconomicsSection';
import { StateExplorerSection } from './components/StateExplorerSection';
import { SoftwareB2BSection } from './components/SoftwareB2BSection';
import { WorkflowSection } from './components/WorkflowSection';
import { Footer } from './components/Footer';
import { BulkRfqModal } from './components/BulkRfqModal';
import { narrationService } from './utils/speech';
import { NARRATION_SECTIONS } from './data/narrations';
import { NarrationSection } from './types';

export default function App() {
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [activeNarrationId, setActiveNarrationId] = useState<string | null>(null);
  const [speechRate, setSpeechRate] = useState<number>(1.0);
  const [showAudioBar, setShowAudioBar] = useState<boolean>(true);

  // Bulk RFQ Modal state
  const [isRfqModalOpen, setIsRfqModalOpen] = useState<boolean>(false);
  const [selectedResidueForRfq, setSelectedResidueForRfq] = useState<string>('Wheat Straw');

  // Sync with speech synthesis service
  useEffect(() => {
    const unsubscribe = narrationService.subscribe(({ isPlaying, activeId }) => {
      setIsPlayingAudio(isPlaying);
      setActiveNarrationId(activeId);
      if (isPlaying) {
        setShowAudioBar(true);
      }
    });
    return () => unsubscribe();
  }, []);

  const handlePlaySection = (sec: NarrationSection) => {
    setShowAudioBar(true);
    narrationService.speak(sec.id, sec.spokenText);
  };

  const handleStopAudio = () => {
    narrationService.stop();
  };

  const handleRateChange = (newRate: number) => {
    setSpeechRate(newRate);
    narrationService.setRate(newRate);
  };

  const handleToggleAudioTour = () => {
    if (isPlayingAudio) {
      narrationService.stop();
    } else {
      setShowAudioBar(true);
      const firstSec = NARRATION_SECTIONS[0];
      narrationService.speak(firstSec.id, firstSec.spokenText);
    }
  };

  const handleSelectResidueForRfq = (residueName: string) => {
    setSelectedResidueForRfq(residueName);
    setIsRfqModalOpen(true);
  };

  return (
    <div className="min-h-screen text-stone-900 flex flex-col font-sans selection:bg-emerald-600 selection:text-white relative overflow-x-hidden">
      {/* Scenic Agricultural Farm Background (Fixed) */}
      <div 
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url('/images/agro_farm_panorama.jpg')` }}
      />
      {/* Translucent Liquid Glass Diffusion Scrim for Maximum Text Readability */}
      <div className="fixed inset-0 -z-10 bg-white/65 sm:bg-white/70 backdrop-blur-[4px] pointer-events-none" />

      {/* Top Bar Header */}
      <Header
        isPlayingAudio={isPlayingAudio}
        onToggleAudioTour={handleToggleAudioTour}
        onOpenRfqModal={() => setIsRfqModalOpen(true)}
      />

      {/* Main Content Sections (1 through 7) */}
      <main className="flex-1 pb-28 sm:pb-32 relative z-10">
        {/* 1. Problem Statement & Real Visual Exposition */}
        <HeroProblemSection
          onPlayNarration={handlePlaySection}
          activeNarrationId={activeNarrationId}
          isPlayingAudio={isPlayingAudio}
        />

        {/* 2. Statistical Data: Agricultural Residues & Agronomic Toll */}
        <StatisticsSection
          onPlayNarration={handlePlaySection}
          activeNarrationId={activeNarrationId}
          isPlayingAudio={isPlayingAudio}
        />

        {/* 3. Proposed Solution Hub & Triple Pipeline (Bio-Energy, Phytochemicals, Compost) */}
        <SolutionSection
          onPlayNarration={handlePlaySection}
          activeNarrationId={activeNarrationId}
          isPlayingAudio={isPlayingAudio}
        />

        {/* 4. Multi-Stakeholder Economics & Unit Financial Model */}
        <EconomicsSection
          onPlayNarration={handlePlaySection}
          activeNarrationId={activeNarrationId}
          isPlayingAudio={isPlayingAudio}
        />

        {/* 5. State-by-Season-by-Agri-GDP Crop Residue Explorer */}
        <StateExplorerSection
          onPlayNarration={handlePlaySection}
          activeNarrationId={activeNarrationId}
          isPlayingAudio={isPlayingAudio}
          onSelectResidueForRfq={handleSelectResidueForRfq}
        />

        {/* 6. B2B Software Platform: Live RQS Calculator, Drying Curve & Bulk RFQ */}
        <SoftwareB2BSection
          onPlayNarration={handlePlaySection}
          activeNarrationId={activeNarrationId}
          isPlayingAudio={isPlayingAudio}
          selectedResidueFromExplorer={selectedResidueForRfq}
          onOpenBulkModal={() => setIsRfqModalOpen(true)}
        />

        {/* 7. Actual Startup Workflow & Institutional Integration (KVKs, ICAR, Farmer Unions) */}
        <WorkflowSection
          onPlayNarration={handlePlaySection}
          activeNarrationId={activeNarrationId}
          isPlayingAudio={isPlayingAudio}
        />
      </main>

      {/* Executive Audio Narrator Control Bar (Light Theme Liquid Glass) */}
      {showAudioBar && (
        <AudioNarratorBar
          isPlaying={isPlayingAudio}
          activeSectionId={activeNarrationId}
          onPlaySection={handlePlaySection}
          onStop={handleStopAudio}
          rate={speechRate}
          onRateChange={handleRateChange}
        />
      )}

      {/* Enterprise Bulk Buying RFQ Modal */}
      <BulkRfqModal
        isOpen={isRfqModalOpen}
        onClose={() => setIsRfqModalOpen(false)}
        initialResidueName={selectedResidueForRfq}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
