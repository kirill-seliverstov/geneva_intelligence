import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact'

function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Contact />
            <Footer />
        </>
    );
}

export default Layout;
