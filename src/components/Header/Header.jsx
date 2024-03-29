import React from 'react'
import {Container,Logoutbtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Logo from '../Logo'
import {Login} from '../index'
function Header() {
  const authStatus = useSelector((state)=>
    state.auth.status

  ) 
  const navigate = useNavigate()
  const Items = [
    {
      name: 'Home',
      slug: "/",
      active: true
    
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
  
  return (
    <header className='py-3 shadow bg-slate-900 '>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='50px'/>
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {Items.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 text-zinc-300 hover:bg-blue-400 hover:text-zinc-800 rounded-md '
                >{item.name}</button>
              </li>
              
              
            ) : null
            
            )}
            
          
            
            {authStatus && (
              <li>
                <Logoutbtn />
              </li>
            )}
            </ul>
        </nav>
      </Container>

    </header>
  )
}

export default Header
