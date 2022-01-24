import styled from 'styled-components';

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SocialNetworksWrapper = styled.div`
    display: flex;  
`

const SocialNetworkLogo = styled.img`
    &:not(:last-child) {
        padding-right: 0.75rem;
    }
`

const Copyright = styled.p`
    font-family: 'Helvetica', 'Arial', sans-serif;  
    font-size: 0.875rem;
    line-height: 100%;
    text-align: center;
    letter-spacing: 0.2px;
`

export {
    SocialNetworksWrapper,
    SocialNetworkLogo,
    FooterWrapper,
    Copyright
}