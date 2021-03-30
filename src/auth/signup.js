import React, { Component } from 'react';

import SignUpForm from './signUpForm';
import PageHeader from '../components/pageHeader';

class SignUp extends Component {
    onSubmit = (fields) => {
        console.log(fields);
    }

    render(){
        return (
            <div className='sign-up'>
                <PageHeader className='sign-up__page-title' title='Sign Up'/>
                <SignUpForm onSubmit={this.onSubmit} className='sign-up__form' />
            </div>
        )
    }
}

export default SignUp;