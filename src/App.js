import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Article from './pages/article';
import Gallery from './pages/gallery';
import Features from './pages/features';
import Testimonials from './pages/testimonials';
import DiscountForm from './pages/DiscountForm';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/features" element={<Features />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/discount" element={<DiscountForm />} />
      </Routes>
    </div>
  );
}

export default App;