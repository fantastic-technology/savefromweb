import React from 'react'
import { useState } from 'react'

const Page = () => {
  const [buttonText, setButtonText] = useState('Download');
  const preload = () => {
    setButtonText('Pls wait!');
  };

  return (
      <div className='font-sans p-[10px] flex flex-col gap-[40px]'>
        <div className='flex items-center justify-center font-bold text-[30px] max-sm:text-[20px] sm:text-[25px] p-[10px] text-gray-700'>Youtube Video Downloader</div>
        <form className='flex items-center justify-center gap-[5px]'>
          <input className='inp outline-none border-[5px] border-blue-600 lg:pr-[20em] max-sm:pr-[3em]  sm:pr-[10em] pl-[5px] pt-[10px] pb-[10px]' type="text" required name="text" placeholder='paste your video link here' />
          <button onClick={preload} className='bg-blue-600 text-white p-[15px] hover:bg-blue-500'>{buttonText}</button>
        </form>
      </div>
  )
}

export default Page