import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import history from '../../history';

import ServicesContainer from './servicesContainer';
import PageHeader from '../pageHeader';
import AccountInfo from '../account/accountInfo';


class Services extends Component{
    componentDidMount(){
        const navbarLinks = [
            {   
                _id: 0,
                title: 'Services',
                active: true,
                path: '/services'
            },
            {
                _id: 1,
                title: 'Acount Information',
                active:false,
                path: '/account'
            }
        ]

        const headerLinks = [
            {
                _id: 0,
                title: 'Contact Me',
                path: '/contactMe'
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

    render(){
        return (
            <div className='services'>
                <PageHeader className='services__page-title' title='Available Services'/>
                <ServicesContainer />
            </div>
        )
    }

}

function mapStateToProps(state) {
    const { headerLinks, navbarLinks} = state.headerNavbar;
    return { headerLinks, navbarLinks}
}

Services = connect(mapStateToProps, actions)(Services);

export default Services;

// constructor(props){
    //     super(props);
        
    //     this.state = {
    //         services: []
    //     };
    // };
    
    
    // componentDidMount(){
    //     axios.get('http://localhost:5000/services')
    //     .then(response => {
    //         this.setState({
    //             services: response.data
    //         });
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })
    // }
    // serviceList(){
    //     return this.state.services.map(function(service, i) {
    //         return <Service service={service} key={i} />;
    //     })
    // }
    
    // render() {
    //     const {className} = this.props;
    //     return (
    //         <div className={`${className} service`}>
    //             <PageHeader className='service__page-title' title='Services Available' />
    //                 {this.serviceList()}
    //         </div>

    //     )
    // }

