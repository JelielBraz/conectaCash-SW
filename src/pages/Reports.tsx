import React, { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'
import { Download, Calendar, TrendingUp, TrendingDown, DollarSign, FileText } from 'lucide-react'

const monthlyReport = [
  { month: 'Jan', receitas: 8500, gastosPessoais: 3200, gastosEmpresa: 2800, lucro: 2500 },
  { month: 'Fev', receitas: 7200, gastosPessoais: 2800, gastosEmpresa: 2400, lucro: 2000 },
  { month: 'Mar', receitas: 9800, gastosPessoais: 3500, gastosEmpresa: 3200, lucro: 3100 },
  { month: 'Abr', receitas: 11200, gastosPessoais: 3800, gastosEmpresa: 3600, lucro: 3800 },
  { month: 'Mai', receitas: 10500, gastosPessoais: 3600, gastosEmpresa: 3400, lucro: 3500 },
  { month: 'Jun', receitas: 12450, gastosPessoais: 3800, gastosEmpresa: 2390, lucro: 6260 },
]

const categoryBreakdown = [
  { name: 'Alimentação', pessoal: 1200, empresa: 0, color: '#0ea5e9' },
  { name: 'Transporte', pessoal: 800, empresa: 400, color: '#22c55e' },
  { name: 'Fornecedores', pessoal: 0, empresa: 3200, color: '#f59e0b' },
  { name: 'Marketing', pessoal: 0, empresa: 800, color: '#ef4444' },
  { name: 'Escritório', pessoal: 0, empresa: 600, color: '#8b5cf6' },
  { name: 'Saúde', pessoal: 400, empresa: 0, color: '#06b6d4' },
]

const profitTrend = [
  { month: 'Jan', margem: 29.4 },
  { month: 'Fev', margem: 27.8 },
  { month: 'Mar', margem: 31.6 },
  { month: 'Abr', margem: 33.9 },
  { month: 'Mai', margem: 33.3 },
  { month: 'Jun', margem: 50.3 },
]

export const Reports: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('6m')
  
  const totalReceitas = monthlyReport.reduce((acc, month) => acc + month.receitas, 0)
  const totalGastosPessoais = monthlyReport.reduce((acc, month) => acc + month.gastosPessoais, 0)
  const totalGastosEmpresa = monthlyReport.reduce((acc, month) => acc + month.gastosEmpresa, 0)
  const totalLucro = monthlyReport.reduce((acc, month) => acc + month.lucro, 0)
  const margemLucro = (totalLucro / totalReceitas) * 100

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Relatórios</h1>
            <p className="mt-2 text-gray-600">Análise detalhada das suas finanças PF/PJ</p>
          </div>
          <div className="flex space-x-3">
            <select
              className="input"
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
            >
              <option value="1m">Último mês</option>
              <option value="3m">Últimos 3 meses</option>
              <option value="6m">Últimos 6 meses</option>
              <option value="1y">Último ano</option>
            </select>
            <button className="btn-primary">
              <Download className="h-4 w-4 mr-2" />
              Exportar PDF
            </button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <DollarSign className="h-8 w-8 text-success-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Receitas Totais</p>
              <p className="text-2xl font-semibold text-gray-900">
                R$ {totalReceitas.toLocaleString('pt-BR')}
              </p>
              <div className="flex items-center mt-1">
                <TrendingUp className="h-4 w-4 text-success-600" />
                <span className="text-sm text-success-600 ml-1">+18% vs período anterior</span>
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
              <p className="text-2xl font-semibold text-gray-900">
                R$ {totalGastosPessoais.toLocaleString('pt-BR')}
              </p>
              <div className="flex items-center mt-1">
                <TrendingUp className="h-4 w-4 text-danger-600" />
                <span className="text-sm text-danger-600 ml-1">+8% vs período anterior</span>
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
              <p className="text-2xl font-semibold text-gray-900">
                R$ {totalGastosEmpresa.toLocaleString('pt-BR')}
              </p>
              <div className="flex items-center mt-1">
                <TrendingDown className="h-4 w-4 text-success-600" />
                <span className="text-sm text-success-600 ml-1">-5% vs período anterior</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <TrendingUp className="h-8 w-8 text-success-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Margem de Lucro</p>
              <p className="text-2xl font-semibold text-gray-900">
                {margemLucro.toFixed(1)}%
              </p>
              <div className="flex items-center mt-1">
                <TrendingUp className="h-4 w-4 text-success-600" />
                <span className="text-sm text-success-600 ml-1">+12% vs período anterior</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Revenue and Expenses Chart */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Receitas vs Gastos</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyReport}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => `R$ ${value.toLocaleString('pt-BR')}`} />
              <Bar dataKey="receitas" fill="#22c55e" name="Receitas" />
              <Bar dataKey="gastosPessoais" fill="#ef4444" name="Gastos Pessoais" />
              <Bar dataKey="gastosEmpresa" fill="#0ea5e9" name="Gastos Empresa" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Profit Margin Trend */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Evolução da Margem de Lucro</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={profitTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => `${value}%`} />
              <Line 
                type="monotone" 
                dataKey="margem" 
                stroke="#22c55e" 
                strokeWidth={3}
                dot={{ fill: '#22c55e', strokeWidth: 2, r: 6 }}
                name="Margem (%)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Category Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Category Breakdown */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Gastos por Categoria</h3>
          <div className="space-y-4">
            {categoryBreakdown.map((category, index) => {
              const total = category.pessoal + category.empresa
              const pessoalPercent = total > 0 ? (category.pessoal / total) * 100 : 0
              const empresaPercent = total > 0 ? (category.empresa / total) * 100 : 0
              
              return (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">{category.name}</span>
                    <span className="text-sm text-gray-600">R$ {total.toLocaleString('pt-BR')}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="flex h-2 rounded-full overflow-hidden">
                      {category.pessoal > 0 && (
                        <div 
                          className="bg-danger-500" 
                          style={{ width: `${pessoalPercent}%` }}
                          title={`Pessoal: R$ ${category.pessoal.toLocaleString('pt-BR')}`}
                        />
                      )}
                      {category.empresa > 0 && (
                        <div 
                          className="bg-primary-500" 
                          style={{ width: `${empresaPercent}%` }}
                          title={`Empresa: R$ ${category.empresa.toLocaleString('pt-BR')}`}
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    {category.pessoal > 0 && (
                      <span>Pessoal: R$ {category.pessoal.toLocaleString('pt-BR')}</span>
                    )}
                    {category.empresa > 0 && (
                      <span>Empresa: R$ {category.empresa.toLocaleString('pt-BR')}</span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Monthly Profit Chart */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Lucro Mensal</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyReport}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => `R$ ${value.toLocaleString('pt-BR')}`} />
              <Bar dataKey="lucro" fill="#22c55e" name="Lucro Líquido" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Key Insights */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Insights Principais</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-success-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <TrendingUp className="h-5 w-5 text-success-600 mr-2" />
              <h4 className="font-medium text-success-800">Crescimento Positivo</h4>
            </div>
            <p className="text-sm text-success-700">
              Suas receitas cresceram 18% no período, com destaque para o mês de junho.
            </p>
          </div>

          <div className="bg-primary-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <DollarSign className="h-5 w-5 text-primary-600 mr-2" />
              <h4 className="font-medium text-primary-800">Controle de Gastos</h4>
            </div>
            <p className="text-sm text-primary-700">
              Gastos da empresa reduziram 5%, melhorando significativamente a margem de lucro.
            </p>
          </div>

          <div className="bg-warning-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <FileText className="h-5 w-5 text-warning-600 mr-2" />
              <h4 className="font-medium text-warning-800">Oportunidade</h4>
            </div>
            <p className="text-sm text-warning-700">
              Gastos pessoais aumentaram 8%. Considere revisar o orçamento pessoal.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
