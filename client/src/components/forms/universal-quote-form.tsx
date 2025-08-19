import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { SERVICE_OPTIONS } from "@/data/constants";
import { getFormConfig, getCurrentConfig } from "@/lib/deployment";
import { z } from "zod";
import { CheckCircle, FileText, Calculator } from "lucide-react";

const universalQuoteFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  projectDetails: z.string().min(20, "Please provide detailed project requirements"),
  budget: z.string().optional(),
  timeline: z.string().optional()
});

type UniversalQuoteFormData = z.infer<typeof universalQuoteFormSchema>;

const budgetRanges = [
  { value: "under-5-lakh", label: "Under ₹5 Lakh" },
  { value: "5-10-lakh", label: "₹5 - 10 Lakh" },
  { value: "10-25-lakh", label: "₹10 - 25 Lakh" },
  { value: "25-50-lakh", label: "₹25 - 50 Lakh" },
  { value: "50-lakh-1-crore", label: "₹50 Lakh - 1 Crore" },
  { value: "above-1-crore", label: "Above ₹1 Crore" },
  { value: "to-be-discussed", label: "To be discussed" }
];

const timelineOptions = [
  { value: "immediate", label: "Immediate (1-2 weeks)" },
  { value: "1-month", label: "Within 1 month" },
  { value: "2-3-months", label: "2-3 months" },
  { value: "3-6-months", label: "3-6 months" },
  { value: "6-months-plus", label: "6+ months" },
  { value: "flexible", label: "Flexible timeline" }
];

export default function UniversalQuoteForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const config = getCurrentConfig();
  const formConfig = getFormConfig();

  const form = useForm<UniversalQuoteFormData>({
    resolver: zodResolver(universalQuoteFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      projectDetails: "",
      budget: "",
      timeline: ""
    }
  });

  const submitToBackend = async (data: UniversalQuoteFormData) => {
    const response = await fetch(formConfig.quoteFormEndpoint, {
      method: 'POST',
      headers: formConfig.headers,
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error('Backend submission failed');
    }
    
    return response.json();
  };

  const submitToFormspree = async (data: UniversalQuoteFormData) => {
    const response = await fetch(formConfig.quoteFormEndpoint, {
      method: 'POST',
      headers: formConfig.headers,
      body: JSON.stringify({
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.phone,
        company: data.company || 'Not specified',
        service: data.service,
        project_details: data.projectDetails,
        budget: data.budget || 'Not specified',
        timeline: data.timeline || 'Not specified',
        form_type: 'quote_request',
        website: 'Powerton Engineering'
      })
    });

    if (!response.ok) {
      throw new Error('Formspree submission failed');
    }
    
    return { success: true };
  };

  const onSubmit = async (data: UniversalQuoteFormData) => {
    setIsSubmitting(true);
    
    try {
      let result;
      
      // Submit based on deployment configuration
      if (config.mode === 'static') {
        result = await submitToFormspree(data);
      } else {
        // Try backend first, fallback to formspree
        try {
          result = await submitToBackend(data);
        } catch (backendError) {
          console.warn('Backend submission failed, falling back to Formspree');
          result = await submitToFormspree(data);
        }
      }

      if (result.success !== false) {
        setIsSubmitted(true);
        toast({
          title: "Quote Request Submitted!",
          description: "Our team will review your requirements and send a detailed quote within 24 hours.",
        });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Error Submitting Request",
        description: "Please try again or contact us directly at +91-94627-71662.",
        variant: "destructive",
      });
      console.error("Quote form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="text-foreground">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Quote Request Submitted!</h3>
          <p className="text-muted-foreground mb-4">
            Our engineering team will review your requirements and send you a detailed quote within 24 hours.
          </p>
          <div className="text-xs text-muted-foreground mb-4">
            Deployment Mode: {config.mode} | Form Handler: {config.mode === 'static' ? 'Formspree' : 'Backend'}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <FileText className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="font-medium text-sm">Detailed Analysis</p>
                <p className="text-xs text-muted-foreground">Technical specifications review</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <Calculator className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="font-medium text-sm">Custom Pricing</p>
                <p className="text-xs text-muted-foreground">Tailored to your requirements</p>
              </div>
            </div>
          </div>
          <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
            Submit Another Request
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="text-foreground">
      <CardContent className="p-6">
        {config.mode === 'development' && (
          <div className="text-xs text-muted-foreground mb-4 p-2 bg-muted/50 rounded">
            🚀 Mode: {config.mode} | Forms: {config.mode === 'static' ? 'Formspree' : 'Backend API'}
          </div>
        )}
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your first name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="Enter your phone number" {...field} />
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
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your company name (optional)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Required *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {SERVICE_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Details *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe your project requirements in detail..."
                      className="min-h-[120px]"
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
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Budget Range</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {budgetRanges.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
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
                    <FormLabel>Project Timeline</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {timelineOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Request Quote"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}