import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import UploadDocument from './components/application/upload_document/Upload_Document';
import Layout from './components/layout/Layout';
import Login from './components/login/Login';
import { ViewDocument } from './components/application/view_document/View_Document';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { RootRedirect } from './components/auth/RootRedirect';
import { PublicRoute } from './components/auth/PublicRoute';
import Landing from './components/landing/landing';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/landing' element={
            <PublicRoute>
              <Landing handleSubscription={function (plan: 'basic' | 'pro' | 'premium'): void {
                throw new Error('Function not implemented.');
              }} />
            </PublicRoute>
          } />
          {/* Ruta para el login - PÚBLICA */}
          {/* Ruta para el login - PÚBLICA */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Layout showSidebar={false} showNavbar={false}>
                  <Login />
                </Layout>
              </PublicRoute>
            }
          />


          {/* Ruta para subir documentos (con sidebar) - PROTEGIDA */}
          <Route
            path="/upload"
            element={
              <ProtectedRoute>
                <Layout showSidebar={true}>
                  <UploadDocument />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* Ruta para visualizar los documentos - PROTEGIDA */}
          <Route
            path='/documents'
            element={
              <ProtectedRoute>
                <Layout showSidebar={false}>
                  <ViewDocument />
                </Layout>
              </ProtectedRoute>
            }

          />

          {/* Ruta por defecto - redirige según autenticación */}
          <Route path="/" element={<RootRedirect />} />

          {/* Ruta 404 - página no encontrada */}
          <Route
            path="*"
            element={
              <Layout showSidebar={false} showNavbar={false}>
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-red-600">404</h1>
                  <p>Página no encontrada</p>
                </div>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
