import React from 'react'
import { InnerLayout, MainLayout } from '../styles/Layouts'
import Title from '../Components/Title';
import styled from 'styled-components';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from './ResumeItem';
function Resume() {
    const Businessicon = <BusinessCenterIcon />
    const School = <SchoolIcon />
    return (

        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">

                    <SmallTitle icon={Businessicon} title={'Educational Qualification'} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'2020-2024'}
                        title={'Chandigarh University'}
                        subtitle={'B.E  CSE                       - 8.32 CGPA'}
                        text={"Currently persuing my Bachelor's of Engineering Degree from Chandigarh university. Recently got promoted to 3rd semester with 8.32 CGPA in 1st year (8.43 SGPA in 3rd semester)"}
                    />
                    <ResumeItem
                        year={'2019-2020'}
                        title={'TATA D.A.V School,Bhelatand'}
                        subtitle={'Intermediate - 79 %'}
                        text={'Completed my 12th from TATA D.A.V school, Bhelatand in the year 2019-20 with total score of 79 %, with heighest of 91 marks in computer subject '}
                    />
                    <ResumeItem
                        year={'2017-2018'}
                        title={"Holy Mother's School"}
                        subtitle={'Matriculation examination - 87 %'}
                        text={"Got my SSC in the year 2018 from Holy mother's school,Pradhankhanta, Fulwar with a total score of 87 %. There i participated in lot's of math and computer olympiad "}
                    />
                    {/* <ResumeItem
                        year={'2015-2020'}
                        title={'Computer Science'}
                        subtitle={'sussex university'}
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, libero odit! Quibusdam consequatur officiis similique quae illo ipsum molestiae soluta!'}
                    /> */}

                </div>
                {/* <div className="small-title">

                    <SmallTitle icon={School} title={'work Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'2015-2020'}
                        title={'Computer Science'}
                        subtitle={'sussex university'}
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, libero odit! Quibusdam consequatur officiis similique quae illo ipsum molestiae soluta!'}
                    />
                    <ResumeItem
                        year={'2015-2020'}
                        title={'Computer Science'}
                        subtitle={'sussex university'}
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, libero odit! Quibusdam consequatur officiis similique quae illo ipsum molestiae soluta!'}
                    />
                    <ResumeItem
                        year={'2015-2020'}
                        title={'Computer Science'}
                        subtitle={'sussex university'}
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, libero odit! Quibusdam consequatur officiis similique quae illo ipsum molestiae soluta!'}
                    />
                    <div className="u-margin-bottom">

                        <ResumeItem
                            year={'2015-2020'}
                            title={'Computer Science'}
                            subtitle={'sussex university'}
                            text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, libero odit! Quibusdam consequatur officiis similique quae illo ipsum molestiae soluta!'}
                        />
                    </div>

                </div> */}
            </InnerLayout>
        </ResumeStyled>

    )
}
const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 2rem;
    }
    .resume-content{
        border-left: 4px solid var(--border-color);
      
    }
`;

export default Resume
