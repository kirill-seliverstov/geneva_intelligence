import React from 'react';

import company_logo from '../../assets/logos/company_logo.svg'
import instagram_logo from '../../assets/logos/instagram_logo.svg'
import twitter_logo from '../../assets/logos/twitter_logo.svg'
import facebook_logo from '../../assets/logos/facebook_logo.svg'
import linkedin_logo from '../../assets/logos/linkedin_logo.svg'

import {
    SocialNetworksWrapper,
    SocialNetworkLogo,
    FooterWrapper,
    Copyright
} from './styles';

const Footer = () => {
    return (
        <>
            <FooterWrapper>
                <SocialNetworksWrapper>
                    <SocialNetworkLogo src={instagram_logo} />
                    <SocialNetworkLogo src={twitter_logo} />
                    <SocialNetworkLogo src={facebook_logo} />
                    <SocialNetworkLogo src={linkedin_logo} />
                </SocialNetworksWrapper>
                <Copyright>
                    2021© Geneva Intelligence. All rights reserved.
                </Copyright>
            </FooterWrapper>
        </>
    );
};

export default Footer;
