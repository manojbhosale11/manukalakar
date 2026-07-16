import { Link } from 'react-router-dom';
import { Instagram, Youtube, Mail } from 'lucide-react';
import { brand } from '../data/content';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer
            data-testid="site-footer"
            className="mt-32 border-t hairline bg-background"
        >
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-5">
                    <p className="eyebrow">{brand.tagline}</p>
                    <h3 className="font-serif text-3xl md:text-4xl mt-4 text-foreground leading-tight">
                        Let the next story find its frame.
                    </h3>
                    <Link
                        to="/contact"
                        data-testid="footer-contact-link"
                        className="editorial-link mt-6 inline-block nav-link text-foreground"
                    >
                        Begin a conversation →
                    </Link>
                </div>

                <div className="md:col-span-3">
                    <p className="eyebrow mb-4">Studio</p>
                    <p className="text-secondary text-sm leading-relaxed">
                        {brand.location}
                    </p>
                    <a
                        href={`mailto:${brand.email}`}
                        data-testid="footer-email"
                        className="text-foreground text-sm mt-2 inline-block editorial-link"
                    >
                        {brand.email}
                    </a>
                </div>

                <div className="md:col-span-4">
                    <p className="eyebrow mb-4">Elsewhere</p>
                    <div className="flex flex-col gap-3 text-sm">
                        <a
                            href={brand.instagramUrl}
                            target="_blank"
                            rel="noreferrer"
                            data-testid="footer-instagram"
                            className="flex items-center gap-3 text-secondary hover:text-foreground transition-colors"
                        >
                            <Instagram size={14} />
                            <span>{brand.instagram}</span>
                        </a>
                        <a
                            href={brand.youtubeUrl}
                            target="_blank"
                            rel="noreferrer"
                            data-testid="footer-youtube"
                            className="flex items-center gap-3 text-secondary hover:text-foreground transition-colors"
                        >
                            <Youtube size={14} />
                            <span>{brand.youtube}</span>
                        </a>
                        <a
                            href={`mailto:${brand.email}`}
                            data-testid="footer-email-link"
                            className="flex items-center gap-3 text-secondary hover:text-foreground transition-colors"
                        >
                            <Mail size={14} />
                            <span>{brand.email}</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t hairline">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
                    <p className="text-xs tracking-widest uppercase text-[#7E7A74]">
                        © {year} {brand.name}. All photographs by Manoj Bhosale.
                    </p>
                    <p className="text-xs tracking-widest uppercase text-[#7E7A74]">
                        A {brand.legal} project · Maharashtra, India
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
