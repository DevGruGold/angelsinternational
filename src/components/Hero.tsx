import { Button } from "@/components/ui/button";
import heroImage from "@/assets/vice-city-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-vice opacity-60" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-6 text-neon text-glow">
          VICE CONCIERGE
        </h1>
        <div className="text-xl md:text-2xl font-rajdhani mb-8 text-secondary text-neon">
          COSTA RICA'S PREMIUM LIFESTYLE SERVICES
        </div>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-muted-foreground">
          Experience luxury concierge services with that Vice City flair. 
          From express deliveries to private chefs, we've got your lifestyle covered.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            className="btn-neon"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            EXPLORE SERVICES
          </Button>
          <Button 
            className="btn-cyan"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            BOOK NOW
          </Button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full pulse-neon" />
      <div className="absolute bottom-32 right-20 w-6 h-6 bg-secondary rounded-full pulse-neon" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-20 w-3 h-3 bg-accent rounded-full pulse-neon" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;