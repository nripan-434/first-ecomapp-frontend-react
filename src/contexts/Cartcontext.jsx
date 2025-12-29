import { createContext, useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Productcontext } from "./Productcontext";
import Swal from "sweetalert2";
export const Cartcontext=createContext()

export const Cartprovider=({children})=>{
    
    const [cart,setCart]=useState(JSON.parse(localStorage.getItem('cart'))||[])
    const [fav,setFav]=useState(JSON.parse(localStorage.getItem('fav'))||[])
    
      const totalamount = (cart) => {
    return cart.reduce( (t,item)=> {

        if(item.qty==1){
       return  t + item.productprice * 1 

        }
       
       return  t + item.productprice * item.qty[item.id] 
    },0)
   
  };
    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])
    useEffect(()=>{
        localStorage.setItem('fav',JSON.stringify(fav))
    },[fav])
    const addproduct=(x,qty)=>{

        const isalready=cart.find(e=>{
            return e.id==x.id
        })
        if(isalready){
            return toast.success('already added to cart')
        }
        setCart((prev)=>([...prev,{...x,qty:qty}]))
            return toast.success("product added to cart")

    }
    const removeproduct=async(id)=>{
        const confirm =await  Swal.fire({
        text:"Do you want to remove this item from cart ?",
        showCancelButton:true,
        showConfirmButton:true,
        padding: "0.2rem" ,
        cancelButtonColor:'red',
        width:'300px',
        position:'top',
      })
      if (confirm.isConfirmed){

            const newcart=cart.filter((x)=>{
                return x.id != id
            })
            setCart(newcart)
            return toast.error("product removed")
    }}
    
   
   const clearcart=()=>{
    setCart([])
    localStorage.removeItem('cart')

   }
    return <Cartcontext.Provider value={{clearcart,addproduct,cart,removeproduct,totalamount}}>
        {children}
    </Cartcontext.Provider>
}