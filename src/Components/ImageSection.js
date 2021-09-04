import React from 'react'
import styled from 'styled-components';
import resume from '../images/resume.jpeg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="" />
            </div>
            <div className="right-content">

                    <h4>I am <span>Prabhjot </span></h4>
               
                <p className="paragraph">
                Innovative optimized solution seeker, Problem solver. Proficient in C/C++. TECH stack : MERN . Excited to be at the deployment phase of my new career as a web developer.  I can adapt onto any
                    technology rapidly making myself flexible upon
                    any tech stack. A passionate, diligent person
                    who wants to learn continuously.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Open to</p>
                    </div>
                    <div className="info">
                        <p>Prabhjot Singh</p>
                        <p>18</p>
                        <p>Indian</p>
                        <p>Hindi,English,Punjabi</p>
                        <p>sunny enclave,Mohali,Punjab  </p>
                        <p> work</p>
                    </div>
                </div>
                <PrimaryButton title={"download CV"}/>
            </div>
 
        </ImageSectionStyled>
    )
}
const ImageSectionStyled=styled.div`
    display:flex;
    margin-top:5rem;
    @media screen and (max-width:1200px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        /* height: 90vh; */
        img{
           width: 27rem;
           height:100%;
           object-fit: cover;
        }
            
        margin-right:2rem ;
       
    }
    .right-content{
        h4{
            font-size:2rem;
            color:var(--white-color);
            span{
                font-size:2rem;
            }
        }
        .paragraph{
            padding:1rem 0;

        }
        .about-info{
            padding-bottom:1.4rem;
            display:flex;
            .info-title{
                padding-right:8rem;
                p{
                    font-weight:900;
                }
            }
            .info-title, .info{
                p{

                    padding:.3rem 0;
                }
            }
        }
    }

`;

export default ImageSection
