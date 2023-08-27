import React from 'react'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import MainContainer from './MainContainer';


const Browse = () => {
 useNowPlayingMovies();
  return (
    <div>
      <MainContainer/>
    </div>
  )
}

export default Browse