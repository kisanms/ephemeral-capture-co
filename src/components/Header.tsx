import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Instagram, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onSearchOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Investment', href: '#investment' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-warm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            <Camera className="w-8 h-8 text-warm-primary group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-2xl font-serif font-bold text-foreground group-hover:text-warm-primary transition-colors duration-300">
              The Moment Maker
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-foreground hover:text-warm-primary transition-colors duration-300 font-medium group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-warm-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onSearchOpen}
              className="hover:bg-warm-light hover:text-warm-primary transition-colors duration-300"
            >
              <Search className="w-5 h-5" />
            </Button>
            
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-warm-light hover:text-warm-primary rounded-full transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <Button
              variant="default"
              className="hidden sm:inline-flex bg-warm-primary hover:bg-warm-secondary text-white px-6 py-2 font-medium tracking-wide transition-all duration-300 shadow-warm hover:shadow-warm-md"
            >
              Book a Session
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border animate-fade-in-up">
            <nav className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-warm-primary transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button
                variant="default"
                className="bg-warm-primary hover:bg-warm-secondary text-white px-6 py-3 font-medium tracking-wide transition-all duration-300 mt-4 w-full"
              >
                Book a Session
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;