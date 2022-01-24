import React from 'react';

import { Link } from 'react-router-dom'

import company_logo from '../../assets/logos/company_logo.svg'
import instagram_logo from '../../assets/logos/instagram_logo.svg'
import twitter_logo from '../../assets/logos/twitter_logo.svg'
import facebook_logo from '../../assets/logos/facebook_logo.svg'
import linkedin_logo from '../../assets/logos/linkedin_logo.svg'

import {
    HeaderWrapper,
    LinksWrapper,
    Logo,
    SocialNetworkLogo,
    SocialNetworksWrapper,
    StyledLink,
    Wrapper
} from './styles';

const Header = () => {
    return (
        <>

            <HeaderWrapper>
                <Link to="/">
                    <Logo src={company_logo} />
                </Link>
                <Wrapper>
                    <LinksWrapper>
                        <StyledLink to="/services">Services &amp; Méthodologie </StyledLink>
                        <StyledLink to="/blog">Blog</StyledLink>
                    </LinksWrapper>
                    <SocialNetworksWrapper>
                        <SocialNetworkLogo src={instagram_logo} />
                        <SocialNetworkLogo src={twitter_logo} />
                        <SocialNetworkLogo src={facebook_logo} />
                        <SocialNetworkLogo src={linkedin_logo} />
                    </SocialNetworksWrapper>
                </Wrapper>
            </HeaderWrapper>
        </>
    );
}

export default Header;
