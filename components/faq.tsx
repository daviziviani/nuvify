import { Card, CardContent } from "@/components/ui/card"

export default function FAQ() {
  const faqs = [
    {
      question: "Como funciona o serviço?",
      answer:
        "Após a assinatura, você recebe um e-mail com instruções para configurar o serviço em até 10 minutos. Nosso suporte está disponível 24/7 para ajudar no processo.",
    },
    {
      question: "Preciso de algum equipamento especial?",
      answer:
        "Não! A Nuvify funciona em qualquer dispositivo com conexão à internet: Smart TV, celular, tablet, computador ou TV Box.",
    },
    {
      question: "Posso assistir em vários dispositivos?",
      answer: "Sim! Você pode assistir em até 3 dispositivos simultaneamente com uma única assinatura.",
    },
    {
      question: "Existe fidelidade no contrato?",
      answer: "Não há fidelidade. Você pode cancelar a qualquer momento sem taxas adicionais.",
    },
    {
      question: "Como é feito o pagamento?",
      answer:
        "O pagamento é mensal e recorrente, feito por cartão de crédito ou Pix. Oferecemos também planos anuais com desconto.",
    },
    {
      question: "O serviço tem garantia?",
      answer: "Sim! Oferecemos garantia de 7 dias. Se não gostar do serviço, devolvemos seu dinheiro.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-transparent to-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Perguntas{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Tire suas dúvidas sobre nosso serviço</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
