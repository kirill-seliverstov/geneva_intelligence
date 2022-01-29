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

const Container = styled.div`
    position: relative;

    background-color: ${props => props.bgColor};
`

const Description = styled.p`
    font-size: 1.5rem;

    line-height: 200%;

    text-align: ${props => props.textAlign || 'unset'};
    color: #121212;

    margin-right: ${props => props.marginRight || '0'};
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
    padding: 1.5rem;

    border: 1px solid #121212;
    box-sizing: border-box;

    text-decoration: none;
`

const StyledImg = styled.img`
    margin-right: ${props => props.marginRight || '0'};
    margin-bottom: ${props => props.marginBottom || '0'};
`

const Propos = styled.div`
    margin: 16rem 6.75rem 0rem 6.75rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TeamWrapper = styled.div`
    padding: 2rem 6.75rem;
`

const StaffWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

`

const StaffItem = styled.div`
    text-align: center;

    background-color: #ffffff;

    width: 27%;

    :not(:last-child){
        margin-right: 1.5rem;
    }

    
`



export {
    HomepageTitle,
    Info,
    Description,
    InfoItems,
    InfoLink,
    StyledLink,
    StyledImg,
    Propos,
    Container,
    TeamWrapper,
    StaffWrapper,
    StaffItem
}