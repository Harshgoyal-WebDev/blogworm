import React from 'react'
import authService from '../../appwrite/Auth'
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
    <button className='inline-bock px-6 py-2 duration-200 hover:bg-gray-900 hover:text-white rounded-md'
    onClick={logoutHandler}>
      Logout
    </button>
  )
}

export default Logoutbtn
