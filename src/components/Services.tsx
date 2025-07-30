import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Brain, 
  Monitor, 
  Heart,
  Award,
  Laptop
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Explicações do 1º, 2º e 3º Ciclos",
      description: "Apoio personalizado para alunos do ensino básico em todas as disciplinas."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Explicações do Ensino Secundário",
      description: "Preparação especializada para o ensino secundário e exames nacionais."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Explicações do Ensino Superior",
      description: "Apoio universitário com professores especializados em cada área."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Cursos Intensivos de Preparação",
      description: "Preparação intensiva para exames e avaliações importantes."
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Cursos de Informática",
      description: "Formação em informática desde iniciação até níveis avançados."
    },
    // {
    //   icon: <Heart className="w-8 h-8" />,
    //   title: "Apoio Psicológico",
    //   description: "Acompanhamento psicológico para superar dificuldades de aprendizagem."
    // },
    // {
    //   icon: <Users className="w-8 h-8" />,
    //   title: "Educação Especial",
    //   description: "Programas adaptados para necessidades educativas especiais."
    // },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Clínica de Informática",
      description: "Serviços técnicos de informática e assistência 24 horas."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Os Nossos Serviços</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços educativos e técnicos para 
            garantir o sucesso académico e profissional dos nossos alunos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold leading-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;