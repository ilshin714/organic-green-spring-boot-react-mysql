import React from 'react'
import { useNavigate } from 'react-router-dom';

const User = ({user, deleteUser}) => {
    const navigate = useNavigate();
    const editUser = (e, id)=>{
        e.preventDefault(); 
        navigate(`/user/edit/${id}`);
    }

  return (
    <tr key={user.id} className=" text-gray-500 text-left font-medium h-10 tracking-wider">
    <td className="pl-1">{user.id}</td>
    <td className="pl-1">
      <div className="text-small">{user.name}</div>
    </td>
    <td className="pl-1">
      <div className="text-small">{user.email}</div>
    </td>
    <td className="pl-1">
      <div className="text-small">{user.address}</div>
    </td>
    <td className="pl-1">
      <div className="text-small text-right pr-2">
        <a
          onClick={(e, id) => editUser(e, user.id)}
          className="text-indigo-300 hover:text-indigo-700 px-2"
        >
          Edit
        </a>
        <a         
          onClick={(e, id) => deleteUser(e, user.id)}
          className="text-pink-200 hover:text-pink-600 px-2 hover:cursor-pointer"
        >
          Delete
        </a>
      </div>
    </td>
  </tr>
  )
}

export default User