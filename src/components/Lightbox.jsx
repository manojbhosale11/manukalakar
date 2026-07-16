import { useEffect, useState, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

const Lightbox = ({ images, openIndex, onClose }) => {
    const [index, setIndex] = useState(openIndex ?? 0);
    const [zoom, setZoom] = useState(1);
    const touchStart = useRef(null);

    const next = useCallback(() => {
        setZoom(1);
        setIndex((i) => (i + 1) % images.length);
    }, [images.length]);

    const prev = useCallback(() => {
        setZoom(1);
        setIndex((i) => (i - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        setIndex(openIndex ?? 0);
        setZoom(1);
    }, [openIndex]);

    useEffect(() => {
        if (openIndex === null || openIndex === undefined) return;
        const onKey = (e) => {
            if (e.key === 'Escape') onClose();
            else if (e.key === 'ArrowRight') next();
            else if (e.key === 'ArrowLeft') prev();
            else if (e.key === '+' || e.key === '=') setZoom((z) => Math.min(3, z + 0.25));
            else if (e.key === '-') setZoom((z) => Math.max(1, z - 0.25));
        };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [openIndex, next, prev, onClose]);

    if (openIndex === null || openIndex === undefined) return null;

    const onTouchStart = (e) => {
        touchStart.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e) => {
        if (touchStart.current == null) return;
        const delta = e.changedTouches[0].clientX - touchStart.current;
        if (delta > 60) prev();
        else if (delta < -60) next();
        touchStart.current = null;
    };

    return (
        <div
            data-testid="lightbox"
            className="fixed inset-0 z-[100] lightbox-backdrop flex flex-col"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            <div className="flex items-center justify-between px-6 md:px-10 py-5 text-secondary">
                <span className="nav-link tracking-[0.2em]">
                    {String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                </span>
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        onClick={() => setZoom((z) => Math.max(1, z - 0.25))}
                        data-testid="lightbox-zoom-out"
                        aria-label="Zoom out"
                        className="hover:text-foreground transition-colors"
                    >
                        <ZoomOut size={18} />
                    </button>
                    <button
                        type="button"
                        onClick={() => setZoom((z) => Math.min(3, z + 0.25))}
                        data-testid="lightbox-zoom-in"
                        aria-label="Zoom in"
                        className="hover:text-foreground transition-colors"
                    >
                        <ZoomIn size={18} />
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        data-testid="lightbox-close"
                        aria-label="Close"
                        className="hover:text-foreground transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>

            <div className="flex-1 flex items-center justify-center px-2 md:px-16 pb-6 relative overflow-hidden">
                <button
                    type="button"
                    onClick={prev}
                    data-testid="lightbox-prev"
                    aria-label="Previous"
                    className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 text-secondary hover:text-foreground transition-colors p-3"
                >
                    <ChevronLeft size={32} strokeWidth={1} />
                </button>

                <img
                    src={images[index]}
                    alt={`Photograph ${index + 1}`}
                    className="max-h-[80vh] max-w-full object-contain transition-transform duration-300"
                    style={{ transform: `scale(${zoom})` }}
                />

                <button
                    type="button"
                    onClick={next}
                    data-testid="lightbox-next"
                    aria-label="Next"
                    className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 text-secondary hover:text-foreground transition-colors p-3"
                >
                    <ChevronRight size={32} strokeWidth={1} />
                </button>
            </div>
        </div>
    );
};

export default Lightbox;
