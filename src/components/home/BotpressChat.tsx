
import { useState, useEffect } from "react";
import { Bot } from "lucide-react";

const BotpressChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const botpressId = "6ede9db8-37a1-4110-986c-42bd83ba7473"; // Replace with your actual Botpress bot ID

  useEffect(() => {
    // Initialize Botpress when the component mounts
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    // Configure Botpress once the script is loaded
    script.onload = () => {
      window.botpressWebChat.init({
        botId: botpressId,
        hostUrl: "https://cdn.botpress.cloud/webchat/v1",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: botpressId,
        composerPlaceholder: "Ask Revy anything...",
        webhookId: botpressId,
        lazySocket: true,
        themeName: "prism",
        frontendVersion: "v1",
        theme: "prism",
        themeColor: "#16b7cc",
        hideWidget: true,
        disableAnimations: false,
        showPoweredBy: false,
        conversationId: "REVY_" + Math.random().toString(36).substring(7),
      });

      // Wait a bit for the initialization to complete
      setTimeout(() => {
        if (isOpen) {
          window.botpressWebChat.sendEvent({ type: "show" });
        }
      }, 500);
    };

    return () => {
      // Remove the script when component unmounts
      if (window.botpressWebChat) {
        window.botpressWebChat.sendEvent({ type: "hide" });
      }
      document.body.removeChild(script);
    };
  }, [botpressId]);

  // Effect to show/hide the chatbot based on isOpen state
  useEffect(() => {
    if (window.botpressWebChat) {
      if (isOpen) {
        window.botpressWebChat.sendEvent({ type: "show" });
      } else {
        window.botpressWebChat.sendEvent({ type: "hide" });
      }
    }
  }, [isOpen]);

  return (
    <button
      onClick={() => setIsOpen(true)}
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-review-cyan text-review-black shadow-neon flex items-center justify-center transition-all hover:brightness-110 ${
        isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
      }`}
      aria-label="Open chat"
    >
      <Bot size={24} />
    </button>
  );
};

export default BotpressChat;
