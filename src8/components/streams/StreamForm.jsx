import React from 'react'
// reduxForm = connect
import { Field, reduxForm } from 'redux-form'

const renderError = ({ touched, error }) => {
  if (touched && error) {
    return (
      <div className='ui error message'>
        <div className='header'>{error}</div>
      </div>
    )
  }
}

      // takes in formProps.input
const renderInput = ({ input, label, meta }) => {
  const className = `field ${(meta.error && meta.touched) ? 'error' : ''}`
  return (
    <div className={className}>
      <label>{label}</label>
      <input {...input} />
      {renderError(meta)}
    </div>
  )}

                // takes props from reduxForm actions!!
const StreamForm = ({ handleSubmit, pristine, submitting, onSubmit }) => {

  // const childOnSubmit = (formValues) => onSubmit(formValues)

  return (
    <form className='ui form error'
      onSubmit={handleSubmit(onSubmit)}>
      <Field name='title' component={renderInput} label='Enter title:'/>
      <Field name='description' component={renderInput} label='Enter description:' />
      <button className='ui button primary' type='submit'
        disabled={pristine || submitting}>Submit</button>
    </form>
    )
}

const validate = (formValues) => {
  const errors = {}
  if (!formValues.title) {
    errors.title = 'You must enter a title'
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description'
  }

  return errors
}

export default reduxForm({
  validate,
  form: 'streamForm'
})(StreamForm)
