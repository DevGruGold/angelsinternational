import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Phone, MessageCircle, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    message: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `
🌴 VICE CONCIERGE BOOKING REQUEST 🌴

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message}

Please contact me to confirm this booking!
    `.trim();

    const whatsappUrl = `https://wa.me/50661500559?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Request Sent!",
      description: "Your booking request has been sent via WhatsApp. We'll contact you shortly!",
    });

    setFormData({ name: "", service: "", message: "", phone: "" });
  };

  const handleQuickContact = () => {
    const quickMessage = "Hello! I'm interested in your Vice Concierge services. Please tell me more about what you offer.";
    const whatsappUrl = `https://wa.me/50661500559?text=${encodeURIComponent(quickMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-dark">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 text-glow">
            GET IN TOUCH
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to experience luxury? Book your services through WhatsApp
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="service-card">
            <h3 className="text-2xl font-orbitron font-bold mb-6 text-glow">
              BOOK A SERVICE
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="bg-background/50"
              />
              
              <Input
                placeholder="Your Phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
                className="bg-background/50"
              />
              
              <select
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                required
                className="w-full p-3 rounded-md bg-background/50 border border-input text-foreground"
              >
                <option value="">Select a Service</option>
                <option value="EXPRESS FOOD DELIVERY">Express Food Delivery</option>
                <option value="HOUSE CLEANING">House Cleaning</option>
                <option value="PRIVATE CHEF">Private Chef</option>
                <option value="CUSTOM REQUEST">Custom Request</option>
              </select>
              
              <Textarea
                placeholder="Tell us about your needs..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4}
                className="bg-background/50"
              />
              
              <Button type="submit" className="w-full btn-neon">
                SEND TO WHATSAPP
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="service-card">
              <div className="flex items-center gap-4 mb-4">
                <MessageCircle className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="font-orbitron font-bold text-lg">WhatsApp</h4>
                  <p className="text-muted-foreground">+506 6150 0559</p>
                </div>
              </div>
              <Button onClick={handleQuickContact} className="w-full btn-cyan">
                QUICK CONTACT
              </Button>
            </Card>

            <Card className="service-card">
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-8 h-8 text-accent" />
                <div>
                  <h4 className="font-orbitron font-bold text-lg">Location</h4>
                  <p className="text-muted-foreground">Costa Rica</p>
                  <p className="text-sm text-muted-foreground">Nationwide Service</p>
                </div>
              </div>
            </Card>

            <Card className="service-card">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="w-8 h-8 text-secondary" />
                <div>
                  <h4 className="font-orbitron font-bold text-lg">Hours</h4>
                  <p className="text-muted-foreground">24/7 Service</p>
                  <p className="text-sm text-muted-foreground">Always ready to serve</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;