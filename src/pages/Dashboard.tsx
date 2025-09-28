import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { TrendingUp, TrendingDown, DollarSign, AlertTriangle, CheckCircle, Clock } from 'lucide-react'

const monthlyData = [
  { month: 'Jan', pessoal: 2400, empresa: 4000 },
  { month: 'Fev', pessoal: 1398, empresa: 3000 },
  { month: 'Mar', pessoal: 9800, empresa: 2000 },
  { month: 'Abr', pessoal: 3908, empresa: 2780 },
  { month: 'Mai', pessoal: 4800, empresa: 1890 },
  { month: 'Jun', pessoal: 3800, empresa: 2390 },
]

const categoryData = [
  { name: 'Alimentação', value: 2400, color: '#0ea5e9' },
  { name: 'Transporte', value: 1200, color: '#22c55e' },
  { name: 'Fornecedores', value: 3200, color: '#f59e0b' },
  { name: 'Marketing', value: 800, color: '#ef4444' },
]

export const Dashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">Visão geral das suas finanças PF/PJ</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <DollarSign className="h-8 w-8 text-success-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Receita Total</p>
              <p className="text-2xl font-semibold text-gray-900">R$ 12.450</p>
              <div className="flex items-center mt-1">
                <TrendingUp className="h-4 w-4 text-success-600" />
                <span className="text-sm text-success-600 ml-1">+12% vs mês anterior</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <DollarSign className="h-8 w-8 text-danger-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Gastos Pessoais</p>
              <p className="text-2xl font-semibold text-gray-900">R$ 3.800</p>
              <div className="flex items-center mt-1">
                <TrendingDown className="h-4 w-4 text-danger-600" />
                <span className="text-sm text-danger-600 ml-1">-5% vs mês anterior</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <DollarSign className="h-8 w-8 text-primary-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Gastos Empresa</p>
              <p className="text-2xl font-semibold text-gray-900">R$ 2.390</p>
              <div className="flex items-center mt-1">
                <TrendingUp className="h-4 w-4 text-success-600" />
                <span className="text-sm text-success-600 ml-1">+8% vs mês anterior</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <CheckCircle className="h-8 w-8 text-success-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Classificação IA</p>
              <p className="text-2xl font-semibold text-gray-900">94%</p>
              <div className="flex items-center mt-1">
                <span className="text-sm text-gray-600">Precisão automática</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Monthly Comparison Chart */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Comparativo Mensal PF vs PJ</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => `R$ ${value.toLocaleString()}`} />
              <Bar dataKey="pessoal" fill="#ef4444" name="Pessoal" />
              <Bar dataKey="empresa" fill="#0ea5e9" name="Empresa" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Category Distribution */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribuição por Categoria</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `R$ ${value.toLocaleString()}`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Alerts and Recent Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Alerts */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Alertas</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-3 bg-warning-50 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-warning-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-warning-800">Gasto pessoal elevado</p>
                <p className="text-sm text-warning-700">Seus gastos pessoais estão 15% acima da média mensal</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 bg-primary-50 rounded-lg">
              <Clock className="h-5 w-5 text-primary-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-primary-800">Transações pendentes</p>
                <p className="text-sm text-primary-700">3 transações aguardando classificação manual</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 bg-success-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-success-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-success-800">Meta atingida</p>
                <p className="text-sm text-success-700">Você atingiu sua meta de receita mensal!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Transações Recentes</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Pagamento Cliente XYZ</p>
                  <p className="text-sm text-gray-500">Empresa • Hoje</p>
                </div>
              </div>
              <span className="text-sm font-medium text-success-600">+R$ 2.500</span>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-danger-600 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Supermercado ABC</p>
                  <p className="text-sm text-gray-500">Pessoal • Ontem</p>
                </div>
              </div>
              <span className="text-sm font-medium text-danger-600">-R$ 180</span>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Fornecedor Material</p>
                  <p className="text-sm text-gray-500">Empresa • 2 dias atrás</p>
                </div>
              </div>
              <span className="text-sm font-medium text-danger-600">-R$ 850</span>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-warning-600 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Posto de Gasolina</p>
                  <p className="text-sm text-gray-500">Pendente • 3 dias atrás</p>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-600">-R$ 120</span>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-danger-600 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Restaurante</p>
                  <p className="text-sm text-gray-500">Pessoal • 4 dias atrás</p>
                </div>
              </div>
              <span className="text-sm font-medium text-danger-600">-R$ 65</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
