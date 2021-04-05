import React, { Component} from 'react';

import { connect } from 'react-redux';

class Header extends Component{
    render() {
        const {className} = this.props;
        return (
            <div className={`${className} header`}>
                    <div className='header__logo'>
                        <i className="fas fa-spa"></i>
                    </div>
                    <div className='header__links'>
                        {
                            this.props.headerLinks.map((link, index) => {
                                return (
                                    <a className='header__link' key={index} onClick={() => console.log('trying to switch tab')}>
                                        {link.title}
                                    </a>
                                )
                            })
                        }
                    </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { headerLinks } = state.headerNavbar;
    return {
        headerLinks
    }
}

Header = connect(mapStateToProps)(Header);

export default Header;
