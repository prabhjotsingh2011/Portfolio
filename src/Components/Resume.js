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

                    <SmallTitle icon={Businessicon} title={'work Experience'} />
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
                    <ResumeItem
                        year={'2015-2020'}
                        title={'Computer Science'}
                        subtitle={'sussex university'}
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, libero odit! Quibusdam consequatur officiis similique quae illo ipsum molestiae soluta!'}
                    />

                </div>
                <div className="small-title">

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

                </div>
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
