import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import { useAppDispatch, useAppSelector } from './redux-store/hooks';
import { getAllPlayerRequestAction, getAllPlayerSuccessAction } from './redux-store/reducer/allPlayerSlice';



function App() {
  const players = useAppSelector((state) => state.allPlayers)
  const dispatch =  useAppDispatch();
  useEffect(()=>{
    dispatch(getAllPlayerRequestAction());
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {
            players.Players.map((e)=>{
                return  `Learn React with ${e.fullname} || ${e.age}`;
            })
          }
         
        </a>
      </header>
    </div>
  );
}

export default App;
