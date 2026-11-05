import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { CROP_RESIDUES } from '../data/cropResidues';

interface BulkRfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialResidueName?: string;
}

export const BulkRfqModal: React.FC<BulkRfqModalProps> = ({
  isOpen,
  onClose,
  initialResidueName
}) => {
  const [buyerName, setBuyerName] = useState('NTPC Green Energy / Bio-Power Cluster');
  const [residueName, setResidueName] = useState(initialResidueName || 'Wheat Straw');
  const [quantityMt, setQuantityMt] = useState(2500);
  const [targetPipeline, setTargetPipeline] = useState('Bio-Energy (Pellets & Boilers)');
  const [deliveryState, setDeliveryState] = useState('Punjab & Western Uttar Pradesh');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const farmersAggregated = Math.round(quantityMt / 22);
  const estimatedContractInr = quantityMt * 1000 * 2.6;
  const escrowRequiredInr = estimatedContractInr * 1.05;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-md">
      <div className="bg-white/95 border border-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 text-stone-900 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-stone-400 hover:text-stone-800 p-1.5 rounded-lg hover:bg-stone-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <span className="text-xs font-mono uppercase text-emerald-800 font-bold tracking-wider">
                Enterprise B2B Gateway
              </span>
            </div>
            <h3 className="text-2xl font-black text-stone-900 mb-2">
              Raise Bulk Industrial Residue Procurement RFQ
            </h3>
            <p className="text-xs text-stone-600 mb-6 font-medium">
              CIRCULO aggregates verified smallholder farm batches across Krishi Vigyan Kendra clusters into a single quality-certified smart contract.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-stone-800 block mb-1">Company / Facility Name:</label>
                <input
                  type="text"
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-lg px-3.5 py-2 text-xs text-stone-900 focus:outline-none focus:border-emerald-600"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-stone-800 block mb-1">Target Feedstock:</label>
                  <select
                    value={residueName}
                    onChange={(e) => setResidueName(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-lg px-3.5 py-2 text-xs text-stone-900 focus:outline-none focus:border-emerald-600"
                  >
                    {CROP_RESIDUES.map((r) => (
                      <option key={r.id} value={r.name}>
                        {r.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-800 block mb-1">Required Volume (Metric Tonnes):</label>
                  <input
                    type="number"
                    min="100"
                    step="100"
                    value={quantityMt}
                    onChange={(e) => setQuantityMt(Number(e.target.value))}
                    className="w-full bg-white border border-stone-300 rounded-lg px-3.5 py-2 text-xs text-stone-900 font-mono focus:outline-none focus:border-emerald-600"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-stone-800 block mb-1">Target Application Pipeline:</label>
                  <select
                    value={targetPipeline}
                    onChange={(e) => setTargetPipeline(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-lg px-3.5 py-2 text-xs text-stone-900 focus:outline-none focus:border-emerald-600"
                  >
                    <option value="Bio-Energy (Pellets & Boilers)">Bio-Energy (Pellets & Boilers)</option>
                    <option value="Phytochemicals & Natural Extracts">Phytochemicals & Natural Extracts</option>
                    <option value="Green Silica Extraction">Green Silica Extraction (Rice Husk)</option>
                    <option value="Natural Fiber & Textiles">Natural Fiber & Textiles (Banana / Bagasse)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-800 block mb-1">Geographic Sourcing Cluster:</label>
                  <input
                    type="text"
                    value={deliveryState}
                    onChange={(e) => setDeliveryState(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-lg px-3.5 py-2 text-xs text-stone-900 focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              {/* Aggregation Summary Box */}
              <div className="bg-emerald-50/80 p-4 rounded-xl border border-emerald-200 text-xs font-mono space-y-2">
                <div className="flex justify-between text-stone-600">
                  <span>Smallholders Automatically Aggregated:</span>
                  <span className="text-stone-900 font-bold">{farmersAggregated} Farmers</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Estimated Total Contract Value:</span>
                  <span className="text-emerald-800 font-bold">₹{estimatedContractInr.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Escrow Fund Deposit Required:</span>
                  <span className="text-amber-800 font-bold">₹{escrowRequiredInr.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-md shadow-emerald-900/10"
                >
                  <span>Lock Smart Escrow & Broadcast RFQ</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-semibold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-stone-900">Smart RFQ Broadcast Active</h3>
            <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed font-medium">
              Your bulk request for <strong>{quantityMt.toLocaleString()} MT of {residueName}</strong> has been published to CIRCULO’s verified Custom Hiring Centre (CHC) network.
            </p>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs font-mono text-left max-w-md mx-auto space-y-1.5 text-stone-600">
              <div className="flex justify-between">
                <span>Contract Reference:</span>
                <span className="text-stone-900 font-bold">RFQ-2026-NTPC-882</span>
              </div>
              <div className="flex justify-between">
                <span>Target Quality Spec:</span>
                <span className="text-emerald-700 font-bold">RQS &ge; 82 / 100</span>
              </div>
              <div className="flex justify-between">
                <span>Verification Point:</span>
                <span className="text-stone-800">Factory Gate Automated Sensor Pass</span>
              </div>
            </div>
            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs transition-colors shadow-sm"
            >
              Done & Return to Console
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
