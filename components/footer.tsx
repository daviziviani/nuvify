import { Cloud, Mail, MessageCircle, Headphones } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl">
                <Cloud className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Nuvify
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              O melhor serviço de IPTV com acesso a todos os principais streamings por um preço único e acessível.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {["Início", "Streamings", "Benefícios", "FAQ", "Planos"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="h-4 w-4 text-blue-400" />
                suporte@nuvify.com
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MessageCircle className="h-4 w-4 text-green-400" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Headphones className="h-4 w-4 text-purple-400" />
                Suporte 24/7
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">© 2025 Nuvify. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
