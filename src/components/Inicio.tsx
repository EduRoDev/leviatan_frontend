import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Enviroment } from "../utils/env/enviroment";

interface QuickStats {
    totalSubjects: number;
    totalDocuments: number;
    totalQuizzes: number;
    averageScore: number;
}

export default function Inicio() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [stats, setStats] = useState<QuickStats>({
        totalSubjects: 0,
        totalDocuments: 0,
        totalQuizzes: 0,
        averageScore: 0,
    });
    const { token } = useAuth();

    useEffect(() => {
        const fetchQuickStats = async () => {
            try {
                const [subjectsRes, statsRes] = await Promise.all([
                    fetch(`${Enviroment.API_URL}/subject/user`, {
                        headers: { Authorization: `Bearer ${token}` },
                    }),
                    fetch(`${Enviroment.API_URL}/statistics/user_statistics`, {
                        headers: { Authorization: `Bearer ${token}` },
                    }),
                ]);

                if (subjectsRes.ok) {
                    const subjects = await subjectsRes.json();
                    setStats((prev) => ({ ...prev, totalSubjects: subjects.length }));
                }

                if (statsRes.ok) {
                    const userStats = await statsRes.json();
                    setStats((prev) => ({
                        ...prev,
                        totalQuizzes: userStats.total_quizzes || 0,
                        averageScore: userStats.average_score || 0,
                    }));
                }
            } catch (error) {
                console.error("Error fetching stats:", error);
            }
        };

        if (token) fetchQuickStats();
    }, [token]);

    const quickActions = [
        {
            icon: "📚",
            title: "Mis Materias",
            description: "Organiza tus asignaturas",
            color: "from-blue-500 to-cyan-600",
            action: () => navigate("/subject"),
        },
        {
            icon: "📊",
            title: "Estadísticas",
            description: "Ve tu progreso",
            color: "from-green-500 to-emerald-600",
            action: () => navigate("/statistics"),
        },
    ];

    const features = [
        {
            icon: "🤖",
            title: "IA Inteligente",
            description: "Resúmenes y análisis automáticos de tus documentos",
        },
        {
            icon: "📝",
            title: "Quizzes Adaptativos",
            description: "Practica con preguntas generadas por IA",
        },
        {
            icon: "💬",
            title: "Chat Interactivo",
            description: "Pregunta sobre cualquier documento",
        },
        {
            icon: "📈",
            title: "Seguimiento",
            description: "Monitorea tu progreso en tiempo real",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header de Bienvenida */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                        ¡Hola, {user?.email.split("@")[0] || "Estudiante"}! 👋
                    </h1>
                    <p className="text-lg text-gray-600">
                        Bienvenido a tu espacio de aprendizaje inteligente
                    </p>
                </motion.div>

                {/* Estadísticas Rápidas */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Materias</p>
                                <p className="text-3xl font-bold text-gray-800">
                                    {stats.totalSubjects}
                                </p>
                            </div>
                            <div className="bg-purple-100 p-3 rounded-full">
                                <span className="text-3xl">📚</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Quizzes</p>
                                <p className="text-3xl font-bold text-gray-800">
                                    {stats.totalQuizzes}
                                </p>
                            </div>
                            <div className="bg-blue-100 p-3 rounded-full">
                                <span className="text-3xl">✅</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Promedio</p>
                                <p className="text-3xl font-bold text-gray-800">
                                    {stats.averageScore.toFixed(0)}%
                                </p>
                            </div>
                            <div className="bg-green-100 p-3 rounded-full">
                                <span className="text-3xl">📊</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Racha</p>
                                <p className="text-3xl font-bold text-gray-800">
                                    {Math.min(stats.totalQuizzes, 7)} días
                                </p>
                            </div>
                            <div className="bg-orange-100 p-3 rounded-full">
                                <span className="text-3xl">🔥</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Acciones Rápidas */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-8"
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                        Acciones Rápidas
                    </h2>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
                            {quickActions.map((action, index) => (
                                <motion.div
                                    key={action.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    onClick={action.action}
                                    className={`bg-gradient-to-br ${action.color} rounded-xl p-6 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300`}
                                >
                                    <div className="text-5xl mb-3">{action.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {action.title}
                                    </h3>
                                    <p className="text-white/90 text-sm">{action.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Características Destacadas */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="bg-white rounded-2xl p-8 shadow-xl mb-8"
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        ¿Qué puedes hacer con Teach Bot?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.0 + index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-5xl mb-3">{feature.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Tips y Consejos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className="bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl p-8 text-white shadow-xl"
                >
                    <div className="flex items-start gap-4">
                        <div className="text-5xl">💡</div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Consejo del día</h3>
                            <p className="text-white/90 text-lg">
                                Sube tus apuntes de clase y deja que la IA cree resúmenes y
                                flashcards automáticamente. ¡Estudiar nunca fue tan fácil!
                            </p>
                            <button
                                onClick={() => navigate("/subject")}
                                className="mt-4 bg-white text-purple-600 font-semibold py-2 px-6 rounded-lg hover:bg-purple-50 transition-colors"
                            >
                                Comenzar ahora →
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* CTA Final */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                    className="mt-8 text-center"
                >
                    <p className="text-gray-600 mb-4">
                        ¿Necesitas ayuda para comenzar?
                    </p>
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => navigate("/subject")}
                            className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-purple-700 transition-colors shadow-lg"
                        >
                            Crear mi primera materia
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
