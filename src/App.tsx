import { Navigation } from "./components/Navigation";
import { EnhancedHero } from "./components/EnhancedHero";
import { ImpactStats } from "./components/ImpactStats";
import { EnhancedProjects } from "./components/EnhancedProjects";
import { EnhancedAbout } from "./components/EnhancedAbout";
import { EnhancedCaseStudy } from "./components/EnhancedCaseStudy";
import { EnhancedResume } from "./components/EnhancedResume";
import { EnhancedFooter } from "./components/EnhancedFooter";
import { ThemeProvider } from "./components/ThemeProvider";
import { AIBackground } from "./components/AIBackground";
import { ScrollProgress } from "./components/ScrollProgress";
import { PageLoader } from "./components/PageLoader";

export default function App() {
  return (
    <ThemeProvider>
      <PageLoader />
      <div className="min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden">
        <ScrollProgress />
        <AIBackground />
        <Navigation />
        <EnhancedHero />
        <ImpactStats />
        <EnhancedProjects />
        <EnhancedAbout />
        <EnhancedCaseStudy />
        <EnhancedResume />
        <EnhancedFooter />
      </div>
    </ThemeProvider>
  );
}