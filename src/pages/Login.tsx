import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";

const Popup = ({ message, onClose }: { message: string; onClose: () => void }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
    <div className="bg-white text-review-darkblue rounded-xl p-8 max-w-md w-full text-center shadow-2xl">
      <h2 className="text-xl font-bold mb-4">{message}</h2>
      <button
        onClick={onClose}
        className="mt-4 bg-review-darkblue text-white px-6 py-2 rounded-lg hover:bg-review-darkblue/90"
      >
        Close
      </button>
    </div>
  </div>
);

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const [userIdOrEmail, setUserIdOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [generatedId, setGeneratedId] = useState("");

  const navigate = useNavigate();
  const { login, isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = isLogin ? "Login to your Re-View Account" : "Register a New Re-View Account";
    if (isLoggedIn) navigate("/");
  }, [isLogin, isLoggedIn, navigate]);

  useEffect(() => {
    if (name.trim()) {
      const baseId = name.trim().toLowerCase().replace(/\s+/g, "");
      const uniqueId = `${baseId}${Math.floor(Math.random() * 1000)}`;
      setGeneratedId(uniqueId);
    }
  }, [name]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isLogin) {
        const response = await axios.post("https://re-view-portal-v-02-v1gd.onrender.com/login", {
          email: userIdOrEmail,
          password,
        });

        const { token, user } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        login(user);
        setPopupMessage("Login successful!");
      } else {
        if (!name || !email || !password) {
          setPopupMessage("All fields are required.");
          return;
        }

        const response = await axios.post("https://re-view-portal-v-02-v1gd.onrender.com/signUp", {
          fullName: name,
          email,
          password,
        });

        const { token, user } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        login(user);
        setPopupMessage("Registration successful!");
      }
    } catch (error: any) {
      console.error("Auth error:", error);
      setPopupMessage(error.response?.data?.error || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-review-darkblue">
      <Navbar />
      {popupMessage && (
        <Popup
          message={popupMessage}
          onClose={() => {
            setPopupMessage("");
            if (popupMessage.includes("successful")) navigate("/");
          }}
        />
      )}

      <main className="flex-grow flex items-center justify-center py-20">
        <div className="w-full max-w-md px-4">
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="p-8">
              <h1 className="text-2xl font-bold text-white mb-6 text-center">
                {isLogin ? "Login to your Re-View Account" : "Register a New Re-View Account"}
              </h1>

              <div className="flex border-b border-review-cyan/20 mb-6">
                <button
                  className={`flex-1 py-2 text-center transition-colors ${
                    isLogin ? "text-review-cyan border-b-2 border-review-cyan" : "text-white/70 hover:text-white"
                  }`}
                  onClick={() => setIsLogin(true)}
                  disabled={isLoading}
                >
                  Login
                </button>
                <button
                  className={`flex-1 py-2 text-center transition-colors ${
                    !isLogin ? "text-review-cyan border-b-2 border-review-cyan" : "text-white/70 hover:text-white"
                  }`}
                  onClick={() => setIsLogin(false)}
                  disabled={isLoading}
                >
                  Register
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <>
                    <div>
                      <label className="block text-sm text-white/70 mb-1">User Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-review-cyan/30 text-white"
                        placeholder="Enter your full name"
                        required
                        disabled={isLoading}
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-white/70 mb-1">Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-review-cyan/30 text-white"
                        placeholder="Enter your email"
                        required
                        disabled={isLoading}
                      />
                    </div>

                   
                  </>
                )}

                {isLogin && (
                  <div>
                    <label className="block text-sm text-white/70 mb-1">Email</label>
                    <input
                      type="text"
                      value={userIdOrEmail}
                      onChange={(e) => setUserIdOrEmail(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-review-cyan/30 text-white"
                      placeholder="Enter your email"
                      required
                      disabled={isLoading}
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm text-white/70 mb-1">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-review-cyan/30 text-white"
                      placeholder="Enter your password"
                      required
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-review-cyan hover:bg-review-cyan/90 text-review-darkblue font-medium rounded-lg shadow-neon transition-all flex justify-center items-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={18} className="animate-spin mr-2" />
                      {isLogin ? "Logging in..." : "Registering..."}
                    </>
                  ) : (
                    isLogin ? "Login" : "Register"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
