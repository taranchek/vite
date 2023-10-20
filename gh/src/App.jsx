import { useRoutes } from 'react-router-dom'
import './App.css'

import About from './About';
import Index from './Index';
import Dostij from './Dostij';
import Product from './Product';



function App() {
  const router = useRoutes([
    {
      path: '/',
      element: <Index />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/dostij',
      element: <Dostij />
    },
    {
      path: '/product',
      element: <Product />
    },
  ]);

  return router
}

export default App
