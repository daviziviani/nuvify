import { Card, CardContent } from "@/components/ui/card"
import { Tv, Film, Headphones, Smartphone } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Tv,
      title: "Mais de 10.000 Canais",
      description: "Todos os canais nacionais e internacionais que você precisa",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Film,
      title: "Conteúdo On Demand",
      description: "Filmes e séries disponíveis a qualquer momento",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: Headphones,
      title: "Suporte Técnico",
      description: "Assistência especializada sempre que precisar",
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: Smartphone,
      title: "1 Tela Simultânea",
      description: "Assista em um dispositivo por vez",
      color: "from-orange-500 to-red-400",
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
