import { useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"

import { TestimonialsSection } from "./testimonios"
import { FeaturesSection } from './factuares-section'
import { Header } from './header'
import { HeroSection } from './hero-section'
import { PricingSection } from './pricing-section'
import { FAQSection } from "./f-section"
import { L_Section } from './L_section'
import Footer from "../footer/Footer"

export default function Landing() {
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

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-100 text-gray-900 overflow-x-hidden">
            <Header />

            <div ref={heroRef}>
                <HeroSection heroInView={heroInView} y={y} opacity={opacity} />
            </div>

            <div ref={featuresRef}>
                <FeaturesSection featuresInView={featuresInView} />
            </div>

            <div ref={pricingRef}>
                <PricingSection pricingInView={pricingInView} />
            </div>

            <TestimonialsSection />
            <FAQSection />

            <div ref={ctaRef}>
                <L_Section ctaInView={ctaInView} />
            </div>

            <Footer />
        </div>
    )
}
