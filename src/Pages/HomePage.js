import React from 'react'
import styled from 'styled-components';
import ParticleBackground from '../Components/ParticleBackground';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutueIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Icon } from '@iconify/react';



function HomePage() {
    return (
        <HomePageStyled>
            <div className="p-particle-js">
                <ParticleBackground />
            </div>
            <div className="typography">
                <h1>Hi I'm <span>Prabhjot </span></h1>
                <p>I am a full stack web developer with more
                    than 800 hours of building in MERN stack and 2 star CODECHEF Coder. Maintaining and
                    deployed 3 major and  6+ minor projects. I can adapt onto any
                    technology rapidly making myself flexible upon
                    any tech stack. A passionate, disciplined person
                    who wants to learn continuously.
                    
                    
                    </p>
                <div className="icons">
                    {/* <a href="#" className="icon i-facebook"><FacebookIcon /></a> */}
                    <a href="https://www.linkedin.com/in/prabhjot-singh-5a5b241b9/" className="icon i-LinkedIn"><LinkedInIcon /></a>
                    <a href="https://github.com/prabhjotsingh2011" className="icon i-github"><GithubIcon /></a>
                    {/* <a href="#" className="icon i-youtube"><YoutueIcon /></a> */}
                    <a href="https://www.codechef.com/users/prabhjot_2011" className="icon i-codechef"><Icon icon="simple-icons:codechef" inline={true} /></a>

                    <a href="#" className=""></a>
                </div>
            </div>
        </HomePageStyled>
    )
}


const HomePageStyled = styled.header`
    width: 100%; 
    height: 100vh;
     position: relative;
     @media screen and (max-width:563px){
         h1,span{
             font-size: 3rem;
         }
         p{
             font-size: 1rem;
         }
     }
     @media screen and (max-width:417px){
        h1,span{
             font-size: 2rem;
         }
         p{
             font-size: .7rem;
         }
         
     }
/* 
    .p-particle-js{
        position: absolute;
        top: 0;
        left: 0;
    } */
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 1rem;


            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color:var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                    

                }
            }
            .i-youtube{
                &:hover{
                    border: 2px solid var(--primary-color);
                    color:red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid var(--primary-color);
                    color:grey;
                }
            }
        }

    }

   
`;
export default HomePage
