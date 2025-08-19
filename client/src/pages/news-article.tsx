import { Helmet } from "react-helmet-async";
import { useRoute } from "wouter";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

export default function NewsArticle() {
  const [match, params] = useRoute("/news/:slug");
  
  // Mock news article data - in a real app, this would come from a database or API
  const article = {
    id: 1,
    slug: params?.slug || "",
    title: "Powerton Engineering Completes Major Automation Project for Leading Manufacturing Plant",
    excerpt: "Successfully implemented comprehensive industrial automation system reducing operational costs by 30% and improving efficiency by 45%.",
    content: `
      <h2>Project Overview</h2>
      <p>Powerton Engineering has successfully completed a comprehensive industrial automation project for one of India's leading manufacturing facilities. This project represents a significant milestone in our commitment to delivering cutting-edge automation solutions that drive operational excellence.</p>
      
      <h3>Key Achievements</h3>
      <ul>
        <li>30% reduction in operational costs</li>
        <li>45% improvement in production efficiency</li>
        <li>Zero safety incidents during implementation</li>
        <li>100% system uptime since commissioning</li>
      </ul>
      
      <h3>Technical Implementation</h3>
      <p>The project involved the integration of advanced PLC systems, SCADA implementation, and comprehensive instrumentation solutions. Our team worked closely with the client to ensure minimal disruption to ongoing operations while implementing state-of-the-art automation technology.</p>
      
      <h3>Technologies Used</h3>
      <ul>
        <li>Schneider Electric PLC Systems</li>
        <li>Advanced SCADA with real-time monitoring</li>
        <li>Industrial IoT sensors and connectivity</li>
        <li>Predictive maintenance systems</li>
        <li>Energy management and optimization</li>
      </ul>
      
      <h3>Client Testimonial</h3>
      <blockquote>
        "Powerton Engineering delivered beyond our expectations. The new automation system has transformed our operations, and we're seeing immediate benefits in efficiency and cost reduction. Their professional approach and technical expertise were exceptional."
      </blockquote>
      
      <h3>Future Collaboration</h3>
      <p>Based on the success of this implementation, the client has already engaged Powerton Engineering for phase two of their automation journey, which will expand the system to additional production lines.</p>
      
      <p>This project demonstrates our capability to handle complex industrial automation challenges and deliver measurable results that directly impact our clients' bottom line.</p>
    `,
    author: "Powerton Engineering Team",
    date: "2024-12-15",
    category: "Project Success",
    tags: ["Industrial Automation", "PLC Systems", "SCADA", "Manufacturing", "Process Optimization"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop"
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Project Success": "bg-green-100 text-green-800 border-green-300",
      "Technology": "bg-blue-100 text-blue-800 border-blue-300",
      "Industry News": "bg-purple-100 text-purple-800 border-purple-300",
      "Company Update": "bg-orange-100 text-orange-800 border-orange-300"
    };
    return colors[category as keyof typeof colors] || "bg-muted text-foreground border-gray-300";
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{article.title} - Powerton Engineering News</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={`${article.title} - Powerton Engineering News`} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.image} />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/news">
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to News
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <div className="mb-6">
              <Badge className={getCategoryColor(article.category)}>
                {article.category}
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {article.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(article.date)}</span>
              </div>
              <Button variant="ghost" size="sm" className="p-0 h-auto">
                <Share2 className="w-4 h-4 mr-1" />
                Share
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {article.tags.map(tag => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <img 
              src={article.image} 
              alt={`ID-900: ${article.title}`}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-muted-foreground leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-primary/5 border border-primary/20 rounded-lg">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-muted-foreground mb-6">
              Learn how Powerton Engineering can help you achieve similar results with our industrial automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Contact Our Team
                </Button>
              </Link>
              <Link href="/quote">
                <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Request Project Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <Badge className="bg-blue-100 text-blue-800 border-blue-300 mb-3">
                  Technology
                </Badge>
                <h4 className="font-semibold text-foreground mb-2">
                  Latest Trends in Industrial IoT Implementation
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Exploring how Industrial Internet of Things is revolutionizing manufacturing processes...
                </p>
                <Link href="/news/industrial-iot-trends">
                  <Button variant="ghost" size="sm" className="p-0 text-primary hover:text-primary/80">
                    Read More →
                  </Button>
                </Link>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <Badge className="bg-green-100 text-green-800 border-green-300 mb-3">
                  Project Success
                </Badge>
                <h4 className="font-semibold text-foreground mb-2">
                  Energy Management System Reduces Costs by 40%
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Case study: How our energy management solution delivered exceptional savings...
                </p>
                <Link href="/news/energy-management-success">
                  <Button variant="ghost" size="sm" className="p-0 text-primary hover:text-primary/80">
                    Read More →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}