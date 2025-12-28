import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';

import { Authcontext } from '../contexts/Authcontext';
import { Productcontext } from '../contexts/Productcontext';

const Login = () => {
  const { products } = useContext(Productcontext);
  const { login, scrolldowntar, targetref } = useContext(Authcontext);

  const [formdata, setformdata] = useState({
    email: '',
    password: '',
    role: 'user',
  });

  const handleinput = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => ({ ...prev, [name]: value }));
  };

  const submithandle = (e) => {
    e.preventDefault();
    login(formdata);
  };



  return (
    <div className="p-4 flex flex-col items-center bg-gradient-to-r from-red-900">

     

     
      <div className="flex w-full justify-center mt-4">
        <h1 className="font-serif text-white text-[50px]">
          Choose your best Fit....
        </h1>
      </div>

      
      <div className="mt-10 text-white grid md:grid-cols-4 sm:grid-cols-3 gap-3">
        {products?.map((x, i) => (
          <div key={i} className="bg-gray-800 rounded flex flex-col">
            <img
              src={x.productimg}
              alt={x.productname}
              className="rounded h-50  md:h-60 w-80 object-cover"
            />
            <div className="p-4">
              <h1>{x.productname}</h1>
              <p>
                for more details{' '}
                <Link
                  onClick={() => scrolldowntar(targetref)}
                  className="text-blue-400 active:scale-95 border-b"
                >
                  sign in
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
       
        className="swing-in-top-fwd bg-color h-[370px] mt-[100px] mb-[90px] backdrop-blur-sm duration-200"
      >
        <h1 className="bg-gradient-to-r from-blue-300 to-white bg-clip-text h-12 text-transparent mt-4 font-extrabold  text-4xl ">
          Sign In
        </h1>

        <form  ref={targetref} onSubmit={submithandle} className="flex flex-col gap-6 mt-6">
          <input
            name="email"
            value={formdata.email}
            onChange={handleinput}
            type="text"
            placeholder="enter user email"
            className="text-white outline-0 rounded-xl"
          />

          <input
            name="password"
            value={formdata.password}
            onChange={handleinput}
            type="password"
            placeholder="enter user password"
            className="text-white outline-0 rounded-xl"
          />

          <button className="text-white active:scale-95 active:shadow-2xl border rounded-xl mt-6 p-2 hover:bg-white hover:text-black hover:border-white duration-200">
            Login
          </button>
        </form>

        <div className="flex justify-center h-20 items-center">
          <p className="text-gray-300">
            can't sign in?{' '}
            <Link to="/register" className="border-b active:scale-95 text-white">
              sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
