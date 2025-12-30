import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="shadow-card">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gradient">
                Welcome Back
              </CardTitle>
              <p className="text-gray-600">Sign in to your TimeWay account</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <Input type="password" placeholder="Enter your password" />
                </div>
                
                <Button className="w-full luxury-gradient text-white">
                  Sign In
                </Button>
              </form>
              
              <div className="text-center space-y-2">
                <a href="#" className="text-sm text-primary hover:underline">
                  Forgot your password?
                </a>
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <a href="#" className="text-primary hover:underline">
                    Sign up
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;