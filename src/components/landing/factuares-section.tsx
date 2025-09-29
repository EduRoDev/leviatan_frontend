import { motion } from "framer-motion"
import { Card, CardContent } from ".//card"

interface FeaturesSectionProps {
    featuresInView: boolean
}

export const FeaturesSection = ({ featuresInView }: FeaturesSectionProps) => {
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

    return (
        <section id="features" className="py-32 px-6">
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
    )
}
