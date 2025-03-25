
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, ChevronLeft } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isUser, setIsUser] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = isLogin ? "Login | Re-View" : "Register | Re-View";
  }, [isLogin]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isUser) {
      if (!otpSent) {
        setOtpSent(true);
      } else if (!otpVerified) {
        setOtpVerified(true);
        // Here we would redirect to dashboard in a real implementation
      }
    } else {
      // Handle employee login (would connect to backend)
      console.log("Employee login attempted");
    }
  };

  const toggleLoginRegister = () => {
    setIsLogin(!isLogin);
    setOtpSent(false);
    setOtpVerified(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-review-black">
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
                    }}
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
                    }}
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
                          required
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
                          required
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
                          required
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
                          required
                        />
                      </div>
                    </>
                  )}

                  {otpSent && !otpVerified && (
                    <div>
                      <div className="mb-4">
                        <p className="text-white/70 text-sm">
                          We've sent an OTP to your email and mobile number.
                        </p>
                      </div>
                      <label htmlFor="otp" className="block text-sm font-medium text-white/70 mb-1">
                        Enter OTP
                      </label>
                      <input
                        type="text"
                        id="otp"
                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-review-cyan/30 text-white focus:outline-none focus:ring-1 focus:ring-review-cyan/50"
                        placeholder="6-digit OTP"
                        maxLength={6}
                        pattern="[0-9]{6}"
                        required
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-review-cyan hover:bg-review-cyan/90 text-review-black font-medium rounded-lg shadow-neon transition-all"
                  >
                    {otpSent ? (otpVerified ? "Success!" : "Verify OTP") : (isLogin ? "Get OTP" : "Register")}
                  </button>
                </form>
              )}

              {/* Employee Login Form */}
              {!isUser && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="employee-id" className="block text-sm font-medium text-white/70 mb-1">
                      Employee ID
                    </label>
                    <input
                      type="text"
                      id="employee-id"
                      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-review-cyan/30 text-white focus:outline-none focus:ring-1 focus:ring-review-cyan/50"
                      placeholder="Enter your employee ID"
                      required
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
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-review-cyan hover:bg-review-cyan/90 text-review-black font-medium rounded-lg shadow-neon transition-all"
                  >
                    Login
                  </button>
                </form>
              )}

              {/* Switch between User/Employee */}
              <div className="mt-6 text-center">
                {isUser ? (
                  <button
                    onClick={() => setIsUser(false)}
                    className="text-review-cyan hover:text-white transition-colors text-sm"
                  >
                    Employee Login
                  </button>
                ) : (
                  <button
                    onClick={() => setIsUser(true)}
                    className="text-review-cyan hover:text-white transition-colors text-sm"
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
