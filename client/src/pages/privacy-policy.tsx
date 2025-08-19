import { Helmet } from "react-helmet-async";
import { Shield, Eye, Lock, FileText, Mail, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/data/constants";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy - Powerton Engineering</title>
        <meta 
          name="description" 
          content="Privacy Policy for Powerton Engineering Pvt. Ltd. Learn how we collect, use, and protect your personal information when you use our services." 
        />
        <meta property="og:title" content="Privacy Policy - Powerton Engineering" />
        <meta 
          property="og:description" 
          content="Privacy Policy for Powerton Engineering Pvt. Ltd. Learn how we collect, use, and protect your personal information when you use our services." 
        />
      </Helmet>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: December 2024
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* Information We Collect */}
              <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-5 h-5 text-primary" />
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                    Information We Collect
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    When you use our services or contact us, we may collect the following information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and job title</li>
                    <li><strong>Project Information:</strong> Project requirements, technical specifications, and business needs</li>
                    <li><strong>Communication Data:</strong> Messages, inquiries, and correspondence with our team</li>
                    <li><strong>Technical Data:</strong> IP address, browser type, device information, and website usage analytics</li>
                  </ul>
                </div>
              </section>

              {/* How We Use Information */}
              <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-5 h-5 text-primary" />
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                    How We Use Your Information
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>To provide and deliver our engineering services</li>
                    <li>To respond to your inquiries and provide customer support</li>
                    <li>To prepare project quotes and proposals</li>
                    <li>To improve our website and services</li>
                    <li>To send you relevant updates about our services (with your consent)</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </div>
              </section>

              {/* Information Security */}
              <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-5 h-5 text-primary" />
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                    Information Security
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Secure data transmission using SSL encryption</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls limiting who can view your information</li>
                    <li>Secure data storage with regular backups</li>
                    <li>Staff training on data protection best practices</li>
                  </ul>
                </div>
              </section>

              {/* Data Sharing */}
              <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  Information Sharing
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>With your explicit consent</li>
                    <li>To comply with legal requirements or court orders</li>
                    <li>With trusted service providers who assist in our operations (under strict confidentiality agreements)</li>
                    <li>In the event of a business merger or acquisition (with advance notice to you)</li>
                  </ul>
                </div>
              </section>

              {/* Your Rights */}
              <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  Your Rights
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Restriction:</strong> Request restriction of processing of your information</li>
                    <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications at any time</li>
                  </ul>
                </div>
              </section>

              {/* Contact Information */}
              <section className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  Contact Us
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    If you have any questions about this Privacy Policy or want to exercise your rights, please contact us:
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
                  <div className="mt-6 p-4 bg-card border border-border rounded-lg">
                    <p className="text-sm">
                      <strong>Powerton Engineering Pvt. Ltd.</strong><br />
                      {COMPANY_INFO.address.street}<br />
                      {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.pincode}<br />
                      India
                    </p>
                  </div>
                </div>
              </section>

              {/* Updates */}
              <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  Policy Updates
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                    When we make significant changes, we will notify you by:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Posting the updated policy on our website</li>
                    <li>Updating the "Last updated" date at the top of this page</li>
                    <li>Sending you an email notification if you have provided your email address</li>
                  </ul>
                  <p>
                    Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.
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