import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Navbar from './components/navbar';
import Transactions from './components/Transactions';

function App() {
  const [currentPage, setCurrentPage] = useState('Dashboard');

  const renderContent = () => {
    switch (currentPage) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Transactions':
        return <Transactions />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar setCurrentPage={setCurrentPage} />
      <div className="flex-grow flex flex-col">
        <Navbar />
        <div className="p-6 bg-gray-100 flex-grow">{renderContent()}</div>
      </div>
    </div>
  );
}

export default App;