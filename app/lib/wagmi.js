import { http, createConfig } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { injected, metaMask, walletConnect, coinbaseWallet } from 'wagmi/connectors';
import { QueryClient } from '@tanstack/react-query';

// Create a query client
export const queryClient = new QueryClient();



// Create wagmi config
export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    injected(),
    metaMask(),
    walletConnect({
      projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'YOUR_WALLETCONNECT_PROJECT_ID',
    }),
    coinbaseWallet({
      appName: process.env.NEXT_PUBLIC_APP_NAME || 'RedDotDAO',
      appLogoUrl: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/reddot-logo.png`,
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

// Export the config
export default config; 