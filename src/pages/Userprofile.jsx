import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../contexts/Authcontext';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Userprofile = () => {
  const { loginuser, profileupdate } = useContext(Authcontext);
  const [eye, seteye] = useState(false)
  
  const [form, setForm] = useState({
    name: loginuser.name,
    email: loginuser.email,
    password: loginuser.password,
    image: loginuser.image,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handlesubmit = (e) => {
    e.preventDefault()
    profileupdate(form)

  };

  return (
    <div className="text-white bg-gradient-to-r from-red-900 to-black backdrop-blur-sm min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-gradient-to-r from-red-900 border to-black backdrop-blur-sm w-full max-w-md rounded-xl shadow-lg p-6">

        <div className="flex justify-center mb-4">
          <img src={form.image || profileuser?.image || '/default-avatar.png'} alt="Profile" className="w-28 h-28 rounded-full object-cover border-2 border-gray-300" />
        </div>

        <h2 className="text-xl font-semibold text-center mb-6">
          {loginuser.name}
        </h2>

        <form className="space-y-4" onSubmit={handlesubmit}>
          <input type="text"
            name="name" placeholder="Name" value={form.name} onChange={handleChange} className="w-full px-4 py-2 rounded-lg outline-0"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg outline-0"
          />
          <div className='flex  justify-between items-center'>
            <input
              type={!eye?"Password":"text"} name="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full px-4 py-2 rounded-lg outline-0"
            />
           {
            eye? <FaEye className='text-xl'onClick={()=>{seteye(false)}} />
            :<FaEyeSlash className='text-xl' onClick={()=>{seteye(true)}} />
           }
          </div>

          <input
            type="text" name="image" placeholder="Profile Image URL" value={form.image} onChange={handleChange} className="w-full px-4 py-2 rounded-lg outline-0" />
          <button type="submit" className="w-full bg-white hover:scale-102 text-black py-2 rounded-lg  transition">
            Update Profile
          </button>
        </form>

      </div>
    </div>
  );
};

export default Userprofile;
