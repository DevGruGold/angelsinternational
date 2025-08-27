import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import GeminiChat from "@/components/GeminiChat";
import AudioPlayer from "@/components/AudioPlayer";
import LanguageToggle from "@/components/LanguageToggle";
import { LanguageProvider } from "@/hooks/useLanguage";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-vice-dark">
        <AudioPlayer />
        <LanguageToggle />
        <Hero />
        <Services />
        <Contact />
        <GeminiChat />
      </div>
    </LanguageProvider>
  );
};

export default Index;
