import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { 
  Building2, 
  FileText, 
  Mail, 
  Package, 
  Settings, 
  Newspaper, 
  Calculator, 
  MapPin,
  Home as HomeIcon,
  User,
  Wrench,
  Briefcase,
  FolderOpen,
  Phone,
  Quote,
  Download,
  Shield,
  FileStack,
  ChevronRight,
  Globe
} from "lucide-react";

export default function Sitemap() {
  const sitePages = [
    {
      section: "Main Pages",
      icon: <HomeIcon className="w-5 h-5 text-primary" />,
      pages: [
        { path: "/", label: "Home", description: "Welcome to Powerton Engineering - Industrial Automation Solutions" },
        { path: "/about", label: "About Us", description: "Learn about our company, mission, and expertise" },
        { path: "/contact", label: "Contact", description: "Get in touch with our engineering team" }
      ]
    },
    {
      section: "Services & Products",
      icon: <Settings className="w-5 h-5 text-primary" />,
      pages: [
        { path: "/services", label: "Our Services", description: "Industrial automation and electrical engineering services" },
        { path: "/products", label: "Products", description: "Industrial automation products and equipment" },
        { path: "/projects", label: "Projects", description: "Portfolio of completed industrial automation projects" }
      ]
    },
    {
      section: "Get Quote & Resources",
      icon: <Calculator className="w-5 h-5 text-primary" />,
      pages: [
        { path: "/quote", label: "Request Quote", description: "Get a detailed quote for your project" },
        { path: "/news", label: "News & Updates", description: "Latest news and company updates" },
        { path: "/portfolio-download", label: "Download Portfolio", description: "Download project portfolios and documentation" }
      ]
    },
    {
      section: "Legal Information",
      icon: <FileText className="w-5 h-5 text-primary" />,
      pages: [
        { path: "/privacy-policy", label: "Privacy Policy", description: "How we protect your personal information" },
        { path: "/terms-of-service", label: "Terms of Service", description: "Terms and conditions for using our services" }
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
              Find all pages on our website. Click any page title to visit it directly.
            </p>
          </div>

          {/* Page Sections */}
          <div className="space-y-8">
            {sitePages.map((section, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  {section.icon}
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                    {section.section}
                  </h2>
                </div>
                
                <div className="grid gap-4">
                  {section.pages.map((page, pageIndex) => (
                    <Link key={pageIndex} href={page.path}>
                      <div className="group block p-4 rounded-lg border border-border hover:border-primary/20 hover:bg-accent/50 transition-all duration-200 cursor-pointer">
                        <div className="flex items-center gap-4">
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                              {page.label}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {page.description}
                            </p>
                          </div>
                          <div className="text-xs text-muted-foreground font-mono bg-muted px-2 py-1 rounded">
                            {page.path}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Need Help Finding Something?
            </h3>
            <p className="text-muted-foreground mb-4">
              Can't find what you're looking for? Contact us directly or use our intelligent chatbot available on every page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <div className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors cursor-pointer">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </div>
              </Link>
              <Link href="/quote">
                <div className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors cursor-pointer">
                  <Calculator className="w-4 h-4 mr-2" />
                  Request Quote
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}