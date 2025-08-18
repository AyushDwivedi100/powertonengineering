import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
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

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isToggling, setIsToggling] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle scroll management and click outside detection
  useEffect(() => {
    if (isOpen) {
      // Disable scroll but keep scrollbar visible
      const scrollY = window.scrollY;
      document.body.style.overflowY = 'scroll';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      return () => {
        document.body.style.overflowY = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  // Separate effect for click outside detection
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      
      // Check if click is inside chatbot window
      if (chatWindowRef.current?.contains(target)) {
        return;
      }
      
      // Check if click is on toggle button or its children
      const toggleButton = document.querySelector('[data-chatbot-toggle="true"]');
      if (toggleButton?.contains(target)) {
        return; // Don't close here - let the button's onClick handle it
      }
      
      // Check if clicking on the blur overlay
      if (target.classList?.contains('backdrop-blur-sm')) {
        setIsOpen(false);
        return;
      }
      
      // Click is outside - close chatbot (but not if it's on the toggle button)
      setIsOpen(false);
    };

    // Add delay to prevent immediate triggering after opening
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 300);

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
          message: "Hello! I'm here to help you learn about Powerton Engineering's services and navigate our website. How can I assist you today?",
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

  const generateResponse = (userInput: string): ChatbotResponse => {
    const input = userInput.toLowerCase();

    // Services related queries
    if (input.includes('service') || input.includes('what do you do') || input.includes('what can you do')) {
      return {
        message: "Powerton Engineering offers comprehensive industrial automation solutions including:\n\n• Process Automation Systems\n• Instrumentation & Control\n• Electrical Panel Manufacturing\n• SCADA & HMI Solutions\n• Industrial IoT Implementation\n• Maintenance & Support Services\n\nWould you like detailed information about any specific service?",
        suggestions: ["Process Automation", "Instrumentation", "Electrical Panels", "Get a Quote"]
      };
    }

    // Products related queries
    if (input.includes('product') || input.includes('equipment') || input.includes('manufacture')) {
      return {
        message: "We manufacture and supply a wide range of industrial products:\n\n• Control Panels & Switchgear\n• Motor Control Centers (MCC)\n• Distribution Boards\n• Automation Hardware\n• Sensors & Transmitters\n• Variable Frequency Drives (VFD)\n\nAll our products meet international quality standards and come with comprehensive warranties.",
        suggestions: ["Control Panels", "Motor Control Centers", "View All Products", "Technical Specifications"]
      };
    }

    // Quote and pricing queries
    if (input.includes('quote') || input.includes('price') || input.includes('cost') || input.includes('estimate')) {
      return {
        message: "To provide an accurate quote, I'll need some project details. You can:\n\n1. Fill out our online quote request form\n2. Call us directly at +91-94627-71662\n3. Email us at info@powertonengineering.in\n\nOur team typically responds within 24 hours with detailed proposals.",
        suggestions: ["Request Quote", "Contact Us", "View Projects", "Technical Requirements"]
      };
    }

    // Location and contact queries
    if (input.includes('location') || input.includes('address') || input.includes('where') || input.includes('contact')) {
      return {
        message: "Powerton Engineering is located in:\n\n📍 2nd Floor, F-25, F Block, Sector 6\nNoida, Uttar Pradesh - 201301, India\n\n📞 Phone: +91-94627-71662\n📧 Email: info@powertonengineering.in\n\nWe serve clients across India with our engineering solutions.",
        suggestions: ["Get Directions", "Call Now", "Send Email", "Service Areas"]
      };
    }

    // Projects and experience queries
    if (input.includes('project') || input.includes('experience') || input.includes('portfolio') || input.includes('case study')) {
      return {
        message: "With 15+ years of experience, we've successfully completed 1200+ projects across various industries:\n\n• Manufacturing & Production\n• Oil & Gas\n• Power Generation\n• Water Treatment\n• Chemical Processing\n• Food & Beverage\n\nOur expertise ensures reliable, efficient automation solutions tailored to your specific needs.",
        suggestions: ["View Projects", "Industry Experience", "Client Testimonials", "Technical Capabilities"]
      };
    }

    // Navigation help
    if (input.includes('navigate') || input.includes('find') || input.includes('page') || input.includes('menu')) {
      return {
        message: "I can help you navigate our website:\n\n🏠 Home - Company overview\n📋 About - Our story and team\n⚙️ Services - Detailed service information\n🔧 Products - Product catalog\n📊 Projects - Portfolio showcase\n📞 Contact - Get in touch\n\nWhat specific information are you looking for?",
        suggestions: ["View Services", "See Products", "Our Projects", "Contact Information"]
      };
    }

    // Technical support queries
    if (input.includes('support') || input.includes('maintenance') || input.includes('technical') || input.includes('help')) {
      return {
        message: "We provide comprehensive technical support:\n\n• 24/7 Emergency Support\n• Preventive Maintenance Programs\n• Remote Monitoring & Diagnostics\n• On-site Technical Assistance\n• Spare Parts & Components\n• Training & Documentation\n\nOur certified engineers ensure minimal downtime and optimal system performance.",
        suggestions: ["Emergency Support", "Maintenance Plans", "Technical Training", "Contact Support"]
      };
    }

    // Default response for unrecognized queries
    return {
      message: "I'd be happy to help you with information about Powerton Engineering! I can assist with:\n\n• Our services and capabilities\n• Product information and specifications\n• Project portfolio and experience\n• Contact details and locations\n• Quote requests and pricing\n• Technical support options\n\nWhat would you like to know more about?",
      suggestions: ["Our Services", "Products & Solutions", "Get Quote", "Contact Us"]
    };
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addMessage(inputValue, 'user');
    const response = generateResponse(inputValue);
    addBotMessage(response);
    setInputValue("");
  };

  const handleSuggestionClick = (suggestion: string) => {
    addMessage(suggestion, 'user');
    const response = generateResponse(suggestion);
    addBotMessage(response);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.div
        className="fixed bottom-2 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        <Button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Prevent rapid clicking issues
            if (isToggling) return;
            
            setIsToggling(true);
            
            // Toggle the state directly without checking prev state
            setIsOpen(!isOpen);
            
            // Reset toggle flag after animation completes
            setTimeout(() => {
              setIsToggling(false);
            }, 400);
          }}
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
          aria-label={isOpen ? "Close chat" : "Open chat"}
          data-chatbot-toggle="true"
          disabled={isToggling}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white" />
          )}
        </Button>
      </motion.div>

      {/* Blur Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          />
        )}
      </AnimatePresence>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatWindowRef}
            className="fixed bottom-24 right-6 z-40 w-80 sm:w-96 max-h-[calc(100vh-200px)]"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="shadow-2xl border-0">
              <CardHeader className="bg-primary text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Bot className="w-5 h-5" />
                  Powerton Assistant
                  <span className="ml-auto text-xs bg-secondary px-2 py-1 rounded-full">
                    Online
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex flex-col max-h-[calc(100vh-280px)]">
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 min-h-[280px] max-h-[380px] scroll-smooth chatbot-messages">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.sender === 'user'
                            ? 'bg-primary text-white'
                            : 'bg-white text-gray-800 shadow-sm border'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {message.sender === 'bot' && (
                            <Bot className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                          )}
                          {message.sender === 'user' && (
                            <User className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                          )}
                          <div className="whitespace-pre-line text-sm">
                            {message.text}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Typing indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white p-3 rounded-lg shadow-sm border max-w-[80%]">
                        <div className="flex items-center gap-2">
                          <Bot className="w-4 h-4 text-primary" />
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Show suggestions if the last message has them */}
                  {messages.length > 0 && !isTyping && (
                    <div className="flex flex-wrap gap-2">
                      {["Our Services", "Get Quote", "Contact Us", "View Projects"].map((suggestion) => (
                        <button
                          key={suggestion}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="text-xs bg-white border border-gray-300 hover:border-primary hover:text-primary px-3 py-1 rounded-full transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t bg-white rounded-b-lg">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ask about our services..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="flex-1"
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      size="icon"
                      className="bg-primary hover:bg-primary/90"
                    >
                      <Send className="w-4 h-4" />
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