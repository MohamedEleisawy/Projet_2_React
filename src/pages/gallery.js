import React from 'react';
import Navbar from "../components/Nav/Nav";
import GalleryImg from '../components/Gallerie/GalleryImg';
import Footer from '../components/Footer/Footer';
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
