import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import ListofStudent from './ListofStudent';
import Favouritestudent from './FavouriteStudent';
import { StudentProvider } from './StudentContext';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <BrowserRouter>
    <StudentProvider>
  
    <nav class="navbar">
      <Link to={"/ListofStudent"} class="link">ListofStudent</Link>
      {" "}
      <Link to={"/Favouritestudent"}class="link">Favouritestudent</Link>
    </nav>
    <Routes>
    <Route path='/ListofStudent' element={<ListofStudent/>}></Route>
    <Route path='/Favouritestudent' element={<Favouritestudent/>}></Route>
    </Routes>
    </StudentProvider>
    </BrowserRouter>
  </div>
);

