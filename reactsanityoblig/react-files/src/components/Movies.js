import React, { useState } from 'react';
import { getMovies} from '../utils/movieService';
import Movie from './Movie';



const Movies = () => {
    const [movies, setMovies] = useState([]);
    
    const handleClick = async() => {
        const data = await getMovies();
        setMovies(data);
    }

    return(
        <div>
            <h2>Movies</h2>
            <ul>
                {movies?.length > 0 && movies.map((movie) => (<Movie key={movie._id} title ={movie.title} actor ={movie.actor}/>))};
            </ul>
            <button type="button" onClick={handleClick}>Test</button>
        </div>
    );
};

export default Movies; 