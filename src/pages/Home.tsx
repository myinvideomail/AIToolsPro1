import { Link } from 'react-router-dom';
import { categories } from '../data/tools';
import ToolCard from '../components/ToolCard';
import { ArrowRight, Zap, Shield, Smartphone, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { AdSlot } from '../components/AdSlot';
import { useTools } from '../hooks/useTools';

export default function Home() {
  const tools = useTools();
  const featuredTools = tools.slice(0, 6);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-20"
    >
      <AdSlot position="top" />

      {/* Hero Section */}
      <section className="relative text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-semibold text-sm mb-8">
          <Sparkles className="h-4 w-4" />
          <span>Now with {tools.length}+ Premium AI Tools</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
          Supercharge your workflow with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-300% animate-gradient">AI Tools</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
          Access a suite of powerful, free AI tools designed to help you write better, work faster, and create more. Powered by Google Gemini.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <Link
            to="/tools"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-2xl text-white bg-slate-900 hover:bg-slate-800 shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:shadow-slate-900/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            Explore All Tools
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/create"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-2xl text-slate-700 bg-white border-2 border-slate-200 hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300 transform hover:-translate-y-1"
          >
            Create Your Own Tool
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="glass-panel p-10 rounded-3xl text-center transform hover:-translate-y-2 transition-all duration-300">
          <div className="mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/30">
            <Zap className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Lightning Fast</h3>
          <p className="text-slate-600 font-medium">Powered by Gemini Flash for instant, high-quality results that keep you in the flow.</p>
        </div>
        <div className="glass-panel p-10 rounded-3xl text-center transform hover:-translate-y-2 transition-all duration-300">
          <div className="mx-auto bg-gradient-to-br from-emerald-400 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Create Custom Tools</h3>
          <p className="text-slate-600 font-medium">Build and save your own AI generators instantly. Tailor the AI to your exact needs.</p>
        </div>
        <div className="glass-panel p-10 rounded-3xl text-center transform hover:-translate-y-2 transition-all duration-300">
          <div className="mx-auto bg-gradient-to-br from-pink-500 to-rose-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-pink-500/30">
            <Smartphone className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Mobile Optimized</h3>
          <p className="text-slate-600 font-medium">Works perfectly on any device, anywhere you go. Your tools are always in your pocket.</p>
        </div>
      </section>

      <AdSlot position="middle" />

      {/* Featured Tools Section */}
      <section className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Popular Tools</h2>
            <p className="text-slate-600 mt-3 text-lg font-medium">Our most frequently used AI generators.</p>
          </div>
          <Link to="/tools" className="hidden sm:flex items-center text-indigo-600 hover:text-indigo-700 font-bold text-lg group">
            View all <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
        
        <div className="mt-10 sm:hidden text-center">
          <Link to="/tools" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-bold text-lg">
            View all tools <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 border border-slate-800 premium-shadow relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-4xl font-black text-white tracking-tight">Browse by Category</h2>
          <p className="text-slate-400 mt-4 text-lg font-medium">Find exactly what you need to accelerate your work.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 relative z-10">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-sm font-bold text-slate-300 hover:bg-indigo-600 hover:border-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      <AdSlot position="bottom" />
    </motion.div>
  );
}
