import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from "./Component/Header";
import Layout from './Component/Layout';

function App() {
  return (
    
      <div className="App">        
        <Routes>
          <Route path='/*' element={<Layout/>}/>
        </Routes>
      </div>
   
  );
}

export default App;
