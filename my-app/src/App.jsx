// import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from 'react';
import ProdDisp from './ProdDisp';
import MyNav from './MyNav';
import Product from './Product';
import Home from './Home';

const App = () => {
  return(
  <div>
     <div>
      <MyNav></MyNav>
      <Outlet />
    </div>
  </div>
   );
}

export default App;
