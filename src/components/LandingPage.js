import React from 'react';
import backgroundImage from '../assets/palm.png';

function LandingPage({ setIsAuthenticated }) {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-6">Welcome to Palmify</h1>
        <p className="text-xl mb-8">Manage your palm oil plantation efficiently and effectively.</p>
        <button
          onClick={() => setIsAuthenticated(true)}
          className="bg-white text-green-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
