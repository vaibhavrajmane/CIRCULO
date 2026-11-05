export type Season = 'Kharif' | 'Rabi' | 'Zaid' | 'All-Year';

export type IndustrialPipeline = 'Bio-Energy' | 'Phytochemicals' | 'Bio-Compost' | 'Green Materials';

export interface CropResidue {
  id: string;
  name: string;
  cropSource: string;
  season: Season;
  states: string[];
  gcvKcalKg: number;
  ashContentPercent: [number, number]; // min, max
  moistureTypicalPercent: [number, number];
  cellulosePercent: [number, number];
  hemicellulosePercent: [number, number];
  ligninPercent: [number, number];
  densityKgM3: [number, number];
  bioactiveCompounds: string[];
  industrialApplications: {
    energy: string;
    phytochemical: string;
    sustainableMaterials: string;
  };
  keyInsight: string;
}

export interface StateAgriData {
  id: string;
  stateName: string;
  gdpRank: number;
  agriGvaSharePercent: number; // contribution
  primaryCrops: {
    kharif: string[];
    rabi: string[];
    zaid?: string[];
  };
  dominantResidues: string[];
  annualSurplusTonnageMt: number; // in Million Tonnes
  activeKvkHubs: string[];
  policyNotes: string;
}

export interface RfqSubmission {
  id: string;
  buyerCompany: string;
  residueType: string;
  targetQuantityMt: number;
  maxAshPercent: number;
  minGcvKcalKg: number;
  targetPipeline: IndustrialPipeline;
  maxMoisturePercent: number;
  deliveryState: string;
  radiusKm: number;
  estimatedFarmersAggregated: number;
  estimatedTotalValueInr: number;
  status: 'Draft' | 'Matching' | 'Matched' | 'Escrow Secured';
  timestamp: string;
}

export interface NarrationSection {
  id: string;
  title: string;
  subtitle: string;
  spokenText: string;
  durationEstSec: number;
}
