
export default function Navbar() {


    return (
        <header
            className="bg-gradient-to-r from-primary to-primary-light border-b border-lavender"
        >
            <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <h1 className="text-xl font-semibold text-white">Leviatan</h1>
                        <div className="hidden md:flex items-center space-x-6 ml-8">
                            <a
                                href="#"
                                className="text-white/80 hover:text-white transition-colors"
                            >Inicio</a
                            >
                            <a
                                href="#"
                                className="text-white/80 hover:text-white transition-colors"
                            >Documentos</a
                            >
                            <a
                                href="#"
                                className="text-white/80 hover:text-white transition-colors"
                            >Materias</a
                            >
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="text-white/80 hover:text-white transition-colors">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                        </button>
                        <button className="text-white/80 hover:text-white transition-colors">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}