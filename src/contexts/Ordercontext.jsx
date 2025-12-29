import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { Cartcontext } from "./Cartcontext";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const Ordercontext = createContext()
export const Orderprovider = ({ children }) => {
    const navigate=useNavigate()
    const [orders, setOrders] = useState(JSON.parse(localStorage.getItem('orders')) || [])
    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders))
    }, [orders])
    const addtoorders = ({ cart, total }) => {
            
        setOrders((prev) => [...prev, { items: [...cart], totalamt: total }])
        toast.success('order placed')
        navigate('/home')

    }
    const removeitem = async(item)=>{
      const confirm =await  Swal.fire({
        text:"Do you want to cancel the order?",
        showCancelButton:true,
        showConfirmButton:true,
        padding: "0.2rem" ,
        cancelButtonColor:'red',
        width:'300px',
        position:'top',
      })
      if (confirm.isConfirmed){
       const neworder = orders.filter(x=>{
            return x !== item
        })
        setOrders(neworder)
        return toast.success("order cancelled")
    }
    

    }

    return <Ordercontext.Provider value={{removeitem, addtoorders, orders }} >
        {children}
    </Ordercontext.Provider>
}
