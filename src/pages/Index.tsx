import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import GeminiChat from "@/components/GeminiChat";
import AudioPlayer from "@/components/AudioPlayer";

const Index = () => {
  return (
    <div className="min-h-screen bg-vice-dark">
      <AudioPlayer />
      <Hero />
      <Services />
      <Contact />
      <GeminiChat />
    </div>
  );
};

export default Index;
