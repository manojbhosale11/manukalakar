import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
    { to: '/stories', label: 'Stories' },
    { to: '/weddings', label: 'Weddings' },
    { to: '/films', label: 'Films' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    const lightNavbar = !isHome || scrolled || open;

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
            style={
                lightNavbar
                    ? {
                          background: 'rgba(247,244,239,0.82)',
                          backdropFilter: 'blur(14px)',
                          WebkitBackdropFilter: 'blur(14px)',
                          borderBottom: '1px solid #E6DED3',
                      }
                    : {}
            }
        >
            <div className="max-w-screen-2xl mx-auto px-7 md:px-12 py-3 md:py-5 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        src={
                            lightNavbar
                                ? '/images/logo/logo-black.svg'
                                : '/images/logo/logo-white.svg'
                        }
                        alt="Manukalakar"
                        className="h-7 md:h-10 w-auto transition-all duration-300"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `relative uppercase tracking-[0.22em] text-[12px] font-medium transition-all duration-300 pb-2 ${
                                    lightNavbar
                                        ? isActive
                                            ? 'text-[#8B2332]'
                                            : 'text-[#3B3530] hover:text-[#8B2332]'
                                        : isActive
                                        ? 'text-white'
                                        : 'text-white/80 hover:text-white'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {link.label}

                                    <span
                                        className={`absolute left-0 -bottom-[2px] h-[1.5px] bg-[#8B2332] transition-all duration-300 ${
                                            isActive
                                                ? 'w-full'
                                                : 'w-0 group-hover:w-full'
                                        }`}
                                    />
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle Menu"
                    className={`md:hidden transition-colors duration-300 ${
                        lightNavbar
                            ? 'text-[#1B1B1B]'
                            : 'text-white'
                    }`}
                >
                    {open ? (
                        <X size={26} strokeWidth={1.7} />
                    ) : (
                        <Menu size={26} strokeWidth={1.7} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div
                    className="
                        md:hidden
                        bg-[rgba(247,244,239,0.96)]
                        backdrop-blur-xl
                        border-t
                        border-[#E6DED3]
                        px-7
                        py-8
                        flex
                        flex-col
                        gap-6
                    "
                >
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `
                                uppercase
                                tracking-[0.22em]
                                text-sm
                                transition-colors
                                duration-300
                                ${
                                    isActive
                                        ? 'text-[#8C1D2D]'
                                        : 'text-[#3B3530] hover:text-[#8C1D2D]'
                                }
                            `
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Navbar;