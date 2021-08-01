import React from 'react'
import styled from 'styled-components';
import resume from '../images/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="" />
            </div>
            <div className="right-content">

                    <h4>I am <span>Lorem Ipsome </span></h4>
               
                <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque reiciendis nam, tenetur, minima enim quasi, in fugiat delectus vel itaque assumenda eius incidunt amet totam culpa? Maiores earum officia facilis error unde omnis.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>:Lorem Ipsum</p>
                        <p>356</p>
                        <p>Indian</p>
                        <p>Hindi,English,Punjabi</p>
                        <p>Punjab,India</p>
                        <p>Freelance</p>
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
