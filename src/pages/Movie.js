import "../App.css";

import { useParams } from "react-router-dom/dist";
import useFetch from "../customHooks/useFetch";

import Loader from "../components/Loader";
import Error from "../components/Error";

import play from "../assets/play-button-svgrepo-com.svg";

const Movie = () => {
  const params = useParams();
  const [movie, loading, error] = useFetch(
    "https://api.themoviedb.org/3/movie/" + params.id + "?language=en-US"
  );

  if (error) {
    return <Error />;
  } else if (loading) {
    return <Loader />;
  }
  return (
    movie && (
      <div>
        <div className="header p-1">{movie.original_title}</div>
        <div className="body-container p-1">
          <div className="details">
            <div className="img-container">
              <img
                src={"https://image.tmdb.org/t/p/w185/" + movie.poster_path}
                alt={movie.original_title}
              />
            </div>
            <div className="movie-details">
              <div>
                <div className="year">{movie.release_date.split("-")[0]}</div>
                <div className="duration">
                  <i>{movie.runtime} mins</i>
                </div>
              </div>
              <div>
                <b>{movie.vote_average.toFixed(2)}/10</b>
                <div className="add-btn">
                  <button className="p-1">Add to Favourite</button>
                </div>
              </div>
            </div>
          </div>
          <div className="description">{movie.overview}</div>
          <div className="trailers-container">
            <div className="trailer-header">TRAILERS</div>
            <hr />
            <div className="trailer p-1">
              <img src={play} alt="play button" />
              <div>Play trailer 1</div>
            </div>
            <div className="trailer p-1">
              <div>
                <img src={play} alt="play button" />
              </div>
              <div>Play trailer 2</div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Movie;
