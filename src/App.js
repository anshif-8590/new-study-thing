import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './Dashboard';
import Apps from './Apps';
import About from './About';

import { createBrowserRouter,RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {path:"/",element:<Apps/>},
  {path:"/dashboard",element:<Dashboard/>},
  {path:"/about",element:<About/>},
])


function App() {
  return (
    <div className="App">
     
     
    </div>
  );
}

export default App;


