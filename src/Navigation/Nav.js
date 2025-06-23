import React from 'react'
import './Nav.css'
import {FiHeart} from 'react-icons/fi'
import {AiPOutlineShoppingCart,AiOutlineUserAdd, AiOutlineShoppingCart} from 'react-icons/ai'


 function Nav({handleInputChange,query}) {
  return (
    <nav>
        <div className='nav-container'>
        <input type='text' className='search-input' placeholder='Enter your search shoes...' value={query} onChange={handleInputChange}></input>

        </div>
   <div className='profile-container'>
    <a href='#'>
    <FiHeart className='nav-icons' />

    </a>
    <a href='#'>
    <AiOutlineShoppingCart  className='nav-icons' />

    </a>
    <a href='#'>
        <AiOutlineUserAdd className='nav-icons' />
    </a>

   </div>
    </nav>
      
    
  )
}
export default Nav;