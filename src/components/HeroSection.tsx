import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop&crop=center',
      title: 'Capturing Memories',
      subtitle: 'Moments of Love',
      description: 'Every frame tells a story of love, joy, and timeless moments that last forever.',
      cta: 'Book a Photo Shoot'
    },
    {
      image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1920&h=1080&fit=crop&crop=center',
      title: 'Your Perfect Day',
      subtitle: 'Wedding Photography',
      description: 'Professional wedding photography that captures the essence of your special day.',
      cta: 'View Our Work'
    },
    {
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1920&h=1080&fit=crop&crop=center',
      title: 'Love Stories',
      subtitle: 'Engagement Sessions',
      description: 'Beautiful engagement photography that celebrates your unique love story.',
      cta: 'Book Session'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-6">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 animate-fade-in-up opacity-90">
            {heroSlides[currentSlide].title}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light mb-6 animate-fade-in-up animation-delay-200">
            {heroSlides[currentSlide].subtitle}
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400 opacity-90">
            {heroSlides[currentSlide].description}
          </p>
          <div className="animate-fade-in-up animation-delay-600">
            <Button className="btn-hero text-lg px-8 py-4 hover-scale">
              {heroSlides[currentSlide].cta}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-20">
        {/* Slide Indicators */}
        <div className="flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayback}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-white" />
          ) : (
            <Play className="w-4 h-4 text-white" />
          )}
        </button>
      </div>

      {/* Side Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 group"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:transform group-hover:-translate-x-1 transition-transform duration-300" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 group"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:transform group-hover:translate-x-1 transition-transform duration-300" />
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;