import Link from 'next/link';
import Navbar from './Navbar/Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen ">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow w-full">
        {children}
      </main>

      {/* Footer (optional) */}
      {/* <footer className="bg-gray-800 p-4 text-center text-gray-300">
        © 2024 Girman Technologies
      </footer> */}
    </div>
  );
}
