import React, { Component } from 'react';


import { connect } from 'react-redux';
import * as actions from '../../actions';


class Navbar extends Component {
    render() {

        return (
            <div className='navbar'>
                {
                    this.props.navbarLinks.map((link, index) => {
                        return (
                            <a className={`navbar__link ${link.active ? 'highlight-text': ''}`} key={index} onClick={() => history.push(link.path)}>
                                {link.title}
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { navbarLinks } = state.headerNavbar;
    return {
        navbarLinks
    }
}

Navbar = connect(mapStateToProps, actions)(Navbar);

export default Navbar;
