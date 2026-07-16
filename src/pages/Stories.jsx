import { Link } from 'react-router-dom';
import { stories } from '../data/content';

const Stories = () => {
    return (
        <div
            data-testid="stories-page"
            className="pt-36 pb-32 bg-[#F7F4EF] text-[#1B1B1B]"
        >
            {/* HERO */}

            <div className="max-w-screen-xl mx-auto px-6">

                <p className="uppercase tracking-[0.28em] text-xs text-[#8B2332]">
                    Volume I · Documentary
                </p>

                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] mt-6 max-w-5xl">
                    Long-form essays on faith,
                    <br />
                    culture and ordinary days.
                </h1>

                <p className="mt-10 text-lg md:text-xl text-[#6F6B66] max-w-2xl leading-relaxed">
                    Every story begins with a single photograph and unfolds into
                    something larger—faith, people, celebration and memory.
                </p>

            </div>

            {/* STORIES */}

            <div className="max-w-screen-xl mx-auto px-6 mt-24 grid md:grid-cols-2 gap-x-14 gap-y-24">

                {stories.map((story, index) => (

                    <Link
                        key={story.slug}
                        to={`/stories/${story.slug}`}
                        data-testid={`story-card-${story.slug}`}
                        className={`group block ${
                            index % 2 ? 'md:mt-24' : ''
                        }`}
                    >

                        {/* IMAGE */}

                        <div className="overflow-hidden bg-white p-3 shadow-sm transition-all duration-500 group-hover:shadow-xl">

                            <div className="overflow-hidden">

                                <img
                                    src={story.cover}
                                    alt={story.title}
                                    loading="lazy"
                                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                />

                            </div>

                        </div>

                        {/* META */}

                        <div className="mt-7 flex justify-between items-center">

                            <p className="uppercase tracking-[0.22em] text-xs text-[#8B2332]">
                                {story.location}
                            </p>

                            <p className="uppercase tracking-[0.22em] text-xs text-[#9C968E]">
                                {story.year}
                            </p>

                        </div>

                        {/* TITLE */}

                        <h2 className="mt-5 font-serif text-4xl leading-tight transition-all duration-300 group-hover:text-[#8B2332]">

                            {story.title}

                        </h2>

                        {/* SUBTITLE */}

                        <p className="mt-3 text-[#6F6B66] text-lg leading-relaxed">

                            {story.subtitle}

                        </p>

                        {/* LINK */}

                        <p className="mt-8 uppercase tracking-[0.22em] text-xs text-[#8B2332] opacity-0 group-hover:opacity-100 transition-opacity duration-500">

                            VIEW STORY →

                        </p>

                    </Link>

                ))}

            </div>
        </div>
    );
};

export default Stories;