import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotResponse {
  message: string;
  suggestions?: string[];
}

// Static keyword-based responses for frontend-only chatbot
const getStaticResponse = (message: string): ChatbotResponse => {
  const lowerMessage = message.toLowerCase();
  
  // Services related
  if (lowerMessage.includes('service') || lowerMessage.includes('what do you do')) {
    return {
      message: "Powerton Engineering offers comprehensive industrial automation solutions including:\n\n• Electrical Control Panels\n• Process Automation\n• Instrumentation Solutions\n• Solar Power Systems\n• Motor Control Centers\n• Industrial Maintenance\n\nWould you like to know more about any specific service?",
      suggestions: ["Tell me about control panels", "What about solar solutions?", "Process automation details", "How can I get a quote?"]
    };
  }
  
  // Products related
  if (lowerMessage.includes('product') || lowerMessage.includes('equipment')) {
    return {
      message: "Our product portfolio includes:\n\n• Custom Control Panels\n• PLC & SCADA Systems\n• Variable Frequency Drives\n• Solar Inverters & Components\n• Electrical Protection Equipment\n• Automation Hardware\n\nEach product is engineered for reliability and performance.",
      suggestions: ["View our projects", "Get a custom quote", "Contact our engineers", "Download portfolio"]
    };
  }
  
  // Quote/pricing related
  if (lowerMessage.includes('quote') || lowerMessage.includes('price') || lowerMessage.includes('cost')) {
    return {
      message: "To provide an accurate quote, I'll need some project details. You can:\n\n• Fill out our detailed Quote Form\n• Call us directly for urgent requirements\n• Email your project specifications\n\nOur engineering team will respond within 24 hours with a comprehensive proposal.",
      suggestions: ["Get a quote", "Call now", "Email requirements", "View sample projects"]
    };
  }
  
  // Contact information
  if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email') || lowerMessage.includes('address')) {
    return {
      message: "Here's how to reach Powerton Engineering:\n\n📞 Phone: +91-XXXX-XXXX\n📧 Email: info@powertonengineering.in\n📍 Location: India\n\nOur team is available Monday-Friday, 9 AM - 6 PM IST for technical consultations and project discussions.",
      suggestions: ["Get a quote", "View our location", "Schedule a call", "Send email"]
    };
  }
  
  // Location related
  if (lowerMessage.includes('location') || lowerMessage.includes('where') || lowerMessage.includes('address')) {
    return {
      message: "Powerton Engineering is based in India, serving clients across the country and internationally. We provide:\n\n• On-site consultations\n• Remote technical support\n• Installation and commissioning\n• Maintenance services\n\nContact us to discuss your project location requirements.",
      suggestions: ["Contact us", "Get site visit", "Remote consultation", "View service areas"]
    };
  }
  
  // Projects/portfolio related
  if (lowerMessage.includes('project') || lowerMessage.includes('portfolio') || lowerMessage.includes('work') || lowerMessage.includes('example')) {
    return {
      message: "We've successfully completed projects across various industries:\n\n• Manufacturing Plants\n• Power Generation\n• Water Treatment\n• Food Processing\n• Pharmaceutical\n• Renewable Energy\n\nView our portfolio to see detailed case studies and technical specifications.",
      suggestions: ["View portfolio", "See case studies", "Industry solutions", "Get similar quote"]
    };
  }
  
  // Technical/capabilities
  if (lowerMessage.includes('technical') || lowerMessage.includes('capability') || lowerMessage.includes('expertise')) {
    return {
      message: "Our technical expertise includes:\n\n• PLC Programming (Siemens, Allen-Bradley, Schneider)\n• SCADA Development\n• HMI Design\n• Panel Fabrication\n• System Integration\n• Compliance & Standards\n\nOur certified engineers ensure quality and reliability in every project.",
      suggestions: ["Technical consultation", "View certifications", "Discuss requirements", "Schedule meeting"]
    };
  }
  
  // Greeting responses
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return {
      message: "Hello! Welcome to Powerton Engineering. I'm here to help you learn about our industrial automation solutions and answer any questions about our services.",
      suggestions: ["What services do you offer?", "Tell me about your products", "How can I get a quote?", "View your projects"]
    };
  }
  
  // Default response
  return {
    message: "Thank you for your interest in Powerton Engineering! For detailed technical discussions and project-specific questions, I recommend:\n\n• Contacting our engineering team directly\n• Filling out a quote form with your requirements\n• Scheduling a consultation call\n\nHow can I help you get started?",
    suggestions: ["Contact us", "Get a quote", "View services", "See projects"]
  };
};

export default function UniversalChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle scroll management when chatbot opens/closes
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isOpen]);

  // Click outside detection
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      if (chatWindowRef.current?.contains(target)) {
        return;
      }
      
      const toggleButton = document.querySelector('[data-chatbot-toggle="true"]');
      if (toggleButton && (toggleButton === target || toggleButton.contains(target))) {
        return;
      }
      
      let currentElement: HTMLElement | null = target;
      while (currentElement && currentElement !== document.body) {
        if (currentElement.getAttribute('data-chatbot-toggle') === 'true') {
          return;
        }
        currentElement = currentElement.parentElement;
      }
      
      setIsOpen(false);
    };

    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 200);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage({
          message: "Hello! I'm here to help you learn about Powerton Engineering's industrial automation services. How can I assist you today?",
          suggestions: [
            "What services do you offer?",
            "Tell me about your products",
            "How can I get a quote?",
            "Where are you located?"
          ]
        });
      }, 500);
    }
  }, [isOpen, messages.length]);

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addBotMessage = (response: ChatbotResponse) => {
    setIsTyping(true);
    setTimeout(() => {
      addMessage(response.message, 'bot');
      setIsTyping(false);
    }, 1000);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setInputValue("");
    addMessage(userMessage, 'user');

    // Get static response based on keywords
    const response = getStaticResponse(userMessage);
    addBotMessage(response);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          data-chatbot-toggle="true"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </div>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-20 right-4 z-40 w-96 max-w-[calc(100vw-2rem)]"
          >
            <Card className="border-2 border-primary/20 shadow-2xl" ref={chatWindowRef}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Bot className="w-5 h-5" />
                  Powerton Assistant
                  <div className="ml-auto flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-muted-foreground">Online</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {/* Messages */}
                <div className="h-96 overflow-y-auto p-4 space-y-4 bg-muted/20">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex items-start gap-2 ${
                        message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === 'user' 
                          ? 'bg-secondary text-secondary-foreground' 
                          : 'bg-primary text-primary-foreground'
                      }`}>
                        {message.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                      </div>
                      <div className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-secondary text-secondary-foreground ml-auto'
                          : 'bg-background border border-border'
                      }`}>
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                        <span className="text-xs text-muted-foreground mt-1 block">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Typing indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-2"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="bg-background border border-border p-3 rounded-lg">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-border bg-background">
                  <div className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1"
                      disabled={isTyping}
                    />
                    <Button 
                      onClick={handleSendMessage} 
                      size="sm"
                      disabled={!inputValue.trim() || isTyping}
                      className="bg-primary hover:bg-primary/90"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Contact Links */}
                  <div className="flex gap-2 mt-2">
                    <Button variant="outline" size="sm" asChild className="text-xs">
                      <a href="tel:+91-XXXX-XXXX" className="flex items-center gap-1">
                        <Phone className="w-3 h-3" />
                        Call Us
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="text-xs">
                      <a href="mailto:info@powertonengineering.in" className="flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        Email
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}