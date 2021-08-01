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
                     title={'Web Design'} 
                     paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quisquam sunt ipsam eum? Exercitationem iste ullam nisi optio praesentium earum!'}

                     />
                    <ServiceCard
                     image={intelligence} 
                     title={'artifitial intellligence'} 
                     paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quisquam sunt ipsam eum? Exercitationem iste ullam nisi optio praesentium earum!'}

                     />
                    <ServiceCard
                     image={gamedev} 
                     title={'Game Development'} 
                     paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quisquam sunt ipsam eum? Exercitationem iste ullam nisi optio praesentium earum!'}

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
