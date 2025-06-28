import { Card, CardContent } from "@/components/ui/card"

export default function Streamings() {
  const streamings = [
    { name: "Netflix", logo: "N", color: "from-red-600 to-red-500" },
    { name: "Disney+", logo: "🏰", color: "from-blue-600 to-blue-500" },
    { name: "Prime Video", logo: "📺", color: "from-blue-500 to-cyan-400" },
    { name: "HBO Max", logo: "HBO", color: "from-purple-600 to-purple-500" },
    { name: "Crunchyroll", logo: "🐉", color: "from-orange-500 to-yellow-400" },
    { name: "Paramount+", logo: "⛰️", color: "from-blue-600 to-blue-400" },
    { name: "Apple TV+", logo: "🍎", color: "from-gray-600 to-gray-500" },
    { name: "Globoplay", logo: "🌍", color: "from-green-600 to-green-500" },
    { name: "Star+", logo: "⭐", color: "from-blue-500 to-cyan-400" },
  ]

  return (
    <section id="streamings" className="py-20 bg-gradient-to-b from-transparent to-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Todos os Streamings em{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Um Lugar</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Acesso completo às principais plataformas de streaming do mercado
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {streamings.map((streaming, index) => (
            <Card
              key={index}
              className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${streaming.color} flex items-center justify-center text-2xl sm:text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {streaming.logo}
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {streaming.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
