import React, { Component} from 'react';

class PageLinks extends Component{
    render() {
        const {title, links } = this.props;
        return (
            <div className='page-links'>
                <div className='page-links__title'>{title}</div>
                <div className='page-links__links'>
                    {   
                        links.map((link,index) => {
                            return <a key={index} onClick={link.onClick} className='page-links__link'>{link.title}</a>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default PageLinks;