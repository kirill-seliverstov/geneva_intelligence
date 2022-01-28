import styled from "styled-components";

import { NavLink } from "react-router-dom";

import front_page_bg from "../../assets/images/front_page_bg.png";

const HomepageTitle = styled.div`
    font-size: 3rem;
    line-height: 150%;

    text-align: center;

    color: #ffffff;
    background: url(${front_page_bg});
    background-repeat: no-repeat;
    background-size: 100% auto;
    
    @media screen and (min-width: 1440px) {
        padding: 17.25rem 16.125rem;
    }

    @media screen and (min-width: 1024px) and (max-width: 1439px){
        font-size: 2.5rem;
        padding: 9rem 7rem;
    }
`

const Description = styled.p`
    font-size: 24px;
    line-height: 200%;

    text-align: ${props => props.textAlign || 'unset'};

    color: #121212;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 4.5rem 13.25rem 1.5rem;
`

const InfoItems = styled.div`
    display: flex;
    align-items: center;
`

const StyledLink = styled(NavLink)`
    text-decoration: none;
`

const InfoLink = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 24px;

    border: 1px solid #121212;
    box-sizing: border-box;

    text-decoration: none;
`

const StyledImg = styled.img`
    margin-right: 3.3rem;
`



export {
    HomepageTitle,
    Info,
    Description,
    InfoItems,
    InfoLink,
    StyledLink,
    StyledImg
}