import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
 <div className="flex justify-center items-center gap-9 text-xl mt-6 h-[5vh] font-serif Nav
 ">
  
  <NavLink
    className={(e) =>
      `relative px-3 py-1 transition-all duration-300 group 
      ${e.isActive ? "text-purple-500": "text-gray-800"} 
      hover:text-blue-600`
    }
    to="/"
  >
    Home
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
  </NavLink>



  <NavLink
    className={(e) =>
      `relative px-3 py-1 transition-all duration-300 group 
      ${e.isActive ? "text-blue-500" : "text-gray-800"} 
      hover:text-blue-600`
    }
    to="/Recipes"
  >
    Recipes
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
  </NavLink>

  <NavLink
    className={(e) =>
      `relative px-3 py-1 transition-all duration-300 group 
      ${e.isActive ? "text-blue-500" : "text-gray-800"} 
      hover:text-blue-600`
    }
    to="/Create"
  >
    Create
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
  </NavLink>
  <NavLink
    className={(e) =>
      `relative px-3 py-1 transition-all duration-300 group 
      ${e.isActive ? "text-blue-500" : "text-gray-800"} 
      hover:text-blue-600`
    }
    to="/Fav"
  >
    Favriote
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
  </NavLink>

</div>

  )
}

export default Nav
