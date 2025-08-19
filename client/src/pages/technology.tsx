import { useState } from "react";
import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Cpu, 
  Cloud, 
  Shield, 
  Zap, 
  Brain, 
  Wifi, 
  Database, 
  Monitor,
  Settings,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  Globe,
  Smartphone
} from "lucide-react";
import { useScrollAnimation, getAnimationClass } from "@/hooks/use-scroll-animation";

const TECHNOLOGY_STACK = [
  {
    category: "Automation Platforms",
    icon: <Cpu className="w-8 h-8" />,
    technologies: [
      { name: "Siemens TIA Portal", level: 95, description: "Advanced PLC programming and HMI development" },
      { name: "Rockwell FactoryTalk", level: 90, description: "Comprehensive automation suite for manufacturing" },
      { name: "Schneider Unity Pro", level: 85, description: "Industrial automation programming software" },
      { name: "ABB AC800M", level: 80, description: "High-performance process automation controller" }
    ]
  },
  {
    category: "SCADA & HMI",
    icon: <Monitor className="w-8 h-8" />,
    technologies: [
      { name: "Wonderware InTouch", level: 95, description: "Industry-leading HMI software platform" },
      { name: "GE iFIX", level: 90, description: "Real-time automation and information software" },
      { name: "Vijeo Citect", level: 85, description: "Powerful SCADA and HMI solution" },
      { name: "WinCC Advanced", level: 88, description: "Integrated engineering and runtime software" }
    ]
  },
  {
    category: "Industrial IoT",
    icon: <Wifi className="w-8 h-8" />,
    technologies: [
      { name: "Azure IoT Hub", level: 85, description: "Cloud-based IoT solution platform" },
      { name: "AWS IoT Core", level: 80, description: "Secure device connectivity and management" },
      { name: "ThingWorx", level: 75, description: "Industrial IoT platform for smart manufacturing" },
      { name: "Kepware", level: 90, description: "Industrial connectivity platform" }
    ]
  },
  {
    category: "Data Analytics",
    icon: <Database className="w-8 h-8" />,
    technologies: [
      { name: "OSIsoft PI System", level: 90, description: "Real-time data infrastructure" },
      { name: "Historian", level: 85, description: "Industrial data collection and analysis" },
      { name: "Power BI", level: 80, description: "Business analytics and visualization" },
      { name: "Tableau", level: 75, description: "Data visualization and business intelligence" }
    ]
  },
  {
    category: "Cybersecurity",
    icon: <Shield className="w-8 h-8" />,
    technologies: [
      { name: "Fortinet OT Security", level: 85, description: "Operational technology security solutions" },
      { name: "Cisco Industrial Security", level: 80, description: "Network security for industrial environments" },
      { name: "Claroty", level: 75, description: "Industrial cybersecurity platform" },
      { name: "Nozomi Networks", level: 70, description: "OT and IoT security monitoring" }
    ]
  },
  {
    category: "AI & Machine Learning",
    icon: <Brain className="w-8 h-8" />,
    technologies: [
      { name: "TensorFlow Industrial", level: 70, description: "Machine learning for industrial applications" },
      { name: "Azure ML", level: 75, description: "Cloud-based machine learning platform" },
      { name: "Predictive Analytics", level: 80, description: "Equipment failure prediction and optimization" },
      { name: "Computer Vision", level: 65, description: "Quality inspection and monitoring" }
    ]
  }
];

const INNOVATION_AREAS = [
  {
    title: "Digital Twin Technology",
    description: "Creating virtual replicas of physical systems for simulation and optimization",
    icon: <Globe className="w-12 h-12" />,
    progress: 75,
    benefits: ["Reduced downtime", "Optimized performance", "Predictive maintenance"]
  },
  {
    title: "Edge Computing",
    description: "Processing data closer to the source for real-time decision making",
    icon: <Cpu className="w-12 h-12" />,
    progress: 80,
    benefits: ["Faster response times", "Reduced latency", "Improved reliability"]
  },
  {
    title: "5G Industrial Networks",
    description: "Ultra-fast, low-latency connectivity for mission-critical applications",
    icon: <Wifi className="w-12 h-12" />,
    progress: 60,
    benefits: ["Ultra-low latency", "Massive connectivity", "Enhanced mobility"]
  },
  {
    title: "Augmented Reality",
    description: "AR-guided maintenance and training for industrial operations",
    icon: <Smartphone className="w-12 h-12" />,
    progress: 65,
    benefits: ["Reduced training time", "Improved accuracy", "Remote assistance"]
  }
];

const CERTIFICATIONS = [
  { name: "Siemens Certified", icon: <Award className="w-6 h-6" /> },
  { name: "Rockwell Partner", icon: <Award className="w-6 h-6" /> },
  { name: "ISO 9001:2015", icon: <Award className="w-6 h-6" /> },
  { name: "IEC 61508 SIL", icon: <Award className="w-6 h-6" /> },
  { name: "Azure Certified", icon: <Award className="w-6 h-6" /> },
  { name: "AWS Partner", icon: <Award className="w-6 h-6" /> }
];

export default function Technology() {
  const [selectedCategory, setSelectedCategory] = useState("Automation Platforms");
  
  const heroAnimation = useScrollAnimation();
  const stackAnimation = useScrollAnimation();
  const innovationAnimation = useScrollAnimation();

  const selectedTech = TECHNOLOGY_STACK.find(tech => tech.category === selectedCategory);

  return (
    <>
      <SEO
        title="Technology & Innovation - Powerton Engineering | Advanced Automation Technologies"
        description="Explore our cutting-edge technology stack including PLC programming, SCADA systems, Industrial IoT, AI/ML, and cybersecurity solutions for industrial automation."
        keywords="automation technology, PLC programming, SCADA systems, industrial IoT, digital twin, edge computing, industrial cybersecurity, machine learning automation"
        canonicalUrl="https://powertonengineering.in/technology"
      />

      {/* Hero Section */}
      <section className={`py-20 bg-gradient-to-br from-primary to-primary/80 text-white ${getAnimationClass('fade-in-up', heroAnimation.isVisible)}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technology & Innovation
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Powering the future of industrial automation with cutting-edge technologies and innovative solutions
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                <span>AI-Powered Automation</span>
              </div>
              <div className="flex items-center gap-2">
                <Cloud className="w-5 h-5" />
                <span>Cloud Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Cyber Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>Real-time Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className={`py-16 bg-white ${getAnimationClass('fade-in-up', stackAnimation.isVisible)}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Stack</h2>
              <p className="text-xl text-gray-600">
                Industry-leading platforms and tools that power our automation solutions
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Category Selector */}
              <div className="lg:col-span-1">
                <div className="space-y-2">
                  {TECHNOLOGY_STACK.map((tech) => (
                    <Button
                      key={tech.category}
                      variant={selectedCategory === tech.category ? "default" : "outline"}
                      className="w-full justify-start text-left"
                      onClick={() => setSelectedCategory(tech.category)}
                    >
                      <div className="flex items-center gap-3">
                        {tech.icon}
                        <span className="text-sm">{tech.category}</span>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Technology Details */}
              <div className="lg:col-span-3">
                {selectedTech && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        {selectedTech.icon}
                        {selectedTech.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {selectedTech.technologies.map((tech, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <h4 className="font-semibold">{tech.name}</h4>
                              <Badge variant="secondary">{tech.level}% Proficiency</Badge>
                            </div>
                            <p className="text-sm text-gray-600">{tech.description}</p>
                            <Progress value={tech.level} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Areas */}
      <section className={`py-16 bg-gray-50 ${getAnimationClass('fade-in-up', innovationAnimation.isVisible)}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Innovation Frontiers</h2>
              <p className="text-xl text-gray-600">
                Pioneering the next generation of industrial automation technologies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {INNOVATION_AREAS.map((area, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="text-primary">{area.icon}</div>
                      <div>
                        <CardTitle className="text-xl">{area.title}</CardTitle>
                        <p className="text-gray-600 text-sm mt-1">{area.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Implementation Progress</span>
                          <span className="text-sm text-primary font-bold">{area.progress}%</span>
                        </div>
                        <Progress value={area.progress} className="h-2" />
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Key Benefits:</h4>
                        <ul className="space-y-1">
                          {area.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Partnerships</h2>
              <p className="text-xl text-gray-600">
                Certified expertise and strategic partnerships with industry leaders
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {CERTIFICATIONS.map((cert, index) => (
                <Card key={index} className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-primary mb-3 flex justify-center">{cert.icon}</div>
                    <h4 className="text-sm font-semibold">{cert.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-primary-foreground/80">Years R&D Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-primary-foreground/80">Technology Platforms</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-primary-foreground/80">Innovation Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.5%</div>
                <div className="text-primary-foreground/80">System Reliability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Leverage Advanced Technologies?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let our technology experts design a custom automation solution for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Explore Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}