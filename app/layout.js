// app/layout.jsx
import './globals.css';
import { Inter } from 'next/font/google';
import Web3Provider from './providers/Web3Provider';
import { AuthProvider } from './contexts/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'RedDotDAO - YouTube Data Sovereignty',
  description: 'Take control of your YouTube data and earn from your digital footprint',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Web3Provider>
            {children}
          </Web3Provider>
        </AuthProvider>
      </body>
    </html>
  );
}
