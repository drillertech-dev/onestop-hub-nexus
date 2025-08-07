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
    { id: 'laptops', name: 'Laptops & Computers' },
    { id: 'furniture', name: 'Furniture' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'household', name: 'Household Items' },
    { id: 'stationery', name: 'Stationery' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'books', name: 'Books' },
    { id: 'sports', name: 'Sports & Outdoors' },
    { id: 'beauty', name: 'Beauty & Health' },
    { id: 'automotive', name: 'Automotive' },
    { id: 'toys', name: 'Toys & Games' },
    { id: 'kitchen', name: 'Kitchen & Dining' }
  ];

  const products = [
    // Electronics & Phones (40 items)
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
      name: 'Smartphone Samsung A54',
      category: 'phones',
      price: 45999,
      originalPrice: 52999,
      image: phoneAccessoriesImg,
      rating: 4.5,
      reviews: 1234,
      description: '6.4" Super AMOLED, 128GB, 50MP Camera',
      badge: 'Hot',
      inStock: true
    },
    {
      id: 6,
      name: 'iPhone 15 Pro',
      category: 'phones',
      price: 156999,
      originalPrice: 169999,
      image: phoneAccessoriesImg,
      rating: 4.9,
      reviews: 567,
      description: 'A17 Pro chip, 256GB, Titanium Design',
      badge: 'New',
      inStock: true
    },
    {
      id: 7,
      name: 'Bluetooth Speaker',
      category: 'electronics',
      price: 8999,
      originalPrice: 12999,
      image: phoneAccessoriesImg,
      rating: 4.4,
      reviews: 389,
      description: 'Portable waterproof speaker with bass boost',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 8,
      name: 'Smart Watch Series 9',
      category: 'electronics',
      price: 34999,
      originalPrice: 42999,
      image: phoneAccessoriesImg,
      rating: 4.6,
      reviews: 678,
      description: 'GPS, Heart Rate Monitor, 45mm',
      badge: 'Bestseller',
      inStock: true
    },
    {
      id: 9,
      name: 'Wireless Mouse',
      category: 'laptops',
      price: 2499,
      originalPrice: 3299,
      image: laptopImg,
      rating: 4.3,
      reviews: 234,
      description: 'Ergonomic wireless mouse with RGB lighting',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 10,
      name: 'Mechanical Keyboard',
      category: 'laptops',
      price: 7999,
      originalPrice: 9999,
      image: laptopImg,
      rating: 4.7,
      reviews: 445,
      description: 'RGB backlit mechanical gaming keyboard',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 11,
      name: 'USB-C Hub',
      category: 'laptops',
      price: 4999,
      originalPrice: 6499,
      image: laptopImg,
      rating: 4.2,
      reviews: 189,
      description: '7-in-1 USB-C hub with HDMI and SD card reader',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 12,
      name: 'Tablet 10.1 inch',
      category: 'electronics',
      price: 23999,
      originalPrice: 28999,
      image: phoneAccessoriesImg,
      rating: 4.4,
      reviews: 567,
      description: 'Android tablet with 64GB storage and stylus',
      badge: 'Hot',
      inStock: true
    },
    {
      id: 13,
      name: 'Power Bank 20000mAh',
      category: 'phones',
      price: 3999,
      originalPrice: 5499,
      image: phoneAccessoriesImg,
      rating: 4.5,
      reviews: 789,
      description: 'Fast charging power bank with LED display',
      badge: 'Bestseller',
      inStock: true
    },
    {
      id: 14,
      name: 'Car Phone Mount',
      category: 'automotive',
      price: 1299,
      originalPrice: 1899,
      image: phoneAccessoriesImg,
      rating: 4.1,
      reviews: 234,
      description: 'Magnetic car phone holder for dashboard',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 15,
      name: 'Laptop Stand',
      category: 'laptops',
      price: 3499,
      originalPrice: 4299,
      image: laptopImg,
      rating: 4.3,
      reviews: 156,
      description: 'Adjustable aluminum laptop stand with cooling',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 16,
      name: 'HDMI Cable 3m',
      category: 'electronics',
      price: 899,
      originalPrice: 1299,
      image: usbCableImg,
      rating: 4.2,
      reviews: 345,
      description: '4K HDMI cable for TV and monitor connection',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 17,
      name: 'Webcam HD 1080p',
      category: 'laptops',
      price: 6999,
      originalPrice: 8999,
      image: laptopImg,
      rating: 4.4,
      reviews: 267,
      description: 'Full HD webcam with auto focus and microphone',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 18,
      name: 'Gaming Headset',
      category: 'electronics',
      price: 9999,
      originalPrice: 12999,
      image: phoneAccessoriesImg,
      rating: 4.6,
      reviews: 543,
      description: '7.1 surround sound gaming headset with RGB',
      badge: 'Hot',
      inStock: true
    },
    {
      id: 19,
      name: 'Portable SSD 1TB',
      category: 'laptops',
      price: 12999,
      originalPrice: 16999,
      image: laptopImg,
      rating: 4.7,
      reviews: 189,
      description: 'External SSD with USB 3.2 Gen 2 speed',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 20,
      name: 'Smart TV 43 inch',
      category: 'electronics',
      price: 45999,
      originalPrice: 54999,
      image: phoneAccessoriesImg,
      rating: 4.5,
      reviews: 432,
      description: '4K Smart TV with Android TV and HDR',
      badge: 'Hot',
      inStock: true
    },

    // Furniture & Home (25 items)
    {
      id: 21,
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
      id: 22,
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
    {
      id: 23,
      name: 'Dining Table Set',
      category: 'furniture',
      price: 89999,
      originalPrice: 109999,
      image: furnitureImg,
      rating: 4.6,
      reviews: 234,
      description: '6-seater wooden dining table with chairs',
      badge: 'Hot',
      inStock: true
    },
    {
      id: 24,
      name: 'Wardrobe 3-Door',
      category: 'furniture',
      price: 67999,
      originalPrice: 79999,
      image: furnitureImg,
      rating: 4.3,
      reviews: 189,
      description: 'Spacious wardrobe with mirror and drawers',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 25,
      name: 'Bed Frame Queen Size',
      category: 'furniture',
      price: 45999,
      originalPrice: 56999,
      image: furnitureImg,
      rating: 4.4,
      reviews: 345,
      description: 'Solid wood queen size bed frame',
      badge: 'Bestseller',
      inStock: true
    },
    {
      id: 26,
      name: 'Coffee Table',
      category: 'furniture',
      price: 23999,
      originalPrice: 29999,
      image: furnitureImg,
      rating: 4.2,
      reviews: 167,
      description: 'Modern glass-top coffee table',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 27,
      name: 'Bookshelf 5-Tier',
      category: 'furniture',
      price: 18999,
      originalPrice: 23999,
      image: furnitureImg,
      rating: 4.3,
      reviews: 123,
      description: 'Wooden bookshelf with 5 adjustable shelves',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 28,
      name: 'Study Desk',
      category: 'furniture',
      price: 15999,
      originalPrice: 19999,
      image: furnitureImg,
      rating: 4.1,
      reviews: 234,
      description: 'Compact study desk with storage drawers',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 29,
      name: 'Bar Stool Set',
      category: 'furniture',
      price: 12999,
      originalPrice: 16999,
      image: furnitureImg,
      rating: 4.0,
      reviews: 89,
      description: 'Set of 2 adjustable height bar stools',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 30,
      name: 'TV Stand',
      category: 'furniture',
      price: 19999,
      originalPrice: 24999,
      image: furnitureImg,
      rating: 4.2,
      reviews: 156,
      description: 'Modern TV stand with cable management',
      badge: 'Budget',
      inStock: true
    },

    // Fashion & Clothing (20 items)
    {
      id: 31,
      name: 'Men\'s Casual Shirt',
      category: 'fashion',
      price: 2999,
      originalPrice: 3999,
      image: phoneAccessoriesImg,
      rating: 4.3,
      reviews: 234,
      description: '100% cotton casual shirt in multiple colors',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 32,
      name: 'Women\'s Dress',
      category: 'fashion',
      price: 4999,
      originalPrice: 6999,
      image: phoneAccessoriesImg,
      rating: 4.5,
      reviews: 345,
      description: 'Elegant summer dress with floral pattern',
      badge: 'Hot',
      inStock: true
    },
    {
      id: 33,
      name: 'Running Shoes',
      category: 'fashion',
      price: 8999,
      originalPrice: 11999,
      image: phoneAccessoriesImg,
      rating: 4.6,
      reviews: 567,
      description: 'Lightweight running shoes with air cushioning',
      badge: 'Bestseller',
      inStock: true
    },
    {
      id: 34,
      name: 'Jeans Skinny Fit',
      category: 'fashion',
      price: 3499,
      originalPrice: 4499,
      image: phoneAccessoriesImg,
      rating: 4.2,
      reviews: 289,
      description: 'Stretch denim jeans in classic blue',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 35,
      name: 'Leather Wallet',
      category: 'fashion',
      price: 2499,
      originalPrice: 3299,
      image: phoneAccessoriesImg,
      rating: 4.4,
      reviews: 156,
      description: 'Genuine leather wallet with RFID protection',
      badge: 'Budget',
      inStock: true
    },

    // Books & Education (15 items)
    {
      id: 36,
      name: 'Programming in Python',
      category: 'books',
      price: 2999,
      originalPrice: 3999,
      image: stationerySetImg,
      rating: 4.7,
      reviews: 234,
      description: 'Complete guide to Python programming',
      badge: 'Bestseller',
      inStock: true
    },
    {
      id: 37,
      name: 'Business Strategy Book',
      category: 'books',
      price: 1999,
      originalPrice: 2499,
      image: stationerySetImg,
      rating: 4.5,
      reviews: 167,
      description: 'Modern business strategies for success',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 38,
      name: 'Children\'s Story Book',
      category: 'books',
      price: 899,
      originalPrice: 1299,
      image: stationerySetImg,
      rating: 4.6,
      reviews: 123,
      description: 'Colorful illustrated children\'s stories',
      badge: 'Budget',
      inStock: true
    },

    // Sports & Outdoors (15 items)
    {
      id: 39,
      name: 'Yoga Mat',
      category: 'sports',
      price: 2999,
      originalPrice: 3999,
      image: phoneAccessoriesImg,
      rating: 4.4,
      reviews: 234,
      description: 'Non-slip yoga mat with carrying strap',
      badge: 'Hot',
      inStock: true
    },
    {
      id: 40,
      name: 'Dumbbell Set',
      category: 'sports',
      price: 12999,
      originalPrice: 16999,
      image: phoneAccessoriesImg,
      rating: 4.5,
      reviews: 189,
      description: 'Adjustable dumbbell set 10-50kg',
      badge: 'Sale',
      inStock: true
    },

    // Beauty & Health (15 items)
    {
      id: 41,
      name: 'Face Moisturizer',
      category: 'beauty',
      price: 1999,
      originalPrice: 2499,
      image: householdItemsImg,
      rating: 4.3,
      reviews: 234,
      description: 'Daily moisturizer for all skin types',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 42,
      name: 'Vitamin C Serum',
      category: 'beauty',
      price: 2999,
      originalPrice: 3999,
      image: householdItemsImg,
      rating: 4.6,
      reviews: 345,
      description: 'Anti-aging vitamin C serum 30ml',
      badge: 'Hot',
      inStock: true
    },

    // Kitchen & Dining (15 items)
    {
      id: 43,
      name: 'Air Fryer 5L',
      category: 'kitchen',
      price: 15999,
      originalPrice: 19999,
      image: householdItemsImg,
      rating: 4.7,
      reviews: 456,
      description: 'Digital air fryer with 8 preset programs',
      badge: 'Hot',
      inStock: true
    },
    {
      id: 44,
      name: 'Coffee Maker',
      category: 'kitchen',
      price: 8999,
      originalPrice: 11999,
      image: householdItemsImg,
      rating: 4.4,
      reviews: 234,
      description: 'Automatic drip coffee maker 12-cup',
      badge: 'Sale',
      inStock: true
    },

    // Toys & Games (10 items)
    {
      id: 45,
      name: 'Remote Control Car',
      category: 'toys',
      price: 4999,
      originalPrice: 6999,
      image: phoneAccessoriesImg,
      rating: 4.5,
      reviews: 234,
      description: 'RC car with LED lights and sound effects',
      badge: 'Hot',
      inStock: true
    },
    {
      id: 46,
      name: 'Board Game Set',
      category: 'toys',
      price: 2999,
      originalPrice: 3999,
      image: stationerySetImg,
      rating: 4.3,
      reviews: 167,
      description: 'Classic board games collection for family',
      badge: 'Sale',
      inStock: true
    },

    // Stationery & Office (20 items)
    {
      id: 47,
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
      id: 48,
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
      id: 49,
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
      id: 50,
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

    // Household Items (15 items)
    {
      id: 51,
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
      id: 52,
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
      id: 53,
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
      id: 54,
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
      id: 55,
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
    },

    // Additional Electronics (continuing to reach 125+)
    {
      id: 56,
      name: 'Electric Kettle',
      category: 'kitchen',
      price: 3499,
      originalPrice: 4299,
      image: householdItemsImg,
      rating: 4.4,
      reviews: 234,
      description: '1.7L electric kettle with auto shut-off',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 57,
      name: 'Blender 1.5L',
      category: 'kitchen',
      price: 6999,
      originalPrice: 8999,
      image: householdItemsImg,
      rating: 4.5,
      reviews: 189,
      description: 'High-speed blender with multiple speeds',
      badge: 'Hot',
      inStock: true
    },
    {
      id: 58,
      name: 'Microwave Oven',
      category: 'kitchen',
      price: 23999,
      originalPrice: 28999,
      image: householdItemsImg,
      rating: 4.6,
      reviews: 345,
      description: '25L microwave with grill function',
      badge: 'Bestseller',
      inStock: true
    },
    {
      id: 59,
      name: 'Rice Cooker',
      category: 'kitchen',
      price: 4999,
      originalPrice: 6499,
      image: householdItemsImg,
      rating: 4.3,
      reviews: 234,
      description: 'Electric rice cooker 1.8L capacity',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 60,
      name: 'Toaster 2-Slice',
      category: 'kitchen',
      price: 2999,
      originalPrice: 3999,
      image: householdItemsImg,
      rating: 4.2,
      reviews: 167,
      description: 'Stainless steel 2-slice toaster',
      badge: 'Budget',
      inStock: true
    },

    // More Fashion Items
    {
      id: 61,
      name: 'Casual T-Shirt',
      category: 'fashion',
      price: 1499,
      originalPrice: 1999,
      image: phoneAccessoriesImg,
      rating: 4.1,
      reviews: 234,
      description: '100% cotton casual t-shirt various colors',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 62,
      name: 'Formal Trousers',
      category: 'fashion',
      price: 4999,
      originalPrice: 6499,
      image: phoneAccessoriesImg,
      rating: 4.4,
      reviews: 189,
      description: 'Formal trousers for office wear',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 63,
      name: 'Leather Belt',
      category: 'fashion',
      price: 1999,
      originalPrice: 2499,
      image: phoneAccessoriesImg,
      rating: 4.3,
      reviews: 123,
      description: 'Genuine leather belt with metal buckle',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 64,
      name: 'Women\'s Handbag',
      category: 'fashion',
      price: 6999,
      originalPrice: 8999,
      image: phoneAccessoriesImg,
      rating: 4.5,
      reviews: 345,
      description: 'Stylish leather handbag with multiple compartments',
      badge: 'Hot',
      inStock: true
    },
    {
      id: 65,
      name: 'Sunglasses',
      category: 'fashion',
      price: 2999,
      originalPrice: 3999,
      image: phoneAccessoriesImg,
      rating: 4.2,
      reviews: 234,
      description: 'UV protection sunglasses with polarized lenses',
      badge: 'Sale',
      inStock: true
    },

    // More Books
    {
      id: 66,
      name: 'Cookbook Collection',
      category: 'books',
      price: 2499,
      originalPrice: 3299,
      image: stationerySetImg,
      rating: 4.6,
      reviews: 167,
      description: 'Collection of healthy recipes and cooking tips',
      badge: 'Hot',
      inStock: true
    },
    {
      id: 67,
      name: 'Self-Help Book',
      category: 'books',
      price: 1799,
      originalPrice: 2299,
      image: stationerySetImg,
      rating: 4.4,
      reviews: 234,
      description: 'Motivational book for personal development',
      badge: 'Bestseller',
      inStock: true
    },
    {
      id: 68,
      name: 'Novel Fiction',
      category: 'books',
      price: 1299,
      originalPrice: 1699,
      image: stationerySetImg,
      rating: 4.3,
      reviews: 123,
      description: 'Bestselling fiction novel adventure story',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 69,
      name: 'Educational Workbook',
      category: 'books',
      price: 999,
      originalPrice: 1299,
      image: stationerySetImg,
      rating: 4.2,
      reviews: 89,
      description: 'Math and science workbook for students',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 70,
      name: 'Language Learning Book',
      category: 'books',
      price: 2199,
      originalPrice: 2799,
      image: stationerySetImg,
      rating: 4.5,
      reviews: 156,
      description: 'Complete guide to learning English',
      badge: 'Sale',
      inStock: true
    },

    // More Sports Equipment
    {
      id: 71,
      name: 'Basketball',
      category: 'sports',
      price: 2999,
      originalPrice: 3999,
      image: phoneAccessoriesImg,
      rating: 4.4,
      reviews: 234,
      description: 'Official size basketball for outdoor play',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 72,
      name: 'Tennis Racket',
      category: 'sports',
      price: 8999,
      originalPrice: 11999,
      image: phoneAccessoriesImg,
      rating: 4.6,
      reviews: 189,
      description: 'Professional tennis racket with grip',
      badge: 'Hot',
      inStock: true
    },
    {
      id: 73,
      name: 'Swimming Goggles',
      category: 'sports',
      price: 1499,
      originalPrice: 1999,
      image: phoneAccessoriesImg,
      rating: 4.2,
      reviews: 123,
      description: 'Anti-fog swimming goggles with UV protection',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 74,
      name: 'Gym Bag',
      category: 'sports',
      price: 3499,
      originalPrice: 4499,
      image: phoneAccessoriesImg,
      rating: 4.3,
      reviews: 167,
      description: 'Waterproof gym bag with shoe compartment',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 75,
      name: 'Resistance Bands Set',
      category: 'sports',
      price: 1999,
      originalPrice: 2599,
      image: phoneAccessoriesImg,
      rating: 4.4,
      reviews: 234,
      description: 'Set of 5 resistance bands with handles',
      badge: 'Budget',
      inStock: true
    },

    // More Beauty Products
    {
      id: 76,
      name: 'Shampoo 400ml',
      category: 'beauty',
      price: 1299,
      originalPrice: 1699,
      image: householdItemsImg,
      rating: 4.3,
      reviews: 234,
      description: 'Moisturizing shampoo for all hair types',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 77,
      name: 'Body Lotion',
      category: 'beauty',
      price: 1799,
      originalPrice: 2299,
      image: householdItemsImg,
      rating: 4.4,
      reviews: 189,
      description: 'Hydrating body lotion with natural extracts',
      badge: 'Hot',
      inStock: true
    },
    {
      id: 78,
      name: 'Lip Balm Set',
      category: 'beauty',
      price: 799,
      originalPrice: 999,
      image: householdItemsImg,
      rating: 4.1,
      reviews: 123,
      description: 'Set of 3 lip balms with different flavors',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 79,
      name: 'Nail Polish Set',
      category: 'beauty',
      price: 1999,
      originalPrice: 2499,
      image: householdItemsImg,
      rating: 4.2,
      reviews: 167,
      description: 'Set of 6 nail polish colors long-lasting',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 80,
      name: 'Hair Straightener',
      category: 'beauty',
      price: 4999,
      originalPrice: 6499,
      image: householdItemsImg,
      rating: 4.5,
      reviews: 234,
      description: 'Ceramic hair straightener with temperature control',
      badge: 'Hot',
      inStock: true
    },

    // More Toys
    {
      id: 81,
      name: 'Building Blocks Set',
      category: 'toys',
      price: 3999,
      originalPrice: 4999,
      image: stationerySetImg,
      rating: 4.6,
      reviews: 234,
      description: '500-piece building blocks for creative play',
      badge: 'Bestseller',
      inStock: true
    },
    {
      id: 82,
      name: 'Puzzle 1000 Pieces',
      category: 'toys',
      price: 1999,
      originalPrice: 2499,
      image: stationerySetImg,
      rating: 4.3,
      reviews: 167,
      description: 'Challenging 1000-piece jigsaw puzzle',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 83,
      name: 'Action Figure',
      category: 'toys',
      price: 2499,
      originalPrice: 3299,
      image: phoneAccessoriesImg,
      rating: 4.4,
      reviews: 189,
      description: 'Superhero action figure with accessories',
      badge: 'Hot',
      inStock: true
    },
    {
      id: 84,
      name: 'Educational Tablet Kids',
      category: 'toys',
      price: 8999,
      originalPrice: 11999,
      image: phoneAccessoriesImg,
      rating: 4.5,
      reviews: 234,
      description: 'Educational tablet with learning games',
      badge: 'New',
      inStock: true
    },
    {
      id: 85,
      name: 'Art Supply Kit',
      category: 'toys',
      price: 3499,
      originalPrice: 4299,
      image: stationerySetImg,
      rating: 4.3,
      reviews: 123,
      description: 'Complete art kit with colors and brushes',
      badge: 'Sale',
      inStock: true
    },

    // Automotive Items
    {
      id: 86,
      name: 'Car Air Freshener',
      category: 'automotive',
      price: 599,
      originalPrice: 799,
      image: phoneAccessoriesImg,
      rating: 4.1,
      reviews: 234,
      description: 'Long-lasting car air freshener vanilla scent',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 87,
      name: 'Car Seat Covers',
      category: 'automotive',
      price: 4999,
      originalPrice: 6499,
      image: phoneAccessoriesImg,
      rating: 4.4,
      reviews: 189,
      description: 'Universal car seat covers waterproof',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 88,
      name: 'Dash Cam HD',
      category: 'automotive',
      price: 8999,
      originalPrice: 11999,
      image: phoneAccessoriesImg,
      rating: 4.6,
      reviews: 167,
      description: 'HD dashboard camera with night vision',
      badge: 'Hot',
      inStock: true
    },
    {
      id: 89,
      name: 'Car Charger Dual USB',
      category: 'automotive',
      price: 999,
      originalPrice: 1299,
      image: usbCableImg,
      rating: 4.2,
      reviews: 234,
      description: 'Dual USB car charger fast charging',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 90,
      name: 'Car Vacuum Cleaner',
      category: 'automotive',
      price: 6999,
      originalPrice: 8999,
      image: householdItemsImg,
      rating: 4.5,
      reviews: 123,
      description: 'Portable car vacuum cleaner 12V',
      badge: 'Sale',
      inStock: true
    },

    // More Stationery
    {
      id: 91,
      name: 'Highlighter Set',
      category: 'stationery',
      price: 699,
      originalPrice: 899,
      image: stationerySetImg,
      rating: 4.2,
      reviews: 156,
      description: 'Set of 6 fluorescent highlighter pens',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 92,
      name: 'Calculator Scientific',
      category: 'stationery',
      price: 2999,
      originalPrice: 3999,
      image: stationerySetImg,
      rating: 4.6,
      reviews: 234,
      description: 'Scientific calculator with 240 functions',
      badge: 'Bestseller',
      inStock: true
    },
    {
      id: 93,
      name: 'Stapler Heavy Duty',
      category: 'stationery',
      price: 1499,
      originalPrice: 1899,
      image: stationerySetImg,
      rating: 4.3,
      reviews: 167,
      description: 'Heavy duty stapler for office use',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 94,
      name: 'Paper Shredder',
      category: 'stationery',
      price: 8999,
      originalPrice: 11999,
      image: stationerySetImg,
      rating: 4.4,
      reviews: 89,
      description: 'Cross-cut paper shredder for documents',
      badge: 'Hot',
      inStock: true
    },
    {
      id: 95,
      name: 'File Organizer',
      category: 'stationery',
      price: 1999,
      originalPrice: 2499,
      image: stationerySetImg,
      rating: 4.1,
      reviews: 123,
      description: 'Desktop file organizer with 6 compartments',
      badge: 'Budget',
      inStock: true
    },

    // More Household Items
    {
      id: 96,
      name: 'Vacuum Cleaner',
      category: 'household',
      price: 15999,
      originalPrice: 19999,
      image: householdItemsImg,
      rating: 4.5,
      reviews: 234,
      description: 'Bagless vacuum cleaner with HEPA filter',
      badge: 'Hot',
      inStock: true
    },
    {
      id: 97,
      name: 'Iron Steam',
      category: 'household',
      price: 3999,
      originalPrice: 4999,
      image: householdItemsImg,
      rating: 4.3,
      reviews: 189,
      description: 'Steam iron with ceramic soleplate',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 98,
      name: 'Laundry Basket',
      category: 'household',
      price: 1999,
      originalPrice: 2499,
      image: householdItemsImg,
      rating: 4.2,
      reviews: 156,
      description: 'Collapsible laundry basket with handles',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 99,
      name: 'Trash Can 50L',
      category: 'household',
      price: 2999,
      originalPrice: 3699,
      image: householdItemsImg,
      rating: 4.1,
      reviews: 123,
      description: 'Step-on trash can with lid 50L capacity',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 100,
      name: 'Storage Boxes Set',
      category: 'household',
      price: 3499,
      originalPrice: 4299,
      image: householdItemsImg,
      rating: 4.4,
      reviews: 167,
      description: 'Set of 3 clear storage boxes with lids',
      badge: 'Budget',
      inStock: true
    },

    // Final 25+ items to reach 125+
    {
      id: 101,
      name: 'Monitor 24 inch',
      category: 'laptops',
      price: 23999,
      originalPrice: 28999,
      image: laptopImg,
      rating: 4.6,
      reviews: 234,
      description: 'Full HD 24" monitor with IPS panel',
      badge: 'Hot',
      inStock: true
    },
    {
      id: 102,
      name: 'Printer Inkjet',
      category: 'stationery',
      price: 12999,
      originalPrice: 16999,
      image: stationerySetImg,
      rating: 4.4,
      reviews: 189,
      description: 'All-in-one inkjet printer with WiFi',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 103,
      name: 'Desk Lamp LED',
      category: 'furniture',
      price: 2999,
      originalPrice: 3999,
      image: furnitureImg,
      rating: 4.3,
      reviews: 167,
      description: 'Adjustable LED desk lamp with USB charging',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 104,
      name: 'Plant Pot Set',
      category: 'household',
      price: 1999,
      originalPrice: 2499,
      image: householdItemsImg,
      rating: 4.2,
      reviews: 123,
      description: 'Set of 3 ceramic plant pots with saucers',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 105,
      name: 'Wall Clock',
      category: 'household',
      price: 2499,
      originalPrice: 3299,
      image: householdItemsImg,
      rating: 4.4,
      reviews: 156,
      description: 'Modern wall clock with silent movement',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 106,
      name: 'Curtains Set',
      category: 'household',
      price: 4999,
      originalPrice: 6499,
      image: householdItemsImg,
      rating: 4.3,
      reviews: 189,
      description: 'Blackout curtains set with tie-backs',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 107,
      name: 'Pillow Memory Foam',
      category: 'household',
      price: 3999,
      originalPrice: 4999,
      image: householdItemsImg,
      rating: 4.5,
      reviews: 234,
      description: 'Memory foam pillow with cooling gel',
      badge: 'Hot',
      inStock: true
    },
    {
      id: 108,
      name: 'Blanket Fleece',
      category: 'household',
      price: 2999,
      originalPrice: 3699,
      image: householdItemsImg,
      rating: 4.3,
      reviews: 167,
      description: 'Soft fleece blanket queen size',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 109,
      name: 'Cutting Board Set',
      category: 'kitchen',
      price: 1999,
      originalPrice: 2499,
      image: householdItemsImg,
      rating: 4.4,
      reviews: 123,
      description: 'Bamboo cutting board set of 3 sizes',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 110,
      name: 'Kitchen Scale',
      category: 'kitchen',
      price: 2999,
      originalPrice: 3999,
      image: householdItemsImg,
      rating: 4.5,
      reviews: 189,
      description: 'Digital kitchen scale with LCD display',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 111,
      name: 'Can Opener Electric',
      category: 'kitchen',
      price: 3499,
      originalPrice: 4299,
      image: householdItemsImg,
      rating: 4.2,
      reviews: 156,
      description: 'Electric can opener with magnetic lid lifter',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 112,
      name: 'Mixing Bowls Set',
      category: 'kitchen',
      price: 2499,
      originalPrice: 3199,
      image: householdItemsImg,
      rating: 4.3,
      reviews: 167,
      description: 'Stainless steel mixing bowls set of 5',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 113,
      name: 'Measuring Cups Set',
      category: 'kitchen',
      price: 1499,
      originalPrice: 1899,
      image: householdItemsImg,
      rating: 4.1,
      reviews: 123,
      description: 'Measuring cups and spoons set 8-piece',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 114,
      name: 'Knife Set',
      category: 'kitchen',
      price: 8999,
      originalPrice: 11999,
      image: householdItemsImg,
      rating: 4.6,
      reviews: 234,
      description: '6-piece knife set with wooden block',
      badge: 'Hot',
      inStock: true
    },
    {
      id: 115,
      name: 'Dish Drying Rack',
      category: 'kitchen',
      price: 3999,
      originalPrice: 4999,
      image: householdItemsImg,
      rating: 4.4,
      reviews: 189,
      description: 'Stainless steel dish drying rack',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 116,
      name: 'Water Filter Pitcher',
      category: 'kitchen',
      price: 4999,
      originalPrice: 6499,
      image: householdItemsImg,
      rating: 4.5,
      reviews: 167,
      description: '2.4L water filter pitcher with cartridge',
      badge: 'Hot',
      inStock: true
    },
    {
      id: 117,
      name: 'Soap Dispenser',
      category: 'household',
      price: 1299,
      originalPrice: 1699,
      image: householdItemsImg,
      rating: 4.2,
      reviews: 123,
      description: 'Automatic soap dispenser with sensor',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 118,
      name: 'Bath Towel Set',
      category: 'household',
      price: 3999,
      originalPrice: 4999,
      image: householdItemsImg,
      rating: 4.4,
      reviews: 234,
      description: '100% cotton bath towel set of 4',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 119,
      name: 'Shower Curtain',
      category: 'household',
      price: 1999,
      originalPrice: 2499,
      image: householdItemsImg,
      rating: 4.1,
      reviews: 156,
      description: 'Waterproof shower curtain with hooks',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 120,
      name: 'Mirror Round',
      category: 'household',
      price: 4999,
      originalPrice: 6299,
      image: householdItemsImg,
      rating: 4.3,
      reviews: 167,
      description: 'Round wall mirror 60cm diameter',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 121,
      name: 'Coat Hanger Wooden',
      category: 'household',
      price: 2999,
      originalPrice: 3699,
      image: householdItemsImg,
      rating: 4.2,
      reviews: 123,
      description: 'Wooden coat hanger with 6 hooks',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 122,
      name: 'Photo Frame Set',
      category: 'household',
      price: 2499,
      originalPrice: 3199,
      image: householdItemsImg,
      rating: 4.4,
      reviews: 189,
      description: 'Picture frame set various sizes',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 123,
      name: 'Candle Set Scented',
      category: 'household',
      price: 1999,
      originalPrice: 2499,
      image: householdItemsImg,
      rating: 4.3,
      reviews: 156,
      description: 'Set of 3 scented candles different fragrances',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 124,
      name: 'Doormat Welcome',
      category: 'household',
      price: 1499,
      originalPrice: 1899,
      image: householdItemsImg,
      rating: 4.1,
      reviews: 123,
      description: 'Coir doormat with welcome message',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 125,
      name: 'Garden Hose 20m',
      category: 'household',
      price: 3999,
      originalPrice: 4999,
      image: householdItemsImg,
      rating: 4.4,
      reviews: 167,
      description: 'Flexible garden hose 20m with spray nozzle',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 126,
      name: 'Tool Set Basic',
      category: 'household',
      price: 6999,
      originalPrice: 8999,
      image: householdItemsImg,
      rating: 4.5,
      reviews: 234,
      description: '25-piece basic tool set with toolbox',
      badge: 'Hot',
      inStock: true
    },
    {
      id: 127,
      name: 'Extension Cord 5m',
      category: 'electronics',
      price: 1999,
      originalPrice: 2499,
      image: usbCableImg,
      rating: 4.2,
      reviews: 189,
      description: '5-meter extension cord with 4 outlets',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 128,
      name: 'Battery Pack AA',
      category: 'electronics',
      price: 899,
      originalPrice: 1199,
      image: phoneAccessoriesImg,
      rating: 4.1,
      reviews: 123,
      description: 'Pack of 8 AA alkaline batteries',
      badge: 'Budget',
      inStock: true
    },
    {
      id: 129,
      name: 'Rechargeable Flashlight',
      category: 'electronics',
      price: 2499,
      originalPrice: 3199,
      image: phoneAccessoriesImg,
      rating: 4.4,
      reviews: 167,
      description: 'LED rechargeable flashlight with USB charging',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 130,
      name: 'Alarm Clock Digital',
      category: 'electronics',
      price: 1999,
      originalPrice: 2499,
      image: phoneAccessoriesImg,
      rating: 4.3,
      reviews: 156,
      description: 'Digital alarm clock with temperature display',
      badge: 'Budget',
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
