import React from 'react'
import styled from 'styled-components';

function ResumeItem({ year, title, subtitle, text }) {
    return (
        <ResumeItemStyled>
            <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subtitle}</h6>
                <p>{text}</p>
            </div>
        </ResumeItemStyled>
    )
}
const ResumeItemStyled = styled.section`
    display: flex;
   margin-bottom: 10rem;

    .left-content{
        width:50%;
        padding-left: 20px;
        position: relative;
        &::before{
            content: '';
            position: absolute;
            left:-12px;
            top: 5px;
            height: 17px;   
            width: 17px;
            border-radius: 50%;
            border: 2px solid var(--border-color);
            background-color: var(--white-color);
            margin-top: .5rem;
        }
        p{
            display: inline-block;
            padding-top: .5rem;
        }
    }
    .right-content{
        padding-left: 5rem;

        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: 0px;
            top: 21px;
            height: 6px;
            width: 3rem;
            background-color: var(--border-color);
        }
        h5{
            color: var(--primary-color);
            font-size: 2.3rem;
            padding-bottom:.4rem ;
        }
        h6{
            padding-bottom: .6rem;
            font-size: 1.4rem;
        }
    }
`;

export default ResumeItem
