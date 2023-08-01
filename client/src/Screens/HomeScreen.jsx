import React from 'react'
import LayOut from '../LayOut/LayOut'
import Banner from '../Components/Home/Banner'
import PoppularMovies from '../Components/Home/PoppularMovies'
import Promos from '../Components/Home/Promos'
import TopRated from '../Components/Home/TopRated'

function HomeScreen() {
  return (
    <LayOut>
      <div className='container mx-auto min-h-screen px-2 mb-6'>
      <Banner/>
      <PoppularMovies/>
      <Promos/>
      <TopRated/>
      </div>
    </LayOut>
  ) 
}

export default HomeScreen