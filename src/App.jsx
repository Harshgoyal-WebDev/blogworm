import React,{useState, useEffect} from "react"
import { logout,login } from "./store/authSlice"
import { useDispatch } from "react-redux"
import authService from "./appwrite/Auth.js"
import './App.css'
import { Header,Footer } from "./components"
import { Outlet } from "react-router-dom"

function App() {
 const [loading,setLoading]= useState(true)
 const dispatch = useDispatch()
 useEffect(()=>{
  authService.getCurrentUser()
  .then((userData)=>{
    if(userData){
      dispatch(login({userData}));
    }
    else{
      dispatch(logout())
    }
  }
  )
  .finally(()=>setLoading(false))

 },[])
 

  if(!loading){
    return(
    <>
    <div className="min-h-screen flex flex-wrap content-between bg-slate-100">
      <div className="w-full block">
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>

      </div>
    </div>
    </>
    )
  }else{
    return(
      <>
      <div className="bg-black text-white">yup</div>
      </>
    )
  }
}

export default App
