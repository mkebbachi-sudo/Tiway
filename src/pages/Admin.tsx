import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Admin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gradient">
            Admin Dashboard
          </h1>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Total Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">127</div>
                <p className="text-sm text-gray-600">+12% from last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">$2.4M</div>
                <p className="text-sm text-gray-600">+8% from last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Active Watches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">45</div>
                <p className="text-sm text-gray-600">In inventory</p>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((order) => (
                  <div key={order} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Order #TW-2024-{order.toString().padStart(3, '0')}</p>
                      <p className="text-sm text-gray-600">Customer Name</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$15,999</p>
                      <Badge variant="secondary">Processing</Badge>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <Button className="w-full" variant="outline">
                  View All Orders
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;