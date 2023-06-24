import React from 'react'
import axios from 'axios';
import { useGlobalContext ,} from './context'
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const { movie , isError} = useGlobalContext();
    return (
    <>
      <section className='movie-page'>
        <h1 className="text-danger p-2"> #TRENDING</h1>
        <div className='m-2'>
          {movie.map((curMovie) => {
            const {Title, imdbID, Poster, Year} = curMovie;
            const movieName = Title.substring(0,20);
          return(
            <NavLink to={`movie/${imdbID}`} key={imdbID}>
              <div className="card m-1 float-md-start bg-danger" style={{width:'18rem', height:'635px'}}>
                <img src={Poster} alt={imdbID} className="card-img img-fluid"/>
                <div className="card-body">
                  <h6 className="card-title text-white">
                    {movieName.length >= 20 ? `${movieName}...` : movieName}
                  </h6>
                  <p className="card-text text-white">{Year}</p>
                </div>
              </div>              
            </NavLink>
          )
        })}
        <p className='text-danger text-center'>{isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  )
}
export default Movies;
