import { Link } from "react-router-dom";

import Card from "../components/Card";
import useFetch from "../customHooks/useFetch";
import Loader from "../components/Loader";
import Error from "../components/Error";

const List = () => {
  const [moviesList, loading, error] = useFetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
  );
  if (error) {
    return <Error />;
  } else if (loading) {
    return <Loader />;
  }
  return (
    <div className="card-container">
      {moviesList &&
        moviesList.results.map((movie) => {
          return (
            <Link to={"movie/" + movie.id} key={movie.id} state={movie}>
              <Card
                src={"https://image.tmdb.org/t/p/w185/" + movie.poster_path}
                alt={movie.original_title}
              />
            </Link>
          );
        })}
    </div>
  );
};

export default List;
