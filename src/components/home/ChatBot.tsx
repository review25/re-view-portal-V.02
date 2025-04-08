
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
    text: "Hey there, I'm Revy! 🤖✨ Feeling curious, bored, or just vibin'? Ask me anything or tap on something below. I got games, kits, cool projects—and good vibes. 😄",
    isBot: true,
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
      "Want to make apps? Start with our Flutter basics kit! It's the fastest way to build cross-platform apps!",
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
    // Only provide links when directly asked about specific services
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

      // Check if user is explicitly asking to see pages
      const askingForGames = input.includes("tell me about games") || 
                             input.includes("show me games") || 
                             input.includes("what games") ||
                             input.includes("go to games");
      
      const askingForStudios = input.includes("tell me about studios") || 
                               input.includes("show me studios") || 
                               input.includes("what is view-studios") ||
                               input.includes("go to studios");
      
      const askingForLabs = input.includes("tell me about labs") || 
                            input.includes("show me labs") || 
                            input.includes("what are n-8 labs") ||
                            input.includes("go to labs");
      
      const askingForLogin = input.includes("how to login") || 
                             input.includes("how to register") || 
                             input.includes("create account");

      // Expanded intent recognition for casual conversations
      if (input.match(/^(hi|hey|hello|howdy|sup|yo)/i)) {
        responseCategory = "greetings";
      } else if (input.match(/how are you|how('re| are) you doing|how('s| is) it going|what('s| is) up/i)) {
        responseCategory = "howAreYou";
      } else if (input.match(/your name|who are you|what('s| is) your name/i)) {
        responseCategory = "name";
      } else if (input.match(/thank|thanks|thx|ty/i)) {
        responseCategory = "thanks";
      } else if (input.match(/i('m| am) bored|bored|nothing to do/i)) {
        responseCategory = "bored";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("bored");
        }
      } else if (input.match(/puzzle|sudoku|brain teaser/i)) {
        responseCategory = "puzzle";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("puzzle");
        }
      } else if (input.match(/challenge|difficult|hard|tough|advanced/i)) {
        responseCategory = "challenge";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("challenge");
        }
      } else if (input.match(/newest|latest|new|recent|just launched/i)) {
        responseCategory = "newest";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("newest");
        }
      } else if (input.match(/download|get|install|apk/i)) {
        responseCategory = "download";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("download");
        }
      } else if (input.match(/offline|without internet|no internet|no wifi/i)) {
        responseCategory = "offline";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("offline");
        }
      } else if (input.match(/mobile|phone|tablet|android|ios/i)) {
        responseCategory = "mobile";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("mobile");
        }
      } else if (input.match(/education|educational|learn|learning/i)) {
        responseCategory = "educational";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("educational");
        }
      } else if (input.match(/horror|scary|spooky|creepy/i)) {
        responseCategory = "horror";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("horror");
        }
      } else if (input.match(/kits?|what('s| is) in|components/i) && !input.match(/studios|games/i)) {
        responseCategory = "kits";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("kits");
        }
      } else if (input.match(/beginner|starting|novice|new to|first time/i) && input.match(/kits?|project/i)) {
        responseCategory = "beginnerKits";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("beginnerKits");
        }
      } else if (input.match(/safe|safety|dangerous|child|kid/i)) {
        responseCategory = "safe";
      } else if (input.match(/robot|robotics|bot|automation/i)) {
        responseCategory = "robotics";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("robotics");
        }
      } else if (input.match(/science|project|school|fair|assignment/i)) {
        responseCategory = "science";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("science");
        }
      } else if (input.match(/manual|instruction|guide|documentation/i)) {
        responseCategory = "manuals";
      } else if (input.match(/order|buy|purchase|ship/i)) {
        responseCategory = "orderOnline";
      } else if (input.match(/return|refund|money back|exchange/i)) {
        responseCategory = "returns";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("returns");
        }
      } else if (input.match(/creative|art|design|craft/i)) {
        responseCategory = "creative";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("creative");
        }
      } else if (input.match(/cost|price|how much|expensive|cheap|affordable/i)) {
        responseCategory = "cost";
      } else if (input.match(/coolest|best|top|impressive|project/i)) {
        responseCategory = "coolest";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("coolest");
        }
      } else if (input.match(/test|beta|try|preview|early access/i)) {
        responseCategory = "testApps";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("testApps");
        }
      } else if (input.match(/make|build|create|develop|like this/i)) {
        responseCategory = "makeSomething";
      } else if (input.match(/student|teen|young|made by/i)) {
        responseCategory = "studentMade";
      } else if (input.match(/open source|github|code|repository|contribute/i)) {
        responseCategory = "openSource";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("openSource");
        }
      } else if (input.match(/learn|app dev|application|development|coding/i)) {
        responseCategory = "learnAppDev";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("buildApps");
        }
      } else if (input.match(/intern|internship|job|work|career/i)) {
        responseCategory = "internships";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("joinReview");
        }
      } else if (input.match(/confused|don't understand|what is this|help me/i)) {
        responseCategory = "confused";
        responseLinks = getCategoryLinks("confused");
      } else if (input.match(/cute|nice|cool|awesome|amazing|good/i) && input.includes("you")) {
        responseCategory = "cute";
      } else if (input.match(/who made|creator|developers|team behind/i)) {
        responseCategory = "whoMadeYou";
      } else if (input.match(/join|work (at|with)|become part/i)) {
        responseCategory = "joinReview";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("joinReview");
        }
      } else if (input.match(/build apps|create (app|website|web)/i)) {
        responseCategory = "buildApps";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("buildApps");
        }
      } else if (input.match(/blog|article|post|news|updates/i)) {
        responseCategory = "blog";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("blog");
        }
      } else if (input.match(/event|workshop|hackathon|meetup|conference/i)) {
        responseCategory = "events";
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("events");
        }
      } else if (input.match(/insta|instagram|social|follow|twitter|facebook/i)) {
        responseCategory = "social";
      } else if (input.match(/love|like|enjoy|great|wonderful/i) && input.match(/site|website|page/i)) {
        responseCategory = "loveSite";
      } else if (input.match(/bye|goodbye|see you|later|exit/i)) {
        responseCategory = "bye";
      } else if (askingForGames || (input.includes("game") && (input.includes("about") || input.includes("play")))) {
        responseCategory = "games";
        responseLinks = getCategoryLinks("games");
      } else if (askingForStudios || (input.includes("studio") && input.includes("about"))) {
        responseCategory = "studios";
        responseLinks = getCategoryLinks("studios");
      } else if (askingForLabs || (input.includes("lab") && input.includes("about"))) {
        responseCategory = "labs";
        responseLinks = getCategoryLinks("labs");
      } else if (input.includes("about") && (input.includes("company") || input.includes("re-view"))) {
        responseCategory = "about";
        responseLinks = getCategoryLinks("about");
      } else if ((input.includes("help") && input.includes("navigate")) || input.includes("guide me")) {
        responseCategory = "help";
        responseLinks = getCategoryLinks("help");
      } else if (askingForLogin) {
        responseCategory = "login";
        responseLinks = getCategoryLinks("login");
      } else if (input.includes("game")) {
        responseCategory = "games";
        // Only provide links if specifically asking to see or visit
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("games");
        }
      } else if (input.includes("app") || input.includes("website") || input.includes("studio") || input.includes("application")) {
        responseCategory = "studios";
        // Only provide links if specifically asking to see or visit
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("studios");
        }
      } else if (input.includes("kit") || input.includes("lab") || input.includes("project") || input.includes("educational")) {
        responseCategory = "labs";
        // Only provide links if specifically asking to see or visit
        if (input.includes("see") || input.includes("visit") || input.includes("go to")) {
          responseLinks = getCategoryLinks("labs");
        }
      } else {
        responseCategory = "default";
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
              <h3 className="font-medium text-white">Revy Bot</h3>
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
              placeholder="Ask Revy anything..."
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
