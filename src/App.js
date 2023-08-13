import React, { useEffect, useState } from 'react'
import { RouterProvider,  createBrowserRouter, createHashRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import { Toaster } from 'react-hot-toast';
import jwtDecode from 'jwt-decode';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import HomePage from './Components/HomePage/HomePage';
import Categories from './Components/Categories/Categories';
import HomeContextProvider from './Context/homeContext';
import CategoryContextProvider from './Context/CategoryContext';
import Activities from './Components/Activities/Activities';
import ActivitiesContextProvider from './Context/activitiesContext';
import UsersContextProvider from './Context/UsersContext';
import Users from './Components/Users/Users';




export default function App() {

  useEffect(()=>{
    if(localStorage.getItem("userToken")){
      saveUserData()
    }
  },[])
  
  const [SetUserData, setSetUserData] = useState(null)
  
  function saveUserData(){
    let enCodedToken = localStorage.getItem("userToken")
    let decodedToken = jwtDecode(enCodedToken)
    setSetUserData(decodedToken)
  }

let router = createHashRouter([{
  path:"" , element:<Layout SetUserData={SetUserData} setSetUserData={setSetUserData}/>, children:[
    {index:true , element:<Login saveUserData={saveUserData}/>},
    {path:"homePage", element:<HomePage/>},
    {path:"categories" , element:<Categories/>},
    {path:"activities" , element:<Activities/>},
    {path:"users" , element:<Users/>},
    {path:"*" , element:<NotFound/>},

  ]
}])

return<>
<UsersContextProvider>
<ActivitiesContextProvider>
<CategoryContextProvider>
<HomeContextProvider>
<Toaster/>
<RouterProvider router={router}></RouterProvider>
</HomeContextProvider>
</CategoryContextProvider>
</ActivitiesContextProvider>
</UsersContextProvider>

  </>
}
