import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/constants";
import logoImage from "@assets/logo-new-removebg-preview_1755497919444.png";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Projects", href: "/projects" },
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
      <div className="bg-primary text-white py-1 sm:py-2">
        <div className="max-w-7xl mx-auto container-padding flex flex-col sm:flex-row sm:justify-between items-center gap-2 sm:gap-0 text-xs sm:text-sm">
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center sm:justify-start">
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="flex items-center hover:text-secondary transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" aria-hidden="true" />
              <span className="hidden xs:inline">{COMPANY_INFO.phone}</span>
              <span className="xs:hidden">Call</span>
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="flex items-center hover:text-secondary transition-colors"
              aria-label="Email us"
            >
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" aria-hidden="true" />
              <span className="hidden sm:inline">{COMPANY_INFO.email}</span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>
          <div className="hidden md:flex items-center">
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" aria-hidden="true" />
              <span className="text-xs lg:text-sm">{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} - Serving All India</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto container-padding" role="navigation" aria-label="Main navigation">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <Link href="/" className="flex items-center">
            <img 
              src={logoImage} 
              alt="Powerton Engineering Pvt. Ltd." 
              className="h-8 sm:h-10 md:h-12 w-auto"
              loading="eager"
            />
          </Link>

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

          {/* Mobile navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open mobile menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-lg font-medium transition-colors ${
                      isActive(item.href) ? "text-primary" : "text-gray-700 hover:text-primary"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link href="/quote" onClick={() => setIsOpen(false)}>
                  <Button className="btn-secondary w-full mt-4">
                    Get Quote
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
