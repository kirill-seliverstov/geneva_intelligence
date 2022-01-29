import React from 'react';

import {
    Description,
    HomepageTitle,
    Info,
    InfoItems,
    InfoLink,
    StyledLink,
    StyledImg,
    Propos,
    Container,
    TeamWrapper,
    StaffWrapper,
    StaffItem
} from './styles'

import infoCubes from '../../assets/images/info_cubes.png';
import proposImage from '../../assets/images/proposImage.png';
import firstWorkerIMG from '../../assets/images/firstWorker.png';
import secondWorkerIMG from '../../assets/images/secondWorker.png';
import thirdWorkerIMG from '../../assets/images/thirdWorker.png';


import { ArrowSVG } from '../../assets/svg/Arrow';

import Title from '../../components/Title';

function Homepage() {
    const Staff = [
        {
            name: 'Philippe Van Lotringen',
            position: 'Consultant, Texte en quelques lignes',
            image: firstWorkerIMG,
        },
        {
            name: 'Jocerand Dutoit',
            position: 'Strategic Studies, Monitoring Division Manager',
            image: secondWorkerIMG,
        },
        {
            name: 'Philippe Van Lotringen',
            position: 'Co founder & Compliance, Risks & Investigations Division Manager',
            image: thirdWorkerIMG,
        },

    ]

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
                    <StyledImg src={infoCubes} marginRight='3.3rem' />

                    <StyledLink to="/services">
                        <InfoLink>
                            Nos services et metodologies
                            <ArrowSVG marginLeft='2rem' />
                        </InfoLink>
                    </StyledLink>
                </InfoItems>
            </Info>

            <Container>
                <Propos>
                    <Title left='0' top='-8rem'>
                        A <span style={{ fontWeight: 'bold' }}>propos</span>
                    </Title>
                    <Description marginRight='13.25rem'>
                        Geneva Intelligence est un <span style={{ fontWeight: 'bold' }}>cabinet indépendant de conseils</span>,
                        spécialisé en stratégie d'entreprise et en renseignements
                        d’affaires établi à Genève en Suisse depuis 2013.
                        Geneva Intelligence fournit une meilleure compréhension
                        et maîtrise de son environnement et de la concurrence,
                        un accompagnement en matière de développement international
                        ainsi qu'une aide dans la gestion des risques et de l’e-réputation.
                        Afin d’améliorer continuellement la qualité des services pour
                        ses clients, le cabinet a bâti un réseau de partenaires incluant
                        des éditeurs de logiciels, des institutions académiques mais
                        également des chambres de commerce. Actif en Suisse et à
                        l'international, le cabinet accompagne les entreprises,
                        que ce soient des start-ups, des PME ou des grands groupes
                        ainsi que des organisations internationales et des institutions
                        publiques dans une quinzaine de secteurs d’activités.
                    </Description>
                    <StyledImg src={proposImage} marginBottom='9rem' />
                </Propos>
            </Container>

            <Container bgColor='#f7f7f7'>
                <Title left='0' top='-5.2rem'>L'<span style={{ fontWeight: 'bold' }}>équipe</span></Title>
                <TeamWrapper>
                    <Description marginRight='13.25rem'>
                        Notre équipe est flexible, dynamique et hautement expérimentée.
                        Nos consultants sont issus de formations dans les domaines juridique,
                        économique, politique ainsi que des relations internationales permettant
                        une approche pluridisciplinaire et une adaptation à tous les secteurs
                        d’activité et problématiques. Tous nos consultants sont néanmoins
                        spécialisés en sciences de l’information et en intelligence économique.
                    </Description>
                    <StaffWrapper>
                        {Staff.map((element, index) => {
                            return (
                                <StaffItem key={index}>
                                    <StyledImg src={element.image}/>
                                    <p>{element.name}</p>
                                    <p>{element.position}</p>
                                </StaffItem>
                            )
                        })}
                    </StaffWrapper>
                </TeamWrapper>
            </Container>
        </>
    );
}

export default Homepage;
