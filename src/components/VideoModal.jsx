import { useEffect } from 'react';
import { X } from 'lucide-react';

const VideoModal = ({ film, onClose }) => {
    useEffect(() => {
        if (!film) return;
        const onKey = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [film, onClose]);

    if (!film) return null;

    return (
        <div
            data-testid="video-modal"
            className="fixed inset-0 z-[100] lightbox-backdrop flex items-center justify-center px-6 md:px-16 py-10"
            onClick={onClose}
        >
            <div
                className="w-full max-w-5xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between mb-4 text-secondary">
                    <div>
                        <p className="eyebrow">Now playing</p>
                        <h3 className="font-serif text-2xl md:text-3xl text-foreground mt-1">
                            {film.title}
                        </h3>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        data-testid="video-modal-close"
                        aria-label="Close"
                        className="hover:text-foreground transition-colors p-2"
                    >
                        <X size={22} />
                    </button>
                </div>
                <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                    <iframe
                        title={film.title}
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube-nocookie.com/embed/${film.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                <p className="text-secondary text-sm md:text-base mt-4 leading-relaxed max-w-3xl">
                    {film.synopsis}
                </p>
            </div>
        </div>
    );
};

export default VideoModal;
