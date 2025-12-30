import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Order = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-gradient">
            Place Your Order
          </h1>
          
          <div className="bg-white rounded-lg shadow-card p-8">
            <h2 className="text-2xl font-semibold mb-6">Order Details</h2>
            <p className="text-gray-600 mb-8">Watch ID: {id}</p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="Enter your email" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input placeholder="Enter your phone number" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Shipping Address</label>
                <Input placeholder="Enter your address" />
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">City</label>
                  <Input placeholder="City" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">State</label>
                  <Input placeholder="State" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">ZIP Code</label>
                  <Input placeholder="ZIP" />
                </div>
              </div>
              
              <div className="pt-6 border-t">
                <Button className="w-full luxury-gradient text-white text-lg py-3">
                  Complete Order
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Order;