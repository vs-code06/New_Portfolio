import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheck } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [focused, setFocused] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            // In a real app, you'd send formState to your backend here
            console.log('Form submitted:', formState);
            setStatus('success');
            setFormState({ name: '', email: '', message: '' }); // Clear form
            setTimeout(() => setStatus('idle'), 3000); // Reset status after a delay
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000); // Reset status after a delay
        }
    };

    return (
        <section id="contact" className="py-32 relative">
            <div className="max-w-4xl mx-auto px-6">
                <SectionHeader number="05" title="Get In Touch" align="center" />

                <p className="text-muted text-lg mb-12 text-center">
                    Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                </p>

                <motion.form
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="relative">
                            <input
                                type="text"
                                required
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                onFocus={() => setFocused('name')}
                                onBlur={() => setFocused(null)}
                                className="w-full bg-surface border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors peer"
                                placeholder=" "
                            />
                            <label className={`absolute left-4 transition-all duration-200 pointer-events-none text-muted
                ${focused === 'name' || formState.name ? '-top-2.5 text-xs bg-surface px-1 text-primary' : 'top-3.5'}
                peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-surface peer-focus:px-1
              `}>
                                Name
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                required
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                className="w-full bg-surface border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors peer"
                                placeholder=" "
                            />
                            <label className="absolute left-4 top-3.5 text-muted transition-all duration-200 pointer-events-none peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-surface peer-focus:px-1 peer-valid:-top-2.5 peer-valid:text-xs peer-valid:bg-surface peer-valid:px-1">
                                Email
                            </label>
                        </div>
                    </div>

                    <div className="relative">
                        <textarea
                            rows="5"
                            required
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            className="w-full bg-surface border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors peer"
                            placeholder=" "
                        />
                        <label className="absolute left-4 top-3.5 text-muted transition-all duration-200 pointer-events-none peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-surface peer-focus:px-1 peer-valid:-top-2.5 peer-valid:text-xs peer-valid:bg-surface peer-valid:px-1">
                            Message
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full md:w-auto px-8 py-3 rounded-full bg-primary text-bg font-bold hover:bg-accent transition-all flex items-center justify-center gap-2 mx-auto interactive disabled:opacity-50 disabled:cursor-not-allowed"
                        data-cursor="hover"
                    >
                        {status === 'success' ? (
                            <>Sent <FiCheck /></>
                        ) : status === 'submitting' ? (
                            <>Sending...</>
                        ) : (
                            <>Send Message <FiSend /></>
                        )}
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
