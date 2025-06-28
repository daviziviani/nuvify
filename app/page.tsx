import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Streamings from "@/components/streamings"
import Benefits from "@/components/benefits"
import FAQ from "@/components/faq"
import Pricing from "@/components/pricing"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <Hero />
      <Features />
      <Streamings />
      <Benefits />
      <FAQ />
      <Pricing />
      <Footer />
    </main>
  )
}
