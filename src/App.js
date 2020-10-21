import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LoadDataFetch from './components/Home/LoadDataFetch';
import LoadData from './components/LoadData/LoadData';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { createContext } from 'react';
import NoMatch from './components/NoMatch/NoMatch';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRouter/PrivateRoute';
import EmailData from './components/Register/EmailData';
import Logo from './components/Logo/Logo';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [activityData, setActivityData] = useState({});

	

  return (
    <div>
      <UserContext.Provider value={([loggedInUser, setLoggedInUser,activityData, setActivityData])}>
      <Router>
       <Switch>
          <Route path="/home">
            <Header/>
            <Home/>
            <LoadDataFetch/>
          </Route>
           <Route path="/donation">
          </Route>
          <Route path="/event">
          </Route>
          <Route path="/blog">
          </Route>
          <PrivateRoute path="/register">
            <Logo/>
            <Registration/>
         </PrivateRoute>
          <Route path="/login">
            <Logo/>
            <Login/>
          </Route>
          <Route path="/volunteerActivities">
            <EmailData></EmailData>
          </Route>
          <Route path="/admin">
          <LoadData/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
           <LoadDataFetch/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
       </Switch>
      </Router>
    </UserContext.Provider> 
  </div>
  );
}

export default App;
