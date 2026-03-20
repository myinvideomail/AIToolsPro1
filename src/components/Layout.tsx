import { Link, Outlet, useLocation } from 'react-router-dom';
import { Sparkles, Menu, X, Home, Grid, Folder, PlusCircle, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { useAntiCopy } from '../hooks/useAntiCopy';

export default function Layout() {
  useAntiCopy(); // Initialize anti-copy protection
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'All Tools', path: '/tools', icon: Grid },
    { name: 'Categories', path: '/categories', icon: Folder },
    { name: 'Create Tool', path: '/create', icon: PlusCircle },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 no-select selection:bg-indigo-500/30">
      {/* Header */}
      <header className="glass-panel sticky top-0 z-50 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-2.5 rounded-xl group-hover:scale-105 transition-transform shadow-lg shadow-indigo-500/20">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <span className="font-extrabold text-2xl tracking-tight text-slate-900">
                  AITools<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Pro</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path || 
                               (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      isActive 
                        ? 'bg-indigo-50 text-indigo-600' 
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-500 hover:text-slate-700 focus:outline-none p-2 bg-slate-100 rounded-xl"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-panel border-b border-slate-200/50 absolute w-full">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path || 
                               (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-700'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200/50 mt-auto relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start items-center gap-2">
              <div className="bg-indigo-100 p-1.5 rounded-lg">
                <Sparkles className="h-5 w-5 text-indigo-600" />
              </div>
              <span className="font-extrabold text-xl text-slate-900 tracking-tight">AIToolsPro</span>
            </div>
            <div className="mt-4 flex flex-col md:flex-row items-center gap-4 text-sm text-slate-500 md:mt-0 font-medium">
              <span className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                <ShieldCheck className="h-4 w-4" /> Protected Platform
              </span>
              <span>&copy; {new Date().getFullYear()} AIToolsPro. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
