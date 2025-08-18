import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SERVICES } from "@/data/constants";
import { 
  Cpu, 
  Gauge, 
  Wrench, 
  PlayCircle, 
  Shield, 
  Settings,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Award
} from "lucide-react";
import { Link } from "wouter";

const iconMap = {
  "microchip": Cpu,
  "tachometer-alt": Gauge,
  "tools": Wrench,
  "play-circle": PlayCircle,
  "shield-alt": Shield,
  "cog": Settings
};

export default function Services() {
  const serviceDetails = {
    "process-automation": {
      overview: "Advanced automation systems designed to streamline industrial processes, reduce manual intervention, and optimize operational efficiency.",
      benefits: [
        "Reduced operational costs by up to 30%",
        "Improved process consistency and quality",
        "Enhanced safety through automated controls",
        "Real-time monitoring and reporting",
        "Scalable solutions for future expansion"
      ],
      technologies: ["PLC Programming", "SCADA Systems", "HMI Development", "Industrial IoT", "Edge Computing"],
      industries: ["Manufacturing", "Process Industries", "Power Generation", "Water Treatment", "Oil & Gas"]
    },
    "instrumentation": {
      overview: "Precision instrumentation solutions for accurate measurement, monitoring, and control of critical industrial parameters.",
      benefits: [
        "High-precision measurements with ±0.1% accuracy",
        "Reliable performance in harsh environments",
        "Integration with existing control systems",
        "Comprehensive calibration services",
        "24/7 monitoring capabilities"
      ],
      technologies: ["Smart Transmitters", "Flow Meters", "Temperature Sensors", "Pressure Instruments", "Analytical Equipment"],
      industries: ["Chemical Processing", "Pharmaceuticals", "Food & Beverage", "Energy", "Environmental Monitoring"]
    },
    "site-installation": {
      overview: "Professional on-site installation services ensuring optimal performance, safety compliance, and seamless system integration.",
      benefits: [
        "Certified installation technicians",
        "Compliance with industry standards",
        "Minimal disruption to operations",
        "Comprehensive testing and validation",
        "Complete documentation and training"
      ],
      technologies: ["Electrical Installation", "Mechanical Assembly", "System Integration", "Cable Management", "Safety Systems"],
      industries: ["Industrial Plants", "Commercial Buildings", "Infrastructure", "Renewable Energy", "Data Centers"]
    },
    "commissioning": {
      overview: "Comprehensive system commissioning to ensure all equipment operates at peak performance levels and meets design specifications.",
      benefits: [
        "Verified system performance",
        "Optimized operational parameters",
        "Complete functional testing",
        "Performance documentation",
        "Operator training programs"
      ],
      technologies: ["Performance Testing", "System Optimization", "Functional Verification", "Documentation", "Training Programs"],
      industries: ["Power Plants", "Manufacturing", "HVAC Systems", "Process Industries", "Building Automation"]
    },
    "amc": {
      overview: "Comprehensive Annual Maintenance Contracts designed to keep your systems running smoothly with minimal downtime and maximum efficiency.",
      benefits: [
        "Preventive maintenance scheduling",
        "24/7 emergency support",
        "Reduced unplanned downtime",
        "Extended equipment lifespan",
        "Cost-effective maintenance solutions"
      ],
      technologies: ["Predictive Maintenance", "Remote Monitoring", "Spare Parts Management", "Performance Analytics", "Emergency Response"],
      industries: ["Manufacturing", "Power Generation", "Process Industries", "Commercial Buildings", "Infrastructure"]
    },
    "customized": {
      overview: "Tailored engineering solutions designed specifically for unique industrial requirements and challenges that standard solutions cannot address.",
      benefits: [
        "Custom-designed for specific needs",
        "Flexible and scalable solutions",
        "Integration with existing systems",
        "Innovative problem-solving approach",
        "Long-term technical support"
      ],
      technologies: ["Custom Software Development", "Specialized Hardware", "Unique Control Algorithms", "Proprietary Protocols", "Advanced Analytics"],
      industries: ["Specialized Manufacturing", "Research Facilities", "Unique Processes", "Emerging Technologies", "Custom Applications"]
    }
  };

  return (
    <>
      <SEO
        title="Industrial Automation Services - Process Control, Instrumentation & Electrical Solutions | Powerton Engineering"
        description="Complete industrial automation services: process control systems, instrumentation, electrical panel design, SCADA development, HMI programming, control system integration, and industrial IoT solutions. Expert engineering team with 15+ years experience serving manufacturing, chemical, pharmaceutical, and power industries across India."
        keywords="industrial automation services India, process control systems, instrumentation services, electrical panel design, SCADA systems development, HMI programming, control system integration, automation engineering, industrial IoT solutions, PLC programming, motor control centers, power control panels, process automation consultancy"
        canonicalUrl="https://powertonengineering.in/services"
      />

      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-primary to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: "url('https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"}}></div>
        <div className="relative max-w-7xl mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Professional <span className="text-secondary">Engineering Services</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              From process automation to maintenance contracts, we provide comprehensive engineering solutions tailored to your industrial requirements.
            </p>
            <Link href="/contact">
              <Button className="btn-secondary text-lg px-8 py-4">
                Request Service Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive engineering solutions backed by 15+ years of experience and expertise in industrial automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Settings;
              
              return (
                <Card 
                  key={service.id} 
                  className="border border-gray-100 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                      {service.features.slice(0, 3).map((feature) => (
                        <div key={feature} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      className="text-secondary hover:text-secondary/80 p-0 font-semibold"
                      onClick={() => {
                        const element = document.getElementById(`service-${service.id}`);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {SERVICES.map((service, index) => {
        const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Settings;
        const details = serviceDetails[service.id as keyof typeof serviceDetails];
        const isEven = index % 2 === 0;
        
        return (
          <section 
            key={service.id}
            id={`service-${service.id}`}
            className={`section-padding ${isEven ? 'bg-gray-50' : 'bg-white'}`}
          >
            <div className="max-w-7xl mx-auto container-padding">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={isEven ? '' : 'lg:order-2'}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {details.overview}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                    <div className="space-y-3">
                      {details.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button className="btn-primary">
                      Request Quote for {service.title}
                    </Button>
                  </Link>
                </div>

                <div className={isEven ? '' : 'lg:order-1'}>
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-8">
                      <div className="grid grid-cols-1 gap-6">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                            <Settings className="w-5 h-5 mr-2 text-primary" />
                            Technologies & Solutions
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {details.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                            <Users className="w-5 h-5 mr-2 text-primary" />
                            Target Industries
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {details.industries.map((industry) => (
                              <Badge key={industry} variant="outline" className="border-secondary text-secondary">
                                {industry}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>24/7 Support Available</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600 mt-2">
                            <Award className="w-4 h-4 mr-2" />
                            <span>Industry Certified Solutions</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Call to Action */}
      <section className="section-padding bg-primary text-white">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Our expert team is ready to analyze your requirements and provide customized engineering solutions that drive efficiency and growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact">
              <Button className="btn-secondary text-lg px-8 py-4">
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/projects">
              <Button 
                variant="outline" 
                className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
              >
                View Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
