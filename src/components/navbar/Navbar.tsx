import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="bg-gradient-to-r from-primary to-primary-light border-b border-lavender">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {" "}
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-white">Leviatan</h1>
            <div className="hidden md:flex items-center space-x-6 ml-8">
              <Link
                to="#"
                className={`transition-colors ${
                  location.pathname === "/"
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Inicio
              </Link>
              <Link
                to="/subject"
                className={`transition-colors ${
                  location.pathname === "/subject"
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Mis Materias
              </Link>
              <Link
                to="/documents"
                className={`transition-colors ${
                  location.pathname === "/documents"
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Ver Documentos
              </Link>
              <Link
                to="/statistics"
                className={`transition-colors ${
                  location.pathname === "/statistics"
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Estadísticas
              </Link>
            </div>
          </div>{" "}
          <div className="flex items-center space-x-4">
            {/* Información del usuario */}
            {user && (
              <div className="hidden md:flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-white text-sm font-medium">
                    Usuario #{user.user_id}
                  </p>
                  <p className="text-white/70 text-xs">{user.email}</p>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </div>
              </div>
            )}

            {/* Botón de logout */}
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-3 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors"
              title="Cerrar Sesión"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                ></path>
              </svg>
              <span className="hidden sm:block text-sm font-medium">Salir</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
