import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserService from "../services/UserService";

const UpdateUser = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({
      id: id,
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      province: "",
      postal: "",
      password: ""
    });

    const handleChange = (e) => {
      const value = e.target.value;
      setUser({...user, [e.target.name]: value});
    };

    useEffect(()=> {
      const fetchData = async () =>{
        try {
  
          const response = await UserService.getUserById(id);
          setUser(response.data);
         
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, [])
    const updateClick = async (e) => {
        e.preventDefault();
        await UserService.updateUser(user.id, user)
        .then((response) => {
          window.alert(`${response.data.name}'s info has been updated`)
          navigate("/user");
        }
        )
        .catch((error) => {
          console.log(error);
        })
    }
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-lime-800">ORGANIC GREEN</h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={(e) => handleChange(e)}
                  className="block w-full h-10 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={(e) => handleChange(e)}
                  className="block w-full h-10 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Address
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="address"
                  name="address"
                  value={user.address}
                  onChange={(e) => handleChange(e)}
                  className="block w-full h-10 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={(e) => handleChange(e)}
                  className="block w-full h-10 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div className="flex items-center mt-4">
              <button
                onClick={updateClick}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-lime-700 rounded-md hover:bg-lime-900 focus:outline-none focus:bg-lime-900"
              >
                Update
              </button>
            </div>
            <div className="flex items-center mt-4">
              <button
                onClick={() => navigate("/user")}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
