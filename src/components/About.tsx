import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Users, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      text: "Mais de 30 anos de experiência",
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: "Professores altamente qualificados",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: "Métodos de ensino comprovados",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: "Horários flexíveis",
    },
  ];

  const stats = [
    { number: "30+", label: "Anos de Experiência" },
    { number: "10", label: "Salas de Estudo" },
    { number: "1000+", label: "Alunos Formados" },
    { number: "24h", label: "Assistência Técnica" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nós</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Com mais de 30 anos de experiência, oferecemos as mais aptas
                soluções de apoio ao estudo em todos os graus de ensino.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Confie na nossa experiência de mais de 30 anos para o apoiar a
                si e toda a sua família a desenvolver as competências
                necessárias para uma atividade de sucesso.
              </p>

              {/* Features */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-primary">{feature.icon}</div>
                    <span className="text-foreground font-medium">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card className="bg-gradient-card border-border shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Conte Connosco!
                  </h3>
                  <p className="text-muted-foreground text-center mb-8">
                    Dispomos de 10 salas de estudo, devidamente equipadas com
                    WiFi e os melhores meios de apoio para o sucesso dos nossos
                    alunos, garantindo um melhor aproveitamento.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">
                          {stat.number}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
