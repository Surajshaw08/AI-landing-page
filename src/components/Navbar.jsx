import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className=' sticky'>
      <nav className=' sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
        <div className=' container px-4 mx-auto relative text-sm'>
            <div className=' flex justify-between items-center'>
                <div className="flex items-center flex-shrink-0">
                  <Link to='/'>
                  <img className=' h-10 w-10 mr-2' src={logo} alt="logo" />
                  </Link>
                    
                    <span className=' text-xl tracking-tight'><Link to='/'>AI-page</Link></span>
                </div>
                {/* My buttons Routes=============================================== */}
                <ul className=' hidden lg:flex ml-14 space-x-12'>
                    <li className=' cursor-pointer hover:text-amber-500'><Link to='/Featues'>Featues</Link></li>
                    <li className=' cursor-pointer hover:text-amber-500'><Link to='/Workflow'>Workflow</Link></li>
                    <li className=' cursor-pointer hover:text-amber-500'><Link to='/Pricing'>Pricing</Link></li>
                    <li className=' cursor-pointer hover:text-amber-500'><Link to='/Testimonials'>Testimonials</Link></li>
                </ul>
                {/* My buttons Routes=============================================== */}
                <div className=' flex space-x-8'>
                    <button className=' bg-amber-600 rounded-full p-2 cursor-pointer hover:text-black hover:bg-white'>Login</button>
                    <button className=' bg-amber-600 rounded-md p-2 cursor-pointer hover:text-black hover:bg-white  '>Create an account</button>
                </div>
            </div>
        </div>

      </nav>
    </div>
  )
}

export default Navbar
