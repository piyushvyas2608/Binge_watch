import { NavLink, useParams } from "react-router-dom";
import Menu from "./Menu";
import { API_URL } from "./context";
import { useGlobalContext } from "./context";
import { useEffect, useState } from "react";

const SingleMovie = () => {
  const {id} =useParams();
  const [isLoading , setIsLoading] = useState(true);
  const [movie, setMovie] = useState("")
 const getMovies = async (url) => {
  setIsLoading(true);
  try {
    const res = await fetch (url);
    const data = await res.json();
    console.log(data);
    if (data.Response === "True") {
      setIsLoading(false);
      setMovie(data);
    }
  } catch (error) {
    console.log(error)
  }
 }
 useEffect(()=>{
  getMovies(`${API_URL}&i=${id}`)
 },[id])
  return (
    <>
      <Menu></Menu>
      <div className="card mt-2">
        <figure>
          <img src={movie.Poster} alt="" style={{height: '450px'}} className="card-img-top"/ >
        </figure>
        <div className="card-content">
          <p className="title m-2 text-danger">Movie : {movie.Title}</p>
          <p className=""></p>
          <p className="card-text m-2 text-danger"> Date : {movie.Released}</p>
          <p className="card-text m-2 text-danger"> Genre : {movie.Genre}</p>
          <p className="card-text m-2 text-danger">Rating : {movie.imdbRating} / 10</p>
          <p className="card-text m-2 text-danger">Country : {movie.Country}</p>
          <NavLink to="/" className="back-btn btn btn-danger m-2">
            Go Back
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SingleMovie;