import ContactForm from "@/components/forms/contact-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COMPANY_INFO } from "@/data/constants";

export default function ContactSection() {
  return (
    <section 
      id="contact" 
      className="relative section-padding text-white overflow-hidden" 
      role="main"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
      }}
    >
      {/* Background overlay for contrast */}
      <div className="absolute inset-0 bg-primary/85"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-blue-800/80"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="container-responsive container-padding">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-lg">Contact Us</span>
          <h2 className="text-responsive-title font-bold mt-4 mb-6">
            Let's Discuss Your Engineering Needs
          </h2>
          <p className="text-responsive-body opacity-90 container-responsive">
            Ready to start your next project? Get in touch with our expert team for customized solutions and professional consultation.
          </p>
        </div>

        <div className="flex-responsive gap-8 sm:gap-12">
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
            <ContactForm />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
