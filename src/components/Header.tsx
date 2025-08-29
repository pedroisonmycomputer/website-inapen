import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-primary">INAPEN</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Início
            </a>
            <a href="#cursos" className="text-foreground hover:text-primary transition-colors font-medium">
              Cursos
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors font-medium">
              Sobre
            </a>
            <a href="#admissao" className="text-foreground hover:text-primary transition-colors font-medium">
              Admissão
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors font-medium">
              Contato
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex space-x-4">
            <Button variant="outline">Portal do Aluno</Button>
            <Button>Inscreva-se</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <a href="#home" className="block px-3 py-2 text-foreground hover:text-primary font-medium">
                Início
              </a>
              <a href="#cursos" className="block px-3 py-2 text-foreground hover:text-primary font-medium">
                Cursos
              </a>
              <a href="#sobre" className="block px-3 py-2 text-foreground hover:text-primary font-medium">
                Sobre
              </a>
              <a href="#admissao" className="block px-3 py-2 text-foreground hover:text-primary font-medium">
                Admissão
              </a>
              <a href="#contato" className="block px-3 py-2 text-foreground hover:text-primary font-medium">
                Contato
              </a>
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" className="w-full">Portal do Aluno</Button>
                <Button className="w-full">Inscreva-se</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;