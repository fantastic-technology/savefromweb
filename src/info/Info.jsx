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
      SaveFrom Web is an online service that allows users to download videos from YouTube and other social media platforms.
       By entering the video URL, users can quickly save content to their devices. The platform supports
       various formats and resolutions, offering a simple and convenient solution for offline video access.
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