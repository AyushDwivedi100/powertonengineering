import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

export function SEO({
  title = "Powerton Engineering Pvt. Ltd. - Industrial Control Panels & Automation Solutions",
  description = "Leading manufacturer of electrical control panels, industrial automation systems, and instrumentation solutions. Serving industries across India with quality engineering products and services.",
  keywords = "electrical control panels, industrial automation, power control center, motor control center, instrumentation, electrical engineering, India",
  ogImage = "https://powertonengineering.in/og-image.jpg",
  canonicalUrl,
  structuredData
}: SEOProps) {
  const defaultStructuredData = {
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
    "sameAs": [
      "https://www.linkedin.com/company/powerton-engineering",
      "https://twitter.com/powertoneng",
      "https://www.facebook.com/powertonengineering"
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
      <meta name="author" content="Powerton Engineering Pvt. Ltd." />
      <meta name="theme-color" content="#1e3a8a" />
      <meta name="msapplication-TileColor" content="#1e3a8a" />
      
      {/* Enhanced SEO */}
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Noida" />
      <meta name="geo.position" content="28.5355;77.3910" />
      <meta name="ICBM" content="28.5355, 77.3910" />
      
      {/* Language and Content */}
      <meta httpEquiv="content-language" content="en-IN" />
      <meta name="language" content="English" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      
      {/* Open Graph Enhanced */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonicalUrl || "https://powertonengineering.in"} />
      <meta property="og:site_name" content="Powerton Engineering" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card Enhanced */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@powertoneng" />
      <meta name="twitter:creator" content="@powertoneng" />
      
      {/* Additional Business Info */}
      <meta name="business:contact_data:street_address" content="2nd Floor, F-25, F Block, Sector 6" />
      <meta name="business:contact_data:locality" content="Noida" />
      <meta name="business:contact_data:region" content="Uttar Pradesh" />
      <meta name="business:contact_data:postal_code" content="201301" />
      <meta name="business:contact_data:country_name" content="India" />
      <meta name="business:contact_data:phone_number" content="+91-94627-71662" />
      <meta name="business:contact_data:email" content="info@powertonengineering.in" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
}
