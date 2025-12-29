import { createContext, useEffect } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Card from "../components/Card";
import { Cartcontext } from "./Cartcontext";
export const Productcontext=createContext()
import Swal from "sweetalert2";

export const Productprovider=({children})=>{

const [products,setproducts]=useState(JSON.parse(localStorage.getItem('products'))||[])

useEffect(()=>{
    localStorage.setItem('products',JSON.stringify(products))
},[products])
const additem=(product)=>{
    if(!product.productname || !product.productprice || !product.productcat || !product.productimg){
        return toast.error('fill all fields')
    }
    

    const newproduct={id:Date.now(),...product}
    setproducts((prev)=>([...prev,newproduct]))
    toast.success('product added to database')

}
const deleteproduct=async(product)=>{
    const confirm =await  Swal.fire({
            text:"Do you want to delete this item from database?",
            showCancelButton:true,
            showConfirmButton:true,
            padding: "0.2rem" ,
            cancelButtonColor:'red',
            width:'300px',
            position:'top',
          })
          if (confirm.isConfirmed){
    const rmvproduct= products.find(x=>{
        return x==product
    })
     console.log(rmvproduct)
    const newproducts=products.filter(e=>{
        return rmvproduct!==e
    })
    console.log(newproducts)
    setproducts(newproducts)

}}

const pdtsearch = (search)=>{
    console.log(search)
    if(!search){
       return toast.error('enter keyword')
    }
    const check =products.filter(x=>{
        return x.productname.toLowerCase().includes(search.trim().toLowerCase()) || x.productcat.toLowerCase().includes(search.trim().toLowerCase())
    })
    console.log(check)
    if (!check){
        return toast.error('no product found')
    }
   return check

    

}
 const addtofav=(x)=>{
        const updatedpdt =products.map(e=>{
            if(x.id==e.id){
                return {...e,fav:true}
            }
            else{
                return e
            }
        })
        setproducts(updatedpdt)
        return toast.success('added to favouraties')
      
       
    }
    const removefav=(x)=>{
        const updatedpdt =products.map(e=>{
            if(x.id==e.id){
                return {...e,fav:false}
            }
            else{
                return e
            }
        })
        setproducts(updatedpdt)
        return toast.success('removed from favouraties')


    }


    return <Productcontext.Provider value={{pdtsearch,deleteproduct,additem,products,addtofav,removefav}}>
        {children}
    </Productcontext.Provider>

}