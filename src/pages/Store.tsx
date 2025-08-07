import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShoppingBag, Search, Star, Filter, ShoppingCart, Heart, ArrowRight, Grid, List, SlidersHorizontal, Truck, Shield, RefreshCw, Headphones } from 'lucide-react';
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
  const [priceRange, setPriceRange] = useState([0, 350000]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid');

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

  let filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  // Sort products
  filteredProducts = filteredProducts.sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'name': return a.name.localeCompare(b.name);
      default: return b.reviews - a.reviews; // popular
    }
  });

  const addToCart = (productId: number) => {
    setCartItems(prev => prev + 1);
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
      
      {/* Hero Section - Jumia Style */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Shop Smart, Save More
              </h1>
              <p className="text-xl mb-6 text-orange-100">
                Best prices on phones, laptops, and more. Free delivery on orders over KSH 13,000
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
                  Shop Electronics
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                  View Deals
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Truck className="h-8 w-8 mx-auto mb-2 text-orange-200" />
                  <h3 className="font-semibold">Free Delivery</h3>
                  <p className="text-sm text-orange-100">Orders over KSH 13K</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <RefreshCw className="h-8 w-8 mx-auto mb-2 text-orange-200" />
                  <h3 className="font-semibold">Easy Returns</h3>
                  <p className="text-sm text-orange-100">30-day policy</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 py-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-orange-500 hover:bg-orange-600" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-6 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Sidebar Filters */}
            <div className="lg:w-1/4 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <SlidersHorizontal className="mr-2 h-5 w-5" />
                    Filters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Price Range */}
                  <div>
                    <h3 className="font-semibold mb-3">Price Range (KSH)</h3>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={350000}
                      min={0}
                      step={500}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>KSH {priceRange[0].toLocaleString()}</span>
                      <span>KSH {priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                  
                  {/* Rating Filter */}
                  <div>
                    <h3 className="font-semibold mb-3">Customer Rating</h3>
                    <div className="space-y-2">
                      {[4, 3, 2, 1].map((rating) => (
                        <Button key={rating} variant="ghost" size="sm" className="w-full justify-start">
                          <div className="flex items-center">
                            {[...Array(rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                            {[...Array(5-rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-gray-300" />
                            ))}
                            <span className="ml-2 text-sm">& above</span>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Search and Sort Bar */}
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search products..." 
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="name">Name A-Z</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="icon"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="icon"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="relative">
                    <ShoppingCart className="h-4 w-4" />
                    {cartItems > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-orange-500">
                        {cartItems}
                      </Badge>
                    )}
                  </Button>
                </div>
              </div>

              {/* Results Info */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  Showing {filteredProducts.length} products
                </p>
                {searchQuery && (
                  <Button variant="outline" size="sm" onClick={() => setSearchQuery('')}>
                    Clear search
                  </Button>
                )}
              </div>

              {/* Products Grid */}
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map((product) => (
                  <Card key={product.id} className={`group hover:shadow-lg transition-all duration-300 border-0 shadow-md ${
                    viewMode === 'list' ? 'flex flex-row overflow-hidden' : ''
                  }`}>
                    <div className={`relative overflow-hidden ${
                      viewMode === 'list' ? 'w-48 flex-shrink-0' : 'rounded-t-lg'
                    }`}>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                          viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'
                        }`}
                      />
                      <Badge 
                        className={`absolute top-3 left-3 ${
                          product.badge === 'Sale' ? 'bg-red-500' : 
                          product.badge === 'Hot' ? 'bg-orange-500' :
                          product.badge === 'New' ? 'bg-green-500' :
                          product.badge === 'Bestseller' ? 'bg-blue-500' : 'bg-gray-500'
                        }`}
                      >
                        {product.badge}
                      </Badge>
                      {product.originalPrice && (
                        <Badge className="absolute top-3 right-3 bg-red-500 text-white">
                          -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                        </Badge>
                      )}
                      <Button 
                        size="icon" 
                        variant="secondary" 
                        className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className={`${viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''}`}>
                      <CardContent className={`${viewMode === 'list' ? 'p-4 flex-1' : 'p-4'}`}>
                        <CardTitle className="text-lg mb-2 group-hover:text-orange-600 transition-colors">
                          {product.name}
                        </CardTitle>
                        <CardDescription className="mb-3 text-sm">
                          {product.description}
                        </CardDescription>
                        
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
                            ({product.reviews})
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-2 mb-4">
                          <span className="text-xl font-bold text-orange-600">
                            KSH {product.price.toLocaleString()}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              KSH {product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>

                        {!product.inStock && (
                          <Badge variant="destructive" className="mb-2">Out of Stock</Badge>
                        )}
                      </CardContent>
                      
                      <CardFooter className={`${viewMode === 'list' ? 'p-4 pt-0' : 'p-4 pt-0'}`}>
                        <div className="flex gap-2 w-full">
                          <Button 
                            className="flex-1 bg-orange-500 hover:bg-orange-600" 
                            onClick={() => addToCart(product.id)}
                            disabled={!product.inStock}
                          >
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                          </Button>
                          {viewMode === 'list' && (
                            <Button variant="outline" size="sm">
                              Quick View
                            </Button>
                          )}
                        </div>
                      </CardFooter>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Jumia Style */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="p-3 bg-orange-100 rounded-full">
                <Truck className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Free Delivery</h3>
                <p className="text-sm text-gray-600">Orders over KSH 13,000</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="p-3 bg-green-100 rounded-full">
                <RefreshCw className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Easy Returns</h3>
                <p className="text-sm text-gray-600">30-day return policy</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="p-3 bg-blue-100 rounded-full">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Secure Payment</h3>
                <p className="text-sm text-gray-600">100% secure checkout</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="p-3 bg-purple-100 rounded-full">
                <Headphones className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                <p className="text-sm text-gray-600">Always here to help</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Store;
