import React from 'react';

import company_logo from '../../assets/logos/company_logo.svg'
import instagram_logo from '../../assets/logos/instagram_logo.svg'
import twitter_logo from '../../assets/logos/twitter_logo.svg'
import facebook_logo from '../../assets/logos/facebook_logo.svg'
import linkedin_logo from '../../assets/logos/linkedin_logo.svg'

import {
    StyledFooter
} from './styles';

const Footer = () => {
    return (
        <>
            <StyledFooter.Wrapper>
                <StyledFooter.SocialsWrapper>
                    <StyledFooter.SocialLogo src={instagram_logo} />
                    <StyledFooter.SocialLogo src={twitter_logo} />
                    <StyledFooter.SocialLogo src={facebook_logo} />
                    <StyledFooter.SocialLogo src={linkedin_logo} />
                </StyledFooter.SocialsWrapper>
                <StyledFooter.Copyright>
                    2021© Geneva Intelligence. All rights reserved.
                </StyledFooter.Copyright>
            </StyledFooter.Wrapper>
        </>
    );
};

export default Footer;
