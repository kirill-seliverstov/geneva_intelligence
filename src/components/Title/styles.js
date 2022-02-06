import styled from "styled-components";


const StyledTitle = styled.div`
    position: absolute;
    width: 50%;
    left: ${props => props.left};
    top: ${props => props.top};
    bottom: ${props => props.bottom};

    padding: 1.25rem 0 1.25rem 6.75rem;

    font-size: 2.75rem;
    line-height: 100%;
    letter-spacing: 0.15px;

    background: #83A8EF;

    @media screen and (max-width: 75rem) {
        width: 30%;
        padding: 2rem;
        
        font-size: 2rem;
    }
`


export {
    StyledTitle
}