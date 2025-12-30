import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Filter } from "lucide-react";

const Watches = () => {
  const [sortBy, setSortBy] = useState("featured");
  const [filterBy, setFilterBy] = useState("all");

  // Sample watches data (will be replaced with Supabase data later)
  const watches = [
    {
      id: 1,
      name: "Classic Elegance",
      price: 2500,
      discountPrice: 1999,
      image: "https://images.unsplash.com/photo-1581063683670-6df2247f1d8e?w=400&auto=format&fit=crop&q=80",
      category: "men",
      inStock: true,
      description: "Timeless design with modern precision"
    },
    {
      id: 2,
      name: "Modern Luxury",
      price: 3200,
      discountPrice: null,
      image: "https://images.unsplash.com/photo-1574607304075-f7f22632aa64?w=400&auto=format&fit=crop&q=80",
      category: "men",
      inStock: true,
      description: "Contemporary style meets luxury craftsmanship"
    },
    {
      id: 3,
      name: "Sport Edition",
      price: 1800,
      discountPrice: 1499,
      image: "https://images.unsplash.com/photo-1589959320097-04f13ffc34a1?w=400&auto=format&fit=crop&q=80",
      category: "men",
      inStock: true,
      description: "Perfect for active lifestyle"
    },
    {
      id: 4,
      name: "Rose Gold Beauty",
      price: 2800,
      discountPrice: null,
      image: "https://images.unsplash.com/photo-1549113796-66008e8d0a4f?w=400&auto=format&fit=crop&q=80",
      category: "women",
      inStock: true,
      description: "Elegant rose gold finish for sophisticated women"
    },
    {
      id: 5,
      name: "Diamond Collection",
      price: 4500,
      discountPrice: 3999,
      image: "https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?w=400&auto=format&fit=crop&q=80",
      category: "women",
      inStock: true,
      description: "Luxury timepiece with premium diamond accents"
    },
    {
      id: 6,
      name: "Minimalist Steel",
      price: 1600,
      discountPrice: null,
      image: "https://images.unsplash.com/photo-1642538895365-da5dcbfcdf6f?w=400&auto=format&fit=crop&q=80",
      category: "unisex",
      inStock: true,
      description: "Clean lines and minimalist design"
    }
  ];

  const filteredWatches = watches.filter(watch => {
    if (filterBy === "all") return true;
    return watch.category === filterBy;
  });

  const sortedWatches = [...filteredWatches].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return (a.discountPrice || a.price) - (b.discountPrice || b.price);
      case "price-high":
        return (b.discountPrice || b.price) - (a.discountPrice || a.price);
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">Our Watch Collection</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover timepieces that define elegance and precision. Each watch is carefully selected for quality and style.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Sorting */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <Select value={filterBy} onValueChange={setFilterBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Watches</SelectItem>
                  <SelectItem value="men">Men's Watches</SelectItem>
                  <SelectItem value="women">Women's Watches</SelectItem>
                  <SelectItem value="unisex">Unisex</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Watches Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedWatches.map((watch) => (
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
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {watch.category === "men" ? "Men's" : watch.category === "women" ? "Women's" : "Unisex"}
                        </Badge>
                        {watch.inStock ? (
                          <Badge variant="default" className="text-xs">In Stock</Badge>
                        ) : (
                          <Badge variant="destructive" className="text-xs">Out of Stock</Badge>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold">{watch.name}</h3>
                      <p className="text-sm text-muted-foreground">{watch.description}</p>
                      
                      <div className="flex items-center space-x-2 mt-2">
                        {watch.discountPrice ? (
                          <>
                            <span className="text-xl font-bold text-primary">
                              {watch.discountPrice} MAD
                            </span>
                            <span className="text-sm text-muted-foreground line-through">
                              {watch.price} MAD
                            </span>
                            <Badge variant="destructive" className="text-xs">Sale</Badge>
                          </>
                        ) : (
                          <span className="text-xl font-bold text-primary">
                            {watch.price} MAD
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button asChild size="sm" className="flex-1">
                        <Link to={`/watch/${watch.id}`}>View Details</Link>
                      </Button>
                      <Button asChild size="sm" variant="outline" disabled={!watch.inStock}>
                        <Link to={`/order/${watch.id}`}>
                          {watch.inStock ? "Order Now" : "Out of Stock"}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {sortedWatches.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No watches found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Watches;