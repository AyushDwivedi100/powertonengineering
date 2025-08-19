import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/constants";


export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" role="banner">
      {/* Top bar */}
      <div className="bg-primary text-white py-2 sm:py-3 hidden sm:block">
        <div className="max-w-7xl mx-auto container-padding flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="flex items-center hover:text-secondary transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="flex items-center hover:text-secondary transition-colors"
              aria-label="Email us"
            >
              <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
          <div className="hidden lg:flex items-center">
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" aria-hidden="true" />
              <span>{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} - Serving All India</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto container-padding" role="navigation" aria-label="Main navigation">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <Link href="/" className="flex items-center">
            <img 
              src="https://powertonengineering.in/assets/img/logo-new.jpg" 
              alt="ID-002: Powerton Engineering Pvt. Ltd. logo" 
              className="h-8 sm:h-10 md:h-12 w-auto"
              loading="eager"
            />
          </Link>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-foreground hover:bg-muted"
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 sm:w-80">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <Button 
                      variant="ghost" 
                      className={`w-full justify-start text-left ${isActive("/") ? "bg-primary/10 text-primary" : ""}`}
                    >
                      Home
                    </Button>
                  </Link>
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                      <Button 
                        variant="ghost" 
                        className={`w-full justify-start text-left ${isActive(item.href) ? "bg-primary/10 text-primary" : ""}`}
                      >
                        {item.name}
                      </Button>
                    </Link>
                  ))}
                  <div className="border-t pt-4 mt-4">
                    <Link href="/quote" onClick={() => setIsOpen(false)}>
                      <Button className="w-full btn-primary">
                        Get Free Quote
                      </Button>
                    </Link>
                  </div>
                  {/* Mobile contact info */}
                  <div className="border-t pt-4 mt-4 space-y-3">
                    <a 
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="flex items-center text-foreground/70 hover:text-primary transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-3" />
                      {COMPANY_INFO.phone}
                    </a>
                    <a 
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="flex items-center text-foreground/70 hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4 mr-3" />
                      {COMPANY_INFO.email}
                    </a>
                    <div className="flex items-start text-foreground/70">
                      <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-sm">{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}</span>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gray-700 hover:text-primary transition-colors font-medium ${
                  isActive(item.href) ? "text-primary border-b-2 border-primary" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/quote">
              <Button className="btn-secondary">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
