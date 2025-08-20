import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useTheme } from "@/hooks/use-theme";
import { COMPANY_INFO, SERVICES, PRODUCTS } from "@/data/constants";
import darkLogoImage from "@assets/ChatGPT Image 20 अग॰ 2025, 12_06_57 pm_1755671828138.png";

// Use official Powerton Engineering logos
const lightLogoImage = "https://powertonengineering.in/assets/img/logo-new.jpg";

export default function Footer() {
  const { theme } = useTheme();
  
  // Determine current effective theme with system detection  
  const [systemDark, setSystemDark] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemDark(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setSystemDark(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  const isDark = theme === "dark" || (theme === "system" && systemDark);
  const currentLogo = isDark ? darkLogoImage : lightLogoImage;
  
  return (
    <footer 
      className="bg-gray-900 dark:bg-gray-950 text-white py-12" 
      role="contentinfo"
    >
      {/* Content */}
      <div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <div className="relative w-[200px] h-12 overflow-hidden">
                <img 
                  key={isDark ? 'dark' : 'light'}
                  src={currentLogo} 
                  alt="ID-002: Powerton Engineering Pvt. Ltd. logo" 
                  className="absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ease-in-out"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Your trusted partner in delivering high-quality engineering solutions and services for industrial automation and electrical systems.
            </p>
            <div className="flex space-x-4">
              <a 
                href={COMPANY_INFO.socialMedia.linkedin} 
                className="text-muted-foreground hover:text-secondary transition-colors" 
                aria-label="Follow us on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href={COMPANY_INFO.socialMedia.twitter} 
                className="text-muted-foreground hover:text-secondary transition-colors" 
                aria-label="Follow us on X"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a 
                href={COMPANY_INFO.socialMedia.facebook} 
                className="text-muted-foreground hover:text-secondary transition-colors" 
                aria-label="Follow us on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Services</h4>
            <ul className="space-y-3 text-muted-foreground">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link 
                    href="/services" 
                    className="hover:text-secondary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Products</h4>
            <ul className="space-y-3 text-muted-foreground">
              {PRODUCTS.slice(0, 5).map((product) => (
                <li key={product.id}>
                  <Link 
                    href="/products" 
                    className="hover:text-secondary transition-colors"
                  >
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Contact Info</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-secondary" aria-hidden="true" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-secondary" aria-hidden="true" />
                <span>{COMPANY_INFO.email}</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-secondary mt-1" aria-hidden="true" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.city}, ${COMPANY_INFO.address.state} ${COMPANY_INFO.address.pincode}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors cursor-pointer"
                  aria-label="Open office location in Google Maps"
                >
                  {COMPANY_INFO.address.street}<br />
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.pincode}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              &copy; 2024 Powerton Engineering Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground md:mr-24">
              <ThemeToggle />
              <a href="/sitemap" className="hover:text-secondary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
