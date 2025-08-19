import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, Phone, Mail, MapPin, Bot } from "lucide-react";
import { getChatbotConfig, getCurrentConfig } from "@/lib/deployment";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const staticResponses = {
  greeting: [
    "Hello! Welcome to Powerton Engineering. How can I help you today?",
    "Hi there! I'm here to help you with industrial automation solutions. What would you like to know?",
    "Welcome! I can help you learn about our automation services and connect you with our team."
  ],
  services: [
    "We offer comprehensive industrial automation services including:\n\n• PLC Programming & SCADA Systems\n• Industrial IoT Solutions\n• Process Automation\n• Electrical Panel Design\n• Motor Control Systems\n• Instrumentation & Control\n\nWhich service interests you most?"
  ],
  contact: [
    "You can reach us through:\n\n📞 Phone: +91-94627-71662\n📧 Email: info@powertonengineering.in\n📍 Location: Industrial Area, India\n\nWould you like me to help you get a quote for your project?"
  ],
  quote: [
    "I'd be happy to help you get a quote! Please use our quote request form to provide project details, and our engineering team will send you a detailed proposal within 24 hours.\n\nWould you like me to direct you to the quote form?"
  ],
  default: [
    "I understand you're interested in industrial automation. Let me connect you with our team for detailed assistance.\n\nYou can:\n• Call us at +91-94627-71662\n• Submit a quote request\n• Browse our services\n\nWhat would you prefer?"
  ]
};

export default function UniversalChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [sessionId] = useState(() => Math.random().toString(36).substr(2, 9));
  
  const config = getCurrentConfig();
  const chatbotConfig = getChatbotConfig();

  useEffect(() => {
    // Initialize with welcome message
    const welcomeMessage: Message = {
      id: '1',
      text: `Hello! Welcome to Powerton Engineering. I'm here to help you with industrial automation solutions. How can I assist you today?\n\n${config.mode === 'development' ? '🚀 Running in: ' + config.mode + ' mode' : ''}`,
      isUser: false,
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, [config.mode]);

  const generateStaticResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return staticResponses.greeting[Math.floor(Math.random() * staticResponses.greeting.length)];
    }
    
    if (message.includes('service') || message.includes('automation') || message.includes('plc') || message.includes('scada') || message.includes('what do you do')) {
      return staticResponses.services[0];
    }
    
    if (message.includes('contact') || message.includes('phone') || message.includes('call') || message.includes('reach') || message.includes('talk')) {
      return staticResponses.contact[0];
    }
    
    if (message.includes('quote') || message.includes('price') || message.includes('cost') || message.includes('project') || message.includes('estimate')) {
      return staticResponses.quote[0];
    }
    
    return staticResponses.default[0];
  };

  const submitToBackend = async (message: string): Promise<string> => {
    if (!chatbotConfig.endpoint) {
      throw new Error('Backend endpoint not available');
    }

    const response = await fetch(chatbotConfig.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId,
        userMessage: message,
        botResponse: '' // Will be filled by backend
      })
    });

    if (!response.ok) {
      throw new Error('Backend chatbot request failed');
    }

    const data = await response.json();
    return data.response || data.botResponse || 'Sorry, I could not process your request.';
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue("");

    let botResponseText: string;

    try {
      // Try backend first if available, otherwise use static responses
      if (chatbotConfig.mode === 'backend' && chatbotConfig.endpoint) {
        try {
          botResponseText = await submitToBackend(currentInput);
        } catch (backendError) {
          console.warn('Backend chatbot failed, falling back to static responses');
          botResponseText = generateStaticResponse(currentInput);
        }
      } else {
        botResponseText = generateStaticResponse(currentInput);
      }
    } catch (error) {
      console.error('Chatbot error:', error);
      botResponseText = "I'm sorry, I'm having trouble responding right now. Please contact us directly at +91-94627-71662 for immediate assistance.";
    }

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: botResponseText,
      isUser: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botResponse]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const quickActions = [
    { text: "Our Services", action: () => setInputValue("What services do you offer?") },
    { text: "Get Quote", action: () => setInputValue("I need a quote for my project") },
    { text: "Contact Info", action: () => setInputValue("How can I contact you?") }
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 shadow-lg hover:scale-105 transition-transform"
          size="default"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {isOpen && (
        <Card className="w-80 h-96 shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-primary text-primary-foreground">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4" />
              <CardTitle className="text-sm font-medium">
                Powerton Engineering Support
              </CardTitle>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary/80"
            >
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-80">
            {config.mode === 'development' && (
              <div className="px-4 py-2 bg-muted/50 border-b">
                <div className="text-xs text-muted-foreground">
                  Mode: {chatbotConfig.mode} | Endpoint: {chatbotConfig.endpoint ? '✅' : '❌'}
                </div>
              </div>
            )}

            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-2 rounded-lg text-sm whitespace-pre-line ${
                        message.isUser
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {messages.length === 1 && (
              <div className="p-4 border-t">
                <p className="text-xs text-muted-foreground mb-2">Quick actions:</p>
                <div className="flex flex-wrap gap-1">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs h-7"
                      onClick={() => {
                        action.action();
                        setTimeout(handleSendMessage, 100);
                      }}
                    >
                      {action.text}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <div className="p-4 border-t flex gap-2">
              <Input
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="text-sm"
              />
              <Button size="sm" onClick={handleSendMessage}>
                <Send className="w-4 h-4" />
              </Button>
            </div>

            <div className="px-4 pb-2">
              <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <a href="tel:+91-94627-71662" className="flex items-center gap-1 hover:text-primary">
                  <Phone className="w-3 h-3" />
                  Call
                </a>
                <a href="mailto:info@powertonengineering.in" className="flex items-center gap-1 hover:text-primary">
                  <Mail className="w-3 h-3" />
                  Email
                </a>
                <a href="/contact" className="flex items-center gap-1 hover:text-primary">
                  <MapPin className="w-3 h-3" />
                  Visit
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}