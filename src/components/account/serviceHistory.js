import React, { Component } from 'react';

import PageHeader from '../pageHeader';


class ServiceHistory extends Component{
    
    render() {
        return (
            <div className='service-history'>
                <PageHeader className='service-history__page-title' title='Service History' />
                <div className='service-history__bottom-border'></div>
            </div>
        )
    }
}

export default ServiceHistory;