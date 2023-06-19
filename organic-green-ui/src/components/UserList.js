import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../services/UserService";
import User from "./User"

const UserList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await UserService.getUsers();
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteUser = (e, id) => {
    e.preventDefault();
    UserService.deleteUser(id).then((res) => {
        if(users){
            setUsers((prevElement) =>{
                return prevElement.filter((user) => user.id !== id);
            })
        }
    })
  }
  return (
    <>
      <div className="container mx-auto my-8">
        <div className="h-12 m-1">
          <button
            onClick={() => navigate("/register")}
            className="float-right w-1/12 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-lime-700 rounded-md hover:bg-lime-900 focus:outline-none focus:bg-lime-900"
          >
            Add User
          </button>
        </div>
        <div className="flex shadow border-b">
          <table className="min-w-full">
            <thead className="bg-lime-100 text-lime-900 text-left font-medium h-10 uppercase tracking-wider">
              <tr>
                <th className="pl-1">ID</th>
                <th className="pl-1">Name</th>
                <th className="pl-1">Email</th>
                <th className="pl-1">Address</th>
                <th className="pl-1 text-right pr-2">Action</th>
              </tr>
            </thead>
            {!loading && (
              <tbody>
              {users.map((user) => (
               <User user={user} key={user.id} deleteUser={deleteUser}></User>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default UserList;
