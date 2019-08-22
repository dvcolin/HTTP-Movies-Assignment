import React, { useState, useEffect } from 'react'
import { Form, Field, withFormik } from 'formik'

const UpdateForm = props => {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const id = props.match.params.id;
        const movieInArr = props.movies.find(movie => movie.id === parseInt(id));

        if(movieInArr) setMovie(movieInArr);

    }, [props.items, props.match.params.id])

    return (
        <div style={{width: '60%', margin: '0 auto'}}>
            <h1>Update Movie</h1>
            <Form>
                <Field type='text' name='title' placeholder='Enter title' value={movie.title}></Field>
                <Field type='text' name='director' placeholder='Enter director' value={movie.director}></Field>
                <Field type='text' name='metascore' placeholder='Enter metascore' value={movie.metascore}></Field>
                <button type='submit'>Update</button>
            </Form>
        </div>
    )
}

const FormikForm = withFormik({
    mapPropsToValues({ title, director, metascore, stars }) {
        return {
            title: title || '',
            director: director || '',
            metascore: metascore || '',
            stars: stars || [],
        }
    },

    handleSubmit(values, { props }) {
        
    }
})(UpdateForm)


export default FormikForm
