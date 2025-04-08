
interface BotpressWebChat {
  init: (config: any) => void;
  sendEvent: (event: { type: string, [key: string]: any }) => void;
  mergeConfig: (config: any) => void;
}

declare global {
  interface Window {
    botpressWebChat: BotpressWebChat;
  }
}

export {};
