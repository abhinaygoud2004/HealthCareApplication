import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register'
import UserProfile from './components/userprofile/UserProfile'
import Aboutus from './components/aboutus/Aboutus';
import Appointment from './components/appointment/Appointment';
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      children:[{
        path:"/",
        element:<Home />
      },{
        path:"/register",
        element:<Register />
      },{
        path:"/login",
        element:<Login />
      },{
        path:"/user-profile",
        element:<UserProfile />
      },{
        path:"/about-us",
        element:<Aboutus />
      },{
        path:"/appointment",
        element:<Appointment />
      }]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
