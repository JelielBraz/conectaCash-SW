import React, { useState } from 'react'
import { CreditCard, Bell, Shield, User, Zap, Plus, Trash2, Edit, Check, X } from 'lucide-react'

interface BankAccount {
  id: string
  bank: string
  account: string
  type: 'pessoal' | 'empresa'
  connected: boolean
}

const mockBankAccounts: BankAccount[] = [
  {
    id: '1',
    bank: 'Nubank',
    account: '****1234',
    type: 'pessoal',
    connected: true
  },
  {
    id: '2',
    bank: 'Banco do Brasil',
    account: '****5678',
    type: 'empresa',
    connected: true
  },
  {
    id: '3',
    bank: 'Itaú',
    account: '****9012',
    type: 'pessoal',
    connected: false
  }
]

export const Settings: React.FC = () => {
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>(mockBankAccounts)
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    weekly: true,
    monthly: true,
    alerts: true
  })
  const [aiSettings, setAiSettings] = useState({
    autoClassify: true,
    confidence: 80,
    learning: true
  })

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }))
  }

  const handleAiSettingChange = (key: string, value: boolean | number) => {
    setAiSettings(prev => ({ ...prev, [key]: value }))
  }

  const toggleBankConnection = (id: string) => {
    setBankAccounts(prev =>
      prev.map(account =>
        account.id === id
          ? { ...account, connected: !account.connected }
          : account
      )
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Configurações</h1>
        <p className="mt-2 text-gray-600">Gerencie suas preferências e configurações da conta</p>
      </div>

      <div className="space-y-8">
        {/* Profile Settings */}
        <div className="card p-6">
          <div className="flex items-center mb-6">
            <User className="h-6 w-6 text-gray-400 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900">Perfil</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                className="input"
                defaultValue="João Silva"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="input"
                defaultValue="joao@exemplo.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Telefone
              </label>
              <input
                type="tel"
                className="input"
                defaultValue="(11) 99999-9999"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CPF/CNPJ
              </label>
              <input
                type="text"
                className="input"
                defaultValue="123.456.789-00"
              />
            </div>
          </div>
          
          <div className="mt-6">
            <button className="btn-primary">
              Salvar Alterações
            </button>
          </div>
        </div>

        {/* Bank Accounts */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <CreditCard className="h-6 w-6 text-gray-400 mr-3" />
              <h2 className="text-xl font-semibold text-gray-900">Contas Bancárias</h2>
            </div>
            <button className="btn-primary">
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Conta
            </button>
          </div>
          
          <div className="space-y-4">
            {bankAccounts.map((account) => (
              <div key={account.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <CreditCard className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{account.bank}</p>
                    <p className="text-sm text-gray-500">Conta {account.account}</p>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      account.type === 'empresa' 
                        ? 'bg-primary-100 text-primary-800' 
                        : 'bg-danger-100 text-danger-800'
                    }`}>
                      {account.type === 'empresa' ? 'Empresa' : 'Pessoal'}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="flex items-center">
                    <span className={`w-2 h-2 rounded-full mr-2 ${
                      account.connected ? 'bg-success-500' : 'bg-gray-400'
                    }`}></span>
                    <span className="text-sm text-gray-600">
                      {account.connected ? 'Conectada' : 'Desconectada'}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => toggleBankConnection(account.id)}
                    className={`btn ${account.connected ? 'btn-outline' : 'btn-primary'}`}
                  >
                    {account.connected ? 'Desconectar' : 'Conectar'}
                  </button>
                  
                  <button className="text-gray-400 hover:text-gray-600">
                    <Edit className="h-4 w-4" />
                  </button>
                  
                  <button className="text-gray-400 hover:text-danger-600">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Settings */}
        <div className="card p-6">
          <div className="flex items-center mb-6">
            <Zap className="h-6 w-6 text-gray-400 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900">Configurações da IA</h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Classificação Automática</h3>
                <p className="text-sm text-gray-500">
                  Permitir que a IA classifique automaticamente as transações
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={aiSettings.autoClassify}
                  onChange={(e) => handleAiSettingChange('autoClassify', e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-900">Nível de Confiança Mínimo</h3>
                <span className="text-sm text-gray-600">{aiSettings.confidence}%</span>
              </div>
              <input
                type="range"
                min="50"
                max="95"
                value={aiSettings.confidence}
                onChange={(e) => handleAiSettingChange('confidence', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <p className="text-sm text-gray-500 mt-1">
                Transações com confiança abaixo deste valor serão marcadas para revisão manual
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Aprendizado Contínuo</h3>
                <p className="text-sm text-gray-500">
                  Permitir que a IA aprenda com suas correções manuais
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={aiSettings.learning}
                  onChange={(e) => handleAiSettingChange('learning', e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="card p-6">
          <div className="flex items-center mb-6">
            <Bell className="h-6 w-6 text-gray-400 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900">Notificações</h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Notificações por Email</h3>
                <p className="text-sm text-gray-500">Receber notificações importantes por email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={notifications.email}
                  onChange={(e) => handleNotificationChange('email', e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Notificações Push</h3>
                <p className="text-sm text-gray-500">Receber notificações no navegador</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={notifications.push}
                  onChange={(e) => handleNotificationChange('push', e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Relatório Semanal</h3>
                <p className="text-sm text-gray-500">Receber resumo semanal das finanças</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={notifications.weekly}
                  onChange={(e) => handleNotificationChange('weekly', e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Relatório Mensal</h3>
                <p className="text-sm text-gray-500">Receber análise mensal detalhada</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={notifications.monthly}
                  onChange={(e) => handleNotificationChange('monthly', e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Alertas de Gastos</h3>
                <p className="text-sm text-gray-500">Receber alertas quando gastos excedem limites</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={notifications.alerts}
                  onChange={(e) => handleNotificationChange('alerts', e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="card p-6">
          <div className="flex items-center mb-6">
            <Shield className="h-6 w-6 text-gray-400 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900">Segurança</h2>
          </div>
          
          <div className="space-y-4">
            <button className="btn-outline w-full sm:w-auto">
              Alterar Senha
            </button>
            
            <button className="btn-outline w-full sm:w-auto">
              Configurar Autenticação em Duas Etapas
            </button>
            
            <button className="btn-outline w-full sm:w-auto">
              Baixar Dados da Conta
            </button>
            
            <div className="pt-4 border-t border-gray-200">
              <button className="text-danger-600 hover:text-danger-700 text-sm font-medium">
                Excluir Conta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
