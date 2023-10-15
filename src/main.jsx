import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import AddedTea from './component/AddedTea';
import UpdateTea from './component/UpdateTea';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=> fetch('https://tea-store-server-ms2c30h98-shaikats-projects.vercel.app/tea')
  },
  {
    path:'/addedtea',
    element:<AddedTea></AddedTea>,
  },
  {
    path:'/updatetea/:id',
    element:<UpdateTea></UpdateTea>,
    loader:({params})=> fetch(`https://tea-store-server-ms2c30h98-shaikats-projects.vercel.app/tea/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
