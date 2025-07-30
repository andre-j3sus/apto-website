import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Gift } from "lucide-react";

const Pricing = () => {
  const pricingData = [
    {
      title: "Sala de Estudo (até ao 7º ano)",
      inscription: "5€",
      prices: [
        "1x/semana: 50€",
        "2x/semana: 100€",
        "3x/semana: 150€",
        "4x/semana: 200€",
        "5x/semana: 250€",
      ],
      note: "Horário: Manhã 9h-13h | Tarde 15h-18h30/19h",
      freeClass: false,
    },
    {
      title: "1º e 2º Ciclos",
      inscription: "10€",
      prices: [
        "Por hora: 12€",
        "Pacote mensal: 11,40€/hora",
        "Pacote 20 horas: 10,80€/hora",
      ],
      discount: "10€ desconto em pagamento numerário",
      freeClass: true,
    },
    {
      title: "3º Ciclo",
      inscription: "10€",
      prices: [
        "Por hora: 14€",
        "Pacote mensal: 13,30€/hora",
        "Pacote 20 horas: 12,60€/hora",
      ],
      discount: "10€ desconto em pagamento numerário",
      freeClass: true,
    },
    {
      title: "10º e 11º Anos",
      inscription: "10€",
      prices: [
        "Por hora: 17€",
        "Pacote mensal: 16,15€/hora",
        "Pacote 20 horas: 15,30€/hora",
      ],
      discount: "10€ desconto em pagamento numerário",
      freeClass: true,
    },
    {
      title: "12º Ano",
      inscription: "10€",
      prices: [
        "Por hora: 21€",
        "Pacote mensal: 19,95€/hora",
        "Pacote 20 horas: 18,90€/hora",
      ],
      discount: "10€ desconto em pagamento numerário",
      freeClass: true,
    },
    {
      title: "Ensino Superior",
      inscription: "Gratuita",
      prices: ["Por hora: 25€", "Pacote mensal: 23,75€/hora"],
      note: "Programa da cadeira necessário",
      discount: "10€ desconto em pagamento numerário",
      freeClass: true,
    },
    {
      title: "Informática - Iniciação",
      inscription: "10€",
      prices: ["Por hora: 10€"],
      freeClass: true,
    },
    {
      title: "Cursos de Línguas - Iniciação",
      inscription: "10€",
      prices: [
        "Por hora: 10,25€",
        "Pacote mensal: 9,75€/hora",
        "Pacote 20 horas: 9,25€/hora",
      ],
      freeClass: true,
    },
    {
      title: "Cursos de Línguas - Intermédio",
      inscription: "10€",
      prices: [
        "Por hora: 11,75€",
        "Pacote mensal: 11,20€/hora",
        "Pacote 20 horas: 10,60€/hora",
      ],
      freeClass: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Preçário</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Preços transparentes e justos para todos os nossos serviços
            educativos. Todos os pagamentos devem ser feitos de forma prévia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pricingData.map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-card transition-all duration-300 bg-card border-border"
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-center">
                  {item.title}
                </CardTitle>
                <div className="text-center">
                  <Badge variant="secondary" className="text-sm">
                    Inscrição: {item.inscription}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Prices */}
                <div className="space-y-2">
                  {item.prices.map((price, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success-green" />
                      <span className="text-sm">{price}</span>
                    </div>
                  ))}
                </div>

                {/* Free Class */}
                {item.freeClass && (
                  <div className="flex items-center gap-2 bg-education-light p-2 rounded">
                    <Gift className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      1 aula gratuita para novos alunos
                    </span>
                  </div>
                )}

                {/* Discount */}
                {item.discount && (
                  <div className="text-sm text-success-green font-medium">
                    💰 {item.discount}
                  </div>
                )}

                {/* Note */}
                {item.note && (
                  <div className="text-xs text-muted-foreground italic">
                    {item.note}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Notes */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-card">
          <h3 className="text-lg font-semibold mb-4">Notas Importantes:</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-success-green mt-1 flex-shrink-0" />
              <span>
                Horário para Sala de Estudo (até ao 7º ano): Manhã das 9h às 13h
                e Tarde das 15h às 18h30/19h.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-success-green mt-1 flex-shrink-0" />
              <span>
                Pagamento em numerário tem 10€ de desconto para pacotes mensais.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-success-green mt-1 flex-shrink-0" />
              <span>Todos os pagamentos devem ser feitos de forma prévia.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-success-green mt-1 flex-shrink-0" />
              <span>Os preços incluem IVA à taxa legal.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
