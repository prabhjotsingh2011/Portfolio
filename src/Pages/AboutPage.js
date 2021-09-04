import React from 'react'
import { MainLayout } from '../styles/Layouts';
import styled from 'styled-components';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import ServicesSection from '../Components/ServicesSection';
import ReviewSection from '../Components/ReviewSection';

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'About Me'} span={'About Me'}/>
                <ImageSection/>
                <ServicesSection/>
                {/* <ReviewSection/> */}
            </AboutStyled>

        </MainLayout>
    )
}
const AboutStyled = styled.section`

`;
export default AboutPage
