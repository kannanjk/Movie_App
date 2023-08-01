import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper ,SwiperSlide} from 'swiper/react'
import { Movies } from '../../Data/MovieData'
import FlexMovieItems from '../FlexMovieItems'

function Banner() {
  return (
    <div className='relative w-full'>
      <Swiper
        direction='vertical'
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className='w-full xl:h-96 bg-dry lg:h-64 h-48'
      >
        {
          Movies.slice(0,6).map((movie,index)=>(
            <SwiperSlide key={index}
             className='relative rounded overflow-hidden'>
              <img src={`/image/movies/${movie.image}`} 
              alt={movie.name} 
              className='w-full h-full object-cover'/>
               <div className='absolute xl:pl-52 sm:pl-32 pl-0 top-0 bottom-0 right-0 linear-bg left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4'>
                <h1 
                className='xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold'
                >
                  {movie.name}
                </h1>
                <div className='flex gap-5 items-center text-dryGray'>
                  <FlexMovieItems movie={movie}/>
                </div>
               </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      kannan
    </div>
  )
}

export default Banner