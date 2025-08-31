import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
}

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Wedding Tips', 'Photography Guides', 'Real Weddings', 'Behind the Scenes'];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: '10 Essential Tips for Your Engagement Photos',
      excerpt: 'Make your engagement session unforgettable with these professional tips from our experienced photographers.',
      content: 'Full blog content here...',
      author: 'Elena Rodriguez',
      date: '2024-03-15',
      readTime: '5 min read',
      category: 'Photography Guides',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Sarah & Michael\'s Autumn Wedding Story',
      excerpt: 'A beautiful celebration surrounded by fall colors and filled with heartfelt moments.',
      content: 'Full blog content here...',
      author: 'Marcus Chen',
      date: '2024-03-10',
      readTime: '8 min read',
      category: 'Real Weddings',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: 3,
      title: 'How to Choose Your Wedding Photography Style',
      excerpt: 'Understanding different photography styles to find the perfect match for your special day.',
      content: 'Full blog content here...',
      author: 'Elena Rodriguez',
      date: '2024-03-05',
      readTime: '6 min read',
      category: 'Wedding Tips',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: 4,
      title: 'Behind the Lens: A Day in Our Studio',
      excerpt: 'Get an inside look at how we prepare for wedding photography sessions and what goes into each shoot.',
      content: 'Full blog content here...',
      author: 'Sarah Williams',
      date: '2024-03-01',
      readTime: '4 min read',
      category: 'Behind the Scenes',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'The Perfect Wedding Timeline for Photography',
      excerpt: 'Learn how to structure your wedding day to ensure we capture every important moment.',
      content: 'Full blog content here...',
      author: 'Marcus Chen',
      date: '2024-02-25',
      readTime: '7 min read',
      category: 'Wedding Tips',
      image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: 6,
      title: 'Golden Hour Photography: Making Magic with Light',
      excerpt: 'Discover the secrets of shooting during golden hour and how it transforms your wedding photos.',
      content: 'Full blog content here...',
      author: 'Elena Rodriguez',
      date: '2024-02-20',
      readTime: '5 min read',
      category: 'Photography Guides',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop',
      featured: false
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-warm-light to-background">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 text-foreground">
            Our Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Photography tips, real wedding stories, and behind-the-scenes insights 
            from our team of professional photographers.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'All' && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-warm-primary font-medium text-sm uppercase tracking-wide">
                    Featured Post
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-foreground mt-2">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(featuredPost.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button className="bg-warm-primary hover:bg-warm-secondary text-white px-6 py-3 group">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full rounded-lg shadow-warm-lg hover:shadow-warm-md transition-shadow duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-warm-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-16 border-t border-border">
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

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-warm-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-warm-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-warm-primary hover:text-warm-secondary p-0 group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-warm-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-foreground">
              Stay Updated
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest photography tips, wedding inspiration, 
              and exclusive content from our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-warm-primary"
              />
              <Button className="bg-warm-primary hover:bg-warm-secondary text-white px-6 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-foreground">
            Ready to Create Your Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can capture your special moments with the same passion 
            and attention to detail you see in our work.
          </p>
          <Button className="bg-warm-primary hover:bg-warm-secondary text-white px-8 py-4 text-lg shadow-warm hover:shadow-warm-md">
            Book a Consultation
          </Button>
        </div>
      </section>
      
      <WhatsAppButton />
    </div>
  );
};

export default Blog;