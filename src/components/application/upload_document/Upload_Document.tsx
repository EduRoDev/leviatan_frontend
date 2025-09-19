import React, { useState } from 'react';
import { Enviroment } from '../../../utils/env/enviroment';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import type { DocumentResponse } from '../../../utils/interfaces/document.interface';

export default function UploadDocument() {
    const [selectedFile, setSelectedFile] = useState<File>();
    const [uploading, setUploading] = useState<boolean>(false);
    const [processingStatus, setProcessingStatus] = useState<string>('');
    const { token } = useAuth();
    const navigate = useNavigate();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    }

    const handleUpload = async () => {
        if (!selectedFile) {
            alert("Por favor, selecciona un archivo antes de subir.");
            return;
        }

        if (!token) {
            alert("No estás autenticado. Por favor, inicia sesión.");
            return;
        }

        setUploading(true);

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const res = await fetch(`${Enviroment.API_URL}/documents/uploads`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            });

            if (!res.ok) {
                throw new Error("Error en la subida del documento");
            }

            setProcessingStatus("Procesando documento... Esto puede tardar unos minutos.");

            const data: DocumentResponse = await res.json();
            setProcessingStatus("Documento procesado con éxito.");
            localStorage.setItem('documentId', data.document.id.toString());

            
            if (res.status === 200) {
                navigate('/documents', {
                    state: {
                        documentId: data.document.id,
                        title: data.document.title,
                    }
                });
            }

            setSelectedFile(undefined);
        } catch (error) {
            console.error("Error al subir el documento:", error);
            setProcessingStatus("Error al subir el documento. Por favor, inténtalo de nuevo.");
        } finally {
            setUploading(false);
            setSelectedFile(undefined);
            setTimeout(() => setProcessingStatus(''), 5000);
        }
    }


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
                        <input
                            type='file'
                            id='fileInput'
                            accept='.pdf'
                            onChange={handleFileChange}
                            className="hidden"
                        />
                        <label
                            htmlFor="fileInput"
                            className="inline-block bg-primary text-white font-medium py-2 px-4 rounded cursor-pointer hover:bg-primary-dark transition-colors"
                            style={{ boxShadow: '0 2px 4px -1px rgba(109, 40, 217, 0.1)' }}
                        >
                            Seleccionar Archivo
                        </label>

                        {/* Mostrar archivo seleccionado */}
                        {selectedFile && (
                            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                                <p className="text-xs text-gray-500 mb-3">
                                    Tamaño: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                                <button
                                    onClick={handleUpload}
                                    disabled={uploading}
                                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {uploading ? 'Subiendo...' : 'Subir archivo'}
                                </button>
                            </div>
                        )}
                        {/* Mostrar estado de procesamiento */}
                        {processingStatus && (
                            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                <p className="text-sm text-blue-700 font-medium">
                                    {processingStatus}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}