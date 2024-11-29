import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold text-blue-700">Dashboard</h1>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
