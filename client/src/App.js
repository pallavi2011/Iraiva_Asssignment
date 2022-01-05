import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import {useState} from 'react';
import Profile from './Pages/Profile';

const App = () => {
  const token = localStorage.getItem('token');
 
  return (
    <div className="App">
      <Router>
       {token && (
         <Profile token={token}/>
       )}
      <Switch>
        <Route exact path="/" component={Register}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
