import React from 'react';

import {
    Description,
    HomepageTitle,
    Info,
    InfoItems,
    InfoLink,
    StyledLink,
    StyledImg
} from './styles'

import info_cubes from '../../assets/images/info_cubes.png'

import { ArrowSVG } from '../../assets/svg/Arrow';

function Homepage() {
    return (
        <>
            <HomepageTitle>
                <p>Nous <span style={{ fontWeight: 'bold' }}>accompagnons votre stratégie de différenciation</span> et votre positionnement</p>
            </HomepageTitle>
            <Info>
                <Description textAlign={"center"}>
                    Spécialisé en <span style={{ fontWeight: "bold" }}>Market Intelligence et la Competitive Intelligence</span>,
                    Geneva Intelligence réalise des missions pour vous démarquer
                    de vos concurrents et pour renforcer votre développement
                    économique et territorial. Nous vous conseillons pour vous
                    permettre de prendre les bonnes décisions dans votre environnement
                    en Suisse et à l’international.
                </Description>
                <InfoItems>
                    <StyledImg src={info_cubes} />

                    <StyledLink to="/services">
                        <InfoLink>
                            Nos services et metodologies
                            <ArrowSVG marginLeft='2rem'/>
                        </InfoLink>
                    </StyledLink>

                </InfoItems>
            </Info>
        </>
    );
}

export default Homepage;
