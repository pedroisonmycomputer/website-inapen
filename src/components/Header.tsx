import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import caseLogo from "@/assets/case-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={caseLogo} 
              alt="Case Education Logo" 
              className="h-10 w-auto"
            />
            <h1 className="text-2xl font-bold text-primary">Case Education</h1>
          </Link>

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
            {user ? (
              <Button asChild>
                <Link to="/dashboard">
                  <User className="w-4 h-4 mr-2" />
                  Dashboard
                </Link>
              </Button>
            ) : (
              <>
                <Button variant="outline" asChild>
                  <Link to="/auth">Portal do Aluno</Link>
                </Button>
                <Button asChild>
                  <Link to="/auth">Inscreva-se</Link>
                </Button>
              </>
            )}
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
                {user ? (
                  <Button className="w-full" asChild>
                    <Link to="/dashboard">
                      <User className="w-4 h-4 mr-2" />
                      Dashboard
                    </Link>
                  </Button>
                ) : (
                  <>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/auth">Portal do Aluno</Link>
                    </Button>
                    <Button className="w-full" asChild>
                      <Link to="/auth">Inscreva-se</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;