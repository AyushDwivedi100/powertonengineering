import ContactForm from "@/components/forms/contact-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COMPANY_INFO } from "@/data/constants";

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-primary text-white" role="main">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-lg">Contact Us</span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-4 mb-6">
            Let's Discuss Your Engineering Needs
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Ready to start your next project? Get in touch with our expert team for customized solutions and professional consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                  <p className="opacity-90">{COMPANY_INFO.address.street}</p>
                  <p className="opacity-90">{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.pincode}</p>
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
    </section>
  );
}
