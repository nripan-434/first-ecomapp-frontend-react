import { useContext } from "react"
import { Authcontext } from "./Authcontext"
import { Navigate } from "react-router-dom"


const Adminprotected =({children})=>{
    const {loginuser} = useContext(Authcontext)
    return loginuser && loginuser.role == 'admin' ? children : <Navigate to={'/'} replace/>

}

export default Adminprotected