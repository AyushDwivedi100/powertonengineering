import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TESTIMONIALS, CLIENTS, CLIENT_LOGOS } from "@/data/constants";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ClientsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [logoCurrentIndex, setLogoCurrentIndex] = useState(0);

  // Auto-slide functionality for testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1,
      );
    }, 4000); // Change testimonial every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Infinite scroll with pause/resume intervals
  const [isScrolling, setIsScrolling] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPhase, setScrollPhase] = useState('scroll'); // 'scroll' or 'pause'

  useEffect(() => {
    // Control scroll/pause cycle with different timings
    const pauseResumeInterval = setInterval(() => {
      setScrollPhase(prev => {
        if (prev === 'scroll') {
          setIsScrolling(false);
          return 'pause';
        } else {
          setIsScrolling(true);
          return 'scroll';
        }
      });
    }, scrollPhase === 'scroll' ? 5000 : 2000); // 5 seconds scrolling, 2 seconds pause

    return () => clearInterval(pauseResumeInterval);
  }, [scrollPhase]);

  // Immediate hover control - override automatic cycle
  useEffect(() => {
    if (isHovered) {
      setIsScrolling(false);
    } else if (!isHovered && scrollPhase === 'scroll') {
      setIsScrolling(true);
    }
  }, [isHovered, scrollPhase]);

  useEffect(() => {
    if (!isScrolling || isHovered) return;

    // Card width (130px) + margins (16px left + 16px right) = 162px total per card
    const cardTotalWidth = 162;
    
    // Smooth continuous scrolling when active - timed to show exactly one card transition
    const scrollInterval = setInterval(() => {
      setScrollPosition(prev => {
        const newPos = prev + 2; // Slower scroll speed for better visibility
        // Reset position when we've scrolled through first set of clients
        if (newPos >= CLIENT_LOGOS.length * cardTotalWidth) {
          return 0;
        }
        return newPos;
      });
    }, 50); // 50ms updates but slower increment

    return () => clearInterval(scrollInterval);
  }, [isScrolling, isHovered]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      currentIndex === 0 ? TESTIMONIALS.length - 1 : currentIndex - 1,
    );
    // Resume auto-play after 8 seconds
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      currentIndex === TESTIMONIALS.length - 1 ? 0 : currentIndex + 1,
    );
    // Resume auto-play after 8 seconds
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section className="section-padding bg-white" role="main">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-lg">
            Our Clients
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mt-4 mb-6">
            Trusted By Leading Brands and Organizations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've partnered with industry leaders across various sectors to
            deliver exceptional engineering solutions.
          </p>
        </div>

        {/* Client Logos Slideshow - Infinite scroll with pause/resume */}
        <div className="mb-16">
          <div 
            className="relative overflow-hidden bg-gray-50 rounded-lg border border-gray-100 py-4 md:py-6 lg:py-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              className="flex transition-transform ease-linear"
              style={{
                transform: `translateX(-${scrollPosition}px)`,
                width: `${CLIENT_LOGOS.length * 2 * 162}px`, // Double width for seamless loop (162px per card)
                transitionDuration: isScrolling ? '0ms' : '300ms' // Smooth when pausing
              }}
            >
              {/* Render clients twice for seamless infinite loop */}
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, index) => (
                <div
                  key={`${client.id}-${Math.floor(index / CLIENT_LOGOS.length)}`}
                  className="flex-shrink-0 bg-white rounded-lg border border-gray-200 p-2 md:p-3 lg:p-4 flex items-center justify-center hover:shadow-lg transition-all duration-300 mx-2 md:mx-3 lg:mx-4"
                  style={{
                    width: "130px",
                    minWidth: "130px",
                  }}

                >
                  <div className="text-center w-full">
                    <img
                      src={client.logo}
                      alt={`ID-820-${index}: ${client.name} company logo`}
                      className="w-full h-8 md:h-10 lg:h-12 object-contain mb-1"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = client.fallback;
                      }}
                    />
                    <span className="text-xs md:text-xs lg:text-sm font-medium text-gray-600 block truncate">
                      {client.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>



            {/* Responsive gradient overlays */}
            <div className="absolute top-0 left-0 w-8 md:w-12 lg:w-16 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
            <div className="absolute top-0 right-0 w-8 md:w-12 lg:w-16 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
          </div>

          {/* Scroll status indicator */}
          <div className="text-center mt-3 md:mt-4">
            <p className="text-xs md:text-sm text-gray-500 px-4">
              Trusted by industry leaders • {isHovered ? 'hover paused' : (isScrolling ? 'scrolling...' : 'paused')} • showcase of our valued partners
            </p>
            <div className="flex justify-center mt-2 space-x-1">
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                isScrolling ? "bg-primary animate-pulse" : "bg-gray-400"
              }`} />
            </div>
          </div>
        </div>

        {/* Testimonials Carousel Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-primary mb-8">
            What Our Clients Say
          </h3>
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
                          {[...Array(TESTIMONIALS[currentIndex].rating)].map(
                            (_, i) => (
                              <Star
                                key={i}
                                className="w-5 h-5 fill-current"
                                aria-hidden="true"
                              />
                            ),
                          )}
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-lg md:text-xl text-gray-700 mb-8 italic leading-relaxed">
                        "{TESTIMONIALS[currentIndex].comment}"
                      </blockquote>

                      {/* Client Info */}
                      <div className="flex items-center justify-center">
                        <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                          <span className="text-lg">
                            {TESTIMONIALS[currentIndex].initials}
                          </span>
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
                    ? "bg-primary w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                data-testid={`dot-testimonial-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
