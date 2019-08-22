import React from 'react'
import { Form, Field, withFormik } from 'formik'

const UpdateForm = () => {
    return (
        <div>
            <h1>Update Movie</h1>
            <Form>
                <Field type='text' name='title'></Field>
                <Field type='text' name='director'></Field>
                <Field type='text' name='metascore'></Field>
                <Field type='text' name='title'></Field>
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
