import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Film, Tv, Rocket, Headphones, RotateCcw, Satellite, PlayCircle } from "lucide-react"

export default function Benefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Economia",
      description: "Acesso a todos os streamings por menos de 10% do valor de assinar individualmente",
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: Film,
      title: "Conteúdo Ilimitado",
      description: "Mais de 100.000 filmes, séries e programas disponíveis 24 horas por dia",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: Tv,
      title: "Multiplataforma",
      description: "Assista em qualquer dispositivo: Smart TV, celular, tablet ou computador",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Rocket,
      title: "Instalação Rápida",
      description: "Configuramos tudo para você em menos de 10 minutos após a compra",
      color: "from-orange-500 to-red-400",
    },
    {
      icon: Headphones,
      title: "Suporte 24/7",
      description: "Equipe especializada disponível a qualquer momento para ajudar",
      color: "from-indigo-500 to-purple-400",
    },
    {
      icon: RotateCcw,
      title: "Sem Fidelidade",
      description: "Cancele quando quiser sem taxas ou multas",
      color: "from-teal-500 to-green-400",
    },
    {
      icon: Satellite,
      title: "10.000+ Canais",
      description: "Acesso a mais de 10.000 canais nacionais e internacionais",
      color: "from-pink-500 to-rose-400",
    },
    {
      icon: PlayCircle,
      title: "Conteúdo On Demand",
      description: "Filmes e séries disponíveis quando você quiser assistir",
      color: "from-yellow-500 to-orange-400",
    },
  ]

  return (
    <section id="beneficios" className="py-20 bg-gradient-to-b from-slate-900/50 to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Por que escolher a{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Nuvify?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubra todas as vantagens da nossa assinatura premium
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${benefit.color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
