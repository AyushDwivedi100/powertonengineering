import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PRODUCTS } from "@/data/constants";
import { AnimatedSection, useScrollAnimations } from "@/hooks/use-scroll-animation";
import { 
  Search,
  Filter,
  Download,
  ArrowRight,
  Star,
  CheckCircle,
  Zap,
  Shield,
  Settings
} from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Products() {
  useScrollAnimations();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const productCategories = [
    { id: "all", name: "All Products", count: PRODUCTS.length },
    { id: "instrumentation", name: "Instrumentation", count: 1 },
    { id: "electrical", name: "Electrical Components", count: 1 },
    { id: "measurement", name: "Measurement Instruments", count: 1 },
    { id: "solar", name: "Solar Products", count: 1 },
    { id: "automation", name: "Automation & Control", count: 1 },
    { id: "safety", name: "Safety & Protection", count: 1 },
    { id: "pumps", name: "Mechanical Pumps", count: 1 },
    { id: "tools", name: "Industrial Tools", count: 1 }
  ];

  const productDetails = {
    "instrumentation": {
      fullDescription: "Comprehensive range of precision instrumentation components for industrial monitoring and control applications.",
      specifications: [
        "High accuracy: ±0.1% to ±0.5%",
        "Operating temperature: -40°C to +85°C",
        "IP65/IP67 protection rating",
        "4-20mA, 0-10V, HART, Profibus outputs",
        "Explosion-proof variants available"
      ],
      applications: ["Process Control", "Quality Monitoring", "Safety Systems", "Environmental Monitoring"],
      features: ["Smart Diagnostics", "Digital Communication", "Easy Calibration", "Long-term Stability"]
    },
    "electrical": {
      fullDescription: "Complete range of electrical components including switches, relays, contactors, and power distribution equipment for industrial applications.",
      specifications: [
        "Voltage range: 24V DC to 690V AC",
        "Current ratings: 1A to 1000A",
        "IP54 to IP67 protection",
        "IEC/IS standards compliant",
        "Temperature rated: -25°C to +70°C"
      ],
      applications: ["Motor Control", "Power Distribution", "Switching Applications", "Protection Systems"],
      features: ["High Reliability", "Modular Design", "Easy Installation", "Maintenance-Free"]
    },
    "measurement": {
      fullDescription: "Advanced digital meters, analyzers, and calibration equipment for precise measurement and monitoring of electrical and process parameters.",
      specifications: [
        "Accuracy class: 0.1 to 1.0",
        "Display: Digital LCD/LED",
        "Communication: RS485, Ethernet, Wireless",
        "Data logging capability",
        "Multiple parameter measurement"
      ],
      applications: ["Power Quality Analysis", "Energy Management", "Process Monitoring", "Compliance Measurement"],
      features: ["Real-time Monitoring", "Data Analytics", "Alarm Management", "Remote Access"]
    },
    "solar": {
      fullDescription: "Complete solar energy solutions including panels, inverters, monitoring systems, and grid-tie equipment for sustainable energy generation.",
      specifications: [
        "Panel efficiency: 19-22%",
        "Power range: 300W to 500W per panel",
        "Inverter efficiency: >98%",
        "25-year warranty on panels",
        "Grid-tie and off-grid solutions"
      ],
      applications: ["Rooftop Solar", "Ground Mount Systems", "Solar Farms", "Hybrid Systems"],
      features: ["High Efficiency", "Weather Resistant", "Smart Monitoring", "Grid Synchronization"]
    },
    "automation": {
      fullDescription: "Advanced automation and control systems including PLCs, HMIs, SCADA solutions, and industrial communication devices.",
      specifications: [
        "I/O capacity: 16 to 2048 points",
        "Communication: Ethernet, Profibus, Modbus",
        "Programming: IEC 61131-3 compliant",
        "Operating temperature: 0°C to +60°C",
        "Redundancy options available"
      ],
      applications: ["Manufacturing Automation", "Process Control", "Building Management", "Machine Control"],
      features: ["Flexible Programming", "Scalable Architecture", "Diagnostic Tools", "Remote Monitoring"]
    },
    "safety": {
      fullDescription: "Comprehensive safety and protection equipment including circuit breakers, safety relays, emergency stop systems, and protective devices.",
      specifications: [
        "Breaking capacity: 6kA to 100kA",
        "Safety integrity level: SIL 2/3",
        "Response time: <10ms",
        "Multiple protection functions",
        "Arc fault protection available"
      ],
      applications: ["Personnel Safety", "Equipment Protection", "Fire Safety", "Emergency Systems"],
      features: ["Fail-Safe Operation", "Self-Monitoring", "Quick Response", "Easy Testing"]
    },
    "pumps": {
      fullDescription: "High-quality mechanical pumps, spare parts, and maintenance kits for various industrial and commercial applications.",
      specifications: [
        "Flow rate: 10 LPM to 5000 LPM",
        "Head: 10m to 500m",
        "Material: Cast iron, SS316, Bronze",
        "Temperature: -20°C to +180°C",
        "Efficiency: up to 85%"
      ],
      applications: ["Water Supply", "Chemical Processing", "HVAC Systems", "Industrial Processes"],
      features: ["Energy Efficient", "Corrosion Resistant", "Low Maintenance", "Reliable Operation"]
    },
    "tools": {
      fullDescription: "Professional grade industrial tools, tackles, and maintenance equipment for various engineering and maintenance applications.",
      specifications: [
        "Material: High-grade steel/alloy",
        "Precision: ±0.1mm accuracy",
        "Operating range: Various sizes",
        "Ergonomic design",
        "Certified to international standards"
      ],
      applications: ["Maintenance Work", "Installation", "Calibration", "Testing & Commissioning"],
      features: ["Durable Construction", "Ergonomic Design", "Precision Engineering", "Multi-Purpose Use"]
    }
  };

  const filteredProducts = selectedCategory === "all" 
    ? PRODUCTS 
    : PRODUCTS.filter(product => product.id === selectedCategory);

  return (
    <>
      <SEO
        title="Industrial Products Catalog - Automation & Electrical Equipment | Powerton Engineering"
        description="Comprehensive catalog of industrial automation products, electrical components, instrumentation, solar systems, pumps, and tools. Quality equipment for industrial applications."
        keywords="industrial products, automation equipment, electrical components, instrumentation products, solar panels, industrial pumps, measurement instruments, safety equipment"
        canonicalUrl="https://powertonengineering.in/products"
      />

      {/* Hero Section */}
      <section className="relative hero-fullscreen overflow-hidden">
        <div className="absolute inset-0 hero-bg-products"></div>
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Industrial <span className="text-secondary">Product Catalog</span>
            </h1>
            <p className="text-base md:text-lg mb-6 sm:mb-8 opacity-90">
              Comprehensive range of electrical and automation products designed for reliability, efficiency, and superior performance in industrial environments.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg font-semibold transition-colors">
                <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Download Catalog
              </Button>
              <Link href="/contact" className="mobile-full">
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary px-6 py-3 rounded-lg font-semibold transition-all"
                >
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-responsive-xl font-bold text-primary mb-4 sm:mb-6">
              Product Categories
            </h2>
            <p className="text-responsive-sm text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive range of industrial products organized by category for easy navigation.
            </p>
          </div>

          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1 sm:gap-2 bg-muted p-1 sm:p-2 rounded-lg mb-6 sm:mb-8">
              {productCategories.slice(0, 5).map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-white text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2"
                >
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
              {productCategories.slice(5).map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="h-10 sm:h-12 text-xs sm:text-sm px-2 sm:px-4"
                >
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                </Button>
              ))}
            </div>

            {/* Product Grid */}
            <TabsContent value={selectedCategory} className="space-y-6 sm:space-y-8">
              <div className="grid-responsive-cards">
                {filteredProducts.map((product) => {
                  const details = productDetails[product.id];
                  
                  return (
                    <Card 
                      key={product.id} 
                      className="overflow-hidden group hover:shadow-xl transition-all duration-300 card-hover"
                    >
                      <div className="relative overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={`ID-830: ${product.title} - ${product.description}`} 
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-secondary text-white">
                            <Star className="w-3 h-3 mr-1" />
                            Premium
                          </Badge>
                        </div>
                      </div>
                      
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{product.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                        
                        {details && (
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                              <div className="space-y-1">
                                {details.features.slice(0, 2).map((feature) => (
                                  <div key={feature} className="flex items-center text-xs text-muted-foreground">
                                    <CheckCircle className="w-3 h-3 text-green-600 mr-2 flex-shrink-0" />
                                    {feature}
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                              <div className="flex space-x-2">
                                <Badge variant="outline" className="text-xs">
                                  <Zap className="w-3 h-3 mr-1" />
                                  High Efficiency
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  <Shield className="w-3 h-3 mr-1" />
                                  Certified
                                </Badge>
                              </div>
                              <Button 
                                size="sm" 
                                variant="ghost" 
                                className="text-secondary hover:text-secondary/80 p-0"
                              >
                                Details <ArrowRight className="ml-1 w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Detailed Product Information */}
      {selectedCategory !== "all" && (
        <section className="py-12 md:py-16 lg:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            {filteredProducts.map((product) => {
              const details = productDetails[product.id];
              if (!details) return null;

              return (
                <div key={product.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                      {product.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {details.fullDescription}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-4">Applications</h3>
                        <div className="space-y-2">
                          {details.applications.map((app) => (
                            <div key={app} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                              <span className="text-muted-foreground">{app}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-4">Key Features</h3>
                        <div className="space-y-2">
                          {details.features.map((feature) => (
                            <div key={feature} className="flex items-center">
                              <Settings className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Card className="border-none shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold text-foreground">
                          Technical Specifications
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {details.specifications.map((spec, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{spec}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-8 pt-6 border-t border-gray-200">
                          <div className="flex flex-col space-y-3">
                            <Button className="btn-primary w-full">
                              Request Technical Datasheet
                            </Button>
                            <Link href="/contact">
                              <Button variant="outline" className="w-full">
                                Get Product Quote
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Why Choose Our Products */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Why Choose Powerton Products?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  All products undergo rigorous testing and quality control processes to ensure reliability and performance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Technical Support</h3>
                <p className="text-muted-foreground">
                  Comprehensive technical support and documentation to help you select and implement the right solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  Latest technology and innovative solutions to meet evolving industrial requirements and challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 lg:py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Need Custom Product Solutions?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Can't find exactly what you're looking for? Our engineering team can customize products to meet your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact">
              <Button className="btn-secondary text-lg px-8 py-4">
                Request Custom Solution
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="btn-outline text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Complete Catalog
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
