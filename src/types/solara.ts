export interface Product {
  id: string;
  code: string;
  nameAr: string;
  nameEn: string;
  category: 'tote' | 'hat' | 'clutch' | 'crossbody';
  priceEGP: number;
  originalPriceEGP?: number;
  descriptionAr: string;
  featuresAr: string[];
  dimensions: string;
  materialsAr: string;
  bgGradient: string;
  canvasTemplate: {
    baseColor: string;
    textureType: 'straw' | 'fabric' | 'leather';
    engravingZone: { x: number; y: number; width: number; height: number };
  };
}

export interface Persona {
  id: string;
  name: string;
  archetypeAr: string;
  archetypeEn: string;
  demographics: {
    age: string;
    occupation: string;
    incomeBracket: string;
    location: string;
  };
  quote: string;
  psychographics: string[];
  painPoints: string[];
  solaraSolution: string;
  preferredProducts: string[];
  avgOrderValue: string;
}

export interface Competitor {
  name: string;
  category: string;
  priceRange: string;
  strengths: string[];
  weaknesses: string[];
  solaraAdvantage: string;
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
  titleAr: string;
  titleEn: string;
  objectiveAr: string;
  contentTypes: string[];
  keyHook: string;
  kpis: { metric: string; target: string }[];
  samplePosts: {
    headline: string;
    platform: 'Instagram' | 'TikTok' | 'Facebook';
    hook: string;
    cta: string;
  }[];
}
