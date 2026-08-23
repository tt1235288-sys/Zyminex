'use client';

import { useState, useRef, useEffect } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import { CONSTANTS } from '@/lib/seo';
import { 
  Mail, 
  User, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Phone,
  Clock,
  ArrowRight,
  Check,
  X,
  Sparkles,
  Award,
  Headphones,
  Zap,
  ShieldCheck,
  Users,
  LifeBuoy
} from 'lucide-react';
import Link from 'next/link';

// Toast/Notification Component
const Toast = ({ message, type, onClose }: { message: string; type: 'success' | 'error'; onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-24 right-4 z-50 max-w-md w-full animate-slide-in">
      <div className={`rounded-2xl p-6 shadow-2xl border-4 backdrop-blur-xl ${
        type === 'success' 
          ? 'bg-[#fff1d0] border-green-600' 
          : 'bg-[#fff1d0] border-[#3CAFFF]'
      }`}>
        <div className="flex items-start gap-4">
          <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
            type === 'success' ? 'bg-green-600/20' : 'bg-[#3CAFFF]/20'
          }`}>
            {type === 'success' ? (
              <Check className="w-5 h-5 text-green-600" />
            ) : (
              <AlertCircle className="w-5 h-5 text-[#3CAFFF]" />
            )}
          </div>
          <div className="flex-1">
            <p className="text-[#003554] font-black uppercase text-sm">{message}</p>
          </div>
          <button 
            onClick={onClose}
            className="flex-shrink-0 text-[#003554]/40 hover:text-[#3CAFFF] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Success Popup Modal
const SuccessPopup = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-3xl p-8 md:p-12 max-w-md w-full mx-4 shadow-2xl text-center animate-scale-up">
        <div className="w-24 h-24 rounded-full bg-green-600/20 flex items-center justify-center mx-auto mb-6">
          <div className="w-16 h-16 rounded-full bg-green-600/30 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-black text-[#003554] mb-3 uppercase tracking-tight">
          Message Sent!
        </h3>
        
        <p className="text-[#3CAFFF] font-bold text-sm leading-relaxed mb-6">
          Thank you for reaching out to Zyminex. Our support team will get back to you within 24 hours.
        </p>
        
        <div className="bg-[#003554] rounded-2xl border border-white/5 p-5 mb-6 text-left">
          <p className="text-[#fff1d0]/40 text-xs uppercase tracking-widest font-black mb-3">What happens next?</p>
          <ul className="space-y-2 text-sm text-[#fff1d0]/80 font-bold uppercase tracking-wide">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#3CAFFF] shrink-0" />
              We'll review your inquiry
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#3CAFFF] shrink-0" />
              Confirmation processing
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#3CAFFF] shrink-0" />
              Response within 24 hours
            </li>
          </ul>
        </div>
        
        <button
          onClick={onClose}
          className="w-full py-4 rounded-full bg-[#3CAFFF] text-[#fff1d0] font-black text-sm uppercase tracking-widest hover:bg-[#3CAFFF]/80 transition-transform hover:scale-105 shadow-md"
        >
          Got It
        </button>
      </div>
    </div>
  );
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    loading || setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setShowSuccessPopup(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setToast({ message: 'Message sent successfully!', type: 'success' });
    } catch (error) {
      setToast({ message: 'Failed to send message. Please try again.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#003554] pt-32 pb-16">
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}

      {showSuccessPopup && (
        <SuccessPopup onClose={() => setShowSuccessPopup(false)} />
      )}

      {/* Hero Section Container */}
      <section className="relative px-6 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(60,175,255,0.15),_transparent_50%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center justify-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-[#3CAFFF] px-4 py-2 rounded-full mb-6 shadow-md">
              <Mail className="w-4 h-4 text-[#fff1d0]" />
              <span className="text-[#fff1d0] font-black text-xs uppercase tracking-widest">Get in Touch</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#fff1d0] tracking-tighter uppercase mb-6 leading-none">
              Contact <span className="text-[#3CAFFF]">Zyminex</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#fff1d0]/80 font-bold max-w-2xl mx-auto leading-relaxed">
              Have questions about our IPTV Service options? Need help with setup? Our support team is here to help you 24/7. Explore leading options across top IPTV Providers at zyminex.stream.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form & Info Section Grid Area */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Form Container Area - Modified to border-4 */}
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-3xl p-6 md:p-8 shadow-2xl">
                <h2 className="text-2xl md:text-3xl font-black text-[#003554] uppercase tracking-tight mb-2">Send us a Message</h2>
                <p className="text-[#3CAFFF] font-bold text-sm mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-black text-[#003554] uppercase tracking-wide mb-2">
                      Full Name <span className="text-[#3CAFFF]">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#003554]/40" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-black/[0.03] border-2 border-[#003554]/10 rounded-xl text-[#003554] font-bold placeholder-[#003554]/40 focus:border-[#3CAFFF] transition-colors outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-black text-[#003554] uppercase tracking-wide mb-2">
                      Email Address <span className="text-[#3CAFFF]">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#003554]/40" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-black/[0.03] border-2 border-[#003554]/10 rounded-xl text-[#003554] font-bold placeholder-[#003554]/40 focus:border-[#3CAFFF] transition-colors outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-black text-[#003554] uppercase tracking-wide mb-2">
                      Subject <span className="text-[#3CAFFF]">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#003554]/40" />
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-10 py-3.5 bg-black/[0.03] border-2 border-[#003554]/10 rounded-xl text-[#003554] font-bold focus:border-[#3CAFFF] transition-colors outline-none appearance-none"
                      >
                        <option value="" className="bg-[#fff1d0]">Select a subject...</option>
                        <option value="general" className="bg-[#fff1d0]">General Inquiry</option>
                        <option value="setup" className="bg-[#fff1d0]">Setup Assistance</option>
                        <option value="pricing" className="bg-[#fff1d0]">Pricing Questions</option>
                        <option value="technical" className="bg-[#fff1d0]">Technical Support</option>
                        <option value="billing" className="bg-[#fff1d0]">Billing & Payments</option>
                        <option value="feedback" className="bg-[#fff1d0]">Feedback & Suggestions</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#003554]/40">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 24"><path d="M7 10l5 5 5-5z"/></svg>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-black text-[#003554] uppercase tracking-wide mb-2">
                      Message <span className="text-[#3CAFFF]">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3.5 bg-black/[0.03] border-2 border-[#003554]/10 rounded-xl text-[#003554] font-bold placeholder-[#003554]/40 focus:border-[#3CAFFF] transition-colors outline-none resize-none"
                        placeholder="Write your message here..."
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 rounded-xl bg-gradient-to-r from-[#3CAFFF] to-[#3CAFFF]/80 text-[#fff1d0] font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${
                      loading 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:scale-[1.01] hover:shadow-xl cursor-pointer'
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-[#fff1d0]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
          
          {/* Contact Info Sidebar - Modified to border-4 */}
          <div className="lg:col-span-1">
            <FadeIn>
              <div className="bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-3xl p-6 md:p-8 shadow-2xl space-y-6">
                <h3 className="text-xl font-black text-[#003554] uppercase tracking-tight mb-6">Contact Information</h3>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#3CAFFF]/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#3CAFFF]" />
                  </div>
                  <div>
                    <p className="text-[#003554]/40 text-xs uppercase tracking-widest font-black">Email</p>
                    <a href="mailto:support@zyminex.stream" className="text-[#003554] hover:text-[#3CAFFF] transition-colors text-sm font-bold">
                      support@zyminex.stream
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#3CAFFF]/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#3CAFFF]" />
                  </div>
                  <div>
                    <p className="text-[#003554]/40 text-xs uppercase tracking-widest font-black">Phone</p>
                    <a href="tel:+447549589503" className="text-[#003554] hover:text-[#3CAFFF] transition-colors text-sm font-bold">
                      +44 7549 589503
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#3CAFFF]/10 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-[#3CAFFF]" />
                  </div>
                  <div>
                    <p className="text-[#003554]/40 text-xs uppercase tracking-widest font-black">Live Chat</p>
                    <p className="text-[#003554] text-sm font-bold">Available 24/7</p>
                    <button className="text-[#3CAFFF] text-xs font-black uppercase tracking-widest hover:text-[#3CAFFF]/80 transition-colors mt-1">
                      Start Chat
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#3CAFFF]/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#3CAFFF]" />
                  </div>
                  <div>
                    <p className="text-[#003554]/40 text-xs uppercase tracking-widest font-black">Response Time</p>
                    <p className="text-[#003554] text-sm font-bold">Within 24 hours</p>
                  </div>
                </div>
                
                {/* Embedded Grid Badges Area */}
                <div className="pt-6 border-t-2 border-black/5">
                  <p className="text-[#003554]/40 text-xs uppercase tracking-widest font-black mb-4">Trusted Service</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-black/5 rounded-xl p-3 text-center border border-black/5">
                      <Headphones className="w-5 h-5 text-[#3CAFFF] mx-auto mb-1" />
                      <p className="text-[#003554] text-[9px] uppercase font-black tracking-wider">24/7 Support</p>
                    </div>
                    <div className="bg-black/5 rounded-xl p-3 text-center border border-black/5">
                      <ShieldCheck className="w-5 h-5 text-[#3CAFFF] mx-auto mb-1" />
                      <p className="text-[#003554] text-[9px] uppercase font-black tracking-wider">Secure</p>
                    </div>
                    <div className="bg-black/5 rounded-xl p-3 text-center border border-black/5">
                      <Zap className="w-5 h-5 text-[#3CAFFF] mx-auto mb-1" />
                      <p className="text-[#003554] text-[9px] uppercase font-black tracking-wider">Fast Route</p>
                    </div>
                    <div className="bg-black/5 rounded-xl p-3 text-center border border-black/5">
                      <Users className="w-5 h-5 text-[#3CAFFF] mx-auto mb-1" />
                      <p className="text-[#003554] text-[9px] uppercase font-black tracking-wider">20K+ Users</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust Badges Banner Area - Modified to border-4 */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 w-full bg-[#003554]">
        <FadeIn>
          <div className="bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-3xl p-8 md:p-10 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#3CAFFF]/10 flex items-center justify-center mx-auto mb-3">
                  <LifeBuoy className="w-6 h-6 text-[#3CAFFF]" />
                </div>
                <h4 className="text-[#003554] font-black text-sm uppercase tracking-wide">24/7 Support</h4>
                <p className="text-[#003554]/60 text-xs font-bold mt-0.5">Always on dispatch</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#3CAFFF]/10 flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-[#3CAFFF]" />
                </div>
                <h4 className="text-[#003554] font-black text-sm uppercase tracking-wide">Fast Response</h4>
                <p className="text-[#003554]/60 text-xs font-bold mt-0.5">Within 24 hours</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#3CAFFF]/10 flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="w-6 h-6 text-[#3CAFFF]" />
                </div>
                <h4 className="text-[#003554] font-black text-sm uppercase tracking-wide">Secure</h4>
                <p className="text-[#003554]/60 text-xs font-bold mt-0.5">Encrypted layer</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#3CAFFF]/10 flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-[#3CAFFF]" />
                </div>
                <h4 className="text-[#003554] font-black text-sm uppercase tracking-wide">Trusted</h4>
                <p className="text-[#003554]/60 text-xs font-bold mt-0.5">#1 Rated IPTV Provider</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* FAQ Accordion Section - Modified to border-4 */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 bg-[#003554] w-full">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#fff1d0] mb-4 uppercase tracking-tighter">
            Frequently Asked <span className="text-[#3CAFFF]">Questions</span>
          </h2>
          <p className="text-[#fdc500] font-bold text-lg">Quick answers to common network routing inquiries about zyminex tv configurations</p>
        </FadeIn>
        
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              q: "How do I contact support?",
              a: "You can reach us via email at support@zyminex.stream, through our live chat system, or by submitting the contact form above."
            },
            {
              q: "How long does it take to get a response?",
              a: "Our support team typically responds within 24 hours. For urgent pipeline issues, we recommend using our live chat for immediate assistance."
            },
            {
              q: "Do you provide technical support?",
              a: "Yes, we provide full layout technical support for all our core network servers. Our team can help with setup configuration, learning how to connect HDMI to IPTV, and streaming optimization."
            },
            {
              q: "Is there a helpline I can contact?",
              a: "Yes, you can open secure messaging routes directly into our active WhatsApp support pipelines for real-time diagnostic parameters routing help regarding what is HDMI IPTV encoder setup."
            }
          ].map((faq, idx) => (
            <FadeInItem key={idx} className="bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-2xl p-6 shadow-xl transition-all">
              <h4 className="text-[#003554] font-black text-base uppercase tracking-tight mb-2">{faq.q}</h4>
              <p className="text-[#003554]/70 text-sm font-bold leading-relaxed">{faq.a}</p>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      <style jsx global>{`
        @keyframes slide-in {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-up {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-slide-in { animation: slide-in 0.4s ease-out; }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        .animate-scale-up { animation: scale-up 0.4s ease-out; }
      `}</style>
    </div>
  );
}