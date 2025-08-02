import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="OneStopOnline Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Your <span className="bg-gradient-hero bg-clip-text text-transparent">One-Stop</span><br />
              Digital Solution
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              From web development and SEO to medical services and e-commerce - 
              everything your business needs in one powerful platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="text-lg px-8 py-6 shadow-glow">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Explore Services
              </Button>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-soft border border-border/50">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Fast & Reliable</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Lightning-fast services with 99.9% uptime guarantee
                </p>
              </div>

              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-soft border border-border/50">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-success/10 rounded-lg">
                    <Shield className="h-6 w-6 text-success" />
                  </div>
                  <h3 className="font-semibold">Secure & Trusted</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Enterprise-grade security for all your data and transactions
                </p>
              </div>

              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-soft border border-border/50">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Global Reach</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Serving customers worldwide with local expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-success/20 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;