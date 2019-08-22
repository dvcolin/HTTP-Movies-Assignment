import React, { useState } from 'react'
import { Form, Field, withFormik } from 'formik'

const UpdateForm = props => {
    const id = props.match.params.id;
    // const movieInArr = props.items.find(movie => movie.id === id);
    // const [movie, setMovie] = useState(movieInArr)

    return (
        <div style={{width: '60%', margin: '0 auto'}}>
            <h1>Update Movie</h1>
            <Form>
                <Field type='text' name='title' placeholder='Enter title'></Field>
                <Field type='text' name='director' placeholder='Enter director'></Field>
                <Field type='text' name='metascore' placeholder='Enter metascore'></Field>
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
    }
})(UpdateForm)


export default FormikForm
