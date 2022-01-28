import React from 'react';

import {
    InstagramLogo,
    FacebookLogo,
    LinkedinLogo,
    TwitterLogo
} from '../../assets/svg/Socials';

import {
    Copyright,
    FooterWrapper,
    SocialsWrapper,
} from './styles';

function Footer() {
    return (
        <>
            <FooterWrapper>
                <SocialsWrapper>
                    <InstagramLogo fill="#004489" padding="0 0.75rem 0 0"/>
                    <TwitterLogo fill="#004489"  padding="0 0.75rem 0 0"/>
                    <FacebookLogo fill="#004489"  padding="0 0.75rem 0 0"/>
                    <LinkedinLogo fill="#004489"/>
                </SocialsWrapper>
                <Copyright>
                    2021© Geneva Intelligence. All rights reserved.
                </Copyright>
            </FooterWrapper>
        </>
    );
}

export default Footer;
