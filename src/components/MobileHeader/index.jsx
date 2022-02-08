import React from 'react';
import companyLogoMobile from '../../assets/logos/companyLogoMobile.png'

import { useState } from 'react';

import {
    BurgerBtn,
    CloseBtn
} from '../../assets/svg/MobileHeaderSVGs'

import {
    InstagramLogo,
    FacebookLogo,
    LinkedinLogo,
    TwitterLogo
} from '../../assets/svg/Socials';

import {
    Toggle,
    HeaderWrapper,
    StyledImg,
    Navigation,
    StyledList,
    StyledLi,
    StyledLink,
    SocialsWrapper,
    SocialLogo,
    Blur
} from './styles'

function MobileHeader() {
    const [menuActive, setMenuActive] = useState(false);

    return (
        <>
            <HeaderWrapper>
                <Toggle onClick={() => setMenuActive(!menuActive)}>
                    {
                        menuActive ? <CloseBtn /> : <BurgerBtn />
                    }
                </Toggle>
                <StyledLink to='/'>
                    <StyledImg src={companyLogoMobile} />
                </StyledLink>
            </HeaderWrapper>

            <Navigation active={menuActive} menuActive={menuActive}>
                <StyledList>
                    <StyledLi>
                        <StyledLink to="/services">Services &amp; Methodologie</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to="/blog">Blog</StyledLink>
                    </StyledLi>
                </StyledList>
                <SocialsWrapper>
                    <SocialLogo>
                        <InstagramLogo fill="#004489" />
                    </SocialLogo>
                    <SocialLogo>
                        <TwitterLogo fill="#004489" />
                    </SocialLogo>
                    <SocialLogo>
                        <FacebookLogo fill="#004489" />
                    </SocialLogo>
                    <SocialLogo>
                        <LinkedinLogo fill="#004489" />
                    </SocialLogo>
                </SocialsWrapper>
            </Navigation>
        </>
    );
}

export default MobileHeader;
