import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send, FileText, Mail, Phone } from "lucide-react";
import { FRONTEND_CONFIG, getFormSubmissionUrl } from "@/lib/frontend-config";

// Frontend-only quote form schema
const quoteFormSchema = z.object({
  // Contact Information
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(1, "Company name is required"),
  designation: z.string().optional(),
  
  // Project Information
  projectTitle: z.string().min(1, "Project title is required"),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().optional(),
  timeline: z.string().min(1, "Please select expected timeline"),
  
  // Technical Requirements
  services: z.array(z.string()).min(1, "Please select at least one service"),
  specifications: z.string().min(20, "Please provide detailed specifications (minimum 20 characters)"),
  additionalRequirements: z.string().optional(),
  
  // Project Details
  industryType: z.string().optional(),
  projectScale: z.string().optional(),
  preferredBrands: z.string().optional(),
  
  // Terms
  agreeToTerms: z.boolean().refine(val => val === true, "Please accept the terms and conditions"),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

const serviceOptions = [
  { id: "control-panels", label: "Electrical Control Panels" },
  { id: "automation", label: "Process Automation" },
  { id: "instrumentation", label: "Instrumentation Solutions" },
  { id: "scada", label: "SCADA Systems" },
  { id: "plc", label: "PLC Programming" },
  { id: "hmi", label: "HMI Development" },
  { id: "solar", label: "Solar Power Systems" },
  { id: "maintenance", label: "Maintenance Services" },
  { id: "consultation", label: "Technical Consultation" },
  { id: "installation", label: "Installation & Commissioning" },
];

export default function FrontendQuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      designation: "",
      projectTitle: "",
      projectType: "",
      budget: "",
      timeline: "",
      services: [],
      specifications: "",
      additionalRequirements: "",
      industryType: "",
      projectScale: "",
      preferredBrands: "",
      agreeToTerms: false,
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);

    try {
      const formUrl = getFormSubmissionUrl('quote');
      
      if (formUrl) {
        // Submit to Formspree
        const response = await fetch(formUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          toast({
            title: "Quote request submitted successfully!",
            description: "Our engineering team will review your requirements and respond within 24-48 hours.",
            duration: 6000,
          });
        } else {
          throw new Error('Form submission failed');
        }
      } else {
        // Fallback - show contact information
        toast({
          title: "Quote request received!",
          description: `Please send your requirements to: ${FRONTEND_CONFIG.company.email} or call ${FRONTEND_CONFIG.company.phone}`,
          duration: 6000,
        });
      }

      form.reset();
    } catch (error) {
      toast({
        title: "Thank you for your quote request!",
        description: `For immediate assistance: ${FRONTEND_CONFIG.company.phone} or email: ${FRONTEND_CONFIG.company.email}`,
        duration: 6000,
      });
    }

    setIsSubmitting(false);
  };

  return (
    <Card className="text-foreground">
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Contact Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Contact Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@company.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input placeholder="+91-XXXX-XXXXXX" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="designation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Designation</FormLabel>
                      <FormControl>
                        <Input placeholder="Your role/position" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your company name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Project Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Project Information
              </h3>
              
              <FormField
                control={form.control}
                name="projectTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Title *</FormLabel>
                    <FormControl>
                      <Input placeholder="Brief title for your project" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Type *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="new-installation">New Installation</SelectItem>
                          <SelectItem value="upgrade">System Upgrade</SelectItem>
                          <SelectItem value="retrofit">Retrofit</SelectItem>
                          <SelectItem value="maintenance">Maintenance Contract</SelectItem>
                          <SelectItem value="consultation">Technical Consultation</SelectItem>
                          <SelectItem value="design">Design & Engineering</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="timeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Expected Timeline *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Project timeline" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (&lt; 1 month)</SelectItem>
                          <SelectItem value="1-3-months">1-3 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="6-12-months">6-12 months</SelectItem>
                          <SelectItem value="1-year-plus">More than 1 year</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Approximate Budget</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range (optional)" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="under-1-lakh">Under ₹1 Lakh</SelectItem>
                          <SelectItem value="1-5-lakh">₹1-5 Lakhs</SelectItem>
                          <SelectItem value="5-10-lakh">₹5-10 Lakhs</SelectItem>
                          <SelectItem value="10-25-lakh">₹10-25 Lakhs</SelectItem>
                          <SelectItem value="25-50-lakh">₹25-50 Lakhs</SelectItem>
                          <SelectItem value="50-lakh-plus">₹50 Lakhs+</SelectItem>
                          <SelectItem value="discuss">Prefer to discuss</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="industryType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Industry Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="power-generation">Power Generation</SelectItem>
                          <SelectItem value="water-treatment">Water Treatment</SelectItem>
                          <SelectItem value="food-processing">Food Processing</SelectItem>
                          <SelectItem value="pharmaceutical">Pharmaceutical</SelectItem>
                          <SelectItem value="chemical">Chemical</SelectItem>
                          <SelectItem value="oil-gas">Oil & Gas</SelectItem>
                          <SelectItem value="renewable-energy">Renewable Energy</SelectItem>
                          <SelectItem value="infrastructure">Infrastructure</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Services Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Required Services *
              </h3>
              
              <FormField
                control={form.control}
                name="services"
                render={() => (
                  <FormItem>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {serviceOptions.map((service) => (
                        <FormField
                          key={service.id}
                          control={form.control}
                          name="services"
                          render={({ field }) => (
                            <FormItem
                              key={service.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(service.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, service.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== service.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal cursor-pointer">
                                {service.label}
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Technical Specifications Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Technical Specifications
              </h3>
              
              <FormField
                control={form.control}
                name="specifications"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Detailed Requirements *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please provide detailed specifications including:
- Technical requirements and standards
- Equipment specifications and quantities  
- Performance requirements
- Environmental conditions
- Compliance requirements
- Any special considerations..."
                        className="min-h-[120px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="projectScale"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Scale</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project scale" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="small">Small Scale (&lt; 10 I/O points)</SelectItem>
                          <SelectItem value="medium">Medium Scale (10-100 I/O points)</SelectItem>
                          <SelectItem value="large">Large Scale (100-500 I/O points)</SelectItem>
                          <SelectItem value="enterprise">Enterprise (500+ I/O points)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="preferredBrands"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Brands/Standards</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="e.g., Siemens, Allen-Bradley, Schneider..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="additionalRequirements"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Requirements</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Any additional requirements, special conditions, or questions..."
                        className="min-h-[80px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Terms and Conditions */}
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="agreeToTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm cursor-pointer">
                        I agree to the terms and conditions and privacy policy *
                      </FormLabel>
                      <p className="text-xs text-muted-foreground">
                        By submitting this form, you consent to Powerton Engineering contacting you regarding your project requirements.
                      </p>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-border">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting Quote Request...
                  </>
                ) : (
                  <>
                    <FileText className="mr-2 h-4 w-4" />
                    Submit Quote Request
                  </>
                )}
              </Button>
              
              <div className="flex gap-2">
                <Button 
                  type="button" 
                  variant="outline"
                  size="lg"
                  asChild
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a href="tel:+91-XXXX-XXXX" className="flex items-center justify-center">
                    <Phone className="mr-2 h-4 w-4" />
                    Call for Urgent Requirements
                  </a>
                </Button>
                
                <Button 
                  type="button" 
                  variant="outline"
                  size="lg"
                  asChild
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a href="mailto:info@powertonengineering.in" className="flex items-center justify-center">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Requirements
                  </a>
                </Button>
              </div>
            </div>
          </form>
        </Form>

        {/* Quote Information */}
        <div className="mt-6 pt-6 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium text-foreground mb-2">What happens next?</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Technical review within 24 hours</li>
                <li>• Detailed proposal with specifications</li>
                <li>• Cost breakdown and timeline</li>
                <li>• Follow-up consultation call</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Need immediate assistance?</h4>
              <div className="space-y-1 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="h-3 w-3 text-primary" />
                  <span>+91-XXXX-XXXX (Technical Team)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3 w-3 text-primary" />
                  <span>quotes@powertonengineering.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}