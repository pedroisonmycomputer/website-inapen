import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pronto para transformar seu futuro? Vamos conversar sobre como a INAPEN pode ajudar você a alcançar seus objetivos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">Envie sua Mensagem</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e entraremos em contato em até 24 horas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nome
                    </label>
                    <Input placeholder="João" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Sobrenome
                    </label>
                    <Input placeholder="Silva" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    E-mail
                  </label>
                  <Input type="email" placeholder="joao@exemplo.com" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Telefone
                  </label>
                  <Input placeholder="(11) 99999-9999" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Curso de Interesse
                  </label>
                  <Input placeholder="Qual curso te interessa?" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Mensagem
                  </label>
                  <Textarea 
                    placeholder="Conte-nos sobre seus objetivos acadêmicos..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Vamos Iniciar uma Conversa
              </h3>
              <p className="text-muted-foreground mb-8">
                Nossa equipe está aqui para ajudá-lo a dar o próximo passo em sua 
                carreira. Seja para esclarecer dúvidas sobre nossos cursos ou para 
                orientação acadêmica, estamos sempre à disposição.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">E-mail</h4>
                  <p className="text-muted-foreground">contato@inapen.edu.br</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Telefone</h4>
                  <p className="text-muted-foreground">(11) 3456-7890</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Endereço</h4>
                  <p className="text-muted-foreground">
                    Av. Educação, 1500<br />
                    São Paulo, SP - 01234-567
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">WhatsApp</h4>
                  <p className="text-muted-foreground">(11) 99999-8888 - Disponível 24h</p>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-hero text-primary-foreground">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">Precisa de Ajuda Imediata?</h4>
                <p className="mb-4 opacity-90">
                  Faça parte da nossa comunidade de mais de 5.000 alunos e ex-alunos.
                </p>
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Participe da Comunidade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;