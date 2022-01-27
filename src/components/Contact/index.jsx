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
    StyledButton,
    Title
} from './styles'


function Contact() {
    return (
        <>
            <ContactWrapper>
                <Info>
                    <Title>Nous contacter</Title>
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
                        <StyledButton type="submit" value="Soumettre" />
                    </ContactForm>
                </FormWrapper>
            </ContactWrapper>
        </>
    );
}

export default Contact;
