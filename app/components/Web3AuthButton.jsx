'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Web3Auth } from '@web3auth/modal';
import { OpenloginAdapter } from '@web3auth/openlogin-adapter';
import { CHAIN_NAMESPACES } from '@web3auth/base';
import { Shield, LogOut } from 'lucide-react';

export default function Web3AuthButton() {
  const [web3auth, setWeb3auth] = useState(null);
  const [provider, setProvider] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID || 'YOUR_WEB3AUTH_CLIENT_ID',
          web3AuthNetwork: 'testnet',
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: '0x1',
            rpcTarget: 'https://rpc.ankr.com/eth',
          },
          uiConfig: {
            theme: 'dark',
            loginMethodsOrder: ['google', 'facebook', 'twitter', 'discord', 'github'],
            appLogo: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/reddot-logo.png`,
          },
        });

        const openloginAdapter = new OpenloginAdapter({
          loginSettings: {
            mfaLevel: 'default',
          },
          adapterSettings: {
            whiteLabel: {
              name: process.env.NEXT_PUBLIC_APP_NAME || 'RedDotDAO',
              logoLight: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/reddot-logo.png`,
              logoDark: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/reddot-logo.png`,
              defaultLanguage: 'en',
              dark: true,
            },
          },
        });

        web3auth.configureAdapter(openloginAdapter);
        await web3auth.initModal();
        setWeb3auth(web3auth);

        if (web3auth.connected) {
          const provider = await web3auth.provider;
          setProvider(provider);
          const userInfo = await web3auth.getUserInfo();
          setUser(userInfo);
        }
      } catch (error) {
        console.error('Web3Auth initialization error:', error);
      }
    };

    init();
  }, []);

  const login = async () => {
    if (!web3auth) return;
    
    try {
      setIsLoading(true);
      const provider = await web3auth.connect();
      setProvider(provider);
      
      const userInfo = await web3auth.getUserInfo();
      setUser(userInfo);
    } catch (error) {
      console.error('Web3Auth login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    if (!web3auth) return;
    
    try {
      await web3auth.logout();
      setProvider(null);
      setUser(null);
    } catch (error) {
      console.error('Web3Auth logout error:', error);
    }
  };

  if (!web3auth) {
    return (
      <motion.button
        disabled
        className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-gray-400 rounded-lg font-semibold cursor-not-allowed"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Shield className="w-4 h-4" />
        Loading...
      </motion.button>
    );
  }

  if (user && provider) {
    return (
      <motion.button
        onClick={logout}
        className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <LogOut className="w-4 h-4" />
        {user.name || user.email}
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={login}
      disabled={isLoading}
      className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all duration-200 disabled:opacity-50"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Shield className="w-4 h-4" />
      {isLoading ? 'Connecting...' : 'Social Login'}
    </motion.button>
  );
} 