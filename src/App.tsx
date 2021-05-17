import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonList from './Components/PokemonList';
import { fetchUserProfile } from './service/GitHubApiService';
import UserLookup from "./Components/UserLookup";




function App() {
  return (
    <div className="App">
      <PokemonList />
      
      <UserLookup />
    </div>
  );
}

export default App;
