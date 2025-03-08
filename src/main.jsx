import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tailwind.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundPage from './NotFoundPage.jsx';
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Home from './pages/Home.jsx';

const router= createBrowserRouter([
  {path: '/', element: <Home/>},
  {path: '*', element: <NotFoundPage/>},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <body className='w-full h-full flex flex-col min-h-screen'>
      <Header />
          <RouterProvider router={router} />
      <Footer />
    </body>
  </StrictMode>,
)
