import React from 'react';
import './App.css';
import Home from './containers/Home'
import Portfolio from './containers/Portfolio'
import Blog from './containers/Blog'
import Kontakt from './containers/Kontakt'
import { Route, Switch, BrowserRouter} from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <div>
      <BrowserRouter>
      <Switch>
        <Route path="/kontakt" component={Kontakt} /> 
        <Route path="/blog" component={Blog} /> 
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/" exact component={Home} />
      </Switch></BrowserRouter></div>
    )
  }
}

export default App;
