import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with EmailJS integration)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        eventDate: '',
        eventType: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@momentmakerfilms.com',
      description: 'Send us a message anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (804) 555-0123',
      description: 'Mon-Fri 9am-6pm EST'
    },
    {
      icon: MapPin,
      title: 'Visit Our Studio',
      content: 'Richmond, Virginia',
      description: 'Available by appointment'
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: 'Within 24 hours',
      description: 'We respond to all inquiries quickly'
    }
  ];

  const eventTypes = [
    'Wedding',
    'Engagement',
    'Elopement',
    'Anniversary',
    'Family Portrait',
    'Corporate Event',
    'Other'
  ];

  return (
    <section id="contact" className="py-20 bg-warm-light">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-warm-primary text-sm uppercase tracking-[0.3em] mb-4 font-medium">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-6">
            Book a Session with Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to capture your special moments? Fill out the form below to start a discussion 
            about your upcoming event and how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <Card className="p-8 shadow-warm-md border-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="+1 (000) 000-0000"
                  />
                </div>

                {/* Event Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-foreground mb-2">
                      Event Date
                    </label>
                    <Input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-foreground mb-2">
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-warm-primary focus:border-transparent"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Tell us about your vision *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full resize-none"
                    placeholder="Share details about your event, style preferences, location, and any special requests..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full bg-warm-primary hover:bg-warm-secondary text-white py-3 font-medium transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                      Sending Message...
                    </div>
                  ) : isSubmitted ? (
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Message Sent!
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </div>
                  )}
                </Button>

                {isSubmitted && (
                  <div className="text-center text-green-600 text-sm">
                    Thank you for your message! We'll get back to you within 24 hours.
                  </div>
                )}
              </form>
            </Card>
          </div>

          {/* Contact Information & Image */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Hero Image */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop"
                alt="Contact us"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-serif font-medium mb-2">
                  Let's Create Something Beautiful Together
                </h3>
                <p className="text-sm opacity-90">
                  Every love story deserves to be told beautifully
                </p>
              </div>
            </div>

            {/* Contact Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="p-6 border-0 shadow-warm hover:shadow-warm-md transition-all duration-300 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-warm-light rounded-full flex items-center justify-center group-hover:bg-warm-primary group-hover:text-white transition-all duration-300">
                        <info.icon className="w-6 h-6 text-warm-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="text-warm-primary font-medium mb-1">
                        {info.content}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Additional Information */}
            <Card className="p-6 border-0 shadow-warm bg-warm-primary text-white">
              <h4 className="text-lg font-serif font-medium mb-3">
                Why Choose The Moment Maker Films?
              </h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                  Professional, reliable service you can trust
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                  Customized packages to fit your needs and budget
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                  High-quality images delivered in digital gallery
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                  Fast turnaround time for all projects
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;