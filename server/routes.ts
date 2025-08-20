import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertQuoteRequestSchema, insertChatbotMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Internal server error" });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Quote request submission
  app.post("/api/quote-requests", async (req, res) => {
    try {
      const quoteData = insertQuoteRequestSchema.parse(req.body);
      const quote = await storage.createQuoteRequest(quoteData);
      res.json({ success: true, quote });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Internal server error" });
      }
    }
  });

  // Get all quote requests
  app.get("/api/quote-requests", async (req, res) => {
    try {
      const quotes = await storage.getQuoteRequests();
      res.json(quotes);
    } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Chatbot message handling
  app.post("/api/chatbot", async (req, res) => {
    try {
      const messageData = insertChatbotMessageSchema.parse(req.body);
      const message = await storage.createChatbotMessage(messageData);
      
      // Generate bot response based on user message
      let botResponse = generateChatbotResponse(messageData.userMessage);
      
      // Store bot response
      await storage.createChatbotMessage({
        sessionId: messageData.sessionId,
        userMessage: botResponse,
        botResponse: "", // Bot response doesn't need a response
      });
      
      res.json({ success: true, response: botResponse });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Internal server error" });
      }
    }
  });

  // Get chatbot conversation
  app.get("/api/chatbot/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const messages = await storage.getChatbotMessages(sessionId);
      res.json(messages);
    } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

function generateChatbotResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();
  
  if (message.includes('service') || message.includes('automation') || message.includes('what do you do')) {
    return "We offer Process Automation, Instrumentation Solutions, Site Installation, Commissioning Services, Maintenance Contracts (AMC), Power & Control Panels, and Solar Solutions. Which service interests you most?";
  }
  
  if (message.includes('quote') || message.includes('price') || message.includes('cost')) {
    return "I'd be happy to help with a quote! Please use our contact form or call +91-94627-71662 for detailed pricing. You can also click 'Get Quote' to submit your requirements.";
  }
  
  if (message.includes('contact') || message.includes('phone') || message.includes('address')) {
    return "Contact us at +91-94627-71662 or info@powertonengineering.in. We're located at F-25, Sector 6, Noida, UP 201301. We're available 24/7 for emergency support.";
  }
  
  if (message.includes('support') || message.includes('technical') || message.includes('help')) {
    return "For technical support, please call our hotline at +91-94627-71662 or submit a detailed inquiry through our contact form. Our expert team is available 24/7.";
  }
  
  if (message.includes('automation') || message.includes('control panel')) {
    return "We specialize in industrial automation systems including PLC programming, SCADA systems, control panels, and process automation. What specific automation needs do you have?";
  }
  
  if (message.includes('solar') || message.includes('renewable')) {
    return "We provide complete solar solutions including panel installation, inverters, grid synchronization, and monitoring systems. Would you like information about our solar services?";
  }
  
  if (message.includes('maintenance') || message.includes('amc')) {
    return "We offer comprehensive Annual Maintenance Contracts (AMC) to keep your systems running smoothly with minimal downtime. Our maintenance programs include preventive and corrective services.";
  }
  
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return "Hello! Welcome to Powerton Engineering. I'm here to help you with information about our industrial automation and electrical engineering services. How can I assist you today?";
  }
  
  if (message.includes('thank') || message.includes('thanks')) {
    return "You're welcome! Is there anything else I can help you with regarding our engineering services?";
  }
  
  // Default response
  return "I'm here to help you with information about Powerton Engineering's services including Process Automation, Instrumentation, Control Panels, and Solar Solutions. You can also contact us directly at +91-94627-71662 or use our contact form for detailed inquiries.";
}
