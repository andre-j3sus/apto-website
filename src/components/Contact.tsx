import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização",
      content: "Estrada de Benfica, 729, 1º Dto.\n1500-089 Lisboa"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefones",
      content: "217 649 008\n931 660 992"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "apto@netcabo.pt"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Clínica de Informática Assistência 24h",
      content: "962 609 261\naptoinformatica@gmail.com"
    }
  ];

  const handleEmailClick = () => {
    window.location.href = "mailto:apto@netcabo.pt";
  };

  const handlePhoneClick = (phone: string) => {
    window.location.href = `tel:${phone.replace(/\s/g, '')}`;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Contactos</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Entre em contacto connosco para mais informações ou para agendar
              uma consulta. Estamos aqui para ajudar!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 bg-card border-border">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {item.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="whitespace-pre-line text-muted-foreground">
                    {item.content}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="bg-primary text-primary-foreground shadow-hero max-w-4xl mx-auto">
              <CardContent className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold mb-4">
                  Pronto para Começar?
                </h3>
                <p className="text-lg mb-8 opacity-90">
                  Agende uma consulta gratuita ou visite-nos para conhecer
                  as nossas instalações e serviços.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={handleEmailClick}
                    className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4"
                  >
                    Enviar Email
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => handlePhoneClick("217649008")}
                    className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4"
                  >
                    Ligar Agora
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Map Placeholder */}
          <div className="mt-12">
            <Card className="overflow-hidden shadow-card bg-card border-border">
              <CardContent className="p-0">
                <div className="bg-muted h-64 flex items-center justify-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.5525188489764!2d-9.205578523608798!3d38.751029655326526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecd27979ab6bb%3A0xfe196f82e7c76eaa!2sApto%20%E2%80%94%20Apoio%20Pedag%C3%B3gico%20Total%2C%20Lda.!5e0!3m2!1sen!2spt!4v1753741499148!5m2!1sen!2spt"
                      width="100%" height="100%"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;