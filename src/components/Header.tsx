import React, { useState, useEffect } from "react";
import { Menu, X, Search, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Investment", href: "/investment" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-warm border-b border-border"
          : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <span
              className={`text-2xl font-serif font-bold transition-colors duration-300 ${
                isScrolled
                  ? "text-foreground group-hover:text-warm-primary"
                  : "text-white group-hover:text-warm-accent"
              }`}
            >
              The Moment Maker Films
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative transition-colors duration-300 font-medium group ${
                  isScrolled
                    ? "text-foreground hover:text-warm-primary"
                    : "text-white hover:text-warm-accent"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                    isScrolled ? "bg-warm-primary" : "bg-warm-accent"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onSearchOpen}
              className={`transition-colors duration-300 ${
                isScrolled
                  ? "hover:bg-warm-light hover:text-warm-primary"
                  : "text-white hover:bg-white/20 hover:text-warm-accent"
              }`}
            >
              <Search className="w-5 h-5" />
            </Button>

            <a
              href="https://www.instagram.com/sc_pixex/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors duration-300 ${
                isScrolled
                  ? "hover:bg-warm-light hover:text-warm-primary"
                  : "text-white hover:bg-white/20 hover:text-warm-accent"
              }`}
            >
              <Instagram className="w-5 h-5" />
            </a>

            <Link to="/book-session">
              <Button
                variant="default"
                className="hidden sm:inline-flex bg-warm-primary hover:bg-warm-secondary text-white px-6 py-2 font-medium tracking-wide transition-all duration-300 shadow-warm hover:shadow-warm-md"
              >
                Book a Session
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={`lg:hidden ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
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
          <div className="lg:hidden mt-4 pb-4 bg-background/95 backdrop-blur-md border-t border-border animate-fade-in-up rounded-b-lg">
            <nav className="flex flex-col space-y-4 pt-4 px-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-warm-primary transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-warm-light"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/book-session" className="block mx-2 mt-4">
                <Button
                  variant="default"
                  className="bg-warm-primary hover:bg-warm-secondary text-white px-6 py-3 font-medium tracking-wide transition-all duration-300 w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book a Session
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
