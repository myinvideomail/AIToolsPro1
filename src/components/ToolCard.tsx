import { Link } from 'react-router-dom';
import { Tool } from '../data/tools';
import { ArrowRight } from 'lucide-react';
import { IconRenderer } from './IconRenderer';

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      to={`/tool/${tool.id}`}
      className="group flex flex-col bg-white border border-slate-200/60 rounded-3xl p-6 hover:premium-shadow hover:border-indigo-300 transition-all duration-300 relative overflow-hidden transform hover:-translate-y-1"
    >
      <div className="absolute top-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
        <div className="bg-indigo-50 p-2 rounded-full">
          <ArrowRight className="h-4 w-4 text-indigo-600" />
        </div>
      </div>
      
      <div className="flex items-center gap-4 mb-5">
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/60 p-3.5 rounded-2xl group-hover:from-indigo-50 group-hover:to-purple-50 group-hover:border-indigo-100 transition-all duration-300">
          <IconRenderer name={tool.icon} className="h-6 w-6 text-slate-700 group-hover:text-indigo-600 transition-colors" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
            {tool.name}
            {tool.isCustom && (
              <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full uppercase font-black tracking-wider">
                Custom
              </span>
            )}
          </h3>
          <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100/80 text-slate-600 mt-1.5">
            {tool.category}
          </span>
        </div>
      </div>
      
      <p className="text-slate-500 text-sm leading-relaxed flex-1 font-medium">
        {tool.description}
      </p>
    </Link>
  );
}
