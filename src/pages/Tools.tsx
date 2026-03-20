import { useState } from 'react';
import { categories } from '../data/tools';
import ToolCard from '../components/ToolCard';
import { Search, Filter } from 'lucide-react';
import { motion } from 'motion/react';
import { AdSlot } from '../components/AdSlot';
import { useTools } from '../hooks/useTools';

export default function Tools() {
  const tools = useTools();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredTools = tools.filter((tool) => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <AdSlot position="top" />

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">All AI Tools</h1>
          <p className="text-slate-600 mt-2 text-lg">Browse our complete collection of {tools.length} AI generators.</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="glass-panel p-5 rounded-3xl shadow-sm flex flex-col md:flex-row gap-4 relative z-10">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-indigo-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-4 py-4 border border-slate-200/60 rounded-2xl leading-5 bg-white/80 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-base transition-all duration-300 shadow-sm hover:shadow-md"
            placeholder="Search tools by name or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="relative md:w-72">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Filter className="h-5 w-5 text-indigo-400" />
          </div>
          <select
            className="block w-full pl-12 pr-10 py-4 border border-slate-200/60 rounded-2xl leading-5 bg-white/80 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-base appearance-none transition-all duration-300 shadow-sm hover:shadow-md font-medium text-slate-700"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Results */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
          <Search className="mx-auto h-12 w-12 text-slate-300 mb-4" />
          <h3 className="text-lg font-medium text-slate-900">No tools found</h3>
          <p className="mt-1 text-slate-500">Try adjusting your search or filter criteria.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Clear filters
          </button>
        </div>
      )}

      <AdSlot position="bottom" />
    </motion.div>
  );
}
