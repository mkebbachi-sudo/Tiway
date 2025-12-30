import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-card p-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            
            <h1 className="text-4xl font-bold mb-4 text-gradient">
              Order Confirmed!
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Thank you for your purchase. Your luxury timepiece is being prepared for shipment.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2 text-left">
                <div className="flex justify-between">
                  <span>Order Number:</span>
                  <span className="font-medium">#TW-2024-001</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Delivery:</span>
                  <span className="font-medium">3-5 Business Days</span>
                </div>
                <div className="flex justify-between">
                  <span>Tracking Info:</span>
                  <span className="font-medium">Will be sent via email</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button className="w-full luxury-gradient text-white">
                Track Your Order
              </Button>
              <Button variant="outline" className="w-full">
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrderConfirmation;