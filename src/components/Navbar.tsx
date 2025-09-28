import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BarChart3, CreditCard, FileText, Settings, Home, Menu, X } from 'lucide-react'

export const Navbar: React.FC = () => {
  const location = useLocation()
  const isLanding = location.pathname === '/'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  if (isLanding) {
    return (
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <BarChart3 className="h-8 w-8 text-primary-600" />
                <span className="text-xl font-bold text-gray-900">ConectaCash</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="btn-primary">
                Entrar no App
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Transações', href: '/transactions', icon: CreditCard },
    { name: 'Relatórios', href: '/reports', icon: FileText },
    { name: 'Configurações', href: '/settings', icon: Settings },
  ]

  return (
    <>
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/dashboard" className="flex items-center space-x-2">
                <BarChart3 className="h-8 w-8 text-primary-600" />
                <span className="text-xl font-bold text-gray-900">ConectaCash</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => {
                  const Icon = item.icon
                  const isActive = location.pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-primary-100 text-primary-700'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
            
            {/* Desktop User Info */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                João Silva
              </div>
              <div className="h-8 w-8 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">JS</span>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              >
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b shadow-lg">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
            
            {/* Mobile User Info */}
            <div className="flex items-center space-x-3 px-3 py-2 border-t border-gray-200 mt-3 pt-3">
              <div className="h-8 w-8 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">JS</span>
              </div>
              <div className="text-base font-medium text-gray-900">
                João Silva
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
