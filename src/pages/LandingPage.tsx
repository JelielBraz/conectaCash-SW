import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, BarChart3, Zap, Shield, ArrowRight, Star } from 'lucide-react'

export const LandingPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Pare de sofrer com</span>{' '}
                  <span className="block text-primary-600 xl:inline">finanças misturadas</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Recupere o controle total das suas finanças com separação automática PF/PJ usando inteligência artificial. 
                  Acabe com a confusão e tenha visibilidade completa do seu negócio.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/dashboard"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
                    >
                      Começar agora grátis
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg md:px-10">
                      Ver demonstração
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full bg-gradient-to-r from-primary-400 to-primary-600 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
            <BarChart3 className="h-32 w-32 text-white opacity-20" />
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">O Problema</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              76,9% dos empreendedores sofrem com finanças misturadas
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Nossa pesquisa com 37 empreendedores revelou que misturar finanças PF/PJ causa:
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-danger-500 text-white mx-auto">
                  <span className="text-xl font-bold">65%</span>
                </div>
                <h3 className="mt-6 text-lg leading-6 font-medium text-gray-900">Problemas Financeiros</h3>
                <p className="mt-2 text-base text-gray-500">
                  Já tiveram dificuldades financeiras por misturar fundos PF/PJ
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-warning-500 text-white mx-auto">
                  <span className="text-xl font-bold">35%</span>
                </div>
                <h3 className="mt-6 text-lg leading-6 font-medium text-gray-900">Experiências Negativas</h3>
                <p className="mt-2 text-base text-gray-500">
                  Relatam experiências "estressantes", "confusas" ou "um tormento"
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-danger-600 text-white mx-auto">
                  <span className="text-xl font-bold">38%</span>
                </div>
                <h3 className="mt-6 text-lg leading-6 font-medium text-gray-900">Perda de Tempo</h3>
                <p className="mt-2 text-base text-gray-500">
                  Querem especificamente separação automática PF/PJ para economizar tempo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">A Solução</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Separação automática PF/PJ com IA
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              As funcionalidades que os empreendedores mais desejam, baseadas em nossa pesquisa real.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <Zap className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Separação Automática PF/PJ</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  IA classifica automaticamente suas transações como pessoais ou do negócio. 
                  Acaba com a classificação manual que 37,9% dos empreendedores mais desejam.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Dashboard com Visão Geral</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Tenha controle financeiro total com visão consolidada das suas finanças. 
                  Funcionalidade desejada por 20,7% dos empreendedores.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Alertas de Gastos</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Receba alertas quando estiver gastando além do planejado. 
                  Evite problemas financeiros antes que aconteçam.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Conexão Bancária Segura</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Conecte suas contas bancárias com segurança usando Open Banking. 
                  Dados sempre protegidos e criptografados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Depoimentos Reais</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              O que nossos usuários dizem
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Péssima isso atrapalha totalmente o meu negócio e inclusive estamos passando por dificuldade."
              </p>
              <p className="text-sm text-gray-500">
                - Empreendedor, Estamparia (Antes do ConectaCash)
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Uma grande confusão a ponto de pagar impostos com atraso e pagamento de multa."
              </p>
              <p className="text-sm text-gray-500">
                - MEI, Marketing Digital (Antes do ConectaCash)
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Desorganização generalizada dos dados, porque não tenho uma forma de visualizar as informações."
              </p>
              <p className="text-sm text-gray-500">
                - Empreendedor, Marketing (Antes do ConectaCashConectaCash)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Pronto para recuperar o controle?</span>
            <span className="block">Comece grátis hoje mesmo.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-primary-200">
            Junte-se aos 62,1% de empreendedores que têm muito interesse em nossa solução.
          </p>
          <Link
            to="/dashboard"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 sm:w-auto"
          >
            Começar agora grátis
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
