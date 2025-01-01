import React, { useState } from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Transactions from './components/Transactions';
import Mitra from './components/Mitra';
import Teker from './components/Teker';
import LandingPage from './components/LandingPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (!isAuthenticated) {
    return <LandingPage setIsAuthenticated={setIsAuthenticated} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Transactions':
        return <Transactions />;
      case 'Mitra':
        return <Mitra />;
      case 'Teker':
        return <Teker />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className={`h-screen fixed md:relative z-40 ${isSidebarOpen ? 'block' : 'hidden md:block'}`}>
        <Sidebar 
          setCurrentPage={setCurrentPage} 
          setIsAuthenticated={setIsAuthenticated}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen} 
        />
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col">
        <div className="bg-yellow-100 shadow-md p-4 flex justify-between items-center border-b border-gray-700 h-20 sticky top-0 z-50">
          <Navbar 
            currentPage={currentPage} 
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>
        <div className="flex-grow flex flex-col p-4 bg-gray-100 overflow-y-auto">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default App;
