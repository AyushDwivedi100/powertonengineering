import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PRODUCTS } from "@/data/constants";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { AnimatedSection, StaggeredList } from "@/hooks/use-scroll-animation";

export default function ProductsSection() {
  return (
    <section id="products" className="section-padding bg-gray-50" role="main">
      <div className="container-responsive container-padding">
        <AnimatedSection animation="fadeInUp" delay={0.1} duration={0.8}>
          <div className="text-center mb-16">
            <motion.span 
              className="text-secondary font-semibold text-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Products
            </motion.span>
            <motion.h2 
              className="text-responsive-title font-bold text-primary mt-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Industrial Automation Equipment Solutions
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Comprehensive range of electrical and automation products designed for reliability, efficiency, and superior performance in industrial environments.
            </motion.p>
          </div>
        </AnimatedSection>

        <StaggeredList 
          className="grid-responsive-cards mb-12 items-stretch"
          stagger={0.12}
          delay={0.3}
        >
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="h-full"
            >
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover-lift will-animate h-full flex flex-col">
                <motion.div 
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img 
                    src={product.image} 
                    alt={`ID-050: ${product.title} - ${product.description}`} 
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </motion.div>
                
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1">{product.description}</p>
                  <div className="mt-auto">
                    <Link href="/products" className="group/button">
                      <Button 
                        variant="ghost" 
                        className="text-secondary hover:text-secondary hover:bg-transparent p-0 font-medium transition-all duration-300"
                      >
                        View Products 
                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover/button:translate-x-2 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggeredList>

        <AnimatedSection animation="fadeInUp" delay={0.4} duration={0.6}>
          <div className="text-center">
            <Link href="/products">
              <Button className="btn-primary text-lg px-8 py-4 hover-lift">
                View Complete Product Catalog
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
