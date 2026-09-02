export interface Product {
  id: string;
  code: string;
  nameAr: string;
  nameEn: string;
  category: 'tote' | 'hat' | 'clutch' | 'crossbody';
  priceEGP: number;
  originalPriceEGP?: number;
  descriptionAr: string;
  descriptionEn: string;
  featuresAr: string[];
  featuresEn: string[];
  dimensions: string;
  materialsAr: string;
  materialsEn: string;
  bgGradient: string;
  canvasTemplate: {
    baseColor: string;
    textureType: 'straw' | 'fabric' | 'leather';
    engravingZone: { x: number; y: number; width: number; height: number };
  };
}

export interface Persona {
  id: string;
  nameEn: string;
  nameAr: string;
  archetypeEn: string;
  archetypeAr: string;
  demographics: {
    age: string;
    occupationEn: string;
    occupationAr: string;
    incomeBracketEn: string;
    incomeBracketAr: string;
    locationEn: string;
    locationAr: string;
  };
  quoteEn: string;
  quoteAr: string;
  psychographicsEn: string[];
  psychographicsAr: string[];
  painPointsEn: string[];
  painPointsAr: string[];
  solaraSolutionEn: string;
  solaraSolutionAr: string;
  preferredProductsEn: string[];
  preferredProductsAr: string[];
  avgOrderValue: string;
}

export interface Competitor {
  name: string;
  categoryEn: string;
  categoryAr: string;
  priceRange: string;
  strengthsEn: string[];
  strengthsAr: string[];
  weaknessesEn: string[];
  weaknessesAr: string[];
  solaraAdvantageEn: string;
  solaraAdvantageAr: string;
  metrics: {
    personalization: number; // 0 to 100
    coastalAesthetics: number;
    craftQuality: number;
    priceAccessibility: number;
    digitalExperience: number;
    emotionalGifting: number;
  };
}

export interface FunnelStage {
  id: 'tofu' | 'mofu' | 'bofu';
  titleEn: string;
  titleAr: string;
  objectiveEn: string;
  objectiveAr: string;
  contentTypesEn: string[];
  contentTypesAr: string[];
  keyHookEn: string;
  keyHookAr: string;
  kpis: { metricEn: string; metricAr: string; target: string }[];
  samplePosts: {
    headlineEn: string;
    headlineAr: string;
    platform: 'Instagram' | 'TikTok' | 'Facebook';
    hookEn: string;
    hookAr: string;
    ctaEn: string;
    ctaAr: string;
  }[];
}
