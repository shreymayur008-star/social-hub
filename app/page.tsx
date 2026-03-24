"use client";
import React, { useState } from 'react';
import { 
  Users, 
  BarChart3, 
  MessageCircle, 
  Share2, 
  CheckCircle2, 
  Globe, 
  Menu, 
  X,
  ArrowRight
} from 'lucide-react';

export default function SocialHubLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 p-1.5 rounded-lg">
                <Share2 className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight">SocialHub</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-slate-600 hover:text-indigo-600 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <button className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition-all">
                Get Started
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Manage your social <br />influence in one place.
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            The all-in-one platform for creators and brands to schedule content, 
            analyze deep metrics, and engage with communities across every platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg hover:shadow-indigo-200 transition-all flex items-center justify-center gap-2">
              Start Free Trial <ArrowRight size={20} />
            </button>
            <button className="border border-slate-200 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-50 transition-all">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything you need to grow</h2>
            <p className="text-slate-600">Powerful tools designed for the modern social landscape.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <BarChart3 className="text-indigo-600" />, title: "Deep Analytics", desc: "Understand your audience with AI-driven insights and sentiment analysis." },
              { icon: <Users className="text-indigo-600" />, title: "Community CRM", desc: "Keep track of your most loyal followers and top contributors effortlessly." },
              { icon: <Globe className="text-indigo-600" />, title: "Multi-Platform", desc: "One dashboard for Instagram, TikTok, X, LinkedIn, and YouTube." }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-200 transition-colors">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Toggle Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Simple, transparent pricing</h2>
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={billingCycle === 'monthly' ? 'font-bold' : 'text-slate-500'}>Monthly</span>
            <button 
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="w-14 h-8 bg-slate-200 rounded-full relative p-1 transition-colors"
            >
              <div className={`w-6 h-6 bg-indigo-600 rounded-full transition-transform ${billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
            <span className={billingCycle === 'yearly' ? 'font-bold' : 'text-slate-500'}>
              Yearly <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full ml-1">Save 20%</span>
            </span>
          </div>

          <div className="max-w-sm mx-auto bg-white border-2 border-indigo-600 p-8 rounded-3xl shadow-xl relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-2">Pro Plan</h3>
            <div className="text-4xl font-extrabold mb-6">
              ${billingCycle === 'monthly' ? '29' : '23'}<span className="text-lg text-slate-400 font-normal">/mo</span>
            </div>
            <ul className="text-left space-y-4 mb-8">
              {['Unlimited Posts', 'Advanced AI Insights', 'Team Collaboration', '24/7 Priority Support'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 w-5 h-5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
              Choose Pro
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-slate-400 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Share2 className="text-indigo-400" />
            <span className="text-white font-bold text-xl">SocialHub</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="mailto:support@socialhub.com" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p>© 2024 SocialHub Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}