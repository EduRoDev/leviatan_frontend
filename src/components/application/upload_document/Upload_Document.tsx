export default function UploadDocument() {
    return (

        <main className="flex-1 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    {/* Título en morado principal */}
                    <h1 className="text-3xl font-bold mb-2 text-primary">
                        Subir Documento
                    </h1>
                    <p className="text-gray-600">
                        Arrastra y suelta tus archivos o haz clic para seleccionar
                    </p>
                </div>

                {/* Upload Area */}
                {/* Área de subida con borde lavanda y hover morado claro */}
                <div
                    className="border-2 border-dashed border-lavender rounded-xl p-12 text-center hover:border-primary-light transition-colors bg-white"
                    style={{ boxShadow: '0 4px 6px -1px rgba(109, 40, 217, 0.1)' }}
                >
                    <div className="mb-6">
                        <svg
                            className="w-16 h-16 mx-auto text-primary-light mb-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            ></path>
                        </svg>
                        {/* Título en morado principal */}
                        <h3 className="text-xl font-semibold mb-2 text-primary">
                            Subir documentos
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Formatos soportados: PDF, DOC, DOCX, TXT
                        </p>
                        {/* Botón primario con colores del manual */}
                        <button
                            className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            Seleccionar archivos
                        </button>
                    </div>
                </div>

                {/* Recent Uploads */}
                <div className="mt-8">
                    {/* Título en morado principal */}
                    <h2 className="text-xl font-semibold mb-4 text-primary">
                        Subidas recientes
                    </h2>
                    <div className="space-y-3">
                        {/* Tarjetas con fondo blanco y borde lavanda */}
                        <div
                            className="bg-white border border-lavender rounded-lg p-4 flex items-center justify-between"
                            style={{ boxShadow: '0 2px 4px -1px rgba(109, 40, 217, 0.1)' }}
                        >
                            <div className="flex items-center space-x-3">
                                <div
                                    className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center"
                                >
                                    <svg
                                        className="w-5 h-5 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-text-dark">
                                        Ecuaciones_Diferenciales.pdf
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Matemáticas • Hace 2 horas
                                    </p>
                                </div>
                            </div>
                            <span className="text-green-600 text-sm font-medium">
                                Procesado
                            </span>
                        </div>

                        <div
                            className="bg-white border border-lavender rounded-lg p-4 flex items-center justify-between"
                            style={{ boxShadow: '0 2px 4px -1px rgba(109, 40, 217, 0.1)' }}
                        >
                            <div className="flex items-center space-x-3">
                                <div
                                    className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center"
                                >
                                    <svg
                                        className="w-5 h-5 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-text-dark">
                                        Mecanica_Cuantica.docx
                                    </p>
                                    <p className="text-sm text-gray-500">Física • Hace 1 día</p>
                                </div>
                            </div>
                            <span className="text-green-600 text-sm font-medium">
                                Procesado
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}