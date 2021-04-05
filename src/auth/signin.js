import React, { Component } from 'react';
import SignInForm from './signInForm';
import PageHeader from '../components/pageHeader';

class SignIn extends Component {
    
    onSubmit=(fields) => {
        console.log(fields);
    }

    render(){
        return (
            <div className='sign-in'> 
                <PageHeader className='sign-in__page-title' title='Login' />
                <SignInForm onSubmit={this.onSubmit} className='sign-in__form' />
            </div>
        )
    }
}

export default SignIn;