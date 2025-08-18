import { SEO } from "@/lib/seo";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ServicesSection from "@/components/sections/services-section";
import ProductsSection from "@/components/sections/products-section";
import ClientsSection from "@/components/sections/clients-section";
import ProjectsSection from "@/components/sections/projects-section";
import GallerySection from "@/components/sections/gallery-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Powerton Engineering Pvt. Ltd.",
    "url": "https://powertonengineering.in",
    "description": "Leading manufacturer of electrical control panels and industrial automation solutions",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2nd Floor, F-25, F Block, Sector 6",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201301",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-94627-71662",
      "contactType": "customer service"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Engineering Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Process Automation",
            "description": "Advanced automation systems for industrial processes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Instrumentation Solutions",
            "description": "Precision instrumentation for monitoring and control"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title="Powerton Engineering - Industrial Automation & Electrical Control Panels | Leading Manufacturer India"
        description="Powerton Engineering Pvt. Ltd. - Premier manufacturer of electrical control panels, industrial automation systems, and instrumentation solutions. 15+ years serving industries across India with ISO certified quality engineering products and 24/7 support services."
        keywords="electrical control panels manufacturer India, industrial automation solutions, power control center PCC, motor control center MCC, instrumentation services, electrical engineering company, process automation, SCADA systems, HMI panels, industrial IoT, control system integration, Noida electrical company"
        canonicalUrl="https://powertonengineering.in"
        structuredData={structuredData}
      />
      
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <ProjectsSection />
      <GallerySection />
      <ClientsSection />
      <ContactSection />
    </>
  );
}
