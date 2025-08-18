import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative bg-gradient-to-br from-primary to-accent text-white overflow-hidden"
      role="banner"
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto container-padding py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in">
            Comprehensive Solutions for <span className="text-secondary">Industrial Success</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 leading-relaxed animate-fade-in max-w-4xl">
            Our broad portfolio of products and services provides all-encompassing solutions that drive industrial success, ensuring that every aspect of your engineering needs is covered.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
            <Link href="/services" className="w-full sm:w-auto">
              <Button className="btn-secondary w-full sm:w-auto text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 transform hover:scale-105 transition-all">
                Explore Our Services
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
            <Link href="/quote" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                className="btn-outline w-full sm:w-auto text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 border-white text-white hover:bg-white hover:text-primary"
              >
                Get Free Quote
              </Button>
            </Link>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            <div className="flex items-center space-x-3 p-2 sm:p-0">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0" />
              <span className="text-sm sm:text-base lg:text-lg">15+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-3 p-2 sm:p-0">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0" />
              <span className="text-sm sm:text-base lg:text-lg">24/7 Technical Support</span>
            </div>
            <div className="flex items-center space-x-3 p-2 sm:p-0 sm:col-span-2 lg:col-span-1">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0" />
              <span className="text-sm sm:text-base lg:text-lg">Pan-India Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative bg-white bg-opacity-10 backdrop-blur-sm border-t border-white border-opacity-20">
        <div className="max-w-7xl mx-auto container-padding py-6 sm:py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div className="p-2 sm:p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary mb-1 sm:mb-2">15+</div>
              <div className="text-xs sm:text-sm lg:text-base opacity-90">Years Experience</div>
            </div>
            <div className="p-2 sm:p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary mb-1 sm:mb-2">1200+</div>
              <div className="text-xs sm:text-sm lg:text-base opacity-90">Projects Completed</div>
            </div>
            <div className="p-2 sm:p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary mb-1 sm:mb-2">450+</div>
              <div className="text-xs sm:text-sm lg:text-base opacity-90">Happy Clients</div>
            </div>
            <div className="p-2 sm:p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary mb-1 sm:mb-2">24/7</div>
              <div className="text-xs sm:text-sm lg:text-base opacity-90">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
