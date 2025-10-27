import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

interface LayoutProps {
  children: React.ReactNode
  showNavbar?: boolean
  showSidebar?: boolean
}

export default function Layout({ children, showNavbar = true }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-bg-light">
      {/* Navbar - Solo se muestra si showNavbar es true */}
      {showNavbar && <Navbar />}

      {/* Main content area - Removed padding to let children occupy full space */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-hidden">{children}</div>

        {/* Footer - Always at the bottom */}
        <Footer />
      </main>
    </div>
  )
}