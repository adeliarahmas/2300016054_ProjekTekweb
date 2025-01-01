import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';

function Navbar({ setIsSidebarOpen }) {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(date.toLocaleDateString('en-US', options));
  }, []);

  return (
    <div className="flex justify-between items-center w-full">
      <button
        onClick={() => setIsSidebarOpen(prev => !prev)}
        className="block md:hidden p-2 text-gray-700 hover:bg-gray-300 rounded-lg"
      >
        <FaBars size={24} />
      </button>
      <div className="text-center sm:text-left lg:text-right text-gray-500 text-sm font-medium flex-grow">
        {currentDate}
      </div>
    </div>
  );
}

export default Navbar;
