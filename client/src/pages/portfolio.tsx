import { useState } from "react";
import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  Factory
} from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation, getAnimationClass } from "@/hooks/use-scroll-animation";

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

export default function Portfolio() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

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

  return (
    <>
      <SEO
        title="Project Portfolio - Powerton Engineering | 1200+ Successfully Completed Projects"
        description="Explore our extensive portfolio of 1200+ industrial automation projects across manufacturing, power generation, renewable energy, and process industries. See our engineering excellence in action."
        keywords="project portfolio, industrial automation projects, engineering case studies, manufacturing automation, power systems projects, solar automation, process control projects, completed engineering projects"
        canonicalUrl="https://powertonengineering.in/portfolio"
      />

      {/* Hero Section */}
      <section className={`section-padding hero-gradient text-white ${getAnimationClass('fade-in-up', heroAnimation.isVisible)}`}>
        <div className="max-w-7xl mx-auto container-padding">
          <div className="hero-content">
            <h1 className="hero-title">
              Our Project <span className="text-secondary">Portfolio</span>
            </h1>
            <p className="hero-subtitle">
              Discover our engineering excellence through 1200+ successful projects across diverse industries
            </p>
            <div className="hero-features">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>1200+ Projects Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>500+ Satisfied Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Pan-India Presence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`section-padding bg-muted/30 ${getAnimationClass('fade-in-up', statsAnimation.isVisible)}`}>
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-center">
            <div>
              <div className="text-responsive-xl font-bold text-primary mb-2">1200+</div>
              <div className="text-responsive-sm text-foreground/70">Projects Completed</div>
            </div>
            <div>
              <div className="text-responsive-xl font-bold text-primary mb-2">15+</div>
              <div className="text-responsive-sm text-foreground/70">Years Experience</div>
            </div>
            <div>
              <div className="text-responsive-xl font-bold text-primary mb-2">500+</div>
              <div className="text-responsive-sm text-foreground/70">Happy Clients</div>
            </div>
            <div>
              <div className="text-responsive-xl font-bold text-primary mb-2">₹200+</div>
              <div className="text-responsive-sm text-foreground/70">Crores Projects Value</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search projects, clients, or technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Filter Toggle */}
            <div className="text-center mb-6">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </Button>
            </div>

            {/* Filters */}
            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-6 bg-muted rounded-lg">
                <div>
                  <label className="block text-sm font-medium mb-2">Industry</label>
                  <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {INDUSTRIES.map(industry => (
                        <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Status</label>
                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger>
                      <SelectValue />
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

            {/* Results Count */}
            <div className="text-center mb-8">
              <p className="text-muted-foreground">
                Showing {filteredProjects.length} of {PORTFOLIO_PROJECTS.length} projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <img
                      src={project.image}
                      alt={`ID-${String(200 + index).padStart(3, '0')}: ${project.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                        <div className="flex items-center gap-1">
                          {getStatusIcon(project.status)}
                          {project.status}
                        </div>
                      </Badge>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="outline" className="bg-white/90">
                        {project.year}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {getCategoryIcon(project.category)}
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center gap-1 mb-1">
                        <Building className="w-4 h-4" />
                        {project.client}
                      </div>
                      <div className="flex items-center gap-1 mb-1">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {project.budget}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map(tech => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Key Results:</h4>
                        <div className="space-y-1 text-xs text-muted-foreground">
                          {Object.entries(project.results).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="capitalize">{key}:</span>
                              <span className="font-medium text-primary">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedIndustry("All");
                    setSelectedCategory("All");
                    setSelectedStatus("All");
                  }}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}