import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Utensils, Home, ChefHat } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Utensils className="w-12 h-12 text-primary" />,
      title: "EXPRESS FOOD DELIVERY",
      description: "Lightning-fast delivery from Costa Rica's finest restaurants. Hot, fresh, and delivered with Vice City speed.",
      features: ["Under 30 minutes", "Premium restaurants", "Real-time tracking"],
      color: "primary"
    },
    {
      icon: <Home className="w-12 h-12 text-secondary" />,
      title: "HOUSE CLEANING",
      description: "Professional cleaning services that'll make your place shine brighter than Vice City neon.",
      features: ["Deep cleaning", "Eco-friendly products", "Flexible scheduling"],
      color: "secondary"
    },
    {
      icon: <ChefHat className="w-12 h-12 text-accent" />,
      title: "PRIVATE CHEF",
      description: "Gourmet dining experiences crafted by world-class chefs in the comfort of your home.",
      features: ["Custom menus", "Fresh ingredients", "Full service dining"],
      color: "accent"
    }
  ];

  const handleBookService = (serviceName: string) => {
    const message = `Hello! I'd like to book ${serviceName} through Vice Concierge. Please send me more details and availability.`;
    const whatsappUrl = `https://wa.me/50661500559?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 text-glow">
            OUR SERVICES
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium lifestyle services delivered with Vice City style and precision
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card">
              <div className="text-center mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-glow">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className={`w-2 h-2 bg-${service.color} rounded-full`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${service.color === 'primary' ? 'btn-neon' : service.color === 'secondary' ? 'btn-cyan' : 'btn-orange'}`}
                onClick={() => handleBookService(service.title)}
              >
                BOOK NOW
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;