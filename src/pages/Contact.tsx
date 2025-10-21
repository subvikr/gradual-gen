import { motion } from "framer-motion";
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours during business days.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <>
      <Navigation />
      <div className="bg-black min-h-screen">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-black via-black to-muted/50 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              Let's Build Something Together
            </h1>
            <p className="text-secondary text-xl md:text-2xl">
              Reach out for consultations, quotes, or questions about our manufacturing capabilities
            </p>
          </motion.div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-3xl md:text-4xl text-white mb-8">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white focus:border-yellow-400 focus:outline-none resize-none transition-colors"
                      placeholder="Tell us about your project, requirements, or questions..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-gold text-black font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-yellow-400/20 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>
                </form>
              </motion.div>

              {/* Direct Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-3xl md:text-4xl text-white mb-8">
                  Other Ways to Reach Us
                </h2>

                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted/50 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-white text-lg mb-1">Email Us</h3>
                      <a
                        href="mailto:info@capitalknit.net"
                        className="text-secondary hover:text-white transition-colors"
                      >
                        info@capitalknit.net
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted/50 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-white text-lg mb-1">Call Us</h3>
                      <p className="text-secondary">+91 [Contact for details]</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted/50 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-white text-lg mb-1">Visit Us</h3>
                      <p className="text-secondary">India</p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted/50 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-white text-lg mb-1">Business Hours</h3>
                      <p className="text-secondary mb-1">Monday - Saturday: 9:00 AM - 6:00 PM IST</p>
                      <p className="text-secondary text-sm">We typically respond within 24 hours during business days</p>
                    </div>
                  </div>
                </div>

                {/* Certifications reminder */}
                <div className="mt-12 p-6 bg-muted/30 border border-white/10 rounded-lg">
                  <h3 className="font-heading text-white text-lg mb-3">Why Choose Capital Knit?</h3>
                  <ul className="space-y-2 text-secondary text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">✓</span>
                      <span>WRAP, GSV & AEPC Certified</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">✓</span>
                      <span>27+ Years of Experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">✓</span>
                      <span>Global Shipping Capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">✓</span>
                      <span>200+ Skilled Professionals</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
