
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Login from './components/Form/Login'
import Layout from './components/Layout/Layout'
import Protect from './components/Protect/Protect'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {path:'/' ,element:<Login></Login>},
      { path: 'home', element: <Protect><Home /></Protect>  },
      { path: 'about', element:<Protect><About /></Protect>  },
      { path: 'login', element: <Login /> },
    ],
  },
]);
function App() {

  return <>
  
    <RouterProvider router={router}/>

  
  </>
   
    
  
};


export default App
