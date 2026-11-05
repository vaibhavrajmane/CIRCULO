import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="liquid-glass text-stone-700 border-t border-white/80 text-xs mt-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Wordmark & Mission */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-stone-900 font-bold text-lg mb-3">
              <span className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-black text-sm shadow-xs">
                C
              </span>
              <span>CIRCULO</span>
            </div>
            <p className="text-stone-600 text-xs leading-relaxed mb-4 font-medium">
              Decentralized Circular-Resource Platform for Agricultural Residue Valorization, Dual-Pipeline B2B Routing & On-Site Quality Assurance.
            </p>
            <div className="text-[11px] font-mono text-emerald-800 font-bold">
              Developed by Team CodeCrusaders | Agriculture & Sustainability Track
            </div>
          </div>

          {/* Col 2: Institutional & Research Sources */}
          <div>
            <div className="text-stone-900 font-bold mb-3">Key Research Grounding</div>
            <ul className="space-y-2 text-stone-600 text-xs font-medium">
              <li>• ICAR – Ex-situ Crop Residue Management</li>
              <li>• MoEF National DPR on Crop Residue Burning</li>
              <li>• NITI Aayog Agricultural Biomass Study</li>
              <li>• Krishi Vigyan Kendra (KVK) Baramati & Narayangaon</li>
              <li>• CAQM Co-firing Mandate & 71 Thermal Plants</li>
              <li>• Agriculture Infrastructure Fund (AIF)</li>
            </ul>
          </div>

          {/* Col 3: SDG & Impact Alignment */}
          <div>
            <div className="text-stone-900 font-bold mb-3">UN SDG Commitments</div>
            <ul className="space-y-2 text-stone-600 text-xs font-medium">
              <li>• <strong>SDG 12:</strong> Responsible Consumption & Production</li>
              <li>• <strong>SDG 7:</strong> Affordable & Clean Energy (Biomass Pellets)</li>
              <li>• <strong>SDG 13:</strong> Climate Action (1.46 MT CO₂ Avoided/Tonne)</li>
              <li>• <strong>SDG 8:</strong> Decent Work & Rural Youth Employment</li>
              <li>• <strong>SDG 2:</strong> Zero Hunger (Soil Biology & +21% Net Yield)</li>
            </ul>
          </div>

          {/* Col 4: Platform Pathways */}
          <div>
            <div className="text-stone-900 font-bold mb-3">Industrial Pathways</div>
            <ul className="space-y-2 text-stone-600 text-xs font-medium">
              <li>• <strong>Bio-Energy:</strong> BIS Biomass Pellets & GOBARdhan CBG</li>
              <li>• <strong>Phytochemicals:</strong> Sugarcane Cellulose & Citrus Bioflavonoids</li>
              <li>• <strong>Green Materials:</strong> Rice Husk Green Silica & Banana Fiber</li>
              <li>• <strong>Regenerative Soil:</strong> Organic Compost & Agronomic Biochar</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 font-medium">
          <div>
            © 2026 CIRCULO Agro-Valor Platform | Team CodeCrusaders.
          </div>
          <div className="flex items-center gap-4">
            <span>Research Prototype & Circular Infrastructure</span>
            <span aria-hidden="true">·</span>
            <span>All statistical estimates grounded in published government & ICAR data</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
