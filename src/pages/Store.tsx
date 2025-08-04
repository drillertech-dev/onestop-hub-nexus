import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShoppingBag, Search, Star, Filter, ShoppingCart, Heart, ArrowRight } from 'lucide-react';
import phoneAccessoriesImg from '@/assets/phone-accessories.jpg';
import laptopImg from '@/assets/laptop.jpg';
import furnitureImg from '@/assets/furniture.jpg';
import basicPhoneCaseImg from '@/assets/basic-phone-case.jpg';
import usbCableImg from '@/assets/usb-cable.jpg';
import stationerySetImg from '@/assets/stationery-set.jpg';
import householdItemsImg from '@/assets/household-items.jpg';

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState(0);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'phones', name: 'Phone Accessories' },
    { id: 'laptops', name: 'Laptops' },
    { id: 'furniture', name: 'Furniture' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'household', name: 'Household Items' },
    { id: 'stationery', name: 'Stationery' }
  ];

  const products = [
    // Existing premium products (converted to KSH)
    {
      id: 1,
      name: 'Wireless Earbuds Pro',
      category: 'phones',
      price: 16899,
      originalPrice: 23399,
      image: phoneAccessoriesImg,
      rating: 4.8,
      reviews: 1024,
      description: 'Premium wireless earbuds with noise cancellation',
      badge: 'Bestseller',
      inStock: true
    },
    {
      id: 2,
      name: 'Premium Phone Case',
      category: 'phones',
      price: 3249,
      originalPrice: 4549,
      image: phoneAccessoriesImg,
      rating: 4.6,
      reviews: 523,
      description: 'Protective case with military-grade protection',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 3,
      name: 'MacBook Pro 16"',
      category: 'laptops',
      price: 311999,
      originalPrice: 337999,
      image: laptopImg,
      rating: 4.9,
      reviews: 2847,
      description: 'Apple M2 Pro chip, 32GB RAM, 1TB SSD',
      badge: 'Hot',
      inStock: true
    },
    {
      id: 4,
      name: 'Gaming Laptop',
      category: 'laptops',
      price: 168999,
      originalPrice: 194999,
      image: laptopImg,
      rating: 4.7,
      reviews: 891,
      description: 'RTX 4060, Intel i7, 16GB RAM, 512GB SSD',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 5,
      name: 'Modern Sofa Set',
      category: 'furniture',
      price: 116999,
      originalPrice: 155999,
      image: furnitureImg,
      rating: 4.5,
      reviews: 342,
      description: '3-seater sofa with premium fabric upholstery',
      badge: 'New',
      inStock: true
    },
    {
      id: 6,
      name: 'Office Chair',
      category: 'furniture',
      price: 32499,
      originalPrice: 38999,
      image: furnitureImg,
      rating: 4.4,
      reviews: 567,
      description: 'Ergonomic office chair with lumbar support',
      badge: 'Sale',
      inStock: false
    },
    // New affordable products in KSH
    {
      id: 7,
      name: 'Basic Phone Case',
      category: 'phones',
      price: 650,
      originalPrice: 899,
      image: basicPhoneCaseImg,
      rating: 4.2,
      reviews: 184,
      description: 'Simple protective phone case for daily use',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 8,
      name: 'USB Charging Cable',
      category: 'phones',
      price: 390,
      originalPrice: 520,
      image: usbCableImg,
      rating: 4.3,
      reviews: 267,
      description: 'Fast charging USB cable - 1 meter length',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 9,
      name: 'Stationery Set',
      category: 'stationery',
      price: 1299,
      originalPrice: 1699,
      image: stationerySetImg,
      rating: 4.5,
      reviews: 89,
      description: 'Complete stationery set with pens, pencils & more',
      badge: 'New',
      inStock: true
    },
    {
      id: 10,
      name: 'Notebook Set (5 pieces)',
      category: 'stationery',
      price: 780,
      originalPrice: 999,
      image: stationerySetImg,
      rating: 4.1,
      reviews: 156,
      description: 'A5 lined notebooks perfect for school or office',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 11,
      name: 'Cleaning Supplies Kit',
      category: 'household',
      price: 2599,
      originalPrice: 3299,
      image: householdItemsImg,
      rating: 4.4,
      reviews: 203,
      description: 'Essential cleaning supplies for your home',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 12,
      name: 'Dish Soap (1L)',
      category: 'household',
      price: 299,
      originalPrice: 399,
      image: householdItemsImg,
      rating: 4.0,
      reviews: 78,
      description: 'Effective dish soap for sparkling clean dishes',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 13,
      name: 'Phone Screen Protector',
      category: 'phones',
      price: 520,
      originalPrice: 780,
      image: basicPhoneCaseImg,
      rating: 4.3,
      reviews: 312,
      description: 'Tempered glass screen protector',
      badge: 'Bestseller',
      inStock: true
    },
    {
      id: 14,
      name: 'Ballpoint Pens (Pack of 10)',
      category: 'stationery',
      price: 450,
      originalPrice: 650,
      image: stationerySetImg,
      rating: 4.2,
      reviews: 134,
      description: 'Smooth writing ballpoint pens in blue ink',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 15,
      name: 'Hand Sanitizer (500ml)',
      category: 'household',
      price: 650,
      originalPrice: 899,
      image: householdItemsImg,
      rating: 4.6,
      reviews: 245,
      description: '70% alcohol hand sanitizer with aloe vera',
      badge: 'Hot',
      inStock: true
    }
  ];

  const featuredProducts = products.filter(p => ['Bestseller', 'Hot', 'New'].includes(p.badge));

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (productId: number) => {
    setCartItems(prev => prev + 1);
    // Here you would typically add the product to a cart state or context
  };

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case 'Bestseller': return 'default';
      case 'Hot': return 'destructive';
      case 'New': return 'secondary';
      case 'Sale': return 'outline';
      case 'Budget': return 'secondary';
      default: return 'default';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full">
                <ShoppingBag className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Online Store
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discover amazing products from phones and laptops to furniture and more. Free shipping on orders over KSH 13,000.
            </p>
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search products..." 
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-4 w-4" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Featured Products</h2>
            <p className="text-xl text-muted-foreground">
              Hand-picked products that our customers love the most
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="shadow-soft hover:shadow-medium transition-all group">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge 
                      className="absolute top-3 left-3" 
                      variant={getBadgeVariant(product.badge)}
                    >
                      {product.badge}
                    </Badge>
                    <Button 
                      size="icon" 
                      variant="secondary" 
                      className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                  <CardDescription className="mb-3">{product.description}</CardDescription>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">KSH {product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        KSH {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0">
                  <Button 
                    className="w-full" 
                    onClick={() => addToCart(product.id)}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">All Products</h2>
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="shadow-soft hover:shadow-medium transition-all group">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge 
                      className="absolute top-3 left-3" 
                      variant={getBadgeVariant(product.badge)}
                    >
                      {product.badge}
                    </Badge>
                    <Button 
                      size="icon" 
                      variant="secondary" 
                      className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                  <CardDescription className="mb-3">{product.description}</CardDescription>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">KSH {product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        KSH {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0">
                  <Button 
                    className="w-full" 
                    onClick={() => addToCart(product.id)}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Free Shipping</CardTitle>
                <CardDescription>On orders over KSH 13,000</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Secure Payment</CardTitle>
                <CardDescription>M-Pesa & Card payments</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Fast Delivery</CardTitle>
                <CardDescription>2-3 business days</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Easy Returns</CardTitle>
                <CardDescription>30-day return policy</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Store;