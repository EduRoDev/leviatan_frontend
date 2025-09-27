import { motion, useScroll, useTransform, useInView } from "framer-motion"
import type React from "react"

import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

// Componente Button inline
const Button = ({
    children,
    onClick,
    className = "",
    variant = "default",
    size = "default",
    ...props
}: {
    children: React.ReactNode
    onClick?: () => void
    className?: string
    variant?: "default" | "outline"
    size?: "default" | "lg"
    [key: string]: any
}) => {
    const baseClasses =
        "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"

    const variants = {
        default: "bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-500",
        outline:
            "border-2 border-purple-200 hover:border-purple-400 text-purple-600 hover:text-purple-700 bg-transparent hover:bg-purple-50",
    }

    const sizes = {
        default: "px-4 py-2 text-sm",
        lg: "px-8 py-4 text-base",
    }

    return (
        <button onClick={onClick} className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
            {children}
        </button>
    )
}

// Componente Card inline
const Card = ({
    children,
    className = "",
    ...props
}: {
    children: React.ReactNode
    className?: string
    [key: string]: any
}) => (
    <div className={`rounded-lg border bg-white shadow-sm ${className}`} {...props}>
        {children}
    </div>
)

const CardContent = ({
    children,
    className = "",
    ...props
}: {
    children: React.ReactNode
    className?: string
    [key: string]: any
}) => (
    <div className={`p-6 ${className}`} {...props}>
        {children}
    </div>
)

type Plan = "basic" | "pro" | "premium"

export default function Landing() {
    const [hoveredPlan, setHoveredPlan] = useState<Plan | null>(null)
    const { scrollYProgress } = useScroll()
    const heroRef = useRef(null)
    const featuresRef = useRef(null)
    const pricingRef = useRef(null)
    const ctaRef = useRef(null)

    const heroInView = useInView(heroRef, { once: true })
    const featuresInView = useInView(featuresRef, { once: true })
    const pricingInView = useInView(pricingRef, { once: true })
    const ctaInView = useInView(ctaRef, { once: true })

    const y = useTransform(scrollYProgress, [0, 1], [0, -50])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    // ✅ Aquí debe ir el navigate
    const navigate = useNavigate()
    const goToLogin = () => {
        navigate("/login")
    }

    const handleSubscription = (plan: Plan) => {
        console.log("Suscribiendo al plan:", plan)
    }

    const plans = [
        {
            name: "Basic",
            price: "$5",
            period: "/mo",
            desc: "Perfect for students starting out.",
            features: ["📚 AI Summaries", "📝 Homework Help", "⚡ Basic Support"],
            type: "basic" as Plan,
            popular: false,
            gradient: "from-purple-600 to-purple-400",
        },
        {
            name: "Pro",
            price: "$15",
            period: "/mo",
            desc: "Best for consistent learners.",
            features: [
                "📚 Unlimited Summaries",
                "📝 Advanced Homework Help",
                "💬 Priority Chat Support",
                "🎯 Personalized Study Plans",
            ],
            type: "pro" as Plan,
            popular: true,
            gradient: "from-yellow-400 to-yellow-300",
        },
        {
            name: "Premium",
            price: "$30",
            period: "/mo",
            desc: "For power learners & professionals.",
            features: ["📚 All Pro Features", "👨‍🏫 1-on-1 Mentoring", "🚀 VIP AI Tools", "📊 Advanced Analytics"],
            type: "premium" as Plan,
            popular: false,
            gradient: "from-purple-600 to-purple-400",
        },
    ]

    const benefits = [
        {
            icon: "📑",
            title: "Organize",
            desc: "Keep your study notes structured and accessible.",
            delay: 0,
        },
        {
            icon: "📝",
            title: "Summaries",
            desc: "AI-generated summaries to save you hours of study.",
            delay: 0.2,
        },
        {
            icon: "📚",
            title: "Homework Help",
            desc: "Step-by-step support to solve assignments.",
            delay: 0.4,
        },
    ]

    const stats = [
        { number: "50K+", label: "Active Students", delay: 0 },
        { number: "95%", label: "Success Rate", delay: 0.1 },
        { number: "24/7", label: "AI Support", delay: 0.2 },
        { number: "100+", label: "Universities", delay: 0.3 },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-100 text-gray-900 overflow-x-hidden">
            {/* Floating Navigation */}
            <motion.header
                className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 backdrop-blur-xl border border-purple-200 rounded-2xl px-8 py-4 shadow-lg"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="flex items-center justify-between gap-12">
                    <motion.div className="text-2xl font-bold text-purple-700" whileHover={{ scale: 1.05 }}>
                        LEVIATAN
                    </motion.div>
                    <nav className="hidden md:flex items-center gap-8">
                        {["Features", "Pricing", "About"].map((item, i) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
                                whileHover={{ y: -2 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i }}
                            >
                                {item}
                            </motion.a>
                        ))}
                    </nav>
                    <Button
                        onClick={goToLogin}
                        className="bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:shadow-xl"
                    >
                        Start Learning
                    </Button>
                </div>
            </motion.header>

            {/* Hero Section */}
            <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6">
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

                        {/* Stats */}
                        <motion.div
                            className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.7 + stat.delay, duration: 0.6 }}
                                >
                                    <div className="text-2xl font-bold text-purple-600">{stat.number}</div>
                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                </motion.div>
                            ))}
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
                                                    animate={{ scale: [0, 1, 0.5, 1], opacity: [0, 1, 0.7, 1] }}
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
                                        <h3 className="text-lg font-semibold text-purple-700">Study Progres</h3>
                                        <motion.div
                                            className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={heroInView ? { scale: 1, rotate: 0 } : {}}
                                            transition={{ delay: 1.2, duration: 0.8, type: "spring", stiffness: 200 }}
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
                                                transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
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
                                                transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
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

            {/* Features Section */}
            <section ref={featuresRef} id="features" className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl font-bold mb-6 text-purple-700"> Benefits</h2>
                        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                            Experience the future of learning with AI-powered tools designed to maximize your academic potential.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit, i) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 50 }}
                                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: benefit.delay, duration: 0.8 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group"
                            >
                                <Card className="h-full bg-white/80 backdrop-blur-xl border-2 border-purple-200 hover:border-purple-300 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                                    <CardContent className="text-center space-y-6">
                                        <motion.div
                                            className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300"
                                            whileHover={{ rotate: [0, -10, 10, 0] }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {benefit.icon}
                                        </motion.div>
                                        <h3 className="text-2xl font-bold text-purple-600 group-hover:text-purple-700 transition-colors">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section ref={pricingRef} id="pricing" className="py-32 px-6 bg-gradient-to-r from-purple-50 to-purple-100">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        animate={pricingInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl font-bold mb-6 text-purple-700"> Choose Your Plan</h2>
                        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                            Flexible pricing options designed to grow with your academic journey.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {plans.map((plan, i) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 50 }}
                                animate={pricingInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: i * 0.2, duration: 0.8 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                onHoverStart={() => setHoveredPlan(plan.type)}
                                onHoverEnd={() => setHoveredPlan(null)}
                                className="relative group"
                            >
                                {plan.popular && (
                                    <motion.div
                                        className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-purple-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg"
                                        initial={{ scale: 0 }}
                                        animate={pricingInView ? { scale: 1 } : {}}
                                        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                                    >
                                        ⭐ Most Popular
                                    </motion.div>
                                )}

                                <Card
                                    className={`h-full relative overflow-hidden transition-all duration-500 ${plan.popular
                                            ? "bg-gradient-to-b from-purple-700 to-purple-500 text-white border-4 border-purple-300 shadow-2xl"
                                            : "bg-white border border-purple-200 shadow-lg hover:shadow-xl"
                                        }`}
                                >
                                    <CardContent className="p-8 text-center space-y-6">
                                        <div className="space-y-2">
                                            <h3 className={`text-2xl font-bold ${plan.popular ? "text-white" : "text-purple-600"}`}>
                                                {plan.name}
                                            </h3>
                                            <p className={`${plan.popular ? "opacity-90" : "text-gray-600"}`}>{plan.desc}</p>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-baseline justify-center gap-1">
                                                <span className={`text-5xl font-bold ${plan.popular ? "text-white" : "text-purple-700"}`}>
                                                    {plan.price}
                                                </span>
                                                <span className={`${plan.popular ? "opacity-90" : "text-gray-600"}`}>{plan.period}</span>
                                            </div>
                                        </div>

                                        <ul className="space-y-3 text-left">
                                            {plan.features.map((feature, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    className={`flex items-center gap-3 ${plan.popular ? "opacity-90" : "text-gray-700"}`}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={pricingInView ? { opacity: 1, x: 0 } : {}}
                                                    transition={{ delay: 0.8 + idx * 0.1 }}
                                                >
                                                    {feature}
                                                </motion.li>
                                            ))}
                                        </ul>

                                        <Button
                                            onClick={() => handleSubscription(plan.type)}
                                            className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${plan.popular
                                                    ? "bg-yellow-400 text-purple-900 hover:bg-yellow-300 shadow-lg hover:shadow-xl"
                                                    : `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-lg`
                                                }`}
                                        >
                                            Subscribe
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
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

            {/* FAQ */}
            <section className="py-20 bg-purple-50">
                <h2 className="text-4xl font-bold text-center text-purple-700 mb-12">¿Frequently Asked Questions?</h2>
                <div className="max-w-3xl mx-auto space-y-6">
                    {[
                        { q: "How do I sign up?", a: "Just click Start Now and complete the form." },
                        { q: "Is it free?", a: "Yes! You can start free and upgrade if you want more features." },
                        { q: "Can I cancel anytime?", a: "Absolutely, no commitments required." },
                    ].map((faq, i) => (
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

            <section
                ref={ctaRef}
                className="py-32 px-6 bg-gradient-to-r from-purple-700 to-purple-500 text-center text-white relative overflow-hidden"
            >
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
                            transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
                        >
                            Ready to Boost Your Learning?
                        </motion.h2>

                        <motion.p
                            className="text-xl max-w-2xl mx-auto opacity-90"
                            initial={{ opacity: 0, y: 20 }}
                            animate={ctaInView ? { opacity: 0.9, y: 0 } : {}}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            Join thousands of students who have already revolutionized their study experience with AI-powered
                            learning.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 150 }}
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

            {/* Footer */}
            <footer className="bg-purple-900 text-white py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-12">
                        <div className="space-y-4">
                            <div className="text-2xl font-bold text-white">LEVIATAN</div>
                            <p className="text-purple-200">Empowering students worldwide with AI-driven learning solutions.</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-semibold text-white">Product</h4>
                            <ul className="space-y-2 text-purple-200">
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        API
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-semibold text-white">Company</h4>
                            <ul className="space-y-2 text-purple-200">
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-semibold text-white">Support</h4>
                            <ul className="space-y-2 text-purple-200">
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Status
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-purple-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-purple-200 text-sm">© 2025 LEVIATAN. All rights reserved.</p>
                        <div className="flex gap-6 text-sm text-purple-200">
                            <a href="#" className="hover:text-white transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
