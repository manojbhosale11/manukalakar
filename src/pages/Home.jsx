import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { home, brand, stories, weddings, films } from '../data/content';

const Home = () => {
    const featuredStories = stories.slice(0, 4);
    const featuredWeddings = weddings.slice(0, 2);
    const featuredFilm = films[0];

    return (
        <div data-testid="home-page">
            {/* HERO */}
            <section className="relative w-full h-[100svh] min-h-[640px] overflow-hidden">
                    <picture>
                        <source
                            media="(max-width:768px)"
                            srcSet="/images/home/hero-mobile.jpg"
                        />

                        <img
                            src="/images/home/hero1.jpg"
                            alt="Manukalakar — featured cover"
                            fetchPriority="high"
                            className="
                                absolute
                                inset-0
                                w-full
                                h-full
                                object-cover
                                grayscale
                                brightness-[0.65]
                                contrast-110
                            "
                        />
                    </picture>
                <div
                className="
                absolute
                inset-0
                bg-gradient-to-r
                from-black
                via-black/35
                via-30%
                to-transparent
                z-10
                "
                />

                <div className="relative z-10 h-full max-w-screen-2xl mx-auto px-6 md:px-12 flex flex-col justify-end pb-24 md:pb-32">
                    <p className="uppercase tracking-[0.28em] text-[12px] md:text-[13px] font-medium text-[#F5F0E8]">
                        A VISUAL JOURNAL · MAHARASHTRA, INDIA
                    </p>
                    <h1
                        data-testid="hero-title"
                        className="
                            font-serif
                            text-6xl
                            md:text-8xl
                            leading-[0.9]
                            tracking-[-0.04em]
                            font-normal
                        "
                    >
                        <span className="text-[#B71C32]">
                            Human stories.
                        </span>

                        <br />

                        <span className="italic text-[#F5F0E8]">
                            Timeless
                        </span>{" "}

                        <span className="text-[#B71C32]">
                            frames.
                        </span>
                    </h1>
                    <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 reveal reveal-delay-2">
                        <Link
                            to="/stories"
                            data-testid="hero-cta-stories"
                            className="
                                uppercase
                                tracking-[0.22em]
                                text-sm
                                text-[#F7F4EF]
                                border-b
                                border-[#F7F4EF]/50
                                pb-1
                                hover:border-[#F7F4EF]
                                transition-all
                                duration-300
                            "
                        >
                            Enter the stories →
                        </Link>
                        <Link
                            to="/about"
                            data-testid="hero-cta-about"
                            className="
                                uppercase
                                tracking-[0.22em]
                                text-sm
                                text-[#F7F4EF]/75
                                hover:text-[#F7F4EF]
                                transition-all
                                duration-300
                            "
                        >
                            About the work
                        </Link>
                    </div>
                </div>

                <div className="absolute bottom-6 right-6 md:bottom-10 md:right-12 z-10 text-right">
                    <p className="eyebrow text-[#F7F4EF]">Manoj Bhosale.</p>
                </div>
            </section>

            {/* PHILOSOPHY STRIP */}
            <section className="max-w-screen-2xl mx-auto px-6 md:px-12 py-24 md:py-32 border-b hairline">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                    <div className="md:col-span-4">
                        <p className="eyebrow">Philosophy</p>
                    </div>
                    <div className="md:col-span-8">
                        <p
                            data-testid="home-philosophy"
                            className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug max-w-3xl"
                        >
                            I photograph what disappears the moment you stop looking - a mother's hand at a doorway, the smoke from an evening aarti, the last light on a bride's shoulder. These are the moments that shape our lives quietly, and deserve to be remembered with the same honesty in which they were lived.
                        </p>
                        <p className="mt-8 text-secondary text-sm md:text-base leading-relaxed max-w-2xl">
                            Manoj Bhosale &middot; documentary photographer & filmmaker,
                            working across Maharashtra and beyond.
                        </p>
                    </div>
                </div>
            </section>

            {/* FEATURED STORIES — editorial clean grid (not masonry) */}
            <section className="max-w-screen-2xl mx-auto px-6 md:px-12 py-24 md:py-32">
                <div className="flex items-end justify-between mb-12 md:mb-16">
                    <div>
                        <p className="eyebrow">Volume I</p>
                        <h2 className="editorial-heading text-4xl md:text-5xl lg:text-6xl text-foreground mt-3">
                            Stories
                        </h2>
                    </div>
                    <Link
                        to="/stories"
                        data-testid="home-stories-link"
                        className="editorial-link nav-link text-foreground hidden md:inline-block"
                    >
                        All stories →
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
                    {featuredStories.map((s, i) => {
                        const wide = i === 0 || i === 3;
                        const span = wide ? 'md:col-span-7' : 'md:col-span-5';
                        const offset = i === 1 ? 'md:mt-24' : i === 2 ? 'md:mt-12' : '';
                        return (
                            <Link
                                key={s.slug}
                                to={`/stories/${s.slug}`}
                                data-testid={`home-story-${s.slug}`}
                                className={`${span} ${offset} group block`}
                            >
                                <div className="img-hover">
                                    <img
                                        src={s.cover}
                                        alt={s.title}
                                        loading="lazy"
                                        className={`w-full object-cover ${
                                            wide ? 'aspect-[4/3]' : 'aspect-[4/5]'
                                        }`}
                                    />
                                </div>
                                <div className="mt-5 flex items-baseline justify-between">
                                    <h3 className="font-serif text-2xl md:text-3xl text-foreground">
                                        {s.title}
                                    </h3>
                                    <span className="eyebrow text-[#7E7A74]">{s.year}</span>
                                </div>
                                <p className="mt-2 text-secondary text-sm md:text-base leading-relaxed">
                                    {s.subtitle}
                                </p>
                                <p className="eyebrow text-[#7E7A74] mt-3">{s.location}</p>
                            </Link>
                        );
                    })}
                </div>

                <Link
                    to="/stories"
                    data-testid="home-stories-link-mobile"
                    className="md:hidden mt-12 nav-link text-foreground editorial-link inline-block"
                >
                    All stories →
                </Link>
            </section>

            {/* WEDDINGS STRIP */}
            <section className="#F2EEE8 bg-surface border-y hairline">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-24 md:py-32">
                    <div className="flex items-end justify-between mb-12 md:mb-16">
                        <div>
                            <p className="eyebrow">Volume II</p>
                            <h2 className="editorial-heading text-4xl md:text-5xl lg:text-6xl text-foreground mt-3">
                                Weddings
                            </h2>
                        </div>
                        <Link
                            to="/weddings"
                            data-testid="home-weddings-link"
                            className="editorial-link nav-link text-foreground hidden md:inline-block"
                        >
                            All weddings →
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                        {featuredWeddings.map((w) => (
                            <Link
                                key={w.slug}
                                to={`/weddings/${w.slug}`}
                                data-testid={`home-wedding-${w.slug}`}
                                className="group block"
                            >
                                <div className="img-hover">
                                    <img
                                        src={w.cover}
                                        alt={w.couple}
                                        loading="lazy"
                                        className="w-full aspect-[4/5] object-cover"
                                    />
                                </div>
                                <h3 className="font-serif text-2xl md:text-3xl text-foreground mt-5">
                                    {w.couple}
                                </h3>
                                <p className="mt-1 text-secondary text-sm">
                                    {w.location} · {w.date}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FILMS STRIP */}
            <section className="max-w-screen-2xl mx-auto px-6 md:px-12 py-24 md:py-32">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-end">
                    <div className="md:col-span-5">
                        <p className="eyebrow">Volume III</p>
                        <h2 className="editorial-heading text-4xl md:text-5xl lg:text-6xl text-foreground mt-3">
                            Films
                        </h2>
                        <p className="mt-6 text-secondary text-base md:text-lg leading-relaxed max-w-md">
                            Short documentary cinema and wedding films — cut to the rhythm of
                            rivers, festivals, and quiet rooms.
                        </p>
                        <Link
                            to="/films"
                            data-testid="home-films-link"
                            className="editorial-link nav-link text-foreground mt-8 inline-block"
                        >
                            All films →
                        </Link>
                    </div>
                    <div className="md:col-span-7">
                        <Link
                            to="/films"
                            data-testid="home-featured-film"
                            className="relative block img-hover group"
                        >
                            <img
                                src={featuredFilm.poster}
                                alt={featuredFilm.title}
                                loading="lazy"
                                className="w-full aspect-[16/10] object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#F5F4F0]/60 flex items-center justify-center group-hover:bg-[#F5F4F0] transition-colors duration-500">
                                    <Play size={22} className="text-foreground group-hover:text-[#0D0F12] transition-colors duration-500 ml-1" fill="currentColor" />
                                </div>
                            </div>
                            <div className="absolute bottom-4 left-5 right-5 flex items-baseline justify-between text-foreground">
                                <span className="font-serif text-xl md:text-2xl">{featuredFilm.title}</span>
                                <span className="eyebrow text-secondary">{featuredFilm.duration}</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ABOUT PREVIEW */}
            <section className="border-t hairline">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-5">
                        <p className="eyebrow">About</p>
                        <h2 className="editorial-heading text-4xl md:text-5xl text-foreground mt-3">
                            Manoj Bhosale
                        </h2>
                    </div>
                    <div className="md:col-span-7">
                        <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed">
                            I grew up between a small town in western Maharashtra and the
                            slower edges of its rivers. Photography for me is less a
                            profession than a habit of returning — to faces, to villages, to
                            the same monsoon every July.
                        </p>
                        <Link
                            to="/about"
                            data-testid="home-about-link"
                            className="editorial-link nav-link text-foreground mt-10 inline-block"
                        >
                            The full story →
                        </Link>
                    </div>
                </div>
            </section>

            {/* CONTACT PREVIEW */}
            <section className="bg-surface border-t hairline">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
                    <p className="eyebrow">Working with Manukalakar</p>
                    <h2 className="editorial-heading text-4xl md:text-6xl text-foreground mt-4 max-w-3xl mx-auto">
                        Tell me the story you would like to keep.
                    </h2>
                    <Link
                        to="/contact"
                        data-testid="home-contact-cta"
                        className="mt-12 md:mt-14 inline-flex items-center uppercase tracking-[0.22em] text-xs md:text-sm border-b border-[#8B2332] text-[#8B2332] pb-1 transition-all duration-300 hover:bg-[#8B2332] hover:text-[#F7F4EF] hover:px-3 hover:py-2 hover:border-transparent"
                    >
                        Begin a conversation <ArrowRight size={14} color="#7A1E2C" />
                    </Link>
                    <p className="mt-6 text-sm text-[#7E7A74]">
                        {brand.email} · {brand.location}
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;
