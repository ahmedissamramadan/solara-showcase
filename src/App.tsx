import React, { useState, useEffect, Suspense, lazy } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LiveStoreEcosystemSection } from './components/LiveStoreEcosystemSection';
import { PersonalizationStudio } from './components/PersonalizationStudio';
import { StrategicShiftSection } from './components/StrategicShiftSection';
import { CompetitorMatrix } from './components/CompetitorMatrix';
import { BrandIdentitySection } from './components/BrandIdentitySection';
import { AICreativeLab } from './components/AICreativeLab';
import { FunnelCalendarSection } from './components/FunnelCalendarSection';
import { SEORoadmapSection } from './components/SEORoadmapSection';
import { BudgetROASCalculator } from './components/BudgetROASCalculator';
import { DestinationSection } from './components/DestinationSection';
import { BusinessModelCanvasSection } from './components/BusinessModelCanvasSection';
import { AdHookSimulatorSection } from './components/AdHookSimulatorSection';
import { FoundingTeamSection } from './components/FoundingTeamSection';
import { AestheticCursor } from './components/AestheticCursor';
import { AestheticAmbientSound } from './components/AestheticAmbientSound';
import { CoastalAtmosphere } from './components/CoastalAtmosphere';
import { Footer } from './components/Footer';

// Lazy-load heavy overlay modals on demand to keep initial bundle tiny and fast
const ExecutiveDossierModal = lazy(() =>
  import('./components/ExecutiveDossierModal').then((m) => ({ default: m.ExecutiveDossierModal }))
);
const PitchDeckModal = lazy(() =>
  import('./components/PitchDeckModal').then((m) => ({ default: m.PitchDeckModal }))
);

const SolaraAppContent: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [dossierOpen, setDossierOpen] = useState<boolean>(false);
  const [pitchDeckOpen, setPitchDeckOpen] = useState<boolean>(false);
  const [isOceanSoundActive, setIsOceanSoundActive] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Keyboard shortcut 'P' for Presentation / Pitch Deck
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === 'p' || e.key === 'P') && !pitchDeckOpen && !dossierOpen) {
        setPitchDeckOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pitchDeckOpen, dossierOpen]);

  return (
    <div className={`min-h-screen bg-solara-obsidian text-slate-100 selection:bg-solara-gold selection:text-solara-navy-dark relative ${
      language === 'ar' ? 'font-arabic' : 'font-sans'
    }`}>
      
      {/* Visual Mediterranean Coastal Atmosphere & Light Caustics */}
      <CoastalAtmosphere isSoundActive={isOceanSoundActive} />

      {/* Zero-Overhead Hardware-Accelerated Magnetic Cursor */}
      <AestheticCursor />

      {/* Atmospheric Mediterranean Coastal Waves Soundscape Engine */}
      <AestheticAmbientSound onSoundStateChange={setIsOceanSoundActive} />

      {/* Navigation */}
      <Navbar
        onOpenDossier={() => setDossierOpen(true)}
        onNavigateToStudio={() => scrollToSection('studio')}
        onOpenPitchDeck={() => setPitchDeckOpen(true)}
      />

      {/* Main Flow */}
      <main className="relative z-10">
        {/* 1. Hero Experience */}
        <HeroSection
          onExploreCaseStudy={() => scrollToSection('strategic-shift')}
          onGoToStudio={() => scrollToSection('studio')}
        />

        {/* 2. Official Live Store & Social Ecosystem Hub */}
        <LiveStoreEcosystemSection />

        {/* 3. Interactive Personalization Studio */}
        <PersonalizationStudio />

        {/* 4. The Strategic Shift & Personas */}
        <StrategicShiftSection />

        {/* 5. Competitors Benchmark & Blue Ocean Matrix */}
        <div className="section-optimized">
          <CompetitorMatrix />
        </div>

        {/* 6. Brand Identity & 4-Layer Unboxing */}
        <div className="section-optimized">
          <BrandIdentitySection />
        </div>

        {/* 7. AI Creative Engine & UGC Lab */}
        <div className="section-optimized">
          <AICreativeLab />
        </div>

        {/* 8. Marketing Funnel & Content Roadmaps */}
        <div className="section-optimized">
          <FunnelCalendarSection />
        </div>

        {/* 9. Organic SEO Blueprint */}
        <div className="section-optimized">
          <SEORoadmapSection />
        </div>

        {/* 10. Ad Spend & ROAS Simulator */}
        <div className="section-optimized">
          <BudgetROASCalculator />
        </div>

        {/* 11. Regional Summer Destination Architecture */}
        <div className="section-optimized">
          <DestinationSection />
        </div>

        {/* 12. Business Model Canvas (BMC) */}
        <div className="section-optimized">
          <BusinessModelCanvasSection />
        </div>

        {/* 13. A/B Testing & Creative Ad Hook Simulator */}
        <div className="section-optimized">
          <AdHookSimulatorSection />
        </div>

        {/* 14. The Founding Team & Origin Story */}
        <div className="section-optimized">
          <FoundingTeamSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Lazily Loaded Heavy Modals wrapped in Suspense */}
      <Suspense fallback={null}>
        {dossierOpen && (
          <ExecutiveDossierModal
            isOpen={dossierOpen}
            onClose={() => setDossierOpen(false)}
          />
        )}
        {pitchDeckOpen && (
          <PitchDeckModal
            isOpen={pitchDeckOpen}
            onClose={() => setPitchDeckOpen(false)}
          />
        )}
      </Suspense>

    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <SolaraAppContent />
    </LanguageProvider>
  );
};

export default App;
