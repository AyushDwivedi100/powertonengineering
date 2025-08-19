import { Helmet } from "react-helmet-async";
import { FileText, Scale, AlertTriangle, Shield, Mail, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/data/constants";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terms of Service - Powerton Engineering</title>
        <meta 
          name="description" 
          content="Terms of Service for Powerton Engineering Pvt. Ltd. Read our terms and conditions for using our industrial automation services and website." 
        />
        <meta property="og:title" content="Terms of Service - Powerton Engineering" />
        <meta 
          property="og:description" 
          content="Terms of Service for Powerton Engineering Pvt. Ltd. Read our terms and conditions for using our industrial automation services and website." 
        />
      </Helmet>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Scale className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These terms govern your use of our website and services. Please read them carefully.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: December 2024
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* Agreement to Terms */}
              <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-5 h-5 text-primary" />
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                    Agreement to Terms
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    By accessing and using the Powerton Engineering website and services, you accept and agree to be bound by these Terms of Service. 
                    If you do not agree to these terms, please do not use our services.
                  </p>
                  <p>
                    These terms apply to all visitors, users, and others who access or use our services.
                  </p>
                </div>
              </section>

              {/* Company Information */}
              <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  Company Information
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    These services are provided by:
                  </p>
                  <div className="p-4 bg-muted rounded-lg">
                    <p>
                      <strong>Powerton Engineering Pvt. Ltd.</strong><br />
                      {COMPANY_INFO.address.street}<br />
                      {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.pincode}<br />
                      India<br />
                      Email: {COMPANY_INFO.email}<br />
                      Phone: {COMPANY_INFO.phone}
                    </p>
                  </div>
                </div>
              </section>

              {/* Services */}
              <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  Our Services
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Powerton Engineering provides industrial automation and electrical engineering services including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Process Automation and Control Systems</li>
                    <li>Electrical Control Panel Manufacturing</li>
                    <li>Instrumentation and Monitoring Solutions</li>
                    <li>Power Distribution Systems</li>
                    <li>Industrial Equipment Supply</li>
                    <li>Engineering Consultation and Design</li>
                  </ul>
                  <p>
                    Service specifications, timelines, and pricing are detailed in individual project agreements and quotations.
                  </p>
                </div>
              </section>

              {/* Website Usage */}
              <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  Website Usage
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    You may use our website for lawful purposes only. You agree not to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Use the website in any way that violates applicable laws or regulations</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Transmit viruses, malware, or other harmful code</li>
                    <li>Use automated systems to extract data without permission</li>
                    <li>Interfere with the website's functionality or security</li>
                    <li>Impersonate our company or employees</li>
                  </ul>
                </div>
              </section>

              {/* Intellectual Property */}
              <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-5 h-5 text-primary" />
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                    Intellectual Property
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    All content on this website, including text, images, logos, designs, and software, is owned by Powerton Engineering 
                    or our licensors and is protected by intellectual property laws.
                  </p>
                  <p>
                    You may not reproduce, distribute, modify, or create derivative works from our content without written permission.
                  </p>
                </div>
              </section>

              {/* Project Terms */}
              <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  Project and Service Terms
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    For engineering projects and services:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Quotations:</strong> Valid for 30 days unless otherwise specified</li>
                    <li><strong>Payment:</strong> Terms as agreed in individual project contracts</li>
                    <li><strong>Timeline:</strong> Project schedules are estimates and may vary based on external factors</li>
                    <li><strong>Changes:</strong> Project modifications may affect cost and timeline</li>
                    <li><strong>Warranty:</strong> As specified in individual service agreements</li>
                    <li><strong>Quality:</strong> All work performed to applicable Indian standards and codes</li>
                  </ul>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                    Limitation of Liability
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    To the maximum extent permitted by law:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>We provide our website and services "as is" without warranties of any kind</li>
                    <li>We are not liable for indirect, incidental, or consequential damages</li>
                    <li>Our total liability for any claim shall not exceed the amount paid for the specific service</li>
                    <li>We are not responsible for delays caused by external factors beyond our control</li>
                  </ul>
                  <p>
                    This limitation does not affect warranties and liabilities that cannot be excluded by law.
                  </p>
                </div>
              </section>

              {/* Privacy */}
              <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  Privacy and Data Protection
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Your privacy is important to us. Our collection and use of personal information is governed by our 
                    <a href="/privacy-policy" className="text-primary hover:underline ml-1">Privacy Policy</a>, 
                    which is incorporated into these Terms of Service.
                  </p>
                </div>
              </section>

              {/* Termination */}
              <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  Termination
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We may terminate or suspend your access to our services immediately, without notice, for any reason, 
                    including breach of these Terms of Service.
                  </p>
                  <p>
                    Upon termination, your right to use our services ceases immediately.
                  </p>
                </div>
              </section>

              {/* Governing Law */}
              <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  Governing Law
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    These Terms of Service are governed by the laws of India. Any disputes shall be resolved in the courts of 
                    Noida, Uttar Pradesh, India.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  Contact Us
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    If you have questions about these Terms of Service, please contact us:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary hover:underline">
                          {COMPANY_INFO.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">Phone</p>
                        <a href={`tel:${COMPANY_INFO.phone}`} className="text-primary hover:underline">
                          {COMPANY_INFO.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Changes to Terms */}
              <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  Changes to Terms
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We reserve the right to modify these Terms of Service at any time. Changes will be effective when posted on this page 
                    with an updated "Last updated" date.
                  </p>
                  <p>
                    Your continued use of our services after any changes constitutes acceptance of the new terms.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}