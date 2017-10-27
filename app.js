import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Router, Switch } from 'react-router-dom';

import { Header } from './src/components/Header';
import { Home } from './src/components/Home';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Home/>
      </div>
    );
  }
}


render(
  <App/>,
  document.getElementById('app')
);
