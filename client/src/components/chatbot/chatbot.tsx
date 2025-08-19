import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User, ExternalLink, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  navigateAction?: NavigateAction;
}

interface NavigateAction {
  type: 'navigate' | 'scroll';
  target: string;
  label: string;
}

interface ChatbotResponse {
  message: string;
  suggestions?: string[];
  navigateAction?: NavigateAction;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [location, setLocation] = useLocation();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Removed scroll management - let page scroll normally when chatbot opens

  // Click outside detection - only listen when open
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      
      // Don't close if clicking inside chatbot window
      if (chatWindowRef.current?.contains(target)) {
        return;
      }
      
      // Don't close if clicking the toggle button (let the button handle it)
      const toggleButton = document.querySelector('[data-chatbot-toggle="true"]');
      if (toggleButton?.contains(target)) {
        return;
      }
      
      // Close on outside click
      setIsOpen(false);
    };

    // Add event listener with a small delay to prevent immediate triggering
    const timer = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, 300);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  // Initialize with intelligent welcome message based on current page
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        const welcomeMessage = getWelcomeMessage();
        addBotMessage(welcomeMessage);
      }, 500);
    }
  }, [isOpen, messages.length]);

  const getWelcomeMessage = (): ChatbotResponse => {
    const currentPage = location;
    
    switch (currentPage) {
      case '/services':
        return {
          message: "Welcome to our Services page! I can help you understand our comprehensive engineering solutions or guide you to specific service details. What would you like to learn about?",
          suggestions: ["Process Automation", "Instrumentation", "Installation Services", "Get Quote"]
        };
      case '/products':
        return {
          message: "Welcome to our Products catalog! Here you can explore our industrial equipment range. I can help you find specific products or navigate to other sections. What are you looking for?",
          suggestions: ["Control Panels", "MCCs", "View Services", "Get Quote"]
        };
      case '/projects':
        return {
          message: "Welcome to our Projects portfolio! You can see our 1200+ completed projects here. I can help you explore our work or guide you to other sections. How can I assist?",
          suggestions: ["Filter Projects", "Our Capabilities", "Get Quote", "Contact Us"]
        };
      case '/portfolio':
        return {
          message: "Welcome to our detailed Portfolio! Explore our 1200+ successful projects with filtering options and detailed case studies. What type of projects interest you?",
          suggestions: ["Filter by Industry", "View Results", "Get Quote", "Our Technology"]
        };
      case '/resources':
        return {
          message: "Welcome to our Knowledge Hub! Access whitepapers, case studies, webinars, and industry insights. What would you like to explore?",
          suggestions: ["Download Guides", "Case Studies", "Watch Webinars", "Get Quote"]
        };
      case '/configurator':
        return {
          message: "Welcome to our Project Configurator! Get instant cost estimates for your automation project. I can guide you through the process. Ready to start?",
          suggestions: ["Start Configuration", "Our Services", "View Examples", "Get Help"]
        };
      case '/technology':
        return {
          message: "Welcome to our Technology showcase! Discover our advanced automation technologies and innovation areas. What interests you most?",
          suggestions: ["Our Tech Stack", "Innovation Areas", "Certifications", "Get Quote"]
        };
      case '/contact':
        return {
          message: "Great! You're on our contact page. I can help you with contact information, directions, or guide you to fill out the contact form. What do you need help with?",
          suggestions: ["Fill Contact Form", "Get Directions", "Call Now", "Our Services"]
        };
      case '/quote':
        return {
          message: "Perfect! You're ready to request a quote. I can guide you through the quote form or answer questions about our services before you submit your request. How can I help?",
          suggestions: ["Fill Quote Form", "Our Services", "View Projects", "Contact Instead"]
        };
      case '/about':
        return {
          message: "Welcome to our About page! Here you can learn about Powerton Engineering's journey and team. I can help you explore our story or navigate to other sections. What interests you?",
          suggestions: ["Our Services", "View Projects", "Get Quote", "Contact Us"]
        };
      default:
        return {
          message: "Hello! I'm your intelligent guide for Powerton Engineering. I can help you navigate our website, answer questions about our services, or take you directly to any section you need. How can I assist you today?",
          suggestions: ["Our Services", "Portfolio", "Cost Calculator", "Get Quote"]
        };
    }
  };

  const addMessage = (text: string, sender: 'user' | 'bot', navigateAction?: NavigateAction) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
      navigateAction
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addBotMessage = (response: ChatbotResponse) => {
    setIsTyping(true);
    setTimeout(() => {
      addMessage(response.message, 'bot', response.navigateAction);
      setIsTyping(false);
    }, 1000);
  };

  const handleNavigation = (action: NavigateAction) => {
    if (action.type === 'navigate') {
      setLocation(action.target);
      setIsOpen(false); // Close chatbot after navigation
    } else if (action.type === 'scroll') {
      const element = document.getElementById(action.target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsOpen(false); // Close chatbot after scrolling
      }
    }
  };

  const generateResponse = (userInput: string): ChatbotResponse => {
    const input = userInput.toLowerCase();
    const currentPage = location;

    // Intelligent keyword analysis for better context understanding
    const keywords = {
      services: ['service', 'automation', 'what do you do', 'what can you do', 'offer', 'provide'],
      products: ['product', 'equipment', 'manufacture', 'control panel', 'mcc', 'switchgear', 'vfd'],
      projects: ['project', 'portfolio', 'work', 'experience', 'case study', 'completed'],
      contact: ['contact', 'phone', 'address', 'location', 'reach', 'call', 'email'],
      quote: ['quote', 'price', 'cost', 'estimate', 'pricing', 'budget'],
      about: ['about', 'company', 'history', 'team', 'who are you', 'founded'],
      support: ['support', 'help', 'maintenance', 'technical', 'amc', 'repair'],
      navigation: ['navigate', 'find', 'page', 'menu', 'where', 'how to'],
      home: ['home', 'main', 'overview', 'start'],
      process: ['process automation', 'plc', 'scada', 'hmi', 'control system'],
      instrumentation: ['instrumentation', 'sensor', 'transmitter', 'measurement', 'monitoring'],
      installation: ['installation', 'site', 'commissioning', 'setup', 'deploy'],
      solar: ['solar', 'renewable', 'photovoltaic', 'green energy', 'solar panel']
    };

    // Helper function to check if input contains any keywords from a category
    const containsKeyword = (category: string[]) => 
      category.some(keyword => input.includes(keyword));

    // Smart routing based on current page and query intent
    if (containsKeyword(keywords.services)) {
      if (currentPage !== '/services') {
        return {
          message: "I can show you our comprehensive services! We offer:\n\n• Process Automation Systems\n• Instrumentation & Control Solutions\n• Site Installation & Commissioning\n• Annual Maintenance Contracts (AMC)\n• Power & Control Panels\n• Solar Solutions\n\nWould you like to see detailed information about our services?",
          suggestions: ["View Services Page", "Process Automation", "Instrumentation", "Get Quote"],
          navigateAction: { type: 'navigate', target: '/services', label: 'View Services Page' }
        };
      } else {
        return {
          message: "You're already on our services page! Here you can find detailed information about all our engineering solutions. Scroll down to see specific services or ask me about any particular service.",
          suggestions: ["Process Automation", "Instrumentation", "Installation Services", "Maintenance"]
        };
      }
    }

    // Process Automation specific queries
    if (containsKeyword(keywords.process)) {
      if (currentPage === '/services') {
        return {
          message: "Process Automation is our specialty! You can find detailed information about our automation systems on this page. Let me scroll you to the Process Automation section.",
          suggestions: ["View Details", "Technologies Used", "Industries Served", "Get Quote"],
          navigateAction: { type: 'scroll', target: 'process-automation', label: 'Go to Process Automation Section' }
        };
      } else {
        return {
          message: "Our Process Automation solutions include PLC programming, SCADA systems, and HMI development. We help industries optimize their operations with cutting-edge automation technology.",
          suggestions: ["View Services Page", "See Technologies", "Get Quote", "Contact Us"],
          navigateAction: { type: 'navigate', target: '/services', label: 'View Services Page' }
        };
      }
    }

    // Products queries
    if (containsKeyword(keywords.products)) {
      if (currentPage !== '/products') {
        return {
          message: "Let me show you our product catalog! We manufacture high-quality industrial equipment including:\n\n• Control Panels & Switchgear\n• Motor Control Centers (MCC)\n• Distribution Boards\n• Variable Frequency Drives (VFD)\n• Automation Hardware\n\nWould you like to see our complete product range?",
          suggestions: ["View Products", "Control Panels", "MCCs", "Technical Specs"],
          navigateAction: { type: 'navigate', target: '/products', label: 'View Products Page' }
        };
      } else {
        return {
          message: "Great! You're already viewing our products. Here you can explore our complete range of industrial equipment with detailed specifications and features.",
          suggestions: ["Control Panels", "MCCs", "Automation Hardware", "Get Quote"]
        };
      }
    }

    // Quote and pricing queries
    if (containsKeyword(keywords.quote)) {
      if (currentPage !== '/quote') {
        return {
          message: "I can help you get a quote! Let me take you to our quote request form where you can provide your project details for an accurate estimate.\n\nAlternatively, you can:\n• Call us at +91-94627-71662\n• Email at info@powertonengineering.in\n\nWe typically respond within 24 hours.",
          suggestions: ["Request Quote", "Call Now", "View Services", "Contact Page"],
          navigateAction: { type: 'navigate', target: '/quote', label: 'Request Quote' }
        };
      } else {
        return {
          message: "Perfect! You're on the quote request page. Please fill out the form with your project details and we'll provide you with a detailed proposal within 24 hours.",
          suggestions: ["Fill Quote Form", "Call Instead", "View Services", "Our Projects"]
        };
      }
    }

    // Contact and location queries
    if (containsKeyword(keywords.contact)) {
      if (currentPage !== '/contact') {
        return {
          message: "Let me take you to our contact page with all the details!\n\n📍 Location: F-25, Sector 6, Noida, UP 201301\n📞 Phone: +91-94627-71662\n📧 Email: info@powertonengineering.in\n\nYou can also find our contact form there.",
          suggestions: ["View Contact Page", "Call Now", "Get Directions", "Send Email"],
          navigateAction: { type: 'navigate', target: '/contact', label: 'View Contact Page' }
        };
      } else {
        return {
          message: "Great! You're on our contact page. Here you can find all our contact information, location details, and a contact form to reach us directly.",
          suggestions: ["Fill Contact Form", "Call Now", "Get Directions", "Back to Home"]
        };
      }
    }

    // Projects and portfolio queries
    if (containsKeyword(keywords.projects)) {
      if (currentPage !== '/projects') {
        return {
          message: "I'd love to show you our project portfolio! We've completed 1200+ projects across various industries including manufacturing, oil & gas, power generation, and more.\n\nLet me take you to our projects page to see our work.",
          suggestions: ["View Projects", "Industry Experience", "Client Testimonials", "Our Capabilities"],
          navigateAction: { type: 'navigate', target: '/projects', label: 'View Projects Page' }
        };
      } else {
        return {
          message: "Excellent! You're viewing our projects page. Here you can explore our extensive portfolio across different industries and see the quality of our engineering solutions.",
          suggestions: ["Filter by Industry", "View Case Studies", "Get Quote", "Contact Us"]
        };
      }
    }

    // About company queries
    if (containsKeyword(keywords.about)) {
      if (currentPage !== '/about') {
        return {
          message: "I'd be happy to tell you about Powerton Engineering! We're a leading industrial automation company with 15+ years of experience. Let me take you to our about page for the complete story.",
          suggestions: ["About Us", "Our Team", "Company History", "Certifications"],
          navigateAction: { type: 'navigate', target: '/about', label: 'About Us Page' }
        };
      } else {
        return {
          message: "You're already on our about page! Here you can learn about our company history, team, mission, and what makes us a trusted partner in industrial automation.",
          suggestions: ["Our Team", "Company Values", "Certifications", "Contact Us"]
        };
      }
    }

    // Home page navigation
    if (containsKeyword(keywords.home)) {
      if (currentPage !== '/') {
        return {
          message: "Let me take you back to our home page where you can get a complete overview of Powerton Engineering and our capabilities.",
          suggestions: ["Go to Home", "Our Services", "Featured Projects", "Get Quote"],
          navigateAction: { type: 'navigate', target: '/', label: 'Go to Home' }
        };
      } else {
        return {
          message: "You're already on our home page! Here you can find an overview of all our services and get started with any section that interests you.",
          suggestions: ["Our Services", "View Products", "See Projects", "Contact Us"]
        };
      }
    }

    // Technical support and maintenance
    if (containsKeyword(keywords.support)) {
      return {
        message: "We provide comprehensive technical support and maintenance services:\n\n• 24/7 Emergency Support Hotline\n• Preventive Maintenance Programs (AMC)\n• Remote Monitoring & Diagnostics\n• On-site Technical Assistance\n• Spare Parts & Components\n• Training & Documentation\n\nFor immediate support, call +91-94627-71662",
        suggestions: ["Emergency Support", "AMC Services", "Contact Support", "View Services"],
        navigateAction: { type: 'navigate', target: '/services', label: 'View Support Services' }
      };
    }

    // Navigation assistance
    if (containsKeyword(keywords.navigation)) {
      return {
        message: "I can help you navigate our website! Here are the main sections:\n\n🏠 Home - Company overview & highlights\n📋 About - Our story, team & values\n⚙️ Services - All our engineering solutions\n🔧 Products - Industrial equipment catalog\n📊 Projects - Portfolio & case studies\n💬 Quote - Request project estimates\n📞 Contact - Get in touch with us\n\nWhere would you like to go?",
        suggestions: ["Services", "Products", "Projects", "Contact"]
      };
    }

    // Solar solutions specific
    if (containsKeyword(keywords.solar)) {
      return {
        message: "We provide comprehensive solar solutions including panel installation, inverters, grid synchronization, and monitoring systems. Our renewable energy solutions help reduce operational costs and environmental impact.",
        suggestions: ["View Services", "Solar Projects", "Get Quote", "Energy Consultation"],
        navigateAction: { type: 'navigate', target: '/services', label: 'View Solar Services' }
      };
    }

    // Instrumentation specific
    if (containsKeyword(keywords.instrumentation)) {
      return {
        message: "Our instrumentation solutions provide precise measurement and monitoring for critical industrial parameters. We offer smart transmitters, flow meters, temperature sensors, and analytical equipment.",
        suggestions: ["View Services", "Instrumentation Products", "Technical Specs", "Get Quote"],
        navigateAction: { type: 'navigate', target: '/services', label: 'View Instrumentation Services' }
      };
    }

    // Default intelligent response
    return {
      message: "I'm your intelligent guide for Powerton Engineering! I can help you navigate to any section or find specific information. You can ask me about:\n\n• Our services & capabilities\n• Product specifications\n• Project portfolio\n• Getting quotes\n• Contact information\n• Technical support\n\nI can also take you directly to any page you need. What would you like to explore?",
      suggestions: ["Our Services", "View Products", "See Projects", "Get Quote"]
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
        className="fixed bottom-4 right-4 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        <Button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Simple toggle without complex state management
            setIsOpen(prevState => !prevState);
          }}
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
          aria-label={isOpen ? "Close chat" : "Open chat"}
          data-chatbot-toggle="true"
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
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 chatbot-overlay"
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
            className="chatbot-container fixed bottom-20 right-4 z-40 w-80 sm:w-96 max-h-[calc(100vh-200px)] max-w-[calc(100vw-2rem)]"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            style={{ position: 'fixed', right: '1rem', bottom: '5rem' }}
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
                <div className="flex-1 p-4 space-y-4 bg-gray-50 min-h-[280px] max-h-[380px] scroll-smooth chatbot-messages" style={{overflowY: 'scroll'}}>
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
                          <div className="flex-1">
                            <div className="whitespace-pre-line text-sm mb-2">
                              {message.text}
                            </div>
                            {/* Navigation Action Button */}
                            {message.navigateAction && message.sender === 'bot' && (
                              <Button
                                onClick={() => handleNavigation(message.navigateAction!)}
                                size="sm"
                                className="mt-2 bg-secondary hover:bg-secondary/90 text-white flex items-center gap-1"
                              >
                                <ArrowRight className="w-3 h-3" />
                                {message.navigateAction.label}
                              </Button>
                            )}
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
                  
                  {/* Show dynamic suggestions based on last bot message */}
                  {messages.length > 0 && !isTyping && (
                    <div className="flex flex-wrap gap-2">
                      {(() => {
                        const lastBotMessage = [...messages].reverse().find(m => m.sender === 'bot');
                        const suggestions = lastBotMessage ? 
                          generateResponse(messages[messages.length - 1]?.text || '').suggestions || [] :
                          ["Our Services", "Get Quote", "Contact Us", "View Projects"];
                        
                        return suggestions.slice(0, 4).map((suggestion) => (
                          <button
                            key={suggestion}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              handleSuggestionClick(suggestion);
                            }}
                            className="text-xs bg-white border border-gray-300 hover:border-primary hover:text-primary px-3 py-1 rounded-full transition-colors"
                          >
                            {suggestion}
                          </button>
                        ));
                      })()}
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