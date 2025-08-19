import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Building2, FileText, Mail, Package, Settings, Newspaper, Calculator, MapPin } from "lucide-react";

export default function Sitemap() {
  const sitemapSections = [
    {
      title: "Main Pages",
      icon: <Building2 className="w-5 h-5 text-primary" />,
      links: [
        { path: "/", label: "Home", description: "Welcome to Powerton Engineering - Industrial Automation Solutions" },
        { path: "/about", label: "About Us", description: "Learn about our company, mission, and expertise in industrial automation" },
        { path: "/contact", label: "Contact", description: "Get in touch with our engineering team" },
      ]
    },
    {
      title: "Services & Solutions",
      icon: <Settings className="w-5 h-5 text-primary" />,
      links: [
        { path: "/services", label: "Services", description: "Comprehensive industrial automation and electrical engineering services" },
        { path: "/products", label: "Products", description: "Industrial automation products and equipment" },
        { path: "/projects", label: "Projects", description: "Portfolio of completed industrial automation projects" },
      ]
    },
    {
      title: "Business Tools",
      icon: <Calculator className="w-5 h-5 text-primary" />,
      links: [
        { path: "/quote", label: "Request Quote", description: "Get a detailed quote for your industrial automation project" },
      ]
    },
    {
      title: "Resources & Updates",
      icon: <Newspaper className="w-5 h-5 text-primary" />,
      links: [
        { path: "/news", label: "News & Updates", description: "Latest news and updates from Powerton Engineering" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sitemap - Powerton Engineering</title>
        <meta 
          name="description" 
          content="Complete sitemap of Powerton Engineering website. Navigate through all our industrial automation services, projects, and resources." 
        />
        <meta property="og:title" content="Sitemap - Powerton Engineering" />
        <meta 
          property="og:description" 
          content="Complete sitemap of Powerton Engineering website. Navigate through all our industrial automation services, projects, and resources." 
        />
      </Helmet>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sitemap
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Navigate through all pages and sections of Powerton Engineering website. 
              Find everything from our industrial automation services to project portfolios.
            </p>
          </div>

          {/* Sitemap Sections */}
          <div className="space-y-8">
            {sitemapSections.map((section, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  {section.icon}
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                    {section.title}
                  </h2>
                </div>
                
                <div className="grid gap-4">
                  {section.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="group">
                      <Link href={link.path}>
                        <a className="block p-4 rounded-lg border border-transparent hover:border-primary/20 hover:bg-accent/50 transition-all duration-200">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                {link.label}
                              </h3>
                              <p className="text-sm text-muted-foreground mt-1">
                                {link.description}
                              </p>
                            </div>
                            <div className="text-xs text-muted-foreground font-mono bg-muted px-2 py-1 rounded">
                              {link.path}
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Need Help Finding Something?
            </h3>
            <p className="text-muted-foreground mb-4">
              Can't find what you're looking for? Our intelligent chatbot is available on every page to help you navigate and find specific information about our industrial automation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <a className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </a>
              </Link>
              <Link href="/quote">
                <a className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors">
                  <Calculator className="w-4 h-4 mr-2" />
                  Request Quote
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}