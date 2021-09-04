import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts'
import Title from './Title';
import ServiceCard from './ServiceCard';
import design from '../images/design.svg';
import intelligence from '../images/intelligence.svg';
import gamedev from '../images/game-dev.svg';



function ServicesSection() {

    return (
        <InnerLayout>
            <ServicesSectionStyled>
            
                <Title title={'Services'} span={'Services'}/>
                
                <div className="services">
               
                    <ServiceCard
                     image={design} 
                     title={'Front-end Development'} 
                     paragraph={'Creative and Innovative Front End Developer. Proficient in HTML, CSS, JavaScript along with their modern libraries and frameworks like Bootstrap, Tailwind CSS '}

                     />
                    <ServiceCard
                     image={intelligence} 
                     title={'Back-End Development'} 
                     paragraph={'Good knowledge over backend languages and frame work like NODE and express, even worked with MongoDB. Knowldge of creating RESTfull APIs. '}

                     />
                    <ServiceCard
                     image={gamedev} 
                     title={'Native APP Development'} 
                     paragraph={"In the learning phase of native app development. Recently started with react native for development. Soon I'll be working in a project"}

                     />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}
const ServicesSectionStyled=styled.section`
    .services{
        display: flex;
  
        /* height: fit-content; */
        /* justify-content: space-between; */
    }
`;
export default ServicesSection
