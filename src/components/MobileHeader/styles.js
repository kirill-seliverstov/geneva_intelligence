import styled from "styled-components";

import { NavLink } from "react-router-dom";

const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem 1.125rem;

    background-color: #ffffff;

    z-index: 9999;
`

const Toggle = styled.div`
    position: absolute;
    left: 1.125rem;

    cursor: pointer;
`

const StyledImg = styled.img`

`

const Navigation = styled.div`
    height: 100%;
    width: 30%;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    padding: 1.125rem 0 1.5rem 1rem;
    
    position: fixed;
    left: 0;
    top: 0;
    
    background-color: white;

    z-index: 39;
    
    transition: 0.2s;
    transform: ${props => props.menuActive ? `translateX(0)` : `translateX(-100%)`};

    @media screen and (max-width: 40rem) {
        width: 70%;
    }
`

const StyledList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

    margin-top: 3.125rem;
`

const StyledLi = styled.li`
    :not(:last-child) {
        margin-bottom: 2rem;
    }
`

const StyledLink = styled(NavLink)`
    &:not(:last-child) {
        margin-bottom: 2rem;
    }

    color: #121212;

    font-size: 1rem;
    line-height: 100%;
    text-decoration: none;

    &.active {
        color: #004489;
    }
`

const SocialsWrapper = styled.div`
    display: flex;

    margin-bottom: 2rem;
`

const SocialLogo = styled.div`
    :not(:last-child) {
        margin-right: 12px;
    }
`

export {
    Toggle,
    HeaderWrapper,
    StyledImg,
    Navigation,
    StyledList,
    StyledLink,
    SocialsWrapper,
    SocialLogo,
    StyledLi
}