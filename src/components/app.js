import React from 'react';
import Header from './header';
import Nav from './nav';
import Content from './content';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import reactbg from '../assets/images/react.svg';

const App = () => (
    <div id="main">
        <div className="container">
              <img className="main-bg-logo" src={reactbg} />
              <Header />
              <div id="main-content" className="row justify-content-md-center">
                  <div className="nav-container col-lg-4">
                      <Nav />
                  </div>
              <Content />
              </div>
        </div>
    </div>
);

export default App;
