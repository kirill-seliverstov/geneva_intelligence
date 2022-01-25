import styled from 'styled-components';

const StyledFooter = {
    Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    position: fixed;
    bottom: 0;
`,

    SocialsWrapper: styled.div`
    display: flex;  
`,

    SocialLogo: styled.img`
    &:not(:last-child) {
        padding-right: 0.75rem;
    }
`,

    Copyright: styled.p`
    font-family: 'Helvetica', 'Arial', sans-serif;  
    font-size: 0.875rem;
    line-height: 100%;
    text-align: center;
    letter-spacing: 0.2px;
`
}

export {
    StyledFooter
}