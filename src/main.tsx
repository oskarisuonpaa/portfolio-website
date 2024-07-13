import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './components/Landing';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Blog from './components/Blog';
import NotFound from './components/NotFound';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Landing /> },
      { path: '/about', element: <Hero /> },
      { path: '/contact', element: <Contact /> },
      { path: '/projects', element: <Projects /> },
      { path: '/blog', element: <Blog /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
