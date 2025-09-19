import React from 'react';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  showNavbar?: boolean;
}

export default function Layout({ children, showSidebar = true, showNavbar = true }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-bg-light">
      {/* Navbar - Solo se muestra si showNavbar es true*/ }
      {showNavbar && <Navbar />}
      
      <div className="flex flex-1">
        {/* Sidebar - Solo se muestra cuando showSidebar es true */}
        {showSidebar && <Sidebar />}
        
        {/* Main content area */}
        <main className="flex-1 flex flex-col">
          <div className="flex-1 p-6">
            {children}
          </div>
          
          <Footer />
        </main>
      </div>
    </div>
  );
}