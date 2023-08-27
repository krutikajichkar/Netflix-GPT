import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((store) => store.nowPlaying?.nowPlayingMovies);

    if(!movies) return ;

    const mainMovie = movies[0];
    console.log(mainMovie)

  return (
    <div className='bg-gradient-to-r from-black'>
        <VideoTitle title={mainMovie.title} overview = {mainMovie.overview} />
        <VideoBackground movieId = {mainMovie.id}/>
    </div>
  )
}

export default MainContainer