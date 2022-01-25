import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const StyledHeader = {
    Wrapper: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.063rem 6.75rem;

        @media only screen and (max-width: 40em) {
            position: fixed;
            width: 100vw;
            top: 0;

            justify-content: unset;

            padding: 0.5rem 5.438rem;
          }

`,

    Items: styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;

        @media only screen and (max-width: 40rem) {
            position: fixed;
            left: 0;
            top: 3.125rem;
            
            height: 100vh;
      
            flex-direction: column;
            justify-content: space-between;

            transition: 0.2s ease-out;

            transform: ${({ openDrawer }) =>
            openDrawer ? `translateX(0)` : `translateX(-100%)`};
    }
`,

    Logo: styled.img`
        @media screen and (max-width: 40rem) {
            flex: 1;
            width: 146px; 
        }
`,


    LinksWrapper: styled.div`
        display: flex;
        margin-right: 3.938rem;

        @media only screen and (max-width: 40rem) {
            margin: 0;

            flex-direction: column;
        }
`,

    Link: styled(NavLink)`
        &:not(:last-child) {
            margin-right: 2rem;
        }

        color: #121212;
        font-family: 'Helvetica', 'Arial', sans-serif;
        font-size: 1rem;
        font-weight: 100;
        line-height: 100%;
        text-decoration: none;

        &.active {
            color: #004489;
        }

        @media only screen and (max-width: 40rem) {
            margin: 0;
            padding-left: 1rem;
            
            &:not(:last-child) {
                padding-bottom: 2.125rem;
                padding-top: 2rem;
                margin-right: 0;
            }
        }
`,

    SocialsWrapper: styled.div`
        
`,

    SocialLogo: styled.img`
        &:not(:last-child) {
            padding-right: 0.75rem;
        }
`,

    HamburgerButton: styled.img`
        display: none;

        @media screen and (max-width: 40rem) {
            display: block;

            position: relative;

            top: -25%;
            left: -25%;
        }
`,
    CloseButton: styled.img`
        display: none;

        @media screen and (max-width: 40rem) {
            display: block;

            position: relative;

            top: -25%;
            left: -25%;
        }
`
}

export {
    StyledHeader
}

