import { useParams, Link } from 'react-router-dom';
import { categories } from '../data/tools';
import ToolCard from '../components/ToolCard';
import { ArrowLeft, Folder } from 'lucide-react';
import { motion } from 'motion/react';
import { AdSlot } from '../components/AdSlot';
import { useTools } from '../hooks/useTools';

export default function Category() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const tools = useTools();
  
  // Find the actual category name from the slug
  const categoryName = categories.find(
    (c) => c.toLowerCase().replace(/\s+/g, '-') === categorySlug
  );

  if (!categoryName) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Category not found</h2>
        <Link
          to="/categories"
          className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
        </Link>
      </div>
    );
  }

  const categoryTools = tools.filter((t) => t.category === categoryName);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <AdSlot position="top" />

      <div>
        <Link
          to="/categories"
          className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 mb-6 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
        </Link>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-2xl shadow-lg shadow-indigo-500/30">
            <Folder className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">{categoryName} Tools</h1>
            <p className="text-slate-600 mt-2 text-lg font-medium">Explore {categoryTools.length} AI tools in this category.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>

      <AdSlot position="bottom" />
    </motion.div>
  );
}
