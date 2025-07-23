import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import "/index.css"
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Cartprovider } from './context/Cartcontext.jsx'

import { SearchProvider } from './context/Searchcontext.jsx' // ✅ fixed name
import { FilterProvider } from './context/FilterContext.jsx'
import Loading from './components/Loading.jsx'


const Error = lazy(()=>import('./components/Error.jsx'))
const Cart = lazy(()=>import('./components/Cart.jsx'))
const Cards = lazy(()=>import('./components/Cards.jsx'))
const Restaurants = lazy(()=>import('./components/Restaurants.jsx'))

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:[
          <Suspense fallback={<Loading/>}>    <Cards/>,</Suspense>
      
        ]
      },
      {
        path:"Cart",
        element:<Suspense fallback={<Loading/>}><Cart/></Suspense>
      },
      {
        path:"restaurants/:resId",
        element:<Suspense fallback={<Loading/>}><Restaurants/></Suspense> 
      }
    ],
    errorElement:<Suspense fallback={<Loading/>}><Error/></Suspense>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FilterProvider>
       <SearchProvider> 
      <Cartprovider>
        <RouterProvider router={router} />
      </Cartprovider>
    </SearchProvider>
    </FilterProvider>
   
  </StrictMode>
);
