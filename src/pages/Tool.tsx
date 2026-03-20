import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { generateToolResult } from '../services/ai';
import { ArrowLeft, Copy, Check, Loader2, Sparkles, AlertCircle, Share2, Download } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'motion/react';
import { AdSlot } from '../components/AdSlot';
import { IconRenderer } from '../components/IconRenderer';
import { useTools } from '../hooks/useTools';

export default function ToolPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const tools = useTools();
  const tool = tools.find((t) => t.id === id);

  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  if (!tool) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Tool not found</h2>
        <button
          onClick={() => navigate('/tools')}
          className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Tools
        </button>
      </div>
    );
  }

  const handleGenerate = async () => {
    if (!input.trim()) {
      setError('Please provide some input before generating.');
      return;
    }

    setIsLoading(true);
    setError('');
    setResult('');

    try {
      const generatedText = await generateToolResult(tool.promptTemplate, input);
      setResult(generatedText);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: tool.name,
          text: `Check out this AI tool: ${tool.name}`,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleDownload = () => {
    if (!result) return;
    const blob = new Blob([result], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${tool.name.replace(/\s+/g, '_')}_Result.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <AdSlot position="top" />

      {/* Header */}
      <div>
        <Link
          to="/tools"
          className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-indigo-600 mb-6 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Directory
        </Link>
        
        <div className="flex items-center gap-5 mb-6">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-2xl shadow-lg shadow-indigo-500/30">
            <IconRenderer name={tool.icon} className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight flex items-center gap-3">
              {tool.name}
              {tool.isCustom && (
                <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full uppercase font-black tracking-wider">
                  Custom Tool
                </span>
              )}
            </h1>
            <span className="inline-flex items-center px-3 py-1 rounded-lg text-sm font-bold bg-slate-100/80 text-slate-600 mt-2">
              {tool.category}
            </span>
          </div>
        </div>
        <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-3xl">{tool.description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="glass-panel rounded-3xl p-6 md:p-8 shadow-sm flex flex-col h-full relative z-10">
          <label htmlFor="tool-input" className="block text-sm font-bold text-slate-900 mb-3">
            {tool.inputLabel}
          </label>
          <textarea
            id="tool-input"
            rows={8}
            className="w-full rounded-2xl border border-slate-200/60 p-5 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none transition-all bg-white/80 shadow-sm hover:shadow-md flex-1 text-lg allow-select"
            placeholder={tool.inputPlaceholder}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              if (error) setError('');
            }}
          />
          
          {error && (
            <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-2xl flex items-start gap-3 border border-red-100 shadow-sm">
              <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
              <p className="text-sm font-bold">{error}</p>
            </div>
          )}

          <button
            onClick={handleGenerate}
            disabled={isLoading || !input.trim()}
            className="mt-6 w-full flex items-center justify-center py-4 px-4 border border-transparent rounded-2xl shadow-xl shadow-indigo-500/20 text-lg font-bold text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:-translate-y-1"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="-ml-1 mr-2 h-5 w-5" />
                Generate Result
              </>
            )}
          </button>
        </div>

        {/* Output Section */}
        <div className="bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-800 premium-shadow flex flex-col h-full relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="flex justify-between items-center mb-6 relative z-10">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Generated Result</h2>
            {result && (
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2.5 border border-slate-700/50 rounded-xl text-slate-300 bg-slate-800/50 hover:bg-slate-700 hover:text-white transition-colors backdrop-blur-sm"
                  title="Share Tool"
                >
                  <Share2 className="h-4 w-4" />
                </button>
                <button
                  onClick={handleDownload}
                  className="p-2.5 border border-slate-700/50 rounded-xl text-slate-300 bg-slate-800/50 hover:bg-slate-700 hover:text-white transition-colors backdrop-blur-sm"
                  title="Download Result"
                >
                  <Download className="h-4 w-4" />
                </button>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center px-4 py-2.5 border border-slate-700/50 rounded-xl text-sm font-bold text-slate-300 bg-slate-800/50 hover:bg-slate-700 hover:text-white transition-colors backdrop-blur-sm"
                >
                  {copied ? (
                    <>
                      <Check className="mr-2 h-4 w-4 text-emerald-400" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
          
          <div className="flex-1 bg-slate-950/50 rounded-2xl p-6 border border-slate-800/50 overflow-y-auto min-h-[300px] relative z-10 allow-select">
            {isLoading ? (
              <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
                <Loader2 className="h-8 w-8 animate-spin text-indigo-500" />
                <p className="animate-pulse font-bold tracking-wide">AI is thinking...</p>
              </div>
            ) : result ? (
              <div className="prose prose-invert prose-indigo max-w-none prose-p:leading-relaxed prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-700">
                <ReactMarkdown>{result}</ReactMarkdown>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-slate-500 text-center">
                <Sparkles className="h-12 w-12 mb-4 opacity-20" />
                <p className="font-medium">Your generated content will appear here.</p>
                <p className="text-sm mt-2 opacity-60">Fill out the form and click generate to start.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <AdSlot position="bottom" />
    </motion.div>
  );
}
