import './App.css';
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import Loginpage from './components/login';
import Home from './components/home';
import SingleMovie from './components/SingleMovie';
import Error from './components/Error';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='movie/:id' element={<SingleMovie></SingleMovie>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      {/* <Loginpage></Loginpage> */}
      {/* <SingleShow></SingleShow> */}
    </div>
  );
}
export default App;
