import { useState } from 'react';
import axios from 'axios';
import { Loader2, ArrowRight } from 'lucide-react';

import { brand } from '../data/content';

const API =
    `${import.meta.env.VITE_BACKEND_URL || process.env.REACT_APP_BACKEND_URL || ''}/api`;

const initialForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '',
};

// 1. ADDED MISSING FIELD COMPONENT
const Field = ({ label, name, type = 'text', value, onChange, autoComplete }) => (
    <div className="py-8 border-b border-[#E6DED3]">
        <label
            htmlFor={name}
            className="uppercase tracking-[0.25em] text-xs text-[#8B8177]"
        >
            {label}
        </label>
        <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            autoComplete={autoComplete}
            className="mt-6 w-full bg-transparent border-0 outline-none font-serif text-2xl leading-relaxed placeholder:text-[#B9B1A8]"
        />
    </div>
);

const Contact = () => {
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState('');

    const onChange = (e) =>
        setForm((f) => ({
            ...f,
            [e.target.name]: e.target.value,
        }));

    const validate = () => {
        if (!form.name.trim()) return 'Please share your name.';

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email))
            return 'Please enter a valid email address.';

        if (!form.subject.trim())
            return 'Tell me what this project is about.';

        if (form.message.trim().length < 15)
            return 'Please tell me a little more about your story.';

        return '';
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const validation = validate();

        if (validation) {
            setError(validation);
            setStatus('error');
            return;
        }

        try {
            setStatus('sending');
            await axios.post(`${API}/contact`, form);
            setStatus('success');
            setForm(initialForm);
        } catch (err) {
            setError(
                err?.response?.data?.detail ||
                'Something went wrong. Please email me directly.'
            );
            setStatus('error');
        }
    };

    return (
        <div data-testid="contact-page" className="pt-32 md:pt-40 pb-32">
            {/* HERO */}
            <section className="max-w-screen-2xl mx-auto px-6 md:px-12">
                <p className="uppercase tracking-[0.3em] text-xs text-[#8B2332]">
                    Volume V · Contact
                </p>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] mt-5 max-w-5xl">
                    Every meaningful
                    <br />
                    story begins with
                    <br />
                    a conversation.
                </h1>
                <p className="mt-10 text-lg md:text-xl leading-relaxed text-[#4E4741] max-w-3xl">
                    Weddings. Documentary assignments. Editorial stories. Brand films.
                    <br/>
                    <br/>
                </p>
            </section>

            {/* Main */}
            <section className="max-w-screen-2xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-20">
                {/* LEFT */}
                <div className="md:col-span-4">
                    <div className="sticky top-32">
                        <p className="uppercase tracking-[0.3em] text-xs text-[#8B2332] mb-10">
                            Currently accepting
                        </p>
                        <div className="space-y-2 mb-10">
                            <p>• Documentary Photography</p>
                            <p>• Weddings</p>
                            <p>• Brand Films</p>
                            <p>• Editorial Assignments</p>
                        </div>
                        <div className="border-t border-[#E6DED3] pt-10 space-y-10">
                            <div>
                                <p className="uppercase tracking-[0.2em] text-xs text-[#8B8177] mb-2">
                                    Email
                                </p>
                                <a
                                    href={`mailto:${brand.email}`}
                                    className="text-lg hover:text-[#8B2332] transition-colors"
                                >
                                    {brand.email}
                                </a>
                            </div>
                            <div>
                                <p className="uppercase tracking-[0.2em] text-xs text-[#8B8177] mb-2">
                                    Instagram
                                </p>
                                <a
                                    href={brand.instagramUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-lg hover:text-[#8B2332] transition-colors"
                                >
                                    {brand.instagram}
                                </a>
                            </div>
                            <div>
                                <p className="uppercase tracking-[0.2em] text-xs text-[#8B8177] mb-2">
                                    YouTube
                                </p>
                                <a
                                    href={brand.youtubeUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-lg hover:text-[#8B2332] transition-colors"
                                >
                                    {brand.youtube}
                                </a>
                            </div>
                            <div>
                                <p className="uppercase tracking-[0.2em] text-xs text-[#8B8177] mb-2">
                                    Based in
                                </p>
                                <p className="text-lg">{brand.location}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FORM */}
                <div className="md:col-span-8">
                    {status === 'success' ? (
                        <div className="border border-[#E6DED3] bg-white p-10 md:p-16">
                            <p className="uppercase tracking-[0.3em] text-xs text-[#8B2332]">
                                Message Received
                            </p>
                            <h2 className="font-serif text-4xl md:text-6xl leading-tight mt-6">
                                Thank you.
                                <br />
                                I'll read your story personally.
                            </h2>
                            <p className="mt-8 text-lg leading-relaxed text-[#4E4741] max-w-xl">
                                Every message comes directly to me. You can usually
                                expect a reply within
                                <strong> 24–48 hours.</strong>
                            </p>
                            <button
                                type="button"
                                onClick={() => setStatus('idle')}
                                className="mt-12 inline-flex items-center gap-3 uppercase tracking-[0.22em] text-sm text-[#8B2332] hover:gap-5 transition-all"
                            >
                                Write another message
                                <ArrowRight size={15} />
                            </button>
                        </div>
                    ) : (
                        <form
                            onSubmit={onSubmit}
                            noValidate
                            className="border-t border-[#E6DED3]"
                        >
                            {/* Honeypot */}
                            <input
                                type="text"
                                name="website"
                                value={form.website}
                                onChange={onChange}
                                autoComplete="off"
                                tabIndex={-1}
                                aria-hidden="true"
                                style={{
                                    position: 'absolute',
                                    left: '-9999px',
                                    opacity: 0,
                                }}
                            />

                            <Field
                                label="Your Name"
                                name="name"
                                value={form.name}
                                onChange={onChange}
                                autoComplete="name"
                            />

                            <Field
                                label="Email Address"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={onChange}
                                autoComplete="email"
                            />

                            <Field
                                label="Project Type"
                                name="subject"
                                value={form.subject}
                                onChange={onChange}
                            />

                            <div className="py-8 border-b border-[#E6DED3]">
                                <label
                                    htmlFor="message"
                                    className="uppercase tracking-[0.25em] text-xs text-[#8B8177]"
                                >
                                    Tell me your story
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={8}
                                    value={form.message}
                                    onChange={onChange}
                                    placeholder="Tell me about your wedding, documentary project, brand film, festival or idea..."
                                    className="mt-6 w-full bg-transparent border-0 outline-none resize-none font-serif text-2xl leading-relaxed placeholder:text-[#B9B1A8]"
                                />
                            </div>

                            {error && (
                                <p className="mt-6 text-[#8B2332]">{error}</p>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="mt-12 inline-flex items-center gap-3 uppercase tracking-[0.22em] text-sm text-[#8B2332] hover:gap-5 transition-all disabled:opacity-40"
                            >
                                {status === 'sending' ? (
                                    <>
                                        <Loader2 size={16} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Begin the Conversation
                                        <ArrowRight size={15} />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                {/* 2. ADDED MISSING CLOSING TAGS BELOW */}
                </div> 
            </section>
        </div>
    );
};

export default Contact;