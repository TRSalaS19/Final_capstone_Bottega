import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../components/formFields';

class SignInForm extends Component {
    render(){
        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
                <Field className='sing-in-form__email' 
                type='email'
                title='Email'
                placeholder='Email'
                name='email' 
                component={FormInput}/>

                <Field className='sing-in-form_password'
                type='password'
                title='Password'
                placeholder='Password'
                name='password'
                component={FormInput}/>

                <Field className='sign-in-form_login'
                onClick={() => console.log('Trying to submit')}
                type='login'
                title='Login'
                name='login'
                component={FormButton}/>
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm;