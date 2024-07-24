import React from 'react'

const Footer = () => {
  return (
    <div className='font-sans flex items-center justify-center'>
        <footer className='flex items-center justify-center flex-col gap-[20px] p-[30px] border-t-[1px] border-gray-500 w-[95vw]'>
        <div className='font-light text-[30px] animate-pulse cursor-pointer'>Savefrom Web</div>
        <ul className='flex items-start gap-[20px] max-sm:gap-[10px]'>
                <li className='cursor-pointer'>Youtube</li>
                <li  className='cursor-pointer'>Facebook</li>
                <li  className='cursor-pointer'>Instagram</li>
                <li  className='cursor-pointer'>Twitter</li>
                <li  className='cursor-pointer'>Tiktok</li>
            </ul>
        </footer>
    </div>
  )
}

export default Footer