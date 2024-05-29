import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import PasswordGenerator from './pages/PasswordGenerator.jsx'
import BgChanger from './pages/BgChanger.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'; 
// import './pages/index.js'
import Layout from './Layout.jsx';
import ApiCall, { apiData } from './pages/ApiCall.jsx';
import Api from './pages/Api.jsx';
import Todo from './pages/Todo.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} errorElement={<NotFoundPage/>}>
      <Route path='bgchanger' element={<BgChanger/>}/>
      <Route path='password' element={<PasswordGenerator/>}/>
      <Route loader={apiData} path='apicall' element={<ApiCall/>}/>
      <Route  path='api' element={<Api/>}/>
      <Route  path='todo' element={<Todo/>}/>
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
    