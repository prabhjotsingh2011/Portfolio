import React from 'react'
import styled from 'styled-components';

function ServiceCard({image,title,paragraph}) {
    return (
        <ServiceCardStyled>
            <div className="container">
            <img src={image} alt="" />
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </ServiceCardStyled>
    )
}
const ServiceCardStyled=styled.div`
    background-color: var(--background-dark-grey);
    margin-top: 7rem;
    margin-left: 1.3rem;
    margin-right: 1.3rem;
    border-left: 3px solid var(--border-color);
    border-top: 12px solid var(--border-color);
    border-right: 3px solid var(--border-color);
    border-bottom: 3px solid var(--border-color);
    transition: all .4s ease-in-out;
    &:hover{
        border-top: 12px solid var(--primary-color);
        transform: translateY(-50px);
    }
    .container{
        padding: 2rem ;
        h4{
            color: var(--white-color);
            font-size: 1.6rem;
            padding: 1rem 0;
            position: relative;
            padding-bottom: 1rem;
            &::after{
                content: "";
                width: 8rem;
                background-color: var(--border-color);
                height: 5px ;
                position:absolute ;
                left: 0;
                bottom: 0;
                border-radius: 10px;
            }
        }
        p{
            padding: 1rem 0;

        }
    }
`;
export default ServiceCard
