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
                    <InstagramLogo height="50"/>
                    <TwitterLogo />
                    <FacebookLogo />
                    <LinkedinLogo />
                </SocialsWrapper>
                <Copyright>
                    2021© Geneva Intelligence. All rights reserved.
                </Copyright>
            </FooterWrapper>
        </>
    );
}

export default Footer;
