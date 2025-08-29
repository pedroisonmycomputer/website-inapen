import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-subtle pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Construa Seu
              <span className="block bg-gradient-hero bg-clip-text text-transparent">
                Futuro Acadêmico
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
              Transforme seus sonhos em realidade com os melhores cursos superiores e uma educação de excelência na INAPEN - Instituto Nacional de Pesquisa e Ensino.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group">
                Inscreva-se Agora
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group">
                <BookOpen className="mr-2 h-4 w-4" />
                Conheça os Cursos
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                MEC Credenciado
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                Ensino de Qualidade
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                95% Empregabilidade
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Campus da INAPEN - Ambiente universitário moderno" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/20 to-transparent"></div>
            </div>
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-lg shadow-sharp border animate-pulse-border">
              <div className="text-2xl font-bold text-foreground">15+</div>
              <div className="text-sm text-muted-foreground">Cursos Superiores</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-card p-4 rounded-lg shadow-sharp border">
              <div className="text-2xl font-bold text-foreground">95%</div>
              <div className="text-sm text-muted-foreground">Empregabilidade</div>
            </div>
            <div className="absolute top-1/2 -right-8 bg-card p-4 rounded-lg shadow-sharp border">
              <div className="text-2xl font-bold text-foreground">5K+</div>
              <div className="text-sm text-muted-foreground">Alunos Formados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;