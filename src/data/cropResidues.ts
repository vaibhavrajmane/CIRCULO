import { CropResidue, StateAgriData } from '../types';

export const CROP_RESIDUES: CropResidue[] = [
  {
    id: 'sugarcane-bagasse',
    name: 'Sugarcane Bagasse',
    cropSource: 'Sugarcane',
    season: 'All-Year',
    states: ['Uttar Pradesh', 'Maharashtra', 'Karnataka', 'Tamil Nadu'],
    gcvKcalKg: 4250,
    ashContentPercent: [2.5, 4.5],
    moistureTypicalPercent: [45, 52],
    cellulosePercent: [32, 45],
    hemicellulosePercent: [20, 32],
    ligninPercent: [17, 32],
    densityKgM3: [120, 160],
    bioactiveCompounds: ['Quercetin', 'p-Coumaric Acid', 'Ferulic Acid', 'Hydroxyethyl Cellulose precursors'],
    industrialApplications: {
      energy: 'Co-generation thermal boilers, second-generation (2G) bioethanol synthesis, compressed biogas (CBG).',
      phytochemical: 'Cellulose acetate, microcrystalline cellulose, antioxidant polyphenols (quercetin, ferulic acid) for cosmetics and pharma.',
      sustainableMaterials: 'Biodegradable tableware, pulp and paper packaging, moldable acoustic insulation boards.'
    },
    keyInsight: 'Contains up to 45% cellulose and rich phenolic acids; drying down from 49% milling moisture triples calorific efficiency and enables high-margin pharmaceutical extraction.'
  },
  {
    id: 'paddy-straw',
    name: 'Rice (Paddy) Straw',
    cropSource: 'Paddy Rice',
    season: 'Kharif',
    states: ['Punjab', 'Haryana', 'Uttar Pradesh', 'West Bengal'],
    gcvKcalKg: 3350,
    ashContentPercent: [15, 20],
    moistureTypicalPercent: [14, 28],
    cellulosePercent: [35, 42],
    hemicellulosePercent: [22, 28],
    ligninPercent: [12, 18],
    densityKgM3: [50, 75],
    bioactiveCompounds: ['Phenolic acids', 'Phytosterols', 'Soluble dietary arabinoxylans'],
    industrialApplications: {
      energy: 'Torrefied biomass pellets for NTPC coal co-firing (CAQM mandate), 2G ethanol plants, biochar gasifiers.',
      phytochemical: 'Lignocellulosic sugars for biopolymer fermentation and natural bio-mulch polymers.',
      sustainableMaterials: 'Mushroom cultivation substrate, bio-composite boards, straw-clay insulating bricks.'
    },
    keyInsight: 'High silica (15–20% ash) requires strict boiler de-ashing or blending, but represents over 22 MT surplus in Punjab alone within a critical 20-day harvest window.'
  },
  {
    id: 'wheat-straw',
    name: 'Wheat Straw',
    cropSource: 'Wheat',
    season: 'Rabi',
    states: ['Uttar Pradesh', 'Madhya Pradesh', 'Punjab', 'Rajasthan', 'Haryana'],
    gcvKcalKg: 3800,
    ashContentPercent: [8, 12],
    moistureTypicalPercent: [10, 15],
    cellulosePercent: [36, 43],
    hemicellulosePercent: [24, 30],
    ligninPercent: [16, 21],
    densityKgM3: [60, 90],
    bioactiveCompounds: ['Ferulic acid', 'Vanillic acid', 'Alkylresorcinols'],
    industrialApplications: {
      energy: 'Standardized industrial biomass pellets meeting BIS guidelines, thermal boiler fuel.',
      phytochemical: 'Enzymatic vanillin extraction, natural antioxidant food preservatives.',
      sustainableMaterials: 'Animal fodder enrichment, biodegradable packaging, high-fiber acoustic panels.'
    },
    keyInsight: 'Moderate ash (8–12%) and rapid natural field-drying make it the primary choice for industrial pelletizing plants across central and north India.'
  },
  {
    id: 'groundnut-shells',
    name: 'Groundnut (Peanut) Shells',
    cropSource: 'Groundnut',
    season: 'Kharif',
    states: ['Gujarat', 'Tamil Nadu', 'Andhra Pradesh', 'Karnataka'],
    gcvKcalKg: 4350,
    ashContentPercent: [2, 4],
    moistureTypicalPercent: [8, 12],
    cellulosePercent: [38, 44],
    hemicellulosePercent: [15, 20],
    ligninPercent: [26, 34],
    densityKgM3: [200, 250],
    bioactiveCompounds: ['Luteolin', 'Resveratrol traces', 'Proanthocyanidins'],
    industrialApplications: {
      energy: 'High-density premium fuel briquettes, ultra-low ash industrial furnace fuel (GCV >4,200 kcal/kg).',
      phytochemical: 'Luteolin antioxidant extraction for nutraceuticals, natural food colorants, flavones.',
      sustainableMaterials: 'High-surface-area activated carbon for water purification filters, brake pad composite friction dust.'
    },
    keyInsight: 'Exceptionally high GCV (4,100–4,500 kcal/kg) and low ash (2–4%) make groundnut shell the gold standard for premium clean biomass combustion.'
  },
  {
    id: 'citrus-peel-waste',
    name: 'Citrus (Orange/Lemon) Peels',
    cropSource: 'Citrus Fruits (Nagpur, Abohar, Punjab, Maharashtra)',
    season: 'Rabi',
    states: ['Maharashtra', 'Punjab', 'Madhya Pradesh', 'Andhra Pradesh'],
    gcvKcalKg: 3600,
    ashContentPercent: [3, 5],
    moistureTypicalPercent: [68, 78],
    cellulosePercent: [14, 22],
    hemicellulosePercent: [10, 16],
    ligninPercent: [5, 9],
    densityKgM3: [350, 450],
    bioactiveCompounds: ['Hesperidin', 'Naringin', 'D-Limonene (Terpene)', 'High-methoxyl Pectin'],
    industrialApplications: {
      energy: 'Anaerobic bio-methanation (CBG) after limonene recovery; pelletized bio-char.',
      phytochemical: 'Pharmaceutical-grade citrus bioflavonoids (naringin/hesperidin for venous insufficiency and cardiovascular health), pure D-limonene green solvent.',
      sustainableMaterials: 'Food-grade pectin gelling agent, natural antimicrobial food coatings, botanical fragrance synthesis.'
    },
    keyInsight: 'High moisture (75%) makes direct combustion unviable, but high-margin phytochemical extraction yields up to ₹4,500/kg in value-added flavonoids for nutraceutical exporters.'
  },
  {
    id: 'cotton-stalks',
    name: 'Cotton Stalks',
    cropSource: 'Cotton',
    season: 'Kharif',
    states: ['Maharashtra', 'Gujarat', 'Punjab', 'Telangana'],
    gcvKcalKg: 4100,
    ashContentPercent: [4, 7],
    moistureTypicalPercent: [12, 18],
    cellulosePercent: [40, 48],
    hemicellulosePercent: [18, 24],
    ligninPercent: [22, 28],
    densityKgM3: [130, 150],
    bioactiveCompounds: ['Gossypol derivatives', 'Condensed tannins', 'Lignocellulose resins'],
    industrialApplications: {
      energy: 'Dense commercial fuel briquettes, gasifier power plants.',
      phytochemical: 'Lignin-derived bio-resins, adhesives for wood composite binding.',
      sustainableMaterials: 'Particle board manufacturing, corrugated packaging fiber, hardboard sheets.'
    },
    keyInsight: 'Naturally dense woody structure (130–150 kg/m³) provides superior pellet compression and binderless briquetting strength.'
  },
  {
    id: 'soybean-stalks',
    name: 'Soybean Stalks & Pods',
    cropSource: 'Soybean',
    season: 'Kharif',
    states: ['Madhya Pradesh', 'Maharashtra', 'Rajasthan'],
    gcvKcalKg: 3850,
    ashContentPercent: [5, 8],
    moistureTypicalPercent: [11, 16],
    cellulosePercent: [34, 40],
    hemicellulosePercent: [18, 22],
    ligninPercent: [16, 20],
    densityKgM3: [90, 130],
    bioactiveCompounds: ['Isoflavones (Daidzein, Genistein)', 'Soy saponins'],
    industrialApplications: {
      energy: 'Industrial biomass pellets for textile and pharmaceutical boiler plants.',
      phytochemical: 'Soy isoflavone concentrates for natural cosmetics and anti-aging topicals.',
      sustainableMaterials: 'High-protein livestock feed supplements, bio-compost inoculants.'
    },
    keyInsight: 'Dominant agricultural byproduct of Malwa and Vidarbha; low ash (5–8%) enables seamless integration with industrial thermal boilers.'
  },
  {
    id: 'mustard-stalks',
    name: 'Mustard Stalks',
    cropSource: 'Mustard & Rapeseed',
    season: 'Rabi',
    states: ['Rajasthan', 'Uttar Pradesh', 'Haryana', 'Madhya Pradesh'],
    gcvKcalKg: 3650,
    ashContentPercent: [6, 9],
    moistureTypicalPercent: [10, 14],
    cellulosePercent: [38, 44],
    hemicellulosePercent: [19, 23],
    ligninPercent: [18, 24],
    densityKgM3: [100, 140],
    bioactiveCompounds: ['Glucosinolates', 'Sinapic acid', 'Biofumigant sulfur derivatives'],
    industrialApplications: {
      energy: 'Dedicated biomass thermal power plants (Rajasthan grid-connected biomass projects).',
      phytochemical: 'Natural bio-pesticides, organic soil bio-fumigants against fungal nematodes.',
      sustainableMaterials: 'Hollow-stem lightweight packaging insulation, natural plant fiber mats.'
    },
    keyInsight: 'High calorific content (3,500–3,700 kcal/kg) and natural sulfur derivatives provide innate antimicrobial resistance during outdoor field storage.'
  },
  {
    id: 'paddy-husk',
    name: 'Rice (Paddy) Husk',
    cropSource: 'Rice Milling',
    season: 'All-Year',
    states: ['West Bengal', 'Uttar Pradesh', 'Punjab', 'Andhra Pradesh'],
    gcvKcalKg: 3400,
    ashContentPercent: [16, 22],
    moistureTypicalPercent: [8, 11],
    cellulosePercent: [30, 36],
    hemicellulosePercent: [18, 24],
    ligninPercent: [22, 28],
    densityKgM3: [110, 140],
    bioactiveCompounds: ['Amorphous Silica (SiO2 >90% of ash)', 'Oryzanol', 'Ferulates'],
    industrialApplications: {
      energy: 'Fluidized bed boiler combustion, localized rice mill captive power.',
      phytochemical: 'Gamma-oryzanol nutraceutical extracts, natural cholesterol-lowering agents.',
      sustainableMaterials: 'High-purity green precipitated silica for green automobile tires, green cement pozzolan, silicon anodes for lithium batteries.'
    },
    keyInsight: 'Ash contains over 90% amorphous silica; green silica extracted from rice husk ash commands ₹80–₹120/kg in specialty tire rubber and aerospace ceramics.'
  },
  {
    id: 'banana-pseudostem',
    name: 'Banana Pseudostem Residue',
    cropSource: 'Banana',
    season: 'All-Year',
    states: ['Tamil Nadu', 'Maharashtra', 'Gujarat', 'Andhra Pradesh'],
    gcvKcalKg: 3100,
    ashContentPercent: [6, 10],
    moistureTypicalPercent: [80, 88],
    cellulosePercent: [60, 65], // on dry fiber basis
    hemicellulosePercent: [14, 18],
    ligninPercent: [8, 12],
    densityKgM3: [300, 420],
    bioactiveCompounds: ['Microcrystalline Cellulose', 'Natural tannin extracts', 'Potassium-rich plant sap'],
    industrialApplications: {
      energy: 'Anaerobic biogas production, high-potash liquid bio-fertilizer.',
      phytochemical: 'Pharmaceutical-grade microcrystalline cellulose (MCC), natural polymer binders for tablets.',
      sustainableMaterials: 'High-tensile natural textile fibers, eco-friendly sanitary napkins, marine rope, currency grade paper.'
    },
    keyInsight: 'Over 60% cellulose in dry fiber allows replacement of synthetic polyester with biodegradable natural fibers, while sap provides organic liquid potash fertilizer.'
  }
];

export const STATES_AGRI_DATA: StateAgriData[] = [
  {
    id: 'uttar-pradesh',
    stateName: 'Uttar Pradesh',
    gdpRank: 1,
    agriGvaSharePercent: 25.8,
    primaryCrops: {
      kharif: ['Rice', 'Sugarcane', 'Maize', 'Bajra'],
      rabi: ['Wheat', 'Mustard', 'Barley', 'Potato']
    },
    dominantResidues: ['Sugarcane Bagasse', 'Wheat Straw', 'Rice Straw', 'Mustard Stalks'],
    annualSurplusTonnageMt: 42.5,
    activeKvkHubs: ['KVK Muzaffarnagar', 'KVK Meerut', 'KVK Varanasi', 'KVK Lucknow'],
    policyNotes: 'Top sugarcane & wheat producer in India. High density of sugar mills and biomass pellet mandates for NTPC Dadri & Tanda power plants.'
  },
  {
    id: 'madhya-pradesh',
    stateName: 'Madhya Pradesh',
    gdpRank: 2,
    agriGvaSharePercent: 36.2,
    primaryCrops: {
      kharif: ['Soybean', 'Rice', 'Maize', 'Cotton'],
      rabi: ['Wheat', 'Gram', 'Mustard']
    },
    dominantResidues: ['Soybean Stalks', 'Wheat Straw', 'Maize Stalks', 'Mustard Stalks'],
    annualSurplusTonnageMt: 34.8,
    activeKvkHubs: ['KVK Indore', 'KVK Ujjain', 'KVK Sehore', 'KVK Jabalpur'],
    policyNotes: 'The soybean capital of India. Massive availability of high-density soybean stalks suitable for low-ash boiler pellets.'
  },
  {
    id: 'punjab',
    stateName: 'Punjab',
    gdpRank: 3,
    agriGvaSharePercent: 27.5,
    primaryCrops: {
      kharif: ['Rice (Paddy)', 'Cotton', 'Maize'],
      rabi: ['Wheat', 'Potato', 'Mustard']
    },
    dominantResidues: ['Rice Straw', 'Wheat Straw', 'Cotton Stalks', 'Citrus Peels (Abohar)'],
    annualSurplusTonnageMt: 28.6,
    activeKvkHubs: ['KVK Ludhiana (PAU)', 'KVK Patiala', 'KVK Sangrur', 'KVK Bathinda'],
    policyNotes: 'Generates ~21.98 MT gross rice straw alone. Strict CAQM monitoring; 71 regional co-firing thermal plants require verified BIS-compliant pellets.'
  },
  {
    id: 'maharashtra',
    stateName: 'Maharashtra',
    gdpRank: 4,
    agriGvaSharePercent: 12.8,
    primaryCrops: {
      kharif: ['Cotton', 'Sugarcane', 'Soybean', 'Pulses'],
      rabi: ['Sorghum (Jowar)', 'Wheat', 'Gram', 'Citrus (Nagpur)']
    },
    dominantResidues: ['Cotton Stalks', 'Sugarcane Bagasse', 'Citrus Peels', 'Banana Pseudostem'],
    annualSurplusTonnageMt: 32.1,
    activeKvkHubs: ['KVK Baramati (High-Tech Model Hub)', 'KVK Narayangaon (Pune district)', 'KVK Nagpur', 'KVK Jalgaon'],
    policyNotes: 'Key pilot territory for CIRCULO. Strong sugar cooperative clusters and world-famous Nagpur citrus processing industries.'
  },
  {
    id: 'rajasthan',
    stateName: 'Rajasthan',
    gdpRank: 5,
    agriGvaSharePercent: 27.0,
    primaryCrops: {
      kharif: ['Bajra (Pearl Millet)', 'Guar', 'Soybean', 'Moong'],
      rabi: ['Mustard & Rapeseed', 'Wheat', 'Gram', 'Barley']
    },
    dominantResidues: ['Mustard Stalks', 'Millet Residues', 'Wheat Straw'],
    annualSurplusTonnageMt: 18.4,
    activeKvkHubs: ['KVK Bharatpur', 'KVK Alwar', 'KVK Jaipur', 'KVK Kota'],
    policyNotes: 'Largest mustard producer in India. High GCV mustard stalks power grid-connected biomass projects under RREC policies.'
  },
  {
    id: 'gujarat',
    stateName: 'Gujarat',
    gdpRank: 6,
    agriGvaSharePercent: 15.4,
    primaryCrops: {
      kharif: ['Groundnut', 'Cotton', 'Castor', 'Rice'],
      rabi: ['Wheat', 'Mustard', 'Cumin']
    },
    dominantResidues: ['Groundnut Shells', 'Cotton Stalks', 'Castor Stalks'],
    annualSurplusTonnageMt: 16.9,
    activeKvkHubs: ['KVK Junagadh', 'KVK Rajkot', 'KVK Anand', 'KVK Mehsana'],
    policyNotes: 'Saurashtra region produces millions of tonnes of groundnut shells with world-class 4,350 kcal/kg GCV for industrial ceramic & chemical boilers.'
  },
  {
    id: 'karnataka',
    stateName: 'Karnataka',
    gdpRank: 7,
    agriGvaSharePercent: 14.2,
    primaryCrops: {
      kharif: ['Maize', 'Rice', 'Ragi', 'Cotton'],
      rabi: ['Sugarcane', 'Sunflower', 'Jowar']
    },
    dominantResidues: ['Maize Stalks', 'Sugarcane Bagasse', 'Sunflower Stalks'],
    annualSurplusTonnageMt: 14.5,
    activeKvkHubs: ['KVK Dharwad', 'KVK Belagavi', 'KVK Mysuru', 'KVK Mandya'],
    policyNotes: 'Thriving agro-processing hubs; extensive maize stalk generation across Davanagere and Belagavi routed to decentralized pellet hubs.'
  },
  {
    id: 'west-bengal',
    stateName: 'West Bengal',
    gdpRank: 8,
    agriGvaSharePercent: 18.9,
    primaryCrops: {
      kharif: ['Rice (Aman)', 'Jute'],
      rabi: ['Rice (Boro)', 'Potato', 'Mustard']
    },
    dominantResidues: ['Rice Straw', 'Paddy Husk', 'Jute Residue'],
    annualSurplusTonnageMt: 21.2,
    activeKvkHubs: ['KVK Burdwan', 'KVK Nadia', 'KVK Hooghly'],
    policyNotes: 'Intense triple-cropped rice belt with high paddy husk surplus. Premier testing ground for green precipitated silica and biochar production.'
  },
  {
    id: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    gdpRank: 9,
    agriGvaSharePercent: 11.5,
    primaryCrops: {
      kharif: ['Rice', 'Sugarcane', 'Groundnut'],
      rabi: ['Banana', 'Cotton', 'Millets']
    },
    dominantResidues: ['Banana Pseudostem', 'Sugarcane Bagasse', 'Groundnut Shells'],
    annualSurplusTonnageMt: 12.8,
    activeKvkHubs: ['KVK Thanjavur', 'KVK Tiruchirappalli', 'KVK Coimbatore'],
    policyNotes: 'Cauvery delta agricultural zone; pioneering natural fiber extraction from banana pseudostems and co-generation bagasse valorization.'
  }
];
