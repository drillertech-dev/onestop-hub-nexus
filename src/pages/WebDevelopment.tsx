import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Code, Check, Star, ArrowRight, Zap, Globe, Shield } from 'lucide-react';

const WebDevelopment = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const plans = [
    {
      id: 'basic',
      name: 'Basic Website',
      price: '$299',
      period: 'one-time',
      description: 'Perfect for small businesses and personal websites',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Contact form',
        'Basic SEO setup',
        '30 days support',
        '1 revision round'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Professional Website',
      price: '$799',
      period: 'one-time',
      description: 'Ideal for growing businesses with advanced features',
      features: [
        'Up to 15 pages',
        'Custom design',
        'CMS integration',
        'Advanced SEO',
        'E-commerce ready',
        '90 days support',
        '3 revision rounds',
        'Performance optimization'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise Solution',
      price: '$1,999',
      period: 'one-time',
      description: 'Complete solution for large businesses',
      features: [
        'Unlimited pages',
        'Custom functionality',
        'Database integration',
        'Advanced security',
        'API development',
        '1 year support',
        'Unlimited revisions',
        'Performance monitoring',
        'Custom admin panel'
      ],
      popular: false
    }
  ];

  const technologies = [
    { name: 'React.js', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Tailwind CSS', icon: '🎨' }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full">
                <Code className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Web Development Services
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Professional websites that drive results. From simple landing pages to complex web applications.
            </p>
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Development Services?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine cutting-edge technology with proven methodologies to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Optimized for speed with 95+ PageSpeed scores
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mx-auto mb-4">
                  <Globe className="h-8 w-8 text-success" />
                </div>
                <CardTitle>SEO Optimized</CardTitle>
                <CardDescription>
                  Built with SEO best practices from day one
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Secure & Reliable</CardTitle>
                <CardDescription>
                  Enterprise-grade security and 99.9% uptime
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Technologies */}
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold mb-8">Technologies We Use</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {technologies.map((tech, index) => (
                <Card key={index} className="p-6 text-center shadow-soft hover:shadow-medium transition-all">
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <p className="font-medium">{tech.name}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Choose Your Package</h2>
            <p className="text-xl text-muted-foreground">
              Transparent pricing with no hidden fees. All packages include hosting setup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`relative shadow-soft hover:shadow-medium transition-all ${
                  plan.popular ? 'border-primary scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a free consultation and detailed quote for your web development project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg">
                Get Free Quote
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;