import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.063rem 6.75rem;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Logo = styled.img`
    
`

const LinksWrapper = styled.div`
    display: flex;
    margin-right: 3.938rem;
`

const StyledLink = styled(NavLink)`
    &:not(:last-child) {
        margin-right: 2rem;
    }
    color: #121212;
    font-family: 'Helvetica', 'Arial', sans-serif;
    font-size: 16px;
    line-height: 100%;
    text-decoration: none;
    &.active {
        color: #004489;
}
`

const SocialNetworksWrapper = styled.div`
    display: flex;
    justify-content: space-between;  
`
const SocialLogo = styled.div`
    &:not(:last-child) {
        margin-right: 0.75rem;
    }
`


export {
    HeaderWrapper,
    Logo,
    LinksWrapper,
    StyledLink,
    SocialNetworksWrapper,
    Wrapper,
    SocialLogo
}

