import React, { Component } from 'react';

class PageHeader extends Component{
    render() {
        const { className , title } = this.props;
        return (
            <div className={`${className} page-header`}>
                {title}
            </div>
        )
    }
}

export default PageHeader;