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
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertQuoteRequestSchema } from "@shared/schema";
import { SERVICE_OPTIONS } from "@/data/constants";
import { z } from "zod";
import { CheckCircle, FileText, Calculator } from "lucide-react";

const quoteFormSchema = insertQuoteRequestSchema.extend({
  budget: z.string().optional(),
  timeline: z.string().optional()
});

// QuoteFormData type: z.infer<typeof quoteFormSchema>

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

export default function QuoteForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(quoteFormSchema),
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

  const quoteMutation = useMutation({
    mutationFn: async (data) => {
      const response = await apiRequest("POST", "/api/quote-requests", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Quote Request Submitted!",
        description: "Our team will review your requirements and send a detailed quote within 24 hours.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error Submitting Quote Request",
        description: "Please try again or contact us directly at +91-94627-71662.",
        variant: "destructive",
      });
      console.error("Quote form error:", error);
    }
  });

  const onSubmit = (data) => {
    quoteMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <Card className="text-gray-900 border-none shadow-lg">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quote Request Received!</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Thank you for your detailed project information. Our engineering team will analyze your requirements and prepare a comprehensive quote including:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
              <span className="text-sm text-gray-600">Detailed cost breakdown</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
              <span className="text-sm text-gray-600">Project timeline</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
              <span className="text-sm text-gray-600">Technical specifications</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
              <span className="text-sm text-gray-600">Implementation plan</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Expected response time: Within 24 hours
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            className="btn-primary"
          >
            Submit Another Quote Request
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="text-gray-900 border-none shadow-lg">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <Calculator className="w-6 h-6 text-secondary mr-3" />
          <h3 className="text-xl font-bold text-gray-900">Project Quote Request</h3>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 border-b pb-2">Contact Information</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-gray-700">
                        First Name *
                      </FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
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
                      <FormLabel className="text-sm font-semibold text-gray-700">
                        Last Name *
                      </FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
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
                      <FormLabel className="text-sm font-semibold text-gray-700">
                        Email Address *
                      </FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
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
                      <FormLabel className="text-sm font-semibold text-gray-700">
                        Phone Number *
                      </FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="tel"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
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
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-gray-700">
                      Company/Organization
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        value={field.value || ""}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                        placeholder="Enter your company name (optional)"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Project Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 border-b pb-2">Project Details</h4>
              
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-gray-700">
                      Primary Service Required *
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent">
                          <SelectValue placeholder="Select the primary service you need..." />
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
                    <FormLabel className="text-sm font-semibold text-gray-700">
                      Detailed Project Description *
                    </FormLabel>
                    <FormControl>
                      <Textarea 
                        {...field} 
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                        placeholder="Please provide detailed information about your project including:
• Scope of work and objectives
• Technical requirements and specifications
• Location and site conditions
• Any specific challenges or constraints
• Expected deliverables
• Integration with existing systems (if applicable)"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-gray-700">
                        Estimated Budget Range
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent">
                            <SelectValue placeholder="Select budget range (optional)" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range.value} value={range.value}>
                              {range.label}
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
                      <FormLabel className="text-sm font-semibold text-gray-700">
                        Expected Timeline
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent">
                            <SelectValue placeholder="Select timeline (optional)" />
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
            </div>

            {/* Additional Information */}
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-start">
                <FileText className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-800">
                  <p className="font-semibold mb-2">What happens next?</p>
                  <ul className="space-y-1 text-blue-700">
                    <li>• Our engineering team will review your requirements</li>
                    <li>• We may contact you for clarifications or additional details</li>
                    <li>• A comprehensive quote will be prepared within 24-48 hours</li>
                    <li>• The quote will include cost breakdown, timeline, and implementation plan</li>
                  </ul>
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              disabled={quoteMutation.isPending}
              className="w-full bg-secondary text-white py-4 rounded-lg hover:bg-secondary/90 transition-colors font-semibold text-lg"
            >
              {quoteMutation.isPending ? "Submitting Quote Request..." : "Submit Quote Request"}
            </Button>

            <p className="text-xs text-gray-500 text-center">
              By submitting this form, you agree to be contacted by our team regarding your project requirements. 
              We respect your privacy and will not share your information with third parties.
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
