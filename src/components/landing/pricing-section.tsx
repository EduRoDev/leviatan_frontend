import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent } from ".//card"
import { Button } from ".//button"

type Plan = "basic" | "pro" | "premium"

interface PricingSectionProps {
    pricingInView: boolean
}

export const PricingSection = ({ pricingInView }: PricingSectionProps) => {
    const [hoveredPlan, setHoveredPlan] = useState<Plan | null>(null)

    const handleSubscription = (plan: Plan) => {
        console.log("Suscribiendo al plan:", plan)
    }

    const plans = [
        {
            name: "Basic",
            price: "Free",
            period: "",
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

    return (
        <section id="pricing" className="py-32 px-6 bg-gradient-to-r from-purple-50 to-purple-100">
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
                                    className="absolute z-50 -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-purple-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg"
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
    )
}
