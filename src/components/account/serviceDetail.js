import React, {Component} from 'react';

class ServicesDetail extends Component {
    render() {
        const {className} = this.props;
        return (
            <div className={`${className} service-detail`}>
                Service detail goes here
            </div>
        )
    }
}

export default ServicesDetail;