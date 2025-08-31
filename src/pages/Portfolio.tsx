import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ImageModal from '@/components/ImageModal';
import WhatsAppButton from '@/components/WhatsAppButton';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  images: string[];
  description: string;
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPortfolio, setSelectedPortfolio] = useState<PortfolioItem | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'Weddings', 'Engagements', 'Portraits', 'Events', 'Maternity'];

  const portfolioData: PortfolioItem[] = [
    {
      id: '1',
      title: 'Sarah & Michael\'s Wedding',
      category: 'Weddings',
      images: [
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop',
        'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=1000&fit=crop',
        'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&h=1000&fit=crop'
      ],
      description: 'A beautiful autumn wedding celebration filled with warmth and joy.'
    },
    {
      id: '2',
      title: 'Emma & James Engagement',
      category: 'Engagements',
      images: [
        'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=1000&fit=crop',
        'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&h=1000&fit=crop'
      ],
      description: 'Romantic engagement session capturing their love story.'
    },
    {
      id: '3',
      title: 'Professional Headshots',
      category: 'Portraits',
      images: [
        'https://images.unsplash.com/photo-1494790108755-2616c906ca6c?w=800&h=1000&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop'
      ],
      description: 'Professional portrait session for business executives.'
    },
    {
      id: '4',
      title: 'Corporate Event',
      category: 'Events',
      images: [
        'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=1000&fit=crop',
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=1000&fit=crop'
      ],
      description: 'Annual corporate gala documentation.'
    },
    {
      id: '5',
      title: 'Expecting Joy',
      category: 'Maternity',
      images: [
        'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=1000&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1000&fit=crop'
      ],
      description: 'Beautiful maternity session celebrating new life.'
    },
    {
      id: '6',
      title: 'Golden Hour Wedding',
      category: 'Weddings',
      images: [
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=1000&fit=crop',
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=1000&fit=crop'
      ],
      description: 'Sunset wedding ceremony with breathtaking golden hour lighting.'
    }
  ];

  const filteredPortfolio = selectedCategory === 'All' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === selectedCategory);

  const handlePortfolioClick = (portfolio: PortfolioItem, imageIndex: number = 0) => {
    setSelectedPortfolio(portfolio);
    setSelectedImageIndex(imageIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPortfolio(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-warm-light to-background">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 text-foreground">
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our collection of captured moments, each telling a unique story of love, joy, and celebration.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 ${
                  selectedCategory === category
                    ? 'bg-warm-primary hover:bg-warm-secondary text-white'
                    : 'border-warm-primary text-warm-primary hover:bg-warm-light'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div 
                  className="relative overflow-hidden rounded-lg shadow-warm hover:shadow-warm-lg transition-all duration-300 hover-lift"
                  onClick={() => handlePortfolioClick(item)}
                >
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-serif font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.category}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs bg-warm-light text-warm-primary px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-muted-foreground ml-2">
                      {item.images.length} photos
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-warm-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-foreground">
            Ready to Create Your Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's capture your special moments with the same passion and attention to detail.
          </p>
          <Button className="bg-warm-primary hover:bg-warm-secondary text-white px-8 py-4 text-lg shadow-warm hover:shadow-warm-md">
            Book a Session
          </Button>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && selectedPortfolio && (
        <ImageModal
          portfolio={selectedPortfolio}
          initialImageIndex={selectedImageIndex}
          onClose={closeModal}
        />
      )}
      
      <WhatsAppButton />
    </div>
  );
};

export default Portfolio;