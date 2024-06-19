import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )
  const comedyMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )
  return (
    <div className="prime-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-img"
      />
      <div className="movies-list">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider movies={actionMovies} />
      </div>
      <div className="movies-list">
        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider movies={comedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
