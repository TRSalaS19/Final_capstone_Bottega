import React, { Component } from 'react';

import SignUpForm from './signUpForm';
import PageHeader from '../components/pageHeader';

import { connect } from 'react-redux';
import * as actions from '../actions';

class SignUp extends Component {

    ComponentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    onSubmit = (fields) => {
        console.log(fields);
    };

    render(){
        return (
            <div className='sign-up'>
                <PageHeader className='sign-up__page-title' title='Create an Account'/>
                <SignUpForm onSubmit={this.onSubmit} className='sign-up__form' />
            </div>
        )
    }
}

SignUp = connect(null, actions)(SignUp);

export default SignUp;