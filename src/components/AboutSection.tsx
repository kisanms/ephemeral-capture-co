import React from 'react';
import { MapPin, Camera, Heart, Award, Users, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  experience: string;
  specialties: string[];
  achievements: string[];
}

const AboutSection: React.FC = () => {
  const navigate = useNavigate();

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Alex Thompson',
      role: 'Lead Photographer & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'With over 8 years of experience in wedding photography, Alex founded The Moment Maker Films to capture the authentic emotions and timeless moments that make each love story unique.',
      experience: '8+ years in professional photography',
      specialties: ['Wedding Photography', 'Portrait Sessions', 'Destination Weddings'],
      achievements: ['Featured in Wedding Magazine 2023', 'Best Wedding Photographer Award 2022', '500+ Couples Photographed']
    },
    {
      id: '2',
      name: 'Sarah Martinez',
      role: 'Co-Photographer & Creative Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Sarah brings a unique artistic vision to every shoot, specializing in candid moments and natural lighting. Her background in fine arts adds a creative edge to every photograph.',
      experience: '6+ years in photography and visual arts',
      specialties: ['Engagement Sessions', 'Fine Art Photography', 'Creative Lighting'],
      achievements: ['Fine Arts Degree', 'International Photography Contest Winner', 'Published in Style Magazine']
    },
    {
      id: '3',
      name: 'Michael Chen',
      role: 'Videographer & Post-Production Specialist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Michael specializes in cinematic wedding films and same-day edits. His technical expertise and storytelling skills bring wedding stories to life through motion.',
      experience: '5+ years in videography and editing',
      specialties: ['Wedding Films', 'Same-Day Edits', 'Drone Cinematography'],
      achievements: ['Film School Graduate', 'Vimeo Staff Pick', 'Wedding Film Awards Finalist']
    }
  ];

  const stats = [
    { icon: Heart, number: '500+', label: 'Happy Couples' },
    { icon: Camera, number: '50k+', label: 'Photos Captured' },
    { icon: Award, number: '15+', label: 'Awards Won' },
    { icon: Coffee, number: '1000+', label: 'Cups of Coffee' }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-warm-primary text-sm uppercase tracking-[0.3em] mb-4 font-medium">
            About Us
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-6">
            Meet The Moment Makers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are passionate storytellers dedicated to capturing the authentic emotions,
            candid moments, and timeless memories that make your love story unique.
          </p>
        </div>

        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-medium text-foreground mb-4">
              Our Philosophy
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              At The Moment Maker Films, we believe that every love story deserves to be told
              beautifully. Our approach is rooted in authenticity – we don't just take photos,
              we capture the real, unguarded moments that happen between the planned poses.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From intimate elopements to grand celebrations, we work closely with each couple
              to understand their vision and bring it to life through our lens. Our goal is to
              create a relaxed, enjoyable experience that results in stunning imagery you'll
              treasure forever.
            </p>

            <div className="flex items-center space-x-2 text-warm-primary">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Based in Richmond, Virginia</span>
            </div>

            <Button className="btn-warm mt-6">
              Learn More About Our Process
            </Button>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=700&fit=crop"
              alt="About us"
              className="w-full h-[500px] object-cover rounded-lg shadow-warm-md"
            />
            <div className="absolute -bottom-6 -left-6 bg-warm-primary text-white p-6 rounded-lg shadow-warm-lg">
              <h4 className="text-lg font-serif font-medium mb-2">
                Capturing Love Since 2016
              </h4>
              <p className="text-sm opacity-90">
                Preserving moments that matter most
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-warm-light rounded-full mb-4 group-hover:bg-warm-primary group-hover:text-white transition-all duration-300">
                <stat.icon className="w-8 h-8 text-warm-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-foreground mb-2">
                {stat.number}
              </h3>
              <p className="text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-light text-foreground mb-4">
              Our Creative Team
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the talented individuals behind The Moment Maker Films, each bringing
              their unique skills and passion to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={member.id}
                className="group cursor-pointer overflow-hidden border-0 shadow-warm hover:shadow-warm-lg transition-all duration-500 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => navigate(`/team-member/${member.id}`)}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h4 className="text-xl font-serif font-medium text-foreground mb-2">
                    {member.name}
                  </h4>
                  <p className="text-warm-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {member.bio}
                  </p>
                  <div className="mt-4 flex items-center text-warm-primary text-sm font-medium">
                    <Users className="w-4 h-4 mr-2" />
                    <span>View Profile</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;