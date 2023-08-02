import React from 'react'
import { FiUser } from 'react-icons/fi'

function Promos() {
  return (
    <div className='my-20 py-10 md:px-20 px-8 bg-dry '>
      <div className='lg:grid lg:grid-cols-2 lg:gap-10 items-center'>
        <div className='flex lg:gap-10 gap-6 flex-col '>
          <h1 className='xl:text-3xl text-xl capitalize font-sans font-medium xl:leading-relaxed'>
            Download Your movies &  Watch offline.<br /> Enjoy on your Mobile
          </h1>
          <p className='text-text text-sm xl:text-base leading-6 xl:leading-8 '>
            loewmgipsum nwe contet writing for new movies. enjoy this movie 
            loewmgipsum nwe contet writing for new movies. enjoy this movie 
            loewmgipsum nwe contet writing for new movies. enjoy this movie 
            loewmgipsum nwe contet writing for new movies. enjoy this movie 
            loewmgipsum nwe contet writing for new movies. enjoy this movie 
          </p>
          <div className='flex gap-4 md:text-lg text-sm '>
            <div className='flex-colo bg-black text-subMain px-6 py-3 rounded font-bold'>
            HD 4k
            </div>
            <div className='flex gap-1 bg-black text-subMain px-6 py-3 rounded font-bold'>
            <FiUser/> 2k
            </div>
          </div>
        </div>
        <div>
          <img src="/image/netflix.jpg" className='w-full h-full object-contain' alt="Mobile App" />
        </div>
      </div>
    </div>
  )
}

export default Promos