import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const About = () => {
  const achievements = [
    "Mais de 20 anos formando profissionais de excelência",
    "Reconhecimento MEC em todos os cursos",
    "Corpo docente 100% especializado",
    "Infraestrutura moderna e completa",
    "Parcerias com empresas líderes do mercado"
  ];

  return (
    <section id="sobre" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Tradição e Inovação em Educação
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Desde 2000, a INAPEN tem sido referência em ensino superior, formando 
              profissionais capacitados e comprometidos com a excelência. Nossa missão 
              é transformar conhecimento em oportunidades reais de crescimento profissional.
            </p>
            
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>

            <Button size="lg">
              Conheça Nossa História
            </Button>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center p-6 bg-card rounded-lg shadow-sharp border">
              <div className="text-4xl font-bold text-primary mb-2">5.000+</div>
              <div className="text-muted-foreground">Alunos Formados</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sharp border">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Cursos Superiores</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sharp border">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Empregabilidade</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sharp border">
              <div className="text-4xl font-bold text-primary mb-2">24h</div>
              <div className="text-muted-foreground">Suporte Acadêmico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;