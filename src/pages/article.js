import React from 'react';
import Navbar from "../components/Nav/Nav";
import ArticleContent from '../components/Article/ArticleContent';
import Footer from '../components/Footer/Footer';

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