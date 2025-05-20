// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './Dashboard';
import Apps from './Apps';
import About from './About';
import NotFoundPage from './NotFoundPage';
import DashboardItems from './DashboardItems';
import { createBrowserRouter,RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {path:"/",element:<Apps/>},
  {path:"/dashboard",element:<Dashboard/>},
  {path:"/about",element:<About/>},
  {path:"*",element:<NotFoundPage/>},
  {path:"/dashboard/:id",element:<DashboardItems/>},
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

