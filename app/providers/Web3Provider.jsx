'use client';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { config } from '../lib/wagmi';
import { useState, useEffect } from 'react';
import '@rainbow-me/rainbowkit/styles.css';

// Custom theme configuration
const customTheme = {
  blurs: {
    modalOverlay: 'blur(10px)',
  },
  colors: {
    accentColor: '#ef4444',
    accentColorForeground: '#ffffff',
    actionButtonBorder: 'rgba(239, 68, 68, 0.3)',
    actionButtonBorderMobile: 'rgba(239, 68, 68, 0.3)',
    actionButtonSecondaryBackground: 'rgba(239, 68, 68, 0.1)',
    connectButtonBackground: '#ef4444',
    connectButtonBackgroundError: '#dc2626',
    connectButtonInnerBackground: '#ef4444',
    connectButtonText: '#ffffff',
    connectButtonTextError: '#ffffff',
    connectionIndicator: '#10b981',
    downloadBottomCardBackground: 'rgba(26, 26, 26, 0.9)',
    downloadTopCardBackground: 'rgba(26, 26, 26, 0.9)',
    error: '#dc2626',
    generalBorder: 'rgba(239, 68, 68, 0.3)',
    generalBorderDim: 'rgba(239, 68, 68, 0.2)',
    modalBackground: '#1a1a1a',
    modalBackdrop: 'rgba(0, 0, 0, 0.95)',
    modalBorder: 'rgba(239, 68, 68, 0.3)',
    modalText: '#ffffff',
    modalTextDim: '#9ca3af',
    modalTextSecondary: '#9ca3af',
    profileAction: 'rgba(239, 68, 68, 0.1)',
    profileActionHover: 'rgba(239, 68, 68, 0.2)',
    profileForeground: 'rgba(26, 26, 26, 0.9)',
    selectedOptionBorder: '#ef4444',
    standby: '#f59e0b',
  },
  fonts: {
    body: 'Inter, system-ui, sans-serif',
  },
  radii: {
    actionButton: '8px',
    connectButton: '8px',
    modal: '12px',
    modalMobile: '12px',
  },
  shadows: {
    connectButton: '0 4px 6px -1px rgba(239, 68, 68, 0.1)',
    dialog: '0 25px 50px -12px rgba(239, 68, 68, 0.25)',
    profileDetailsAction: '0 4px 6px -1px rgba(239, 68, 68, 0.1)',
    selectedOption: '0 4px 6px -1px rgba(239, 68, 68, 0.1)',
    selectedWallet: '0 4px 6px -1px rgba(239, 68, 68, 0.1)',
    walletLogo: '0 4px 6px -1px rgba(239, 68, 68, 0.1)',
  },
};

export default function Web3Provider({ children }) {
  const [mounted, setMounted] = useState(false);
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        retry: false,
      },
    },
  }));

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render Web3 providers until mounted
  if (!mounted) {
    return <div className="min-h-screen bg-black">{children}</div>;
  }

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          chains={config.chains}
          initialChain={config.chains[0]}
          locale="en-US"
          theme={customTheme}
          showRecentTransactions={true}
          coolMode={true}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
} 