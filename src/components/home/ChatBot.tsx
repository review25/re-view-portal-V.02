
import { useState, useEffect, useRef } from "react";
import { MessageSquare, Send, X, ExternalLink, Bot } from "lucide-react";
import { Link } from "react-router-dom";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  links?: { text: string; url: string }[];
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hello! I'm View Bot, your personal assistant. How can I help you today?",
    isBot: true,
    links: [
      { text: "Tell me about Re-Games", url: "/games" },
      { text: "Show me View-Studios", url: "/studios" },
      { text: "What are N-8 Labs?", url: "/labs" }
    ],
  },
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const botResponses = {
    greetings: [
      "Hello there! How can I help you today?",
      "Hi! I'm View Bot. Nice to meet you!",
      "Hey! What can I do for you today?",
    ],
    howAreYou: [
      "I'm doing great, thank you for asking! How about you?",
      "I'm functioning perfectly! How can I assist you today?",
      "All systems operational and ready to help! How are you doing?",
    ],
    name: [
      "I'm View Bot, your friendly assistant for all things Re-View!",
      "My name is View Bot. I'm here to help you navigate our services.",
      "I'm View Bot! I was created to assist with Re-View's products and services.",
    ],
    thanks: [
      "You're welcome! Is there anything else I can help you with?",
      "Anytime! Don't hesitate to ask if you have more questions.",
      "Happy to help! Let me know if you need anything else.",
    ],
    games: [
      "Re-Games offers exciting mobile and web-based games with immersive experiences. Would you like to explore our games collection?",
      "Our Re-Games division creates engaging games for various platforms. Check out our latest releases!",
    ],
    studios: [
      "View-Studios specializes in professional web and mobile application development with elegant designs powered by AI and secure infrastructure.",
      "Our View-Studios team builds cutting-edge applications and websites. Would you like to see our portfolio?",
    ],
    labs: [
      "N-8 Labs provides educational project kits for B.Tech students, particularly for ECE/EEE projects. They're designed to be hands-on and practical.",
      "N-8 Labs develops innovative project kits for engineering students. Each kit comes with comprehensive documentation and support.",
    ],
    about: [
      "Re-View is a tech company with three main divisions: Re-Games for gaming, View-Studios for application development, and N-8 Labs for educational kits.",
      "We're a technology company focused on games, professional applications, and educational project kits for engineering students.",
    ],
    help: [
      "I can help you learn about our games, applications, project kits, or assist with account-related queries. What would you like to know?",
      "I'm here to provide information about Re-View's products and services. Just let me know what you're interested in!",
    ],
    default: [
      "I'm not sure I understand. Could you rephrase that?",
      "Interesting question! Would you like to know about our games, apps, or project kits?",
      "I'm still learning! Can I direct you to our games, applications, or project kits instead?",
    ]
  };

  const getRandomResponse = (category: keyof typeof botResponses) => {
    const responses = botResponses[category];
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  };

  const getCategoryLinks = (category: string) => {
    switch (category) {
      case "games":
        return [{ text: "Explore Games", url: "/games" }];
      case "studios":
        return [{ text: "View Applications", url: "/studios" }];
      case "labs":
        return [{ text: "Discover Kits", url: "/labs" }];
      case "about":
        return [
          { text: "Games", url: "/games" },
          { text: "Applications", url: "/studios" },
          { text: "Project Kits", url: "/labs" },
        ];
      case "help":
        return [
          { text: "Games", url: "/games" },
          { text: "Applications", url: "/studios" },
          { text: "Project Kits", url: "/labs" },
          { text: "Login / Register", url: "/login" },
        ];
      default:
        return undefined;
    }
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: newMessage,
      isBot: false,
    };

    setMessages([...messages, userMessage]);
    setNewMessage("");
    setIsTyping(true);

    // Determine the appropriate response based on user input
    setTimeout(() => {
      const input = newMessage.toLowerCase();
      let responseCategory: keyof typeof botResponses = "default";
      let responseText = "";
      let responseLinks;

      // Analyze user input to determine response category
      if (input.includes("hi") || input.includes("hello") || input.includes("hey")) {
        responseCategory = "greetings";
      } else if (input.includes("how are you") || input.includes("how're you") || input.includes("how r u")) {
        responseCategory = "howAreYou";
      } else if (input.includes("your name") || input.includes("who are you")) {
        responseCategory = "name";
      } else if (input.includes("thank")) {
        responseCategory = "thanks";
      } else if (input.includes("game")) {
        responseCategory = "games";
        responseLinks = getCategoryLinks("games");
      } else if (input.includes("app") || input.includes("website") || input.includes("studio") || input.includes("application")) {
        responseCategory = "studios";
        responseLinks = getCategoryLinks("studios");
      } else if (input.includes("kit") || input.includes("lab") || input.includes("project") || input.includes("educational")) {
        responseCategory = "labs";
        responseLinks = getCategoryLinks("labs");
      } else if (input.includes("about") || input.includes("company") || input.includes("re-view")) {
        responseCategory = "about";
        responseLinks = getCategoryLinks("about");
      } else if (input.includes("help") || input.includes("assist") || input.includes("support")) {
        responseCategory = "help";
        responseLinks = getCategoryLinks("help");
      } else if (input.includes("login") || input.includes("register") || input.includes("account")) {
        responseText = "You can create an account or log in to access our games, applications, and view your tokens.";
        responseLinks = [{ text: "Login / Register", url: "/login" }];
      } else {
        responseCategory = "default";
        responseLinks = getCategoryLinks("help");
      }

      if (!responseText) {
        responseText = getRandomResponse(responseCategory);
      }

      const botResponse: Message = {
        id: messages.length + 2,
        text: responseText,
        isBot: true,
        links: responseLinks,
      };

      setIsTyping(false);
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000 + Math.random() * 500);
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-review-cyan text-review-black shadow-neon flex items-center justify-center transition-all hover:brightness-110 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        aria-label="Open chat"
      >
        <Bot size={24} />
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-80 sm:w-96 h-[500px] max-h-[80vh] glass-card rounded-2xl overflow-hidden flex flex-col transition-all duration-300 shadow-neon ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-review-gray/30 p-4 border-b border-review-cyan/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-review-cyan flex items-center justify-center">
              <Bot size={16} className="text-review-black" />
            </div>
            <div>
              <h3 className="font-medium text-white">View Bot</h3>
              <p className="text-xs text-white/70">Online</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-3 ${
                  message.isBot
                    ? "bg-review-gray/30 text-white"
                    : "bg-review-cyan/90 text-review-black"
                }`}
              >
                <p>{message.text}</p>
                {message.links && (
                  <div className="mt-2 space-y-2">
                    {message.links.map((link, index) => (
                      <Link
                        key={index}
                        to={link.url}
                        className="block w-full text-center px-3 py-2 rounded bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium flex items-center justify-center gap-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.text}
                        <ExternalLink size={14} />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-2xl p-3 bg-review-gray/30 text-white">
                <p className="typing-animation">Typing</p>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 border-t border-review-cyan/20 bg-review-gray/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 py-2 px-3 rounded-full bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-1 focus:ring-review-cyan/50"
            />
            <button
              type="submit"
              className="w-8 h-8 rounded-full bg-review-cyan text-review-black flex items-center justify-center hover:brightness-110 transition-all"
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
