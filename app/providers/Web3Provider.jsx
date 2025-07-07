'use client';

import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { mainnet, sepolia } from 'wagmi/chains';
import { config, queryClient } from '../lib/wagmi';
import '@rainbow-me/rainbowkit/styles.css';

export default function Web3Provider({ children }) {
  console.log('Web3Provider: Initializing...');
  
  try {
    console.log('Web3Provider: Creating providers...');
    return (
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider
            chains={[mainnet, sepolia]}
            initialChain={mainnet}
            locale="en-US"
            showRecentTransactions={true}
            coolMode={true}
          >
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    );
  } catch (error) {
    console.error('Web3Provider error:', error);
    // Fallback to just rendering children if Web3 fails
    return <>{children}</>;
  }
} 