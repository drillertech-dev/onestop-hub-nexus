import { Code, Search, Heart, ShoppingBag, Laptop, Smartphone, Sofa, Pill } from 'lucide-react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Complete <span className="bg-gradient-primary bg-clip-text text-transparent">Digital Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything your business needs to thrive online - from development to healthcare, all in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              title="Web Development"
              description="Professional websites and web applications tailored to your business needs."
              features={[
                "Custom website design",
                "Responsive development",
                "E-commerce solutions",
                "SEO optimization",
                "Ongoing support"
              ]}
              icon={Code}
              buttonText="View Packages"
              href="/web-development"
            />

            <ServiceCard
              title="SEO Services"
              description="Boost your online visibility and drive more traffic to your website."
              features={[
                "Keyword research",
                "On-page optimization",
                "Content strategy",
                "Link building",
                "Analytics reporting"
              ]}
              icon={Search}
              buttonText="See Pricing"
              href="/seo-services"
            />

            <ServiceCard
              title="Medical Services"
              description="Convenient healthcare solutions with online consultations and medicine delivery."
              features={[
                "Online consultations",
                "Appointment booking",
                "Medicine ordering",
                "Health records",
                "Emergency support"
              ]}
              icon={Heart}
              buttonText="Book Appointment"
              buttonVariant="outline"
              href="/medical"
            />

            <ServiceCard
              title="Online Store"
              description="Shop for phones, laptops, furniture and more with fast, secure delivery."
              features={[
                "Phone accessories",
                "Laptops & electronics",
                "Furniture & home",
                "Secure payments",
                "Fast delivery"
              ]}
              icon={ShoppingBag}
              buttonText="Shop Now"
              buttonVariant="secondary"
              href="/store"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Featured Products</h2>
            <p className="text-xl text-muted-foreground">
              Discover our most popular items across all categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-soft hover:shadow-medium transition-all group hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-center">Phone Accessories</CardTitle>
                <CardDescription className="text-center">
                  Cases, chargers, headphones and more
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Browse Collection
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all group hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Laptop className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-center">Laptops</CardTitle>
                <CardDescription className="text-center">
                  High-performance laptops for work and gaming
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  View Laptops
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all group hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Sofa className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-center">Furniture</CardTitle>
                <CardDescription className="text-center">
                  Modern furniture for your home and office
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Shop Furniture
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all group hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-lg mx-auto mb-4 group-hover:bg-success/20 transition-colors">
                  <Pill className="h-8 w-8 text-success" />
                </div>
                <CardTitle className="text-center">Medicine</CardTitle>
                <CardDescription className="text-center">
                  Prescription and over-the-counter medicines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Order Medicine
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust OneStopOnline for all their digital needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;