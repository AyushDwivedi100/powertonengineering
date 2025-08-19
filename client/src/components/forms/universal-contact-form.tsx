import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { SERVICE_OPTIONS } from "@/data/constants";
import { getFormConfig, getCurrentConfig } from "@/lib/deployment";
import { z } from "zod";

const universalContactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide more details about your inquiry"),
  agreedToPrivacy: z.boolean().refine(val => val === true, {
    message: "You must agree to the privacy policy"
  })
});

type UniversalContactFormData = z.infer<typeof universalContactFormSchema>;

export default function UniversalContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const config = getCurrentConfig();
  const formConfig = getFormConfig();

  const form = useForm<UniversalContactFormData>({
    resolver: zodResolver(universalContactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      agreedToPrivacy: false
    }
  });

  const submitToBackend = async (data: UniversalContactFormData) => {
    const response = await fetch(formConfig.contactFormEndpoint, {
      method: 'POST',
      headers: formConfig.headers,
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error('Backend submission failed');
    }
    
    return response.json();
  };

  const submitToFormspree = async (data: UniversalContactFormData) => {
    const response = await fetch(formConfig.contactFormEndpoint, {
      method: 'POST',
      headers: formConfig.headers,
      body: JSON.stringify({
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.phone,
        service: data.service,
        message: data.message,
        privacy_agreed: data.agreedToPrivacy,
        form_type: 'contact_inquiry',
        website: 'Powerton Engineering'
      })
    });

    if (!response.ok) {
      throw new Error('Formspree submission failed');
    }
    
    return { success: true };
  };

  const onSubmit = async (data: UniversalContactFormData) => {
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
          title: "Message Sent Successfully!",
          description: "Thank you for your inquiry. We'll respond within 24 hours.",
        });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact us directly at +91-94627-71662.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="text-foreground">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
          <p className="text-muted-foreground mb-4">
            Thank you for your inquiry. Our team will review your message and respond within 24 hours.
          </p>
          <div className="text-xs text-muted-foreground mb-4">
            Deployment Mode: {config.mode} | Form Handler: {config.mode === 'static' ? 'Formspree' : 'Backend'}
          </div>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            Send Another Message
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
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service of Interest *</FormLabel>
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
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your project requirements..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="agreedToPrivacy"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm font-normal">
                      I agree to the{" "}
                      <a href="/privacy-policy" className="text-primary hover:underline">
                        Privacy Policy
                      </a>{" "}
                      and consent to the processing of my personal data *
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}