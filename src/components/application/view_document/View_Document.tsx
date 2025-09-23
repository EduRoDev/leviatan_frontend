import Pdf_view from './PDF/Pdf_view';
import { useState } from 'react';
import { useEffect } from 'react';
import { Enviroment } from '../../../utils/env/enviroment';
import { useAuth } from '../../../context/AuthContext';
import { motion, AnimatePresence } from 'motion/react';
import type { Summary } from '../../../utils/interfaces/summary.interface';
import type { Flashcard } from '../../../utils/interfaces/flashcards.interfaces';


export function ViewDocument() {
    const documentId = Number(localStorage.getItem('documentId'));
    const [summary, setSummary] = useState<Summary>({
        content: '', document_id: 0, id: 0
    });
    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
    const [modalFlashcard, setModalFlashcard] = useState<Flashcard | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { token } = useAuth();
    console.log('Viewing document with ID:', documentId);

    useEffect(() => {
        const fetchSummary = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${Enviroment.API_URL}/summary/resumen/${documentId}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error("Error fetching summary");
                }
                const summary = await response.json();
                console.log("Document summary data:", summary);
                setSummary(summary);
            } catch (error) {
                console.error("Error fetching document summary:", error);
            } finally {
                setIsLoading(false);
            }
        }


        const fetchFlashcards = async () => {
            try {
                const response = await fetch(`${Enviroment.API_URL}/cards/flash/${documentId}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })

                if (!response.ok) {
                    throw new Error("Error fetching flashcards");
                }
                const flashcards = await response.json();
                console.log("Flashcards data:", flashcards);
                setFlashcards(flashcards);
            } catch (error) {
                console.error("Error fetching flashcards:", error);
            }
        }


        if (documentId) {
            fetchSummary();
            fetchFlashcards();
        }
    }, [documentId]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setModalFlashcard(null);
            }
        }
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    return (
        <div className="flex h-screen bg-bg-light">
            <main className="flex-1 overflow-hidden">
                <div className="h-full flex flex-col">
                    {/* Document Content */}
                    <div className="flex-1 overflow-auto p-6">
                        {/* Documento con fondo blanco, borde lavanda y sombra morada */}
                        <div
                            className="max-w-4xl mx-auto bg-white rounded-lg border border-lavender"
                            style={{ boxShadow: '0 10px 25px -5px rgba(109, 40, 217, 0.2)' }}
                        >
                            <Pdf_view />
                        </div>
                    </div>
                </div>
            </main>

            {/* Right Sidebar */}
            {/* Sidebar con fondo blanco y borde lavenda */}
            <aside className="w-80 bg-white border-l border-lavender overflow-hidden">
                <div className="h-full flex flex-col">
                    {/* Sidebar Header */}
                    {/* Header del sidebar con gradiente morado */}
                    <div
                        className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-4 border-b border-lavender"
                    >
                        <h3 className="text-lg font-medium">Resumen</h3>
                    </div>

                    {/* Resumen Section */}
                    <div className="flex-1 overflow-auto p-6">
                        <div className="space-y-6">
                            {/* Summary */}
                            {/* Tarjetas con fondo blanco, borde lavanda y sombra morada */}
                            <div
                                className="bg-white rounded-lg p-4 border border-lavender"
                                style={{ boxShadow: '0 4px 6px -1px rgba(109, 40, 217, 0.1)' }}
                            >
                                {/* Título con icono morado claro */}
                                <h4 className="font-medium text-text-dark mb-3 flex items-center">
                                    <svg
                                        className="w-5 h-5 mr-2 text-primary-light"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        ></path>
                                    </svg>
                                    Resumen
                                </h4>
                                <div className="text-sm text-gray-700 space-y-2">
                                    {isLoading ? (
                                        <motion.div
                                            className="space-y-3"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {/* Skeleton loader para simular líneas de texto */}
                                            <motion.div
                                                className="h-4 bg-gradient-to-r from-lavender via-primary-light/30 to-lavender rounded"
                                                animate={{
                                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                }}
                                                style={{
                                                    backgroundSize: '200% 100%'
                                                }}
                                            />
                                            <motion.div
                                                className="h-4 bg-gradient-to-r from-lavender via-primary-light/30 to-lavender rounded w-4/5"
                                                animate={{
                                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                    delay: 0.1
                                                }}
                                                style={{
                                                    backgroundSize: '200% 100%'
                                                }}
                                            />
                                            <motion.div
                                                className="h-4 bg-gradient-to-r from-lavender via-primary-light/30 to-lavender rounded w-3/4"
                                                animate={{
                                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                    delay: 0.2
                                                }}
                                                style={{
                                                    backgroundSize: '200% 100%'
                                                }}
                                            />

                                            {/* Texto de carga con animación */}
                                            <motion.div
                                                className="flex items-center justify-center mt-4"
                                                animate={{
                                                    scale: [1, 1.05, 1],
                                                    opacity: [0.7, 1, 0.7]
                                                }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity
                                                }}
                                            >
                                                <svg
                                                    className="animate-spin -ml-1 mr-3 h-4 w-4 text-primary"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    />
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    />
                                                </svg>
                                                <p className="text-primary text-sm font-medium">Generando resumen...</p>
                                            </motion.div>
                                        </motion.div>
                                    ) : (
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="leading-relaxed"
                                        >
                                            {summary.content || "No hay resumen disponible"}
                                        </motion.p>
                                    )}
                                </div>
                            </div>                        {/* Flashcards */}
                            <div
                                className="bg-white rounded-lg p-4 border border-lavender"
                                style={{ boxShadow: '0 4px 6px -1px rgba(109, 40, 217, 0.1)' }}
                            >
                                <h4 className="font-medium text-text-dark mb-3 flex items-center">
                                    <svg
                                        className="w-5 h-5 mr-2 text-primary-light"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                        ></path>
                                    </svg>
                                    Flashcards
                                </h4>
                                <div className="space-y-3">
                                    {flashcards.length > 0 ? (
                                        flashcards.map((flashcard, index) => (
                                            <motion.div
                                                key={index}
                                                className="p-3 border border-lavender rounded-lg bg-gray-50 hover:bg-lavender cursor-pointer transition-colors"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                onClick={() => {
                                                    setModalFlashcard(flashcard);
                                                }}
                                            >
                                                <p className='text-sm font-medium text-text-dark'>
                                                    {flashcard.question}
                                                </p>
                                                <p className='text-xs text-gray-500 mt-1 italic'>
                                                    (Haz clic para ver la respuesta)
                                                </p>
                                            </motion.div>
                                        ))
                                    ) : (
                                        <motion.div
                                            className="text-center py-6"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <svg className="mx-auto h-12 w-12 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                            <p className="text-sm text-gray-500">No hay flashcards disponibles</p>
                                            <p className="text-xs text-gray-400 mt-1">Las flashcards aparecerán aquí cuando se generen</p>
                                        </motion.div>
                                    )}
                                </div>

                                {/* Study Tools */}
                            </div>
                            <div
                                className="bg-white rounded-lg p-4 border border-lavender"
                                style={{ boxShadow: '0 4px 6px -1px rgba(109, 40, 217, 0.1)' }}
                            >
                                <h4 className="font-medium text-text-dark mb-3 flex items-center">
                                    <svg
                                        className="w-5 h-5 mr-2 text-primary-light"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        ></path>
                                    </svg>
                                    Herramientas
                                </h4>
                                <div className="space-y-2">
                                    {/* Botones de herramientas con hover lavanda y texto morado */}
                                    <button
                                        className="w-full px-3 py-2 text-left text-sm hover:bg-lavender rounded-lg transition-colors flex items-center text-gray-700 hover:text-primary"
                                    >
                                        <svg
                                            className="w-4 h-4 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"
                                            ></path>
                                        </svg>
                                        Crear Quiz
                                    </button>
                                    <button
                                        className="w-full px-3 py-2 text-left text-sm hover:bg-lavender rounded-lg transition-colors flex items-center text-gray-700 hover:text-primary"
                                    >
                                        <svg
                                            className="w-4 h-4 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                            ></path>
                                        </svg>
                                        Marcar Favorito
                                    </button>
                                    <button
                                        className="w-full px-3 py-2 text-left text-sm hover:bg-lavender rounded-lg transition-colors flex items-center text-gray-700 hover:text-primary"
                                    >
                                        <svg
                                            className="w-4 h-4 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                            ></path>
                                        </svg>
                                        Compartir
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            <AnimatePresence>
                {modalFlashcard && (
                    <motion.div
                        key="flashcard-modal"
                        className="fixed inset-0 z-50 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-black/40"
                            onClick={() => setModalFlashcard(null)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Card modal */}
                        <motion.div
                            className="relative bg-white rounded-xl shadow-2xl w-[90%] max-w-lg p-6 z-10"
                            initial={{ y: 20, opacity: 0, scale: 0.98 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 10, opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.18 }}
                        >
                            <button
                                onClick={() => setModalFlashcard(null)}
                                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                                aria-label="Cerrar"
                            >
                                ✕
                            </button>

                            <h3 className="text-lg font-semibold text-text-dark mb-2">
                                {modalFlashcard?.question}
                            </h3>
                            <div className="text-sm text-gray-700 leading-relaxed">
                                {modalFlashcard?.answer}
                            </div>

                            <div className="mt-4 flex justify-end">
                                <button
                                    onClick={() => setModalFlashcard(null)}
                                    className="px-3 py-2 bg-primary text-white rounded-md hover:brightness-95"
                                >
                                    Cerrar
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}