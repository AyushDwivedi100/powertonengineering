import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Welcome to Powerton Engineering! I can help you with information about our services, products, quotes, and technical support. How can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sessionId = useRef(Math.random().toString(36).substr(2, 9));

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const chatMutation = useMutation({
    mutationFn: async (message: string) => {
      const response = await apiRequest("POST", "/api/chatbot", {
        sessionId: sessionId.current,
        userMessage: message,
        botResponse: ""
      });
      return response.json();
    },
    onSuccess: (data) => {
      if (data.success) {
        const botMessage: Message = {
          id: Date.now().toString() + "_bot",
          text: data.response,
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      }
    },
    onError: () => {
      const errorMessage: Message = {
        id: Date.now().toString() + "_error",
        text: "Sorry, I'm having trouble responding right now. Please try again or contact us directly at +91-94627-71662.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  });

  const quickActions = [
    { label: "Our Services", message: "What services do you offer?" },
    { label: "Get Quote", message: "I need a quote for my project" },
    { label: "Contact Info", message: "How can I contact you?" },
    { label: "Technical Support", message: "I need technical support" }
  ];

  const handleSendMessage = (message?: string) => {
    const messageText = message || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    chatMutation.mutate(messageText);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-3 sm:bottom-6 right-3 sm:right-6 z-50">
      {/* Chat Trigger Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-secondary hover:bg-secondary/90 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
          size="icon"
          aria-label="Open chat assistant"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="w-[calc(100vw-24px)] max-w-sm sm:w-80 h-[70vh] max-h-96 sm:h-96 flex flex-col shadow-2xl border border-gray-200">
          <CardHeader className="bg-primary text-white p-3 sm:p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base sm:text-lg font-semibold">Engineering Assistant</CardTitle>
                <p className="text-xs sm:text-sm opacity-90">How can we help you?</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 h-8 w-8 sm:h-10 sm:w-10"
                aria-label="Close chat"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[80%] p-2 sm:p-3 rounded-lg text-xs sm:text-sm ${
                      message.isBot
                        ? "bg-gray-100 text-gray-900"
                        : "bg-primary text-white"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {chatMutation.isPending && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-900 p-2 sm:p-3 rounded-lg text-xs sm:text-sm">
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="p-2 sm:p-3 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-1 sm:gap-2 mb-2 sm:mb-3">
                {quickActions.map((action) => (
                  <Button
                    key={action.label}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSendMessage(action.message)}
                    className="text-xs h-8"
                  >
                    {action.label}
                  </Button>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1"
                  disabled={chatMutation.isPending}
                />
                <Button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || chatMutation.isPending}
                  size="icon"
                  className="bg-secondary hover:bg-secondary/90"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
