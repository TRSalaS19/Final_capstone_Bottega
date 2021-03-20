import React, { Component } from 'react';

import NavBar from './navbar';

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        {this.props.children}
        <NavBar />
      </div>
    );
  }
}

export default Layout;