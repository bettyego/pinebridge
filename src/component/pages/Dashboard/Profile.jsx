
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import React, { useState } from 'react';

const Profile = () => {
  // State to manage editable fields
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Web Developer passionate about creating intuitive user experiences.',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleEditClick = () => setIsEditing(!isEditing);

  return (
    <>
    <Navbar/>
    {/* <Sidebar/> */}
    <div className="max-w-4xl mx-auto p-6 pt-10 bg-white shadow-md rounded-lg  ">
      <div className="flex items-center gap-6 mb-6">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-24 h-24 rounded-full border border-gray-300"
        />
        <div>
          <h1 className="text-2xl font-bold">{profile.name}</h1>
          <p className="text-gray-600">{profile.email}</p>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-4">About Me</h2>
        {isEditing ? (
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        ) : (
          <p className="text-gray-700">{profile.bio}</p>
        )}
      </div>
      <div className="mt-6 flex items-center gap-4">
        {isEditing ? (
          <>
            <button
              onClick={handleEditClick}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={handleEditClick}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
    </>
  );
};

export default Profile;
