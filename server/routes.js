import { z } from "zod";
import { insertContactSchema, insertQuoteRequestSchema, insertChatbotMessageSchema } from "@shared/schema.js";
import { getMemStorage } from "./storage.js";

const storage = getMemStorage();

export function setupRoutes(app) {
  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ message: "Contact created successfully", contact });
    } catch (error) {
      console.error("Contact creation error:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  // Quote request submission
  app.post("/api/quote-requests", async (req, res) => {
    try {
      const validatedData = insertQuoteRequestSchema.parse(req.body);
      const quoteRequest = await storage.createQuoteRequest(validatedData);
      res.json({ message: "Quote request created successfully", quoteRequest });
    } catch (error) {
      console.error("Quote request creation error:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  // Chatbot message
  app.post("/api/chatbot", async (req, res) => {
    try {
      const { sessionId, userMessage } = req.body;
      
      if (!sessionId || !userMessage) {
        return res.status(400).json({ error: "Missing sessionId or userMessage" });
      }

      // Simple bot response logic
      const botResponse = generateBotResponse(userMessage);
      
      const chatMessage = await storage.createChatbotMessage({
        sessionId,
        userMessage,
        botResponse
      });

      res.json({ 
        message: "Message processed successfully", 
        response: botResponse,
        chatMessage 
      });
    } catch (error) {
      console.error("Chatbot message error:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Get contacts error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Get all quote requests (for admin purposes) 
  app.get("/api/quote-requests", async (req, res) => {
    try {
      const quoteRequests = await storage.getAllQuoteRequests();
      res.json(quoteRequests);
    } catch (error) {
      console.error("Get quote requests error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
}

function generateBotResponse(message) {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
    return "Hello! Welcome to Powerton Engineering. I'm here to help you with information about our industrial automation and electrical engineering services. How can I assist you today?";
  }
  
  if (lowerMessage.includes("service") || lowerMessage.includes("what do you do")) {
    return "Powerton Engineering specializes in:\n\n• Process Automation Systems\n• Electrical Control Panels\n• Industrial Instrumentation\n• Power Distribution Solutions\n• Motor Control Centers\n• Custom Engineering Solutions\n\nWould you like more details about any specific service?";
  }
  
  if (lowerMessage.includes("quote") || lowerMessage.includes("price") || lowerMessage.includes("cost")) {
    return "I'd be happy to help you get a quote for your project! For accurate pricing, please visit our Quote page or provide me with:\n\n• Type of service needed\n• Project scope and requirements\n• Timeline expectations\n• Budget range\n\nOur engineering team will provide a detailed quote within 24-48 hours.";
  }
  
  if (lowerMessage.includes("contact") || lowerMessage.includes("phone") || lowerMessage.includes("email")) {
    return "You can reach us at:\n\n📞 Phone: +91-94627-71662\n📧 Email: info@powertonengineering.in\n📍 Address: 2nd Floor, F-25, F Block, Sector 6, Noida, UP 201301\n\n🕒 Business Hours: Mon-Sat, 9:00 AM - 6:00 PM\n\nWould you like me to help you with anything specific about our services?";
  }
  
  if (lowerMessage.includes("automation") || lowerMessage.includes("control panel")) {
    return "Great! We're experts in industrial automation and control panels. Our solutions include:\n\n• SCADA Systems\n• PLC Programming\n• HMI Development\n• Motor Control Centers (MCC)\n• Power Control Centers (PCC)\n• Custom Control Panels\n\nWe've successfully completed 1200+ projects across various industries. Would you like to discuss your specific automation requirements?";
  }
  
  if (lowerMessage.includes("experience") || lowerMessage.includes("projects") || lowerMessage.includes("clients")) {
    return "Powerton Engineering has 15+ years of experience in industrial automation:\n\n✅ 1200+ Projects Completed\n✅ 450+ Happy Clients\n✅ 50+ Cities Served\n✅ Multiple Industries: Manufacturing, Chemical, Power, Water Treatment\n\nOur experienced team ensures quality delivery and long-term support. Would you like to see examples of our recent projects?";
  }
  
  if (lowerMessage.includes("thank") || lowerMessage.includes("thanks")) {
    return "You're welcome! I'm here whenever you need assistance with your industrial automation and electrical engineering needs. Feel free to ask any questions about our services, or visit our Quote page for project pricing. Have a great day!";
  }
  
  return "Thank you for your question! I'm here to help with information about Powerton Engineering's industrial automation and electrical solutions. Could you please provide more details about what you'd like to know? You can ask about:\n\n• Our services and capabilities\n• Getting a project quote\n• Contact information\n• Past projects and experience\n\nHow can I best assist you today?";
}