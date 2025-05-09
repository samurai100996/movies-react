import { useEffect } from "react";
import AllMoviesHero from "../components/AllMoviesHero.jsx";
import { useState } from "react";

function AllMovies() {

  const [movies, setMovies] = useState([]);
  
  async function sendReq(){
const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_KEY}`
  },
};


	const response = await fetch(url, options);
	const data = await response.json();
	console.log(data.results);
 
 const moviesArr =data.results;

 setMovies(moviesArr);

}
   useEffect(()=>{
sendReq();
   },[]);

  return (<>
<AllMoviesHero/> 
<div className="grid grid-cols-4 justify-center gap-4">
  {movies.map((movie)=>{
return (
  <div key={movie.id} className="p-2 border border-r-amber-300 rounded-xl"
  >
    <img 
    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
className="rounded-xl"
    alt="" 
    />
    <p className="font-semibold">{movie.title}</p>
    <p className="text-sm text-neutral-600">
      {movie.overview.substring(0, 60)}...
    </p>
    <p>{movie.vote_average}</p>
    <p>Total reviews : {movie.vote_count}</p>
  </div>
)
  })}
</div>

 </>
 );
}

export default AllMovies;