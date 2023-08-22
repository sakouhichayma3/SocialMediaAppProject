import {createBrowserRouter} from'react-router-dom'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Home from '../Pages/Home'
import PageNotFound from '../Pages/PageNotFound'

const router = createBrowserRouter([
    {
      path :'/',
      element :<div>Home Page</div>,
      errorElement : <PageNotFound/>
    },
    {
      path : '/login',
      element : <Login/>
    },
    
    {
    path : '/register',
    element : <Register/>
  },
  {
    path : '/home',
    element : <Home/>
  }
  ])
  export default router;