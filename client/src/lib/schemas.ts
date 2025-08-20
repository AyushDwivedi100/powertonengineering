import { z } from "zod";

// Contact form schema
export const insertContactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(1, "Message is required"),
  agreedToPrivacy: z.boolean().optional(),
});

// Quote request schema
export const insertQuoteRequestSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  projectDetails: z.string().min(1, "Project details are required"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

// Types
export type InsertContact = z.infer<typeof insertContactSchema>;
export type InsertQuoteRequest = z.infer<typeof insertQuoteRequestSchema>;