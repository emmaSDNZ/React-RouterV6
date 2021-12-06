import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import App from './App';


import Blog from './Route/Blog';
import Contacto from './Route/Contacto';
import Inicio from './Route/Incio';
import NoEncontrado from './Route/NoEncontrado';
import Post from './Route/Post';

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
     <Routes>  
        <Route path='/' element={<App/>}> 
          <Route index element={<Inicio/>} />
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/blog/:id' element={<Post/>} />
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='*' element={<NoEncontrado/>}/>
        </Route>
    </Routes>
    </BrowserRouter>

    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

