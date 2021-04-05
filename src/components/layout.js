import React, { Component } from 'react';

import NavBar from './headerAndnav/navbar';
import Header from './headerAndnav/header';

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        {this.props.children}
        <Header />
        <NavBar />
      </div>
    );
  }
}

export default Layout;