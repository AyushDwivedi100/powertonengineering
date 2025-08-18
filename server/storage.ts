import { type Contact, type InsertContact, type QuoteRequest, type InsertQuoteRequest, type ChatbotMessage, type InsertChatbotMessage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Contact management
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // Quote request management
  createQuoteRequest(quote: InsertQuoteRequest): Promise<QuoteRequest>;
  getQuoteRequests(): Promise<QuoteRequest[]>;
  
  // Chatbot messages
  createChatbotMessage(message: InsertChatbotMessage): Promise<ChatbotMessage>;
  getChatbotMessages(sessionId: string): Promise<ChatbotMessage[]>;
}

export class MemStorage implements IStorage {
  private contacts: Map<string, Contact>;
  private quoteRequests: Map<string, QuoteRequest>;
  private chatbotMessages: Map<string, ChatbotMessage>;

  constructor() {
    this.contacts = new Map();
    this.quoteRequests = new Map();
    this.chatbotMessages = new Map();
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date(),
      agreedToPrivacy: insertContact.agreedToPrivacy ?? false,
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async createQuoteRequest(insertQuote: InsertQuoteRequest): Promise<QuoteRequest> {
    const id = randomUUID();
    const quote: QuoteRequest = {
      ...insertQuote,
      id,
      createdAt: new Date(),
      company: insertQuote.company ?? null,
      budget: insertQuote.budget ?? null,
      timeline: insertQuote.timeline ?? null,
    };
    this.quoteRequests.set(id, quote);
    return quote;
  }

  async getQuoteRequests(): Promise<QuoteRequest[]> {
    return Array.from(this.quoteRequests.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async createChatbotMessage(insertMessage: InsertChatbotMessage): Promise<ChatbotMessage> {
    const id = randomUUID();
    const message: ChatbotMessage = {
      ...insertMessage,
      id,
      createdAt: new Date(),
    };
    this.chatbotMessages.set(id, message);
    return message;
  }

  async getChatbotMessages(sessionId: string): Promise<ChatbotMessage[]> {
    return Array.from(this.chatbotMessages.values())
      .filter(msg => msg.sessionId === sessionId)
      .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  }
}

export const storage = new MemStorage();
