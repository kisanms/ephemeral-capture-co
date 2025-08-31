import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Pause, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Portfolio {
  id: string;
  title: string;
  category: string;
  images: string[];
  description: string;
}

interface ImageModalProps {
  portfolio: Portfolio;
  initialImageIndex: number;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ portfolio, initialImageIndex, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImageIndex);
  const [isSlideshow, setIsSlideshow] = useState(false);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    if (!isSlideshow) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % portfolio.images.length);
    }, 3000);

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
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + portfolio.images.length) % portfolio.images.length);
  };

  const toggleSlideshow = () => {
    setIsSlideshow(!isSlideshow);
  };

  const handleImageClick = () => {
    setShowControls(!showControls);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
      {/* Header */}
      <div
        className={`absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/50 to-transparent p-6 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex items-center justify-between text-white">
          <div>
            <h2 className="text-2xl font-serif font-medium">{portfolio.title}</h2>
            <p className="text-sm opacity-75 mt-1">
              {currentImageIndex + 1} of {portfolio.images.length} • {portfolio.category}
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSlideshow}
              className="text-white hover:bg-white/20"
            >
              {isSlideshow ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
            >
              <Share2 className="w-5 h-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
            >
              <Download className="w-5 h-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/20"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="h-full flex items-center justify-center p-6">
        <img
          src={portfolio.images[currentImageIndex]}
          alt={`${portfolio.title} - Image ${currentImageIndex + 1}`}
          className="max-w-full max-h-full object-contain cursor-pointer animate-scale-in"
          onClick={handleImageClick}
        />
      </div>

      {/* Navigation Arrows */}
      <div
        className={`absolute left-6 top-1/2 transform -translate-y-1/2 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={previousImage}
          className="text-white hover:bg-white/20 p-3 rounded-full"
          disabled={portfolio.images.length <= 1}
        >
          <ChevronLeft className="w-8 h-8" />
        </Button>
      </div>

      <div
        className={`absolute right-6 top-1/2 transform -translate-y-1/2 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={nextImage}
          className="text-white hover:bg-white/20 p-3 rounded-full"
          disabled={portfolio.images.length <= 1}
        >
          <ChevronRight className="w-8 h-8" />
        </Button>
      </div>

      {/* Bottom Controls */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Thumbnail Strip */}
        <div className="flex justify-center mb-4">
          <div className="flex space-x-2 max-w-full overflow-x-auto pb-2">
            {portfolio.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'border-white scale-110'
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
          <div className="w-full bg-white/20 rounded-full h-1 mb-4">
            <div
              className="bg-white h-1 rounded-full transition-all duration-300"
              style={{
                width: `${((currentImageIndex + 1) / portfolio.images.length) * 100}%`,
              }}
            />
          </div>
        )}

        {/* Instructions */}
        <div className="text-center text-white/75 text-sm">
          <p>Use arrow keys to navigate • Press space to start slideshow • ESC to close</p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;