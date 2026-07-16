import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { stories } from '../data/content';
import MasonryGallery from '../components/MasonryGallery';
import Lightbox from '../components/Lightbox';

const StoryDetail = () => {
    const { slug } = useParams();
    const story = stories.find((s) => s.slug === slug);
    const [openIndex, setOpenIndex] = useState(null);

    if (!story) return <Navigate to="/stories" replace />;

    return (
        <div
            data-testid="story-detail-page"
            className="bg-[#F7F4EF] text-[#1B1B1B]"
        >
            {/* HERO */}

            <section className="relative h-screen overflow-hidden">

                <img
                    src={story.cover}
                    alt={story.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 z-10 max-w-screen-2xl mx-auto px-6 md:px-12 pb-16">

                    <Link
                        to="/stories"
                        className="inline-flex items-center gap-2 uppercase tracking-[0.22em] text-xs text-white/80 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={14} />
                        All Stories
                    </Link>

                    <p className="uppercase tracking-[0.22em] text-xs text-[#D6C8B8] mt-8">
                        {story.location} • {story.year}
                    </p>

                    <h1 className="font-serif text-white text-5xl md:text-7xl lg:text-8xl leading-none mt-5">
                        {story.title}
                    </h1>

                    <p className="italic text-[#E6DED3] text-xl md:text-2xl mt-5">
                        {story.subtitle}
                    </p>

                </div>

            </section>

            {/* STORY */}

            <section className="max-w-screen-xl mx-auto px-6 py-28 grid md:grid-cols-12 gap-14 border-b border-[#E6DED3]">

                <div className="md:col-span-3">

                    <p className="uppercase tracking-[0.22em] text-xs text-[#8B2332]">
                        THE STORY
                    </p>

                </div>

                <div className="md:col-span-9">

                    <p className="font-serif text-2xl md:text-3xl leading-relaxed text-[#1B1B1B] max-w-4xl">
                        {story.excerpt}
                    </p>

                </div>

            </section>

            {/* GALLERY */}

            <section className="max-w-screen-xl mx-auto px-6 py-24">

                <div className="flex justify-between items-end mb-16">

                    <p className="uppercase tracking-[0.22em] text-xs text-[#8B2332]">
                        PHOTOGRAPHS
                    </p>

                    <span className="uppercase tracking-[0.22em] text-xs text-[#9C968E]">
                        {story.images.length} FRAMES
                    </span>

                </div>

                <MasonryGallery
                    images={story.images}
                    onOpen={(i) => setOpenIndex(i)}
                    testIdPrefix={`story-${story.slug}-img`}
                />

            </section>

            {/* NEXT STORY */}

            {(() => {
                const currentIndex = stories.findIndex(s => s.slug === story.slug);
                const nextStory = stories[(currentIndex + 1) % stories.length];

                return (
                    <section className="max-w-screen-2xl mx-auto px-6 md:px-12 py-32 border-t border-[#E6DED3]">

                        <p className="eyebrow text-[#8B2332] mb-6">
                            NEXT STORY
                        </p>

                        <Link
                            to={`/stories/${nextStory.slug}`}
                            className="group block"
                        >
                            <div className="overflow-hidden rounded-sm">

                                <img
                                    src={nextStory.cover}
                                    alt={nextStory.title}
                                    className="
                                        w-full
                                        aspect-[16/8]
                                        object-cover
                                        transition-transform
                                        duration-700
                                        ease-out
                                        group-hover:scale-105
                                    "
                                />

                            </div>

                            <div className="mt-10 flex items-center justify-between">

                                <div>

                                    <p className="eyebrow mb-3">
                                        {nextStory.location}
                                    </p>

                                    <h2 className="font-serif text-5xl">
                                        {nextStory.title}
                                    </h2>

                                    <p className="mt-4 text-lg text-[#6B625B]">
                                        {nextStory.subtitle}
                                    </p>

                                </div>

                                <span className="uppercase tracking-[0.25em] text-sm group-hover:text-[#8B2332] transition-colors">
                                    View Story →
                                </span>

                            </div>

                        </Link>

                    </section>
                );
            })()}

            <Lightbox
                images={story.images}
                openIndex={openIndex}
                onClose={() => setOpenIndex(null)}
            />

        </div>
    );
};

export default StoryDetail;