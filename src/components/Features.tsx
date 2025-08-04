import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Rocket, Users, BarChart, Cog } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Built for speed and performance, delivering results in milliseconds."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption and compliance."
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Rapid Deployment",
      description: "Go from idea to production in minutes, not months."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Collaboration",
      description: "Seamless collaboration tools for distributed teams."
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Advanced Analytics",
      description: "Deep insights and real-time analytics to drive growth."
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "API Integration",
      description: "Connect with 1000+ tools and services effortlessly."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Powerful Features for Modern Startups
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, scale, and succeed in today's competitive market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-primary/20"
            >
              <CardHeader>
                <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;