import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Heart, Star, Camera } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

const Investment = () => {
  const packages = [
    {
      name: 'Engagement Session',
      price: '$650',
      duration: '2 hours',
      description: 'Perfect for couples wanting to celebrate their engagement',
      features: [
        'Professional photographer',
        '2-hour session',
        '2 outfit changes',
        '50+ edited high-resolution images',
        'Online gallery for sharing',
        'Print release included'
      ],
      popular: false
    },
    {
      name: 'Wedding Photography',
      price: '$2,850',
      duration: '8 hours',
      description: 'Complete wedding day coverage',
      features: [
        'Lead photographer + assistant',
        '8 hours of coverage',
        'Bridal preparations to reception',
        '500+ edited high-resolution images',
        'Online gallery for 2 years',
        'Print release included',
        'Sneak peek within 48 hours',
        'USB drive with all images'
      ],
      popular: true
    },
    {
      name: 'Premium Wedding',
      price: '$4,200',
      duration: '10 hours',
      description: 'Our most comprehensive wedding package',
      features: [
        'Lead photographer + 2 assistants',
        '10 hours of coverage',
        'Full day documentation',
        '800+ edited high-resolution images',
        'Engagement session included',
        'Custom wedding album (50 pages)',
        'Online gallery for 5 years',
        'Print release included',
        'Same day sneak peek',
        'USB drive + cloud backup'
      ],
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'Additional Hour',
      price: '$350',
      description: 'Extend your photography coverage'
    },
    {
      name: 'Second Photographer',
      price: '$750',
      description: 'Additional coverage angles'
    },
    {
      name: 'Engagement Session',
      price: '$650',
      description: 'Pre-wedding photo session'
    },
    {
      name: 'Wedding Album',
      price: '$850',
      description: 'Custom designed 50-page album'
    },
    {
      name: 'Rehearsal Dinner',
      price: '$450',
      description: '3-hour rehearsal coverage'
    },
    {
      name: 'Photo Booth',
      price: '$650',
      description: '4-hour photo booth rental'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-warm-light to-background">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 text-foreground">
            Investment
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transparent pricing for exceptional photography services. We believe in providing 
            clear value for your investment in preserving life's most precious moments.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-foreground">
              Photography Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the package that best fits your needs. All packages include professional editing 
              and high-resolution digital images.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-lg shadow-warm-lg p-8 ${
                  pkg.popular 
                    ? 'border-2 border-warm-primary bg-white scale-105' 
                    : 'bg-white hover:shadow-warm-md transition-shadow duration-300'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-warm-primary text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">{pkg.description}</p>
                  <div className="text-4xl font-serif font-bold text-warm-primary mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-sm text-muted-foreground">{pkg.duration}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-warm-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-3 ${
                    pkg.popular
                      ? 'bg-warm-primary hover:bg-warm-secondary text-white'
                      : 'border border-warm-primary text-warm-primary hover:bg-warm-light'
                  }`}
                  variant={pkg.popular ? "default" : "outline"}
                >
                  Choose Package
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-warm-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-foreground">
              Add-On Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enhance your photography experience with additional services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white rounded-lg shadow-warm p-6 hover:shadow-warm-md transition-shadow duration-300">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  {addon.name}
                </h3>
                <p className="text-muted-foreground mb-4">{addon.description}</p>
                <div className="text-2xl font-serif font-bold text-warm-primary">
                  {addon.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-foreground">
              What's Always Included
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every package comes with these essential services to ensure you receive the highest quality experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Camera,
                title: 'Professional Equipment',
                description: 'High-end cameras and lenses for stunning image quality'
              },
              {
                icon: Heart,
                title: 'Personal Consultation',
                description: 'Pre-session planning to understand your vision'
              },
              {
                icon: Star,
                title: 'Professional Editing',
                description: 'Expert post-processing for flawless results'
              },
              {
                icon: Check,
                title: 'Print Release',
                description: 'Full rights to print and share your images'
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-warm-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment & Process */}
      <section className="py-20 bg-warm-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-foreground">
                Booking Process
              </h2>
              <p className="text-xl text-muted-foreground">
                Simple steps to secure your photography session.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Consultation',
                  description: 'Schedule a free consultation to discuss your vision and select the perfect package.'
                },
                {
                  step: '02',
                  title: 'Booking',
                  description: 'Secure your date with a 50% deposit. The remaining balance is due one week before your session.'
                },
                {
                  step: '03',
                  title: 'Delivery',
                  description: 'Receive your edited images within 2-3 weeks via our secure online gallery.'
                }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-serif font-light text-warm-primary mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-foreground">
            Ready to Book Your Session?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your consultation and secure your date.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-warm-primary hover:bg-warm-secondary text-white px-8 py-4 text-lg shadow-warm hover:shadow-warm-md">
              Schedule Consultation
            </Button>
            <Button variant="outline" className="border-warm-primary text-warm-primary hover:bg-warm-light px-8 py-4 text-lg">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
      
      <WhatsAppButton />
    </div>
  );
};

export default Investment;