import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Profile = () => {
  return (
    <>
    <Navbar />
    <Sidebar />
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <p>This is your Profile</p>
    </div>
    </>
    
    
  )
}

export default Profile