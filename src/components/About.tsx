import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const About = () => {
  const achievements = [
    "10,000+ successful startups launched",
    "99.9% uptime guarantee",
    "24/7 expert support",
    "ISO 27001 certified",
    "SOC 2 Type II compliant"
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Trusted by Innovators Worldwide
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Since 2020, we've been empowering entrepreneurs and startups to turn their 
              visions into reality. Our platform combines cutting-edge technology with 
              proven methodologies to accelerate your path to success.
            </p>
            
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>

            <Button variant="startup" size="lg">
              Learn Our Story
            </Button>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center p-6 bg-card rounded-lg shadow-sharp border">
              <div className="text-4xl font-bold text-primary mb-2">500M+</div>
              <div className="text-muted-foreground">API Requests</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sharp border">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sharp border">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sharp border">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;