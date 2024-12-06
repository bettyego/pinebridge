import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-40 h-screen sticky top-0 left-0 p-6 hidden md:block">
      <ul className="space-y-4">
        <li className="hover:bg-gray-700 p-2 rounded">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded capitalize">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded capitalize">
          <Link to="/invest">invest</Link>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded capitalize">
          <Link to="/funds">fund account</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
