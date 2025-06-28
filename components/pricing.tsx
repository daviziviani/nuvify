import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Calendar, Star, Gem, Sparkles } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      name: "Plano Mensal",
      price: "R$25",
      period: "por mês",
      equivalent: "Equivalente a R$25/mês",
      icon: Calendar,
      color: "from-blue-500 to-cyan-400",
      features: ["Todos os streamings", "Suporte 24/7", "Sem fidelidade", "1 tela simultânea"],
      economy: "Economize R$180/mês",
      popular: false,
    },
    {
      name: "Plano Trimestral",
      price: "R$60",
      period: "a cada 3 meses",
      equivalent: "Equivalente a R$20/mês",
      icon: Star,
      color: "from-pink-500 to-rose-400",
      features: ["Todos os streamings", "Suporte prioritário", "Sem fidelidade", "1 tela simultânea"],
      economy: "Economize R$210 em 3 meses",
      popular: true,
    },
    {
      name: "Plano Anual",
      price: "R$180",
      period: "por ano",
      equivalent: "Equivalente a R$15/mês",
      icon: Gem,
      color: "from-purple-500 to-indigo-400",
      features: ["Todos os streamings", "Suporte VIP", "Sem fidelidade", "1 tela simultânea"],
      economy: "Economize R$420 no primeiro ano",
      popular: false,
    },
  ]

  return (
    <section id="planos" className="py-20 bg-gradient-to-b from-slate-900/50 to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-300">Oferta Especial</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Nossos{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Planos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Temos opções para todos os tipos de usuários. Encontre o plano que melhor atende às suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular ? "ring-2 ring-pink-500/50 scale-105 lg:scale-110" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-pink-500 to-rose-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    MAIS POPULAR
                  </div>
                </div>
              )}

              <CardContent className="p-8 text-center">
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${plan.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <plan.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>

                <div className="mb-6">
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{plan.price}</div>
                  <div className="text-gray-400 mb-3">{plan.period}</div>
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-lg p-3">
                    <div className="text-lg font-semibold text-blue-400">{plan.equivalent}</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="p-1 bg-green-500/20 rounded-full">
                        <Check className="h-4 w-4 text-green-400" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full mb-4 ${
                    plan.popular
                      ? "bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500"
                      : "bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500"
                  } text-white font-semibold py-3 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl`}
                >
                  Em Breve
                </Button>

                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                  <div className="text-sm font-medium text-green-400">{plan.economy}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="h-3 w-3 text-white" />
            </span>
            Pagamento 100% seguro | Garantia de 7 dias
          </p>
        </div>
      </div>
    </section>
  )
}
