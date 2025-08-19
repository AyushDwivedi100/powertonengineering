import { SEO } from "@/lib/seo";
import { AnimatedSection, useScrollAnimations } from "@/hooks/use-scroll-animation";
import { useEffect } from "react";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ServicesSection from "@/components/sections/services-section";
import ProductsSection from "@/components/sections/products-section";
import ClientsSection from "@/components/sections/clients-section";
import ProjectsSection from "@/components/sections/projects-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  useScrollAnimations();
  
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
        title="Powerton Engineering - Industrial Automation & Control Panels | India"
        description="Leading manufacturer of electrical control panels, industrial automation systems, and instrumentation solutions. Expert engineering services across India with 15+ years experience."
        keywords="electrical control panels, industrial automation, process automation, instrumentation, power control center, motor control center, electrical engineering, India, Noida"
        structuredData={structuredData}
      />
      
      <HeroSection />
      <AnimatedSection animation="fadeInUp" delay={0.1} duration={0.8}>
        <AboutSection />
      </AnimatedSection>
      <AnimatedSection animation="fadeInLeft" delay={0.2} duration={0.9}>
        <ServicesSection />
      </AnimatedSection>
      <AnimatedSection animation="fadeInRight" delay={0.1} duration={0.8}>
        <ProductsSection />
      </AnimatedSection>
      <AnimatedSection animation="scaleIn" delay={0.15} duration={0.7}>
        <ClientsSection />
      </AnimatedSection>
      <AnimatedSection animation="slideInUp" delay={0.2} duration={0.9}>
        <ProjectsSection />
      </AnimatedSection>
      <AnimatedSection animation="fadeInUp" delay={0.1} duration={0.8}>
        <ContactSection />
      </AnimatedSection>
    </>
  );
}
