import { useParams } from "react-router-dom";
import data from '../data/data'

const MovieDetails = () => {
    const params = useParams()
    // erstmal params ausgeben -> bekomme objekt
    console.log(params)
    return (
        <div>

            <p>{data[params.movieid].title}</p>
        </div>
    );
}

export default MovieDetails;