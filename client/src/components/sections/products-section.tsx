import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PRODUCTS } from "@/data/constants";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useScrollAnimation, useStaggeredAnimation, getAnimationClass } from "@/hooks/use-scroll-animation";

export default function ProductsSection() {
  const headerAnimation = useScrollAnimation();
  const productsAnimation = useStaggeredAnimation(PRODUCTS.length, 100);
  
  return (
    <section id="products" className="section-padding bg-gray-50" role="main">
      <div className="max-w-7xl mx-auto container-padding">
        <div ref={headerAnimation.ref} className={`text-center mb-16 ${getAnimationClass('fade-in-up', headerAnimation.isVisible)}`}>
          <span className="text-secondary font-semibold text-lg">Our Products</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mt-4 mb-6">
            Industrial Automation Equipment Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of electrical and automation products designed for reliability, efficiency, and superior performance in industrial environments.
          </p>
        </div>

        <div ref={productsAnimation.ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {PRODUCTS.map((product, index) => {
            const isVisible = productsAnimation.visibleItems.has(index);
            return (
            <Card 
              key={product.id} 
              className={`overflow-hidden group hover:shadow-xl transition-all duration-300 card-hover ${getAnimationClass('slide-in-scale', isVisible)}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={`ID-${String(10 + index).padStart(3, '0')}: ${product.title} - ${product.description}`} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                
                {/* Product Category Badge */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium">
                    Industrial Grade
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{product.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">{product.description}</p>
                <Link href="/products">
                  <Button 
                    variant="ghost" 
                    className="text-secondary hover:bg-secondary/10 hover:text-secondary p-0 font-medium transition-colors"
                  >
                    View Products <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
          })}
        </div>

        <div className="text-center space-x-4">
          <Link href="/products">
            <Button className="btn-primary text-lg px-8 py-4">
              View Complete Product Catalog
            </Button>
          </Link>
          <Link href="/quote">
            <Button 
              variant="outline" 
              className="btn-outline text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-white"
            >
              Request Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
