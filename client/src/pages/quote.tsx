import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import QuoteForm from "@/components/forms/quote-form";
import { CheckCircle, Clock, FileText, Users, Star, Award } from "lucide-react";

export default function Quote() {
  const benefits = [
    {
      icon: FileText,
      title: "Detailed Assessment",
      description: "Comprehensive project evaluation and technical specifications"
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Receive your detailed quote within 24-48 hours"
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Free technical consultation with our engineering team"
    },
    {
      icon: Star,
      title: "Customized Solutions",
      description: "Tailored engineering solutions for your specific requirements"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Submit Request",
      description: "Fill out our comprehensive quote form with your project details"
    },
    {
      step: "02", 
      title: "Technical Review",
      description: "Our engineering team analyzes your requirements and specifications"
    },
    {
      step: "03",
      title: "Site Assessment",
      description: "Optional on-site visit for complex projects (if required)"
    },
    {
      step: "04",
      title: "Detailed Quote",
      description: "Receive comprehensive pricing with timeline and deliverables"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Get Quote - Powerton Engineering",
    "description": "Request a detailed quote for industrial automation, electrical control panels, and engineering solutions from Powerton Engineering",
    "url": "https://powertonengineering.in/quote",
    "mainEntity": {
      "@type": "Organization",
      "name": "Powerton Engineering Pvt. Ltd.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-94627-71662",
        "contactType": "sales"
      }
    }
  };

  return (
    <>
      <SEO
        title="Get Quote - Industrial Automation & Electrical Solutions | Powerton Engineering"
        description="Request a detailed quote for process automation, electrical control panels, instrumentation, and custom engineering solutions. Free consultation and competitive pricing."
        keywords="quote request, industrial automation quote, electrical control panel pricing, process automation cost, engineering solutions quote, instrumentation pricing"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-blue-800 text-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Get Your Custom <span className="text-secondary">Engineering Quote</span>
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 mb-8 leading-relaxed">
              Professional assessment, competitive pricing, and expert consultation for your industrial automation and electrical engineering projects.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <CheckCircle className="w-5 h-5 mr-2 text-secondary" />
                <span className="text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <CheckCircle className="w-5 h-5 mr-2 text-secondary" />
                <span className="text-sm">24-48 Hour Response</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <CheckCircle className="w-5 h-5 mr-2 text-secondary" />
                <span className="text-sm">No Hidden Costs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Why Request a Quote from Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get accurate pricing and professional consultation for your engineering projects with our comprehensive quote service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <Card key={benefit.title} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-2xl border-none">
                <CardHeader className="bg-gradient-to-r from-primary to-blue-700 text-white rounded-t-lg">
                  <CardTitle className="text-2xl">Request Your Quote</CardTitle>
                  <p className="text-blue-100">
                    Fill out the form below and our engineering team will provide you with a detailed quote tailored to your project requirements.
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  <QuoteForm />
                </CardContent>
              </Card>
            </div>

            {/* Process Steps */}
            <div>
              <Card className="shadow-lg border-none mb-8">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Our Quote Process</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {processSteps.map((process, index) => (
                      <div key={process.step} className="flex items-start">
                        <div className="flex-shrink-0 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                          {process.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{process.title}</h4>
                          <p className="text-sm text-gray-600">{process.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <Card className="shadow-lg border-none">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Industry Expertise</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      15+ years of experience delivering successful engineering projects across India.
                    </p>
                    
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center justify-between">
                        <span>Projects Completed:</span>
                        <span className="font-semibold text-primary">1200+</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Happy Clients:</span>
                        <span className="font-semibold text-primary">450+</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Response Time:</span>
                        <span className="font-semibold text-secondary">24-48 hours</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="section-padding bg-primary text-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Need Help with Your Quote Request?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Our engineering consultants are available to discuss your project requirements and help you get the most accurate quote for your needs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 mr-4 text-secondary" />
                  <span className="text-lg">Technical consultation included</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 mr-4 text-secondary" />
                  <span className="text-lg">Flexible payment options available</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 mr-4 text-secondary" />
                  <span className="text-lg">Post-installation support included</span>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Contact Our Sales Team</h3>
                <div className="space-y-4 text-lg">
                  <div>
                    <div className="font-semibold">Phone:</div>
                    <a href="tel:+91-94627-71662" className="text-secondary hover:underline">
                      +91-94627-71662
                    </a>
                  </div>
                  <div>
                    <div className="font-semibold">Email:</div>
                    <a href="mailto:info@powertonengineering.in" className="text-secondary hover:underline">
                      info@powertonengineering.in
                    </a>
                  </div>
                  <div>
                    <div className="font-semibold">Business Hours:</div>
                    <div className="text-blue-100">Mon - Sat: 9:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}