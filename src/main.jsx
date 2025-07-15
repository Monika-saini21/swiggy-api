import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "/index.css"
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Error from './components/Error.jsx'
import Cards from './components/Cards.jsx'
import Orderdetail from './components/Orderdetail.jsx'
import Restaurants from './components/Restaurants.jsx'
import { Cartprovider } from './context/Cartcontext.jsx'
import Cart from './components/Cart.jsx'
import { SearchProvider } from './context/Searchcontext.jsx' // ✅ fixed name

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:[
          <Orderdetail key="order" />,
          <Cards key="cards" />,
        ]
      },
      {
        path:"Cart",
        element:<Cart/>
      },
      {
        path:"restaurants/:resId",
        element:<Restaurants/>
      }
    ],
    errorElement:<Error/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchProvider> 
      <Cartprovider>
        <RouterProvider router={router} />
      </Cartprovider>
    </SearchProvider>
  </StrictMode>
);
