import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PortfolioSection from '@/components/PortfolioSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollReveal from '@/components/ScrollReveal';

const Index = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onSearchOpen={() => setIsSearchOpen(true)} />
      
      <ScrollReveal showSkeleton skeletonHeight="h-screen">
        <HeroSection />
      </ScrollReveal>
      
      <ScrollReveal showSkeleton skeletonHeight="h-96" delay={200}>
        <PortfolioSection />
      </ScrollReveal>
      
      <ScrollReveal showSkeleton skeletonHeight="h-96" delay={400}>
        <AboutSection />
      </ScrollReveal>
      
      <ScrollReveal showSkeleton skeletonHeight="h-96" delay={600}>
        <ContactSection />
      </ScrollReveal>
      
      <Footer />
      
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
      
      <WhatsAppButton />
    </div>
  );
};

export default Index;