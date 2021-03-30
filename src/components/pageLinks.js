import React, { Component} from 'react';

class PageLinks extends Component{
    render() {
        const {className, title, links } = this.props;
        return (
            <div className={`${className} page-links`}>
                <div className='page-links__title'>{title}</div>
                <div className='page-links__links'>
                    {   
                        links.map(link => {
                            return <a key={link._id} onClick={link.onClick} className='page-links__link'>{link.title}</a>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default PageLinks;