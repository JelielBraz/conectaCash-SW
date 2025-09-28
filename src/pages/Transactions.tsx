import React, { useState } from 'react'
import { Search, Filter, Download, X } from 'lucide-react'

interface Transaction {
  id: string
  date: string
  description: string
  amount: number
  category: 'pessoal' | 'empresa' | 'pendente'
  type: 'entrada' | 'saida'
  confidence?: number
  paymentSource?: 'cartao_pessoal' | 'cartao_juridico' | 'conta_pessoal' | 'conta_juridica' | 'pix' | 'dinheiro'
  location?: string
  isFuture?: boolean
}

const mockTransactions: Transaction[] = [
  {
    id: '1',
    date: '2024-01-15',
    description: 'Pagamento Cliente ABC Ltda',
    amount: 2500.00,
    category: 'empresa',
    type: 'entrada',
    confidence: 95,
    paymentSource: 'conta_juridica',
    location: 'Transferência Bancária'
  },
  {
    id: '2',
    date: '2024-01-14',
    description: 'Supermercado Extra',
    amount: -180.50,
    category: 'pessoal',
    type: 'saida',
    confidence: 88,
    paymentSource: 'cartao_pessoal',
    location: 'Shopping Center Norte - SP'
  },
  {
    id: '3',
    date: '2024-01-14',
    description: 'Posto Shell - Combustível',
    amount: -120.00,
    category: 'pendente',
    type: 'saida',
    paymentSource: 'cartao_juridico',
    location: 'Av. Paulista, 1000 - SP'
  },
  {
    id: '4',
    date: '2024-01-13',
    description: 'Fornecedor XYZ Materiais',
    amount: -850.00,
    category: 'empresa',
    type: 'saida',
    confidence: 92,
    paymentSource: 'conta_juridica',
    location: 'Transferência Bancária'
  },
  {
    id: '5',
    date: '2024-01-13',
    description: 'Restaurante Italiano',
    amount: -65.00,
    category: 'pessoal',
    type: 'saida',
    confidence: 78,
    paymentSource: 'cartao_pessoal',
    location: 'Vila Madalena - SP'
  },
  {
    id: '6',
    date: '2024-01-12',
    description: 'Transferência PIX',
    amount: 1200.00,
    category: 'empresa',
    type: 'entrada',
    confidence: 85,
    paymentSource: 'pix',
    location: 'PIX Recebido'
  },
  {
    id: '7',
    date: '2024-01-12',
    description: 'Farmácia São João',
    amount: -45.80,
    category: 'pessoal',
    type: 'saida',
    confidence: 90,
    paymentSource: 'cartao_pessoal',
    location: 'Rua Augusta, 500 - SP'
  },
  {
    id: '8',
    date: '2024-01-11',
    description: 'Uber - Corrida',
    amount: -25.50,
    category: 'pendente',
    type: 'saida',
    paymentSource: 'cartao_juridico',
    location: 'Centro - SP'
  },
  {
    id: '9',
    date: '2024-01-20',
    description: 'Aluguel Escritório',
    amount: -1500.00,
    category: 'empresa',
    type: 'saida',
    confidence: 100,
    paymentSource: 'conta_juridica',
    location: 'Transferência Agendada',
    isFuture: true
  },
  {
    id: '10',
    date: '2024-01-25',
    description: 'Pagamento Fornecedor ABC',
    amount: -2000.00,
    category: 'empresa',
    type: 'saida',
    confidence: 100,
    paymentSource: 'conta_juridica',
    location: 'Transferência Agendada',
    isFuture: true
  }
]

export const Transactions: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>(mockTransactions)
  const [filter, setFilter] = useState<'todas' | 'pessoal' | 'empresa' | 'pendente' | 'futuras'>('todas')
  const [searchTerm, setSearchTerm] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)
  const [newTransaction, setNewTransaction] = useState<Partial<Transaction>>({
    description: '',
    amount: 0,
    category: 'pendente',
    type: 'saida',
    paymentSource: 'cartao_pessoal',
    location: '',
    date: new Date().toISOString().split('T')[0],
    isFuture: false
  })

  const filteredTransactions = transactions.filter(transaction => {
    const matchesFilter = filter === 'todas' || 
                         (filter === 'futuras' && transaction.isFuture) ||
                         (filter !== 'futuras' && transaction.category === filter)
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const handleCategoryChange = (id: string, newCategory: 'pessoal' | 'empresa') => {
    setTransactions(prev => 
      prev.map(transaction => 
        transaction.id === id 
          ? { ...transaction, category: newCategory, confidence: 100 }
          : transaction
      )
    )
  }

  const handleAddTransaction = () => {
    if (!newTransaction.description || !newTransaction.amount) return
    
    const transaction: Transaction = {
      id: Date.now().toString(),
      date: newTransaction.date || new Date().toISOString().split('T')[0],
      description: newTransaction.description,
      amount: newTransaction.type === 'saida' ? -Math.abs(newTransaction.amount) : Math.abs(newTransaction.amount),
      category: newTransaction.category || 'pendente',
      type: newTransaction.type || 'saida',
      paymentSource: newTransaction.paymentSource,
      location: newTransaction.location,
      isFuture: new Date(newTransaction.date || '') > new Date(),
      confidence: 100
    }
    
    setTransactions(prev => [transaction, ...prev])
    setShowAddModal(false)
    setNewTransaction({
      description: '',
      amount: 0,
      category: 'pendente',
      type: 'saida',
      paymentSource: 'cartao_pessoal',
      location: '',
      date: new Date().toISOString().split('T')[0],
      isFuture: false
    })
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'empresa': return 'bg-primary-100 text-primary-800'
      case 'pessoal': return 'bg-danger-100 text-danger-800'
      case 'pendente': return 'bg-warning-100 text-warning-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'empresa': return 'Empresa'
      case 'pessoal': return 'Pessoal'
      case 'pendente': return 'Pendente'
      default: return 'Desconhecido'
    }
  }

  const getPaymentSourceLabel = (source?: string) => {
    switch (source) {
      case 'cartao_pessoal': return 'Cartão Pessoal'
      case 'cartao_juridico': return 'Cartão Jurídico'
      case 'conta_pessoal': return 'Conta Pessoal'
      case 'conta_juridica': return 'Conta Jurídica'
      case 'pix': return 'PIX'
      case 'dinheiro': return 'Dinheiro'
      default: return 'Não informado'
    }
  }

  const getPaymentSourceColor = (source?: string) => {
    switch (source) {
      case 'cartao_pessoal':
      case 'conta_pessoal':
        return 'bg-red-100 text-red-800'
      case 'cartao_juridico':
      case 'conta_juridica':
        return 'bg-blue-100 text-blue-800'
      case 'pix':
        return 'bg-green-100 text-green-800'
      case 'dinheiro':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Transações</h1>
        <p className="mt-2 text-gray-600">Gerencie e classifique suas transações PF/PJ</p>
      </div>

      {/* Filters and Search */}
      <div className="card p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar transações..."
                className="input pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex gap-2 flex-wrap">
            <select
              className="input"
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
            >
              <option value="todas">Todas</option>
              <option value="empresa">Empresa</option>
              <option value="pessoal">Pessoal</option>
              <option value="pendente">Pendentes</option>
              <option value="futuras">Futuras</option>
            </select>
            
            <button 
              onClick={() => setShowAddModal(true)}
              className="btn-primary whitespace-nowrap"
            >
              + Nova Transação
            </button>
            
            <button className="btn-outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </button>
            
            <button className="btn-outline">
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <div className="card p-4">
          <p className="text-sm text-gray-600">Total</p>
          <p className="text-2xl font-bold text-gray-900">{filteredTransactions.length}</p>
        </div>
        
        <div className="card p-4">
          <p className="text-sm text-gray-600">Empresa</p>
          <p className="text-2xl font-bold text-primary-600">
            {filteredTransactions.filter(t => t.category === 'empresa').length}
          </p>
        </div>
        
        <div className="card p-4">
          <p className="text-sm text-gray-600">Pessoal</p>
          <p className="text-2xl font-bold text-danger-600">
            {filteredTransactions.filter(t => t.category === 'pessoal').length}
          </p>
        </div>
        
        <div className="card p-4">
          <p className="text-sm text-gray-600">Pendentes</p>
          <p className="text-2xl font-bold text-warning-600">
            {filteredTransactions.filter(t => t.category === 'pendente').length}
          </p>
        </div>
        
        <div className="card p-4">
          <p className="text-sm text-gray-600">Futuras</p>
          <p className="text-2xl font-bold text-purple-600">
            {transactions.filter(t => t.isFuture).length}
          </p>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Descrição
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Valor
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Categoria
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fonte Pagamento
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id} className={`hover:bg-gray-50 ${transaction.isFuture ? 'bg-purple-50' : ''}`}>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex flex-col">
                      <span>{new Date(transaction.date).toLocaleDateString('pt-BR')}</span>
                      {transaction.isFuture && (
                        <span className="text-xs text-purple-600 font-medium">Futura</span>
                      )}
                    </div>
                  </td>
                  
                  <td className="px-3 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      {transaction.description}
                    </div>
                  </td>
                  
                  <td className="px-3 py-4 whitespace-nowrap">
                    <span className={`text-sm font-medium ${
                      transaction.amount > 0 ? 'text-success-600' : 'text-danger-600'
                    }`}>
                      {transaction.amount > 0 ? '+' : ''}R$ {Math.abs(transaction.amount).toLocaleString('pt-BR', {
                        minimumFractionDigits: 2
                      })}
                    </span>
                  </td>
                  
                  <td className="px-3 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getCategoryColor(transaction.category)}`}>
                      {getCategoryLabel(transaction.category)}
                    </span>
                  </td>
                  
                  <td className="px-3 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPaymentSourceColor(transaction.paymentSource)}`}>
                      {getPaymentSourceLabel(transaction.paymentSource)}
                    </span>
                  </td>
                  
                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium min-w-[180px]">
                    {transaction.category === 'pendente' ? (
                      <div className="flex space-x-1">
                        <button
                          onClick={() => handleCategoryChange(transaction.id, 'pessoal')}
                          className="bg-danger-100 text-danger-800 border border-danger-200 rounded px-1 py-0.5 text-xs font-semibold focus:outline-none min-w-[70px]"
                        >
                          Pessoal
                        </button>
                        <button
                          onClick={() => handleCategoryChange(transaction.id, 'empresa')}
                          className="bg-primary-100 text-primary-800 border border-primary-200 rounded px-1 py-0.5 text-xs font-semibold focus:outline-none min-w-[70px]"
                        >
                          Empresa
                        </button>
                      </div>
                    ) : (
                      <button className="text-gray-400 hover:text-gray-600 text-xs px-1 py-0.5">
                        Editar
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-gray-700">
          Mostrando <span className="font-medium">1</span> a <span className="font-medium">{filteredTransactions.length}</span> de{' '}
          <span className="font-medium">{transactions.length}</span> transações
        </div>
        <div className="flex space-x-2">
          <button className="btn-outline">Anterior</button>
          <button className="btn-primary">1</button>
          <button className="btn-outline">Próximo</button>
        </div>
      </div>

      {/* Modal Nova Transação */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Nova Transação</h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Descrição *
                  </label>
                  <input
                    type="text"
                    className="input w-full"
                    value={newTransaction.description}
                    onChange={(e) => setNewTransaction(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Ex: Almoço de negócios"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Valor *
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      className="input w-full"
                      value={newTransaction.amount}
                      onChange={(e) => setNewTransaction(prev => ({ ...prev, amount: parseFloat(e.target.value) || 0 }))}
                      placeholder="0,00"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tipo
                    </label>
                    <select
                      className="input w-full"
                      value={newTransaction.type}
                      onChange={(e) => setNewTransaction(prev => ({ ...prev, type: e.target.value as 'entrada' | 'saida' }))}
                    >
                      <option value="saida">Saída</option>
                      <option value="entrada">Entrada</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Data
                  </label>
                  <input
                    type="date"
                    className="input w-full"
                    value={newTransaction.date}
                    onChange={(e) => setNewTransaction(prev => ({ ...prev, date: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Categoria
                  </label>
                  <select
                    className="input w-full"
                    value={newTransaction.category}
                    onChange={(e) => setNewTransaction(prev => ({ ...prev, category: e.target.value as 'pessoal' | 'empresa' | 'pendente' }))}
                  >
                    <option value="pendente">Pendente (IA irá classificar)</option>
                    <option value="empresa">Empresa</option>
                    <option value="pessoal">Pessoal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fonte de Pagamento
                  </label>
                  <select
                    className="input w-full"
                    value={newTransaction.paymentSource}
                    onChange={(e) => setNewTransaction(prev => ({ ...prev, paymentSource: e.target.value as any }))}
                  >
                    <option value="cartao_pessoal">Cartão Pessoal</option>
                    <option value="cartao_juridico">Cartão Jurídico</option>
                    <option value="conta_pessoal">Conta Pessoal</option>
                    <option value="conta_juridica">Conta Jurídica</option>
                    <option value="pix">PIX</option>
                    <option value="dinheiro">Dinheiro</option>
                  </select>
                </div>

                
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="btn-outline flex-1"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleAddTransaction}
                  className="btn-primary flex-1"
                  disabled={!newTransaction.description || !newTransaction.amount}
                >
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
