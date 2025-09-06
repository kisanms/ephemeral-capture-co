import React from 'react';
import { MessageCircle, Phone, MapPin, Clock, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/ScrollReveal';
import GoogleMap from '@/components/GoogleMap';

const ContactSection: React.FC = () => {
  const phoneNumber = '+1234567890'; // Replace with actual phone number
  
  const getWhatsAppUrl = (message: string) => {
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp (Preferred)',
      content: 'Instant messaging',
      description: 'Fastest response time',
      action: () => window.open(getWhatsAppUrl('Hi! I found your website and I\'m interested in your photography services. Could you provide more information?'), '_blank'),
      color: 'green'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@momentmakerfilms.com',
      description: 'Response within 24 hours',
      action: () => window.location.href = 'mailto:hello@momentmakerfilms.com',
      color: 'warm'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (804) 555-0123',
      description: 'Mon-Fri 9am-6pm EST',
      action: () => window.location.href = 'tel:+18045550123',
      color: 'warm'
    },
    {
      icon: Instagram,
      title: 'Follow Us',
      content: '@themomentmaker',
      description: 'See our latest work',
      action: () => window.open('https://instagram.com/themomentmaker', '_blank'),
      color: 'warm'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-warm-light">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-warm-primary text-sm uppercase tracking-[0.3em] mb-4 font-medium">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-6">
              Let's Chat About Your Vision
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We prefer WhatsApp for instant communication, but you can reach us through any of these channels.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Methods */}
          <ScrollReveal showSkeleton skeletonHeight="h-96">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-light mb-6 text-foreground">
                  Choose Your Preferred Contact Method
                </h3>
              </div>

              <div className="grid gap-4">
                {contactMethods.map((method, index) => (
                  <ScrollReveal key={method.title} delay={index * 100}>
                    <Card
                      onClick={method.action}
                      className={`p-6 border-0 shadow-warm hover:shadow-warm-md transition-all duration-300 group cursor-pointer ${
                        method.color === 'green' ? 'bg-green-50 hover:bg-green-100 border-green-200' : 'hover:border-warm-primary'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 ${
                            method.color === 'green' ? 'bg-green-500' : 'bg-warm-primary'
                          }`}>
                            <method.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground group-hover:text-warm-primary transition-colors">
                              {method.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-1">
                              {method.content}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {method.description}
                            </p>
                          </div>
                        </div>
                        <div className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                          method.color === 'green' ? 'text-green-500' : 'text-warm-primary'
                        }`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <ScrollReveal delay={400}>
                <Card className="p-6 border-0 shadow-warm bg-green-500 text-white">
                  <div className="text-center">
                    <MessageCircle className="w-8 h-8 mx-auto mb-3" />
                    <h4 className="text-lg font-serif font-medium mb-2">
                      Why We Recommend WhatsApp
                    </h4>
                    <p className="text-sm opacity-90 mb-4">
                      We're online most of the time and can respond within minutes. Plus, you can easily share inspiration photos!
                    </p>
                    <Button
                      onClick={() => window.open(getWhatsAppUrl('Hi! I\'m interested in booking a photography session. Can we discuss the details?'), '_blank')}
                      variant="secondary"
                      className="bg-white text-green-500 hover:bg-gray-100"
                    >
                      Start WhatsApp Chat
                    </Button>
                  </div>
                </Card>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          {/* Location & Additional Info */}
          <ScrollReveal showSkeleton skeletonHeight="h-96" delay={200}>
            <div className="space-y-8">
              {/* Google Map */}
              <div>
                <h3 className="text-xl font-serif font-medium text-foreground mb-4">
                  Our Location
                </h3>
                <GoogleMap />
              </div>

              {/* Additional Information */}
              <Card className="p-6 border-0 shadow-warm bg-warm-primary text-white">
                <h4 className="text-lg font-serif font-medium mb-3">
                  Why Choose The Moment Maker Films?
                </h4>
                <ul className="space-y-2 text-sm opacity-90">
                  <li className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                    Fast response time via WhatsApp
                  </li>
                  <li className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                    Serving Richmond and surrounding areas
                  </li>
                  <li className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    Easy communication and photo sharing
                  </li>
                  <li className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                    Voice and video calls available on WhatsApp
                  </li>
                </ul>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;