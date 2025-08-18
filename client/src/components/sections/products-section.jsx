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
      <div className="max-w-7xl mx-auto container-padding">
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
              className="text-3xl lg:text-5xl font-bold text-primary mt-4 mb-6"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
          stagger={0.12}
          delay={0.3}
        >
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover-lift will-animate">
                <motion.div 
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img 
                    src={product.image} 
                    alt={`${product.title} - ${product.description}`} 
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"
                    whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                  />
                </motion.div>
                
                <CardContent className="p-6">
                  <motion.h3 
                    className="text-lg font-semibold text-gray-900 mb-2"
                    whileHover={{ color: "#3B82F6" }}
                    transition={{ duration: 0.2 }}
                  >
                    {product.title}
                  </motion.h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <Link href="/products">
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button 
                        variant="ghost" 
                        className="text-secondary hover:text-secondary/80 p-0 font-medium"
                      >
                        View Products 
                        <motion.div
                          className="inline-block ml-2"
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </Button>
                    </motion.div>
                  </Link>
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
