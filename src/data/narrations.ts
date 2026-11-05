import { NarrationSection } from '../types';

export const NARRATION_SECTIONS: NarrationSection[] = [
  {
    id: 'problem',
    title: 'The Stubble Crisis & Farmer Dilemma',
    subtitle: 'Why 12 million tonnes of biomass burn across the Indo-Gangetic plains',
    spokenText:
      'Every autumn across India, a severe market and logistical failure unfolds. In Punjab, Haryana, and Western Uttar Pradesh, farmers face a razor-thin twenty-day window between harvesting paddy and sowing wheat. Traditional seed drills jam in loose straw, and renting heavy machinery without guaranteed buyers is financially prohibitive. Desperate to clear their fields, farmers ignite over twelve million tonnes of rice straw. This burns vital soil organic carbon, destroys soil microbial fauna, and blankets northern Indian cities in dangerous toxic smog. Farmers associations like Bharatiya Kisan Union rightly argue that punitive fines and police notices punish farmers for a systemic lack of harvest logistics and market access.',
    durationEstSec: 42
  },
  {
    id: 'statistics',
    title: '2026 Environmental & Agronomic Toll',
    subtitle: 'Quantifying emissions, soil degradation, and Happy Seeder economics',
    spokenText:
      'According to NITI Aayog and the Indian Council of Agricultural Research, India generates over five hundred million tonnes of crop residue annually, with two hundred and thirty million tonnes surplus. Incinerating one single tonne of rice residue expels fourteen hundred and sixty kilograms of carbon dioxide, sixty kilograms of carbon monoxide, and thirteen kilograms of deadly particulate matter. In contrast, scientific retention through zero-tillage Happy Seeders lowers soil bulk density from 1.78 down to 1.67 grams per cubic centimeter, boosts moisture retention by up to thirty-six percent, and saves one thousand rupees per hectare in seedbed preparation, delivering fifty-nine thousand rupees per hectare in net returns.',
    durationEstSec: 45
  },
  {
    id: 'solution',
    title: 'CIRCULO: Intelligent Dual-Pipeline Hub',
    subtitle: 'Edge sensor grading routing into bio-energy and phytochemical extraction',
    spokenText:
      'CIRCULO transforms agricultural residue from an environmental liability into high-value industrial inventory. Rather than treating biomass as homogeneous trash, our low-cost intake hub uses load cells, dual-frequency moisture probes, and computer vision cameras powered by an ESP32 microcontroller to grade batches in under sixty seconds. We pioneer a high-margin dual pipeline: standard wheat and paddy straw are routed to seventy-one coal plants co-firing biomass pellets under Commission for Air Quality Management mandates, while sugarcane bagasse and citrus peels are segregated for natural product manufacturers to extract valuable bioactive flavonoids, quercetin, pectin, and pharmaceutical cellulose.',
    durationEstSec: 50
  },
  {
    id: 'economics',
    title: 'Four-Way Economic Value Creation',
    subtitle: 'Transparent revenue models for farmers, recyclers, rural workers, and our startup',
    spokenText:
      'Our platform ensures every participant wins. Farmers earn an extra ten thousand to fifteen thousand rupees per hectare from baled residue sales, comfortably covering machine rental costs and increasing net yields by up to sixty-five percent over seven seasons. Biomass pellet recyclers slash procurement costs by eighteen percent and eliminate boiler clinker shutdowns through guaranteed low-ash feedstock. Rural youth gain steady, dignified gig employment at decentralized Custom Hiring Centres earning up to twenty-two thousand rupees monthly. Our startup captures a five to eight percent transaction margin and enterprise SaaS subscriptions, achieving hub payback within twelve months.',
    durationEstSec: 46
  },
  {
    id: 'geography',
    title: 'Pan-India Residue Mapping by State GDP',
    subtitle: 'Mapping seasonal crop residues across top agricultural GVA states',
    spokenText:
      'Agricultural residue generation is deeply regional and seasonal. In Uttar Pradesh, the number one agricultural GDP contributor, sugarcane bagasse provides four thousand to forty-five hundred kilocalories per kilogram for green energy, while its cellulose feeds natural packaging. Madhya Pradesh delivers millions of tonnes of dense soybean stalks. Punjab produces over twenty-one million tonnes of rice straw. Maharashtra offers high-lignin bagasse and flavonoid-rich citrus peels from Nagpur, and Gujarat leads with premium, ultra-low ash groundnut shells. CIRCULO synchronizes these harvest seasons into a real-time industrial supply calendar.',
    durationEstSec: 44
  },
  {
    id: 'software',
    title: 'B2B Software & Enterprise Bulk Buying',
    subtitle: 'Residue Quality Score, real-time drying curves, and Smart RFQ contracts',
    spokenText:
      'The core of our technology is the Residue Quality Score, or RQS. Our proprietary algorithm weights moisture percentage, ash content, and biochemical indices differently based on the buyer persona. For thermal boilers, high ash is penalized; for biochar or silica extraction, that same batch scores exceptionally high. Our humidity variation tracker simulates real-time meteorological drying curves so buyers can purchase biomass right as it hits the optimal fifteen percent moisture threshold. Large power plants can submit Smart Bulk RFQs for thousands of tonnes, which our geofencing engine instantly aggregates from hundreds of nearby smallholders into a single smart escrow contract.',
    durationEstSec: 52
  },
  {
    id: 'workflow',
    title: 'Operational Workflow & KVK Integration',
    subtitle: 'From field registration to factory gate with ICAR farm science centers',
    spokenText:
      'CIRCULO executes a five-stage physical and digital operational lifecycle. First, farmers register through local Krishi Vigyan Kendras like KVK Baramati and KVK Narayangaon. Second, Custom Hiring Centres supported by the sixty-six thousand crore Agriculture Infrastructure Fund bale the residues with traceable QR codes. Third, batches are graded at our modular hub. Fourth, our algorithmic matchmaking locks purchase contracts into secure escrow. Finally, upon factory gate sampling, funds are instantly dispersed to the farmer and logistics provider. This institutional trust with ICAR and GOBARdhan transforms farm unions from opponents into enthusiastic ecosystem partners.',
    durationEstSec: 48
  }
];
