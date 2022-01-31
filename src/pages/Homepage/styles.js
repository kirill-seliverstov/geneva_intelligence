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

    margin: ${props => props.margin};
    padding: ${props => props.padding}
`

const Description = styled.p`
    font-size: 1.5rem;

    line-height: ${props => props.lineHeight || '150%'};

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

const InfoButton = styled.div`
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
    margin: ${props => props.margin};
    margin-right: ${props => props.marginRight};
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
    align-items: flex-start;
    justify-content: space-between;

    height: 25.25rem;
    
    margin-top: 4.75rem;
    
`

const StaffItem = styled.div`
    text-align: center;
    background-color: #ffffff;
    width: 27%;
    height: 100%;
    padding: 0 1.875rem;

    :not(:last-child){
        margin-right: 1.5rem;
    }
`

const StaffImg = styled(StyledImg)`
    margin-right: 0;
    margin-bottom: 0;
    max-width: 12.5rem;
    align-self: center;
    margin-top: 2.75rem;
`

const StaffName = styled.p`
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2rem;

    margin: 2rem 0 1rem 0;
    white-space: nowrap;
`

const StaffPosition = styled.p`
    font-size: 1rem;
    line-height: 150%;

    color: #597EC7;
`

const OurValues = styled.div`
    position: relative;

    background-color: #f7f7f7;

    padding: 3.25rem 4.5rem 5.2rem;
    background: #f7f7f7;

    text-align: center;
`

const OurValuesTitle = styled.p`
    font-size: 44px;
    line-height: 100%;

    margin-bottom: 2rem;
`

const OurValuesQuote = styled.p`
    font-size: 36px;
    line-height: 140%;
`

const OurValuesElement = styled.div`
    position: absolute;
    bottom: -2.2rem;
    right: 0;

    background-color: #83A8EF;

    width: 33%;
    height: 70px;
`

const Values = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 3rem 1.5rem;

    margin-top: 6rem;
    margin-bottom: 3rem;
`

const ValueItem = styled.div`
    display: flex;
    align-items: center;
`

const ValueImg = styled(StyledImg)`
    max-width: 9.375rem;
`

const ValueName = styled.p`
    font-weight: bold;
    font-size: 2.75rem;
    line-height: 100%;
    letter-spacing: -0.063rem;

    margin-bottom: 0.75rem;
`

const ValueDesc = styled.p`
    font-size: 1.125rem;
    line-height: 100%;
`

const BlogWrapper = styled.div`
    position: relative;
    margin: 16.5rem 0 2.5rem;
    display: flex;
    flex-direction: column;
`

const ArticlesWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    margin: 0 6.75rem;
`

const Article = styled.div`
    width: 27%;

    padding: 12.5rem 1.5rem 2rem;

    background-color: #83A8EF;
`

const ArticleDate = styled.p`
    font-size: 0.875rem;
    line-height: 1.125rem;
    
    letter-spacing: 0.013rem;

    color: #FFFFFF;
    margin-bottom: 0.5rem;
`

const ArticleName = styled.p`
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 150%;

    letter-spacing: -0.044rem;

    color: #FFFFFF;

    margin-bottom: 1.125rem;

`

const ArticleLink = styled(NavLink)`
    font-size: 0.875rem;
    line-height: 100%;

    letter-spacing: 0.009rem;
    color: #FFFFFF;
    text-decoration: none;
`

const BlogButton = styled(InfoButton)`
    max-width: 250px;

    border: none;
`

const BlogLink = styled(StyledLink)`
    align-self: flex-end;

    margin-top: 2rem;
    margin-right: 6.75rem;
`

export {
    HomepageTitle,
    Info,
    Description,
    InfoItems,
    InfoButton,
    StyledLink,
    StyledImg,
    Propos,
    Container,
    TeamWrapper,
    StaffWrapper,
    StaffItem,
    StaffName,
    StaffPosition,
    StaffImg,
    OurValues,
    OurValuesTitle,
    OurValuesQuote,
    OurValuesElement,
    Values,
    ValueImg,
    ValueName,
    ValueDesc,
    ValueItem,
    BlogWrapper,
    Article,
    ArticleDate,
    ArticleName,
    ArticleLink,
    ArticlesWrapper,
    BlogButton,
    BlogLink
}