import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Article from './pages/article';
import Gallery from './pages/gallery';
import Features from './pages/features';
import Testimonials from './pages/testimonials';
import Team from './pages/team';
import ServiceSection from './pages/service';
import DiscountForm from './pages/DiscountForm';
import Competances from './pages/competances';
import LeFonctionnement from './pages/fonctionnement';
import Evenements from './pages/evenements';
import Tarification from './pages/tarification';
import Video from './pages/video';
import Statistique from './pages/statistique';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/features" element={<Features />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/team" element={<Team />} />
        <Route path="/discount" element={<DiscountForm />} />
        <Route path="/service" element={<ServiceSection />} />
        <Route path="/competences" element={<Competances />} />
        <Route path="/fonctionnement" element={<LeFonctionnement />} />
        <Route path="/evenements" element={<Evenements />} />
        <Route path="/tarification" element={<Tarification />} />
        <Route path="/video" element={<Video />} />
        <Route path="/statistique" element={<Statistique />} />
      </Routes>
    </div>
  );
}

export default App;