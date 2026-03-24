"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, Menu, X, ArrowRight, ThumbsUp, 
  Activity, Zap, Smartphone, Globe, TrendingUp, 
  CheckCircle, BarChart, Layers, Lock, Mail, Code
} from 'lucide-react';

export default function SocialHubPro() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'analytics' | 'integrations' | 'pricing' | 'login'>('home');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [activeTab, setActiveTab] = useState<'overview' | 'facebook' | 'whatsapp'>('overview');
  
  // Simulated AI Engine Data
  const [liveMetrics, setLiveMetrics] = useState({
    activeUsers: 12453,
    messagesSent: 892,
    aiProcessing: 98.4
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 5),
        messagesSent: prev.messagesSent + Math.floor(Math.random() * 3),
        aiProcessing: 98 + Math.random() * 1.9
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Universal Navigation Handler
  const navigateTo = (page: 'home' | 'analytics' | 'integrations' | 'pricing' | 'login') => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans overflow-hidden selection:bg-indigo-500/30">
      
      {/* Universal Background */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Navigation Bar */}
      <nav className="fixed w-full bg-slate-950/80 backdrop-blur-xl z-50 border-b border-white/10">
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
              <button onClick={() => navigateTo('home')} className={`text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-indigo-400' : 'text-slate-300 hover:text-white'}`}>Dashboard</button>
              <button onClick={() => navigateTo('analytics')} className={`text-sm font-medium transition-colors ${currentPage === 'analytics' ? 'text-indigo-400' : 'text-slate-300 hover:text-white'}`}>Analytics</button>
              <button onClick={() => navigateTo('integrations')} className={`text-sm font-medium transition-colors ${currentPage === 'integrations' ? 'text-indigo-400' : 'text-slate-300 hover:text-white'}`}>Integrations</button>
              <button onClick={() => navigateTo('pricing')} className={`text-sm font-medium transition-colors ${currentPage === 'pricing' ? 'text-indigo-400' : 'text-slate-300 hover:text-white'}`}>Pricing</button>
              
              <button onClick={() => navigateTo('login')} className="bg-white/10 hover:bg-white/20 border border-white/10 px-5 py-2.5 rounded-full text-sm font-medium transition-all backdrop-blur-sm">
                Sign In
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 bg-white/5 rounded-lg border border-white/10">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area - Swaps based on state */}
      <main className="pt-32 pb-20 px-4 relative z-10 min-h-[80vh]">
        <motion.div 
          key={currentPage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-7xl mx-auto"
        >
          
          {/* ---- PAGE: HOME / DASHBOARD ---- */}
          {currentPage === 'home' && (
            <div className="space-y-24">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8">
                  <Activity size={16} className="animate-pulse" /> Live AI Data Sync Active
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                  Command your audience <br />
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    with machine precision.
                  </span>
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
                  Integrate Facebook and WhatsApp into a single, intelligent terminal. Automate responses, track live engagement, and grow faster.
                </p>
                <button onClick={() => navigateTo('pricing')} className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all flex items-center justify-center gap-2 mx-auto shadow-[0_0_30px_-5px_rgba(99,102,241,0.5)]">
                  Initialize Workspace <ArrowRight size={20} />
                </button>
              </div>

              {/* Interactive Toggles inside Home */}
              <div className="max-w-5xl mx-auto bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
                <div className="flex flex-wrap gap-2 mb-8 bg-slate-950/50 p-2 rounded-2xl border border-white/5 inline-flex">
                  <button onClick={() => setActiveTab('overview')} className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${activeTab === 'overview' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
                    <Globe size={18} /> Global
                  </button>
                  <button onClick={() => setActiveTab('facebook')} className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${activeTab === 'facebook' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
                    <ThumbsUp size={18} /> Facebook AI
                  </button>
                  <button onClick={() => setActiveTab('whatsapp')} className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${activeTab === 'whatsapp' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
                    <MessageCircle size={18} /> WhatsApp
                  </button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {activeTab === 'overview' && (
                    <>
                      <div className="bg-slate-950/50 p-6 rounded-2xl border border-white/5 border-l-4 border-l-indigo-500">
                        <p className="text-slate-400 text-sm mb-1">Total Network Reach</p>
                        <p className="text-4xl font-bold font-mono">{liveMetrics.activeUsers.toLocaleString()}</p>
                      </div>
                      <div className="bg-slate-950/50 p-6 rounded-2xl border border-white/5 border-l-4 border-l-purple-500">
                        <p className="text-slate-400 text-sm mb-1">Messages Processed</p>
                        <p className="text-4xl font-bold font-mono">{liveMetrics.messagesSent.toLocaleString()}</p>
                      </div>
                      <div className="bg-slate-950/50 p-6 rounded-2xl border border-white/5 border-l-4 border-l-pink-500">
                        <p className="text-slate-400 text-sm mb-1">System Health</p>
                        <p className="text-4xl font-bold font-mono">{liveMetrics.aiProcessing.toFixed(1)}%</p>
                      </div>
                    </>
                  )}
                  {activeTab === 'facebook' && (
                    <div className="md:col-span-3 bg-blue-950/20 p-6 rounded-2xl border border-blue-500/20 flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-bold text-blue-400">Campaign Performance</h3>
                        <p className="text-slate-400 text-sm mt-2">AI predicts 24% higher conversion on next deployment.</p>
                      </div>
                      <button onClick={() => navigateTo('analytics')} className="py-3 px-6 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-colors">View Deep Analytics</button>
                    </div>
                  )}
                  {activeTab === 'whatsapp' && (
                    <div className="md:col-span-3 bg-emerald-950/20 p-6 rounded-2xl border border-emerald-500/20 flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-bold text-emerald-400">Active Bot Sessions: 42/50</h3>
                        <p className="text-slate-400 text-sm mt-2">All routing protocols functioning nominally.</p>
                      </div>
                      <button onClick={() => navigateTo('integrations')} className="py-3 px-6 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-bold transition-colors">Manage Bot Config</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ---- PAGE: ANALYTICS ---- */}
          {currentPage === 'analytics' && (
            <div className="max-w-5xl mx-auto space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 flex items-center gap-3"><BarChart className="text-indigo-500" size={36}/> Deep Analytics Engine</h2>
                <p className="text-slate-400">Real-time metrics compiled by the AI hub.</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 border border-white/10 p-6 rounded-3xl">
                  <h3 className="text-xl font-bold mb-6 text-slate-300">Audience Growth (30 Days)</h3>
                  <div className="h-48 flex items-end justify-between gap-2 border-b border-l border-white/10 pb-2 pl-2">
                    {[30, 45, 25, 60, 75, 50, 90, 100].map((h, i) => (
                      <div key={i} className="w-full bg-gradient-to-t from-indigo-600 to-purple-400 rounded-t-sm" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-slate-900/50 border border-white/10 p-6 rounded-3xl">
                  <h3 className="text-xl font-bold mb-6 text-slate-300">Traffic Sources</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1"><span className="text-blue-400">Facebook</span><span>65%</span></div>
                      <div className="w-full bg-slate-800 rounded-full h-2"><div className="bg-blue-500 h-2 rounded-full" style={{width: '65%'}}></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1"><span className="text-emerald-400">WhatsApp Shares</span><span>25%</span></div>
                      <div className="w-full bg-slate-800 rounded-full h-2"><div className="bg-emerald-500 h-2 rounded-full" style={{width: '25%'}}></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1"><span className="text-pink-400">Organic Direct</span><span>10%</span></div>
                      <div className="w-full bg-slate-800 rounded-full h-2"><div className="bg-pink-500 h-2 rounded-full" style={{width: '10%'}}></div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ---- PAGE: INTEGRATIONS ---- */}
          {currentPage === 'integrations' && (
            <div className="max-w-5xl mx-auto space-y-8">
               <div>
                <h2 className="text-4xl font-bold mb-4 flex items-center gap-3"><Layers className="text-indigo-500" size={36}/> Integration Hub</h2>
                <p className="text-slate-400">Connect your favorite tools to the AI terminal.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: 'Facebook Ads', status: 'Connected', color: 'bg-blue-500', icon: <ThumbsUp/> },
                  { name: 'WhatsApp Business', status: 'Connected', color: 'bg-emerald-500', icon: <MessageCircle/> },
                  { name: 'System Core Sync', status: 'Connect', color: 'bg-slate-600', icon: <Code/> },
                  { name: 'Mailchimp AI', status: 'Connect', color: 'bg-yellow-500', icon: <Mail/> }
                ].map((app, i) => (
                  <div key={i} className="bg-slate-900/50 border border-white/10 p-6 rounded-3xl text-center">
                    <div className={`w-16 h-16 ${app.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      {app.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-4">{app.name}</h3>
                    <button className={`w-full py-2 rounded-xl font-semibold border ${app.status === 'Connected' ? 'border-emerald-500 text-emerald-400 bg-emerald-500/10' : 'border-white/20 hover:bg-white/10'}`}>
                      {app.status}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ---- PAGE: PRICING ---- */}
          {currentPage === 'pricing' && (
             <div className="max-w-7xl mx-auto text-center py-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Deploy your infrastructure.</h2>
              <div className="flex items-center justify-center gap-4 mb-16">
                <span className={billingCycle === 'monthly' ? 'text-white font-bold' : 'text-slate-500'}>Monthly</span>
                <button onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')} className="w-16 h-8 bg-slate-800 border border-white/10 rounded-full relative p-1 transition-colors cursor-pointer">
                  <div className={`w-6 h-6 bg-indigo-500 rounded-full transition-transform duration-300 ${billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-0'}`} />
                </button>
                <span className={billingCycle === 'yearly' ? 'text-white font-bold' : 'text-slate-500'}>
                  Yearly <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full ml-1 border border-indigo-500/30">Save 20%</span>
                </span>
              </div>
    
              <div className="max-w-md mx-auto bg-slate-900/80 backdrop-blur-md border border-indigo-500/30 p-8 rounded-3xl shadow-2xl relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-[50px]"></div>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Enterprise Ready</div>
                <h3 className="text-2xl font-bold mb-2">Pro Architecture</h3>
                <div className="text-5xl font-extrabold mb-6 flex items-baseline gap-1">
                  ${billingCycle === 'monthly' ? '49' : '39'}<span className="text-lg text-slate-500 font-medium">/mo</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {['Unlimited API Requests', 'Live Database Sync', 'WhatsApp Business Bot', 'Facebook Graph Access'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle className="text-indigo-400 w-5 h-5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={() => navigateTo('login')} className="w-full bg-white text-slate-950 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
                  Deploy Instance
                </button>
              </div>
            </div>
          )}

          {/* ---- PAGE: LOGIN ---- */}
          {currentPage === 'login' && (
            <div className="max-w-md mx-auto mt-10">
              <div className="bg-slate-900/50 border border-white/10 p-8 rounded-3xl shadow-2xl">
                <div className="text-center mb-8">
                  <Lock className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold">Secure Access</h2>
                  <p className="text-slate-400 mt-2">Login to your SocialHub terminal.</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-slate-400 uppercase tracking-wider mb-2 block">Developer Email</label>
                    <input type="email" placeholder="admin@socialhub.ai" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 uppercase tracking-wider mb-2 block">System Password</label>
                    <input type="password" placeholder="••••••••" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" />
                  </div>
                  <button onClick={() => navigateTo('home')} className="w-full bg-indigo-600 hover:bg-indigo-500 py-4 rounded-xl font-bold mt-4 transition-colors">
                    Authenticate
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 bg-slate-950 relative z-10">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <div className="flex items-center gap-2 opacity-50">
            <Zap size={16} />
            <span className="text-sm">SocialHub.AI Prototype</span>
          </div>
        </div>
      </footer>
    </div>
  );
}