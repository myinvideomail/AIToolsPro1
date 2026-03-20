import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { categories, Category } from '../data/tools';
import { saveCustomTool, publishTool } from '../utils/customTools';
import { Wrench, Save, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { AdSlot } from '../components/AdSlot';

export default function CreateTool() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'Other' as Category,
    promptTemplate: '',
    inputLabel: '',
    inputPlaceholder: '',
    publish: false,
  });

  const [isPublishing, setIsPublishing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPublishing(true);
    
    const id = formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now();
    
    const toolData = {
      id,
      name: formData.name,
      description: formData.description,
      category: formData.category,
      promptTemplate: formData.promptTemplate,
      inputLabel: formData.inputLabel,
      inputPlaceholder: formData.inputPlaceholder,
      icon: 'Wrench',
      isCustom: true
    };

    saveCustomTool(toolData);

    if (formData.publish) {
      await publishTool(toolData);
    }
    
    setIsPublishing(false);
    navigate(`/tool/${id}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData({ ...formData, [name]: val });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto space-y-8"
    >
      <AdSlot position="top" />
      
      <div>
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-2xl shadow-lg shadow-indigo-500/30">
            <Wrench className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Create Your AI Tool</h1>
            <p className="text-slate-600 mt-2 text-lg font-medium">Build a custom AI generator tailored to your exact needs.</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="glass-panel rounded-3xl p-6 md:p-10 shadow-sm space-y-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">Tool Name</label>
            <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g., Pirate Translator" className="w-full rounded-2xl border border-slate-200/60 p-4 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none bg-white/80 transition-all shadow-sm hover:shadow-md" />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">Category</label>
            <select name="category" value={formData.category} onChange={handleChange} className="w-full rounded-2xl border border-slate-200/60 p-4 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none bg-white/80 transition-all shadow-sm hover:shadow-md">
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-900 mb-2">Description</label>
          <input required type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Briefly describe what this tool does..." className="w-full rounded-2xl border border-slate-200/60 p-4 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none bg-white/80 transition-all shadow-sm hover:shadow-md" />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-900 mb-2">Prompt Template</label>
          <p className="text-xs text-slate-500 font-medium mb-3">Use <code className="bg-indigo-50 px-1.5 py-0.5 rounded-md text-indigo-600 font-bold">{'{input}'}</code> where the user's text should be inserted.</p>
          <textarea required name="promptTemplate" value={formData.promptTemplate} onChange={handleChange} rows={4} placeholder="e.g., Translate the following text into pirate speak: {input}" className="w-full rounded-2xl border border-slate-200/60 p-4 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none resize-none bg-white/80 transition-all shadow-sm hover:shadow-md" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">Input Label</label>
            <input required type="text" name="inputLabel" value={formData.inputLabel} onChange={handleChange} placeholder="e.g., Text to Translate" className="w-full rounded-2xl border border-slate-200/60 p-4 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none bg-white/80 transition-all shadow-sm hover:shadow-md" />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">Input Placeholder</label>
            <input required type="text" name="inputPlaceholder" value={formData.inputPlaceholder} onChange={handleChange} placeholder="e.g., Enter your text here..." className="w-full rounded-2xl border border-slate-200/60 p-4 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none bg-white/80 transition-all shadow-sm hover:shadow-md" />
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100">
          <input 
            type="checkbox" 
            id="publish" 
            name="publish" 
            checked={formData.publish} 
            onChange={handleChange}
            className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded"
          />
          <label htmlFor="publish" className="flex items-center gap-2 text-sm font-bold text-slate-900 cursor-pointer">
            <Globe className="h-4 w-4 text-indigo-500" />
            Publish to Public Gallery (Everyone can see and use this tool)
          </label>
        </div>

        <button type="submit" disabled={isPublishing} className="w-full flex items-center justify-center py-4 px-4 border border-transparent rounded-2xl shadow-xl shadow-indigo-500/20 text-lg font-bold text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all transform hover:-translate-y-1 disabled:opacity-50">
          {isPublishing ? 'Publishing...' : (
            <>
              <Save className="mr-2 h-5 w-5" /> Save & Use Tool
            </>
          )}
        </button>
      </form>
      
      <AdSlot position="bottom" />
    </motion.div>
  );
}
