import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/Components/Header.jsx';
import Body from './src/Components/Body.jsx';
import Footer from './src/Components/Footer.jsx';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router';

import About from './src/Components/About.jsx';
import Contact from './src/Components/Contact.jsx';
import Error from './src/Components/Error.jsx';
import RestaurantMenu from './src/Components/RestaurantMenu.jsx';

// import Grocery from './src/Components/Grocery.jsx';
const Grocery=lazy(()=>import('./src/Components/Grocery.jsx'));    // Lazy loading


   // let element=React.createElement('h1', {id:"mahika"}, "Hello, world!");
  // let elementJSX = <h1 id="mahika">Hello, worldXXX!</h1>;  // JSX Element
  let root =ReactDOM.createRoot(document.getElementById('root'));



const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Body/>
    
    
    
    
      },
      {
        path:"/about",
        element:<About/>
    
    
    
    
      },
      {
        path:"/contact",
        element:<Contact/>
    
    
    
    
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
    
    
    
    
      },
      {
        path:"grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}>   <Grocery/> </Suspense>
    
    
    
    
      }

    ]
    



  },
  


]);




function App(){
  return (
    <div className="app">
      <Header/>
      <Outlet/>
      <Footer/>
    

    </div>

  );
}






root.render(<RouterProvider router={appRouter}></RouterProvider>);

