"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, Menu, X, ArrowRight, ThumbsUp, 
  Activity, Zap, Smartphone, Globe, TrendingUp, CheckCircle 
} from 'lucide-react';

export default function SocialHubPro() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [activeTab, setActiveTab] = useState<'overview' | 'facebook' | 'whatsapp'>('overview');
  
  // Simulated "Live AI Database" State
  const [liveMetrics, setLiveMetrics] = useState({
    activeUsers: 12453,
    messagesSent: 892,
    aiProcessing: 98.4
  });

  // This effect simulates real-time data incoming from a server
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

  // Button Interaction Handler
  const handleAction = (actionName: string) => {
    alert(`Teacher Demo: The "${actionName}" function would trigger a database action here!`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans overflow-hidden selection:bg-indigo-500/30">
      
      {/* AI Glowing Background Effects */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed w-full bg-slate-950/60 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-tr from-indigo-500 to-purple-500 p-2 rounded-xl shadow-lg shadow-indigo-500/20">
                <Zap className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                SocialHub<span className="text-indigo-500">.AI</span>
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              {['Dashboard', 'Analytics', 'Integrations', 'Pricing'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
              <button onClick={() => handleAction('Login')} className="bg-white/10 hover:bg-white/20 border border-white/10 px-5 py-2.5 rounded-full text-sm font-medium transition-all backdrop-blur-sm">
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

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8">
              <Activity size={16} className="animate-pulse" />
              Live AI Data Sync Active
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
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={() => handleAction('Start Free Trial')} className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_-5px_rgba(99,102,241,0.5)]">
                Initialize Workspace <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Interactive Dashboard Section */}
      <section id="dashboard" className="py-12 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
            
            {/* Toggles */}
            <div className="flex flex-wrap gap-2 mb-8 bg-slate-950/50 p-2 rounded-2xl border border-white/5 inline-flex">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${activeTab === 'overview' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
              >
                <Globe size={18} /> Global Overview
              </button>
              <button 
                onClick={() => setActiveTab('facebook')}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${activeTab === 'facebook' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
              >
                <ThumbsUp size={18} /> Facebook AI
              </button>
              <button 
                onClick={() => setActiveTab('whatsapp')}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${activeTab === 'whatsapp' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
              >
                <MessageCircle size={18} /> WhatsApp Bot
              </button>
            </div>

            {/* Dynamic Content Area based on Toggle */}
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {activeTab === 'overview' && (
                <>
                  <div className="bg-slate-950/50 p-6 rounded-2xl border border-white/5 border-l-4 border-l-indigo-500">
                    <p className="text-slate-400 text-sm mb-1">Total Network Reach</p>
                    <p className="text-4xl font-bold font-mono">{liveMetrics.activeUsers.toLocaleString()}</p>
                    <p className="text-emerald-400 text-xs mt-2 flex items-center gap-1"><TrendingUp size={12}/> +12% this hour</p>
                  </div>
                  <div className="bg-slate-950/50 p-6 rounded-2xl border border-white/5 border-l-4 border-l-purple-500">
                    <p className="text-slate-400 text-sm mb-1">Messages Processed</p>
                    <p className="text-4xl font-bold font-mono">{liveMetrics.messagesSent.toLocaleString()}</p>
                    <p className="text-emerald-400 text-xs mt-2 flex items-center gap-1"><TrendingUp size={12}/> AI handling 84%</p>
                  </div>
                  <div className="bg-slate-950/50 p-6 rounded-2xl border border-white/5 border-l-4 border-l-pink-500">
                    <p className="text-slate-400 text-sm mb-1">System Health</p>
                    <p className="text-4xl font-bold font-mono">{liveMetrics.aiProcessing.toFixed(1)}%</p>
                    <p className="text-indigo-400 text-xs mt-2 flex items-center gap-1"><Zap size={12}/> Latency: 12ms</p>
                  </div>
                </>
              )}

              {activeTab === 'facebook' && (
                <>
                  <div className="md:col-span-2 bg-blue-950/20 p-6 rounded-2xl border border-blue-500/20">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-400"><ThumbsUp /> Campaign Performance</h3>
                    <div className="h-32 bg-slate-950/50 rounded-xl border border-white/5 flex items-end p-4 gap-2">
                      {/* Fake Bar Chart */}
                      {[40, 70, 45, 90, 65, 100, 85].map((h, i) => (
                        <div key={i} className="flex-1 bg-blue-500/50 rounded-t-md transition-all duration-500 hover:bg-blue-400" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-blue-950/20 p-6 rounded-2xl border border-blue-500/20 flex flex-col justify-center items-center text-center">
                    <button onClick={() => handleAction('Launch Ad')} className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold mb-4 transition-colors">
                      Launch Auto-Ad
                    </button>
                    <p className="text-xs text-slate-400">AI predicts 24% higher conversion on next deployment.</p>
                  </div>
                </>
              )}

              {activeTab === 'whatsapp' && (
                <>
                  <div className="bg-emerald-950/20 p-6 rounded-2xl border border-emerald-500/20 flex flex-col justify-between">
                     <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-emerald-400"><Smartphone /> Active Sessions</h3>
                     <p className="text-5xl font-mono font-bold text-white">42<span className="text-lg text-slate-500">/50</span></p>
                     <p className="text-xs text-emerald-500 mt-2">Bot status: Online & Routing</p>
                  </div>
                  <div className="md:col-span-2 bg-emerald-950/20 p-6 rounded-2xl border border-emerald-500/20">
                    <h3 className="text-sm font-bold mb-4 text-slate-400">Live Chat Logs (Simulated)</h3>
                    <div className="space-y-3">
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-white/5 text-sm flex justify-between">
                        <span className="text-slate-300">&quot;Where is my order?&quot;</span>
                        <span className="text-emerald-400 text-xs bg-emerald-500/10 px-2 py-1 rounded">Auto-Resolved</span>
                      </div>
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-white/5 text-sm flex justify-between">
                        <span className="text-slate-300">&quot;Need speaking to human&quot;</span>
                        <span className="text-amber-400 text-xs bg-amber-500/10 px-2 py-1 rounded">Routing to Team</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Toggle Section */}
      <section id="pricing" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Deploy your infrastructure.</h2>
          
          {/* Interactive Pricing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={billingCycle === 'monthly' ? 'text-white font-bold' : 'text-slate-500'}>Monthly</span>
            <button 
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="w-16 h-8 bg-slate-800 border border-white/10 rounded-full relative p-1 transition-colors cursor-pointer"
            >
              <div className={`w-6 h-6 bg-indigo-500 rounded-full transition-transform duration-300 ${billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-0'}`} />
            </button>
            <span className={billingCycle === 'yearly' ? 'text-white font-bold' : 'text-slate-500'}>
              Yearly <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full ml-1 border border-indigo-500/30">Save 20%</span>
            </span>
          </div>

          <div className="max-w-md mx-auto bg-slate-900/80 backdrop-blur-md border border-indigo-500/30 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-[50px]"></div>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Enterprise Ready
            </div>
            <h3 className="text-2xl font-bold mb-2 text-left">Pro Architecture</h3>
            <div className="text-5xl font-extrabold mb-6 text-left flex items-baseline gap-1">
              ${billingCycle === 'monthly' ? '49' : '39'}
              <span className="text-lg text-slate-500 font-medium">/mo</span>
            </div>
            <ul className="text-left space-y-4 mb-8">
              {['Unlimited API Requests', 'Live Database Sync', 'WhatsApp Business Bot', 'Facebook Graph Access'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="text-indigo-400 w-5 h-5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button onClick={() => handleAction('Purchase Plan')} className="w-full bg-white text-slate-950 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
              Deploy Instance
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 bg-slate-950 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Zap className="text-indigo-500" />
            <span className="text-white font-bold text-xl">SocialHub.AI</span>
          </div>
          <div className="flex gap-8 text-sm">
            <button onClick={() => handleAction('Privacy Policy')} className="text-slate-500 hover:text-white transition-colors">Privacy</button>
            <button onClick={() => handleAction('Terms of Service')} className="text-slate-500 hover:text-white transition-colors">Terms</button>
            <button onClick={() => handleAction('Contact Support')} className="text-slate-500 hover:text-white transition-colors">System Status</button>
          </div>
        </div>
      </footer>
    </div>
  );
}