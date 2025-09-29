import { motion } from "framer-motion"

export const TestimonialsSection = () => {
    return (
        <section className="py-20 bg-white">
            <h2 className="text-4xl font-bold text-center text-purple-700 mb-12"> What Our Users Say</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        className="bg-purple-50 shadow-lg rounded-2xl p-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-gray-700 italic">"This platform transformed my study habits. Totally recommend it!"</p>
                        <div className="mt-4 flex items-center gap-3">
                            <img src={`https://i.pravatar.cc/150?img=${i}`} alt="user" className="w-10 h-10 rounded-full" />
                            <span className="font-semibold text-purple-700">User {i}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
