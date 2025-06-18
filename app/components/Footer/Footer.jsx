export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6 px-4 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-lg font-orbitron text-white">BitsNebula</h2>
        <p className="text-sm font-inter">© {new Date().getFullYear()} All rights reserved.</p>
        <ul className="flex space-x-6 text-sm font-inter">
          <li className="hover:text-white transition">About</li>
          <li className="hover:text-white transition">Privacy</li>
          <li className="hover:text-white transition">Terms</li>
        </ul>
      </div>
    </footer>
  );
}
