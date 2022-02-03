import React from 'react';

import {
    Description,
    HomepageTitle,
    Info,
    InfoItems,
    InfoButton,
    StyledLink,
    StyledImg,
    Propos,
    Container,
    TeamWrapper,
    StaffWrapper,
    StaffItem,
    StaffName,
    StaffPosition,
    StaffImg,
    OurValues,
    OurValuesTitle,
    OurValuesQuote,
    OurValuesElement,
    Values,
    ValueImg,
    ValueName,
    ValueDesc,
    ValueItem,
    BlogWrapper,
    Article,
    ArticleDate,
    ArticleName,
    ArticleLink,
    ArticlesWrapper,
    BlogButton,
    BlogLink
} from './styles'

import infoCubes from '../../assets/images/info_cubes.png';
import proposImage from '../../assets/images/proposImage.png';
import firstWorkerIMG from '../../assets/images/firstWorker.png';
import secondWorkerIMG from '../../assets/images/secondWorker.png';
import thirdWorkerIMG from '../../assets/images/thirdWorker.png';

import universalite from '../../assets/images/universalite.png';
import responsabilite from '../../assets/images/responsabilite.png';
import engagement from '../../assets/images/engagement.png';
import integrite from '../../assets/images/integrite.png';

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

    const Articles = [
        {
            date: '11. 05. 2021',
            name: 'De nouvelles prestations 4.0 à disposition des Membres CCIG',
        },
        {
            date: '11. 05. 2021',
            name: 'De nouvelles prestations 4.0 à disposition des Membres CCIG',
        },
        {
            date: '11. 05. 2021',
            name: 'De nouvelles prestations 4.0 à disposition des Membres CCIG',
        }
    ]

    return (
        <>
            <HomepageTitle>
                <p>Nous <span style={{ fontWeight: 'bold' }}>accompagnons votre stratégie de différenciation</span> et votre positionnement</p>
            </HomepageTitle>

            <Info>
                <Description textAlign={"center"} lineHeight={'200%'}>
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
                        <InfoButton>
                            Nos services et metodologies
                            <ArrowSVG marginLeft='2rem' />
                        </InfoButton>
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
                    <StyledImg src={proposImage} marginBottom='9rem' width='100%'/>
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
                                    <StaffImg src={element.image} />
                                    <StaffName>{element.name}</StaffName>
                                    <StaffPosition>{element.position}</StaffPosition>
                                </StaffItem>
                            )
                        })}
                    </StaffWrapper>
                </TeamWrapper>
            </Container>

            <Container margin={"3rem 6.75rem 0"}>
                <OurValues>
                    <OurValuesTitle>Nos <span style={{ fontWeight: 'bold' }}>Valeurs</span></OurValuesTitle>
                    <OurValuesQuote>" Ici une <span style={{ fontWeight: 'bold' }}>citation du directeur</span> ou de l'équipe, ou encore une citation qui fait du sens par rapport aux valeurs "</OurValuesQuote>
                    <OurValuesElement />
                </OurValues>

                <Values>
                    <ValueItem>
                        <ValueImg src={integrite} margin={'0 2.5rem 0 2rem'}  />
                        <div>
                            <ValueName>Intégrité</ValueName>
                            <ValueDesc>Texte à remplir ici</ValueDesc>
                        </div>
                    </ValueItem>
                    <ValueItem>
                        <ValueImg src={engagement} margin={'0 2.5rem 0 2rem'}  />
                        <div>
                            <ValueName>Engagement</ValueName>
                            <ValueDesc>Texte à remplir ici</ValueDesc>
                        </div>
                    </ValueItem>
                    <ValueItem>
                        <ValueImg src={responsabilite} margin={'0 3.125rem 0 2.625rem'} />
                        <div>
                            <ValueName>Responsabilité</ValueName>
                            <ValueDesc>Texte à remplir ici</ValueDesc>
                        </div>
                    </ValueItem>
                    <ValueItem>
                        <ValueImg src={universalite} margin={'0 3.125rem 0 2.625rem'} />
                        <div>
                            <ValueName>Universalité</ValueName>
                            <ValueDesc>Texte à remplir ici</ValueDesc>
                        </div>
                    </ValueItem>
                </Values>
            </Container>

            <BlogWrapper>
                <Title left={'0'} top={'-7.5rem'}>B<span style={{ fontWeight: 'bold' }}>log</span></Title>
                <ArticlesWrapper>
                    {Articles.map((element, index) => {
                        return (
                            <Article key={index}>
                                <ArticleDate>{element.date}</ArticleDate>
                                <ArticleName>{element.name}</ArticleName>
                                <ArticleLink to="/">Read article</ArticleLink>
                            </Article>
                        )
                    })}
                </ArticlesWrapper>
                <BlogLink to="/blog">
                    <BlogButton>
                        Read more stories
                        <ArrowSVG marginLeft='2rem' />
                    </BlogButton>
                </BlogLink>
            </BlogWrapper>
        </>
    );
}

export default Homepage;
