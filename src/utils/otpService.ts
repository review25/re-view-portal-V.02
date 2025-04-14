
interface SendOTPOptions {
  email?: string;
  phone?: string;
}

interface VerifyOTPOptions {
  email?: string;
  phone?: string;
  otp: string;
}

// This would be replaced with actual API calls in a production environment
export const otpService = {
  // Send OTP to email and/or phone
  sendOTP: async ({ email, phone }: SendOTPOptions): Promise<boolean> => {
    console.log(`Sending OTP to email: ${email} and phone: ${phone}`);
    
    // In a real implementation, this would make an API call to your backend
    // For demo purposes, we'll simulate a successful API call
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo, we'll always return success
      // In production, this would return the API response
      return true;
    } catch (error) {
      console.error("Error sending OTP:", error);
      return false;
    }
  },
  
  // Verify the OTP entered by user
  verifyOTP: async ({ email, phone, otp }: VerifyOTPOptions): Promise<boolean> => {
    console.log(`Verifying OTP: ${otp} for email: ${email} and phone: ${phone}`);
    
    // In a real implementation, this would make an API call to your backend
    // For demo purposes, we'll simulate a successful verification if OTP is "123456"
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, any 6-digit OTP will be considered valid
      // In production, this would validate against the backend
      return otp.length === 6 && /^\d{6}$/.test(otp);
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
