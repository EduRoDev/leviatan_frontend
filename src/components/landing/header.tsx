import { motion } from "framer-motion"
import { Button } from ".//button"
import { useNavigate } from "react-router-dom"

export const Header = () => {
    const navigate = useNavigate() 

    const goToLogin = () => {
        navigate("/login") 
    }

    return (
        <motion.header
            className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 backdrop-blur-xl border border-purple-200 rounded-2xl px-8 py-4 shadow-lg"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="flex items-center justify-between gap-12">
                <motion.div className="text-2xl font-bold text-purple-700" whileHover={{ scale: 1.05 }}>
                    STUDY-AI
                </motion.div>
                <nav className="hidden md:flex items-center gap-8">
                    {["Features", "Pricing", "FAQ"].map((item, i) => (
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
    )
}
