import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Calendar, Video, Pill, Clock, Shield, Phone, ArrowRight } from 'lucide-react';

const MedicalServices = () => {
  const [selectedService, setSelectedService] = useState('consultation');

  const services = [
    {
      id: 'consultation',
      icon: Video,
      title: 'Online Consultation',
      price: '$50',
      description: 'Video consultation with licensed doctors',
      features: [
        '30-minute video call',
        'Medical prescription',
        'Follow-up included',
        'Available 24/7'
      ]
    },
    {
      id: 'appointment',
      icon: Calendar,
      title: 'In-Person Appointment',
      price: '$80',
      description: 'Physical examination at our clinic',
      features: [
        'Comprehensive examination',
        'Lab tests if needed',
        'Treatment plan',
        'Medical certificate'
      ]
    },
    {
      id: 'emergency',
      icon: Phone,
      title: 'Emergency Consultation',
      price: '$100',
      description: 'Immediate medical assistance',
      features: [
        'Immediate response',
        'Emergency treatment advice',
        'Hospital referral if needed',
        'Available 24/7'
      ]
    }
  ];

  const medicineCategories = [
    {
      name: 'Pain Relief',
      items: [
        { name: 'Paracetamol 500mg', price: '$5.99', description: '20 tablets' },
        { name: 'Ibuprofen 400mg', price: '$7.99', description: '30 tablets' },
        { name: 'Aspirin 75mg', price: '$4.99', description: '28 tablets' }
      ]
    },
    {
      name: 'Cold & Flu',
      items: [
        { name: 'Cold Relief Syrup', price: '$12.99', description: '100ml bottle' },
        { name: 'Throat Lozenges', price: '$6.99', description: '16 lozenges' },
        { name: 'Nasal Decongestant', price: '$8.99', description: '15ml spray' }
      ]
    },
    {
      name: 'Vitamins',
      items: [
        { name: 'Vitamin C 1000mg', price: '$15.99', description: '60 tablets' },
        { name: 'Multivitamin Complex', price: '$22.99', description: '90 tablets' },
        { name: 'Vitamin D3 2000IU', price: '$18.99', description: '120 capsules' }
      ]
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
                <Heart className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Medical Services
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Quality healthcare at your fingertips. Consultations, appointments, and medicine delivery.
            </p>
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
              Book Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Medical Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional healthcare services with licensed doctors and certified medical professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <Card 
                key={service.id} 
                className={`shadow-soft hover:shadow-medium transition-all cursor-pointer ${
                  selectedService === service.id ? 'border-primary' : ''
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-success" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-success">{service.price}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-success rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button className="w-full" variant={selectedService === service.id ? "default" : "outline"}>
                    Select Service
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>24/7 Availability</CardTitle>
                <CardDescription>
                  Medical assistance available round the clock
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mx-auto mb-4">
                  <Shield className="h-8 w-8 text-success" />
                </div>
                <CardTitle>Licensed Doctors</CardTitle>
                <CardDescription>
                  All consultations by certified medical professionals
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                  <Pill className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Medicine Delivery</CardTitle>
                <CardDescription>
                  Prescription medicines delivered to your door
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Appointment Booking Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-medium">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Book Your Appointment</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+254 123 456 789" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultation">Online Consultation</SelectItem>
                      <SelectItem value="appointment">In-Person Appointment</SelectItem>
                      <SelectItem value="emergency">Emergency Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Describe your symptoms or reason for appointment..."
                    rows={4}
                  />
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full" size="lg">
                  Book Appointment
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Medicine Store */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Online Medicine Store</h2>
            <p className="text-xl text-muted-foreground">
              Order your medicines online with fast, secure delivery
            </p>
          </div>

          {medicineCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-bold mb-6">{category.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="shadow-soft hover:shadow-medium transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                      <div className="mt-2">
                        <span className="text-2xl font-bold text-primary">{item.price}</span>
                      </div>
                    </CardHeader>
                    <CardFooter>
                      <Button className="w-full" variant="outline">
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MedicalServices;