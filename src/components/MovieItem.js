import { Link } from "react-router-dom";

const MovieItem = (props) => {
    return (
        <div className="movie">
            <p className="title">{props.title}</p>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            <p>{props.rate}</p>
            <p className="genre">{props.genre.map((elt) => <p>{elt}</p>)}</p>
            <Link to={`/${props.id}`}>Verlinkung zu Details</Link>
        </div>

    );
}

export default MovieItem;