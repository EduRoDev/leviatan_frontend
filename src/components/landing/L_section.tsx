import { motion } from "framer-motion"
import { Button } from ".//button"
import { useNavigate } from "react-router-dom"


interface CTASectionProps {
    ctaInView: boolean
    
}

export const L_Section = ({ ctaInView,  }: CTASectionProps) => {
    const Navigate = useNavigate()

    const goToLogin = () => {
        Navigate("/login")
    }
    return (
        <section className="py-32 px-6 bg-gradient-to-r from-purple-700 to-purple-500 text-center text-white relative overflow-hidden">
            <motion.div className="absolute inset-0 -z-10 overflow-hidden">
                {/* Enhanced ascending bubbles - more visible */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={`bubble-${i}`}
                        className="absolute rounded-full bg-white/30 backdrop-blur-sm border border-white/40 shadow-lg"
                        style={{
                            width: `${30 + Math.random() * 60}px`,
                            height: `${30 + Math.random() * 60}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${100 + Math.random() * 20}%`,
                        }}
                        animate={{
                            y: [-100, -window.innerHeight - 200],
                            x: [0, Math.random() * 100 - 50],
                            opacity: [0, 0.9, 0.6, 0],
                            scale: [0.3, 1, 1.3, 0.5],
                        }}
                        transition={{
                            duration: 10 + Math.random() * 6,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "loop",
                            ease: "easeOut",
                            delay: i * 0.5,
                        }}
                    />
                ))}

                {/* Large floating bubbles */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={`large-bubble-${i}`}
                        className="absolute rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30 shadow-xl"
                        style={{
                            width: `${80 + Math.random() * 120}px`,
                            height: `${80 + Math.random() * 120}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -40, 0],
                            x: [0, 30, -30, 0],
                            scale: [1, 1.2, 0.8, 1],
                            opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                            duration: 8 + i * 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "mirror",
                            ease: "easeInOut",
                            delay: i * 1,
                        }}
                    />
                ))}

                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={`micro-bubble-${i}`}
                        className="absolute bg-white/50 rounded-full shadow-md"
                        style={{
                            width: `${4 + Math.random() * 8}px`,
                            height: `${4 + Math.random() * 8}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -300],
                            opacity: [0, 1, 0.8, 0],
                            scale: [0, 1.5, 1, 0],
                        }}
                        transition={{
                            duration: 6 + Math.random() * 4,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "loop",
                            ease: "easeOut",
                            delay: Math.random() * 8,
                        }}
                    />
                ))}

                {/* Bubble clusters for more density */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={`bubble-cluster-${i}`}
                        className="absolute"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${20 + i * 10}%`,
                        }}
                    >
                        {[...Array(4)].map((_, j) => (
                            <motion.div
                                key={`cluster-bubble-${j}`}
                                className="absolute w-6 h-6 bg-white/25 rounded-full border border-white/40"
                                style={{
                                    left: `${j * 15}px`,
                                    top: `${j * 10}px`,
                                }}
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.5, 0.9, 0.5],
                                    y: [0, -20, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: j * 0.3 + i * 0.8,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </motion.div>
                ))}

                {/* Enhanced geometric bubble shapes */}
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={`geo-bubble-${i}`}
                        className="absolute border-3 border-white/40 bg-white/15 backdrop-blur-sm"
                        style={{
                            width: `${60 + i * 20}px`,
                            height: `${60 + i * 20}px`,
                            borderRadius: i % 2 === 0 ? "50%" : "25%",
                            top: `${20 + i * 20}%`,
                            right: `${5 + i * 10}%`,
                        }}
                        animate={{
                            rotate: [0, 360],
                            scale: [1, 1.15, 1],
                            opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                            duration: 12 + i * 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </motion.div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <motion.h2
                        className="text-5xl font-bold"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                            delay: 0.2,
                            duration: 0.8,
                            type: "spring",
                            stiffness: 100,
                        }}
                    >
                        Ready to Boost Your Learning?
                    </motion.h2>

                    <motion.p
                        className="text-xl max-w-2xl mx-auto opacity-90"
                        initial={{ opacity: 0, y: 20 }}
                        animate={ctaInView ? { opacity: 0.9, y: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        Join thousands of students who have already revolutionized their study experience with AI-powered learning.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                            delay: 0.6,
                            duration: 0.8,
                            type: "spring",
                            stiffness: 150,
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            animate={{
                                boxShadow: [
                                    "0 0 20px rgba(255, 255, 255, 0.3)",
                                    "0 0 40px rgba(255, 255, 255, 0.5)",
                                    "0 0 20px rgba(255, 255, 255, 0.3)",
                                ],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                            className="inline-block rounded-2xl"
                        >
                            <Button
                                onClick={goToLogin}
                                size="lg"
                                className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl text-lg relative overflow-hidden group"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    animate={{
                                        x: ["-100%", "100%"],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Number.POSITIVE_INFINITY,
                                        repeatDelay: 3,
                                        ease: "easeInOut",
                                    }}
                                />
                                <span className="relative z-10">Get Started Now</span>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Additional animated elements */}
                    <motion.div
                        className="flex justify-center gap-8 mt-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        {["🚀", "⭐", "🎯"].map((emoji, i) => (
                            <motion.div
                                key={i}
                                className="text-4xl"
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 5, -5, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: i * 0.3,
                                    ease: "easeInOut",
                                }}
                            >
                                {emoji}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
