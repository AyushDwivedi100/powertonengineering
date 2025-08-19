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
  const sitemapTree = [
    {
      title: "🏠 Homepage",
      path: "/",
      icon: <HomeIcon className="w-5 h-5 text-primary" />,
      description: "Main landing page showcasing our industrial automation expertise",
      accessPath: "Direct access from domain root",
      children: []
    },
    {
      title: "🏢 Company Information",
      path: null,
      icon: <Building2 className="w-5 h-5 text-primary" />,
      description: "Learn about Powerton Engineering",
      accessPath: "Main Navigation → Company",
      children: [
        {
          path: "/about",
          label: "About Us",
          description: "Company history, mission, vision, and team expertise",
          accessPath: "Header Navigation → About"
        }
      ]
    },
    {
      title: "⚙️ Services & Solutions",
      path: null,
      icon: <Settings className="w-5 h-5 text-primary" />,
      description: "Our core industrial automation offerings",
      accessPath: "Main Navigation → Services",
      children: [
        {
          path: "/services",
          label: "Services Overview",
          description: "Complete list of industrial automation and electrical engineering services",
          accessPath: "Header Navigation → Services"
        },
        {
          path: "/products", 
          label: "Products Catalog",
          description: "Industrial automation products, instrumentation, and equipment",
          accessPath: "Header Navigation → Products"
        },
        {
          path: "/projects",
          label: "Projects Portfolio", 
          description: "Showcase of completed industrial automation projects and case studies",
          accessPath: "Header Navigation → Projects"
        }
      ]
    },
    {
      title: "🔧 Business Tools",
      path: null,
      icon: <Calculator className="w-5 h-5 text-primary" />,
      description: "Tools for engaging with our services",
      accessPath: "Various sections and CTAs",
      children: [
        {
          path: "/quote",
          label: "Request Quote",
          description: "Submit detailed project requirements for custom quotation",
          accessPath: "Header Navigation → Quote | Hero Section CTA | Contact Section"
        },
        {
          path: "/contact",
          label: "Contact Us",
          description: "Multiple ways to reach our engineering team",
          accessPath: "Header Navigation → Contact | Footer Links"
        }
      ]
    },
    {
      title: "📰 News & Resources",
      path: null,
      icon: <Newspaper className="w-5 h-5 text-primary" />,
      description: "Latest updates and downloadable resources",
      accessPath: "Header Navigation → News",
      children: [
        {
          path: "/news",
          label: "News & Updates",
          description: "Latest company news, industry insights, and project announcements",
          accessPath: "Header Navigation → News"
        },
        {
          path: "/news/:slug",
          label: "Individual News Articles",
          description: "Detailed news articles with dynamic routing (e.g., /news/industrial-automation-trends-2024)",
          accessPath: "News Page → Click any article → Dynamic article page"
        },
        {
          path: "/portfolio-download",
          label: "Portfolio Downloads",
          description: "Downloadable project portfolios, case studies, and technical documentation",
          accessPath: "Projects Page → Download Portfolio Button | Footer Links"
        }
      ]
    },
    {
      title: "⚖️ Legal & Compliance",
      path: null,
      icon: <FileText className="w-5 h-5 text-primary" />,
      description: "Legal documents and website information",
      accessPath: "Footer Links → Legal Section",
      children: [
        {
          path: "/privacy-policy",
          label: "Privacy Policy",
          description: "How we collect, use, and protect personal information and data",
          accessPath: "Footer Links → Privacy Policy | Contact/Quote Forms → Privacy Link"
        },
        {
          path: "/terms-of-service",
          label: "Terms of Service",
          description: "Terms and conditions for using our website and services",
          accessPath: "Footer Links → Terms of Service"
        },
        {
          path: "/sitemap",
          label: "Website Sitemap",
          description: "Complete navigation map showing all available pages and paths",
          accessPath: "Footer Links → Sitemap | You are here!"
        }
      ]
    },
    {
      title: "❌ Error Pages",
      path: null,
      icon: <Globe className="w-5 h-5 text-primary" />,
      description: "System pages for error handling",
      accessPath: "Automatic system routing",
      children: [
        {
          path: "/404",
          label: "Page Not Found",
          description: "Displays when accessing non-existent URLs with navigation options",
          accessPath: "Automatically shown for invalid URLs"
        }
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
              Website Sitemap
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Complete navigation tree showing all pages and sections of Powerton Engineering website. 
              Each entry includes the navigation path to help you understand how to reach any page.
            </p>
          </div>

          {/* Navigation Legend */}
          <div className="mb-8 p-4 bg-accent/30 rounded-lg border border-border">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Navigation Guide
            </h3>
            <p className="text-sm text-muted-foreground">
              <strong>Access Path:</strong> Shows how to navigate to each page from the homepage. 
              <strong>Tree Structure:</strong> Parent sections contain child pages accessible through navigation.
            </p>
          </div>

          {/* Sitemap Tree */}
          <div className="space-y-6">
            {sitemapTree.map((section, index) => (
              <div key={index} className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
                {/* Section Header */}
                <div className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-b border-border">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center gap-3 flex-1">
                      {section.icon}
                      <div>
                        <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                          {section.title}
                        </h2>
                        <p className="text-sm text-muted-foreground mt-1">
                          {section.description}
                        </p>
                      </div>
                    </div>
                    {section.path && (
                      <div className="text-xs font-mono bg-muted px-3 py-1 rounded">
                        {section.path}
                      </div>
                    )}
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground bg-background/50 px-3 py-2 rounded">
                    <strong>📍 Access Path:</strong> {section.accessPath}
                  </div>
                </div>

                {/* Section Content */}
                <div className="p-6">
                  {section.path && (
                    <Link href={section.path}>
                      <div className="group mb-4 p-4 rounded-lg border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 cursor-pointer">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                            <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              Main Section Page
                            </span>
                          </div>
                          <div className="text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded">
                            {section.path}
                          </div>
                        </div>
                      </div>
                    </Link>
                  )}

                  {/* Child Pages */}
                  {section.children.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                        Related Pages:
                      </h4>
                      <div className="grid gap-3 pl-4 border-l-2 border-muted">
                        {section.children.map((child, childIndex) => (
                          <div key={childIndex}>
                            {child.path && !child.path.includes(':') ? (
                              <Link href={child.path}>
                                <div className="group block p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-accent/30 transition-all duration-200 cursor-pointer">
                                  <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2 mb-2">
                                        <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                          {child.label}
                                        </h3>
                                      </div>
                                      <p className="text-sm text-muted-foreground mb-2">
                                        {child.description}
                                      </p>
                                      <div className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                                        <strong>📍</strong> {child.accessPath}
                                      </div>
                                    </div>
                                    <div className="text-xs font-mono bg-muted px-2 py-1 rounded">
                                      {child.path}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            ) : (
                              <div className="p-4 rounded-lg border border-dashed border-muted bg-muted/20">
                                <div className="flex items-start justify-between gap-4">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                      <ChevronRight className="w-3 h-3 text-muted-foreground" />
                                      <h3 className="font-semibold text-foreground">
                                        {child.label}
                                      </h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-2">
                                      {child.description}
                                    </p>
                                    <div className="text-xs text-muted-foreground bg-background/50 px-2 py-1 rounded">
                                      <strong>📍</strong> {child.accessPath}
                                    </div>
                                  </div>
                                  <div className="text-xs font-mono bg-muted px-2 py-1 rounded">
                                    {child.path}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Access Tools */}
          <div className="mt-12 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-primary" />
              Quick Access
            </h3>
            <p className="text-muted-foreground mb-6">
              Need immediate assistance? Use these quick access tools or talk to our intelligent chatbot available on every page.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/contact">
                <div className="group p-4 bg-card hover:bg-primary/5 border border-border hover:border-primary/20 rounded-lg transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary">Contact Us</h4>
                      <p className="text-sm text-muted-foreground">Get in touch directly</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/quote">
                <div className="group p-4 bg-card hover:bg-secondary/5 border border-border hover:border-secondary/20 rounded-lg transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Calculator className="w-5 h-5 text-secondary" />
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-secondary">Request Quote</h4>
                      <p className="text-sm text-muted-foreground">Get project pricing</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/">
                <div className="group p-4 bg-card hover:bg-accent border border-border hover:border-primary/20 rounded-lg transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <HomeIcon className="w-5 h-5 text-primary" />
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary">Back to Home</h4>
                      <p className="text-sm text-muted-foreground">Return to homepage</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}