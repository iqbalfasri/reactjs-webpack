import React from 'react';
import { render } from 'react-dom';

import { Header } from './src/Header';
import { Home } from './src/Home';

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
