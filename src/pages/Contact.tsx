import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-orange-400/5 to-transparent" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-heading text-5xl md:text-7xl mb-6">
              Let's Build Something Together
            </h1>
            <p className="text-secondary text-xl md:text-2xl max-w-3xl mx-auto">
              Reach out for consultations, quotes, or questions about our manufacturing capabilities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-8">Send Us a Message</h2>
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-secondary mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="Your Company"
                />
              </div>

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
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="you@company.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Inquiry Type */}
              <div>
                <label htmlFor="inquiry_type" className="block text-sm font-medium text-secondary mb-2">
                  Inquiry Type *
                </label>
                <select
                  id="inquiry_type"
                  name="inquiry_type"
                  required
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                >
                  <option value="">Select an option</option>
                  <option value="quote">Request a Quote</option>
                  <option value="capabilities">Learn About Capabilities</option>
                  <option value="samples">Request Samples</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">General Question</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project, requirements, or questions..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-gold text-black font-semibold py-4 rounded-lg transition-all shadow-lg hover:shadow-yellow-400/20"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-heading text-3xl md:text-4xl mb-8">Other Ways to Reach Us</h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-lg hover:border-white/30 transition-colors">
                  <div className="p-3 bg-gradient-gold rounded-lg">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Email Us</h3>
                    <a 
                      href="mailto:info@capitalknit.net" 
                      className="text-secondary hover:text-yellow-400 transition-colors"
                    >
                      info@capitalknit.net
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-lg hover:border-white/30 transition-colors">
                  <div className="p-3 bg-gradient-gold rounded-lg">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Call Us</h3>
                    <p className="text-secondary">+91 [Contact Number]</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-lg hover:border-white/30 transition-colors">
                  <div className="p-3 bg-gradient-gold rounded-lg">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Visit Us</h3>
                    <p className="text-secondary">
                      Capital Knit<br />
                      India
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-lg">
                  <div className="p-3 bg-gradient-gold rounded-lg">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Business Hours</h3>
                    <p className="text-secondary mb-2">
                      Monday - Saturday: 9:00 AM - 6:00 PM IST
                    </p>
                    <p className="text-secondary text-sm italic">
                      We typically respond within 24 hours during business days
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-yellow-400/10 to-orange-400/10 border border-yellow-400/20 rounded-lg p-8">
              <h3 className="font-heading text-2xl mb-4">Ready to Start Your Project?</h3>
              <p className="text-secondary mb-6">
                Whether you're looking for a manufacturing partner, need samples, or want to learn more about our capabilities, we're here to help. Our team is ready to discuss how Capital Knit can support your brand's success.
              </p>
              <ul className="space-y-2 text-secondary text-sm">
                <li>• Fast response times</li>
                <li>• Detailed consultations</li>
                <li>• Sample availability</li>
                <li>• Transparent pricing</li>
                <li>• Expert guidance</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
