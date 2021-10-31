import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import Profile from './Components/Profile.jsx';
import { Route, Switch } from 'react-router-dom';
import PlayerData from "./Data.json";

function App() {
  return (
    <div className="App">
      <div className="text">FIFA 19</div>
      <Switch>
        <Route exact path='/' component={() => <SearchBar data={PlayerData} />} />
        <Route path='/Profile' component={Profile} />
    </Switch>
    </div>
  );
}

export default App;
