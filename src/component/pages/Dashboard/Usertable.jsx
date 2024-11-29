import React from 'react'
import { useEffect,useState } from 'react'

const Usertable = () => {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        const fetchUsers = async()=>{
            const response = await fetch("http://localhost:5000/getUsers")
            const data = await response.json()
            setUsers(data.users)
            console.log(data.users)
        }
        fetchUsers()
    },[])
  return (
    <div className='w-full  px-20 flex justify-center'>
        <table className='w-1/4 table-auto  border border-slate-400'>
            <thead>
            <tr>
                <th className='border border-slate-300'>Email</th>
                <th className='border border-slate-300'>password</th>
                <th className='border border-slate-300'>name</th>
            </tr>
            </thead>
            <tbody>
                {users.map((user,index)=>{
                    return(
                        <tr key={index}>
                            <td className='border border-slate-300 p-3'>{user.email}</td>
                            <td className='border border-slate-300 p-3'>{user.password}</td>
                            <td className='border border-slate-300 p-3'>{user.firstname}</td>
                            <td className='border border-slate-300 p-3'>
                                <button className='w-20 p-2 rounded-full bg-green-600 text-white'>Edit</button>
                            </td>
                            <td className='border border-slate-300 p-3'>
                                <button className='w-20 p-2 rounded-full bg-red-600 text-white'>delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Usertable