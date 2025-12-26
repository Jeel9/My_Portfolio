import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

///
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProjectDetails from './components/ProjectDetails';
import CaseStudy from './components/CaseStudy.jsx';

////

///
const routes = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/project/:projectId", element: <CaseStudy/> },
]);
///

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
