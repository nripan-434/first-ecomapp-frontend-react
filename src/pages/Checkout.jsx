import React, { useContext, useState } from 'react';
import { Cartcontext } from '../contexts/Cartcontext';
import { Ordercontext } from '../contexts/Ordercontext';

const Checkout = () => {
  const { cart, clearcart } = useContext(Cartcontext)
  const { addtoorders } = useContext(Ordercontext)
  const [shipping, setShipping] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setShipping((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if(!shipping.name || !shipping.email || !shipping.address || !shipping.city|| !shipping.postalCode|| !shipping.country){
      return alert('Please fill in all required fields.');
    }
    addtoorders({ cart, total })
              clearcart()
    // didnt create a function for to add the checkout data
    setShipping({
      name: '',
      email: '',
      address: '',
      city: '',
      postalCode: '',
      country: '',
    });
  };

  const total = cart.reduce((acc, item) => acc + item.productprice * item.qty, 0);

  return (
    <div className="min-h-[80vh] bg-gradient-to-r from-red-900 to-black p-4 flex flex-col md:flex-row gap-6 justify-center">
      <div className="  p-6 rounded-xl shadow-2xl text-white backdrop-blur-md border p-5 md:w-3/5 ">
        <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
        <h2 className="text-xl font-bold mb-4">Total Amount <span className='border-b'>Rs{total}</span></h2>
        <form onSubmit={handlePlaceOrder} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={shipping.name}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={shipping.email}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input type="text"
            name="address"
            placeholder="Address"
            value={shipping.address}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={shipping.city}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={shipping.postalCode}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={shipping.country}
            onChange={handleChange}
            className="border p-2 rounded w-full" 
            />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Place Order
          </button>
        </form>
       
      </div>
    </div>
  );
};

export default Checkout;
