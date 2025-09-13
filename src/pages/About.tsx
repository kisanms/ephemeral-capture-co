import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Camera, Heart, Star, Users, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollReveal from '@/components/ScrollReveal';

const About = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const team = [
    {
      name: 'Elena Rodriguez',
      role: 'Lead Photographer',
      image: 'https://images.unsplash.com/photo-1592621385612-4d7129426394?w=400&h=400&fit=crop',

      bio: 'With over 10 years of experience, Elena specializes in capturing the raw emotions and intimate moments that make each wedding unique.'
    },
    {
      name: 'Marcus Chen',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Marcus brings an artistic eye to every shoot, ensuring that each frame tells a compelling story with perfect composition and lighting.'
    },
    {
      name: 'Sarah Williams',
      role: 'Event Coordinator',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Sarah ensures every detail is perfectly planned and executed, making your photography experience seamless and stress-free.'
    }
  ];

  const achievements = [
    { icon: Award, title: '500+ Weddings', description: 'Successfully captured' },
    { icon: Star, title: '5-Star Reviews', description: 'Average rating' },
    { icon: Heart, title: '10+ Years', description: 'Of experience' },
    { icon: Camera, title: 'Award Winning', description: 'Photography studio' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onSearchOpen={() => setIsSearchModalOpen(true)} />

      {/* Hero Section */}
      <ScrollReveal showSkeleton skeletonHeight="h-screen">
        <section className="relative py-32 bg-gradient-to-br from-warm-light to-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 text-foreground">
                  About Us
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  We are passionate storytellers who believe that every moment has the power to become a treasured memory.
                  Our mission is to capture the authentic emotions and genuine connections that make your story unique.
                </p>
                <Button className="bg-warm-primary hover:bg-warm-secondary text-white px-8 py-4 text-lg shadow-warm hover:shadow-warm-md">
                  Get in Touch
                </Button>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=700&fit=crop"
                  alt="Photography studio"
                  className="rounded-lg shadow-warm-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Our Story */}
      <ScrollReveal showSkeleton skeletonHeight="h-64">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-foreground">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Founded in 2014, The Moment Maker Films began as a dream to preserve life's most precious moments.
                What started as a small studio has grown into a team of dedicated artists who share a passion for
                storytelling through the lens.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that photography is more than just capturing images – it's about freezing emotions,
                preserving memories, and creating art that will be cherished for generations. Every couple, every family,
                and every individual has a unique story, and we're here to help tell it.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Achievements */}
      <ScrollReveal showSkeleton skeletonHeight="h-64">
        <section className="py-20 bg-warm-light">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-center mb-16 text-foreground">
              Our Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <ScrollReveal key={index} delay={index * 100}>
                    <div className="text-center group">
                      <div className="w-16 h-16 bg-warm-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Team Section */}
      <ScrollReveal showSkeleton skeletonHeight="h-96">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-foreground">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our talented team of photographers and coordinators work together to ensure
                your experience is nothing short of exceptional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {team.map((member, index) => (
                <ScrollReveal key={index} delay={index * 150}>
                  <div className="text-center group">
                    <div className="relative mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-64 h-64 rounded-full mx-auto object-cover shadow-warm-lg group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-warm-primary font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Philosophy */}
      <ScrollReveal showSkeleton skeletonHeight="h-64">
        <section className="py-20 bg-warm-light">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-foreground">
                  Our Philosophy
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We believe that the best photographs happen when people feel comfortable and natural.
                  Our approach is relaxed, fun, and focused on capturing genuine moments rather than posed perfection.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Every love story is different, and we take the time to understand yours. From the initial consultation
                  to the final delivery, we work closely with our clients to ensure their vision comes to life.
                </p>
                <Link to="/portfolio">
                  <Button className="bg-warm-primary hover:bg-warm-secondary text-white px-8 py-4 text-lg shadow-warm hover:shadow-warm-md">
                    View Our Work
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=700&fit=crop"
                  alt="Couple photography"
                  className="rounded-lg shadow-warm-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Call to Action */}
      <ScrollReveal showSkeleton skeletonHeight="h-32">
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-foreground">
              Ready to Tell Your Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We'd love to hear about your vision and discuss how we can bring it to life.
            </p>
            <Button className="bg-warm-primary hover:bg-warm-secondary text-white px-8 py-4 text-lg shadow-warm hover:shadow-warm-md">
              Schedule a Consultation
            </Button>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
      <SearchModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />
      <WhatsAppButton />
    </div>
  );
};

export default About;