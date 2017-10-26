import React from 'react';
import { render } from 'react-dom';

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
