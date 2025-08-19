import { useState } from "react";
import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Filter, 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  DollarSign,
  CheckCircle,
  Clock,
  Building,
  Zap,
  Cog,
  Factory,
  ArrowRight, 
  Download,
  Award,
  Target,
  TrendingUp
} from "lucide-react";
import { Link } from "wouter";
import { useScrollAnimation, useStaggeredAnimation, getAnimationClass } from "@/hooks/use-scroll-animation";

// Enhanced project data combining basic projects with detailed portfolio information
const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "Smart Manufacturing Plant Automation",
    client: "Tata Steel Ltd.",
    industry: "Manufacturing",
    location: "Jamshedpur, India",
    duration: "18 months",
    budget: "₹50-75 Lakhs",
    status: "Completed",
    year: 2024,
    description: "Complete automation of steel manufacturing process with PLC integration, SCADA systems, and real-time monitoring.",
    technologies: ["PLC Programming", "SCADA", "HMI", "Industrial IoT"],
    results: {
      efficiency: "40% improvement",
      downtime: "65% reduction",
      savings: "₹2.5 Cr annually"
    },
    image: "https://images.unsplash.com/photo-1565300075136-f58d3cb0a9b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    category: "Process Automation"
  },
  {
    id: 2,
    title: "Power Distribution Control Center",
    client: "NTPC Limited",
    industry: "Power Generation",
    location: "Delhi, India",
    duration: "12 months",
    budget: "₹1-2 Crores",
    status: "Completed",
    year: 2024,
    description: "Advanced power distribution system with automated load balancing and remote monitoring capabilities.",
    technologies: ["MCC Panels", "Protection Systems", "Energy Management", "Remote Monitoring"],
    results: {
      efficiency: "35% improvement",
      reliability: "99.8% uptime",
      savings: "₹1.8 Cr annually"
    },
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    category: "Power Systems"
  },
  {
    id: 3,
    title: "Solar Power Plant Automation",
    client: "Adani Green Energy",
    industry: "Renewable Energy",
    location: "Rajasthan, India",
    duration: "8 months",
    budget: "₹25-50 Lakhs",
    status: "Completed",
    year: 2023,
    description: "Automated solar tracking system with weather monitoring and grid synchronization.",
    technologies: ["Solar Inverters", "Grid Sync", "Weather Monitoring", "Data Analytics"],
    results: {
      efficiency: "25% improvement",
      generation: "150 MW capacity",
      roi: "18 months payback"
    },
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    category: "Solar Solutions"
  },
  {
    id: 4,
    title: "Chemical Process Automation",
    client: "Indian Oil Corporation",
    industry: "Chemical",
    location: "Mumbai, India",
    duration: "15 months",
    budget: "₹75 Lakhs - 1 Cr",
    status: "In Progress",
    year: 2024,
    description: "Complete process automation for chemical refinery with safety systems and environmental monitoring.",
    technologies: ["Process Control", "Safety Systems", "Environmental Monitoring", "Batch Control"],
    results: {
      safety: "Zero incidents",
      compliance: "100% regulatory",
      efficiency: "30% improvement"
    },
    image: "https://images.unsplash.com/photo-1582478686849-df4aca7a4ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    category: "Process Automation"
  },
  {
    id: 5,
    title: "Water Treatment Plant Control",
    client: "Delhi Jal Board",
    industry: "Water Treatment",
    location: "New Delhi, India",
    duration: "10 months",
    budget: "₹35-50 Lakhs",
    status: "Completed",
    year: 2023,
    description: "Automated water treatment plant with quality monitoring and distribution control systems.",
    technologies: ["Water Quality Sensors", "Flow Control", "Chemical Dosing", "SCADA"],
    results: {
      quality: "99.9% purity",
      efficiency: "45% improvement",
      capacity: "500 MLD treatment"
    },
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    category: "Water Systems"
  },
  {
    id: 6,
    title: "Food Processing Automation",
    client: "Nestle India Ltd.",
    industry: "Food & Beverage",
    location: "Gurgaon, India",
    duration: "6 months",
    budget: "₹15-25 Lakhs",
    status: "Completed",
    year: 2023,
    description: "Automated food processing line with quality control and packaging automation.",
    technologies: ["Conveyor Systems", "Quality Control", "Packaging Automation", "Traceability"],
    results: {
      productivity: "60% increase",
      quality: "99.5% consistency",
      waste: "30% reduction"
    },
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    category: "Process Automation"
  }
];

const INDUSTRIES = ["All", "Manufacturing", "Power Generation", "Renewable Energy", "Chemical", "Water Treatment", "Food & Beverage"];
const CATEGORIES = ["All", "Process Automation", "Power Systems", "Solar Solutions", "Water Systems"];
const STATUSES = ["All", "Completed", "In Progress"];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTab, setSelectedTab] = useState("portfolio");

  const filteredProjects = PORTFOLIO_PROJECTS.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === "All" || project.industry === selectedIndustry;
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesStatus = selectedStatus === "All" || project.status === selectedStatus;
    
    return matchesSearch && matchesIndustry && matchesCategory && matchesStatus;
  });

  const heroAnimation = useScrollAnimation();
  const statsAnimation = useScrollAnimation();
  const projectsAnimation = useStaggeredAnimation(filteredProjects.length);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "In Progress":
        return <Clock className="w-4 h-4 text-blue-600" />;
      default:
        return null;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Process Automation":
        return <Cog className="w-5 h-5" />;
      case "Power Systems":
        return <Zap className="w-5 h-5" />;
      case "Solar Solutions":
        return <Building className="w-5 h-5" />;
      case "Water Systems":
        return <Factory className="w-5 h-5" />;
      default:
        return <Cog className="w-5 h-5" />;
    }
  };

  const stats = [
    { number: "1200+", label: "Projects Completed", icon: Award },
    { number: "450+", label: "Happy Clients", icon: Users },
    { number: "15+", label: "Years Experience", icon: Calendar },
    { number: "98%", label: "Success Rate", icon: Target }
  ];

  return (
    <>
      <SEO
        title="Engineering Projects & Portfolio - Industrial Automation Cases | Powerton Engineering"
        description="Explore our comprehensive portfolio of 1200+ successfully completed engineering projects including power plants, manufacturing automation, solar installations, and water treatment systems across India."
        keywords="engineering projects, automation projects, power plant automation, manufacturing automation, solar projects, water treatment automation, industrial projects India, project portfolio"
        canonicalUrl="https://powertonengineering.in/projects"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Powerton Engineering Pvt. Ltd.",
          "description": "Industrial automation and electrical engineering projects portfolio"
        }}
      />

      {/* Hero Section */}
      <section className={`py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary to-blue-800 text-white ${getAnimationClass('fade-in-up', true)}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
              Our Engineering <span className="text-secondary">Projects & Portfolio</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 opacity-90">
              Discover our engineering excellence through 1200+ successful projects across diverse industries, showcasing innovation, quality, and reliability.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg font-semibold transition-colors">
                <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Download Portfolio
              </Button>
              <Link href="/contact" className="mobile-full">
                <Button 
                  variant="outline" 
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all border-white text-white hover:bg-white hover:text-primary"
                >
                  Discuss Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className={`py-12 md:py-16 lg:py-20 bg-muted/30 ${getAnimationClass('fade-in-up', true)}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Project Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From power generation to manufacturing automation, explore how we've delivered innovative engineering solutions across various industries.
            </p>
          </div>

          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="portfolio">Project Portfolio</TabsTrigger>
              <TabsTrigger value="showcase">Featured Projects</TabsTrigger>
            </TabsList>

            <TabsContent value="portfolio" className="space-y-8">
              {/* Search and Filters */}
              <div className="space-y-6">
                {/* Search Bar */}
                <div className="max-w-md mx-auto">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      placeholder="Search projects, clients, or technologies..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Filter Toggle */}
                <div className="text-center">
                  <Button 
                    variant="outline" 
                    onClick={() => setShowFilters(!showFilters)}
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Filter className="mr-2 w-4 h-4" />
                    {showFilters ? 'Hide Filters' : 'Show Filters'}
                  </Button>
                </div>

                {/* Filters */}
                {showFilters && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-muted rounded-lg">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Industry</label>
                      <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {INDUSTRIES.map(industry => (
                            <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Category</label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                          {CATEGORIES.map(category => (
                            <SelectItem key={category} value={category}>{category}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Status</label>
                      <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Status" />
                        </SelectTrigger>
                        <SelectContent>
                          {STATUSES.map(status => (
                            <SelectItem key={status} value={status}>{status}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
              </div>

              {/* Results Summary */}
              <div className="text-center text-muted-foreground">
                Showing {filteredProjects.length} of {PORTFOLIO_PROJECTS.length} projects
              </div>

              {/* Project Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => {
                  const Icon = getCategoryIcon(project.category);
                  return (
                    <Card 
                      key={project.id} 
                      className={`bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer ${getAnimationClass('fade-in-up', true)}`}
                    >
                      <div className="aspect-video rounded-lg overflow-hidden mb-4">
                        <img 
                          src={project.image} 
                          alt={`ID-${200 + project.id}: ${project.title} project showcase`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <CardHeader className="p-0 mb-4">
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-xl md:text-2xl font-semibold text-foreground line-clamp-2">
                            {project.title}
                          </CardTitle>
                          <div className="flex items-center gap-1 ml-2">
                            {Icon}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Building className="w-4 h-4" />
                          <span>{project.client}</span>
                        </div>
                      </CardHeader>

                      <CardContent className="p-0 space-y-4">
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {project.description}
                        </p>

                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <MapPin className="w-4 h-4" />
                              <span>{project.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              {getStatusIcon(project.status)}
                              <span className={`text-sm ${project.status === 'Completed' ? 'text-green-600' : 'text-blue-600'}`}>
                                {project.status}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              <span>{project.duration}</span>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <DollarSign className="w-4 h-4" />
                              <span>{project.budget}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary" className="text-xs">
                              {project.category}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {project.year}
                            </Badge>
                          </div>

                          <div className="flex flex-wrap gap-1">
                            {project.technologies.slice(0, 3).map(tech => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                            {project.technologies.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{project.technologies.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-muted-foreground mb-4">No projects found matching your criteria</div>
                  <Button 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedIndustry("All");
                      setSelectedCategory("All");
                      setSelectedStatus("All");
                    }}
                    variant="outline"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="showcase" className="space-y-8">
              {/* Featured Projects Showcase */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {PORTFOLIO_PROJECTS.slice(0, 4).map((project) => (
                  <Card key={project.id} className="bg-card border border-border rounded-lg shadow-sm overflow-hidden">
                    <div className="aspect-video">
                      <img 
                        src={project.image} 
                        alt={`ID-${250 + project.id}: ${project.title} featured project`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          <span>{project.client}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" />
                          <span>{Object.values(project.results)[0]}</span>
                        </div>
                      </div>
                      <Button className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground" size="sm">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 lg:py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how our engineering expertise can bring your industrial automation project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg font-semibold transition-colors">
                Get Project Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground border-white text-white hover:bg-white hover:text-primary px-6 py-3 rounded-lg font-semibold transition-all">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}