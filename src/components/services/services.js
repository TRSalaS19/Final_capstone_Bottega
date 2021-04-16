import React, {Component} from 'react';

import ServicesContainer from './servicesContainer';
import PageHeader from '../pageHeader';


export default class Services extends Component{
    render(){
        return (
            <div className='services'>
                <PageHeader className='services__page-title' title='Available Services'/>
                <ServicesContainer />
            </div>
        )
    }
}
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

