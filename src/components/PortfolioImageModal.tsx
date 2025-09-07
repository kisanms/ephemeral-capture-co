import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Pause, Download, Share2, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  images: string[];
  description: string;
}

interface PortfolioImageModalProps {
  portfolio: PortfolioItem;
  initialImageIndex: number;
  onClose: () => void;
}

const PortfolioImageModal: React.FC<PortfolioImageModalProps> = ({
  portfolio,
  initialImageIndex,
  onClose,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImageIndex);
  const [isSlideshow, setIsSlideshow] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!isSlideshow) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % portfolio.images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isSlideshow, portfolio.images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          previousImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case ' ':
          e.preventDefault();
          toggleSlideshow();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % portfolio.images.length);
    setImageLoaded(false);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + portfolio.images.length) % portfolio.images.length);
    setImageLoaded(false);
  };

  const toggleSlideshow = () => {
    setIsSlideshow(!isSlideshow);
  };

  const handleImageClick = () => {
    setShowControls(!showControls);
  };

  // Touch gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      previousImage();
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/98 backdrop-blur-md overflow-hidden">
      {/* Header */}
      <div
        className={`absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 via-black/40 to-transparent p-3 sm:p-4 md:p-6 transition-all duration-500 ${
          showControls ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <div className="flex items-center justify-between text-white">
          <div className="flex-1 min-w-0 pr-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-medium truncate mb-1">
              {portfolio.title}
            </h2>
            <div className="flex items-center space-x-3 text-sm sm:text-base opacity-90">
              <span className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{currentImageIndex + 1} of {portfolio.images.length}</span>
              </span>
              <span className="text-warm-primary font-medium">{portfolio.category}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSlideshow}
              className="text-white hover:bg-white/20 h-10 w-10 sm:h-12 sm:w-12 rounded-full transition-all duration-300 hover:scale-110"
            >
              {isSlideshow ? (
                <Pause className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Play className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 h-10 w-10 sm:h-12 sm:w-12 rounded-full transition-all duration-300 hover:scale-110 hidden sm:flex"
            >
              <Share2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 h-10 w-10 sm:h-12 sm:w-12 rounded-full transition-all duration-300 hover:scale-110 hidden sm:flex"
            >
              <Download className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/20 h-10 w-10 sm:h-12 sm:w-12 rounded-full transition-all duration-300 hover:scale-110"
            >
              <X className="w-6 h-6 sm:w-7 sm:h-7" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Image Container */}
      <div className="absolute inset-0 flex items-center justify-center pt-16 pb-32 px-4 sm:px-6 md:px-8">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Image */}
          <div className="relative max-w-full max-h-full">
            <img
              ref={imageRef}
              src={portfolio.images[currentImageIndex]}
              alt={`${portfolio.title} - Image ${currentImageIndex + 1}`}
              className={`max-w-full max-h-full object-contain cursor-pointer transition-all duration-700 ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              onClick={handleImageClick}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onLoad={handleImageLoad}
              style={{ 
                maxHeight: 'calc(100vh - 240px)',
                maxWidth: 'calc(100vw - 80px)'
              }}
            />
            
            {/* Loading Spinner */}
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div
        className={`absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 z-30 transition-all duration-500 ${
          showControls ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
        }`}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={previousImage}
          className="text-white hover:bg-white/20 p-2 sm:p-3 rounded-full h-10 w-10 sm:h-12 sm:w-12 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 hover:border-white/40"
          disabled={portfolio.images.length <= 1}
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>
      </div>

      <div
        className={`absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-30 transition-all duration-500 ${
          showControls ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={nextImage}
          className="text-white hover:bg-white/20 p-2 sm:p-3 rounded-full h-10 w-10 sm:h-12 sm:w-12 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 hover:border-white/40"
          disabled={portfolio.images.length <= 1}
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>
      </div>

      {/* Bottom Controls */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 sm:p-4 md:p-6 transition-all duration-500 ${
          showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* Thumbnail Strip */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="flex space-x-2 sm:space-x-3 max-w-full overflow-x-auto pb-2 scrollbar-hide">
            {portfolio.images.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentImageIndex(index);
                  setImageLoaded(false);
                }}
                className={`flex-shrink-0 w-14 h-10 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                  index === currentImageIndex
                    ? 'border-warm-primary scale-110 shadow-lg shadow-warm-primary/50'
                    : 'border-white/30 hover:border-white/60'
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        {isSlideshow && (
          <div className="w-full bg-white/20 rounded-full h-1 mb-4 sm:mb-6 overflow-hidden">
            <div
              className="bg-gradient-to-r from-warm-primary to-warm-secondary h-1 rounded-full transition-all duration-300"
              style={{
                width: `${((currentImageIndex + 1) / portfolio.images.length) * 100}%`,
              }}
            />
          </div>
        )}

        {/* Description and Instructions */}
        <div className="text-center">
          <p className="text-white/90 text-sm sm:text-base mb-2 max-w-2xl mx-auto leading-relaxed">
            {portfolio.description}
          </p>
          <div className="text-white/60 text-xs sm:text-sm">
            <p className="hidden sm:block">
              Use arrow keys to navigate • Press space to start slideshow • ESC to close
            </p>
            <p className="sm:hidden">
              Swipe to navigate • Tap to toggle controls • ESC to close
            </p>
          </div>
        </div>
      </div>

      {/* Floating Heart Icon */}
      <div
        className={`absolute top-16 sm:top-20 right-4 sm:right-6 z-30 transition-all duration-500 ${
          showControls ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <div className="p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110">
          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioImageModal;
