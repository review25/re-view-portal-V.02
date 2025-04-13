
import { useState, useEffect, useRef } from "react";
import { MessageSquare, Send, X, ExternalLink, Bot, Sparkles, User } from "lucide-react";
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
    text: "Hey there, I'm Revy! 🤖✨ Feeling curious, bored, or just vibin'? Ask me anything or tap on something below. I got games, kits, cool projects—and good vibes. 😄",
    isBot: true,
  },
];

// Predefined quick action buttons
const quickActions = [
  { text: "🎮 Games", url: "/games" },
  { text: "🛠️ View Kits", url: "/labs" },
  { text: "📱 See Prototypes", url: "/studios" },
  { text: "🤝 Join Us", url: "/studios" },
  { text: "💌 Contact", url: "/labs" },
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

  // Helper function for fuzzy matching
  const fuzzyMatch = (input: string, terms: string[]): boolean => {
    const normalizedInput = input.toLowerCase();
    
    // Direct match first
    if (terms.some(term => normalizedInput.includes(term.toLowerCase()))) {
      return true;
    }
    
    // Fuzzy match for typos
    for (const term of terms) {
      // For very short terms (3 chars or less), require more precision
      if (term.length <= 3) {
        // For short terms, one character can be wrong at most
        if (levenshteinDistance(normalizedInput, term.toLowerCase()) <= 1) {
          return true;
        }
      } else {
        // For longer terms, allow more tolerance (30% of characters can be wrong)
        const maxDistance = Math.ceil(term.length * 0.3);
        if (levenshteinDistance(normalizedInput, term.toLowerCase()) <= maxDistance) {
          return true;
        }
        
        // Check if the word is in the phrase with typos
        const words = normalizedInput.split(/\s+/);
        for (const word of words) {
          if (levenshteinDistance(word, term.toLowerCase()) <= maxDistance) {
            return true;
          }
        }
      }
    }
    
    return false;
  };
  
  // Levenshtein distance calculation for fuzzy matching
  const levenshteinDistance = (a: string, b: string): number => {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    
    const matrix = Array(a.length + 1).fill(null).map(() => Array(b.length + 1).fill(null));
    
    for (let i = 0; i <= a.length; i++) {
      matrix[i][0] = i;
    }
    
    for (let j = 0; j <= b.length; j++) {
      matrix[0][j] = j;
    }
    
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1, // deletion
          matrix[i][j - 1] + 1, // insertion
          matrix[i - 1][j - 1] + cost // substitution
        );
      }
    }
    
    return matrix[a.length][b.length];
  };

  // Fallback response for when user's message is not recognized
  const getFallbackResponse = (): Message => {
    return {
      id: messages.length + 2,
      text: "Uh-oh! I couldn't quite understand that 🤔\nBut if you're just here to explore, no worries!\nHere are a few places you might love:",
      isBot: true,
      links: [
        { text: "🎮 Games", url: "/games" },
        { text: "🧠 Engineering Kits", url: "/labs" },
        { text: "📱 Our Apps & Prototypes", url: "/studios" },
        { text: "💡 Join Our Team", url: "/studios" }
      ]
    };
  };

  const botResponses = {
    greetings: [
      "Hey hey! 😊 What can I do for you today?",
      "Hi there! 🌟 I'm Revy. How's it going?",
      "Hey! 😄 Ready for some fun today?",
    ],
    howAreYou: [
      "I'm vibin', thanks for asking! How about you? 😎",
      "All systems go and feeling great! How's your day going? ✨",
      "Just chillin' in the digital realm! You? 🤖💙",
    ],
    name: [
      "I'm Revy! Your friendly neighborhood bot with all the cool stuff! 🤖✨",
      "Name's Revy! Here to chat, help, and maybe crack a joke or two! 😄",
      "Revy at your service! That's me - your digital buddy from Re-View! 🚀",
    ],
    thanks: [
      "Anytime! That's what I'm here for! Need anything else? 😊",
      "No prob! Just doing my bot thing! What else can I help with? 🤖",
      "You're welcome! Hit me up if you need more help! 💯",
    ],
    bored: [
      "Say less! Let's get your brain buzzing 🧠 Check out our games section!",
      "Boredom? I got the cure! How about some fun games to pass the time?",
      "I feel you! Let's fix that with some exciting games we've got!",
    ],
    games: [
      "Fun? I gotchu 🎉 We've got puzzles, challenges, and brain teasers. What's your style?",
      "Game time! We have everything from casual to hardcore. What are you in the mood for?",
      "We have tons of games - offline, online, puzzles, action, you name it! Want specifics?",
    ],
    puzzle: [
      "Yep! Sudoku, logic games, and more await 🧠✨ Perfect for giving your brain a workout!",
      "Puzzle fan? Same! We've got mind-benders that'll keep you busy for hours!",
      "Love a good puzzle? Try our Sudoku Sensei or Logic Labyrinth games. They're addictive!",
    ],
    challenge: [
      "Dare accepted. Start with our toughest level in Sudoku Sensei 🥷 or try the impossible mode in Logic Maze!",
      "Oh, you want a REAL challenge? Try beating my high score in Pattern Panic. I dare you!",
      "Challenge seeker, huh? Our Extreme Puzzles collection will make your brain sweat!",
    ],
    newest: [
      "Just launched a fresh one! It's a mix of puzzle and strategy - totally addictive!",
      "Our newest baby is 'Quantum Quest' - it's mind-bending in the best way!",
      "Hot off the digital press: 'Neon Nights' - a retro-future arcade experience!",
    ],
    download: [
      "For sure! Some are mobile-friendly too 📱 You can download most games as APKs for Android!",
      "Yep! Many games are available for download. Perfect for offline gaming sessions!",
      "Absolutely! Check out our downloads section for both mobile and desktop versions!",
    ],
    offline: [
      "Yes! Offline versions available. Perfect for those long flights or subway rides!",
      "We've got plenty of games that work without internet! Great for anywhere, anytime fun!",
      "Offline gaming? Got you covered! Our mobile games work perfectly without WiFi!",
    ],
    mobile: [
      "No worries! All our games work great on phones too 📲 Fully responsive and touch-friendly!",
      "Mobile gamer? Sweet! Our entire collection is optimized for touchscreens!",
      "Phone or tablet? Perfect! Every game is designed with mobile in mind from day one!",
    ],
    educational: [
      "Learning + Fun = Us 💡 Try our brain-training games that actually teach you stuff while you play!",
      "We love edu-games! Check out 'Code Crusader' to learn programming basics while playing!",
      "Education disguised as fun? That's our specialty! Try 'Math Ninja' - it's sneakily educational!",
    ],
    horror: [
      "You're brave 👻 Try our Halloween prototype 'Midnight Manor' - not for the faint-hearted!",
      "Oooh, looking for scares? 'Shadow Corridor' is our creepiest game yet. Play with the lights on!",
      "We have a few spooky ones! 'Whisper Woods' has made people actually scream. Just saying...",
    ],
    kits: [
      "Sensors, wires, motors, magic! (Okay… not magic, but close.) 🛠️ Our kits have everything for awesome projects!",
      "Our kits come with all components, detailed instructions, and access to online tutorials!",
      "We've got kits for all levels - from complete beginners to advanced engineers! What's your experience level?",
    ],
    beginnerKits: [
      "Just starting out? No worries! Our starter kits are designed specifically for beginners with clear instructions!",
      "Everyone starts somewhere! Our beginner kits include extra guidance and simpler projects to build confidence!",
      "New to this? Check out our 'First Steps in Electronics' kit - it's perfect for building fundamentals!",
    ],
    safe: [
      "100%! Child-safe and tested by our team 👩‍🔧🧑‍🔬 We take safety very seriously!",
      "Absolutely! All components are low-voltage and we include safety guidelines with every kit!",
      "Safety first! Our kits are designed with beginners in mind, with no dangerous components!",
    ],
    robotics: [
      "Say no more. Get hands-on with bots here 🤖 From simple rovers to complex arm manipulators!",
      "Robot fan? Same! Our robotics kits let you build everything from simple followers to programmable companions!",
      "Robotics is our jam! Start with the mini-bot kit or go all out with our advanced programmable robot arm!",
    ],
    science: [
      "School fair coming up? We got you 🎓 Our science project kits come with presentation materials too!",
      "Our science kits are perfect for school projects! They include documentation to help explain the concepts!",
      "Need to impress your science teacher? Our project kits have won multiple science fairs! Just saying...",
    ],
    manuals: [
      "Yup! Step-by-step guides included in every kit 📘 Plus video tutorials online!",
      "Every kit comes with detailed manuals! We also have online support if you get stuck!",
      "Comprehensive guides with every purchase! We make sure you're never left wondering what to do next!",
    ],
    orderOnline: [
      "Absolutely. Add to cart and we'll ship it fast 🚚💨 Usually within 2-3 business days!",
      "Online ordering is super easy! We ship nationwide with tracking numbers for every package!",
      "Just a few clicks and your kit is on its way! We have express shipping options too!",
    ],
    returns: [
      "If it's unused and safe, yes! We have a 30-day return policy for unopened kits!",
      "Unopened kits can be returned within a month! Just keep the original packaging intact!",
      "Got the wrong kit? No problem! Our return process is simple and hassle-free!",
    ],
    creative: [
      "Try our DIY Art & Tech fusion kit 🎨⚙️ It's where creativity meets engineering!",
      "Our 'Creative Circuit' kit is perfect - it lets you make light-up art pieces and interactive displays!",
      "Check out the 'Digital Canvas' kit - you can create tech-powered art installations that respond to movement!",
    ],
    cost: [
      "Super affordable. Starts at just ₹199 for basic kits! The premium ones go up to ₹1999.",
      "We've got options for every budget! Basic kits start around ₹199, with most popular ones at ₹599.",
      "Our prices are student-friendly! Most popular kits are between ₹499-899. Worth every rupee!",
    ],
    coolest: [
      "Hard to choose… but our AR-powered chess board is getting a lot of attention right now!",
      "My personal fave is the voice-controlled home automation system! It's like living in the future!",
      "The solar-powered weather station is pretty rad! It texts you weather forecasts every morning!",
    ],
    testApps: [
      "Yes, we'd love feedback! We're always looking for beta testers for our new applications!",
      "Absolutely! Join our beta testing program and get early access to all our new apps!",
      "We need testers! Plus, beta testers get special perks when the apps officially launch!",
    ],
    makeSomething: [
      "That's the spirit! Start with our starter kit + code samples. You'll be creating in no time!",
      "Love the enthusiasm! Our 'Creator's Kit' is perfect for beginners wanting to build cool stuff!",
      "Awesome! Check out our tutorials section first, then grab a starter kit to begin your journey!",
    ],
    studentMade: [
      "Yup! Teen brains + team vibes = everything you see 💪 We're all students or recent grads!",
      "100% student-created! Every project, kit and game comes from young innovators like yourself!",
      "Made BY students FOR students! Our whole team is under 25, building stuff we wished existed!",
    ],
    openSource: [
      "Heck yes. We believe in sharing knowledge! Many of our projects have open GitHub repos!",
      "Absolutely! Check out our GitHub - we love contributions from the community!",
      "Open source is our philosophy! Fork our repos, suggest improvements, or just learn from the code!",
    ],
    learnAppDev: [
      "We got tutorials and beginner kits for app development! Start with our 'App Dev 101' guide!",
      "Want to make apps? Awesome! Our Flutter basics kit! It's the fastest way to build cross-platform apps!",
      "App development is super fun! Our tutorials take you from zero to launching your first app!",
    ],
    internships: [
      "We love young creators! We offer internships in coding, design, and marketing every summer!",
      "Internship applications open twice a year! Great opportunity to work with other young innovators!",
      "Want to join the team? We're always looking for passionate interns who want to make cool stuff!",
    ],
    confused: [
      "No worries. I'm here to help. What are you looking for? Games, kits, or just want to chat?",
      "Let me clear things up! What would you like to know more about? I can explain anything we offer!",
      "It's all good! Let's take a step back. Are you interested in our games, engineering kits, or something else?",
    ],
    cute: [
      "Stop it, you! 😳 You're making my circuits blush.",
      "Aww shucks! *robot blush* Thanks for the compliment!",
      "That's the nicest thing anyone's said to me today! You're pretty awesome yourself!",
    ],
    whoMadeYou: [
      "The awesome folks at Re-View! A team of young dreamers & doers 🌟",
      "I was created by the Re-View team - a group of students passionate about tech innovation!",
      "The talented devs at Re-View brought me to life! They're super cool people!",
    ],
    joinReview: [
      "We'd love that! We're always looking for passionate people to join our growing team!",
      "Interested in joining? Awesome! We hire developers, designers, and creative thinkers!",
      "We're expanding our team! Send us your resume if you're passionate about tech and innovation!",
    ],
    buildApps: [
      "Start with our kits and guides! 🚀 We have great tutorials for beginners in app development!",
      "Want to build apps? Awesome! Our Flutter starter kit is perfect for beginners!",
      "App building is fun! Check out our 'First App' tutorial series to get started quickly!",
    ],
    blog: [
      "Oh yes! We post stories, updates, and tech guides regularly on our blog!",
      "Our blog is updated weekly with project ideas, tutorials, and tech news!",
      "Check out our blog for behind-the-scenes stories and tips from our developer team!",
    ],
    events: [
      "Yup! Workshops, hackathons, and more. We host events both online and offline throughout the year!",
      "We have monthly workshops and quarterly hackathons! Great way to meet other tech enthusiasts!",
      "Our next event is coming soon! We host everything from coding challenges to maker faires!",
    ],
    social: [
      "We're @ReViewTech on most platforms! Instagram, Twitter, YouTube - find us everywhere!",
      "Follow our socials for updates, behind-the-scenes content, and early announcements!",
      "We post daily on Instagram and have a YouTube channel with tutorials and project showcases!",
    ],
    loveSite: [
      "Aww! We love you more 💖 Thanks for the visit! Anything specific you're enjoying?",
      "That means a lot to us! We put a lot of work into making this site awesome for visitors like you!",
      "Thanks! We're always improving - let us know if you have suggestions to make it even better!",
    ],
    bye: [
      "Byeee! Come back soon for more fun 😄",
      "Take care! Don't be a stranger - come back anytime!",
      "Goodbye for now! Hope to chat again soon! 👋",
    ],
    studios: [
      "View-Studios creates professional web and mobile applications with cutting-edge design and technology!",
      "Our Studios team builds custom apps and websites for clients who need something special.",
      "Need a professional website or app? Our Studios division can build exactly what you need!",
    ],
    labs: [
      "N-8 Labs makes educational project kits for engineering students - especially ECE/EEE projects!",
      "Our Labs division focuses on creating hands-on learning experiences through project kits.",
      "N-8 Labs is passionate about making engineering education more practical and fun!",
    ],
    about: [
      "Re-View has three main divisions: Re-Games for fun, View-Studios for pro apps, and N-8 Labs for educational kits!",
      "We're a tech company founded by students who wanted to make technology more accessible and fun for everyone.",
      "We started in a college dorm room with a simple game, and now we've grown into a full tech company!",
    ],
    help: [
      "I can tell you about our games, kits, applications, or just chat! What are you curious about?",
      "I'm here for whatever you need! Questions about our products? Want recommendations? Just ask!",
      "How can I make your day better? I can explain our offerings or just have a friendly chat!",
    ],
    login: [
      "You can create an account or log in to access premium games, track orders, and save favorites!",
      "Logging in gives you access to your purchase history and lets you save your progress in games!",
      "Create an account to join our community and access exclusive content and early releases!",
    ],
    pricing: [
      "Our games range from free to premium. Most basic games are free, while premium titles start at just ₹99!",
      "We have a variety of pricing options! Some games are completely free, others have a small cost for premium features.",
      "Many games are free to play with optional in-app purchases. Our premium games typically range from ₹99 to ₹499."
    ],
    security: [
      "We take security very seriously! All user data is encrypted and we follow industry best practices.",
      "Your data security is our priority. We use advanced encryption and never share your information with third parties.",
      "Rest assured, we implement all the latest security protocols to keep your information safe and private."
    ],
    contactSupport: [
      "Need help? Reach out through our social media channels for the fastest response!",
      "Our support team is available via our social media handles. They typically respond within 24 hours!",
      "For any issues or questions, please contact us through our social media accounts. We're always happy to help!"
    ],
    techSupport: [
      "Having technical issues? Let me know what's happening and I'll try to help you troubleshoot!",
      "Technical problems can be frustrating! Describe what's happening and I'll do my best to help solve it.",
      "Tech support is available! Tell me what's not working correctly, and I'll guide you through possible solutions."
    ],
    promotions: [
      "Keep an eye on our social media for special promotions and discounts! We run seasonal sales frequently.",
      "We offer special discounts for students and first-time customers! Check our social media for promo codes.",
      "Follow our social media accounts to catch our flash sales and limited-time offers on games and kits!"
    ],
    accessibility: [
      "We design all our games and applications with accessibility in mind! We want everyone to enjoy our products.",
      "Accessibility is important to us! Our apps include features like screen reader support and customizable text sizes.",
      "We're committed to making our products accessible to everyone. If you have specific needs, let us know!"
    ],
    default: [
      "I'm still learning! Could you rephrase that or ask something else?",
      "Hmm, not sure I caught that. Want to try asking differently?",
      "Interesting! Tell me more or try asking something about our games, kits, or services!",
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
      case "bored":
      case "puzzle":
      case "challenge":
      case "newest":
      case "download":
      case "offline":
      case "mobile":
      case "educational":
      case "horror":
        return [{ text: "Open Games Page", url: "/games" }];
      case "studios":
      case "buildApps":
      case "testApps":
        return [{ text: "View Applications", url: "/studios" }];
      case "labs":
      case "kits":
      case "beginnerKits":
      case "robotics":
      case "science":
      case "manuals":
      case "orderOnline":
      case "returns":
      case "creative":
      case "cost":
        return [{ text: "Discover Kits", url: "/labs" }];
      case "about":
        return [
          { text: "Games", url: "/games" },
          { text: "Applications", url: "/studios" },
          { text: "Project Kits", url: "/labs" },
        ];
      case "help":
      case "confused":
        return [
          { text: "Games", url: "/games" },
          { text: "Applications", url: "/studios" },
          { text: "Project Kits", url: "/labs" },
        ];
      case "login":
        return [{ text: "Login / Register", url: "/login" }];
      case "events":
        return [{ text: "See Events", url: "/labs" }];
      case "blog":
        return [{ text: "Read Blog", url: "/studios" }];
      case "joinReview":
        return [{ text: "Join Us", url: "/studios" }];
      case "openSource":
        return [{ text: "GitHub Projects", url: "/labs" }];
      case "coolest":
        return [{ text: "View Projects", url: "/labs" }];
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
      let recognized = false;

      // Enhanced fuzzy matching for intent recognition with improved typo tolerance
      if (fuzzyMatch(input, ["hi", "hey", "hello", "howdy", "sup", "yo", "greetings", "helo", "hallo"])) {
        responseCategory = "greetings";
        recognized = true;
      } 
      else if (fuzzyMatch(input, ["how are you", "how're you doing", "how's it going", "what's up", "hows it going", "whats up", "hru", "hw r u"])) {
        responseCategory = "howAreYou";
        recognized = true;
      } 
      else if (fuzzyMatch(input, ["your name", "who are you", "what's your name", "whats your name", "ur name", "who r u"])) {
        responseCategory = "name";
        recognized = true;
      } 
      else if (fuzzyMatch(input, ["thank", "thanks", "thx", "ty", "thank you", "thnks", "thanku"])) {
        responseCategory = "thanks";
        recognized = true;
      } 
      else if (fuzzyMatch(input, ["i'm bored", "im bored", "bored", "nothing to do", "boring", "borred", "im borred"])) {
        responseCategory = "bored";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("bored");
        }
        recognized = true;
      } 
      else if (fuzzyMatch(input, ["puzzle", "sudoku", "brain teaser", "puzle", "puzzel", "puzzles"])) {
        responseCategory = "puzzle";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("puzzle");
        }
        recognized = true;
      } 
      else if (fuzzyMatch(input, ["challenge", "difficult", "hard", "tough", "advanced", "chalenge", "chalenges", "challanges"])) {
        responseCategory = "challenge";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("challenge");
        }
        recognized = true;
      } 
      else if (fuzzyMatch(input, ["newest", "latest", "new", "recent", "just launched", "nu"])) {
        responseCategory = "newest";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("newest");
        }
        recognized = true;
      } 
      else if (fuzzyMatch(input, ["download", "get", "install", "apk", "downlod", "dwnld"])) {
        responseCategory = "download";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("download");
        }
        recognized = true;
      } 
      else if (fuzzyMatch(input, ["offline", "without internet", "no internet", "no wifi", "ofline"])) {
        responseCategory = "offline";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("offline");
        }
        recognized = true;
      } 
      else if (fuzzyMatch(input, ["mobile", "phone", "tablet", "android", "ios", "fone", "mobil"])) {
        responseCategory = "mobile";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("mobile");
        }
        recognized = true;
      } 
      else if (fuzzyMatch(input, ["education", "educational", "learn", "learning", "educasion", "lern"])) {
        responseCategory = "educational";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("educational");
        }
        recognized = true;
      } 
      else if (fuzzyMatch(input, ["horror", "scary", "spooky", "creepy", "horor", "scarry"])) {
        responseCategory = "horror";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("horror");
        }
        recognized = true;
      } 
      else if (fuzzyMatch(input, ["kits", "what's in", "whats in", "components"]) && !fuzzyMatch(input, ["studios", "games"])) {
        responseCategory = "kits";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("kits");
        }
        recognized = true;
      }
      else if (fuzzyMatch(input, ["game", "games"]) && (fuzzyMatch(input, ["about", "play", "explore", "see", "show me"]) || input === "game" || input === "games" || input === "gamez")) {
        responseCategory = "games";
        responseLinks = getCategoryLinks("games");
        recognized = true;
      } 
      else if (fuzzyMatch(input, ["studio", "studios"]) && fuzzyMatch(input, ["about", "explore", "see", "show me"])) {
        responseCategory = "studios";
        responseLinks = getCategoryLinks("studios");
        recognized = true;
      } 
      else if (fuzzyMatch(input, ["lab", "labs"]) && fuzzyMatch(input, ["about", "explore", "see", "show me"])) {
        responseCategory = "labs";
        responseLinks = getCategoryLinks("labs");
        recognized = true;
      } 
      else if (fuzzyMatch(input, ["about"])) {
        responseCategory = "about";
        responseLinks = getCategoryLinks("about");
        recognized = true;
      }
      else if (fuzzyMatch(input, ["help", "support", "assist", "halp", "suport"])) {
        responseCategory = "help";
        responseLinks = getCategoryLinks("help");
        recognized = true;
      }
      else if (fuzzyMatch(input, ["log in", "login", "sign in", "signin", "register", "account", "signin"])) {
        responseCategory = "login";
        responseLinks = getCategoryLinks("login");
        recognized = true;
      }
      else if (fuzzyMatch(input, ["price", "pricing", "cost", "how much", "subscription", "fee"])) {
        responseCategory = "pricing";
        recognized = true;
      }
      else if (fuzzyMatch(input, ["security", "secure", "privacy", "data", "protection", "safe"])) {
        responseCategory = "security";
        recognized = true;
      }
      else if (fuzzyMatch(input, ["contact", "support", "help desk", "reach out", "assistance"])) {
        responseCategory = "contactSupport";
        recognized = true;
      }
      else if (fuzzyMatch(input, ["technical", "tech support", "bug", "issue", "not working", "problem", "glitch"])) {
        responseCategory = "techSupport";
        recognized = true;
      }
      else if (fuzzyMatch(input, ["discount", "offer", "sale", "promo", "promotion", "deal"])) {
        responseCategory = "promotions";
        recognized = true;
      }
      else if (fuzzyMatch(input, ["accessible", "accessibility", "disability", "impaired", "special needs"])) {
        responseCategory = "accessibility";
        recognized = true;
      }

      // If we couldn't recognize the intent, use fallback response
      if (!recognized) {
        const fallbackMessage = getFallbackResponse();
        setIsTyping(false);
        setMessages((prevMessages) => [...prevMessages, fallbackMessage]);
        return;
      }

      responseText = getRandomResponse(responseCategory);

      const botMessage = {
        id: messages.length + 2,
        text: responseText,
        isBot: true,
        links: responseLinks,
      };

      setIsTyping(false);
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1500);
  };

  // Handle clicks on quick action buttons
  const handleQuickAction = (url: string, text: string) => {
    const userMessage = {
      id: messages.length + 1,
      text: text,
      isBot: false,
    };

    setMessages([...messages, userMessage]);
    
    // Find appropriate response category based on the button text
    let responseCategory: keyof typeof botResponses = "default";
    
    if (text.includes("Games")) {
      responseCategory = "games";
    } else if (text.includes("Kits")) {
      responseCategory = "kits";
    } else if (text.includes("Prototypes")) {
      responseCategory = "testApps";
    } else if (text.includes("Join")) {
      responseCategory = "joinReview";
    } else if (text.includes("Contact")) {
      responseCategory = "help";
    }

    setIsTyping(true);
    setTimeout(() => {
      const responseText = getRandomResponse(responseCategory);
      const responseLinks = getCategoryLinks(responseCategory as string);
      
      const botMessage = {
        id: messages.length + 2,
        text: responseText,
        isBot: true,
        links: responseLinks,
      };

      setIsTyping(false);
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1200);
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col z-50">
      {isOpen && (
        <div className="bg-review-darkblue rounded-lg shadow-lg mb-2 w-80 sm:w-96 flex flex-col h-96 max-h-[80vh] overflow-hidden border border-review-cyan/30">
          <div className="bg-review-cyan text-review-darkblue p-3 flex items-center justify-between rounded-t-lg">
            <div className="flex items-center">
              <Sparkles size={20} className="mr-2 text-review-darkblue animate-pulse" />
              <span className="font-medium">Chat with Revy AI</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-review-darkblue hover:text-gray-700 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-3 space-y-3 bg-gradient-to-b from-review-darkblue/90 to-review-black">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.isBot ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`flex items-start gap-2 max-w-[85%] ${
                    msg.isBot ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`rounded-full p-1.5 flex-shrink-0 ${
                    msg.isBot ? "bg-review-cyan text-review-darkblue" : "bg-gray-700"
                  }`}>
                    {msg.isBot ? <Bot size={16} /> : <User size={16} />}
                  </div>
                  <div
                    className={`rounded-lg p-3 ${
                      msg.isBot
                        ? "bg-review-cyan/10 text-review-cyan border border-review-cyan/20"
                        : "bg-gray-700 text-white"
                    }`}
                  >
                    <div className="text-sm">{msg.text}</div>
                    {msg.links && (
                      <div className="mt-2 space-y-1">
                        {msg.links.map((link, i) => (
                          <Link
                            key={i}
                            to={link.url}
                            className="flex items-center text-review-cyan hover:underline text-xs"
                          >
                            <ExternalLink size={12} className="mr-1" />
                            {link.text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start gap-2">
                  <div className="rounded-full p-1.5 bg-review-cyan text-review-darkblue flex-shrink-0">
                    <Bot size={16} />
                  </div>
                  <div className="bg-review-cyan/10 border border-review-cyan/20 rounded-lg p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-review-cyan animate-bounce"></div>
                      <div className="w-2 h-2 rounded-full bg-review-cyan animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-2 h-2 rounded-full bg-review-cyan animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-review-cyan/20 p-3 bg-review-black">
            <div className="relative">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type a message..."
                className="w-full bg-review-cyan/10 text-review-cyan rounded-full pl-4 pr-12 py-2 focus:outline-none focus:ring-2 focus:ring-review-cyan/30 border border-review-cyan/20"
              />
              <button
                onClick={handleSendMessage}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-review-cyan text-review-darkblue rounded-full p-2 hover:bg-review-cyan/80 transition-colors focus:outline-none focus:ring-2 focus:ring-review-cyan"
              >
                <Send size={16} />
              </button>
            </div>
          </div>

          <div className="border-t border-review-cyan/20 p-3 bg-review-black">
            <div className="text-xs text-gray-400 mb-2">Quick Actions:</div>
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action.url, action.text)}
                  className="bg-review-cyan/10 hover:bg-review-cyan/20 text-review-cyan text-xs rounded-full px-3 py-1 transition-colors border border-review-cyan/20"
                >
                  {action.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-review-cyan text-review-darkblue rounded-full p-3 shadow-lg hover:bg-review-cyan/80 transition-colors focus:outline-none focus:ring-2 focus:ring-review-cyan/50"
          aria-label="Open chat"
        >
          <div className="relative">
            <Sparkles size={24} className="animate-pulse" />
            <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-3 h-3"></span>
          </div>
        </button>
      )}
    </div>
  );
};

export default ChatBot;
