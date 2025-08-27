import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Utensils, Home, ChefHat } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: <Utensils className="w-12 h-12 text-primary" />,
      title: t('services.delivery.title'),
      description: t('services.delivery.description'),
      features: ["Under 30 minutes", "Premium restaurants", "Real-time tracking"],
      color: "primary"
    },
    {
      icon: <Home className="w-12 h-12 text-secondary" />,
      title: t('services.cleaning.title'),
      description: t('services.cleaning.description'),
      features: ["Deep cleaning", "Eco-friendly products", "Flexible scheduling"],
      color: "secondary"
    },
    {
      icon: <ChefHat className="w-12 h-12 text-accent" />,
      title: t('services.chef.title'),
      description: t('services.chef.description'),
      features: ["Custom menus", "Fresh ingredients", "Full service dining"],
      color: "accent"
    }
  ];

  const handleBookService = (serviceName: string) => {
    const message = `Hello! I'd like to book ${serviceName} through Angels International. Please send me more details and availability.`;
    const whatsappUrl = `https://wa.me/50661500559?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 text-glow">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
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