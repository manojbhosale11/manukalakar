import {
    aboutPortrait,
    brand,
    timeline,
    clients,
    equipment,
} from '../data/content';

const About = () => {
    return (
        <div
            data-testid="about-page"
            className="pt-32 md:pt-40 pb-32"
        >
            {/* HERO */}
            <section className="max-w-screen-2xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-16 items-start">
                {/* Portrait */}
                <div className="md:col-span-5">
                    <div className="sticky top-32">
                        <div className="overflow-hidden">
                            <img
                                src={aboutPortrait}
                                alt="Manoj Bhosale"
                                className="w-full aspect-[3/4] object-cover"
                            />
                        </div>

                        <p className="uppercase tracking-[0.22em] text-xs text-[#8B8177] mt-5">
                            Manoj Bhosale · Maharashtra, India
                        </p>
                    </div>
                </div>

                {/* Intro */}
                <div className="md:col-span-7">
                    <p className="uppercase tracking-[0.3em] text-xs text-[#8B2332]">
                        Volume IV ·
                    </p>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] mt-5">
                        Hi, I'm
                        <br />
                        Manoj Bhosale.
                    </h1>

                    <p className="mt-10 text-2xl md:text-3xl font-serif leading-relaxed">
                        I photograph what people often forget to notice.
                    </p>

                    <p className="mt-10 text-lg leading-relaxed text-[#4E4741]">
                        I document weddings, festivals and everyday life with patience rather than direction. My photographs are built on observation - quiet moments, honest emotions and stories that reveal themselves naturally.
                    </p>

                    <p className="mt-6 text-lg leading-relaxed text-[#4E4741]">
                        Based in Maharashtra, I work across India creating documentary imagery that preserves memories with authenticity and timeless simplicity.
                    </p>

                </div>

            </section>

            {/* Philosophy */}

            <section className="max-w-screen-xl mx-auto px-6 md:px-12 py-32 border-t border-[#E6DED3]">

                <p className="uppercase tracking-[0.3em] text-xs text-[#8B2332] mb-10">
                    Working Philosophy
                </p>

                <blockquote className="font-serif text-3xl md:text-5xl leading-relaxed max-w-5xl">

                    I don't chase perfect photographs.

                    <br />

                    I wait for honest moments.

                </blockquote>

                <p className="mt-12 text-lg text-[#4E4741] leading-relaxed max-w-3xl">

                    I believe the strongest photographs aren't created through
                    direction - they're discovered through patience, observation
                    and respect for the people standing in front of the camera.

                </p>

            </section>

            {/* Timeline */}

            <section className="max-w-screen-xl mx-auto px-6 md:px-12 py-32 border-t border-[#E6DED3]">

                <p className="uppercase tracking-[0.3em] text-xs text-[#8B2332] mb-16">
                    Timeline
                </p>

                <div className="space-y-16">

                    {timeline.map((item) => (

                        <div
                            key={item.year}
                            className="grid md:grid-cols-12 gap-10"
                        >

                            <div className="md:col-span-3">

                                <h2 className="font-serif text-5xl md:text-7xl text-[#8B2332]/25">
                                    {item.year}
                                </h2>

                            </div>

                            <div className="md:col-span-9">

                                <p className="text-lg leading-relaxed text-[#4E4741]">
                                    {item.text}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </section>

            {/* Equipment */}

            {/* Clients */}

            <section className="max-w-screen-xl mx-auto px-6 md:px-12 py-32 border-t border-[#E6DED3]">

                <p className="uppercase tracking-[0.3em] text-xs text-[#8B2332] mb-14">
                    Collaborations
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">

                    {clients.map((client) => (

                        <p
                            key={client}
                            className="font-serif text-2xl text-[#3A332D]"
                        >
                            {client}
                        </p>

                    ))}

                </div>

            </section>

            {/* Closing */}

            <section className="max-w-screen-xl mx-auto px-6 md:px-12 py-32 border-t border-[#E6DED3] text-center">

                <p className="uppercase tracking-[0.3em] text-xs text-[#8B2332]">
                    Let's Tell Something Meaningful
                </p>

                <h2 className="font-serif text-5xl md:text-7xl leading-tight mt-8">

                    Every story deserves
                    <br />
                    to be remembered.

                </h2>

                <p className="mt-10 text-lg text-[#4E4741] max-w-2xl mx-auto">

                    Whether it's a wedding, a documentary project, or a festival,
                    I'd love to help preserve it with honesty and intention.

                </p>

                <a
                    href="/contact"
                    className="
                        inline-block
                        mt-12
                        uppercase
                        tracking-[0.22em]
                        text-sm
                        text-[#8B2332]
                        hover:translate-x-1
                        transition-all
                    "
                >
                    Get In Touch →
                </a>

            </section>

        </div>
    );
};

export default About;