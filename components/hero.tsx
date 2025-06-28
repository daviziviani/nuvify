"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tv, Film, Headphones, Smartphone, Star, Sparkles } from "lucide-react"

export default function Hero() {
  const scrollToPlans = () => {
    const element = document.getElementById("planos")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%239C92AC&quot; fillOpacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium text-gray-300">Oferta Limitada</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Acesso{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                ilimitado
              </span>
              <br />a todos os seus streamings favoritos
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Netflix, Disney+, Prime Video, HBO Max e muito mais em um único lugar por um preço incrível!
            </p>
          </div>

          {/* Hero Card */}
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-white/10 shadow-2xl">
            <CardContent className="p-8 sm:p-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-4 py-2 mb-4">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-yellow-300">Mais Popular</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Todos os melhores Streamings</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Aproveite nosso plano mais popular e economize mais de{" "}
                  <span className="text-green-400 font-bold">80%</span> em relação a assinar cada streaming
                  separadamente!
                </p>

                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2">Equivalente a R$15/mês</div>
                  <div className="text-gray-400">No plano anual</div>
                </div>

                <Button
                  onClick={scrollToPlans}
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl mb-8"
                >
                  Ver Todos os Planos
                </Button>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Tv className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-gray-300 font-medium">Mais de 10.000 canais</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Film className="h-5 w-5 text-purple-400" />
                  </div>
                  <span className="text-gray-300 font-medium">Filmes e séries on demand</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Headphones className="h-5 w-5 text-green-400" />
                  </div>
                  <span className="text-gray-300 font-medium">Suporte técnico especializado</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="p-2 bg-pink-500/20 rounded-lg">
                    <Smartphone className="h-5 w-5 text-pink-400" />
                  </div>
                  <span className="text-gray-300 font-medium">1 tela simultânea</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
</merged_code>
