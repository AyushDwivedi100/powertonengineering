import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema } from "@/lib/schemas";
import { SERVICE_OPTIONS } from "@/data/constants";
import { z } from "zod";

const contactFormSchema = insertContactSchema.extend({
  agreedToPrivacy: z.boolean().refine(val => val === true, {
    message: "You must agree to the privacy policy"
  })
});

// ContactFormData type: z.infer<typeof contactFormSchema>

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(contactFormSchema),
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

  const contactMutation = useMutation({
    mutationFn: async (data) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your inquiry. We'll respond within 24 hours.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact us directly at +91-94627-71662.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    }
  });

  const onSubmit = (data: any) => {
    contactMutation.mutate(data);
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
          <h3 className="text-xl font-bold text-foreground mb-2">Message Sent Successfully!</h3>
          <p className="text-muted-foreground mb-6">
            Thank you for your inquiry. Our team will review your message and respond within 24 hours.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            className="btn-primary"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="text-foreground border-none shadow-lg">
      <CardContent className="p-4 sm:p-6 md:p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs sm:text-sm font-semibold text-foreground">
                      First Name *
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent text-sm sm:text-base"
                        placeholder="Enter your first name"
                      />
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
                    <FormLabel className="text-sm font-semibold text-foreground">
                      Last Name *
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-foreground">
                      Email *
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        type="email"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                        placeholder="Enter your email address"
                      />
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
                    <FormLabel className="text-sm font-semibold text-foreground">
                      Phone *
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        type="tel"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
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
                  <FormLabel className="text-sm font-semibold text-foreground">
                    Service of Interest *
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent">
                        <SelectValue placeholder="Select a service..." />
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
                  <FormLabel className="text-sm font-semibold text-foreground">
                    Project Details *
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      {...field} 
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="Please describe your project requirements, timeline, and any specific technical specifications..."
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
                      className="rounded border-gray-300 text-secondary focus:ring-secondary"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm text-muted-foreground">
                      I agree to the{" "}
                      <a href="/privacy-policy" className="text-secondary hover:underline">
                        Privacy Policy
                      </a>{" "}
                      and consent to being contacted about my inquiry. *
                    </FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              disabled={contactMutation.isPending}
              className="w-full bg-secondary text-white py-4 rounded-lg hover:bg-secondary/90 transition-colors font-semibold"
            >
              {contactMutation.isPending ? "Sending..." : "Send Message & Request Quote"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
