import { useState } from 'react';

const LazyImage = ({ src, alt, onClick, testId, eager = false }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <button
            type="button"
            onClick={onClick}
            data-testid={testId}
            className="group block w-full cursor-zoom-in text-left"
        >
            <div
                className="
                    overflow-hidden
                    bg-white
                    p-2
                    md:p-3
                    rounded-sm
                    shadow-sm
                    transition-all
                    duration-500
                    hover:shadow-lg
                    hover:-translate-y-[2px]
                "
            >

                <div className="overflow-hidden">

                    <img
                        src={src}
                        alt={alt}
                        loading={eager ? 'eager' : 'lazy'}
                        decoding="async"
                        onLoad={() => setLoaded(true)}
                        className={`
                        fade-img
                        block
                        w-full
                        h-auto
                        transform-gpu
                        transition-opacity
                        duration-500
                        group-hover:opacity-95
                        ${loaded ? 'loaded' : ''}
                    `}
                    />

                </div>

            </div>
        </button>
    );
};

const MasonryGallery = ({
    images,
    onOpen,
    testIdPrefix = 'gallery-img',
}) => {
    return (
        <div
            className="masonry gap-8 md:gap-10"
            data-testid="masonry-gallery"
        >
            {images.map((src, i) => (
                <LazyImage
                    key={`${src}-${i}`}
                    src={src}
                    alt={`Photograph ${i + 1}`}
                    onClick={() => onOpen?.(i)}
                    testId={`${testIdPrefix}-${i}`}
                    eager={i < 4}
                />
            ))}
        </div>
    );
};

export default MasonryGallery;