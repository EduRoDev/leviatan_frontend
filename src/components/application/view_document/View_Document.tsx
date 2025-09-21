import { pdfjs } from 'react-pdf';
import Pdf_view from './PDF/Pdf_view';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();


export function ViewDocument() {
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
                                    Puntos Clave
                                </h4>
                                <div className="text-sm text-gray-700 space-y-2">
                                    <p>
                                        • La física cuántica describe el comportamiento a escala
                                        atómica
                                    </p>
                                    <p>• Introduce conceptos probabilísticos vs deterministas</p>
                                    <p>• Principio de incertidumbre de Heisenberg</p>
                                    <p>• Dualidad onda-partícula</p>
                                    <p>• Aplicaciones en tecnología moderna</p>
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
                                    {/* Flashcards con fondo lavanda suave y hover morado claro */}
                                    <div
                                        className="bg-lavender p-3 rounded-lg cursor-pointer hover:bg-primary-light/20 transition-colors border border-lavender/50"
                                    >
                                        <p className="text-sm font-medium text-text-dark">
                                            ¿Qué es el principio de incertidumbre?
                                        </p>
                                        <p className="text-xs text-gray-600 mt-1">
                                            Toca para ver la respuesta
                                        </p>
                                    </div>
                                    <div
                                        className="bg-lavender p-3 rounded-lg cursor-pointer hover:bg-primary-light/20 transition-colors border border-lavender/50"
                                    >
                                        <p className="text-sm font-medium text-text-dark">
                                            Explica la dualidad onda-partícula
                                        </p>
                                        <p className="text-xs text-gray-600 mt-1">
                                            Toca para ver la respuesta
                                        </p>
                                    </div>
                                    <div
                                        className="bg-lavender p-3 rounded-lg cursor-pointer hover:bg-primary-light/20 transition-colors border border-lavender/50"
                                    >
                                        <p className="text-sm font-medium text-text-dark">
                                            Menciona 3 aplicaciones modernas
                                        </p>
                                        <p className="text-xs text-gray-600 mt-1">
                                            Toca para ver la respuesta
                                        </p>
                                    </div>
                                </div>
                                {/* Botón primario con colores del manual */}
                                <button
                                    className="w-full mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors text-sm font-medium"
                                >
                                    Generar Más Flashcards
                                </button>
                            </div>                        {/* Study Tools */}
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
        </div>
    );
}