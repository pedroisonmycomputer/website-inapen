import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-foreground">StartupCo</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-muted-foreground transition-colors">
              Home
            </a>
            <a href="#features" className="text-foreground hover:text-muted-foreground transition-colors">
              Features
            </a>
            <a href="#about" className="text-foreground hover:text-muted-foreground transition-colors">
              About
            </a>
            <a href="#pricing" className="text-foreground hover:text-muted-foreground transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-foreground hover:text-muted-foreground transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex space-x-4">
            <Button variant="outline">Sign In</Button>
            <Button variant="startup">Get Started</Button>
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
              <a href="#home" className="block px-3 py-2 text-foreground hover:text-muted-foreground">
                Home
              </a>
              <a href="#features" className="block px-3 py-2 text-foreground hover:text-muted-foreground">
                Features
              </a>
              <a href="#about" className="block px-3 py-2 text-foreground hover:text-muted-foreground">
                About
              </a>
              <a href="#pricing" className="block px-3 py-2 text-foreground hover:text-muted-foreground">
                Pricing
              </a>
              <a href="#contact" className="block px-3 py-2 text-foreground hover:text-muted-foreground">
                Contact
              </a>
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" className="w-full">Sign In</Button>
                <Button variant="startup" className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;