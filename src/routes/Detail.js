import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {movie && (
        <div>
          <img src={movie.large_cover_image} alt={movie.title_long} />
          <h1>
            <a href={movie.url}>{movie.title_long}</a>
          </h1>
          <ul>
            {movie.genres.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}
export default Detail;
