import FrontendContactForm from "@/components/forms/frontend-contact-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COMPANY_INFO } from "@/data/constants";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section 
      id="contact" 
      className="relative py-12 md:py-16 lg:py-20 text-white overflow-hidden" 
      role="main"
    >
      {/* Blurred Background Image - Electrical Control Panels */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-md"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200')",
            backgroundPosition: 'center 40%'
          }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          aria-label="ID-812: Electrical control panels background"
        />
        
        {/* Secondary blurred layer for enhanced depth */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-lg opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200')",
            backgroundPosition: 'center 60%'
          }}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
          aria-label="ID-813: Industrial machinery depth layer"
        />
      </div>

      {/* Dark overlay for optimal text contrast */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
      
      {/* Gradient overlay with brand colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-blue-800/60 to-primary/80"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-lg">Contact Us</span>
          <h2 className="text-responsive-title font-bold mt-4 mb-6">
            Let's Discuss Your Engineering Needs
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Ready to start your next project? Get in touch with our expert team for customized solutions and professional consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <p className="opacity-90">{COMPANY_INFO.phone}</p>
                  <p className="text-sm opacity-70">Available 24/7 for emergency support</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="opacity-90">{COMPANY_INFO.email}</p>
                  <p className="text-sm opacity-70">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Address</h4>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.city}, ${COMPANY_INFO.address.state} ${COMPANY_INFO.address.pincode}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors cursor-pointer block"
                    aria-label="Open office location in Google Maps"
                  >
                    <p className="opacity-90 hover:opacity-100">{COMPANY_INFO.address.street}</p>
                    <p className="opacity-90 hover:opacity-100">{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.pincode}</p>
                  </a>
                  <p className="text-sm opacity-70">Nearest Metro: {COMPANY_INFO.address.landmark}</p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Clock className="w-5 h-5 mr-3" />
                <h4 className="font-semibold">Business Hours</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Saturday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Emergency Support Only</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <FrontendContactForm />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
