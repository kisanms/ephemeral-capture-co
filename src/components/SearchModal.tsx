import React, { useState, useEffect } from 'react';
import { Search, X, Camera, Clock, Tag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  id: string;
  title: string;
  type: 'portfolio' | 'blog' | 'service';
  category: string;
  image: string;
  description: string;
  date?: string;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const mockSearchData: SearchResult[] = [
    {
      id: '1',
      title: 'Sarah & Michael Wedding',
      type: 'portfolio',
      category: 'Wedding Photography',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=200&fit=crop',
      description: 'Beautiful spring wedding at countryside venue'
    },
    {
      id: '2',
      title: 'Top 5 Wedding Photography Tips',
      type: 'blog',
      category: 'Photography Tips',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=300&h=200&fit=crop',
      description: 'Essential tips for capturing perfect wedding moments',
      date: 'March 15, 2024'
    },
    {
      id: '3',
      title: 'Engagement Session Package',
      type: 'service',
      category: 'Photography Services',
      image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=300&h=200&fit=crop',
      description: 'Romantic engagement photography sessions'
    },
    {
      id: '4',
      title: 'Emma & James Engagement',
      type: 'portfolio',
      category: 'Engagement Photography',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=300&h=200&fit=crop',
      description: 'Urban engagement session in downtown Richmond'
    },
    {
      id: '5',
      title: 'Planning Your Perfect Wedding Day',
      type: 'blog',
      category: 'Wedding Planning',
      image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=300&h=200&fit=crop',
      description: 'Complete guide to planning your dream wedding',
      date: 'February 28, 2024'
    }
  ];

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // Debounced search with improved filtering
    const searchTimeout = setTimeout(() => {
      const query = searchQuery.toLowerCase().trim();
      const filteredResults = mockSearchData.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(query);
        const categoryMatch = item.category.toLowerCase().includes(query);
        const descriptionMatch = item.description.toLowerCase().includes(query);
        
        // Score matches for better relevance
        let score = 0;
        if (titleMatch) score += 3;
        if (categoryMatch) score += 2;
        if (descriptionMatch) score += 1;
        
        return score > 0;
      }).sort((a, b) => {
        // Sort by relevance
        const aTitle = a.title.toLowerCase().includes(query) ? 3 : 0;
        const bTitle = b.title.toLowerCase().includes(query) ? 3 : 0;
        return bTitle - aTitle;
      });
      
      setSearchResults(filteredResults);
      setIsSearching(false);
    }, 150); // Reduced debounce time for more responsive feel

    return () => clearTimeout(searchTimeout);
  }, [searchQuery]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setSearchQuery('');
      setSearchResults([]);
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'portfolio':
        return Camera;
      case 'blog':
        return Clock;
      case 'service':
        return Tag;
      default:
        return Search;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'portfolio':
        return 'text-blue-600';
      case 'blog':
        return 'text-green-600';
      case 'service':
        return 'text-purple-600';
      default:
        return 'text-warm-primary';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-fade-in-up">
      <div className="container mx-auto px-6 py-8 h-full flex flex-col">
        {/* Header */}
        <div className="bg-background rounded-t-lg p-6 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-serif font-medium text-foreground">
              Search
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-warm-light"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
          
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search portfolios, blog posts, services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg border-border focus:border-warm-primary focus:ring-warm-primary"
              autoFocus
            />
          </div>
        </div>

        {/* Search Results */}
        <div className="bg-background rounded-b-lg flex-1 overflow-y-auto">
          {!searchQuery.trim() ? (
            <div className="p-8 text-center text-muted-foreground">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg mb-2">Start typing to search</p>
              <p className="text-sm">Find portfolios, blog posts, and services</p>
            </div>
          ) : isSearching ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-warm-primary border-t-transparent mx-auto mb-4"></div>
              <p className="text-muted-foreground">Searching...</p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              <div className="w-12 h-12 bg-warm-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-warm-primary" />
              </div>
              <p className="text-lg mb-2">No results found</p>
              <p className="text-sm">Try searching with different keywords</p>
            </div>
          ) : (
            <div className="p-6">
              <p className="text-sm text-muted-foreground mb-4">
                Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{searchQuery}"
              </p>
              
              <div className="space-y-4">
                {searchResults.map((result, index) => {
                  const IconComponent = getTypeIcon(result.type);
                  
                  return (
                    <div
                      key={result.id}
                      className="group flex items-center p-4 rounded-lg border border-border hover:border-warm-primary hover:shadow-warm transition-all duration-300 cursor-pointer animate-fade-in-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex-shrink-0 w-16 h-12 rounded overflow-hidden mr-4">
                        <img
                          src={result.image}
                          alt={result.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center mb-1">
                          <IconComponent className={`w-4 h-4 mr-2 ${getTypeColor(result.type)}`} />
                          <span className={`text-xs font-medium uppercase tracking-wide ${getTypeColor(result.type)}`}>
                            {result.type}
                          </span>
                          {result.date && (
                            <span className="text-xs text-muted-foreground ml-2">
                              • {result.date}
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-lg font-serif font-medium text-foreground mb-1 group-hover:text-warm-primary transition-colors duration-300">
                          {result.title}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground mb-2">
                          {result.category}
                        </p>
                        
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {result.description}
                        </p>
                      </div>
                      
                      <div className="flex-shrink-0 ml-4">
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-warm-primary group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;