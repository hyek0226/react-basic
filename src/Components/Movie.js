import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img alt={title} src={coverImg} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <ul>
        {genres.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <span>{summary}</span>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
