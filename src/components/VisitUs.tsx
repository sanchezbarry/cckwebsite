'use client'

import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export const VisitUs: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    // Initialize EmailJS with your public key
    // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
    emailjs.init('NI8BrDux15_Rn2F2R');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setFeedback({ type: 'error', message: 'Please fill in all fields' });
      return;
    }

    setLoading(true);
    setFeedback(null);

    try {
      await emailjs.send(
        'service_6hzu3da', // Replace with your EmailJS service ID
        'template_27xh3iy', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'web@cck.org.sg', // Replace with recipient email
        }
      );

      setFeedback({ type: 'success', message: 'Message sent successfully! We\'ll get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
      if (formRef.current) formRef.current.reset();
    } catch (error) {
      console.error('Email send error:', error);
      setFeedback({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="w-full bg-slate-100 dark:bg-[#0d141c] border-t border-slate-200 dark:border-slate-800">
      <div className="flex flex-col lg:flex-row w-full min-h-150">
        {/* Content Side */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center">
          <span className="text-primary font-bold font-display uppercase tracking-widest text-xs mb-3">Visit Us</span>
          <h2 className="text-4xl font-bold font-display text-slate-900 dark:text-white mb-6">Join us this Sunday</h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg mb-10 leading-relaxed">
            We can't wait to meet you! Whether you're new to church or looking for a community to call home, you're welcome here.
          </p>

          <div className="mb-10 p-6 bg-white dark:bg-[#16202a] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <span className="material-symbols-outlined text-primary mt-1 bg-blue-50 dark:bg-blue-900/20 p-2 rounded-full">schedule</span>
              <div>
                <h4 className="font-bold font-display text-slate-900 dark:text-white text-lg">Service Times</h4>
                <p className="text-slate-500 dark:text-slate-400">Sundays at 10:30 AM</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary mt-1 bg-blue-50 dark:bg-blue-900/20 p-2 rounded-full">location_on</span>
              <div>
                <h4 className="font-bold font-display text-slate-900 dark:text-white text-lg">Location</h4>
                <p className="text-slate-500 dark:text-slate-400">136 Sophia Rd, in St Margaret’s School (Primary) School, Singapore 228197</p>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold font-display uppercase text-slate-500 dark:text-slate-400 mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#101922] focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold font-display uppercase text-slate-500 dark:text-slate-400 mb-2">Email</label>
                <input 
                  type="email"
                  name="email" 
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#101922] focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all dark:text-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold font-display uppercase text-slate-500 dark:text-slate-400 mb-2">Message</label>
              <textarea 
                rows={3} 
                name="message"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#101922] focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all resize-none dark:text-white"
              ></textarea>
            </div>
            {feedback && (
              <div className={`p-4 rounded-lg ${feedback.type === 'success' ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400' : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'}`}>
                {feedback.message}
              </div>
            )}
            <button 
              type="submit" 
              disabled={loading}
              className="bg-primary hover:bg-blue-600 disabled:bg-slate-400 text-white font-bold font-display py-4 px-8 rounded-lg transition-all w-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Map Side */}
        <div className="w-full lg:w-1/2 bg-slate-200 dark:bg-slate-800 min-h-100 lg:min-h-auto relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.78584743003!2d103.8458939!3d1.3034962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19be6d781279%3A0xc99f701d06bbdbca!2sChapel%20of%20Christ%20the%20King!5e0!3m2!1sen!2ssg!4v1769159232179!5m2!1sen!2ssg" 
            width="100%" 
            height="100%" 
            style={{ border: 0, position: 'absolute', inset: 0, filter: 'grayscale(0%) contrast(1.1)' }} 
            allowFullScreen 
            loading="lazy"
            title="Church Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};