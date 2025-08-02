import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              OneStopOnline.net
            </h3>
            <p className="text-accent-foreground/80 mb-4">
              Your comprehensive solution for web development, SEO, medical services, and online shopping.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-accent-foreground/60 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-accent-foreground/60 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-accent-foreground/60 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-accent-foreground/60 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/web-development" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/seo-services" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link to="/medical" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  Medical Services
                </Link>
              </li>
              <li>
                <Link to="/store" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  Online Store
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-accent-foreground/80 text-sm">info@onestopnline.net</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-accent-foreground/80 text-sm">+254 123 456 789</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-accent-foreground/80 text-sm">
                  Nairobi, Kenya<br />
                  East Africa
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center">
          <p className="text-accent-foreground/60 text-sm">
            &copy; 2024 OneStopOnline.net. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;