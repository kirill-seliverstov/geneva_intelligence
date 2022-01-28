import React from 'react';

import {
    ContactForm,
    ContactWrapper,
    FormWrapper,
    Info,
    Paragraph,
    StyledInput,
    ContactType,
    StyledTextArea,
    StyledButton
} from './styles'

import Title from '../Title';

function Contact() {
    return (
        <>
            <ContactWrapper>
                <Info>
                    <Title left='0' top='4.75rem'>Nous <span style={{fontWeight: "700"}}>contacter</span></Title>
                    <Paragraph>
                        <ContactType>Phone:</ContactType> +41 22 552 46 52
                    </Paragraph>
                    <Paragraph>
                        <ContactType>Email:</ContactType> contact@geneva-intelligence.ch
                    </Paragraph>
                    <Paragraph>
                        <ContactType>Address:</ContactType> Case postale 75, 1211 Genève 12
                    </Paragraph>
                </Info>

                <FormWrapper>
                    <ContactForm onSubmit={(e) => { e.preventDefault() }}>
                        <StyledInput type="text" placeholder="Name" />
                        <StyledInput type="email" placeholder="Email" />
                        <StyledInput type="text" placeholder="Sujet" />
                        <StyledTextArea placeholder="Message" />
                        <StyledButton>Soumettre</StyledButton>
                </ContactForm>
            </FormWrapper>
        </ContactWrapper>
        </>
    );
}

export default Contact;
