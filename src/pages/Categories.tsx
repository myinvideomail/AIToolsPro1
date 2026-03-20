import { Link } from 'react-router-dom';
import { categories } from '../data/tools';
import { Folder, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { AdSlot } from '../components/AdSlot';
import { useTools } from '../hooks/useTools';

export default function Categories() {
  const tools = useTools();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <AdSlot position="top" />

      <div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Browse Categories</h1>
        <p className="text-slate-600 mt-2 text-lg">Find the perfect AI tool for your specific needs.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => {
          const categoryTools = tools.filter((t) => t.category === category);
          const toolCount = categoryTools.length;

          return (
            <Link
              key={category}
              to={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="group flex flex-col bg-white border border-slate-200/60 rounded-3xl p-6 hover:premium-shadow hover:border-indigo-300 transition-all duration-300 relative overflow-hidden transform hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                <div className="bg-indigo-50 p-2 rounded-full">
                  <ArrowRight className="h-4 w-4 text-indigo-600" />
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/60 p-3.5 rounded-2xl group-hover:from-indigo-50 group-hover:to-purple-50 group-hover:border-indigo-100 transition-all duration-300">
                  <Folder className="h-6 w-6 text-slate-700 group-hover:text-indigo-600 transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {category}
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100/80 text-slate-600 mt-1.5">
                    {toolCount} {toolCount === 1 ? 'tool' : 'tools'}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <AdSlot position="bottom" />
    </motion.div>
  );
}
