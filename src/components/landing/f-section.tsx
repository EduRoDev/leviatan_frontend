import { motion } from "framer-motion"

export const FAQSection = () => {
    const faqs = [
        {
            q: "How do I sign up?",
            a: "Just click Start Now and complete the form.",
        },
        {
            q: "Is it free?",
            a: "Yes! You can start free and upgrade if you want more features.",
        },
        {
            q: "Can I cancel anytime?",
            a: "Absolutely, no commitments required.",
        },
    ]

    return (
        <section className="py-20 bg-purple-50" id="faq">
            <h2 className="text-4xl font-bold text-center text-purple-700 mb-12">¿Frequently Asked Questions?</h2>
            <div className="max-w-3xl mx-auto space-y-6">
                {faqs.map((faq, i) => (
                    <motion.div
                        key={i}
                        className="bg-white p-6 rounded-xl shadow"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="font-semibold text-purple-600 mb-2">{faq.q}</h3>
                        <p className="text-gray-600">{faq.a}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
