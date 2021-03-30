import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import PageLinks from '../components/pageLinks';
import { FormInput, FormButton } from '../components/formFields';


class SignInForm extends Component {
    render(){
        const { className, handleSubmit } = this.props;
        const links = [
            {
                _id: 0,
                title: "hey there",
                onClick: () => console.log('hey there')
            }
        ];

        return (
            <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
                <Field className='sign-in-form__email' 
                type='email'
                title='Email'
                placeholder='Email'
                name='email' 
                component={FormInput}/>

                <Field className='sign-in-form__password'
                type='password'
                title='Password'
                placeholder='Password'
                name='password'
                component={FormInput}/>

                <div className='sign-in-form__line'></div>

                <Field className='sign-in-form__login'
                onClick={() => console.log('Trying to submit')}
                type='login'
                title='Login'
                name='login'
                component={FormButton}/>

                <PageLinks className='sign-in-form__page-links' title="New Guests" links={links}/>
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm;