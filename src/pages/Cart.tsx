import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft, CreditCard, MessageCircle, Phone } from 'lucide-react';
import phoneAccessoriesImg from '@/assets/phone-accessories.jpg';
import laptopImg from '@/assets/laptop.jpg';
import furnitureImg from '@/assets/furniture.jpg';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Wireless Earbuds Pro',
      price: 16899,
      quantity: 2,
      image: phoneAccessoriesImg,
      inStock: true
    },
    {
      id: 2,
      name: 'MacBook Pro 16"',
      price: 311999,
      quantity: 1,
      image: laptopImg,
      inStock: true
    },
    {
      id: 3,
      name: 'Modern Sofa Set',
      price: 116999,
      quantity: 1,
      image: furnitureImg,
      inStock: true
    }
  ]);

  const [promoCode, setPromoCode] = useState('');

  const proceedToCheckout = () => {
    alert('Redirecting to secure M-Pesa checkout...');
  };

  const contactWhatsApp = () => {
    const message = `Hi! I'm interested in purchasing items from my cart:\n\n${cartItems.map(item => `- ${item.name} (Qty: ${item.quantity}) - KSH ${(item.price * item.quantity).toLocaleString()}`).join('\n')}\n\nTotal: KSH ${total.toLocaleString()}\n\nPlease help me complete this order.`;
    const whatsappUrl = `https://wa.me/254710980500?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 13000 ? 0 : 500;
  const discount = promoCode === 'SAVE10' ? subtotal * 0.1 : 0;
  const total = subtotal + shipping - discount;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full">
                <ShoppingCart className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Shopping Cart
            </h1>
            <p className="text-lg text-white/90">
              Review your items and proceed to checkout
            </p>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingCart className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">Add some products to get started</p>
              <Button size="lg">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-2xl">Cart Items ({cartItems.length})</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex flex-col sm:flex-row gap-4 p-4 border border-border rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full sm:w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                          <p className="text-2xl font-bold text-primary mb-3">KSH {item.price.toLocaleString()}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-12 text-center font-semibold">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => removeItem(item.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold">
                            KSH {(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Button variant="outline" className="mt-6">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Button>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="shadow-soft sticky top-4">
                  <CardHeader>
                    <CardTitle className="text-xl">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>KSH {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? 'Free' : `KSH ${shipping.toLocaleString()}`}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span>-KSH {discount.toLocaleString()}</span>
                      </div>
                    )}
                    
                    <Separator />
                    
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>KSH {total.toLocaleString()}</span>
                    </div>

                    {/* Promo Code */}
                    <div className="pt-4">
                      <label className="text-sm font-medium mb-2 block">Promo Code</label>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Enter code"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                        />
                        <Button variant="outline">Apply</Button>
                      </div>
                      {promoCode === 'SAVE10' && (
                        <p className="text-sm text-green-600 mt-1">10% discount applied!</p>
                      )}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex flex-col space-y-3">
                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={proceedToCheckout}
                    >
                      <CreditCard className="mr-2 h-5 w-5" />
                      Proceed to Checkout
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      size="lg"
                      onClick={contactWhatsApp}
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Order via WhatsApp
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      Secure checkout with M-Pesa payment
                    </p>
                  </CardFooter>
                </Card>

                {/* Benefits */}
                <Card className="mt-6 shadow-soft">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Why shop with us?</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Free shipping on orders over KSH 13,000</li>
                      <li>✓ 30-day return policy</li>
                      <li>✓ Secure M-Pesa payments</li>
                      <li>✓ Fast 2-3 day delivery</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;