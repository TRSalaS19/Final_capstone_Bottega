import React, { Component } from 'react';


import SignUpForm from './signUpForm';
import PageHeader from '../components/pageHeader';

import { connect } from 'react-redux';
import * as actions from '../actions';
import axios from 'axios';

class SignUp extends Component {
    onSubmit(e){
        e.preventDefault();

        console.log(`New User created:`);
        console.log(`User email: ${this.state.user_email}`);
        console.log(`User password: ${this.state.user_password}`);
        console.log(`User fname: ${this.state.user_fname}`);
        console.log(`User lname: ${this.state.user_lname}`);
        console.log(`User phoneNumber: ${this.state.user_phoneNumber}`);

        const newUser ={
            user_email: this.state.user_email,
            user_password: this.state.user_password,
            user_fname: this.state.user_fname,
            user_lname: this.state.user_lname,
            user_phoneNumber: this.state.user_phoneNumber
        }

        axios.post('http://localhost:5000/users/add', newUser)
            .then(res => console.log(res.data));

        this.setState({
            user_email: '',
            user_password: '',
            user_fname: '',
            user_lname: '',
            user_phoneNumber: ''
        })
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