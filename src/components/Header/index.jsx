import React, { useState } from 'react';

import { Link } from 'react-router-dom'

import company_logo from '../../assets/logos/company_logo.svg'
import instagram_logo from '../../assets/logos/instagram_logo.svg'
import twitter_logo from '../../assets/logos/twitter_logo.svg'
import facebook_logo from '../../assets/logos/facebook_logo.svg'
import linkedin_logo from '../../assets/logos/linkedin_logo.svg'
import hamburger_icon from '../../assets/logos/hamburger_icon.svg'
import closemenu_icon from '../../assets/logos/closemenu_icon.svg'

import {
    StyledHeader
} from './styles';

const Header = () => {
    const [openDrawer, toggleDrawer] = useState(false);

    return (
        <>

            <StyledHeader.Wrapper>
                <div>
                    {openDrawer ?
                        <StyledHeader.CloseButton src={closemenu_icon} onClick={() => toggleDrawer(false)} />

                        :

                        <StyledHeader.HamburgerButton src={hamburger_icon} onClick={() => toggleDrawer(true)} />
                    }

                    <Link to="/">
                        <StyledHeader.Logo src={company_logo} />
                    </Link>
                </div>
                <StyledHeader.Items openDrawer={openDrawer}>
                    <StyledHeader.LinksWrapper>
                        <StyledHeader.Link to="/services">Services &amp; Méthodologie </StyledHeader.Link>
                        <StyledHeader.Link to="/blog">Blog</StyledHeader.Link>
                    </StyledHeader.LinksWrapper>
                    <StyledHeader.SocialsWrapper>
                        <StyledHeader.SocialLogo src={instagram_logo} />
                        <StyledHeader.SocialLogo src={twitter_logo} />
                        <StyledHeader.SocialLogo src={facebook_logo} />
                        <StyledHeader.SocialLogo src={linkedin_logo} />
                    </StyledHeader.SocialsWrapper>
                </StyledHeader.Items>
            </StyledHeader.Wrapper>
        </>
    );
}

export default Header;
