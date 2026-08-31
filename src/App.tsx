import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
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
import { FoundingTeamSection } from './components/FoundingTeamSection';
import { ExecutiveDossierModal } from './components/ExecutiveDossierModal';
import { AestheticCursor } from './components/AestheticCursor';
import { AestheticAmbientSound } from './components/AestheticAmbientSound';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [dossierOpen, setDossierOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-solara-obsidian text-slate-100 selection:bg-solara-gold selection:text-solara-navy-dark relative">
      
      {/* Luxury Custom Magnetic Cursor */}
      <AestheticCursor />

      {/* Ambient Mediterranean Waves Synthesizer */}
      <AestheticAmbientSound />

      {/* Navigation */}
      <Navbar
        onOpenDossier={() => setDossierOpen(true)}
        onNavigateToStudio={() => scrollToSection('studio')}
      />

      {/* Main Flow */}
      <main className="relative z-10">
        {/* 1. Hero Experience */}
        <HeroSection
          onExploreCaseStudy={() => scrollToSection('strategic-shift')}
          onGoToStudio={() => scrollToSection('studio')}
        />

        {/* 2. Interactive Personalization Studio */}
        <PersonalizationStudio />

        {/* 3. The Strategic Shift & Personas */}
        <StrategicShiftSection />

        {/* 4. Competitors Benchmark & Blue Ocean Matrix */}
        <CompetitorMatrix />

        {/* 5. Brand Identity & 4-Layer Unboxing */}
        <BrandIdentitySection />

        {/* 6. AI Creative Engine & UGC Lab */}
        <AICreativeLab />

        {/* 7. Marketing Funnel & Content Roadmaps */}
        <FunnelCalendarSection />

        {/* 8. Organic SEO Blueprint */}
        <SEORoadmapSection />

        {/* 9. Ad Spend & ROAS Simulator */}
        <BudgetROASCalculator />

        {/* 10. Regional Summer Destination Architecture */}
        <DestinationSection />

        {/* 11. Business Model Canvas (BMC) */}
        <BusinessModelCanvasSection />

        {/* 12. The Founding Team & Origin Story */}
        <FoundingTeamSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Executive Dossier Reader Modal */}
      <ExecutiveDossierModal
        isOpen={dossierOpen}
        onClose={() => setDossierOpen(false)}
      />

    </div>
  );
};

export default App;
