import React, { useState, useEffect } from 'react'
import { Form, Field, withFormik } from 'formik'

const UpdateForm = props => {
    const [movie, setMovie] = useState({});
    const [movieStars, setMovieStars] = useState([]);

    useEffect(() => {
        const id = props.match.params.id;
        const movieInArr = props.movies.find(movie => movie.id === parseInt(id));

        if(movieInArr) {
            setMovie(movieInArr);
            setMovieStars(movieInArr.stars);
        };

    }, [props.items, props.match.params.id])

    return (
        <div style={{width: '60%', margin: '0 auto'}}>
            <h1>Update Movie</h1>
            <Form>
                <Field type='text' name='title' value={movie.title}></Field>
                <Field type='text' name='director'></Field>
                <Field type='text' name='metascore'></Field>
                {movieStars && movieStars.map((star, index) => 
                    <Field type='text' name='star' />
                    )}
                <button type='submit'>Update</button>
            </Form>
        </div>
    )
}

const FormikForm = withFormik({
    mapPropsToValues(props) {
        return {
            title: props.movie.title || '',
            director: props.movie.director || '',
            metascore: props.movie.metascore || '',
            stars: props.movie.stars || [],
        }
    },
    
    handleSubmit(values, { props }) {
        
    }
})(UpdateForm)


export default FormikForm
