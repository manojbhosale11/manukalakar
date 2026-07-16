import { Link } from 'react-router-dom';
import { weddings } from '../data/content';

const Weddings = () => {
    return (
        <div
            data-testid="weddings-page"
            className="pt-32 md:pt-40"
        >
            {/* Header */}

            <section className="max-w-screen-2xl mx-auto px-6 md:px-12">

                <p className="uppercase tracking-[0.3em] text-xs text-[#8B2332]">
                    Volume II · Weddings
                </p>

                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] mt-5 max-w-5xl">
                    Quiet weddings.
                    <br />
                    Honest photographs.
                </h1>

                <p className="mt-10 text-lg md:text-xl text-[#6B625B] leading-relaxed max-w-3xl">
                    Every wedding deserves to be remembered without interruption,
                    without forced moments, and without losing the emotions that
                    actually happened.
                </p>

            </section>

            {/* Weddings */}

            <section className="max-w-screen-2xl mx-auto px-6 md:px-12 mt-28 space-y-40">

                {weddings.map((w, i) => {

                    const flip = i % 2 === 1;

                    return (

                        <Link
                            key={w.slug}
                            to={`/weddings/${w.slug}`}
                            className="grid md:grid-cols-12 gap-14 items-center group"
                        >

                            {/* IMAGE */}

                            <div
                                className={`md:col-span-7 overflow-hidden ${
                                    flip ? 'md:order-2' : ''
                                }`}
                            >

                                <img
                                    src={w.cover}
                                    alt={w.couple}
                                    loading="lazy"
                                    className="
                                        w-full
                                        aspect-[4/3]
                                        object-cover
                                        transition-transform
                                        duration-700
                                        ease-out
                                        group-hover:scale-105
                                    "
                                />

                            </div>

                            {/* CONTENT */}

                            <div
                                className={`md:col-span-5 ${
                                    flip
                                        ? 'md:order-1 md:pr-10'
                                        : 'md:pl-10'
                                }`}
                            >

                                <p className="text-6xl md:text-7xl font-serif text-[#8B2332]/20 mb-8">
                                    {String(i + 1).padStart(2, '0')}
                                </p>

                                <p className="uppercase tracking-[0.25em] text-xs text-[#8B2332]">
                                    {w.location}
                                </p>

                                <h2 className="font-serif text-4xl md:text-6xl leading-none mt-5">
                                    {w.couple}
                                </h2>

                                <p className="mt-3 uppercase tracking-[0.18em] text-sm text-[#8B8177]">
                                    {w.date}
                                </p>

                                <p className="mt-8 text-lg leading-relaxed text-[#4E4741]">
                                    {w.excerpt}
                                </p>

                                <span
                                    className="
                                        inline-block
                                        mt-10
                                        uppercase
                                        tracking-[0.22em]
                                        text-sm
                                        text-[#8B2332]
                                        transition-all
                                        duration-500
                                        group-hover:translate-x-2
                                    "
                                >
                                    View Wedding →
                                </span>

                            </div>

                        </Link>

                    );

                })}

            </section>

        </div>
    );
};

export default Weddings;