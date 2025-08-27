import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startAudio = () => {
      if (audioRef.current && !hasStarted) {
        // Start playing at 2 minute mark (120 seconds)
        audioRef.current.currentTime = 120;
        audioRef.current.play().catch(console.error);
        setHasStarted(true);
      }
    };

    // Start audio after user interaction
    const handleFirstInteraction = () => {
      startAudio();
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };
  }, [hasStarted]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <audio
        ref={audioRef}
        loop
        muted={isMuted}
        preload="metadata"
      >
        <source src="https://www.youtube.com/watch?v=0R6WIbx8ysE" type="video/mp4" />
        {/* Fallback: You might want to host the audio file directly */}
      </audio>
      
      <Button
        onClick={toggleMute}
        className="btn-neon rounded-full w-12 h-12 p-0"
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </Button>
    </div>
  );
};

export default AudioPlayer;