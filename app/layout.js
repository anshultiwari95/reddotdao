// app/layout.jsx
import './globals.css';
import { Inter } from 'next/font/google';
import { AuthProvider } from './contexts/AuthContext';
import { AuthModalProvider } from './contexts/AuthModalContext';
import Web3Provider from './providers/Web3Provider';
import ErrorBoundary from './components/ErrorBoundary';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'RedDotDAO - YouTube Data Sovereignty',
  description: 'Take control of your YouTube data and earn from your digital footprint',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ErrorBoundary>
          <Web3Provider>
            <AuthProvider>
              <AuthModalProvider>
                {children}
              </AuthModalProvider>
            </AuthProvider>
          </Web3Provider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
