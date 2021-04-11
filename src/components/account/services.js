import React, {Component} from 'react';

class Services extends Component {
    render() {
        const {className} = this.props;
        return (
            <div className={`${className} services`}>
                services go here
            </div>
        )
    }
}

export default Services;