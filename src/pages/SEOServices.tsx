import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, TrendingUp, Target, BarChart3, Check, Star, ArrowRight } from 'lucide-react';

const SEOServices = () => {
  const plans = [
    {
      id: 'starter',
      name: 'SEO Starter',
      price: '$299',
      period: 'month',
      description: 'Perfect for small businesses starting their SEO journey',
      features: [
        'Keyword research (up to 20 keywords)',
        'On-page optimization (5 pages)',
        'Technical SEO audit',
        'Google My Business setup',
        'Monthly progress report',
        'Email support'
      ],
      popular: false
    },
    {
      id: 'growth',
      name: 'SEO Growth',
      price: '$599',
      period: 'month',
      description: 'Comprehensive SEO for growing businesses',
      features: [
        'Keyword research (up to 50 keywords)',
        'On-page optimization (15 pages)',
        'Content creation (4 articles/month)',
        'Link building (10 quality links)',
        'Competitor analysis',
        'Local SEO optimization',
        'Bi-weekly reports',
        'Phone + email support'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'SEO Enterprise',
      price: '$1,299',
      period: 'month',
      description: 'Complete SEO solution for large businesses',
      features: [
        'Unlimited keyword research',
        'Full website optimization',
        'Content creation (8 articles/month)',
        'Advanced link building (25+ links)',
        'Technical SEO maintenance',
        'E-commerce SEO',
        'Weekly reports & calls',
        'Dedicated account manager',
        'Custom strategy development'
      ],
      popular: false
    }
  ];

  const services = [
    {
      icon: Target,
      title: 'Keyword Research',
      description: 'Identify high-value keywords that your target audience is searching for'
    },
    {
      icon: TrendingUp,
      title: 'On-Page Optimization',
      description: 'Optimize your website content and structure for better search rankings'
    },
    {
      icon: BarChart3,
      title: 'Technical SEO',
      description: 'Fix technical issues that prevent search engines from crawling your site'
    },
    {
      icon: Search,
      title: 'Content Marketing',
      description: 'Create valuable content that attracts and engages your target audience'
    }
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
                <Search className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              SEO Optimization Services
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Boost your online visibility and drive organic traffic with our proven SEO strategies.
            </p>
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
              Get SEO Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our SEO Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive SEO solutions to help your business rank higher and attract more customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-all group">
                <CardHeader>
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">SEO Pricing Plans</h2>
            <p className="text-xl text-muted-foreground">
              Choose the plan that fits your business needs. All plans include monthly reporting.
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
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Proven Results</h2>
            <p className="text-xl text-muted-foreground">
              Our SEO strategies have helped businesses achieve remarkable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center shadow-soft">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-primary">150%</CardTitle>
                <CardDescription>Average traffic increase</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-soft">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-success">85%</CardTitle>
                <CardDescription>Clients rank on page 1</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-soft">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-primary">300+</CardTitle>
                <CardDescription>Successful projects</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-soft">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-success">90%</CardTitle>
                <CardDescription>Client retention rate</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Boost Your Rankings?</h2>
            <p className="text-xl text-white/90 mb-8">
              Get a free SEO audit and see how we can improve your search visibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
                Get Free SEO Audit
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-primary">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEOServices;