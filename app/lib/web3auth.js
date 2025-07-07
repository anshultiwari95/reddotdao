import { Web3Auth } from '@web3auth/modal';
import { OpenloginAdapter } from '@web3auth/openlogin-adapter';
import { CHAIN_NAMESPACES } from '@web3auth/base';

// Web3Auth configuration
export const web3AuthConfig = {
  clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID || 'YOUR_WEB3AUTH_CLIENT_ID', // Get this from Web3Auth dashboard
  web3AuthNetwork: 'testnet', // 'mainnet' or 'testnet'
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: '0x1', // Ethereum mainnet
    rpcTarget: 'https://rpc.ankr.com/eth',
  },
  uiConfig: {
    theme: 'dark',
    loginMethodsOrder: ['google', 'facebook', 'twitter', 'discord', 'github'],
    appLogo: 'https://your-app-logo.com/logo.png',
  },
};

// Initialize Web3Auth
export const initWeb3Auth = async () => {
  const web3auth = new Web3Auth(web3AuthConfig);
  
  const openloginAdapter = new OpenloginAdapter({
    loginSettings: {
      mfaLevel: 'default',
    },
    adapterSettings: {
      whiteLabel: {
        name: 'RedDotDAO',
        logoLight: 'https://your-app-logo.com/logo-light.png',
        logoDark: 'https://your-app-logo.com/logo-dark.png',
        defaultLanguage: 'en',
        dark: true,
      },
    },
  });
  
  web3auth.configureAdapter(openloginAdapter);
  
  await web3auth.initModal();
  
  return web3auth;
};

// Web3Auth login function
export const loginWithWeb3Auth = async (web3auth, provider) => {
  try {
    const web3authProvider = await web3auth.connect();
    return web3authProvider;
  } catch (error) {
    console.error('Web3Auth login error:', error);
    throw error;
  }
};

// Web3Auth logout function
export const logoutFromWeb3Auth = async (web3auth) => {
  try {
    await web3auth.logout();
  } catch (error) {
    console.error('Web3Auth logout error:', error);
    throw error;
  }
};

// Get user info from Web3Auth
export const getUserInfo = async (web3auth) => {
  try {
    const user = await web3auth.getUserInfo();
    return user;
  } catch (error) {
    console.error('Error getting user info:', error);
    return null;
  }
}; 