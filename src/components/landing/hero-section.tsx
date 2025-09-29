"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { Button } from ".//button"
import { Card, CardContent } from ".//card"
import { useNavigate } from "react-router-dom"

interface HeroSectionProps {
    heroInView: boolean
    y: any
    opacity: any
    
}

export const HeroSection = ({ heroInView, y, opacity, }: HeroSectionProps) => {
    const heroRef = useRef(null)
    const Navigate = useNavigate()

    const goToLogin = () => {
        Navigate("/login") 
    }

    return (
        <section ref={heroRef} className="relative min-h-screen pt-10 flex items-center justify-center px-6">
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-transparent to-purple-200/30"
                style={{ y, opacity }}
            />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={heroInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium"
                    ></motion.div>

                    <motion.h1
                        className="text-6xl lg:text-7xl font-bold leading-tight text-purple-700"
                        initial={{ opacity: 0, y: 30 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Your Study
                        <span className="block text-purple-500">Assistant</span>
                    </motion.h1>

                    <motion.p
                        className="text-xl text-gray-700 leading-relaxed max-w-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Learn smarter, not harder. Organize your materials and boost your productivity with AI support.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <Button
                            onClick={goToLogin}
                            size="lg"
                            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                        >
                            Start Now
                        </Button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                >
                    <div className="relative">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-600/20 rounded-3xl blur-3xl"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                        />
                        <Card className="relative bg-white/80 backdrop-blur-xl border-2 border-purple-200 rounded-3xl p-8 shadow-2xl overflow-hidden">
                            <motion.div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
                                {/* Enhanced animated mesh grid with higher opacity */}
                                <svg
                                    className="absolute inset-0 w-full h-full opacity-60"
                                    viewBox="0 0 400 300"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <defs>
                                        <pattern id="mesh-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                                            <motion.path
                                                d="M 30 0 L 0 0 0 30"
                                                fill="none"
                                                stroke="url(#mesh-gradient)"
                                                strokeWidth="2"
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                animate={{ pathLength: 1, opacity: 1 }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Number.POSITIVE_INFINITY,
                                                    repeatType: "reverse",
                                                    ease: "easeInOut",
                                                }}
                                            />
                                            <motion.circle
                                                cx="0"
                                                cy="0"
                                                r="2"
                                                fill="url(#mesh-gradient)"
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{
                                                    scale: [0, 1, 0.5, 1],
                                                    opacity: [0, 1, 0.7, 1],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Number.POSITIVE_INFINITY,
                                                    ease: "easeInOut",
                                                }}
                                            />
                                        </pattern>
                                        <linearGradient id="mesh-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                                            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.9" />
                                            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.8" />
                                        </linearGradient>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#mesh-pattern)" />
                                </svg>

                                {/* Enhanced mesh overlay with stronger visibility */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-purple-400/15 to-purple-600/20"
                                    animate={{
                                        opacity: [0.4, 0.7, 0.4],
                                        scale: [1, 1.02, 1],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: "easeInOut",
                                    }}
                                />

                                {/* More visible floating mesh particles */}
                                {[...Array(12)].map((_, i) => (
                                    <motion.div
                                        key={`mesh-particle-${i}`}
                                        className="absolute w-2 h-2 bg-purple-500/60 rounded-full shadow-lg"
                                        animate={{
                                            x: [0, 60, -40, 0],
                                            y: [0, -50, 40, 0],
                                            opacity: [0, 1, 0.6, 0],
                                            scale: [0, 1.2, 0.8, 0],
                                        }}
                                        transition={{
                                            duration: 6 + i * 0.5,
                                            repeat: Number.POSITIVE_INFINITY,
                                            repeatType: "loop",
                                            ease: "easeInOut",
                                            delay: i * 0.6,
                                        }}
                                        style={{
                                            top: `${15 + ((i * 8) % 70)}%`,
                                            left: `${10 + ((i * 12) % 80)}%`,
                                        }}
                                    />
                                ))}

                                {/* Enhanced mesh lines */}
                                {[...Array(6)].map((_, i) => (
                                    <motion.div
                                        key={`mesh-line-${i}`}
                                        className="absolute bg-gradient-to-r from-transparent via-purple-400/40 to-transparent h-px"
                                        style={{
                                            width: "100%",
                                            top: `${20 + i * 15}%`,
                                            left: 0,
                                        }}
                                        animate={{
                                            opacity: [0, 0.8, 0],
                                            scaleX: [0, 1, 0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Number.POSITIVE_INFINITY,
                                            delay: i * 0.5,
                                            ease: "easeInOut",
                                        }}
                                    />
                                ))}

                                {/* Original floating blobs */}
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-40 h-40 rounded-full bg-purple-400/30 blur-3xl"
                                        animate={{
                                            x: [0, 100, -100, 0],
                                            y: [0, -50, 50, 0],
                                            opacity: [0.6, 0.3, 0.6],
                                        }}
                                        transition={{
                                            duration: 10 + i * 2,
                                            repeat: Number.POSITIVE_INFINITY,
                                            repeatType: "mirror",
                                            ease: "easeInOut",
                                        }}
                                        style={{
                                            top: `${20 * i}%`,
                                            left: `${30 * i}%`,
                                        }}
                                    />
                                ))}
                            </motion.div>

                            <CardContent className="space-y-6">
                                <motion.div
                                    className="flex items-center justify-between"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={heroInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                >
                                    <h3 className="text-lg font-semibold text-purple-700">Study Progress</h3>
                                    <motion.div
                                        className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={heroInView ? { scale: 1, rotate: 0 } : {}}
                                        transition={{
                                            delay: 1.2,
                                            duration: 0.8,
                                            type: "spring",
                                            stiffness: 200,
                                        }}
                                        whileHover={{
                                            scale: 1.1,
                                            boxShadow: "0 0 20px rgba(34, 197, 94, 0.4)",
                                        }}
                                    >
                                        +150%
                                    </motion.div>
                                </motion.div>
                                <div className="space-y-4">
                                    <motion.div
                                        className="flex justify-between text-sm text-gray-700"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.9, duration: 0.5 }}
                                    >
                                        <span>Mathematics</span>
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={heroInView ? { opacity: 1 } : {}}
                                            transition={{ delay: 2.5, duration: 0.5 }}
                                        >
                                            95%
                                        </motion.span>
                                    </motion.div>
                                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                                        <motion.div
                                            className="bg-gradient-to-r from-purple-600 to-purple-400 h-2 rounded-full relative"
                                            initial={{ width: 0 }}
                                            animate={heroInView ? { width: "95%" } : {}}
                                            transition={{
                                                delay: 1,
                                                duration: 1.5,
                                                ease: "easeOut",
                                            }}
                                        >
                                            <motion.div
                                                className="absolute inset-0 bg-white/30 rounded-full"
                                                animate={{
                                                    x: ["-100%", "100%"],
                                                    opacity: [0, 1, 0],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Number.POSITIVE_INFINITY,
                                                    repeatDelay: 3,
                                                    ease: "easeInOut",
                                                }}
                                            />
                                        </motion.div>
                                    </div>
                                    <motion.div
                                        className="flex justify-between text-sm text-gray-700"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 1.1, duration: 0.5 }}
                                    >
                                        <span>Physics</span>
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={heroInView ? { opacity: 1 } : {}}
                                            transition={{ delay: 2.7, duration: 0.5 }}
                                        >
                                            87%
                                        </motion.span>
                                    </motion.div>
                                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                                        <motion.div
                                            className="bg-gradient-to-r from-yellow-400 to-yellow-300 h-2 rounded-full relative"
                                            initial={{ width: 0 }}
                                            animate={heroInView ? { width: "87%" } : {}}
                                            transition={{
                                                delay: 1.2,
                                                duration: 1.5,
                                                ease: "easeOut",
                                            }}
                                        >
                                            <motion.div
                                                className="absolute inset-0 bg-white/30 rounded-full"
                                                animate={{
                                                    x: ["-100%", "100%"],
                                                    opacity: [0, 1, 0],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Number.POSITIVE_INFINITY,
                                                    repeatDelay: 3,
                                                    delay: 0.5,
                                                    ease: "easeInOut",
                                                }}
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
