import React from 'react';
import { CheckCircle2, Shield, Volume2, UserCheck, RefreshCw, Smartphone } from 'lucide-react';
import { NARRATION_SECTIONS } from '../data/narrations';
import { NarrationSection } from '../types';

interface WorkflowSectionProps {
  onPlayNarration: (sec: NarrationSection) => void;
  activeNarrationId: string | null;
  isPlayingAudio: boolean;
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({
  onPlayNarration,
  activeNarrationId,
  isPlayingAudio
}) => {
  const narration = NARRATION_SECTIONS.find((s) => s.id === 'workflow')!;
  const isNarrating = activeNarrationId === 'workflow' && isPlayingAudio;

  const workflowSteps = [
    {
      step: '01',
      title: 'Field Registration & KVK Onboarding',
      icon: Smartphone,
      description: 'Farmers register harvested acreage via simplified vernacular app. Local Krishi Vigyan Kendras (KVKs) provide institutional credibility and frontline farmer onboarding.',
      deliverable: 'Farmer Digital ID & Crop Acreage Profile'
    },
    {
      step: '02',
      title: 'In-Situ Mechanization & QR Baling',
      icon: RefreshCw,
      description: 'Farmers rent balers and zero-tillage Happy Seeders from Custom Hiring Centres (CHCs) supported by the ₹66,310 Cr Agriculture Infrastructure Fund (AIF). Straw is compressed and tagged with tamper-proof QR codes.',
      deliverable: 'Geo-Tagged Straw Bales with Unique QR ID'
    },
    {
      step: '03',
      title: 'Sensor Intake & Instant RQS Scoring',
      icon: UserCheck,
      description: 'Bales arrive at the CIRCULO hub. Load cell, dielectric moisture probe, and RGB optical inspection compute the dynamic Residue Quality Score (RQS) in 60 seconds.',
      deliverable: 'Certified Digital Quality Certificate'
    },
    {
      step: '04',
      title: 'Algorithmic Matchmaking & Escrow',
      icon: Shield,
      description: 'Software routes batches: high-cellulose bagasse and flavonoid citrus peels to natural products manufacturers; standard straw to 71 CAQM coal co-firing plants. Buyer locks funds in bank escrow.',
      deliverable: 'Smart Contract & Escrow Guarantee'
    },
    {
      step: '05',
      title: 'Logistics Dispatch & Instant Settlement',
      icon: CheckCircle2,
      description: 'Integrated rural truckers deliver feedstock. Upon factory-gate sensor check, escrow automatically disburses directly to farmer accounts, deducting our 5–8% platform margin.',
      deliverable: 'Instant Direct UPI / Bank Settlement'
    }
  ];

  return (
    <section id="workflow" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Sub-header & Voice Tour */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 text-xs text-stone-600">
            <span className="text-emerald-800 font-bold uppercase tracking-wider font-mono">07. Startup Execution</span>
            <span aria-hidden="true">·</span>
            <span>Operational Lifecycle & Institutional Integration</span>
            <span aria-hidden="true">·</span>
            <span>ICAR, KVK & Farmer Union Alignment</span>
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
            <span>{isNarrating ? 'Playing Workflow Audio...' : 'Listen to Startup Workflow'}</span>
          </button>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-stone-900 mb-4">
            End-to-End Operational Workflow: From Field to Factory Gate
          </h2>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
            Technology fails without grounded operational execution. CIRCULO orchestrates the entire physical and financial supply chain—overcoming rural resistance through guaranteed economic incentives and institutional partnerships with ICAR Krishi Vigyan Kendras.
          </p>
        </div>

        {/* 5-Step Visual Workflow Grid (Liquid Glass Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
          {workflowSteps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="liquid-glass-card rounded-2xl p-5 flex flex-col justify-between relative group border border-white/90 shadow-sm hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-emerald-800">
                      {s.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-stone-900 mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {s.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-200 text-[11px] font-mono text-emerald-800 font-bold">
                  {s.deliverable}
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Integration & Friction Point Resolution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Box 1: Farmer Association Alignment */}
          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-white/80 shadow-md">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
              <h3 className="text-xs font-mono uppercase text-amber-900 tracking-wider font-bold">
                Socio-Political Friction Point Resolved
              </h3>
            </div>
            <h4 className="text-xl font-black text-stone-900 mb-3">
              Overcoming Farmer Union Resistance (BKU & Shetkari Sanghatana)
            </h4>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-4 font-normal">
              Historically, government bans and punitive fines levied on stubble burning triggered severe protests from the <strong>Bharatiya Kisan Union (BKU)</strong> and <strong>Shetkari Sanghatana</strong>. Farmers burn residue out of economic necessity because renting seed drills that jam in loose straw costs too much.
            </p>

            <div className="bg-white p-4 rounded-2xl border border-stone-200 space-y-2.5 text-xs text-stone-700 shadow-xs">
              <div className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">1.</span>
                <span>
                  <strong>Incentive Over Penalties:</strong> CIRCULO monetizes baled residue at ₹2.4–₹2.8/kg, directly exceeding the rental fee of non-jamming Happy Seeders.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">2.</span>
                <span>
                  <strong>Happy Seeder Single-Pass Sowing:</strong> Slices through heavy residue to sow wheat into mulch, cutting ₹1,000/ha in tractor diesel.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">3.</span>
                <span>
                  <strong>Alliance Transformation:</strong> When farmers reliably pocket ₹10,175/ha in net gains, union leaders become vocal platform advocates.
                </span>
              </div>
            </div>
          </div>

          {/* Box 2: ICAR & Krishi Vigyan Kendra (KVK) Integration */}
          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-white/80 shadow-md">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <h3 className="text-xs font-mono uppercase text-emerald-900 tracking-wider font-bold">
                Institutional Anchoring & Scale
              </h3>
            </div>
            <h4 className="text-xl font-black text-stone-900 mb-3">
              Integration with ICAR & Krishi Vigyan Kendra (KVK) Science Centers
            </h4>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-4 font-normal">
              To scale rapidly without prohibitive customer acquisition costs, CIRCULO embeds within the existing state agricultural extension architecture of the <strong>Indian Council of Agricultural Research (ICAR)</strong>.
            </p>

            <div className="bg-white p-4 rounded-2xl border border-stone-200 space-y-2.5 text-xs text-stone-700 shadow-xs">
              <div className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">1.</span>
                <span>
                  <strong>KVK Baramati & Narayangaon:</strong> Partnering with high-tech KVK Baramati and KVK Narayangaon (covering 6 talukas in Pune) for sensor calibration and on-farm frontline demos.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">2.</span>
                <span>
                  <strong>ICAR CIFRI 'Waste to Wealth':</strong> Applying validated scientific protocols for bioconversion and agronomic mass-balance accounting.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">3.</span>
                <span>
                  <strong>National Schemes Sync:</strong> Tapping the ₹66,310 Crore Agriculture Infrastructure Fund (AIF) and 979 operational GOBARdhan biogas units.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
