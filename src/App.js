import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation, Hello } from './components';
import { Route } from "react-router-dom"
const App = () => (
  <div>
    <Navigation />
    <Route exact path='/' component={Home} />
    <Route exact path='/about' component={About} />
    <Route exact path='/contact' component={Contact} />
    <Route exact path="/hello" component={Hello} />
  </div>
);

export default App;
