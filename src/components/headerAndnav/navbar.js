import React, { Component } from 'react';

import { connect } from 'react-redux';


class Navbar extends Component {
    render() {
        const { className} = this.props;
        return (
            <div className={`${className} navbar`}>
                {
                    this.props.navbarLinks.map((link,index) => {
                        return (
                            <a className={`navbar__link ${link.active ? 'highlight-text': ''}`} key={index} onClick={() => console.log('trying to switch tab')}>
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

Navbar = connect(mapStateToProps)(Navbar);

export default Navbar;
