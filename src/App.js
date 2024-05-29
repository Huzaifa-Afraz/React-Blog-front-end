import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Login from './pages/Login/Login.jsx'
import DetailBlog from './pages/Detail/DetailBlog.jsx'
import CreateBlog from './pages/CreateBlog/CreateBlog.jsx'
import NavBar from './components/Navbar/NavBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Register from './pages/register/Register.jsx'
const Layout=()=>{
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
function App() {

 const router=createBrowserRouter([
  {
    path:"/",
    // element:<Home/>
    element:<Layout/>,
    children:[
      {
      path:'/',
      element:<Home/>
    },
   
    {
      path:"/posts/:id",
      element:<DetailBlog/>
    },
    {
      path:"/create",
      element:<CreateBlog/>
    }
    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  }
 
 ])

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
