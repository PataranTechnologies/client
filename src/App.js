import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignInPage from './pages/SignInPage'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact>
     <SignInPage />
     </Route>
     <Route path='/home' exact>
       <Home />
       </Route>
</Switch>
</Router>    </div>
  );
}

export default App;
