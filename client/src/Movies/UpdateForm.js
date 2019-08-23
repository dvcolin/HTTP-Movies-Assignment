import React, { useState, useEffect } from 'react'
import Axios from 'axios';

const UpdateForm = props => {

    const [movie, setMovie] = useState({})
    const [stars, setStars] = useState([]);

useEffect(() => {
    const id = props.match.params.id;
    const movieInArr = props.movies.find(movie => movie.id === parseInt(id));
    if(movieInArr) {
        setMovie(movieInArr);
        setStars(movieInArr.stars);
    }
}, [])

const handleChanges = e => {
    setMovie({...movie, [e.target.name]: e.target.value})
}

const updateMovie = e => {
    e.preventDefault();
    Axios
    .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
    .then(res => {
        console.log(res);
        setMovie({});
        props.updateMovies(res.data);
        props.history.push('/');
    })
    .catch(err => console.log(err))   
}

const deleteMovie = e => {
    e.preventDefault();
    Axios
    .delete(`http://localhost:5000/api/movies/${movie.id}`)
    .then(res => {
        console.log(res)
        props.updateMovies(res.data);
        props.history.push('/');
    })
    .catch(err => console.log(err))
}

    return (
        <div>
            <h1>Update Movie</h1>
            <form>
                <input onChange={handleChanges} type='text' name='title' value={movie.title}></input>
                <input onChange={handleChanges} type='text' name='director' value={movie.director}></input>
                <input onChange={handleChanges} type='text' name='metascore' value={movie.metascore}></input>
                <button onClick={updateMovie} type='submit'>Update</button>
                <button onClick={deleteMovie}>DELETE</button>
            </form>
        </div>
    )
}

export default UpdateForm
