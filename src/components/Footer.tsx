import React from 'react';
import { Camera, Instagram, Facebook, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Wedding Photography', href: '#portfolio' },
      { name: 'Engagement Sessions', href: '#portfolio' },
      { name: 'Elopement Photography', href: '#portfolio' },
      { name: 'Anniversary Sessions', href: '#portfolio' },
      { name: 'Family Portraits', href: '#portfolio' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Process', href: '#about' },
      { name: 'Pricing & Packages', href: '#investment' },
      { name: 'Blog', href: '#blog' },
      { name: 'Contact', href: '#contact' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Copyright', href: '#' },
      { name: 'Usage Rights', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' }
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Camera className="w-8 h-8 text-warm-primary" />
              <span className="text-2xl font-serif font-bold">
                The Moment Maker
              </span>
            </div>
            
            <p className="text-background/80 leading-relaxed mb-6">
              Capturing timeless moments and authentic emotions that tell your unique love story. 
              Professional wedding and lifestyle photography based in Richmond, Virginia.
            </p>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-warm-primary" />
                <span>hello@momentmakerfilms.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-warm-primary" />
                <span>+1 (804) 555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-warm-primary"
                 />
                <span>Richmond, Virginia</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-warm-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-warm-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6">
              Socials
            </h3>
            
            {/* <p className="text-background/80 text-sm mb-4">
              Subscribe to our newsletter for photography tips, behind-the-scenes content, and special offers.
            </p> */}
            
            {/* <div className="flex space-x-2 mb-6">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 bg-background/10 border border-background/20 rounded text-background placeholder-background/60 focus:outline-none focus:border-warm-primary text-sm"
              />
              <button className="px-4 py-2 bg-warm-primary text-white rounded hover:bg-warm-secondary transition-colors duration-300">
                Subscribe
              </button>
            </div>
             */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 rounded-full hover:bg-warm-primary hover:text-white transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-background/80 text-sm">
              © {currentYear} The Moment Maker Films. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-background/80 hover:text-warm-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-2 text-background/80 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-warm-primary" />
              <span>in Surat, GJ</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;