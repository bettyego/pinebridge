import React from 'react';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center sticky top-0">
      <h1 className="text-lg font-bold text-blue-700">Dashboard</h1>
      <div>
        <button onClick={() => navigate('/login')} className="bg-blue-500 text-white px-4 py-2 rounded">logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
