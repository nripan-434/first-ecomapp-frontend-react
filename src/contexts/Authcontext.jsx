import { createContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
export const Authcontext = createContext()
export const Authprovider = ({ children }) => {
    const [users, setusers] = useState(JSON.parse(localStorage.getItem('users')) || [])
    const [loginuser, setloginuser] = useState(JSON.parse(sessionStorage.getItem('loginuser')) || null)
    const navigate = useNavigate()
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users])
    useEffect(() => {
        sessionStorage.setItem('loginuser', JSON.stringify(loginuser));
    }, [loginuser])

    const [toggle, settoggle] = useState(false)
    useEffect(() => {
        settoggle(false)
    }, [location.pathname])
    useEffect(() => {
        if (location.pathname === '/') {
            setloginuser(null);
            sessionStorage.removeItem('loginuser');
        }
    }, [location.pathname], []);

    useEffect(() => {
        if (loginuser) {
            const p = users.find(x => {
                return x.id == loginuser.id
            })
            console.log(p)
            setloginuser(p)
        }
    }, [users])
    const regusers = (users) => {
        const { name, email, password, image } = users
        if (!name, !email, !password, !image) {
            return toast.error("fill the fields")
        }
        const newuser = { ...users, id: Date.now() }
        setusers((prev) => ([...prev, newuser]))
        navigate('/')
        return toast.success("account registered")
    }
    const profileupdate = (form) => {
        const { name, email, password, image } = form
        const updatedusers = users.map(x => {
            if (loginuser.id == x.id) {
                return { ...x, name, email, password, image }
            }
            else {
                return x
            }
        })
        console.log(updatedusers)
        setusers(updatedusers)
        toast.success("profile updated successfully")

    }
    const login = (formdata) => {
        const { email, password } = formdata
        if (!email || !password) {
            return toast.error("fill the fields")
        }
        let checkuser = users.find((x) => {
            return x.email == email
        })
        if (!checkuser) {
            return toast.error('invalid credentials')
        }
        else if (checkuser.password != password) {
            return toast.error("invalid credentials")
        }
        else if (checkuser.role == 'user') {
            setloginuser({ ...checkuser, role: 'user' })
            console.log(checkuser.role)
            navigate('/home')
        }
        else if (checkuser.role == 'admin') {
            setloginuser({ ...checkuser, role: 'admin' })
            navigate('/adminhome')
        }
    }
    const deleteuser = async (user) => {
        const confirm = await Swal.fire({
            text: "Do you want to remove this user from Zhoe.in?",
            showCancelButton: true,
            showConfirmButton: true,
            padding: "0.2rem",
            cancelButtonColor: 'red',
            width: '300px',
            position: 'top',
        })
        if (confirm.isConfirmed) {

            const rmvuser = users.find(x => {
                return x == user
            })
            const newusers = users.filter(e => {
                return rmvuser !== e
            })
            console.log(newusers)
            setusers(newusers)
        }
    }
    const logoutuser = () => {
        setloginuser(null)
        sessionStorage.removeItem('loginuser')
        navigate('/')
    }
    const targetref = useRef(null)
    const scrolldowntar = () => {
        targetref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        })
    }


    return <Authcontext.Provider value={{ toggle, settoggle, profileupdate, targetref, scrolldowntar, deleteuser, regusers, login, loginuser, setloginuser, logoutuser, users }}>
        {children}
    </Authcontext.Provider>

}