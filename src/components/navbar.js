import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavBar extends Component {
    render() {
    const { className } = this.props;
        return (
            <nav className={`${className} navbar`}>
                <div className='navbar__container'>  
                    <div className='navbar__links-container'>
                        <div className='navbar__logo-container'>
                            <i class="fas fa-spa"></i>
                            <div className='navbar__logo-text'>
                                MassageByGus
                            </div>
                        </div>
                        <Link to='/' className='navbar__links'>Sign-In</Link>
                        <Link to='/signup' className='navbar__links'>Sign-Up</Link>
                        <Link to='/account' className='navbar__links'>Account</Link>
                        <Link to='/services' className='navbar__links'>Services</Link>
                        <Link to='/contact' className='navbar__links'>Contact Me</Link>
                    </div>
                </div>  
            </nav>
        )
    }
}

export default NavBar;