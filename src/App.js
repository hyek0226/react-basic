import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          {movies.map((movie) => {
            return (
              <div key={movie.id}>
                <img alt={movie.title} src={movie.medium_cover_image} />
                <h2>{movie.title}</h2>
                <ul>
                  {movie.genres.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <span>{movie.summary}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default App;
