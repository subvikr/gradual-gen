import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Login submitted", { email, password });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-[30vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-orange-400/5 to-transparent" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center">
            <h1 className="font-heading text-5xl md:text-7xl mb-6">
              Welcome Back
            </h1>
            <p className="text-secondary text-xl md:text-2xl max-w-3xl mx-auto">
              Login to your Capital Knit account
            </p>
          </div>
        </div>
      </section>

      {/* Login Form */}
      <section className="py-20 px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="you@company.com"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-secondary mb-2">
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="Enter your password"
                />
              </div>

              {/* Forgot Password Link */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 bg-black border border-white/20 rounded text-yellow-400 focus:ring-yellow-400"
                  />
                  <span className="text-sm text-secondary">Remember me</span>
                </label>
                <a href="#" className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors">
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-gold text-black font-semibold py-4 rounded-lg transition-all shadow-lg hover:shadow-yellow-400/20 hover:scale-105"
              >
                Login
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-black text-secondary">Don't have an account?</span>
                </div>
              </div>

              {/* Sign Up Link */}
              <div className="text-center">
                <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">
                  Create an account
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Login;
