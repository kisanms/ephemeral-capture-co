import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Award, MapPin, Camera, Heart, Users, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

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

const TeamMember: React.FC = () => {
  const { id } = useParams<{ id: string }>();
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

  const member = teamMembers.find(m => m.id === id);

  if (!member) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-foreground mb-4">Team Member Not Found</h1>
          <Button onClick={() => navigate('/about')} className="btn-warm">
            Back to About
          </Button>
        </div>
      </div>
    );
  }

  const stats = [
    { icon: Heart, number: '500+', label: 'Happy Couples' },
    { icon: Camera, number: '50k+', label: 'Photos Captured' },
    { icon: Award, number: '15+', label: 'Awards Won' },
    { icon: Coffee, number: '1000+', label: 'Cups of Coffee' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Button
              onClick={() => navigate('/about')}
              variant="ghost"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to About</span>
            </Button>
            <div className="flex items-center space-x-2 text-warm-primary">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Richmond, Virginia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-4">
                  {member.name}
                </h1>
                <p className="text-xl text-warm-primary font-medium mb-6">
                  {member.role}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {member.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-warm-light text-warm-primary text-sm rounded-full font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>

              <Button className="btn-warm">
                Book a Session with {member.name.split(' ')[0]}
              </Button>
            </div>

            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[600px] object-cover rounded-lg shadow-warm-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-warm-primary text-white p-6 rounded-lg shadow-warm-lg">
                <h4 className="text-lg font-serif font-medium mb-2">
                  {member.experience}
                </h4>
                <p className="text-sm opacity-90">
                  Professional Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-warm-light/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-light text-foreground mb-4">
              Our Impact Together
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Working as a team, we've created countless memories and captured precious moments for couples worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 group-hover:bg-warm-primary group-hover:text-white transition-all duration-300 shadow-warm">
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
        </div>
      </div>

      {/* Detailed Information */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Experience */}
              <Card className="p-8 border-0 shadow-warm">
                <h3 className="text-2xl font-serif font-medium text-foreground mb-4">
                  Experience & Background
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {member.experience}
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Professional Journey</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </Card>

              {/* Achievements */}
              <Card className="p-8 border-0 shadow-warm">
                <h3 className="text-2xl font-serif font-medium text-foreground mb-4">
                  Achievements & Recognition
                </h3>
                <ul className="space-y-3">
                  {member.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Award className="w-5 h-5 text-warm-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <h3 className="text-2xl font-serif font-medium text-foreground mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your vision and create something beautiful together.
                {member.name.split(' ')[0]} would love to hear about your special day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-warm">
                  Book a Consultation
                </Button>
                <Button variant="outline" onClick={() => navigate('/portfolio')}>
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
