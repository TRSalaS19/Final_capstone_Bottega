import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../components/formFields';
import PageLinks from '../components/pageLinks';

import history from '../history';

class SignUpForm extends Component{
    render() {
        const { className, handleSubmit } = this.props;
        const infoTxt = [
            {
                _id:0,
                title: 'At least 5 Characters'
            },
            {
                _id:1,
                title: 'At least one Number'
            },
            {
                _id:2,
                title: 'At least one symbol'
            }
        ]
        return (
            <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
                <Field className='sign-up-form__username'
                    type='username'
                    title="Username"
                    placeholder='Username'
                    name='username'
                    component={FormInput}
                    />
                <Field className='sign-up-form__email'
                    type='email'
                    title='Email'
                    placeholder='Email'
                    name='email'
                    component={FormInput}
                    />
                <Field className='sign-up-form__password'
                    type='password'
                    title='Password'
                    placeholder='Password'
                    name='password'
                    component={FormInput}
                    />
                <Field className='sign-up-form__confirm'
                    type='password'
                    title='Confirm Password'
                    placeholder='Confirm Password'
                    name='password'
                    component={FormInput}
                    />
                <Field className='sign-up-form__fname'
                    type='first name'
                    title='First Name'
                    placeholder='First Name'
                    name='first name'
                    component={FormInput}
                    />
                <Field className='sign-up-form__lname'
                    type='last name'
                    title='Last Name'
                    placeholder='Last Name'
                    name='last name'
                    component={FormInput}
                    />
                <Field className='sign-up-form__phone-number'
                    type='phone number'
                    title='Phone Number'
                    placeholder='Phone Number'
                    name='phone number'
                    component={FormInput}
                    />
                <Field className='sign-up-form__addressOne'
                    type='address one'
                    title='Address One'
                    placeholder="Address One"
                    name='address one'
                    component={FormInput}
                    />
                <Field className='sign-up-form__addressTwo'
                    type='address two'
                    title='Address Two'
                    placeholder="Address Two"
                    name='address two'
                    component={FormInput}
                    />
                <Field className='sign-up-form__city'
                    type='city'
                    title='City'
                    placeholder='City'
                    name='city'
                    component={FormInput}
                    />
                <Field className='sign-up-form__state'
                    type='state'
                    title='State'
                    placeholder='State'
                    name='state'
                    component={FormInput}
                    />
                <Field className='sign-up-form__zipcode'
                    type='zipcode'
                    title='Zipcode'
                    placeholder='Zipcode'
                    name='zipcode'
                    component={FormInput}
                    />
                <div className='sign-up-form__line'></div>
                <Field className='sign-up-form__login'
                    onClick={() => history.push('/account')}
                    type='submit'
                    title='Create Account'
                    name='login'
                    component={FormButton}
                    />
                <Field className='sign-up-form__back'
                    onClick={()=> history.push('/signin')}
                    type='button'
                    title='Back'
                    name='back'
                    orange={true}
                    component={FormButton}
                    />
                <PageLinks className='sign-up-from__page-links' title='Password Requirements' links={infoTxt} />
            </form>
        )
    }
}

SignUpForm = reduxForm ({
    form: 'SignUpForm'
})(SignUpForm);

export default SignUpForm;