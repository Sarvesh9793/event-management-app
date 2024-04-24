import React, { useState } from "react";
import axios from "axios";
import EventImage from '../Images/eventbg.jpg';
import { useNavigate } from "react-router-dom";
const User_reg = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    password: "",
    gender: "",
    email: "",
    contact: "",
    user_address: "",
    role: "",
  });

  const roleOptions = [
    { value: 'user', label: 'User' },
    { value: 'organizer', label: 'Organizer' }
  ];
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'role') {
      setFormData({
        ...formData,
        role: value,  // Update the 'role' field directly
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };


  
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
  console.log(formData);

  
  if (!formData.user_name || !formData.password || !formData.gender || !formData.email || !formData.contact || !formData.user_address || !formData.role) {
    alert("Please fill in all fields");
    return;
  }

    axios
      .post("http://localhost:3001/User_reg", formData)
      .then((res) => {
        if (res.data.Status === "SUCCESS" && formData.role ==="user") {
          alert("User registered Successfully");
          navigate("/User_login");
        }else if(res.data.Status === "SUCCESS" && formData.role === "organizer"){
          alert("Organizer Registered Successfully");
          navigate("/User_login");
        } 
        else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
    // Add your form submission logic here
    console.log(formData);
    // Add your form submission logic here
    // console.log(formData);
  };

  return (
    <div className="w-full flex  bg-gray-200">
      <div>
              <img src={EventImage} alt="" className=" flex w-full h-full bg-contain bg-no-repeat relative " />
            </div>
      <div className="max-w-md w-full bg-white p-8  shadow-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
           Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="userName" className="sr-only">
                User Name
              </label>
              <input
                name="user_name"
                value={formData.user_name}
                type="text"
                autoComplete="userName"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="User Name"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                name="password"
                value={formData.password}
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="gender" className="sr-only">
                Gender
              </label>
              <input
                name="gender"
                value={formData.gender}
                type="text"
                autoComplete="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Gender"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                name="email"
                value={formData.email}
                type="email"
                autoComplete="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email address"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="contact" className="sr-only">
                Contact
              </label>
              <input
                name="contact"
                value={formData.contact}
                type="text"
                autoComplete="contact"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Contact"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="address" className="sr-only">
                Address
              </label>
              <input
                name="user_address"
                value={formData.user_address}
                type="text"
                autoComplete="address"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Address"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="role" className="sr-only">
                Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select Role</option>
                {roleOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
            <button
              type="button"
              navigate="/"
              className="mt-3 w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default User_reg;
