'use client';

import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { useAuth } from '../contexts/AuthContext';
import { useState, useEffect } from 'react';
import { 
  Wallet, 
  Smartphone, 
  Shield, 
  CreditCard, 
  X,
  ExternalLink,
  Download
} from 'lucide-react';

export default function ConnectWallet() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isLoading, pendingConnector } = useConnect();
  const { disconnect } = useDisconnect();
  const { isAuthenticated, user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleConnect = () => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }
    
    // Show wallet selection modal
    setShowWalletModal(true);
  };

  const handleWalletConnect = (connector) => {
    connect({ connector });
    setShowWalletModal(false);
  };

  const handleDisconnect = () => {
    disconnect();
  };

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
        Connect Wallet
      </button>
    );
  }

  if (isConnected) {
    return (
      <div className="flex items-center gap-3">
        <div className="text-sm text-gray-300">
          {user?.username || 'User'}
        </div>
        <button
          onClick={handleDisconnect}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
        >
          Disconnect
        </button>
      </div>
    );
  }

  const walletOptions = [
    {
      id: 'injected',
      name: 'Browser Wallet',
      description: 'MetaMask, Brave Wallet, etc.',
      icon: Wallet,
      color: 'text-blue-500',
      popular: true
    },
    {
      id: 'metaMask',
      name: 'MetaMask',
      description: 'Popular Ethereum wallet',
      icon: Wallet,
      color: 'text-orange-500',
      popular: true
    },
    {
      id: 'walletConnect',
      name: 'WalletConnect',
      description: 'Connect any mobile wallet',
      icon: Smartphone,
      color: 'text-green-500',
      popular: true
    },
    {
      id: 'coinbaseWallet',
      name: 'Coinbase Wallet',
      description: 'Official Coinbase wallet',
      icon: CreditCard,
      color: 'text-yellow-500'
    },
    {
      id: 'safe',
      name: 'Safe (Gnosis)',
      description: 'Multi-signature wallet',
      icon: Shield,
      color: 'text-purple-500'
    }
  ];

  return (
    <>
      <button
        onClick={handleConnect}
        disabled={isLoading}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading && pendingConnector ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Connecting...
          </div>
        ) : (
          'Connect Wallet'
        )}
      </button>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-900 border border-red-500 rounded-lg p-6 w-full max-w-md mx-4">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Sign In Required
              </h3>
              <p className="text-gray-300">
                Please sign in or create an account to connect your wallet
              </p>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={() => {
                  setShowAuthModal(false);
                  window.location.href = '/auth';
                }}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-200"
              >
                Sign In / Sign Up
              </button>
              
              <button
                onClick={() => setShowAuthModal(false)}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Wallet Selection Modal */}
      {showWalletModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-900 border border-red-500 rounded-lg p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">
                Choose Your Wallet
              </h3>
              <button
                onClick={() => setShowWalletModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {walletOptions.map((option) => {
                const IconComponent = option.icon;
                const connector = connectors.find(c => c.id === option.id);
                
                if (!connector) return null;

                return (
                  <button
                    key={option.id}
                    onClick={() => handleWalletConnect(connector)}
                    disabled={isLoading}
                    className="relative p-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-red-500 rounded-lg transition-all duration-200 group"
                  >
                    {option.popular && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                    
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gray-700 group-hover:bg-gray-600 ${option.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-white">{option.name}</div>
                        <div className="text-sm text-gray-400">{option.description}</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Additional Options */}
            <div className="border-t border-gray-700 pt-4">
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-4">
                  Don't have a wallet? Get one now:
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <a
                    href="https://metamask.io/download/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    MetaMask
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://wallet.coinbase.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-2 rounded-lg text-sm transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Coinbase
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://safe.global/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-lg text-sm transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Safe Wallet
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 