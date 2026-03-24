"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, Menu, X, ThumbsUp, 
  Activity, Zap, Smartphone, Globe, 
  CheckCircle, BarChart, Layers, Lock, Mail, Code, 
  Bot, Send, Download, Settings, Bell
} from 'lucide-react';

export default function SocialHubPro() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'analytics' | 'integrations' | 'pricing' | 'login'>('home');
  const [isLoading, setIsLoading] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [activeTab, setActiveTab] = useState<'overview' | 'facebook' | 'whatsapp'>('overview');
  
  // 1. Live Notification Toasts State
  const [toasts, setToasts] = useState<{id: number, type: string, msg: string, avatar?: string}[]>([]);
  
  // 2. Interactive Modals State
  const [activeModal, setActiveModal] = useState<'none' | 'ad' | 'bot'>('none');
  
  // 3. AI Chat Assistant State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<{role: 'ai'|'user', text: string, time: string}[]>([
    { role: 'ai', text: 'SocialHub AI online. How can I optimize your workspace today?', time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isAiThinking, setIsAiThinking] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Simulated AI Engine Data
  const [liveMetrics, setLiveMetrics] = useState({
    activeUsers: 12453,
    messagesSent: 892,
    revenue: 4250,
    aiProcessing: 98.4
  });

  // Data & Toast Simulation Engine
  useEffect(() => {
    const dataInterval = setInterval(() => {
      setLiveMetrics(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 5),
        messagesSent: prev.messagesSent + Math.floor(Math.random() * 3),
        revenue: prev.revenue + Math.floor(Math.random() * 15),
        aiProcessing: 98 + Math.random() * 1.9
      }));
    }, 3000);

    const toastInterval = setInterval(() => {
      if (Math.random() > 0.4) {
        const types = ['whatsapp', 'facebook', 'system'];
        const type = types[Math.floor(Math.random() * types.length)];
        let msg = "";
        let avatar = "";

        if (type === 'whatsapp') {
          const numbers = ["84 555 0192", "82 123 4567", "87 999 2211"];
          msg = `New lead from Maputo: +258 ${numbers[Math.floor(Math.random() * numbers.length)]}`;
          avatar = `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`;
        } else if (type === 'facebook') {
          msg = "Ad campaign 'Summer' reached 500 impressions.";
        } else {
          msg = "System Sync: Node 4 routing nominal.";
        }

        const newToast = { id: Date.now(), type, msg, avatar };
        setToasts(prev => [...prev.slice(-2), newToast]);
        setTimeout(() => setToasts(prev => prev.filter(t => t.id !== newToast.id)), 5000);
      }
    }, 10000);

    return () => {
      clearInterval(dataInterval);
      clearInterval(toastInterval);
    };
  }, []);

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isAiThinking]);

  // Handle AI Chat Submission
  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    
    const timeNow = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    setChatMessages(prev => [...prev, { role: 'user', text: chatInput, time: timeNow }]);
    setChatInput('');
    setIsAiThinking(true);

    setTimeout(() => {
      setIsAiThinking(false);
      setChatMessages(prev => [...prev, { 
        role: 'ai', 
        text: 'Analyzing request... I recommend reallocating 15% of your ad budget to WhatsApp direct engagement for a projected 8% ROI increase.',
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      }]);
    }, 2000);
  };

  // Cinematic Navigation Handler with Skeleton Loading
  const navigateTo = (page: 'home' | 'analytics' | 'integrations' | 'pricing' | 'login') => {
    if (page === currentPage) return;
    setIsMenuOpen(false);
    setIsLoading(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setTimeout(() => {
      setCurrentPage(page);
      setIsLoading(false);
    }, 800);
  };

  const handleExport = () => window.print();

  // Page Variants for Framer Motion (100% Type Safe)
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans overflow-hidden selection:bg-indigo-500/30 relative">
      
      {/* Cinematic Art Backgrounds */}
      <div className="fixed inset-0 z-0 opacity-20 print:hidden pointer-events-none">
        <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2874&auto=format&fit=crop" alt="Abstract AI Art" className="w-full h-full object-cover mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"></div>
      </div>
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/30 blur-[120px] rounded-full pointer-events-none print:hidden z-0" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/30 blur-[120px] rounded-full pointer-events-none print:hidden z-0" />

      {/* --- HUMANIZED LIVE NOTIFICATIONS --- */}
      <div className="fixed top-24 right-4 z-[60] flex flex-col gap-3 print:hidden">
        <AnimatePresence>
          {toasts.map(toast => (
            <motion.div 
              key={toast.id}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.9 }}
              className="bg-slate-900/90 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-2xl flex items-center gap-4 w-80 overflow-hidden relative"
            >
              {toast.type === 'whatsapp' && (
                <div className="relative">
                  <img src={toast.avatar} alt="User" className="w-10 h-10 rounded-full border border-emerald-500/50" />
                  <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-0.5"><MessageCircle size={10} className="text-white"/></div>
                </div>
              )}
              {toast.type === 'facebook' && (
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_-3px_rgba(37,99,235,0.5)]">
                  <ThumbsUp size={18} className="text-white"/>
                </div>
              )}
              {toast.type === 'system' && (
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Bell size={18} className="text-white"/>
                </div>
              )}
              <p className="text-sm text-slate-200 font-medium leading-tight">{toast.msg}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* --- INTERACTIVE MODALS --- */}
      <AnimatePresence>
        {activeModal !== 'none' && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 print:hidden"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
              className="bg-slate-900 border border-white/10 p-6 rounded-3xl w-full max-w-md shadow-2xl relative"
            >
              <button onClick={() => setActiveModal('none')} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"><X size={20}/></button>
              
              {activeModal === 'ad' ? (
                <>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><ThumbsUp className="text-blue-500"/> Configure Auto-Ad</h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="text-xs text-slate-400 mb-1 block">Daily Budget ($)</label>
                      <input type="range" min="5" max="100" defaultValue="25" className="w-full accent-blue-500" />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 mb-1 block">Target Audience AI</label>
                      <select className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-sm focus:outline-none">
                        <option>Lookalike (High Conversion)</option>
                        <option>Retargeting (Warm Leads)</option>
                        <option>Broad (Brand Awareness)</option>
                      </select>
                    </div>
                  </div>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => { setActiveModal('none'); setToasts(prev => [...prev, {id: Date.now(), type: 'system', msg: "Ad Campaign Deployed!"}]); }} className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-xl font-bold transition-colors">Deploy to Facebook</motion.button>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Smartphone className="text-emerald-500"/> Bot Config</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between bg-slate-950 p-3 rounded-xl border border-white/5 hover:border-white/20 transition-colors">
                      <span className="text-sm font-medium">Auto-resolve FAQs</span>
                      <div className="w-10 h-6 bg-emerald-500 rounded-full relative cursor-pointer shadow-[0_0_10px_-2px_rgba(16,185,129,0.5)]"><div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div></div>
                    </div>
                    <div className="flex items-center justify-between bg-slate-950 p-3 rounded-xl border border-white/5 hover:border-white/20 transition-colors">
                      <span className="text-sm font-medium">Human Handoff Alert</span>
                      <div className="w-10 h-6 bg-emerald-500 rounded-full relative cursor-pointer shadow-[0_0_10px_-2px_rgba(16,185,129,0.5)]"><div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div></div>
                    </div>
                  </div>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => { setActiveModal('none'); setToasts(prev => [...prev, {id: Date.now(), type: 'system', msg: "Protocols Updated!"}]); }} className="w-full bg-emerald-600 hover:bg-emerald-500 py-3 rounded-xl font-bold transition-colors">Save Configuration</motion.button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Bar */}
      <nav className="fixed w-full bg-slate-950/70 backdrop-blur-xl z-50 border-b border-white/5 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <button onClick={() => navigateTo('home')} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="bg-gradient-to-tr from-indigo-500 to-purple-500 p-2 rounded-xl shadow-lg shadow-indigo-500/20">
                <Zap className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                SocialHub<span className="text-indigo-500">.AI</span>
              </span>
            </button>
            
            <div className="hidden md:flex space-x-8 items-center">
              {['home', 'analytics', 'integrations', 'pricing'].map((page) => (
                <button key={page} onClick={() => navigateTo(page as any)} className={`text-sm font-medium transition-colors capitalize relative ${currentPage === page ? 'text-indigo-400' : 'text-slate-300 hover:text-white'}`}>
                  {page}
                  {currentPage === page && <motion.div layoutId="nav-pill" className="absolute -bottom-7 left-0 right-0 h-0.5 bg-indigo-500" />}
                </button>
              ))}
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => navigateTo('login')} className="bg-white/10 hover:bg-white/20 border border-white/10 px-5 py-2.5 rounded-full text-sm font-medium transition-all backdrop-blur-sm">
                Sign In
              </motion.button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 bg-white/5 rounded-lg border border-white/10">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area with Transitions */}
      <main className="pt-32 pb-20 px-4 relative z-10 min-h-[80vh]">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div key="loader" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto flex flex-col items-center justify-center h-[50vh] space-y-4">
              <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
              <p className="text-indigo-400 animate-pulse font-medium text-sm">Fetching secure data...</p>
            </motion.div>
          ) : (
            <motion.div key={currentPage} variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }} className="max-w-7xl mx-auto">
              
              {/* ---- PAGE: HOME / DASHBOARD ---- */}
              {currentPage === 'home' && (
                <div className="space-y-24">
                  <div className="text-center print:hidden">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]">
                      <Activity size={16} className="animate-pulse" /> Live AI Data Sync Active
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight drop-shadow-lg">
                      Command your audience <br />
                      <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        with machine precision.
                      </span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 drop-shadow-md">
                      Integrate Facebook and WhatsApp into a single, intelligent terminal. Automate responses, track live engagement, and grow faster.
                    </p>
                  </div>

                  {/* Interactive Dashboard */}
                  <div className="max-w-5xl mx-auto bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]">
                    <div className="flex flex-wrap gap-2 mb-8 bg-slate-950/50 p-2 rounded-2xl border border-white/5 inline-flex print:hidden">
                      {['overview', 'facebook', 'whatsapp'].map((tab) => (
                        <button key={tab} onClick={() => setActiveTab(tab as any)} className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 capitalize ${activeTab === tab ? (tab === 'facebook' ? 'bg-blue-600 text-white shadow-lg' : tab === 'whatsapp' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-indigo-600 text-white shadow-lg') : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
                          {tab === 'overview' && <Globe size={18} />}
                          {tab === 'facebook' && <ThumbsUp size={18} />}
                          {tab === 'whatsapp' && <MessageCircle size={18} />}
                          {tab}
                        </button>
                      ))}
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="grid md:grid-cols-3 gap-6">
                        {activeTab === 'overview' && (
                          <>
                            <motion.div whileHover={{ y: -5 }} className="bg-slate-950/70 p-6 rounded-2xl border border-white/5 border-l-4 border-l-indigo-500 shadow-xl transition-all">
                              <p className="text-slate-400 text-sm mb-1">Total Network Reach</p>
                              <p className="text-4xl font-bold font-mono">{liveMetrics.activeUsers.toLocaleString()}</p>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} className="bg-slate-950/70 p-6 rounded-2xl border border-white/5 border-l-4 border-l-emerald-500 shadow-xl transition-all">
                              <p className="text-slate-400 text-sm mb-1">Est. Revenue Generated</p>
                              <p className="text-4xl font-bold font-mono text-emerald-400">${liveMetrics.revenue.toLocaleString()}</p>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} className="bg-slate-950/70 p-6 rounded-2xl border border-white/5 border-l-4 border-l-pink-500 shadow-xl transition-all">
                              <p className="text-slate-400 text-sm mb-1">System Health</p>
                              <p className="text-4xl font-bold font-mono">{liveMetrics.aiProcessing.toFixed(1)}%</p>
                            </motion.div>
                          </>
                        )}
                        {activeTab === 'facebook' && (
                          <div className="md:col-span-3 bg-blue-950/30 p-8 rounded-2xl border border-blue-500/20 flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
                            <div>
                              <h3 className="text-2xl font-bold text-blue-400 mb-2 flex items-center gap-2"><ThumbsUp/> Campaign Performance</h3>
                              <div className="flex gap-4 mt-4">
                                <div className="bg-blue-900/40 p-4 rounded-xl border border-blue-500/20"><span className="text-xs text-blue-300 block uppercase tracking-wider mb-1">Active Ads</span><span className="text-2xl font-bold text-white">12</span></div>
                                <div className="bg-blue-900/40 p-4 rounded-xl border border-blue-500/20"><span className="text-xs text-blue-300 block uppercase tracking-wider mb-1">Avg. CPC</span><span className="text-2xl font-bold text-white">$0.42</span></div>
                              </div>
                            </div>
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveModal('ad')} className="w-full md:w-auto py-4 px-8 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)]"><Settings size={20}/> Launch Auto-Ad</motion.button>
                          </div>
                        )}
                        {activeTab === 'whatsapp' && (
                          <div className="md:col-span-3 bg-emerald-950/30 p-8 rounded-2xl border border-emerald-500/20 flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
                            <div>
                              <h3 className="text-2xl font-bold text-emerald-400 mb-2 flex items-center gap-2"><Smartphone/> Active Bot Sessions: 42/50</h3>
                              <p className="text-emerald-200/70 max-w-sm mt-2 leading-relaxed">AI is currently handling routing for 8 active customer disputes automatically. Response time is sub-2s.</p>
                            </div>
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveModal('bot')} className="w-full md:w-auto py-4 px-8 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-bold transition-all flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)]"><Settings size={20}/> Manage Config</motion.button>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              )}

              {/* ---- PAGE: ANALYTICS (Animated Visuals) ---- */}
              {currentPage === 'analytics' && (
                <div className="max-w-5xl mx-auto space-y-8 print:m-0 print:p-0">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h2 className="text-4xl font-bold mb-2 flex items-center gap-3"><BarChart className="text-indigo-500" size={36}/> Deep Analytics Engine</h2>
                      <p className="text-slate-400">Executive performance overview.</p>
                    </div>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleExport} className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-xl font-medium flex items-center gap-2 border border-white/10 print:hidden shadow-lg">
                      <Download size={18}/> Export PDF Report
                    </motion.button>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div whileHover={{ y: -5 }} className="bg-slate-900/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl print:border-black/20 print:bg-white print:text-black shadow-xl transition-all">
                      <h3 className="text-xl font-bold mb-8 text-slate-300 print:text-black">Audience Growth (30 Days)</h3>
                      <div className="h-48 flex items-end justify-between gap-3 border-b border-l border-white/10 print:border-black pb-2 pl-2">
                        {[30, 45, 25, 60, 75, 50, 90, 100].map((h, i) => (
                          <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 1, delay: i * 0.1 }} className="w-full bg-gradient-to-t from-indigo-600 to-purple-400 rounded-t-md print:bg-black shadow-[0_0_15px_-5px_rgba(99,102,241,0.5)]"></motion.div>
                        ))}
                      </div>
                    </motion.div>
                    
                    <motion.div whileHover={{ y: -5 }} className="bg-slate-900/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl print:border-black/20 print:bg-white print:text-black shadow-xl transition-all">
                      <h3 className="text-xl font-bold mb-8 text-slate-300 print:text-black">Sales Conversion Pipeline</h3>
                      <div className="space-y-6">
                        {[
                          { label: 'Total Leads', val: '2,450', percent: '100%', color: 'bg-indigo-500' },
                          { label: 'Engaged (WhatsApp)', val: '1,102', percent: '65%', color: 'bg-purple-500' },
                          { label: 'Converted to Sale', val: '315', percent: '25%', color: 'bg-emerald-500', textClass: 'text-emerald-400' }
                        ].map((stat, i) => (
                          <div key={i}>
                            <div className="flex justify-between text-sm mb-2"><span className="text-slate-400 print:text-black">{stat.label}</span><span className={`font-bold ${stat.textClass || ''} print:text-black`}>{stat.val}</span></div>
                            <div className="w-full bg-slate-800/50 rounded-full h-3 overflow-hidden">
                              <motion.div initial={{ width: 0 }} animate={{ width: stat.percent }} transition={{ duration: 1, delay: 0.5 + (i * 0.2) }} className={`${stat.color} h-3 rounded-full print:bg-black relative`}>
                                <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]"></div>
                              </motion.div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}

              {/* ---- PAGE: INTEGRATIONS (Hover Effects) ---- */}
              {currentPage === 'integrations' && (
                <div className="max-w-5xl mx-auto space-y-8">
                   <div>
                    <h2 className="text-4xl font-bold mb-4 flex items-center gap-3"><Layers className="text-indigo-500" size={36}/> Integration Hub</h2>
                    <p className="text-slate-400">Connect your favorite tools to the AI terminal.</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { name: 'Facebook Ads', status: 'Connected', color: 'bg-blue-500 shadow-[0_0_20px_-5px_rgba(59,130,246,0.6)]', icon: <ThumbsUp size={32}/> },
                      { name: 'WhatsApp Business', status: 'Connected', color: 'bg-emerald-500 shadow-[0_0_20px_-5px_rgba(16,185,129,0.6)]', icon: <MessageCircle size={32}/> },
                      { name: 'System Core Sync', status: 'Connect', color: 'bg-slate-700', icon: <Code size={32}/> },
                      { name: 'Mailchimp AI', status: 'Connect', color: 'bg-yellow-600', icon: <Mail size={32}/> }
                    ].map((app, i) => (
                      <motion.div key={i} whileHover={{ y: -8, scale: 1.02 }} className="bg-slate-900/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-center shadow-xl cursor-pointer">
                        <div className={`w-20 h-20 ${app.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform hover:rotate-6`}>
                          {app.icon}
                        </div>
                        <h3 className="font-bold text-xl mb-6">{app.name}</h3>
                        <button className={`w-full py-3 rounded-xl font-bold transition-colors border ${app.status === 'Connected' ? 'border-emerald-500/50 text-emerald-400 bg-emerald-500/10' : 'border-white/10 hover:bg-white/10 hover:border-white/30 text-slate-300'}`}>
                          {app.status}
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* ---- PAGE: PRICING ---- */}
              {currentPage === 'pricing' && (
                 <div className="max-w-7xl mx-auto text-center py-10">
                  <h2 className="text-4xl md:text-6xl font-extrabold mb-8 drop-shadow-md">Deploy your infrastructure.</h2>
                  <div className="flex items-center justify-center gap-4 mb-16">
                    <span className={billingCycle === 'monthly' ? 'text-white font-bold' : 'text-slate-500'}>Monthly</span>
                    <button onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')} className="w-16 h-8 bg-slate-800 border border-white/10 rounded-full relative p-1 transition-colors cursor-pointer shadow-inner">
                      <div className={`w-6 h-6 bg-indigo-500 rounded-full transition-transform duration-300 shadow-md ${billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-0'}`} />
                    </button>
                    <span className={billingCycle === 'yearly' ? 'text-white font-bold' : 'text-slate-500'}>
                      Yearly <span className="text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1.5 rounded-full ml-2 border border-indigo-500/30 font-bold uppercase tracking-wider">Save 20%</span>
                    </span>
                  </div>
        
                  <motion.div whileHover={{ scale: 1.02 }} className="max-w-md mx-auto bg-slate-900/80 backdrop-blur-2xl border border-indigo-500/50 p-10 rounded-[2.5rem] shadow-[0_0_50px_-15px_rgba(99,102,241,0.5)] relative overflow-hidden text-left">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/20 blur-[60px]"></div>
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Enterprise Ready</div>
                    <h3 className="text-3xl font-bold mb-2">Pro Architecture</h3>
                    <div className="text-6xl font-extrabold mb-8 flex items-baseline gap-1">
                      ${billingCycle === 'monthly' ? '49' : '39'}<span className="text-xl text-slate-500 font-medium">/mo</span>
                    </div>
                    <ul className="space-y-5 mb-10">
                      {['Unlimited API Requests', 'Live Database Sync', 'WhatsApp Business Bot', 'Facebook Graph Access'].map((item) => (
                        <li key={item} className="flex items-center gap-4 text-slate-200 font-medium">
                          <CheckCircle className="text-indigo-400 w-6 h-6 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => navigateTo('login')} className="w-full bg-white text-slate-950 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-colors shadow-xl">
                      Deploy Instance
                    </motion.button>
                  </motion.div>
                </div>
              )}

              {/* ---- PAGE: LOGIN ---- */}
              {currentPage === 'login' && (
                <div className="max-w-md mx-auto mt-10">
                  <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-slate-900/80 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-[-50px] left-[-50px] w-32 h-32 bg-indigo-500/20 blur-[50px]"></div>
                    <div className="text-center mb-10 relative z-10">
                      <div className="w-20 h-20 bg-indigo-500/10 border border-indigo-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                        <Lock className="w-10 h-10 text-indigo-400" />
                      </div>
                      <h2 className="text-3xl font-bold">Secure Access</h2>
                      <p className="text-slate-400 mt-2">Login to your SocialHub terminal.</p>
                    </div>
                    <div className="space-y-5 relative z-10">
                      <div>
                        <label className="text-xs text-slate-400 uppercase tracking-widest mb-2 block font-bold">Developer Email</label>
                        <input type="email" placeholder="admin@socialhub.ai" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors shadow-inner" />
                      </div>
                      <div>
                        <label className="text-xs text-slate-400 uppercase tracking-widest mb-2 block font-bold">System Password</label>
                        <input type="password" placeholder="••••••••" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors shadow-inner" />
                      </div>
                      <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => navigateTo('home')} className="w-full bg-indigo-600 hover:bg-indigo-500 py-4 rounded-xl font-bold mt-6 transition-colors shadow-[0_0_20px_-5px_rgba(99,102,241,0.5)]">
                        Authenticate
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* --- ENHANCED FLOATING AI ASSISTANT --- */}
      <div className="fixed bottom-6 right-6 z-50 print:hidden">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.9, originBottomRight: true }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="absolute bottom-20 right-0 w-80 sm:w-96 bg-slate-900 border border-white/10 rounded-3xl shadow-[0_0_50px_-10px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col z-50"
            >
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 flex justify-between items-center shadow-md">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm"><Bot size={20} className="text-white"/></div>
                  <div>
                    <span className="font-bold block text-sm">Hub AI Agent</span>
                    <span className="text-xs text-indigo-200 flex items-center gap-1"><div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div> Online</span>
                  </div>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors"><X size={18} className="text-white"/></button>
              </div>
              <div className="h-80 overflow-y-auto p-4 space-y-5 bg-slate-950/80 custom-scrollbar">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className="flex items-end gap-2 max-w-[85%]">
                      {msg.role === 'ai' && <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mb-1"><Bot size={12}/></div>}
                      <div className={`p-3.5 rounded-2xl text-sm shadow-md leading-relaxed ${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-br-sm' : 'bg-slate-800 text-slate-200 rounded-bl-sm border border-white/5'}`}>
                        {msg.text}
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-500 mt-1 px-8">{msg.time}</span>
                  </div>
                ))}
                {isAiThinking && (
                  <div className="flex items-end gap-2">
                    <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mb-1"><Bot size={12}/></div>
                    <div className="bg-slate-800 text-slate-400 p-3.5 rounded-2xl rounded-bl-sm border border-white/5 flex gap-1 shadow-md">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>
              <form onSubmit={handleChatSubmit} className="p-4 bg-slate-900 border-t border-white/10 flex gap-2">
                <input value={chatInput} onChange={(e) => setChatInput(e.target.value)} type="text" placeholder="Ask AI to analyze data..." className="flex-1 bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 shadow-inner" />
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" disabled={isAiThinking} className="bg-indigo-600 p-3 rounded-xl text-white hover:bg-indigo-500 disabled:opacity-50 shadow-md flex items-center justify-center"><Send size={18}/></motion.button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button 
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`p-4 rounded-full shadow-2xl transition-all relative z-50 ${isChatOpen ? 'bg-slate-800 text-white border border-white/10' : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_0_30px_-5px_rgba(99,102,241,0.6)]'}`}
        >
          {isChatOpen ? <X size={28}/> : <MessageCircle size={28}/>}
        </motion.button>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #475569; }
      `}</style>
    </div>
  );
}