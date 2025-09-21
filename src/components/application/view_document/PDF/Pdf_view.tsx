import { Document, Page } from "react-pdf"
import { Enviroment } from "../../../../utils/env/enviroment"
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

export default function Pdf_view() {
  const [pdfUrl, setPdfUrl] = useState<string | undefined>(undefined)
  const [numPages, setNumPages] = useState<number | undefined>(undefined)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [scale, setScale] = useState<number>(0.75)

  const documentId = Number(localStorage.getItem("documentId"))

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const response = await fetch(`${Enviroment.API_URL}/documents/view/${documentId}`, {
          method: "GET",
        })

        if (!response.ok) {
          throw new Error("Error fetching document")
        }

        const blob = await response.blob()
        const url = URL.createObjectURL(blob)
        setPdfUrl(url)
      } catch (error) {
        console.error("Error fetching document:", error)
      }
    }

    fetchDocument()
  }, [documentId])

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    console.log("Document loaded successfully, pages:", numPages)
    setNumPages(numPages)
  }

  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= (numPages || 1)) {
      setCurrentPage(pageNumber)
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const goToNextPage = () => {
    if (currentPage < (numPages || 1)) {
      setCurrentPage(currentPage + 1)
    }
  }

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 3.0))
  }

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.25, 0.5))
  }

  const resetZoom = () => {
    setScale(1.0)
  }

  const width = Math.min(1200 * scale, window.innerWidth - 80)

  return (
    <motion.div
      className="flex flex-col h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-white border-b border-gray-200 p-4 flex items-center justify-between shadow-sm"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="flex items-center space-x-4">
          <motion.button
            onClick={goToPreviousPage}
            disabled={currentPage <= 1}
            className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg flex items-center transition-all duration-200 shadow-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: currentPage <= 1 ? 0 : -2 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </motion.svg>
            Anterior
          </motion.button>

          <motion.div
            className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-gray-700 font-medium">Página</span>
            <motion.input
              type="number"
              min="1"
              max={numPages || 1}
              value={currentPage}
              onChange={(e) => goToPage(Number.parseInt(e.target.value) || 1)}
              className="w-16 px-2 py-1 border border-gray-300 rounded text-center focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              whileFocus={{ scale: 1.05 }}
            />
            <span className="text-gray-700 font-medium">de {numPages || 0}</span>
          </motion.div>

          <motion.button
            onClick={goToNextPage}
            disabled={currentPage >= (numPages || 1)}
            className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg flex items-center transition-all duration-200 shadow-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Siguiente
            <motion.svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: currentPage >= (numPages || 1) ? 0 : 2 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.button>
        </div>

        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <motion.button
            onClick={zoomOut}
            className="p-2 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 rounded-lg shadow-sm transition-all duration-200"
            title="Alejar"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
            </svg>
          </motion.button>

          <motion.button
            onClick={resetZoom}
            className="px-3 py-2 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 rounded-lg text-sm font-medium shadow-sm transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={scale}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.3 }}
          >
            {Math.round(scale * 100)}%
          </motion.button>

          <motion.button
            onClick={zoomIn}
            className="p-2 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 rounded-lg shadow-sm transition-all duration-200"
            title="Acercar"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="flex-1 overflow-auto bg-gradient-to-br from-gray-50 to-gray-100 p-2">
        <div className="flex justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="shadow-2xl rounded-lg overflow-hidden"
              >
                <Page
                  pageNumber={currentPage}
                  width={width}
                  className="bg-white"
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                />
              </motion.div>
            </Document>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200 px-4 py-3 text-sm text-gray-600 flex justify-center items-center shadow-sm"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <motion.span
          key={`${currentPage}-${numPages}-${scale}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="font-medium"
        >
          Mostrando página {currentPage} de {numPages || 0} • Zoom: {Math.round(scale * 100)}%
        </motion.span>
      </motion.div>
    </motion.div>
  )
}