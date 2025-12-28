import { useContext } from "react"
import { Authcontext } from "./Authcontext"
import { Navigate } from "react-router-dom"


const Userprotected = ({children}) => {
    const {loginuser} = useContext(Authcontext)
  return (
    loginuser && loginuser.role == 'user' ? children : <Navigate to={'/'} replace/>
  )
  
}

export default Userprotected