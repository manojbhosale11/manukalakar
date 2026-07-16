import { useState } from 'react';
import { Play } from 'lucide-react';
import { films } from '../data/content';
import VideoModal from '../components/VideoModal';

const Films = () => {
    const [active, setActive] = useState(null);

    return (
        <div
            data-testid="films-page"
            className="pt-32 md:pt-40"
        >
            {/* Header */}

            <section className="max-w-screen-2xl mx-auto px-6 md:px-12">

                <p className="uppercase tracking-[0.3em] text-xs text-[#8B2332]">
                    Volume III · Films
                </p>

                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] mt-5 max-w-5xl">
                    Cinema that remembers.
                </h1>

                <p className="mt-10 text-lg md:text-xl text-[#6B625B] leading-relaxed max-w-3xl">
                    Short documentary films born from the same observations as my
                    photographs. Festivals, rituals, weddings and ordinary people,
                    preserved in motion.
                </p>

            </section>

            {/* Films */}

            <section className="max-w-screen-2xl mx-auto px-6 md:px-12 mt-28 space-y-40">

                {films.map((film, i) => {

                    const flip = i % 2 === 1;

                    return (

                        <button
                            key={film.id}
                            type="button"
                            onClick={() => setActive(film)}
                            data-testid={`film-card-${film.id}`}
                            className="group w-full text-left"
                        >

                            <div className="grid md:grid-cols-12 gap-14 items-center">

                                {/* Poster */}

                                <div
                                    className={`relative overflow-hidden md:col-span-7 ${
                                        flip ? 'md:order-2' : ''
                                    }`}
                                >

                                    <img
                                        src={film.poster}
                                        alt={film.title}
                                        loading="lazy"
                                        className="
                                            w-full
                                            aspect-[16/10]
                                            object-cover
                                            transition-transform
                                            duration-700
                                            ease-out
                                            group-hover:scale-105
                                        "
                                    />

                                    <div
                                        className="
                                            absolute inset-0
                                            bg-black/25
                                            transition-all
                                            duration-700
                                            group-hover:bg-black/10
                                        "
                                    />

                                    <div className="absolute inset-0 flex items-center justify-center">

                                        <div
                                            className="
                                                w-20
                                                h-20
                                                rounded-full
                                                border
                                                border-white/80
                                                backdrop-blur-sm
                                                flex
                                                items-center
                                                justify-center
                                                transition-all
                                                duration-500
                                                group-hover:scale-110
                                                group-hover:bg-white
                                            "
                                        >

                                            <Play
                                                size={28}
                                                fill="currentColor"
                                                className="
                                                    text-white
                                                    group-hover:text-[#8B2332]
                                                    transition-colors
                                                "
                                            />

                                        </div>

                                    </div>

                                </div>

                                {/* Text */}

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
                                        Documentary Film
                                    </p>

                                    <h2 className="font-serif text-4xl md:text-6xl leading-none mt-5">
                                        {film.title}
                                    </h2>

                                    <p className="mt-3 uppercase tracking-[0.18em] text-sm text-[#8B8177]">
                                        {film.duration}
                                    </p>

                                    <p className="mt-8 text-lg leading-relaxed text-[#4E4741]">
                                        {film.synopsis}
                                    </p>

                                    <span
                                        className="
                                            inline-flex
                                            items-center
                                            gap-3
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
                                        <Play size={14} fill="currentColor" />
                                        Watch Film
                                    </span>

                                </div>

                            </div>

                        </button>

                    );

                })}

            </section>

            <VideoModal
                film={active}
                onClose={() => setActive(null)}
            />

        </div>
    );
};

export default Films;