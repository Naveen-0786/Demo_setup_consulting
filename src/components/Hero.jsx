import React, { useState, useEffect, useRef } from 'react';

const slides = [
  {
    id: 0,
    title: "Private Equity",
    headline: "India Private\nEquity Report\n2026",
    description: "",
    image: "https://www.bain.com/contentassets/107f8bfdc74040d58025c2f2d64d6fd7/1920x1080-1.jpg?width=1920&height=1080&rmode=crop&rsampler=bicubic&compand=true",
    bottomLabel: "Private Equity"
  },
  {
    id: 1,
    title: "Technology",
    headline: "India Enterprise\nTechnology\nReport 2026",
    description: "",
    image: "https://www.bain.com/contentassets/f102a1de79714a50a309a3285b378322/1920x1080.jpg?width=1920&height=1080&rmode=crop&rsampler=bicubic&compand=true",
    bottomLabel: "Technology"
  },
  {
    id: 2,
    title: "Performance Improvement",
    headline: "CFOs Funded the\nAI Revolution.\nNow They're\nJoining It.",
    description: "",
    image: "https://www.bain.com/contentassets/b2c7e6270d024453882b9083daac4cd9/44006-cfoairevolution-1920x1080.jpg?width=1920&height=1080&rmode=crop&rsampler=bicubic&compand=true",
    bottomLabel: "Performance Improvement"
  },
  {
    id: 3,
    title: "Technology Private Equity",
    headline: "The New Era in\nTech Investing\nStarts Now",
    description: "",
    image: "https://www.bain.com/contentassets/acafc118227b4f26a731d9ee675b93f0/44357_techpereport_1920x1080.jpg?width=1920&height=1080&rmode=crop&rsampler=bicubic&compand=true",
    bottomLabel: "Technology Private Equity"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-advance slides every 5 seconds if not hovering
  useEffect(() => {
    if (isHovering) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovering, currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Swipe / Drag functionality
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const minSwipeDistance = 50;

  const onDragStart = (e) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches ? e.targetTouches[0].clientX : e.clientX;
  };

  const onDragMove = (e) => {
    touchEndX.current = e.targetTouches ? e.targetTouches[0].clientX : e.clientX;
  };

  const onDragEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance) nextSlide();
    if (distance < -minSwipeDistance) prevSlide();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div 
      className="relative h-screen w-full bg-bain-dark flex items-center justify-center overflow-hidden group select-none cursor-grab active:cursor-grabbing"
      onTouchStart={onDragStart}
      onTouchMove={onDragMove}
      onTouchEnd={onDragEnd}
      onMouseDown={onDragStart}
      onMouseMove={(e) => { if (touchStartX.current) onDragMove(e); }}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
    >
      {/* Background Images with Crossfade */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img 
            src={slide.image} 
            alt={slide.headline} 
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          {/* Subtle gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
        </div>
      ))}

      {/* Navigation handled by drag/swipe and keyboard arrows */}

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 max-w-7xl pt-20 pointer-events-none">
        <div className="max-w-3xl pointer-events-auto">
          <div className="mb-4 inline-block">
            <span className="text-white text-lg font-bold tracking-wide transition-all duration-500">
              {slides[currentSlide].title}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.15] tracking-tight mb-8 drop-shadow-lg min-h-[120px] transition-all duration-1000 ease-in-out whitespace-pre-line">
            {slides[currentSlide].headline}
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="#" className="text-white font-bold transition-colors duration-300 uppercase tracking-widest text-sm flex items-center gap-6 group hover:text-gray-300">
              READ MORE
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-8 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Navigation Labels */}
      <div 
        className="absolute bottom-0 left-0 w-full z-30 pb-12 pt-6 px-4 md:px-12 bg-gradient-to-t from-black/80 to-transparent cursor-auto"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseDown={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 relative">
            <style>{`
              @keyframes progress-fill {
                0% { width: 0%; }
                100% { width: var(--line-width, 8rem); }
              }
            `}</style>
            {slides.map((slide, index) => (
              <button 
                key={slide.id}
                onClick={(e) => { e.stopPropagation(); setCurrentSlide(index); }}
                className={`relative text-left pt-4 transition-all duration-300 outline-none border-none focus:outline-none focus:ring-0 focus-visible:outline-none group ${
                  index === currentSlide 
                    ? 'text-white font-bold' 
                    : 'text-white/50 hover:text-white/80 font-medium'
                }`}
              >
                {/* Short Animated Red Progress Line */}
                {index === currentSlide && (
                  <div 
                    key={currentSlide}
                    className="absolute top-0 left-0 h-[3px] bg-bain-red"
                    style={{
                      animation: 'progress-fill 5s linear forwards',
                      animationPlayState: isHovering ? 'paused' : 'running',
                      '--line-width': (currentSlide === 2 || currentSlide === 3) ? '12rem' : '8rem'
                    }}
                  />
                )}
                <h4 className="text-sm lg:text-base tracking-wide group-hover:-translate-y-1 transition-transform duration-300">
                  {slide.bottomLabel}
                </h4>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
