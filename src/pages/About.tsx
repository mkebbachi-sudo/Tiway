import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gradient">
            About TimeWay
          </h1>
          
          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="text-xl leading-relaxed mb-6">
              TimeWay represents the pinnacle of luxury watchmaking, where traditional craftsmanship 
              meets contemporary innovation. Founded with a passion for precision and elegance, 
              we create timepieces that are not just instruments of time, but works of art.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Heritage</h2>
            <p className="mb-6">
              With decades of experience in haute horlogerie, TimeWay has established itself as 
              a premier destination for discerning collectors and enthusiasts who appreciate 
              the finest in Swiss watchmaking tradition.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Craftsmanship</h2>
            <p className="mb-6">
              Every TimeWay timepiece is meticulously crafted by master artisans who dedicate 
              countless hours to perfecting each detail. From the intricate movements to the 
              luxurious finishing, our watches represent the ultimate expression of horological excellence.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Promise</h2>
            <p>
              We are committed to delivering not just exceptional timepieces, but an unparalleled 
              experience of luxury and service. Each watch comes with our guarantee of quality 
              and a lifetime of dedicated support.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;