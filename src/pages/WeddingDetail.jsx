import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { weddings } from '../data/content';
import MasonryGallery from '../components/MasonryGallery';
import Lightbox from '../components/Lightbox';

const WeddingDetail = () => {
    const { slug } = useParams();
    const wedding = weddings.find((w) => w.slug === slug);
    const [openIndex, setOpenIndex] = useState(null);

    if (!wedding) return <Navigate to="/weddings" replace />;

    const currentIndex = weddings.findIndex((w) => w.slug === wedding.slug);
    const nextWedding = weddings[(currentIndex + 1) % weddings.length];

    return (
        <div data-testid="wedding-detail-page" className="pt-24">

            {/* HERO */}
            <div className="relative w-full h-[80svh] min-h-[520px] overflow-hidden">
                <img
                    src={wedding.cover}
                    alt={wedding.couple}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#F7F4EF]/90 via-transparent to-transparent" />

                <div className="relative z-10 h-full max-w-screen-2xl mx-auto px-6 md:px-12 flex flex-col justify-end pb-16 md:pb-20">

                    <Link
                        to="/weddings"
                        className="inline-flex items-center gap-2 nav-link text-secondary hover:text-foreground transition-colors"
                    >
                        <ArrowLeft size={14} />
                        All weddings
                    </Link>

                    <p className="eyebrow text-secondary mt-6">
                        {wedding.location} · {wedding.date}
                    </p>

                    <h1 className="editorial-heading text-5xl md:text-7xl lg:text-8xl text-foreground mt-4">
                        {wedding.couple}
                    </h1>

                </div>
            </div>

            {/* STORY */}
            <section className="max-w-screen-2xl mx-auto px-6 md:px-12 py-20 md:py-28 border-b hairline grid grid-cols-1 md:grid-cols-12 gap-12">

                <div className="md:col-span-4">
                    <p className="eyebrow">The Day</p>
                </div>

                <div className="md:col-span-8">
                    <p className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed max-w-3xl">
                        {wedding.excerpt}
                    </p>
                </div>

            </section>

            {/* GALLERY */}
            <section className="max-w-screen-xl mx-auto px-6 py-24">
                <div className="flex items-end justify-between mb-10 md:mb-14">
                    <p className="uppercase tracking-[0.22em] text-xs text-[#8B8177]">
                        PHOTOGRAPHS
                    </p>
                    <span className="eyebrow text-[#7E7A74]">
                        {wedding.images.length} frames
                    </span>
                </div>
                <MasonryGallery
                    images={wedding.images}
                    onOpen={(i) => setOpenIndex(i)}
                    testIdPrefix={`wedding-${wedding.slug}-img`}
                />
            </section>

            {/* NEXT WEDDING */}
            <section className="max-w-screen-2xl mx-auto px-6 md:px-12 py-32 border-t border-[#E6DED3]">
                <p className="uppercase tracking-[0.25em] text-xs text-[#8B2332] mb-5">
                    THE JOURNEY CONTINUES
                </p>
                <Link
                    to={`/weddings/${nextWedding.slug}`}
                    className="group block"
                >
                    <div className="overflow-hidden rounded-sm">
                        <img
                            src={nextWedding.cover}
                            alt={nextWedding.couple}
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

                    <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                        <div>
                            <p className="eyebrow mb-3">
                                {nextWedding.location}
                            </p>
                            <h2 className="font-serif text-4xl md:text-6xl text-[#1B1B1B]">
                                {nextWedding.couple}
                            </h2>
                            <p className="mt-4 text-lg text-[#6B625B]">
                                {nextWedding.excerpt}
                            </p>
                        </div>
                        <span className="uppercase tracking-[0.25em] text-sm text-[#8B2332] group-hover:translate-x-2 transition-transform duration-500">
                            View Wedding →
                        </span>
                    </div>
                </Link>
            </section>

            <Lightbox
                images={wedding.images}
                openIndex={openIndex}
                onClose={() => setOpenIndex(null)}
            />
        </div>
    );
};

export default WeddingDetail;