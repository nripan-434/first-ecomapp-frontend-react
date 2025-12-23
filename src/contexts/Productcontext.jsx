import { createContext, useEffect } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Card from "../components/Card";
import { Cartcontext } from "./Cartcontext";
export const Productcontext=createContext()
export const Productprovider=({children})=>{

const [products,setproducts]=useState(JSON.parse(localStorage.getItem('products'))||[])

useEffect(()=>{
    localStorage.setItem('products',JSON.stringify(products))
},[products])
const additem=(product)=>{
    

    const newproduct={id:Date.now(),...product}
    setproducts((prev)=>([...prev,newproduct]))


}
const deleteproduct=(product)=>{
    const rmvproduct= products.find(x=>{
       
        return x==product
    })
     console.log(rmvproduct)
    const newproducts=products.filter(e=>{
        

        return rmvproduct!==e
    })
    console.log(newproducts)
    setproducts(newproducts)

}

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