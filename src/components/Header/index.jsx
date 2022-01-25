import React from 'react';

import {
    InstagramLogo,
    FacebookLogo,
    LinkedinLogo,
    TwitterLogo
} from '../../assets/svg/Socials';

import company_logo from "../../assets/logos/company_logo.png";

import {
    HeaderWrapper,
    LinksWrapper,
    Logo,
    SocialNetworksWrapper,
    StyledLink,
    Wrapper,
    SocialLogo
} from './styles';


function Header() {

    return (
        <HeaderWrapper>
            <StyledLink to="/">
                <Logo src={company_logo} />
            </StyledLink>
            <Wrapper>
                <LinksWrapper>
                    <StyledLink to="/services">Services &amp; Méthodologie </StyledLink>
                    <StyledLink to="/blog">Blog</StyledLink>
                </LinksWrapper>
                <SocialNetworksWrapper>
                    <SocialLogo>
                        <InstagramLogo />
                    </SocialLogo>
                    <SocialLogo>
                        <TwitterLogo />
                    </SocialLogo>
                    <SocialLogo>
                        <FacebookLogo />
                    </SocialLogo>
                    <SocialLogo>
                        <LinkedinLogo />
                    </SocialLogo>
                </SocialNetworksWrapper>
            </Wrapper>
        </HeaderWrapper>
    );
}

export default Header;
