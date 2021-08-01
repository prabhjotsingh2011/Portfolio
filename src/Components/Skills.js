import React from 'react'
import styled from 'styled-components';
import { MainLayout,InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';
function Skills() {
    return (
        <SkillsStyled>
           
                <Title title={'my skills'} span={'resume'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar
                            title={'HTML 5'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar
                            title={'CSS'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar
                            title={'JAVASCRIPT'}
                            width={'50%'}
                            text={'50%'}
                        />
                        <ProgressBar
                            title={'React'}
                            width={'40%'}
                            text={'40%'}
                        />
                        <ProgressBar
                            title={'Bootstrap'}
                            width={'70%'}
                            text={'70%'}
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
