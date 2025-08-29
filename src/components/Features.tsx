import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Award, Laptop, MapPin, Calendar } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Cursos Reconhecidos pelo MEC",
      description: "Todos os nossos cursos superiores são reconhecidos pelo Ministério da Educação, garantindo a qualidade do seu diploma."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Professores Especializados",
      description: "Corpo docente formado por mestres e doutores com vasta experiência acadêmica e profissional."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excelência Acadêmica",
      description: "Metodologia de ensino inovadora focada no desenvolvimento de competências e habilidades profissionais."
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: "Tecnologia Avançada",
      description: "Laboratórios modernos e plataforma digital de aprendizagem para uma experiência educacional completa."
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Localização Privilegiada",
      description: "Campus moderno em localização estratégica com fácil acesso e infraestrutura completa."
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Flexibilidade de Horários",
      description: "Oferecemos cursos nos períodos matutino, vespertino e noturno para se adequar à sua rotina."
    }
  ];

  return (
    <section id="cursos" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Por que escolher a INAPEN?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra os diferenciais que fazem da INAPEN a melhor escolha para sua formação superior.
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