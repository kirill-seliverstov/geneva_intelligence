import styled from "styled-components/macro";

import Button from "@mui/material/Button"

import Title from "../Title";

const ContactWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;

    @media screen and (max-width: 40rem) {
        flex-direction: column;
    }
`

const Info = styled.div`
    flex: 1;
    margin-top: 13.75rem;
    margin-left: 6.75rem;

    @media screen and (max-width: 75rem) {
        margin-left: 2rem;
    }

    @media screen and (max-width: 40rem) {
        margin-top: 13.75rem;
        margin-left: 1rem;
        margin-right: 1rem;
    }
`

const Paragraph = styled.p`
    font-size: 1.125rem;
    line-height: 1.3rem;
    letter-spacing: 0.01rem;

    color: #121212;

    &:not(:last-child) {
        margin-bottom: 1.75rem;
    }
`

const ContactType = styled.span`
    font-weight: bold;
    line-height: 1.125rem;
`

const FormWrapper = styled.div`
    background: #003870;
    flex: 1;

    @media screen and (max-width: 40rem) {
        margin-top: 2rem;
    }
`

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;

    max-width: 50%;

    margin: 5rem 11.7rem 5rem 7.5rem;

    @media screen and (max-width: 75rem) {
        margin: 3rem;
    }

    @media screen and (max-width: 40rem) {
        max-width: unset;
        margin: 2rem;
    }
`

const StyledInput = styled.input`
    padding: 0.875rem 0.75rem;
    margin-bottom: 1.75rem;

    font-size: 1rem;
    line-height: 100%;

    background: inherit;

    border: 1px solid #33608D;
    color: #ffffff;

    &::placeholder {
        color: #ffffff;
    }
`

const StyledTextArea = styled.textarea`
    height: 12.9rem;
    padding: 0.875rem 0.75rem;
    margin-bottom: 1.75rem;

    font-size: 1rem;
    line-height: 100%;

    background: inherit;

    border: 1px solid #33608D;
    color: #ffffff;

    &::placeholder {
        color: #ffffff;
    }

    resize: none;
`

const StyledButton = styled(Button)`
    &.MuiButton-root {
        width: 9.75rem;
        border: 1px solid #33608D;
        padding: 0.875rem 0.75rem;
        border-radius: 0;
        color: #ffffff;
        text-transform: none;
        align-self: flex-end;
}`

export {
    ContactWrapper,
    Info,
    Paragraph,
    FormWrapper,
    ContactForm,
    StyledInput,
    ContactType,
    StyledTextArea,
    StyledButton
};
