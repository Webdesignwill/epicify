
import React from 'react';
import Navbar from './../components/navbar/navbar.js';

class Application extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
        <main role="main">
          <div className="jumbotron">
            <div className="container">{this.props.children}</div>
          </div>
        </main>
      </div>
    );
  }
}

export default Application;
