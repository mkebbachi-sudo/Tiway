import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Star, Shield, Truck, Clock, Check } from "lucide-react";

const WatchDetail = () => {
  const { id } = useParams();

  // Sample watch data (will be replaced with Supabase data later)
  const watch = {
    id: parseInt(id || "1"),
    name: "Classic Elegance",
    price: 2500,
    discountPrice: 1999,
    images: [
      "https://images.unsplash.com/photo-1581063683670-6df2247f1d8e?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1574607304075-f7f22632aa64?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1589959320097-04f13ffc34a1?w=600&auto=format&fit=crop&q=80"
    ],
    category: "men",
    inStock: true,
    description: "The Classic Elegance watch represents the perfect fusion of traditional craftsmanship and modern precision. This timepiece features a sophisticated design that complements both formal and casual attire, making it an ideal choice for the discerning gentleman.",
    features: [
      "Swiss-inspired movement",
      "Stainless steel case",
      "Sapphire crystal glass",
      "Water resistant up to 50m",
      "Leather strap",
      "2-year warranty"
    ],
    specifications: {
      "Case Material": "Stainless Steel",
      "Case Diameter": "42mm",
      "Case Thickness": "10mm",
      "Water Resistance": "50 meters",
      "Movement": "Quartz",
      "Strap Material": "Genuine Leather",
      "Strap Width": "22mm",
      "Crystal": "Sapphire"
    }
  };

  if (!watch) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Watch Not Found</h1>
          <Button asChild>
            <Link to="/watches">Back to Collection</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/watches">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Collection
            </Link>
          </Button>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={watch.images[0]}
                  alt={watch.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {watch.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg">
                    <img
                      src={image}
                      alt={`${watch.name} ${index + 2}`}
                      className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <Badge variant="secondary" className="mb-4">
                  {watch.category === "men" ? "Men's Watch" : watch.category === "women" ? "Women's Watch" : "Unisex Watch"}
                </Badge>
                <h1 className="text-4xl font-bold mb-4">{watch.name}</h1>
                
                <div className="flex items-center space-x-4 mb-6">
                  {watch.discountPrice ? (
                    <>
                      <span className="text-3xl font-bold text-primary">
                        {watch.discountPrice} MAD
                      </span>
                      <span className="text-xl text-muted-foreground line-through">
                        {watch.price} MAD
                      </span>
                      <Badge variant="destructive">
                        Save {watch.price - watch.discountPrice} MAD
                      </Badge>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-primary">
                      {watch.price} MAD
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-2 mb-6">
                  {watch.inStock ? (
                    <>
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-green-600 font-medium">In Stock</span>
                    </>
                  ) : (
                    <span className="text-red-600 font-medium">Out of Stock</span>
                  )}
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {watch.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {watch.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Button */}
              <div className="space-y-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full luxury-gradient shadow-luxury"
                  disabled={!watch.inStock}
                >
                  <Link to={`/order/${watch.id}`}>
                    {watch.inStock ? "Order Now - Cash on Delivery" : "Out of Stock"}
                  </Link>
                </Button>
                
                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center">
                    <Truck className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Free Delivery</p>
                  </div>
                  <div className="text-center">
                    <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">2 Year Warranty</p>
                  </div>
                  <div className="text-center">
                    <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Fast Processing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(watch.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-2">
                    <span className="font-medium">{key}:</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sample related products */}
            {[
              {
                id: 2,
                name: "Modern Luxury",
                price: 3200,
                image: "https://images.unsplash.com/photo-1574607304075-f7f22632aa64?w=400&auto=format&fit=crop&q=80"
              },
              {
                id: 3,
                name: "Sport Edition",
                price: 1499,
                image: "https://images.unsplash.com/photo-1589959320097-04f13ffc34a1?w=400&auto=format&fit=crop&q=80"
              },
              {
                id: 4,
                name: "Rose Gold Beauty",
                price: 2800,
                image: "https://images.unsplash.com/photo-1549113796-66008e8d0a4f?w=400&auto=format&fit=crop&q=80"
              }
            ].map((relatedWatch) => (
              <Card key={relatedWatch.id} className="group overflow-hidden shadow-card transition-luxury hover:shadow-elegant">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={relatedWatch.image}
                    alt={relatedWatch.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{relatedWatch.name}</h3>
                  <p className="text-primary font-bold mb-3">{relatedWatch.price} MAD</p>
                  <Button asChild size="sm" className="w-full">
                    <Link to={`/watch/${relatedWatch.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WatchDetail;