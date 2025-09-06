import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Mail, Instagram, MapPin, Calendar, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollReveal from '@/components/ScrollReveal';
import GoogleMap from '@/components/GoogleMap';

const BookSession = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  
  const phoneNumber = '+1234567890'; // Replace with actual phone number
  
  const getWhatsAppUrl = (message: string) => {
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const sessionTypes = [
    { name: 'Wedding Photography', message: 'Hi! I\'m interested in wedding photography services. Can we discuss my upcoming wedding?' },
    { name: 'Engagement Session', message: 'Hi! I\'d like to book an engagement photo session. Could you provide more details?' },
    { name: 'Portrait Session', message: 'Hi! I\'m interested in a portrait photography session. What packages do you offer?' },
    { name: 'Maternity Photos', message: 'Hi! I\'m expecting and would love to schedule a maternity photo session.' },
    { name: 'Family Session', message: 'Hi! I\'d like to book a family photography session. What are your available dates?' },
    { name: 'Corporate Event', message: 'Hi! We need photography services for a corporate event. Can we discuss the details?' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onSearchOpen={() => setIsSearchModalOpen(true)} />
      
      {/* Hero Section */}
      <ScrollReveal>
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-warm-light to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 text-foreground">
                Book a Session
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Ready to capture your special moments? Contact us directly on WhatsApp for instant communication and booking.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* WhatsApp Booking Options */}
      <ScrollReveal showSkeleton skeletonHeight="h-96">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Image */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=800&h=600&fit=crop&crop=center"
                  alt="Photography consultation and booking"
                  className="w-full h-96 lg:h-full object-cover rounded-lg shadow-warm-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-serif font-medium mb-2">
                    Let's Chat on WhatsApp
                  </h3>
                  <p className="opacity-90">
                    Instant responses • Easy booking • Direct communication
                  </p>
                </div>
              </div>

              {/* Booking Options */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-light mb-4 text-foreground">
                    Choose Your Session Type
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Click on any session type below to start a conversation on WhatsApp. We're online most of the time and respond quickly!
                  </p>
                </div>

                <div className="grid gap-4">
                  {sessionTypes.map((session, index) => (
                    <ScrollReveal key={session.name} delay={index * 100}>
                      <a
                        href={getWhatsAppUrl(session.message)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-6 bg-background border border-border hover:border-warm-primary rounded-lg shadow-warm hover:shadow-warm-md transition-all duration-300 group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                              <MessageCircle className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="text-lg font-serif font-medium text-foreground group-hover:text-warm-primary transition-colors">
                                {session.name}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                Tap to discuss details on WhatsApp
                              </p>
                            </div>
                          </div>
                          <div className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </a>
                    </ScrollReveal>
                  ))}
                </div>

                {/* General Contact */}
                <ScrollReveal delay={600}>
                  <div className="p-6 bg-warm-light rounded-lg">
                    <h4 className="text-lg font-serif font-medium text-foreground mb-3">
                      Have questions or need custom packages?
                    </h4>
                    <a
                      href={getWhatsAppUrl('Hi! I have some questions about your photography services. Can we chat?')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Start General Conversation</span>
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Why WhatsApp Section */}
      <ScrollReveal showSkeleton skeletonHeight="h-64">
        <section className="py-20 bg-warm-light">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 text-foreground">
                Why We Use WhatsApp
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal delay={100}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    Instant Response
                  </h3>
                  <p className="text-muted-foreground">
                    We're online most of the time and respond within minutes, not hours.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    Easy Communication
                  </h3>
                  <p className="text-muted-foreground">
                    Share photos, ask questions, and discuss details all in one convenient chat.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    Voice & Video Calls
                  </h3>
                  <p className="text-muted-foreground">
                    Sometimes a quick call explains everything better than text messages.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Location & Contact */}
      <ScrollReveal showSkeleton skeletonHeight="h-96">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 text-foreground">
                Find Us & Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground">
                Located in Richmond, Virginia. Available for sessions throughout the region.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <GoogleMap />
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-background rounded-lg shadow-warm border border-border">
                    <div className="w-12 h-12 bg-warm-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-foreground mb-2">Location</h3>
                    <p className="text-muted-foreground text-sm">
                      Richmond, Virginia<br />
                      Available by appointment
                    </p>
                  </div>

                  <div className="text-center p-6 bg-background rounded-lg shadow-warm border border-border">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-foreground mb-2">WhatsApp</h3>
                    <a 
                      href={getWhatsAppUrl('Hi! I found your website and I\'m interested in your photography services.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-500 hover:text-green-600 font-medium"
                    >
                      Chat with us now
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-warm-primary text-white rounded-lg">
                  <h4 className="text-lg font-serif font-medium mb-3">
                    Prefer WhatsApp for Fast Response
                  </h4>
                  <p className="text-sm opacity-90 mb-4">
                    We're most active on WhatsApp and can respond to your inquiries much faster than email. 
                    You can also easily share inspiration photos and discuss your vision with us.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full">✓ Instant responses</span>
                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full">✓ Share photos easily</span>
                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full">✓ Voice messages</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
      <SearchModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />
      <WhatsAppButton />
    </div>
  );
};

export default BookSession;