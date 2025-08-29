import { Facebook, Instagram, Linkedin, Mail, GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold">INAPEN</h3>
            </div>
            <p className="text-background/80 mb-4">
              Formando profissionais de excelência há mais de 20 anos. Sua educação, nosso compromisso.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Cursos */}
          <div>
            <h4 className="font-semibold text-background mb-4">Cursos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Administração</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Direito</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Engenharia</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Medicina</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Tecnologia</a></li>
            </ul>
          </div>

          {/* Instituição */}
          <div>
            <h4 className="font-semibold text-background mb-4">Instituição</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Sobre a INAPEN</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Nossa História</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Corpo Docente</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Infraestrutura</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Certificações</a></li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="font-semibold text-background mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Portal do Aluno</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Biblioteca</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Secretaria</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Financeiro</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Carreiras</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/80 text-sm">
            © 2024 INAPEN - Instituto Nacional de Pesquisa e Ensino. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-background/80 hover:text-background text-sm transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-background/80 hover:text-background text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-background/80 hover:text-background text-sm transition-colors">
              Regulamento
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;