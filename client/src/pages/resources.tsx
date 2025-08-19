import { useState } from "react";
import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Video, 
  Download, 
  Calendar, 
  Clock, 
  Eye,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Search,
  Star,
  Users
} from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation, getAnimationClass } from "@/hooks/use-scroll-animation";

const WHITEPAPERS = [
  {
    id: 1,
    title: "Industrial IoT Implementation Guide",
    description: "Complete guide to implementing IoT solutions in industrial environments with real-world case studies.",
    category: "Technology",
    readTime: "12 min",
    downloads: 2847,
    rating: 4.8,
    publishDate: "2024-01-15",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    tags: ["IoT", "Industry 4.0", "Digital Transformation"]
  },
  {
    id: 2,
    title: "SCADA Systems Best Practices",
    description: "Essential practices for designing, implementing, and maintaining robust SCADA systems in industrial applications.",
    category: "Technical",
    readTime: "15 min",
    downloads: 1923,
    rating: 4.9,
    publishDate: "2024-02-10",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    tags: ["SCADA", "Process Control", "Automation"]
  },
  {
    id: 3,
    title: "Energy Efficiency in Industrial Automation",
    description: "Strategies and technologies for reducing energy consumption in automated industrial processes.",
    category: "Sustainability",
    readTime: "10 min",
    downloads: 1634,
    rating: 4.7,
    publishDate: "2024-03-05",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    tags: ["Energy Efficiency", "Green Technology", "Cost Optimization"]
  }
];

const CASE_STUDIES = [
  {
    id: 1,
    title: "Tata Steel: Smart Manufacturing Transformation",
    description: "How we helped Tata Steel achieve 40% efficiency improvement through comprehensive automation.",
    industry: "Manufacturing",
    readTime: "8 min",
    views: 5432,
    publishDate: "2024-01-20",
    image: "https://images.unsplash.com/photo-1565300075136-f58d3cb0a9b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    results: ["40% efficiency gain", "65% downtime reduction", "₹2.5Cr annual savings"]
  },
  {
    id: 2,
    title: "NTPC: Power Distribution Optimization",
    description: "Advanced power distribution automation leading to 99.8% uptime and significant cost savings.",
    industry: "Power Generation",
    readTime: "6 min",
    views: 3241,
    publishDate: "2024-02-15",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    results: ["99.8% uptime", "35% efficiency improvement", "₹1.8Cr savings"]
  }
];

const WEBINARS = [
  {
    id: 1,
    title: "Future of Industrial Automation",
    description: "Exploring emerging trends and technologies shaping the future of industrial automation.",
    date: "2024-04-15",
    time: "2:00 PM IST",
    duration: "60 min",
    speaker: "Dr. Rajesh Kumar, Chief Technology Officer",
    registrants: 834,
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    title: "ROI of Process Automation",
    description: "Learn how to calculate and maximize return on investment from automation projects.",
    date: "2024-03-20",
    time: "3:00 PM IST",
    duration: "45 min",
    speaker: "Priya Sharma, Senior Project Manager",
    registrants: 567,
    status: "recorded",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
];

const INDUSTRY_INSIGHTS = [
  {
    id: 1,
    title: "Manufacturing 4.0: The Indian Perspective",
    excerpt: "India's manufacturing sector is undergoing a digital transformation. Here's what it means for businesses.",
    publishDate: "2024-03-10",
    readTime: "5 min",
    views: 2156,
    category: "Industry Trends",
    image: "https://images.unsplash.com/photo-1565300075136-f58d3cb0a9b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    title: "Sustainability in Industrial Automation",
    excerpt: "Green automation technologies are becoming essential for competitive advantage and regulatory compliance.",
    publishDate: "2024-03-08",
    readTime: "7 min",
    views: 1834,
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
];

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("whitepapers");
  
  const heroAnimation = useScrollAnimation();
  const contentAnimation = useStaggeredAnimation(4);

  const filteredContent = {
    whitepapers: WHITEPAPERS.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    ),
    caseStudies: CASE_STUDIES.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.industry.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    webinars: WEBINARS.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    insights: INDUSTRY_INSIGHTS.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
  };

  return (
    <>
      <SEO
        title="Resources & Knowledge Hub - Powerton Engineering | Industry Insights & Technical Guides"
        description="Access comprehensive resources including whitepapers, case studies, webinars, and industry insights on industrial automation, process control, and engineering solutions."
        keywords="industrial automation resources, engineering whitepapers, automation case studies, technical guides, industry insights, webinars, SCADA guides, IoT implementation, process automation resources"
        canonicalUrl="https://powertonengineering.in/resources"
      />

      {/* Hero Section */}
      <section className={`section-padding hero-gradient text-white ${getAnimationClass('fade-in-up', heroAnimation.isVisible)}`}>
        <div className="max-w-7xl mx-auto container-padding">
          <div className="hero-content">
            <h1 className="hero-title">
              Knowledge <span className="text-secondary">Hub</span>
            </h1>
            <p className="hero-subtitle">
              Explore comprehensive resources, insights, and expertise in industrial automation
            </p>
            <div className="hero-features">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                <span>Technical Whitepapers</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>Case Studies</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5" />
                <span>Expert Webinars</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span>Industry Insights</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search resources, topics, or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-4">
                  <TabsTrigger value="whitepapers">Papers</TabsTrigger>
                  <TabsTrigger value="caseStudies">Cases</TabsTrigger>
                  <TabsTrigger value="webinars">Webinars</TabsTrigger>
                  <TabsTrigger value="insights">Insights</TabsTrigger>
                </TabsList>
              </div>

              {/* Whitepapers */}
              <TabsContent value="whitepapers">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredContent.whitepapers.map((paper, index) => (
                    <Card key={paper.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <img
                          src={paper.image}
                          alt={`ID-${String(400 + index).padStart(3, '0')}: ${paper.title}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge>{paper.category}</Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{paper.title}</CardTitle>
                        <p className="text-muted-foreground text-sm">{paper.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {paper.tags.map(tag => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {paper.readTime}
                          </div>
                          <div className="flex items-center gap-1">
                            <Download className="w-4 h-4" />
                            {paper.downloads.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            {paper.rating}
                          </div>
                        </div>
                        <Button className="w-full" variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Case Studies */}
              <TabsContent value="caseStudies">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredContent.caseStudies.map((study, index) => (
                    <Card key={study.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-64">
                        <img
                          src={study.image}
                          alt={`ID-${String(500 + index).padStart(3, '0')}: ${study.title}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge>{study.industry}</Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl">{study.title}</CardTitle>
                        <p className="text-muted-foreground">{study.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Key Results:</h4>
                            <ul className="space-y-1">
                              {study.results.map((result, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                                  {result}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex justify-between items-center text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {study.readTime}
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {study.views.toLocaleString()} views
                            </div>
                          </div>
                          <Button className="w-full">
                            Read Case Study
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Webinars */}
              <TabsContent value="webinars">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredContent.webinars.map((webinar, index) => (
                    <Card key={webinar.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <img
                          src={webinar.image}
                          alt={`ID-${String(600 + index).padStart(3, '0')}: ${webinar.title}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge variant={webinar.status === "upcoming" ? "default" : "secondary"}>
                            {webinar.status === "upcoming" ? "Upcoming" : "Recorded"}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl">{webinar.title}</CardTitle>
                        <p className="text-muted-foreground">{webinar.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(webinar.date).toLocaleDateString()}</span>
                              <Clock className="w-4 h-4 ml-2" />
                              <span>{webinar.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              <span>{webinar.registrants} registered</span>
                            </div>
                            <p className="text-muted-foreground">
                              <strong>Speaker:</strong> {webinar.speaker}
                            </p>
                          </div>
                          <Button className="w-full">
                            {webinar.status === "upcoming" ? "Register Now" : "Watch Recording"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Industry Insights */}
              <TabsContent value="insights">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredContent.insights.map((insight, index) => (
                    <Card key={insight.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <img
                          src={insight.image}
                          alt={`ID-${String(700 + index).padStart(3, '0')}: ${insight.title}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge>{insight.category}</Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{insight.title}</CardTitle>
                        <p className="text-muted-foreground text-sm">{insight.excerpt}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {insight.readTime}
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {insight.views.toLocaleString()} views
                          </div>
                          <span>{new Date(insight.publishDate).toLocaleDateString()}</span>
                        </div>
                        <Button variant="outline" className="w-full">
                          Read Article
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* No Results */}
            {searchTerm && Object.values(filteredContent).flat().length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No resources found matching "{searchTerm}"</p>
                <Button
                  variant="outline"
                  onClick={() => setSearchTerm("")}
                  className="mt-4"
                >
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}