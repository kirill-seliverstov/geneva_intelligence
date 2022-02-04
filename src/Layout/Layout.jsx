import React from 'react';

import Header from '../components/Header';
import MobileHeader from '../components/MobileHeader';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

function Layout({ children }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <>
            {matches ? <Header /> : <MobileHeader />}
            {children}
            <Contact />
            <Footer />
        </>
    );
}

export default Layout;
