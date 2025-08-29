import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Graduação Presencial",
      price: "A partir de R$ 450",
      period: "/mês",
      description: "Experiência universitária completa",
      features: [
        "Aulas presenciais no campus",
        "Acesso a laboratórios",
        "Biblioteca física e digital",
        "Atividades extracurriculares",
        "Suporte acadêmico presencial"
      ],
      popular: false
    },
    {
      name: "Graduação EaD",
      price: "A partir de R$ 200",
      period: "/mês",
      description: "Flexibilidade para estudar",
      features: [
        "Aulas 100% online",
        "Plataforma digital avançada",
        "Material didático incluído",
        "Tutoria online",
        "Provas presenciais",
        "Diploma com mesmo valor",
        "Estágios supervisionados"
      ],
      popular: true
    },
    {
      name: "Pós-Graduação",
      price: "Consulte",
      period: "",
      description: "Especialização profissional",
      features: [
        "Cursos de especialização",
        "MBA executivo",
        "Mestrado profissional",
        "Professores mestres e doutores",
        "Networking empresarial",
        "Certificação reconhecida",
        "Flexibilidade de horários",
        "Material exclusivo"
      ],
      popular: false
    }
  ];

  return (
    <section id="admissao" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Modalidades de Ensino
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha a modalidade que melhor se adapta ao seu perfil e objetivos profissionais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative ${plan.popular ? 'border-primary shadow-elegant scale-105' : 'border-border'} hover:shadow-sharp transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Mais Procurado
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.name === "Pós-Graduação" ? "Saiba Mais" : "Inscreva-se Agora"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Condições especiais para pagamento à vista. Bolsas de estudo disponíveis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;