import { useState } from "react";
import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Award,
  TrendingUp,
  Target,
  Newspaper,
  Trophy,
  Rocket,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Users,
  Building,
  Zap,
  Globe
} from "lucide-react";
import { Link } from "wouter";
import { useScrollAnimation, getAnimationClass } from "@/hooks/use-scroll-animation";

// Company news and updates data
const LATEST_NEWS = [
  {
    id: 1,
    title: "Powerton Engineering Wins Excellence Award for Industrial Automation",
    date: "2024-12-15",
    category: "Awards",
    excerpt: "We are proud to announce that Powerton Engineering has been recognized with the 'Excellence in Industrial Automation' award by the Indian Engineering Society for our innovative solutions in process automation.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Award", "Recognition", "Automation"],
    featured: true
  },
  {
    id: 2,
    title: "Major Power Plant Automation Contract Secured with NTPC",
    date: "2024-12-10",
    category: "Business",
    excerpt: "Powerton Engineering has secured a significant contract worth ₹5 Crores with NTPC for the automation of their new thermal power plant in Gujarat, expected to be completed by Q3 2025.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Contract", "Power Plant", "NTPC"],
    featured: true
  },
  {
    id: 3,
    title: "Expansion into Renewable Energy Automation Solutions",
    date: "2024-12-05",
    category: "Company",
    excerpt: "As part of our strategic growth plan, we are expanding our services to include comprehensive automation solutions for solar and wind energy projects, targeting India's growing renewable energy sector.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Renewable Energy", "Expansion", "Solar"],
    featured: false
  },
  {
    id: 4,
    title: "New State-of-the-Art R&D Facility Inaugurated in Noida",
    date: "2024-11-28",
    category: "Infrastructure",
    excerpt: "Our new 5,000 sq ft research and development facility in Noida has been inaugurated, equipped with the latest testing equipment and advanced automation laboratories for product development.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["R&D", "Infrastructure", "Innovation"],
    featured: false
  },
  {
    id: 5,
    title: "Partnership with Leading European Automation Technology Provider",
    date: "2024-11-20",
    category: "Partnership",
    excerpt: "We have entered into a strategic partnership with a leading European automation technology provider to bring cutting-edge PLC and SCADA solutions to the Indian market.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Partnership", "Technology", "Europe"],
    featured: false
  },
  {
    id: 6,
    title: "ISO 9001:2015 Certification Achievement",
    date: "2024-11-15",
    category: "Quality",
    excerpt: "Powerton Engineering has successfully achieved ISO 9001:2015 certification, demonstrating our commitment to quality management systems and continuous improvement in all our processes.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["ISO", "Quality", "Certification"],
    featured: false
  }
];

const UPCOMING_PROJECTS = [
  {
    id: 1,
    title: "Smart City Infrastructure Automation",
    client: "Noida Smart City Ltd.",
    value: "₹12 Crores",
    timeline: "Q1 2025 - Q4 2025",
    description: "Complete automation infrastructure for smart city project including traffic management, waste management, and energy distribution systems.",
    status: "Planning Phase",
    technologies: ["IoT", "Smart Sensors", "City Management Systems", "Energy Automation"]
  },
  {
    id: 2,
    title: "Pharmaceutical Manufacturing Automation",
    client: "Cipla Limited",
    value: "₹8 Crores",
    timeline: "Q2 2025 - Q3 2025",
    description: "Advanced automation for pharmaceutical manufacturing processes with compliance to international standards and quality control systems.",
    status: "Contract Signed",
    technologies: ["GMP Compliance", "Batch Processing", "Quality Control", "Traceability Systems"]
  },
  {
    id: 3,
    title: "Solar Farm Automation and Monitoring",
    client: "Adani Green Energy",
    value: "₹6 Crores",
    timeline: "Q1 2025 - Q2 2025",
    description: "Comprehensive automation solution for 200MW solar farm including tracking systems, weather monitoring, and grid integration.",
    status: "Engineering Phase",
    technologies: ["Solar Tracking", "Weather Systems", "Grid Integration", "Remote Monitoring"]
  }
];

const ACHIEVEMENTS = [
  {
    year: "2024",
    awards: [
      "Excellence in Industrial Automation Award - Indian Engineering Society",
      "Best Innovation in Process Control - Automation India Awards",
      "ISO 9001:2015 Quality Management Certification",
      "Top 100 Engineering Companies - India Today"
    ]
  },
  {
    year: "2023",
    awards: [
      "Outstanding Engineering Solution - CII Manufacturing Excellence",
      "Safety Excellence Award - National Safety Council",
      "Technology Innovation Award - Engineering Export Promotion Council",
      "Best SME in Automation Sector - MSME Ministry"
    ]
  },
  {
    year: "2022",
    awards: [
      "Engineering Excellence Award - Federation of Indian Chambers",
      "Sustainable Technology Award - Green Business Council",
      "Quality Excellence Recognition - Bureau of Indian Standards"
    ]
  }
];

const FUTURE_GOALS = [
  {
    goal: "Market Leadership",
    description: "Become the leading automation solutions provider in North India by 2026",
    target: "2026",
    progress: 75,
    icon: Trophy
  },
  {
    goal: "Technology Innovation",
    description: "Launch 5 new AI-powered automation solutions for Industry 4.0",
    target: "2025",
    progress: 45,
    icon: Rocket
  },
  {
    goal: "Geographic Expansion",
    description: "Establish operations in 3 new states across India",
    target: "2025",
    progress: 30,
    icon: Globe
  },
  {
    goal: "Team Growth",
    description: "Expand our engineering team to 200+ professionals",
    target: "2026",
    progress: 60,
    icon: Users
  },
  {
    goal: "Revenue Milestone",
    description: "Achieve ₹100 Crores annual revenue milestone",
    target: "2026",
    progress: 55,
    icon: TrendingUp
  },
  {
    goal: "Sustainability Focus",
    description: "Implement carbon-neutral operations and green technology solutions",
    target: "2025",
    progress: 40,
    icon: Zap
  }
];

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTab, setSelectedTab] = useState("news");
  const heroAnimation = useScrollAnimation();

  const categories = ["all", "Awards", "Business", "Company", "Infrastructure", "Partnership", "Quality"];
  
  const filteredNews = selectedCategory === "all" 
    ? LATEST_NEWS 
    : LATEST_NEWS.filter(item => item.category === selectedCategory);

  const featuredNews = LATEST_NEWS.filter(item => item.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Awards": "bg-yellow-100 text-yellow-800",
      "Business": "bg-blue-100 text-blue-800",
      "Company": "bg-green-100 text-green-800",
      "Infrastructure": "bg-purple-100 text-purple-800",
      "Partnership": "bg-indigo-100 text-indigo-800",
      "Quality": "bg-pink-100 text-pink-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const getStatusColor = (status: string) => {
    const colors = {
      "Planning Phase": "bg-blue-100 text-blue-800",
      "Contract Signed": "bg-green-100 text-green-800",
      "Engineering Phase": "bg-purple-100 text-purple-800",
      "In Progress": "bg-orange-100 text-orange-800"
    };
    return colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "News & Updates - Powerton Engineering",
    "description": "Latest news, company updates, achievements, and future goals of Powerton Engineering - Industrial Automation Excellence",
    "url": "https://powertonengineering.in/news",
    "mainEntity": {
      "@type": "Organization",
      "name": "Powerton Engineering Pvt. Ltd.",
      "description": "Leading industrial automation and electrical engineering company"
    }
  };

  return (
    <>
      <SEO
        title="News & Updates - Company News, Achievements & Future Goals | Powerton Engineering"
        description="Stay updated with latest news, achievements, awards, upcoming projects, and future goals of Powerton Engineering. Leading industrial automation company's journey towards excellence."
        keywords="company news, engineering news, automation industry updates, powerton achievements, industrial automation awards, engineering excellence, company milestones"
        canonicalUrl="https://powertonengineering.in/news"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className={`py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary to-blue-800 text-white ${getAnimationClass('fade-in-up', true)}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
              News & <span className="text-secondary">Updates</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-8 opacity-90">
              Stay informed about our latest achievements, upcoming projects, industry recognition, and strategic vision for the future of industrial automation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Award className="w-5 h-5 mr-2 text-secondary" />
                <span className="text-sm">Award Winning</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <TrendingUp className="w-5 h-5 mr-2 text-secondary" />
                <span className="text-sm">Growing Strong</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Rocket className="w-5 h-5 mr-2 text-secondary" />
                <span className="text-sm">Future Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
              <TabsTrigger value="news" className="flex items-center gap-2">
                <Newspaper className="w-4 h-4" />
                Latest News
              </TabsTrigger>
              <TabsTrigger value="projects" className="flex items-center gap-2">
                <Rocket className="w-4 h-4" />
                Upcoming Projects
              </TabsTrigger>
              <TabsTrigger value="achievements" className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Achievements
              </TabsTrigger>
              <TabsTrigger value="goals" className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                Future Goals
              </TabsTrigger>
            </TabsList>

            <TabsContent value="news" className="space-y-12">
              {/* Featured News */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Featured News</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredNews.map((item) => (
                    <Card key={item.id} className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 overflow-hidden">
                      <div className="aspect-video">
                        <img 
                          src={item.image} 
                          alt={`ID-850: ${item.title}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge className={getCategoryColor(item.category)}>
                            {item.category}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formatDate(item.date)}
                          </div>
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">{item.title}</h3>
                        <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tags.map(tag => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <a href={`/news/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}>
                          <Button variant="outline" size="sm" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">All News</h2>
                <div className="flex flex-wrap gap-2 mb-8">
                  {categories.map(category => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category)}
                      size="sm"
                      className={selectedCategory === category 
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                        : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      }
                    >
                      {category === "all" ? "All Categories" : category}
                    </Button>
                  ))}
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredNews.map((item) => (
                    <Card key={item.id} className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 overflow-hidden">
                      <div className="aspect-video">
                        <img 
                          src={item.image} 
                          alt={`ID-${860 + item.id}: ${item.title}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={getCategoryColor(item.category)} size="sm">
                            {item.category}
                          </Badge>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3 mr-1" />
                            {formatDate(item.date)}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{item.excerpt}</p>
                        <a href={`/news/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}>
                          <Button variant="outline" size="sm" className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                            Read More
                          </Button>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Upcoming Projects</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Exciting projects on the horizon that demonstrate our commitment to innovation and excellence.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {UPCOMING_PROJECTS.map((project) => (
                    <Card key={project.id} className="bg-card border border-border rounded-lg shadow-sm">
                      <CardHeader className="p-6">
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-xl md:text-2xl font-semibold text-foreground">
                            {project.title}
                          </CardTitle>
                          <Badge className={getStatusColor(project.status)}>
                            {project.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            <span>{project.client}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{project.timeline}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6 pt-0">
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-bold text-secondary">{project.value}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map(tech => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Awards & Achievements</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Recognition of our commitment to excellence, innovation, and quality in industrial automation.
                </p>
                
                <div className="space-y-8">
                  {ACHIEVEMENTS.map((yearData) => (
                    <Card key={yearData.year} className="bg-card border border-border rounded-lg shadow-sm">
                      <CardHeader className="p-6">
                        <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                          <Trophy className="w-6 h-6 text-secondary" />
                          {yearData.year}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 pt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {yearData.awards.map((award, index) => (
                            <div key={index} className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                              <Award className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                              <span className="text-foreground font-medium">{award}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="goals" className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Future Goals & Vision</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Our strategic roadmap towards becoming India's leading industrial automation solutions provider.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {FUTURE_GOALS.map((goal) => {
                    const Icon = goal.icon;
                    return (
                      <Card key={goal.goal} className="bg-card border border-border rounded-lg shadow-sm">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-foreground mb-1">{goal.goal}</h3>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                <Target className="w-4 h-4" />
                                <span>Target: {goal.target}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-4">{goal.description}</p>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Progress</span>
                              <span className="font-medium text-foreground">{goal.progress}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                                style={{ width: `${goal.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 lg:py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Be Part of Our Journey
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto opacity-90">
            Join us as we continue to innovate and lead in industrial automation. Connect with us for partnerships, career opportunities, or project collaborations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg font-semibold transition-colors">
                Contact Us
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground border-white text-white hover:bg-white hover:text-primary px-6 py-3 rounded-lg font-semibold transition-all">
                View Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}