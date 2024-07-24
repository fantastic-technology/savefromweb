import React from 'react'
import { useState } from 'react'
import harm from '../img/icon-hamburger.svg'
import close from '../img/close.png'
const Nav = () => {
    const [ismenuopen, setismenuopen] = useState(false);
    const toggleMenu = () => {
        setismenuopen(!ismenuopen)
    }
  return (
    <div className='font-sans p-[20px]'>
        <nav className='flex items-center justify-around border-b-[1px] border-gray-500 max-sm:bg-blue-600 sm:bg-blue-600 md:bg-transparent'>
            <div className='font-light text-[30px] animate-pulse cursor-pointer'>Savefrom Web</div>
            <button onClick={toggleMenu} className='md:hidden flex'>
                {ismenuopen ? <img src={close} className='h-[20px]' alt='' /> : <img src={harm} alt="" />}
            </button>
            <ul className={`md:flex items-center justify-center gap-[30px] md:bg-transparent md:shadow-none max-sm:bg-white sm:bg-white sm:shadow-md max-sm:shadow-lg p-[10px] sm:rounded-md max-sm:absolute max-sm:top-16 max-sm:w-[100%] ${ismenuopen ? 'block' : 'hidden'}`}>
                <li className='cursor-pointer text-blue-600'>Youtube</li>
                <li  className='cursor-pointer hover:text-blue-600'>Facebook</li>
                <li  className='cursor-pointer hover:text-blue-600'>Instagram</li>
                <li  className='cursor-pointer hover:text-blue-600'>Twitter</li>
                <li  className='cursor-pointer hover:text-blue-600'>Tiktok</li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav