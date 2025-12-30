import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Star, Shield, Truck, Clock } from "lucide-react";

const Index = () => {
  // Featured watches data (will be replaced with Supabase data later)
  const featuredWatches = [
    {
      id: 1,
      name: "Classic Elegance",
      price: 2500,
      discountPrice: 1999,
      image: "https://images.unsplash.com/photo-1581063683670-6df2247f1d8e?w=400&auto=format&fit=crop&q=80",
      inStock: true
    },
    {
      id: 2,
      name: "Modern Luxury",
      price: 3200,
      discountPrice: null,
      image: "https://images.unsplash.com/photo-1574607304075-f7f22632aa64?w=400&auto=format&fit=crop&q=80",
      inStock: true
    },
    {
      id: 3,
      name: "Sport Edition",
      price: 1800,
      discountPrice: 1499,
      image: "https://images.unsplash.com/photo-1589959320097-04f13ffc34a1?w=400&auto=format&fit=crop&q=80",
      inStock: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Premium Collection 2024
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Time Redefined with
                  <span className="text-gradient block">TimeWay</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Discover our exclusive collection of luxury watches. Crafted with precision, 
                  designed for the modern lifestyle. Cash on delivery available across Morocco.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="luxury-gradient shadow-luxury">
                  <Link to="/watches">
                    Explore Collection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1526743655626-e3d757b13d61?w=600&auto=format&fit=crop&q=80"
                  alt="TimeWay Luxury Watches"
                  className="w-full h-auto rounded-2xl shadow-elegant"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose TimeWay?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering exceptional quality and service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 card-gradient shadow-card transition-luxury hover:shadow-elegant">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Cash on Delivery</h3>
                <p className="text-muted-foreground">
                  Pay when you receive your watch. Safe and secure delivery across Morocco.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 card-gradient shadow-card transition-luxury hover:shadow-elegant">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Quality Guarantee</h3>
                <p className="text-muted-foreground">
                  Every TimeWay watch comes with our premium quality assurance.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 card-gradient shadow-card transition-luxury hover:shadow-elegant">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Premium Design</h3>
                <p className="text-muted-foreground">
                  Elegant designs that complement your sophisticated lifestyle.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 card-gradient shadow-card transition-luxury hover:shadow-elegant">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Precision Timing</h3>
                <p className="text-muted-foreground">
                  Swiss-inspired movements for accurate and reliable timekeeping.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Watches */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Collection</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular timepieces, crafted for discerning individuals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWatches.map((watch) => (
              <Card key={watch.id} className="group overflow-hidden shadow-card transition-luxury hover:shadow-elegant">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={watch.image}
                    alt={watch.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold">{watch.name}</h3>
                      <div className="flex items-center space-x-2 mt-2">
                        {watch.discountPrice ? (
                          <>
                            <span className="text-2xl font-bold text-primary">
                              {watch.discountPrice} MAD
                            </span>
                            <span className="text-lg text-muted-foreground line-through">
                              {watch.price} MAD
                            </span>
                            <Badge variant="destructive">Sale</Badge>
                          </>
                        ) : (
                          <span className="text-2xl font-bold text-primary">
                            {watch.price} MAD
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button asChild className="flex-1">
                        <Link to={`/watch/${watch.id}`}>View Details</Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link to={`/order/${watch.id}`}>Order Now</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/watches">
                View All Watches
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 luxury-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to Find Your Perfect Watch?
            </h2>
            <p className="text-xl opacity-90">
              Browse our complete collection and discover the timepiece that matches your style. 
              Cash on delivery available across Morocco.
            </p>
            <Button size="lg" variant="secondary" asChild className="shadow-luxury">
              <Link to="/watches">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
