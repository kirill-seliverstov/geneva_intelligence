import styled from "styled-components";


const StyledTitle = styled.div`
    position: absolute;
    width: 50%;
    left: ${props => props.left};
    top: ${props => props.top};

    padding: 1.25rem 0 1.25rem 6.75rem;

    font-size: 44px;
    line-height: 100%;
    letter-spacing: 0.15px;

    background: #83A8EF;
`


export {
    StyledTitle
}