import { motion, AnimatePresence } from "framer-motion";
import type { DocumentR } from "../../../../utils/interfaces/document.interface";

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  documents: DocumentR[];
  onAddDocument: (doc: {
    title: string;
    content: string;
    file?: File | null;
  }) => void;
  loading?: boolean;
  onclick: () => void;
}

export function DocumentModal({
  isOpen,
  onClose,
  documents,
  onclick,
  loading = false,
}: DocumentModalProps) {

  const truncateText = (text: string, maxLength: number) => {
    const words = text.split(' ');
    if (words.length <= maxLength) return text;
    return words.slice(0, maxLength).join(' ') + '...';
  }
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 w-full max-w-2xl shadow-xl"
            initial={{ scale: 0.9, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: -30 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-purple-primary mb-6">
              Documentos de la materia
            </h2>

            {/* Lista de documentos */}
            {documents.length === 0 ? (
              <p className="text-gray-500 mb-6">
                No hay documentos cargados en esta materia.
              </p>
            ) : (
              <ul className="space-y-3 mb-6 max-h-60 overflow-y-auto">
                {documents.map((doc) => (
                  <li
                    key={doc.id}
                    className="border p-4 rounded-lg shadow-sm hover:shadow-md transition"
                  >
                    <h3 className="font-bold text-lg">{doc.title}</h3>
                    <p className="text-sm text-gray-600">{truncateText(doc.content,50)}</p>
                  </li>
                ))}
              </ul>
            )}

            {/* Botones */}
            <div className="flex justify-end gap-3 pt-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Cerrar
              </button>
              <button
                type="submit"
                disabled={loading}
                onClick={onclick}
                className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50 shadow-md"
              >
                {loading ? "Guardando..." : "Agregar documento"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
