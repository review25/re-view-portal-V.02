
interface SendOTPOptions {
  email?: string;
  phone?: string;
}

interface VerifyOTPOptions {
  email?: string;
  phone?: string;
  otp: string;
}

// Mock service that simulates sending an OTP
export const otpService = {
  // Send OTP to email and/or phone
  sendOTP: async ({ email, phone }: SendOTPOptions): Promise<boolean> => {
    console.log(`Sending OTP to email: ${email} and phone: ${phone}`);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Generate a random 6-digit OTP for demo purposes
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      
      // In a real implementation, this would send the OTP via email/SMS
      // For demo purposes, we'll show it in the console
      console.log(`DEMO MODE: Your OTP is ${otp}`);
      
      // Store OTP in sessionStorage for verification (ONLY for demo purposes)
      // In production, this would be handled securely on the backend
      sessionStorage.setItem('demo_otp', otp);
      
      return true;
    } catch (error) {
      console.error("Error sending OTP:", error);
      return false;
    }
  },
  
  // Verify the OTP entered by user
  verifyOTP: async ({ email, phone, otp }: VerifyOTPOptions): Promise<boolean> => {
    console.log(`Verifying OTP: ${otp} for email: ${email} and phone: ${phone}`);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, check against stored OTP or allow any 6-digit OTP
      const storedOtp = sessionStorage.getItem('demo_otp');
      
      // Check if OTP matches stored OTP or is 123456 (for testing)
      const isValid = (storedOtp && otp === storedOtp) || otp === '123456';
      
      if (isValid) {
        // Clear stored OTP after successful verification
        sessionStorage.removeItem('demo_otp');
      }
      
      return isValid;
    } catch (error) {
      console.error("Error verifying OTP:", error);
      return false;
    }
  },
  
  // Get masked email/phone for display purposes
  getMaskedContact: (contact: string, type: 'email' | 'phone'): string => {
    if (!contact) return '';
    
    if (type === 'email') {
      const [username, domain] = contact.split('@');
      if (!username || !domain) return contact;
      
      return `${username.substring(0, 2)}${'*'.repeat(username.length - 2)}@${domain}`;
    } else {
      // Phone
      return `${'*'.repeat(contact.length - 4)}${contact.slice(-4)}`;
    }
  }
};
