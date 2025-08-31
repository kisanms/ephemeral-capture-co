import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, MapPin, Phone, Mail, Instagram } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import WhatsAppButton from '@/components/WhatsAppButton';

const BookSession = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onSearchOpen={() => setIsSearchModalOpen(true)} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-warm-light to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 text-foreground">
              Book a Session
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Let's capture your special moments together. Fill out the form below to start planning your perfect photo session.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Image */}
            <div className="relative">
              <img
                src="/lovable-uploads/5ad720b9-e934-4904-9672-c7f8b4b11075.png"
                alt="Contact us"
                className="w-full h-96 lg:h-full object-cover rounded-lg shadow-warm-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>

            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-light mb-4 text-foreground">
                  Tell Us About Your Vision
                </h2>
                <p className="text-lg text-muted-foreground">
                  Every session is unique. Share your story with us and let's create something beautiful together.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Your first name"
                      required
                      className="border-warm-primary/20 focus:border-warm-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Your last name"
                      required
                      className="border-warm-primary/20 focus:border-warm-primary"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="border-warm-primary/20 focus:border-warm-primary"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    className="border-warm-primary/20 focus:border-warm-primary"
                  />
                </div>

                {/* Event Type */}
                <div className="space-y-2">
                  <Label htmlFor="eventType" className="text-sm font-medium text-foreground">
                    Session Type *
                  </Label>
                  <Select value={formData.eventType} onValueChange={(value) => setFormData(prev => ({...prev, eventType: value}))}>
                    <SelectTrigger className="border-warm-primary/20 focus:border-warm-primary">
                      <SelectValue placeholder="Select session type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="engagement">Engagement</SelectItem>
                      <SelectItem value="portrait">Portrait Session</SelectItem>
                      <SelectItem value="maternity">Maternity</SelectItem>
                      <SelectItem value="family">Family</SelectItem>
                      <SelectItem value="corporate">Corporate Event</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Event Date */}
                <div className="space-y-2">
                  <Label htmlFor="eventDate" className="text-sm font-medium text-foreground">
                    Preferred Date *
                  </Label>
                  <Input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    required
                    className="border-warm-primary/20 focus:border-warm-primary"
                  />
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-sm font-medium text-foreground">
                    Location
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Event location or preferred area"
                    className="border-warm-primary/20 focus:border-warm-primary"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    Tell Us About Your Vision *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Share your vision, special requests, or any questions you have..."
                    rows={5}
                    required
                    className="border-warm-primary/20 focus:border-warm-primary resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit"
                  className="w-full bg-warm-primary hover:bg-warm-secondary text-white py-4 text-lg font-medium tracking-wide shadow-warm hover:shadow-warm-md transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-warm-light">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-warm-primary rounded-full text-white">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground">Email Us</h3>
              <p className="text-muted-foreground">
                hello@themomentmaker.com
              </p>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-warm-primary rounded-full text-white">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground">Call Us</h3>
              <p className="text-muted-foreground">
                +1 (555) 123-4567
              </p>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-warm-primary rounded-full text-white">
                <Instagram className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground">Follow Us</h3>
              <p className="text-muted-foreground">
                @themomentmaker
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <SearchModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />
      <WhatsAppButton />
    </div>
  );
};

export default BookSession;