import React from 'react';
import palmImage from '../assets/cawit.png';
import { FaHome, FaDollarSign, FaUsers, FaCogs, FaSignOutAlt } from 'react-icons/fa';

function Sidebar({ setCurrentPage, setIsAuthenticated, setIsSidebarOpen, isSidebarOpen }) {
  return (
    <div className="bg-gradient-to-b from-green-700 to-green-900 text-white min-h-screen w-64 p-6 shadow-lg flex flex-col">
      {/* Logo Section */}
      <div className="flex items-center mb-8">
        <img
          src={palmImage}
          alt="Palmify Logo"
          className="w-12 h-12 rounded-full mr-4 shadow-md"
        />
        <h1 className="text-2xl font-extrabold tracking-wide">PALMIFY</h1>
      </div>

      {/* Navigation Menu */}
      <ul className="space-y-6 flex-grow">
        <li
          className="hover:bg-green-600 hover:scale-105 transform transition-all cursor-pointer flex items-center space-x-4 p-3 rounded-lg"
          onClick={() => { setCurrentPage('Dashboard'); setIsSidebarOpen(false); }}
        >
          <FaHome className="text-2xl" />
          <span className="font-medium text-lg">Dashboard</span>
        </li>
        <li
          className="hover:bg-green-600 hover:scale-105 transform transition-all cursor-pointer flex items-center space-x-4 p-3 rounded-lg"
          onClick={() => { setCurrentPage('Transactions'); setIsSidebarOpen(false); }}
        >
          <FaDollarSign className="text-2xl" />
          <span className="font-medium text-lg">Transaksi</span>
        </li>
        <li
          className="hover:bg-green-600 hover:scale-105 transform transition-all cursor-pointer flex items-center space-x-4 p-3 rounded-lg"
          onClick={() => { setCurrentPage('Mitra'); setIsSidebarOpen(false); }}
        >
          <FaUsers className="text-2xl" />
          <span className="font-medium text-lg">Mitra</span>
        </li>
        <li
          className="hover:bg-green-600 hover:scale-105 transform transition-all cursor-pointer flex items-center space-x-4 p-3 rounded-lg"
          onClick={() => { setCurrentPage('Teker'); setIsSidebarOpen(false); }}
        >
          <FaCogs className="text-2xl" />
          <span className="font-medium text-lg">Tenaga Kerja</span>
        </li>
      </ul>

      {/* Logout Button */}
      <button
        onClick={() => setIsAuthenticated(false)}
        className="flex items-center space-x-4 p-3 hover:bg-red-700 rounded-lg w-full text-left text-white hover:scale-105 transform transition-all mt-auto"
      >
        <FaSignOutAlt className="text-2xl" />
        <span className="font-medium text-lg">Logout</span>
      </button>
    </div>
  );
}

export default Sidebar;
