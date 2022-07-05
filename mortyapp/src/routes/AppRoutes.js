import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
// import './App.css';
import { NavBar } from '../components/shop/NavBar';
import ItemDetailContainer from '../pages/ItemDetailContainer';
import ItemListContainer from '../pages/ItemListContainer';
import Calculator from '../components/unit/Calculator'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= '/*' element={<NavBar/>}/>
        <Route path= 'carts' element={<ItemDetailContainer/>}/>
        <Route path='category' element={<ItemListContainer/>} />
        <Route path='shop' element={<Calculator/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
