import React from 'react';
import Navbar from "../components/Nav";
import ArticleContent from '../components/ArticleContent';
import Footer from '../components/Footer';

const Article = () => {
    return (
        <div>
            <Navbar />
            <ArticleContent />
            <Footer />
        </div>
    );
}

export default Article;