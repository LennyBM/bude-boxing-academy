import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import reviewsDataUrl from '../src/data/facebook_reviews.json?url';

const ReviewCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [validReviews, setValidReviews] = useState<any[]>([]);

    useEffect(() => {
        fetch(reviewsDataUrl)
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter((review: any) => review.text && review.text.length > 10);
                setValidReviews(filtered);
            })
            .catch(err => console.error("Failed to fetch reviews:", err));
    }, []);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isAutoPlaying && validReviews.length > 0) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === validReviews.length - 1 ? 0 : prevIndex + 1
                );
            }, 5000); // Change review every 5 seconds
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, validReviews.length]);

    const nextReview = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) =>
            prevIndex === validReviews.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevReview = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? validReviews.length - 1 : prevIndex - 1
        );
    };

    if (validReviews.length === 0) return null;

    return (
        <section className="py-20 bg-black relative overflow-hidden" id="reviews">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tight mb-4 uppercase">
                        COMMUNITY <span className="text-red-600">VOICES</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Hear what our members have to say about their experience at Bude Boxing Academy.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevReview}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-12 z-20 p-3 bg-red-600/10 hover:bg-red-600 text-white rounded-full backdrop-blur-sm transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.6)]"
                        aria-label="Previous review"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={nextReview}
                        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-12 z-20 p-3 bg-red-600/10 hover:bg-red-600 text-white rounded-full backdrop-blur-sm transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.6)]"
                        aria-label="Next review"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Reviews Container */}
                    <div
                        className="overflow-hidden rounded-2xl bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-8 md:p-12 relative shadow-2xl"
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                        <Quote className="absolute top-6 left-6 text-red-600/20 w-16 h-16 md:w-24 md:h-24 -rotate-12" />

                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {validReviews.map((review, index) => (
                                <div
                                    key={index}
                                    className="w-full flex-shrink-0 px-4 flex flex-col items-center text-center"
                                >
                                    <div className="flex gap-1 text-yellow-500 mb-6 drop-shadow-[0_0_8px_rgba(234,179,8,0.4)]">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} size={24} fill="currentColor" />
                                        ))}
                                    </div>

                                    <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed mb-8 min-h-[120px] italic z-10 relative">
                                        "{review.text}"
                                    </p>

                                    <div className="flex items-center gap-4 mt-auto">
                                        {review.user?.profilePic ? (
                                            <img
                                                src={review.user.profilePic}
                                                alt={review.user.name}
                                                className="w-14 h-14 rounded-full object-cover border-2 border-red-600 p-0.5"
                                            />
                                        ) : (
                                            <div className="w-14 h-14 rounded-full bg-zinc-800 flex items-center justify-center border-2 border-red-600 p-0.5">
                                                <span className="text-gray-400 font-bold text-xl uppercase">
                                                    {review.user?.name?.charAt(0) || 'U'}
                                                </span>
                                            </div>
                                        )}
                                        <div className="text-left">
                                            <h4 className="text-white font-bold tracking-wider">{review.user?.name || 'Anonymous User'}</h4>
                                            <div className="flex items-center gap-2">
                                                <span className="text-red-500 text-sm font-medium">Verified Facebook Review</span>
                                                <span className="text-gray-500 text-xs text-center">•</span>
                                                <span className="text-gray-400 text-xs">
                                                    {new Date(review.date).toLocaleDateString('en-GB', {
                                                        month: 'short',
                                                        year: 'numeric'
                                                    })}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-3 mt-8">
                        {validReviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setIsAutoPlaying(false);
                                    setCurrentIndex(index);
                                }}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-red-600 w-8 shadow-[0_0_10px_rgba(220,38,38,0.8)]'
                                    : 'bg-zinc-700 hover:bg-zinc-500'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewCarousel;
