import { http, createConfig } from 'wagmi';
import { mainnet, sepolia, polygon, optimism, arbitrum, base } from 'wagmi/chains';
import { 
  injected, 
  walletConnect, 
  coinbaseWallet, 
  safe,
  metaMask
} from '@wagmi/connectors';

const projectId = 'demo-project-id'; // Demo project ID for testing

export const config = createConfig({
  chains: [mainnet, sepolia, polygon, optimism, arbitrum, base],
  connectors: [
    injected(),
    metaMask(),
    walletConnect({ 
      projectId,
      showQrModal: true,
      qrModalOptions: {
        themeMode: 'dark',
        themeVariables: {
          '--w3m-accent-color': '#ef4444',
          '--w3m-background-color': '#1a1a1a',
          '--w3m-overlay-background-color': 'rgba(0, 0, 0, 0.95)',
        }
      }
    }),
    coinbaseWallet({ 
      appName: 'RedDotDAO',
      appLogoUrl: 'https://your-logo-url.com/logo.png'
    }),
    safe(),
  ],
  ssr: false, // Disable SSR for wagmi
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
  },
}); 