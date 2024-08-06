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
      </Routes>
    </div>
  );
}

export default App;