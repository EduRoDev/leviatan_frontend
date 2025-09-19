export function ViewDocument() {
    return (
        <div className="flex h-screen bg-bg-light">
            <main className="flex-1 overflow-hidden">
                <div className="h-full flex flex-col">
                    {/* Document Header */}
                    {/* Header del documento con fondo blanco y borde lavanda */}
                    <div className="bg-white border-b border-lavender px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div>
                                {/* Título en morado principal */}
                                <h2 className="text-xl font-semibold text-primary">
                                    Introducción a la Física Cuántica
                                </h2>
                                <p className="text-sm text-gray-600 mt-1">
                                    Materia: Física • Subido hace 2 horas
                                </p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="hidden md:block">
                                    {/* Barra de búsqueda con fondo blanco y borde lavanda */}
                                    <input type="text" placeholder="Buscar en documento..."
                                        className="px-4 py-2 rounded-lg bg-white text-text-dark placeholder-gray-500 border border-lavender focus:outline-none focus:ring-2 focus:ring-primary-light w-64" />
                                </div>                {/* Document Controls */}
                                <button
                                    className="p-2 hover:bg-lavender rounded-lg transition-colors text-gray-600 hover:text-primary"
                                    title="Zoom Out"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
                                        ></path>
                                    </svg>
                                </button>
                                <span className="text-sm text-gray-600">100%</span>
                                <button
                                    className="p-2 hover:bg-lavender rounded-lg transition-colors text-gray-600 hover:text-primary"
                                    title="Zoom In"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                        ></path>
                                    </svg>
                                </button>
                                {/* Botón primario con colores del manual */}
                                <button
                                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors"
                                >
                                    Descargar PDF
                                </button>
                            </div>
                        </div>
                    </div>          {/* Document Content */}
                    <div className="flex-1 overflow-auto p-6">
                        {/* Documento con fondo blanco, borde lavanda y sombra morada */}
                        <div
                            className="max-w-4xl mx-auto bg-white rounded-lg border border-lavender"
                            style={{ boxShadow: '0 10px 25px -5px rgba(109, 40, 217, 0.2)' }}
                        >
                            {/* Simulated PDF Content */}
                            <div className="p-8 space-y-6">
                                {/* Título principal en morado */}
                                <h1 className="text-3xl font-bold text-primary mb-6">
                                    Introducción a la Física Cuántica
                                </h1>

                                <div className="prose prose-lg max-w-none">
                                    {/* Subtítulos en morado principal */}
                                    <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                                        1. Conceptos Fundamentales
                                    </h2>
                                    <p className="text-text-dark leading-relaxed mb-4">
                                        La física cuántica es una rama fundamental de la física que
                                        describe el comportamiento de la materia y la energía a
                                        escalas atómicas y subatómicas. A diferencia de la física
                                        clásica, que predice resultados deterministas, la mecánica
                                        cuántica introduce conceptos probabilísticos que
                                        revolucionaron nuestra comprensión del universo.
                                    </p>

                                    <h3 className="text-xl font-medium text-primary mt-6 mb-3">
                                        1.1 Principio de Incertidumbre
                                    </h3>
                                    <p className="text-text-dark leading-relaxed mb-4">
                                        El principio de incertidumbre de Heisenberg establece que es
                                        imposible conocer simultáneamente con precisión absoluta la
                                        posición y el momento de una partícula. Esta limitación no
                                        es tecnológica, sino fundamental en la naturaleza.
                                    </p>

                                    <h3 className="text-xl font-medium text-primary mt-6 mb-3">
                                        1.2 Dualidad Onda-Partícula
                                    </h3>
                                    <p className="text-text-dark leading-relaxed mb-4">
                                        Los objetos cuánticos exhiben propiedades tanto de ondas
                                        como de partículas, dependiendo del tipo de experimento
                                        realizado. Este fenómeno se observa claramente en el
                                        experimento de la doble rendija.
                                    </p>

                                    <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
                                        2. Aplicaciones Modernas
                                    </h2>
                                    <p className="text-text-dark leading-relaxed mb-4">
                                        La física cuántica ha dado lugar a numerosas tecnologías
                                        modernas, incluyendo láseres, transistores, resonancia
                                        magnética y computación cuántica. Estas aplicaciones han
                                        transformado nuestra sociedad y continúan impulsando la
                                        innovación tecnológica.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>        </div>
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