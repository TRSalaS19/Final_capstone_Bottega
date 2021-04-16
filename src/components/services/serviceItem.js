import React , {Component} from 'react';

export default class ServiceItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name, description} = this.props.service;
        return (
            <div className='service-item'>
                <div className='service-item__container'>
                    <div className='service-item__service'>
                        <div className='service-item__name'>{name}</div>
                        <div className='service-item__description'>{description}</div>
                    </div>
                </div>
            </div>
        )
    }
}