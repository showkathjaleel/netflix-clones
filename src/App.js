import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


import Axios from "axios";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost/>
      
      
    </div>
  )
  
 
}

export default App;
