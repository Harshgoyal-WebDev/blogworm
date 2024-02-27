import React from 'react'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
import { useDispatch } from 'react-redux'


function Logoutbtn() {
    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button className='inline-bock px-6 py-2 duration-200 text-zinc-300 hover:bg-blue-400 hover:text-zinc-800 rounded-md'
    onClick={logoutHandler}>
      Logout
    </button>
  )
}

export default Logoutbtn
