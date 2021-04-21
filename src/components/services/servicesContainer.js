import React, {Component} from 'react';
import axios from 'axios';

import ServiceItem from './serviceItem';


export default class ServicesContainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    getServiceItems(){
        axios.get('http://localhost:5000/services')
            .then(response => {
                this.setState({
                    data: response.data
                })
            })
            .catch(error => {
                console.log('getServiceItems error', error);
            })
    }

    serviceList(){
            return this.state.data.map(function(service, i) {
                return <ServiceItem service={service} key={i} />;
            })
        }
    
    componentDidMount(){
        this.getServiceItems();
    }

    

    render(){
        return(
            <div className='service-list-container'>
                {this.serviceList()}
            </div>
        )
    }
}