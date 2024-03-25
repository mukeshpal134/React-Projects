import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import PasswordGenerator from './pages/PasswordGenerator.jsx'
import BgChanger from './pages/BgChanger.jsx'
// import NotFoundPage from './pages/NotFoundPage.jsx';
import Layout from './Layout.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='bgchanger' element={<BgChanger/>}/>
      <Route path='password' element={<PasswordGenerator/>}/>

    </Route>
  )
  
//   [
//   {
//     path:'/',
//     element:<App/>,
//     errorElement: <NotFoundPage/>
//   },
//   {
//     path:'/bgchanger',
//     element:<BgChanger/>,
//     errorElement: <NotFoundPage/>
//   },
//   {
//     path:'/password',
//     element:<PasswordGenerator/>
//   }
// ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
    