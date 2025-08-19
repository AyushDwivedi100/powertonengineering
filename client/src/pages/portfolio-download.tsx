import { Helmet } from "react-helmet-async";
import { Download, FileText, Image, Briefcase, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PortfolioDownload() {
  const portfolioItems = [
    {
      id: 1,
      title: "Complete Company Portfolio",
      description: "Comprehensive portfolio showcasing all our industrial automation projects, capabilities, and achievements.",
      type: "PDF",
      size: "8.2 MB",
      pages: 45,
      categories: ["All Projects", "Company Overview", "Certifications", "Client Testimonials"]
    },
    {
      id: 2,
      title: "Industrial Automation Projects",
      description: "Focused collection of our automation and control system implementations across various industries.",
      type: "PDF",
      size: "6.5 MB",
      pages: 32,
      categories: ["Process Automation", "Control Systems", "SCADA", "PLC Programming"]
    },
    {
      id: 3,
      title: "Power Systems & Electrical",
      description: "Documentation of power distribution, electrical control panels, and energy management projects.",
      type: "PDF",
      size: "5.8 MB",
      pages: 28,
      categories: ["Power Distribution", "Control Panels", "Motor Control Centers", "Energy Management"]
    },
    {
      id: 4,
      title: "Project Case Studies",
      description: "Detailed case studies of our most successful industrial automation implementations with technical insights.",
      type: "PDF",
      size: "4.2 MB",
      pages: 24,
      categories: ["Case Studies", "Technical Solutions", "ROI Analysis", "Implementation Strategies"]
    }
  ];

  const handleDownload = (item: typeof portfolioItems[0]) => {
    // In a real implementation, this would trigger the actual download
    // For now, we'll show an alert
    alert(`Downloading: ${item.title}\n\nTo get access to our portfolio documents, please contact us directly at info@powertonengineering.in or call +91-94627-71662.`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Download Portfolio - Powerton Engineering</title>
        <meta 
          name="description" 
          content="Download comprehensive portfolio documents showcasing Powerton Engineering's industrial automation projects, capabilities, and achievements." 
        />
        <meta property="og:title" content="Download Portfolio - Powerton Engineering" />
        <meta 
          property="og:description" 
          content="Download comprehensive portfolio documents showcasing Powerton Engineering's industrial automation projects, capabilities, and achievements." 
        />
      </Helmet>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Download className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Portfolio Downloads
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access comprehensive documentation of our industrial automation projects, capabilities, and engineering excellence. 
              Download detailed portfolios to learn more about our work.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">1200+ Projects</h3>
              <p className="text-sm text-muted-foreground">Successfully completed projects across various industries</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Image className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">High-Quality Documentation</h3>
              <p className="text-sm text-muted-foreground">Professional portfolio with detailed project imagery</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Verified Results</h3>
              <p className="text-sm text-muted-foreground">Real projects with measurable outcomes and client testimonials</p>
            </div>
          </div>

          {/* Portfolio Items */}
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <FileText className="w-3 h-3" />
                          {item.type}
                        </span>
                        <span>{item.size}</span>
                        <span>{item.pages} pages</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-foreground mb-2">Includes:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.categories.map((category) => (
                        <Badge key={category} variant="outline" className="text-xs">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleDownload(item)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Request Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Information */}
          <div className="mt-12 p-6 bg-muted rounded-lg text-center">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Need a Custom Portfolio?
            </h3>
            <p className="text-muted-foreground mb-4">
              Looking for specific project information or a customized portfolio for your industry? 
              Contact our team to get tailored documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="/contact" className="flex items-center">
                  Contact Us
                </a>
              </Button>
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <a href="/quote" className="flex items-center">
                  Request Quote
                </a>
              </Button>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-card border border-border rounded-lg">
            <p className="text-xs text-muted-foreground text-center">
              <strong>Note:</strong> Portfolio documents are provided for informational purposes. 
              For the most current information and specific project details, please contact our team directly. 
              Some project details may be confidential and available only under NDA.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}