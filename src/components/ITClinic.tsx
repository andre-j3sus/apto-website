import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  HardDrive, 
  Wifi, 
  Shield, 
  Monitor, 
  Camera,
  Clock,
  Wrench,
  Download
} from "lucide-react";
import itClinicImage from "@/assets/it-clinic.jpg";

const ITClinic = () => {
  const services = [
    {
      icon: <HardDrive className="w-6 h-6" />,
      title: "Dados",
      items: [
        "Recuperação de dados / Backups",
        "Transferência de dados para CD e DVD"
      ]
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Internet",
      items: [
        "Configuração de pacotes de acesso à Internet",
        "Configuração de contas de email (Outlook e Thunderbird)",
        "Criação de Sites para o seu negócio ou a nível pessoal"
      ]
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Software",
      items: [
        "Instalação de programas e respectivas actualizações"
      ]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Hardware",
      items: [
        "Instalação de periféricos (scanner, impressoras, discos rígidos)",
        "Instalação de CD-ROM, placas de TV, webcam, máquinas digitais"
      ]
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Sistema Operativo Windows",
      items: [
        "Instalação Windows 7, Windows XP, Windows Vista",
        "Configuração dos drivers dos periféricos",
        "Instalação de antivírus para proteção do PC"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Antivírus",
      items: [
        "Remoção de vírus, trojans, spyware",
        "Limpeza de cookies e publicidade enganosa"
      ]
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Gravação Digital",
      items: [
        "Passagem de vídeo (VHS, HI8, etc.) para DVD",
        "Digitalização de fotografias para DVD",
        "Conversão de ficheiros de vídeo para DVD"
      ]
    }
  ];

  return (
    <section id="it-clinic" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Clínica de Informática</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Serviços técnicos especializados com assistência ao domicílio disponível 24 horas por dia.
            </p>
          </div>

          {/* Hero Card */}
          <div className="mb-16">
            <Card className="overflow-hidden shadow-hero bg-gradient-card border-border">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4">
                    Assistência 24 Horas
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Dispomos de uma clínica de informática com serviço de assistência 
                    ao domicílio, disponível 24 horas. Pode também optar por recorrer 
                    aos serviços diretamente nas nossas instalações.
                  </p>
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-medium">Disponível 24h/7 dias</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-primary hover:bg-primary/90">
                      Solicitar Assistência
                    </Button>
                    <Button variant="outline">
                      Saber Mais
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src={itClinicImage} 
                    alt="Clínica de Informática" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent"></div>
                </div>
              </div>
            </Card>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-16 text-center">
            <Card className="bg-primary text-primary-foreground shadow-hero max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Contacto de Emergência</h3>
                <p className="text-lg mb-4">
                  Para assistência informática 24 horas:
                </p>
                <div className="space-y-2 text-lg font-semibold">
                  <div>📞 962 609 261</div>
                  <div>✉️ Aptoinformatica@gmail.com</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITClinic;