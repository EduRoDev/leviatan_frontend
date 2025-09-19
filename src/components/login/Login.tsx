import React, { useState } from "react";
import type { FormEvent } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { PopupEmailPassword, PopupPasswordMismatch } from "../../utils/pop_ups/error_Pops";
import { PopupUserCreated, PopupLoginSuccess } from "../../utils/pop_ups/confirm_Pops";
import { Enviroment } from "../../utils/env/enviroment";
import type { LoginRequest, LoginResponse } from "../../utils/interfaces/login.interface";
import type { User } from "../../utils/interfaces/user.interface";


type Data = {
  name?: string;
  last_name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Data>({
    name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showEmailPasswordPopup, setShowEmailPasswordPopup] = useState<boolean>(false);
  const [showPasswordMismatchPopup, setShowPasswordMismatchPopup] = useState<boolean>(false);

  const [showUserCreatedPopup, setShowUserCreatedPopup] = useState<boolean>(false);
  const [showLoginSuccessPopup, setShowLoginSuccessPopup] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((s) => ({ ...s, [name]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!data.email || !data.password) {
      setShowEmailPasswordPopup(true);
      setTimeout(() => setShowEmailPasswordPopup(false), 3000);
      return;
    }
    if (!isLogin && data.password !== data.confirmPassword) {
      setShowPasswordMismatchPopup(true);
      setTimeout(() => setShowPasswordMismatchPopup(false), 3000);
      return;
    }

    setLoading(true);

    try {
      if (!isLogin) {
        const registerData: User = {
          name: data.name!,
          last_name: data.last_name!,
          email: data.email,
          password: data.password
        }

        const registerRes = await fetch(`${Enviroment.API_URL}/auth/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(registerData)
        });

        if (!registerRes.ok) {
          throw new Error('Error en el registro');
        }

        setShowUserCreatedPopup(true);
        setTimeout(() => setShowUserCreatedPopup(false), 3000);
        setTimeout(() => {
          setIsLogin(true);
          setData({
            name: '',
            last_name: '',
            email: '',
            password: '',
            confirmPassword: ''
          });
        }, 3000);
        console.log('Usuario creado:', registerRes);
      } else {
        const loginData: LoginRequest = {
          email: data.email,
          password: data.password
        };

        const loginRes = await fetch(`${Enviroment.API_URL}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginData)
        });

        const loginResult: LoginResponse = await loginRes.json();
        if (!loginRes.ok) {
          throw new Error('Credenciales incorrectas');
        }

        // Guardar datos de login usando el contexto
        login(loginResult);

        setShowLoginSuccessPopup(true);
        setTimeout(() => setShowLoginSuccessPopup(false), 5000);
        setTimeout(() => navigate('/upload'), 3000);
        console.log('Login exitoso:', loginResult);
      }
    }
    catch (err: any) {
      setShowEmailPasswordPopup(true);
      setTimeout(() => setShowEmailPasswordPopup(false), 3000);
      console.error(err);
    } finally {
      setLoading(false);
    }

  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex bg-violet-100 rounded-lg p-1 mb-6">
          <button
            type="button"
            onClick={() => setIsLogin(true)}
            className={
              "flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 " +
              (isLogin
                ? "bg-white text-violet-700 shadow-sm"
                : "text-violet-600 hover:text-violet-700")
            }
          >
            Iniciar Sesión
          </button>
          <button
            type="button"
            onClick={() => setIsLogin(false)}
            className={
              "flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 " +
              (!isLogin
                ? "bg-white text-violet-700 shadow-sm"
                : "text-violet-600 hover:text-violet-700")
            }
          >
            Registrarse
          </button>
        </div>

        <div className="bg-white border border-violet-200 shadow-lg rounded-lg">
          <div className="p-6 pb-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">
              {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              {isLogin ? "Ingresa sus datos para acceder" : "Completa los datos para registrarte"}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {!isLogin && (
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nombre completo
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John"
                    value={data.name}
                    onChange={handleChange}
                    required={!isLogin}
                    className="w-full px-3 py-2 border border-violet-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-colors duration-200"
                  />
                </div>
              )}

              {!isLogin && (
                <div className="space-y-2">
                  <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                    Apellido
                  </label>
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    placeholder="Doe"
                    value={data.last_name}
                    onChange={handleChange}
                    required={!isLogin}
                    className="w-full px-3 py-2 border border-violet-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-colors duration-200"
                  />
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={data.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-violet-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-colors duration-200"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={data.password}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-violet-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-colors duration-200"
                />
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    Confirmar contraseña
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={data.confirmPassword}
                    onChange={handleChange}
                    required={!isLogin}
                    className="w-full px-3 py-2 border border-violet-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-colors duration-200"
                  />
                </div>
              )}                  {showEmailPasswordPopup && <PopupEmailPassword onClose={() => setShowEmailPasswordPopup(false)} />}
              {showPasswordMismatchPopup && <PopupPasswordMismatch onClose={() => setShowPasswordMismatchPopup(false)} />}
              {showUserCreatedPopup && <PopupUserCreated onClose={() => setShowUserCreatedPopup(false)} />}
              {showLoginSuccessPopup && <PopupLoginSuccess onClose={() => setShowLoginSuccessPopup(false)} />}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-violet-700 hover:bg-violet-800 text-white font-medium py-2.5 px-4 mt-5 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 disabled:opacity-60"
              >
                {loading ? "Procesando..." : isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

