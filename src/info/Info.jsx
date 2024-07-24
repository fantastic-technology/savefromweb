import React from 'react';
import youtube from '../img/youtube_logo-removebg-preview.png';
import x from '../img/x-removebg-preview.png';
import facebook from '../img/faceebook-removebg-preview.png';
import tiktok from '../img/tiktok-removebg-preview.png';
import inst from '../img/instragram-removebg-preview.png';
const Info = () => {
  return (
    <div className='font-sans p-[30px] flex flex-col items-center gap-[20px]'>
        <div className='flex items-center justify-center '>
        <p className='text-[15px] w-[80vw]'>
            YouTube, the globe's second-largest search engine, leads the online video market. 
            Despite its prominence, downloading videos directly from YouTube can be challenging
            due to the platform’s strict policies.
        </p>
        </div>
      <div className='flex items-center justify-center'>
      <p className='text-[15px] w-[80vw]'>
       At SaveFromWeb, our aim is to offer a YouTube video downloader that merges user-friendliness with high efficiency.
         Whether you're on a PC or a mobile device, our tool is ideal for downloading videos
          for offline viewing. We guarantee a seamless download experience every time.
       </p>
      </div>
      <div className='flex items-center justify-center flex-col gap-[20px] p-[20px]'>
        <p>Supported resources</p>
        <div className='flex items-center justify-center lg:gap-[50px] max-sm:gap-[7px]'>
            <img className='h-[10vh] max-sm:h-[6vh]' src={youtube} alt="" />
            <img className='h-[10vh] max-sm:h-[6vh]' src={x} alt="" />
            <img className='h-[10vh] max-sm:h-[6vh]' src={facebook} alt="" />
            <img className='h-[10vh] max-sm:h-[6vh]' src={tiktok} alt="" />
            <img className='h-[10vh] max-sm:h-[6vh]' src={inst} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Info