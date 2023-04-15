import Movieitem from './MovieItem';
import data from '../data/data'
import { useState } from 'react';



const MovieList = () => {


    const [movie, setMovie] = useState(data)

    const dateAscending = () => {
        const sortAscending = [...movie]
        data.sort((x, y) => x.year - y.year)
        setMovie(sortAscending)
    }

    const dateDescending = () => {
        const sortDescending = [...movie]
        data.sort((x, y) => y.year - x.year)
        setMovie(sortDescending)
    }

    const sortRate = () => {
        const sortRates = [...movie]
        data.sort((x, y) => x.rate - y.rate)
        setMovie(sortRates)
    }

    const sortAZ = () => {
        const az = [...movie]
        data.sort((x, y) => x.title > y.title ? 1 : -1,)
        setMovie(az)
    }

    const sortZA = () => {
        const za = [...movie]
        data.sort((x, y) => x.title > y.title ? -1 : 1,)
        setMovie(za)
    }

    const searchMovie = () => {
        console.log("hallo")
        let search = [""]
        let input = document.querySelector('input[name="searchbar"]')
        search = (data.filter((elt) =>

            elt.title.includes(input.value)))
        // data.filter((elt) => elt.title.includes(input.value))
        console.log(search)
        setMovie(search)
    }


    return (
        <section>
            <div className='header_nav'>
                <button onClick={dateAscending}>Sort by Date Ascending</button>
                <button onClick={dateDescending}>Sort by Date Ascending</button>
                <button onClick={sortRate}>Sort by Rate</button>
                <button onClick={sortAZ}>A-Z</button>
                <button onClick={sortZA}>Z-A</button>
                <input type="text" name="" id="" placeholder="Add new movie" />
                <button >Add Movie</button>
                <input type="text" name="searchbar" id="" placeholder="Search for..." />
                <button onClick={searchMovie}>Search Movie</button>
                <button onClick={sortZA}>Z-A</button>

            </div>
            <article>
                {data.map((elt, i) =>
                    <Movieitem
                        key={i}
                        title={elt.title}
                        year={elt.year}
                        director={elt.director}
                        duration={elt.duration}
                        genre={elt.genre}
                        rate={elt.rate}
                        id={i}
                    />
                )}
            </article>
        </section>
    );
}

export default MovieList;