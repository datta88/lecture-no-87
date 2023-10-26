import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import AddProduct from './views/AddProduct/AddProduct'
import ProductDetail from './components/ProductDetail/ProductDetail'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Update from './views/Update/Update';


const router = createBrowserRouter([
  {
    path : '/',
    element : <Home/>
  },

  {
    path : '/addProduct',
    element :<AddProduct />
  },
  {
    path : '/productdeatail/:_id',
    element : <ProductDetail/>
  },
  {
    path : '/update/:id',
    element : <Update/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <RouterProvider router={router}/>
);


