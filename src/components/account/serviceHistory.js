import React, { Component } from 'react';

import PageHeader from '../pageHeader';
import Services from './services';
import ServicesDetail from './serviceDetail';

class ServiceHistory extends Component{
    render() {
        const {className} = this.props;
        return (
            <div className={`${className} service-history`}>
                <PageHeader className='service-history__page-title' title='Service History' />
                <Services className='service-history__services'/>
                <ServicesDetail className='service-history__detail'/>
                <div className='service-history__bottom-border'></div>
            </div>
        )
    }
}

export default ServiceHistory;