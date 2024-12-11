import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Daniel Kim - Portfolio",
  description: "Welcome to Daniel Kim’s personal portfolio site.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-900 text-gray-100">
      <body className="min-h-screen flex flex-col font-sans bg-gray-900 text-gray-100">
        <header className="bg-gray-800 bg-opacity-90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
          <nav className="container mx-auto flex items-center justify-between py-4 px-6">
            <div className="text-xl font-bold text-indigo-400">Daniel Kim</div>
            <div className="space-x-6 text-sm font-medium">
              <Link
                href="/"
                className="text-gray-200 hover:text-indigo-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/resume"
                className="text-gray-200 hover:text-indigo-400 transition-colors"
              >
                Resume
              </Link>
              <Link
                href="/work"
                className="text-gray-200 hover:text-indigo-400 transition-colors"
              >
                Work
              </Link>
              <Link
                href="/contact"
                className="text-gray-200 hover:text-indigo-400 transition-colors"
              >
                Contact
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex-1 container mx-auto py-10 px-6">{children}</main>
        <footer className="border-t border-gray-700 py-6 mt-10">
          <div className="container mx-auto text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Daniel Kim. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
