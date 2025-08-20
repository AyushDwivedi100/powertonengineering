import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/constants";
import { useTheme } from "@/hooks/use-theme";
import { motion, AnimatePresence } from "framer-motion";
import darkLogoImage from "@assets/ChatGPT Image 20 अग॰ 2025, 12_06_57 pm_1755671828138.png";

// Use official Powerton Engineering logos
const lightLogoImage = "https://powertonengineering.in/assets/img/logo-new.jpg";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
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

  const navigation = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Projects", href: "/projects" },
    { name: "News & Updates", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && href !== "#" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="bg-background border-b border-border shadow-sm sticky top-0 z-50" role="banner">
      {/* Top bar */}
      <motion.div
        className="bg-primary text-white py-1 sm:py-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col sm:flex-row sm:justify-between items-center gap-2 sm:gap-0 text-xs sm:text-sm">
          <motion.div
            className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center sm:justify-start"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            <motion.a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center hover:text-secondary transition-colors hover-scale"
              aria-label="Call us"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Phone
                className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-secondary"
                aria-hidden="true"
              />
              <span className="hidden xs:inline">{COMPANY_INFO.phone}</span>
              <span className="xs:hidden">Call</span>
            </motion.a>
            <motion.a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center hover:text-secondary transition-colors hover-scale"
              aria-label="Email us"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Mail
                className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-secondary"
                aria-hidden="true"
              />
              <span className="hidden sm:inline">{COMPANY_INFO.email}</span>
              <span className="sm:hidden">Email</span>
            </motion.a>
          </motion.div>
          <motion.a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.city}, ${COMPANY_INFO.address.state} ${COMPANY_INFO.address.pincode}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center hover:text-secondary transition-colors cursor-pointer hover-scale"
            aria-label="Open office location in Google Maps"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="flex items-center">
              <MapPin
                className="w-4 h-4 mr-2 text-secondary"
                aria-hidden="true"
              />
              <span className="text-xs lg:text-sm">
                {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} -
                Serving All India
              </span>
            </span>
          </motion.a>
        </div>
      </motion.div>

      {/* Main navigation */}
      <nav
        className="max-w-7xl mx-auto container-padding"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center py-3 sm:py-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/" className="flex items-center">
              <div className="relative w-[140px] sm:w-[160px] md:w-[180px] h-8 sm:h-10 md:h-12 overflow-hidden">
                <motion.img
                  key={isDark ? 'dark' : 'light'}
                  src={currentLogo}
                  alt="ID-001: Powerton Engineering Pvt. Ltd. logo"
                  className="absolute inset-0 w-full h-full object-contain"
                  loading="eager"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.03 }}
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop navigation */}
          <motion.div
            className="hidden lg:flex items-center space-x-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`text-foreground hover:text-primary transition-colors font-medium relative ${
                    isActive(item.href) ? "text-primary" : ""
                  }`}
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.span>
                  {isActive(item.href) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      layoutId="activeNav"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="ml-2"
            >
              <Link href="/quote">
                <Button className="btn-secondary hover-lift">Get Quote</Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden hover-scale"
                >
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                  <span className="sr-only">Open mobile menu</span>
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <AnimatePresence>
                <motion.nav
                  className="flex flex-col space-y-4 mt-8"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                    },
                    closed: {
                      transition: {
                        staggerChildren: 0.05,
                        staggerDirection: -1,
                      },
                    },
                  }}
                >
                  {navigation.map((item) => (
                    <motion.div
                      key={item.name}
                      variants={{
                        open: { opacity: 1, x: 0 },
                        closed: { opacity: 0, x: -20 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className={`text-lg font-medium transition-colors hover-scale block ${
                          isActive(item.href)
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <motion.span
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.name}
                        </motion.span>
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -20 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link href="/quote" onClick={() => setIsOpen(false)}>
                      <Button className="btn-secondary w-full mt-4 hover-lift">
                        Get Quote
                      </Button>
                    </Link>
                  </motion.div>
                </motion.nav>
              </AnimatePresence>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
