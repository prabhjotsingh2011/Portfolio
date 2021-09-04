import React from 'react'
import styled from 'styled-components';
import { MainLayout,InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';
function Skills() {
    return (
        <SkillsStyled>
           
                <Title title={'my skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar
                            title={'HTML 5'}
                            width={'95%'}
                            text={'95%'}
                        />
                        <ProgressBar
                            title={'CSS'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar
                            title={'JAVASCRIPT'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar
                            title={'C/C++'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar
                            title={'React'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar
                            title={'Bootstrap'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar
                            title={'Tailwind CSS'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar
                            title={'Node JS'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar
                            title={'Express JS'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar
                            title={'MongoDB/ Mongoose'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar
                            title={'React Native'}
                            width={'10%'}
                            text={'10%'}
                        />
                    </div>
                </InnerLayout>
            
        </SkillsStyled>
    )
}
const SkillsStyled=styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 2rem;
    }
`;
export default Skills
