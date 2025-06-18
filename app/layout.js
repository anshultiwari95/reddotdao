// layout.js (App Router)
import './globals.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import GearBackground from './components/GearBackground/GearBackground';

export const metadata = {
  title: 'BitsNebula',
  description: 'Your data DAO powered by YouTube history',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#f5f7fa] text-gray-900 font-inter overflow-x-hidden">
        <Navbar />
        <main className="relative pt-20 px-4 max-w-6xl mx-auto z-0">
          <GearBackground />
          <div className="relative z-10">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
