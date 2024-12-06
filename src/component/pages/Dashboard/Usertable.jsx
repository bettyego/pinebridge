import React, { useEffect, useState } from 'react';

const Usertable = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch('http://localhost:5000/getUsers');
    const data = await response.json();
    setUsers(data.users);
  };
  // Fetch users from the backend
  useEffect(() => {
    
    fetchUsers();
  }, []);

  // Handle delete operation
  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/deleteUser/${userId}`, {
        method: 'DELETE',
      });
      const result = await response.json();
      if (response.ok) {
        // Update state to remove the deleted user
        setUsers(users.filter((user) => user._id !== userId));
        alert(result.message);
        fetchUsers()
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="w-full px-20 flex justify-center">
      <table className="w-1/4 table-auto border border-slate-400">
        <thead>
          <tr>
            <th className="border border-slate-300">Email</th>
            <th className="border border-slate-300">Password</th>
            <th className="border border-slate-300">Name</th>
            <th className="border border-slate-300">Actions</th>
          </tr>
        </thead>
        <tbody>
            
          {users.map((user) => (
            <tr key={user._id}>
              <td className="border border-slate-300 p-3">{user.email}</td>
              <td className="border border-slate-300 p-3">{user.password}</td>
              <td className="border border-slate-300 p-3">{user.firstname}</td>
              <td className="border border-slate-300 p-3 flex gap-2">
                <button className="w-20 p-2 rounded-full bg-green-600 text-white">Edit</button>
                <button
                  className="w-20 p-2 rounded-full bg-red-600 text-white"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Usertable;
