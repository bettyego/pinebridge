import React from 'react'
import Card from './Card';
import Navbar from './NavBar';
import Sidebar from './Sidebar';
import Usertable from './Usertable';

const Dashboard= () => {
  return (
    <div className='relative'>
    <Navbar />
    <div className="flex">
    <Sidebar />
    <div className="flex flex-col">
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-72 p-12 top-0">
      <div className='w-3/4'><Card title="Sales" value="$12,345" /></div>
      <div className='w-3/4'><Card title="Users" value="1,234" /></div>
      <div className='w-3/4 '> <Card title="Orders" value="567" /></div>
    </div>
    <Usertable />
    </div>
    </div>
    
   
    </div>

    
  );
};

export default Dashboard;
