import React, { useState } from 'react';
import { Eye, Heart, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  images: string[];
  description: string;
}

const PortfolioSection: React.FC = () => {
  const navigate = useNavigate();

  const portfolioData: PortfolioItem[] = [
    {
      id: '1',
      title: 'Ganesh & Neha',
      category: 'Wedding',
      coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1200&h=800&fit=crop',
      ],
      description: 'A beautiful spring wedding filled with love and laughter'
    },
    {
      id: '2',
      title: 'Emma & James',
      category: 'Engagement',
      coverImage: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=800&fit=crop',
      ],
      description: 'Romantic engagement session in the countryside'
    },
    {
      id: '3',
      title: 'David & Lisa',
      category: 'Wedding',
      coverImage: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&h=800&fit=crop',
      ],
      description: 'Elegant beach wedding with stunning ocean views'
    },
    {
      id: '4',
      title: 'Anna & Robert',
      category: 'Engagement',
      coverImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1200&h=800&fit=crop',
      ],
      description: 'Urban engagement session in the heart of the city'
    },
    {
      id: '5',
      title: 'Jessica & Mark',
      category: 'Wedding',
      coverImage: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=800&fit=crop',
      ],
      description: 'Rustic barn wedding with vintage charm'
    },
    {
      id: '6',
      title: 'Rachel & Tom',
      category: 'Engagement',
      coverImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&h=800&fit=crop',
      ],
      description: 'Mountain top engagement with breathtaking views'
    }
  ];

  const handlePortfolioClick = (portfolio: PortfolioItem, imageIndex: number = 0) => {
    // Convert PortfolioItem to the format expected by PortfolioView
    const portfolioData = {
      id: portfolio.id,
      title: portfolio.title,
      category: portfolio.category,
      images: portfolio.images,
      description: portfolio.description
    };
    
    // Navigate to portfolio view page with data
    navigate(`/portfolio/${portfolio.id}`, {
      state: { portfolio: portfolioData, initialImageIndex: imageIndex }
    });
  };

  return (
    <section id="portfolio" className="py-20 bg-warm-light">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-warm-primary text-sm uppercase tracking-[0.3em] mb-4 font-medium">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-6">
            Portfolio Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every couple has a unique story. Browse through our collection of love stories
            captured through our lens.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((portfolio, index) => (
            <div
              key={portfolio.id}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handlePortfolioClick(portfolio)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-warm hover:shadow-warm-lg transition-all duration-500 hover-lift">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={portfolio.coverImage}
                    alt={portfolio.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm uppercase tracking-wide opacity-90">
                        {portfolio.category}
                      </span>
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">{portfolio.images.length}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-serif font-medium mb-2">
                      {portfolio.title}
                    </h3>
                    <p className="text-sm opacity-90 mb-4">
                      {portfolio.description}
                    </p>
                    <div className="flex items-center text-sm font-medium">
                      <span>View Gallery</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Heart Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Portfolio Info */}
              <div className="pt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-serif font-medium text-foreground">
                    {portfolio.title}
                  </h3>
                  <span className="text-sm text-warm-primary font-medium">
                    {portfolio.category}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mt-1">
                  {portfolio.images.length} Photos
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="btn-warm rounded-full hover:shadow-warm-md transition-all duration-300">
            View More Galleries
          </button>
        </div>
      </div>

    </section>
  );
};

export default PortfolioSection;