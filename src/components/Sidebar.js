import React from 'react';

function Sidebar({ setCurrentPage }) {
  return (
    <div className="bg-green-600 text-white w-1/4 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">PALMIFY</h1>
      <ul className="space-y-4">
        <li
          className="hover:text-gray-300 cursor-pointer"
          onClick={() => setCurrentPage('Dashboard')}
        >
          Dashboard
        </li>
        <li
          className="hover:text-gray-300 cursor-pointer"
          onClick={() => setCurrentPage('Transactions')}
        >
          Transaksi
        </li>
        <li className="hover:text-gray-300">Mitra</li>
        <li className="hover:text-gray-300">Tenaga Kerja</li>
      </ul>
    </div>
  );
}

export default Sidebar;