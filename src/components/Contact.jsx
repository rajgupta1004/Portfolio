import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Copy, Check, Sparkles, Database, Clock } from 'lucide-react';
import { FaGoogleDrive, FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full Stack & Web Development',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [messageHistory, setMessageHistory] = useState([]);
  const [showDbLog, setShowDbLog] = useState(false);

  // Load sent messages from localStorage (client database)
  useEffect(() => {
    try {
      const saved = localStorage.getItem('raj_portfolio_messages');
      if (saved) {
        setMessageHistory(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const serviceOptions = [
    'Full Stack & Web Development',
    'Photoshop & Graphic Design',
    'Video Editing & Motion',
    'General Inquiry / Collaboration'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Send real email directly to rajgupta1004hzb@gmail.com using FormSubmit AJAX API
      const response = await fetch(`https://formsubmit.co/ajax/${portfolioData.personal.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          _subject: `Portfolio Message from ${formData.name} [${formData.service}]`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const result = await response.json();

      if (response.ok || result.success === 'true' || result.success === true) {
        // Save to local database
        const newEntry = {
          id: Date.now(),
          timestamp: new Date().toLocaleString(),
          ...formData
        };
        const updatedHistory = [newEntry, ...messageHistory];
        setMessageHistory(updatedHistory);
        try {
          localStorage.setItem('raj_portfolio_messages', JSON.stringify(updatedHistory));
        } catch {
          // ignore
        }

        setStatus('success');
        setFormData({
          name: '',
          email: '',
          service: 'Full Stack & Web Development',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      // Even if network blocks FormSubmit, backup save locally and provide fallback
      setStatus('error');
      setErrorMessage('Could not send via automated gateway. You can also send directly via email application.');
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary-400" size={22} />,
      label: "Direct Email",
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`,
      action: handleCopyEmail,
      actionIcon: copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} className="text-gray-400 hover:text-white" />
    },
    {
      icon: <Phone className="text-accent-400" size={22} />,
      label: "Phone / WhatsApp",
      value: portfolioData.personal.phone,
      href: `tel:${portfolioData.personal.phone}`,
      badge: "+91"
    },
    {
      icon: <MapPin className="text-cyan-400" size={22} />,
      label: "Location",
      value: portfolioData.personal.location,
      href: null
    }
  ];

  return (
    <section id="contact" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-500/10 border border-primary-500/30 text-primary-300 mb-4 backdrop-blur-md">
            <Sparkles size={14} />
            Let's Collaborate
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Get in <span className="text-gradient">Touch With Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 via-accent-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base">
            Have a project in mind, need graphic design/video editing, or want to discuss opportunities? Send a message directly to my inbox.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards & Quick Connect */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-8 space-y-6 border border-white/[0.08]">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2.5">
                <span>Reach Out Directly</span>
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I am actively open to frontend/full stack development roles, graphic design projects, and video editing collaborations.
              </p>
              
              <div className="space-y-4 pt-2">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between glass p-4 rounded-2xl hover:border-primary-500/40 hover:bg-dark-800/80 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="p-3 bg-dark-950/80 border border-white/[0.05] rounded-xl group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-gray-400 font-medium">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            className="text-white hover:text-primary-400 font-semibold text-sm sm:text-base transition-colors truncate block"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white font-semibold text-sm sm:text-base truncate">{info.value}</p>
                        )}
                      </div>
                    </div>

                    {info.action && (
                      <button 
                        onClick={info.action}
                        type="button"
                        title="Copy to clipboard"
                        className="p-2 bg-dark-950/60 hover:bg-dark-700/60 rounded-xl border border-white/[0.05] transition-colors shrink-0 ml-2"
                      >
                        {info.actionIcon}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Quick Drive Portfolios Access Card */}
              <div className="pt-4 border-t border-gray-800/80">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                  Direct Drive Portfolios & Links
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={portfolioData.personal.photoshopDrive}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-3 bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 rounded-xl text-pink-300 text-xs font-semibold transition-all hover:scale-[1.02]"
                  >
                    <FaGoogleDrive size={15} />
                    <span className="truncate">Photoshop Drive</span>
                  </a>
                  <a
                    href={portfolioData.personal.videoEditingDrive}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-3 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-xl text-amber-300 text-xs font-semibold transition-all hover:scale-[1.02]"
                  >
                    <FaGoogleDrive size={15} />
                    <span className="truncate">Video Drive</span>
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-2">
                <a 
                  href={portfolioData.personal.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-dark-950/80 hover:bg-dark-700/80 border border-white/[0.08] hover:border-gray-500 rounded-xl text-xs font-semibold text-gray-300 hover:text-white transition-all"
                >
                  <FaGithub size={16} />
                  <span>GitHub</span>
                </a>
                <a 
                  href={portfolioData.personal.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-dark-950/80 hover:bg-dark-700/80 border border-white/[0.08] hover:border-primary-500 rounded-xl text-xs font-semibold text-gray-300 hover:text-white transition-all"
                >
                  <FaLinkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Local Database / Message Logs Viewer Toggle */}
            {messageHistory.length > 0 && (
              <div className="glass-card rounded-2xl p-4 border border-white/[0.08]">
                <button
                  type="button"
                  onClick={() => setShowDbLog(!showDbLog)}
                  className="w-full flex items-center justify-between text-xs font-semibold text-gray-300 hover:text-primary-400 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Database size={15} className="text-accent-400" />
                    <span>Sent Messages Database ({messageHistory.length})</span>
                  </span>
                  <span className="text-primary-400 underline">{showDbLog ? 'Hide' : 'View'}</span>
                </button>

                {showDbLog && (
                  <div className="mt-3 space-y-2 max-h-48 overflow-y-auto pr-1">
                    {messageHistory.map((item) => (
                      <div key={item.id} className="p-2.5 bg-dark-950/80 rounded-xl border border-white/[0.05] text-xs">
                        <div className="flex items-center justify-between text-gray-400 mb-1">
                          <span className="font-semibold text-white truncate max-w-[150px]">{item.name}</span>
                          <span className="flex items-center gap-1 text-[10px] text-gray-500">
                            <Clock size={10} />
                            {item.timestamp}
                          </span>
                        </div>
                        <p className="text-primary-300 text-[11px] mb-1">{item.service}</p>
                        <p className="text-gray-400 text-[11px] line-clamp-2">{item.message}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          
          {/* Right Column: Interactive Email Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden border border-white/[0.08]">
              {/* Subtle ambient glows */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-primary-600/15 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-accent-600/15 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Send Message Directly</h3>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1">Delivers immediately to {portfolioData.personal.email}</p>
                  </div>
                  <div className="p-3 bg-primary-500/10 border border-primary-500/20 rounded-2xl hidden sm:flex">
                    <Send className="text-primary-400" size={20} />
                  </div>
                </div>
                
                {status === 'success' ? (
                  <div className="min-h-[380px] flex flex-col items-center justify-center text-center space-y-5 animate-in fade-in zoom-in duration-500 p-6">
                    <div className="w-20 h-20 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20">
                      <CheckCircle2 className="text-emerald-400" size={40} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold text-white">Message Delivered to Inbox!</h4>
                      <p className="text-gray-300 text-sm max-w-md">
                        Thank you for reaching out. Your message has been routed to Raj's email address. You will receive a response shortly.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="px-6 py-2.5 bg-dark-800 hover:bg-dark-700 border border-gray-700 rounded-xl text-sm font-semibold text-white transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Topic / Service Chips */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                        What are you interested in?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {serviceOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setFormData({ ...formData, service: opt })}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                              formData.service === opt
                                ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-md shadow-primary-500/25 border border-primary-400/40'
                                : 'bg-dark-950/70 text-gray-400 hover:text-white border border-white/[0.06] hover:bg-dark-800/80'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Email Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-semibold text-gray-300">
                          Your Full Name <span className="text-primary-400">*</span>
                        </label>
                        <input 
                          type="text" 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          disabled={status === 'loading'}
                          className="w-full bg-dark-950/80 border border-white/[0.08] focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-all placeholder:text-gray-600 disabled:opacity-50"
                          placeholder="e.g. Alex Johnson"
                        />
                      </div>
                      
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-semibold text-gray-300">
                          Your Email Address <span className="text-primary-400">*</span>
                        </label>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={status === 'loading'}
                          className="w-full bg-dark-950/80 border border-white/[0.08] focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-all placeholder:text-gray-600 disabled:opacity-50"
                          placeholder="alex@company.com"
                        />
                      </div>
                    </div>
                    
                    {/* Message Textarea */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-semibold text-gray-300">
                        Your Message <span className="text-primary-400">*</span>
                      </label>
                      <textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        disabled={status === 'loading'}
                        className="w-full bg-dark-950/80 border border-white/[0.08] focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-all placeholder:text-gray-600 resize-none disabled:opacity-50"
                        placeholder="Hi Raj, I'd like to discuss a project / role regarding..."
                      ></textarea>
                    </div>

                    {/* Error Banner if any */}
                    {status === 'error' && (
                      <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-start gap-3">
                        <AlertCircle className="text-red-400 shrink-0 mt-0.5" size={18} />
                        <div className="text-xs space-y-1">
                          <p className="text-red-300 font-semibold">{errorMessage}</p>
                          <a 
                            href={`mailto:${portfolioData.personal.email}?subject=Inquiry regarding ${formData.service}&body=${encodeURIComponent(formData.message)}`}
                            className="inline-block text-primary-400 underline font-semibold hover:text-primary-300"
                          >
                            Click here to send directly via your Mail client
                          </a>
                        </div>
                      </div>
                    )}
                    
                    {/* Submit Button */}
                    <button 
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-4 bg-gradient-to-r from-primary-600 via-indigo-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 disabled:opacity-60 rounded-xl text-white font-semibold flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 active:scale-[0.99] cursor-pointer"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          <span>Routing message to Raj's email...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Send Message to Raj</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;

