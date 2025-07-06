// app/layout.jsx
import './globals.css';

export const metadata = {
  title: "REDDOTDAO_",
  description: "Take control of your data. Earn from your digital footprints.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-darkBg text-white font-techno">
        {children}
      </body>
    </html>
  );
}
