
import React from 'react';
import ReactDOM from 'react-dom';
import "../sass/main.scss";

import Header from "./components/header/header.js";

class Root extends React.Component{
  render () {
    return <Header />;
  }
};

ReactDOM.render(<Root />, document.querySelector('main'));
