import React, {Component} from 'react';

import {connect} from 'react-redux';
import * as actions from '../../actions';

import AccountInfo from './accountInfo';
import ServiceHistory from './serviceHistory';

class Account extends Component{
    componentDidMount(){
        const navbarLinks = [
            {   
                _id: 0,
                title: 'Service History',
                active: true,
                component: <ServiceHistory/>
            },
            {
                _id: 1,
                title: 'Acount Information',
                active:false,
                component: <AccountInfo />
            }
        ]

        const headerLinks = [
            {
                _id: 0,
                title: 'Services',
                path: '/services'
            },
            {
                _id: 1,
                title: 'Logout',
                path: '/'
            }
        ]
        this.props.setHeaderLinks(headerLinks);
        this.props.setNavbarLinks(navbarLinks);
    }

    renderContent() {
        let jsx;
        if (this.props.navbarLinks) {
            this.props.navbarLinks.forEach(link => {
                if(link.active) {
                    jsx = link.component;
                }
            })
        }
        return jsx;
    }   


    render() {
        return (
            <div className='account'>
                {this.renderContent()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { headerLinks, navbarLinks} = state.headerNavbar;
    return { headerLinks, navbarLinks}
}

Account = connect(mapStateToProps, actions)(Account);

export default Account;

