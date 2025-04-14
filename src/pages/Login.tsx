import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, ChevronLeft, Loader2 } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "sonner";
import { otpService } from "../utils/otpService";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isUser, setIsUser] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Form data
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [otp, setOtp] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  const { login, isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = isLogin ? "Login | Re-View" : "Register | Re-View";
    
    // Redirect if already logged in
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLogin, isLoggedIn, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isUser) {
        if (!otpSent) {
          // Validate email and phone
          if (!email) {
            toast.error("Please enter your email address");
            setIsLoading(false);
            return;
          }

          if (!phone) {
            toast.error("Please enter your mobile number");
            setIsLoading(false);
            return;
          }
          
          // For registration, validate name and age
          if (!isLogin) {
            if (!name) {
              toast.error("Please enter your name");
              setIsLoading(false);
              return;
            }
            if (!age) {
              toast.error("Please enter your age");
              setIsLoading(false);
              return;
            }
          }

          // Send OTP
          const result = await otpService.sendOTP({ email, phone });
          
          if (result) {
            setOtpSent(true);
            toast.success("OTP sent successfully! Check console for demo OTP");
            toast.info("For testing, you can use 123456 as OTP");
          } else {
            toast.error("Failed to send OTP. Please try again.");
          }
        } else if (!otpVerified) {
          // Verify OTP
          if (!otp) {
            toast.error("Please enter the OTP");
            setIsLoading(false);
            return;
          }
          
          if (otp.length !== 6) {
            toast.error("OTP must be 6 digits");
            setIsLoading(false);
            return;
          }

          const result = await otpService.verifyOTP({ email, phone, otp });
          
          if (result) {
            setOtpVerified(true);
            
            // Create user data object based on form inputs
            const userData = {
              email,
              phone,
              name: name || email.split('@')[0] || "User", // Use email prefix if name not provided
              isEmployee: false
            };
            
            login(userData); // Set the user as logged in with user data
            toast.success(isLogin ? "Login successful!" : "Registration successful!");
            navigate('/'); // Redirect to home page
          } else {
            toast.error("Invalid OTP. Please try again.");
          }
        }
      } else {
        // Handle employee login
        if (!employeeId || !password) {
          toast.error("Please enter both employee ID and password");
          setIsLoading(false);
          return;
        }
        
        // For demo purposes, login with employee data
        // In production, this would be authenticated against a backend
        const userData = {
          email: employeeId + "@review.com",
          name: "Employee " + employeeId,
          isEmployee: true
        };
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        login(userData); 
        toast.success("Employee login successful!");
        navigate('/');
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleLoginRegister = () => {
    setIsLogin(!isLogin);
    setOtpSent(false);
    setOtpVerified(false);
    setOtp("");
  };

  const handleResendOTP = async () => {
    setIsLoading(true);
    try {
      const result = await otpService.sendOTP({ email, phone });
      
      if (result) {
        toast.success("OTP resent! Check console for demo OTP");
        toast.info("For testing, you can use 123456 as OTP");
      } else {
        toast.error("Failed to resend OTP. Please try again.");
      }
    } catch (error) {
      console.error("Resend OTP error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-review-darkblue">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="w-full max-w-md px-4">
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-white">
                  {isUser
                    ? isLogin
                      ? "User Login"
                      : "User Registration"
                    : "Employee Login"}
                </h1>
                
                {!isUser && (
                  <button
                    onClick={() => setIsUser(true)}
                    className="flex items-center text-sm text-review-cyan hover:text-white transition-colors"
                    disabled={isLoading}
                  >
                    <ChevronLeft size={16} />
                    Back to User
                  </button>
                )}
              </div>

              {/* Login/Register Tabs */}
              {isUser && (
                <div className="flex border-b border-review-cyan/20 mb-6">
                  <button
                    className={`flex-1 py-2 text-center transition-colors ${
                      isLogin
                        ? "text-review-cyan border-b-2 border-review-cyan"
                        : "text-white/70 hover:text-white"
                    }`}
                    onClick={() => {
                      setIsLogin(true);
                      setOtpSent(false);
                      setOtpVerified(false);
                      setOtp("");
                    }}
                    disabled={isLoading}
                  >
                    Login
                  </button>
                  <button
                    className={`flex-1 py-2 text-center transition-colors ${
                      !isLogin
                        ? "text-review-cyan border-b-2 border-review-cyan"
                        : "text-white/70 hover:text-white"
                    }`}
                    onClick={() => {
                      setIsLogin(false);
                      setOtpSent(false);
                      setOtpVerified(false);
                      setOtp("");
                    }}
                    disabled={isLoading}
                  >
                    Register
                  </button>
                </div>
              )}

              {/* User Login/Registration Form */}
              {isUser && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {!isLogin && !otpSent && (
                    <>
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-review-cyan/30 text-white focus:outline-none focus:ring-1 focus:ring-review-cyan/50"
                          placeholder="Enter your full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          disabled={isLoading}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="age" className="block text-sm font-medium text-white/70 mb-1">
                          Age
                        </label>
                        <input
                          type="number"
                          id="age"
                          min="1"
                          max="120"
                          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-review-cyan/30 text-white focus:outline-none focus:ring-1 focus:ring-review-cyan/50"
                          placeholder="Enter your age"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          required
                          disabled={isLoading}
                        />
                      </div>
                    </>
                  )}

                  {!otpSent && (
                    <>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-review-cyan/30 text-white focus:outline-none focus:ring-1 focus:ring-review-cyan/50"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          disabled={isLoading}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-1">
                          Mobile Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-review-cyan/30 text-white focus:outline-none focus:ring-1 focus:ring-review-cyan/50"
                          placeholder="Enter your mobile number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                          disabled={isLoading}
                        />
                      </div>
                    </>
                  )}

                  {otpSent && !otpVerified && (
                    <div className="space-y-4">
                      <div>
                        <div className="mb-4 space-y-2">
                          <p className="text-white/70 text-sm">
                            We've sent an OTP to:
                          </p>
                          {email && (
                            <p className="text-white text-sm">
                              Email: {otpService.getMaskedContact(email, 'email')}
                            </p>
                          )}
                          {phone && (
                            <p className="text-white text-sm">
                              Phone: {otpService.getMaskedContact(phone, 'phone')}
                            </p>
                          )}
                          <p className="text-amber-400 text-xs mt-2">
                            Demo Mode: Check browser console for OTP
                          </p>
                        </div>
                        <label htmlFor="otp" className="block text-sm font-medium text-white/70 mb-3">
                          Enter OTP
                        </label>
                        
                        <div className="flex justify-center mb-3">
                          <InputOTP
                            value={otp}
                            onChange={(value) => setOtp(value)}
                            maxLength={6}
                            disabled={isLoading}
                          >
                            <InputOTPGroup>
                              <InputOTPSlot index={0} />
                              <InputOTPSlot index={1} />
                              <InputOTPSlot index={2} />
                              <InputOTPSlot index={3} />
                              <InputOTPSlot index={4} />
                              <InputOTPSlot index={5} />
                            </InputOTPGroup>
                          </InputOTP>
                        </div>
                        
                        <div className="text-center">
                          <button 
                            type="button"
                            className="text-sm text-review-cyan hover:text-white transition-colors"
                            onClick={handleResendOTP}
                            disabled={isLoading}
                          >
                            Didn't receive OTP? Resend
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Employee Login Form */}
                  {!isUser && (
                    <>
                      <div>
                        <label htmlFor="employee-id" className="block text-sm font-medium text-white/70 mb-1">
                          Employee ID
                        </label>
                        <input
                          type="text"
                          id="employee-id"
                          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-review-cyan/30 text-white focus:outline-none focus:ring-1 focus:ring-review-cyan/50"
                          placeholder="Enter your employee ID"
                          value={employeeId}
                          onChange={(e) => setEmployeeId(e.target.value)}
                          required
                          disabled={isLoading}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-white/70 mb-1">
                          Password
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-review-cyan/30 text-white focus:outline-none focus:ring-1 focus:ring-review-cyan/50"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            disabled={isLoading}
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                            disabled={isLoading}
                          >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                  
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-review-cyan hover:bg-review-cyan/90 text-review-darkblue font-medium rounded-lg shadow-neon transition-all flex justify-center items-center"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={18} className="animate-spin mr-2" />
                        {otpSent ? (otpVerified ? "Success!" : "Verifying...") : (isLogin ? "Sending OTP..." : "Registering...")}
                      </>
                    ) : (
                      <>
                        {otpSent ? (otpVerified ? "Success!" : "Verify OTP") : (isLogin ? "Get OTP" : "Register")}
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Switch between User/Employee */}
              <div className="mt-6 text-center">
                {isUser ? (
                  <button
                    onClick={() => setIsUser(false)}
                    className="text-review-cyan hover:text-white transition-colors text-sm"
                    disabled={isLoading}
                  >
                    Employee Login
                  </button>
                ) : (
                  <button
                    onClick={() => setIsUser(true)}
                    className="text-review-cyan hover:text-white transition-colors text-sm"
                    disabled={isLoading}
                  >
                    User Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
