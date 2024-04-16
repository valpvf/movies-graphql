import { useEffect } from "react";
import { connect } from "react-redux";
import { MovieCard } from "./MovieCard";
import { RootState } from "../../store";
import { Movie, fetchMovies } from "../../reducers/movies";
import { useAppDispatch } from "../../hooks";
import styles from "./Movies.module.scss";

interface MovisProps {
  movies: Movie[];
  loading: boolean;
}

function Movies({ movies, loading }: MovisProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <section>
      <div className={styles.list}>
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              overview={movie.overview}
              popularity={movie.popularity}
              image={movie.image}
            />
          ))
        )}
      </div>
    </section>
  );
}

const mapStateToProps = (state: RootState) => ({
  movies: state.movies.top,
  loading: state.movies.loading,
});

const connector = connect(mapStateToProps);
export default connector(Movies);
