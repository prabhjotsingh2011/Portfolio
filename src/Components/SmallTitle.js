import React from 'react'
import styled from 'styled-components';
function SmallTitle({ icon, title }) {
    return (
        <SmallTitlestyle>
            <p>{icon}</p>
            <h3> {title}</h3>
        </SmallTitlestyle>
    )
}
const SmallTitlestyle=styled.div`
    display: flex;
    /* align-items: center */
    p{
        padding-right: 1rem;
        svg{

            font-size: 2.7rem ;
        }
    }
    h3{
        color: var(--white-color);
        font-size: 2rem ;
    }
`;
export default SmallTitle
