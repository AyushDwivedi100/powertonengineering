import { SEO } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactForm from "@/components/forms/contact-form";
import QuoteForm from "@/components/forms/quote-form";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  User,
  Building,
  Headphones,
  Globe,
  CheckCircle
} from "lucide-react";
import { COMPANY_INFO } from "@/data/constants";

export default function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      subtitle: "24/7 Emergency Support",
      content: COMPANY_INFO.phone,
      action: `tel:${COMPANY_INFO.phone}`,
      description: "Call us for immediate assistance or emergency support"
    },
    {
      icon: Mail,
      title: "Email Support",
      subtitle: "Response within 24 hours",
      content: COMPANY_INFO.email,
      action: `mailto:${COMPANY_INFO.email}`,
      description: "Send detailed inquiries and technical questions"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      subtitle: "Quick chat support",
      content: "+91-94627-71662",
      action: "https://wa.me/919462771662",
      description: "Connect via WhatsApp for instant messaging"
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      subtitle: "By appointment only",
      content: `${COMPANY_INFO.address.city}, ${COMPANY_INFO.address.state}`,
      action: "https://maps.app.goo.gl/Nx4A15nXJcvVAG668",
      description: "Schedule a visit to our headquarters in Noida"
    }
  ];

  const officeLocations = [
    {
      name: "Corporate Headquarters",
      address: COMPANY_INFO.address.street,
      city: `${COMPANY_INFO.address.city}, ${COMPANY_INFO.address.state} ${COMPANY_INFO.address.pincode}`,
      landmark: COMPANY_INFO.address.landmark,
      phone: COMPANY_INFO.phone,
      email: COMPANY_INFO.email,
      hours: "Mon-Sat: 9:00 AM - 6:00 PM"
    }
  ];

  const supportServices = [
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Expert technical assistance for all our products and services"
    },
    {
      icon: User,
      title: "Customer Success",
      description: "Dedicated support to ensure your project success"
    },
    {
      icon: Building,
      title: "On-Site Support",
      description: "Field engineering support at your location"
    },
    {
      icon: Globe,
      title: "Remote Support",
      description: "Virtual assistance and remote system diagnostics"
    }
  ];

  return (
    <>
      <SEO
        title="Contact Powerton Engineering - Industrial Automation & Electrical Solutions | 24/7 Support"
        description="Contact Powerton Engineering for industrial automation, electrical control panels, and instrumentation services. 24/7 technical support, free consultations, and on-site service. Located in Noida, Uttar Pradesh, serving all India with pan-India service network. Call +91-94627-71662 or email info@powertonengineering.in"
        keywords="contact powerton engineering, industrial automation support, electrical engineering contact, instrumentation services, Noida engineering company, technical support India, 24/7 engineering support, automation consultancy, electrical panel manufacturer contact, process control support"
        canonicalUrl="https://powertonengineering.in/contact"
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-blue-800 text-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Get in <span className="text-secondary">Touch</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Ready to start your next project? Our expert team is here to help you with customized engineering solutions and professional consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-lg">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-secondary mr-3" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-secondary mr-3" />
                <span>24/7 Emergency Support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-secondary mr-3" />
                <span>Pan-India Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the communication method that works best for you. We're available 24/7 for emergency support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <Card key={method.title} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow group">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-sm text-secondary font-medium mb-3">{method.subtitle}</p>
                    <a 
                      href={method.action}
                      className="text-lg font-semibold text-primary hover:text-secondary transition-colors block mb-3"
                    >
                      {method.content}
                    </a>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you need general information or a detailed project quote, we have the right form for your needs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="contact" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="contact" className="text-lg py-3">
                  General Inquiry
                </TabsTrigger>
                <TabsTrigger value="quote" className="text-lg py-3">
                  Request Quote
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="contact">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">General Contact Form</CardTitle>
                    <p className="text-gray-600 text-center">
                      For general inquiries, service information, or technical questions
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="quote">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">Request Project Quote</CardTitle>
                    <p className="text-gray-600 text-center">
                      Get a detailed quote for your specific project requirements
                    </p>
                  </CardHeader>
                  <CardContent>
                    <QuoteForm />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
                Visit Our Office
              </h2>
              
              {officeLocations.map((location) => (
                <Card key={location.name} className="mb-6 border-none shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{location.name}</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-gray-600">{location.address}</p>
                          <p className="text-gray-600">{location.city}</p>
                          <p className="text-sm text-gray-500">{location.landmark}</p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-primary mr-3" />
                        <a href={`tel:${location.phone}`} className="text-gray-600 hover:text-primary">
                          {location.phone}
                        </a>
                      </div>

                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-primary mr-3" />
                        <a href={`mailto:${location.email}`} className="text-gray-600 hover:text-primary">
                          {location.email}
                        </a>
                      </div>

                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-primary mr-3" />
                        <span className="text-gray-600">{location.hours}</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <a 
                        href="https://maps.app.goo.gl/Nx4A15nXJcvVAG668"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-secondary hover:text-secondary/80 font-medium"
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        Get Directions
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
                Support Services
              </h2>
              
              <div className="space-y-6">
                {supportServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Card key={service.title} className="border-none shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                        </div>
                        <p className="text-gray-600">{service.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <Card className="mt-8 bg-gradient-to-br from-primary to-blue-800 text-white border-none">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-4">Emergency Support</h3>
                  <p className="mb-6 opacity-90">
                    Critical system failure? Our emergency response team is available 24/7 to help minimize downtime.
                  </p>
                  <a 
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="inline-flex items-center bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Emergency Hotline
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Business Hours & Availability
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-8">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Regular Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Saturday</p>
                  <p className="font-semibold">9:00 AM - 6:00 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-8">
                <Phone className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Support</h3>
                <div className="space-y-2 text-gray-600">
                  <p>24/7 Availability</p>
                  <p className="font-semibold">All Days</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-8">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Email Response</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Within 24 Hours</p>
                  <p className="font-semibold">Guaranteed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
