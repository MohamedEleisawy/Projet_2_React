import React from 'react';
import Navbar from "../components/Nav";
import GalleryImg from '../components/GalleryImg';
import Footer from '../components/Footer';
const Gallery = () => {
    return (
        <div>
            <Navbar />
            <div class="spikes"></div>
            <GalleryImg />
            <Footer />
        </div>
    );
}

export default Gallery;
