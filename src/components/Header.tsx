import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingCart, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            OneStopOnline.net
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/web-development" className="text-foreground hover:text-primary transition-colors">
              Web Development
            </Link>
            <Link to="/seo-services" className="text-foreground hover:text-primary transition-colors">
              SEO Services
            </Link>
            <Link to="/medical" className="text-foreground hover:text-primary transition-colors">
              Medical Services
            </Link>
            <Link to="/store" className="text-foreground hover:text-primary transition-colors">
              Online Store
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/web-development"
                className="text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Web Development
              </Link>
              <Link
                to="/seo-services"
                className="text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                SEO Services
              </Link>
              <Link
                to="/medical"
                className="text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Medical Services
              </Link>
              <Link
                to="/store"
                className="text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Online Store
              </Link>
              <div className="flex items-center space-x-2 pt-2">
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
                <Button className="flex-1">Get Started</Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;