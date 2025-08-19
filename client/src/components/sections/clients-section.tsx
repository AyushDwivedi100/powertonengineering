import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TESTIMONIALS, CLIENTS } from "@/data/constants";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ClientsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change testimonial every 4 seconds
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  
  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? TESTIMONIALS.length - 1 : currentIndex - 1);
    // Resume auto-play after 8 seconds
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };
  
  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === TESTIMONIALS.length - 1 ? 0 : currentIndex + 1);
    // Resume auto-play after 8 seconds
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section className="section-padding bg-white" role="main">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-lg">Our Clients</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mt-4 mb-6">
            Trusted By Leading Brands and Organizations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've partnered with industry leaders across various sectors to deliver exceptional engineering solutions.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-70 hover:opacity-100 transition-opacity duration-300 mb-16">
          {CLIENTS.map((client, index) => (
            <div 
              key={client} 
              className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-gray-600 font-semibold text-sm text-center">{client}</span>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-primary mb-8">What Our Clients Say</h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 border-gray-200 shadow-lg"
            aria-label="Previous testimonial"
            data-testid="button-previous-testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 border-gray-200 shadow-lg"
            aria-label="Next testimonial"
            data-testid="button-next-testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Testimonial Display */}
          <div className="px-12 py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-lg">
                  <CardContent className="p-8 md:p-12">
                    <div className="text-center">
                      {/* Rating Stars */}
                      <div className="flex justify-center items-center mb-6">
                        <div className="flex text-secondary">
                          {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current" aria-hidden="true" />
                          ))}
                        </div>
                      </div>
                      
                      {/* Testimonial Text */}
                      <blockquote className="text-lg md:text-xl text-gray-700 mb-8 italic leading-relaxed">
                        "{TESTIMONIALS[currentIndex].comment}"
                      </blockquote>
                      
                      {/* Client Info */}
                      <div className="flex items-center justify-center">
                        <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                          <span className="text-lg">{TESTIMONIALS[currentIndex].initials}</span>
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-gray-900 text-lg">
                            {TESTIMONIALS[currentIndex].name}
                          </div>
                          <div className="text-gray-600">
                            {TESTIMONIALS[currentIndex].location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 8000);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                data-testid={`dot-testimonial-${index}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              {isAutoPlaying ? 'Auto-playing • Click arrows to pause' : 'Paused • Will resume in 8 seconds'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
