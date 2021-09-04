import React from 'react'
import styled from 'styled-components';
import GitHub from '@material-ui/icons/GitHub'
import Pinterest from '@material-ui/icons/Pinterest'

function Menu({menuItem}) {
    return (
        <MenuItemStyled >
            {
                menuItem.map((item)=>{
                    return <div className="grid-item" key={item.id}>
                        <div className="portfolio-content">
                            <div className="portfolio-image">
                                <img src={item.image} alt=""/>
                                <ul>
                                    <li>
                                        <a href={item.link1} target="_blank">
                                            <GitHub />
                                        </a>
                                    </li>
                                    {/* <li>
                                        <a href={item.link2}>
                                            <Pinterest />
                                        </a>
                                    </li> */}
                                </ul>
                            </div>
                            <h6>{item.title}</h6>
                            <p>{item.text}</p>
                        </div>
                    </div>
                })
            }
        </MenuItemStyled>
    )
}
const MenuItemStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    .grid-item{
        .portfolio-content{
            display: block;
            position: relative;
            h6{
                font-size: 1.5rem;
            }
            img{
                width: 100%;
                height: 30vh;
                object-fit: cover;
            }
            ul{
                display: none;
            }
            .portfolio-image{
                &::before{

                    content: "";
                    position: absolute;
                    left: 15px;
                    top: 15px;
                    transform: scale(1);
                    height:0;
                    width:0;

                }
            }
            .portfolio-image:hover{
                ul{
                   
                    position: absolute;
                    left:50%;
                    top:30%;
                    transform: translate(-50%,-50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    /* transition: all .4s ease-in-out; */
                    li{
                        background-color: var(--background-dark-color);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: .5rem;
                        padding: .5rem;
                        border-radius: 50%;
                        transition: all .4s ease-in-out;
                        a{
                            display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    &:hover{
                        color: var(--primary-color);
                    }
                    }
                    svg{
                        font-size: 2rem;
                    }
                }
                &::before{
                   
                    height: 10rem;
                    width: 16rem;
                    background-color: var(--border-color);
                    opacity: 0.5;
                    /* transform-origin: left; */
                    transition: all .4s ease-in-out;
                }
            }
        }
    }
`;
export default Menu;
