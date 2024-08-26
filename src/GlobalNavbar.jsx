import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaHotel } from 'react-icons/fa';

const GlobalNavbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-teal-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-4">
                        <Link to="/">
                            <FaHotel className="text-white text-3xl cursor-pointer" />
                        </Link>
                        <h1 className="text-white text-2xl font-extrabold">Taj Hotels</h1>
                    </div>
        <button 
          onClick={() => navigate('/')} 
          className="text-white font-bold text-lg bg-teal-700 px-4 py-2 rounded hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-300"
        >
          Back to Home
        </button>
        
      </div>
    </nav>
  );
};

export default GlobalNavbar;
