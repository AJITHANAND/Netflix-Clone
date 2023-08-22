import NavBar from "./components/NavBar/NavBar";
import React from 'react';
import './App.css';
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import {trending,action,comedy,horror,documentary} from './constants/constant'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title="Trending Now" fetchUrl ={trending} />
      <RowPost title="Actions" isSmall fetchUrl ={action}/>
      <RowPost title="Comedy" isSmall fetchUrl ={comedy} />
      <RowPost title="Documentaries" isSmall fetchUrl ={documentary}/>
      <RowPost title="Horror" isSmall fetchUrl ={horror}/>

    </div>
  );
}

export default App;
