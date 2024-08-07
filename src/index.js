import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter, // Crée un routeur basé sur l'historique du navigateur.
  RouterProvider, // Fournit le routeur à l'application.
} from "react-router-dom";
import App from './App';
import Home from './pages/home'; 
import Article from './pages/article';
import Gallery from './pages/gallery';
import Features from './pages/features';
import Testimonials from './pages/testimonials';
import ErrorPages from './pages/errorpages';  
import DiscountForm from './pages/DiscountForm';
import  { action as eventAction } from "./components/Form/Form" // importation de la fonction eventAction depuis le composant Form pour gérer l'action de soumission du formulaire. 
import ServiceSection from './pages/service';
import Team from './pages/team';
import Competances from './pages/competances';
import LeFonctionnement from './pages/fonctionnement';
import Evenements from './pages/evenements';
import Tarification from './pages/tarification';
import Video from './pages/video';
import Statistique from './pages/statistique';



import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement :<ErrorPages />,
      },
      {
        path: "/article",
        element: <Article />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/testimonials",
        element: <Testimonials />,
      },
      {
        path: "/discount",
        element: < DiscountForm/>,
        action: eventAction
      },
      {
        path: "/team",
        element : <Team />,
      },
      {
        path : "/service",
        element : <ServiceSection />,
      },
      {
        path : "/competences",
        element : <Competances />,
      },
      {
        path : "/fonctionnement",
        element : <LeFonctionnement />,
      },
      {
        path : "/evenements",
        element : <Evenements />,
      },
      {
        path : "/tarification",
        element : <Tarification />,
      },  
      {
        path : "/video",
        element : <Video />,
      },
      {
        path : "/statistique",
        element : <Statistique />,
      },

    ],
  },
]);

// Crée un élément racine pour le rendu de l'application.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*  Fournit le routeur à l'application. */}
    <RouterProvider router={router} /> 
  </React.StrictMode>
);
