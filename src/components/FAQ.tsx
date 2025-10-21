import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is your minimum order quantity?",
      answer: "We accommodate both small batch orders and large-scale production runs. Contact us to discuss your specific requirements.",
    },
    {
      question: "What certifications does Capital Knit hold?",
      answer: "We are WRAP certified, GSV certified, and members of the Apparel Export Promotion Council (AEPC).",
    },
    {
      question: "Do you offer custom knitwear designs?",
      answer: "Yes, we provide full custom design services including CAD integration, sampling, and collaborative design development.",
    },
    {
      question: "What is your typical production lead time?",
      answer: "Lead times vary by order volume and complexity. Typical timelines range from 6-12 weeks from approval to delivery. Rush orders may be accommodated.",
    },
    {
      question: "Do you provide international shipping?",
      answer: "Yes, we have extensive experience with global logistics and ship to clients worldwide with full export documentation.",
    },
    {
      question: "How do you ensure quality control?",
      answer: "We maintain AQL (Acceptable Quality Limit) standards with multi-stage inspections, dedicated QC laboratories, and rigorous testing protocols.",
    },
    {
      question: "What technologies do you use in production?",
      answer: "Our facility features state-of-the-art knitting machinery, CAD systems, real-time monitoring, and sophisticated finishing technologies.",
    },
    {
      question: "Can you handle both small and bulk orders?",
      answer: "Absolutely. Our flexible production capabilities allow us to serve brands of all sizes, from emerging labels to established retailers.",
    },
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className={`border-b border-white/10 ${openIndex === index ? 'border-l-4 border-l-yellow-400' : ''} transition-all`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 hover:bg-white/5 transition-colors flex justify-between items-center gap-4"
              >
                <span className="font-heading text-white text-lg md:text-xl">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-secondary flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-secondary text-base md:text-lg px-6 pb-6 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
