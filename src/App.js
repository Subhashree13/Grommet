import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ErrorMsg from './Components/ErrorMsg';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
function App(){
    return (
        <div> 
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
       
}
const appRouter = createBrowserRouter([{
    path:'/',
    element:<App/>,
    errorElement:<ErrorMsg/>,
    children:[
        {path:'/',element:<MainContent/>},
        {path:'/about',element:<About/>},
        {path:'/contactus',element:<Contact/>},
    ]
}
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);