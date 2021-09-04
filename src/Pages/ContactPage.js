import React from 'react'
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';
function ContactPage() {


    const Phone = <PhoneIcon />
    const Email = <EmailIcon />
    const Location = <LocationOnIcon />


    return (
        <MainLayout>
            <Title title={'Contact me'} span={'Contact me'} />
            <InnerLayout >
                <ContactPageStyled>
            <div className="contact-section">
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>Get In Touch</h4>
                        </div>
                        <form action="" className="form">
                            <div className="form-field">
                                <label htmlFor="name" >Enter Your Name</label>
                                <input type="text" id="name" />

                            </div>
                            <div className="form-field">
                                <label htmlFor="email" >Enter Your email</label>
                                <input type="text" id="email" />

                            </div>
                            <div className="form-field">
                                <label htmlFor="conatct" >Enter Your conatct</label>
                                <input type="text" id="conatct" />

                            </div>
                            <div className="form-field">
                                <label htmlFor="message" >Enter Your message</label>
                                <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>

                            </div>
                            <div className="form-field">
                                <PrimaryButton title={'Send Email'} />

                            </div>
                        </form>
                    </div>
                    <div className="right-content">
                        <ContactItem
                            icon={Phone}
                            title={'Phone'}
                            contact1={'+91-7004335954'}
                            contact2={''}
                        />
                        <ContactItem
                            icon={Email}
                            title={'Email'}
                            contact1={'psingh20112002@gmail.com'}
                            contact2={''}
                        />
                        <ContactItem
                            icon={Location}
                            title={'Location'}
                            contact1={'#25 sunny enclave'}
                            contact2={'Kharar, Mohali, Punjab'}
                        />
                    </div>
            </div>
                </ContactPageStyled>
            </InnerLayout>
        </MainLayout>
    )
}
const ContactPageStyled = styled.div`
    .contact-section{
        display: grid;
        grid-column-gap: 2rem;
        grid-template-columns: repeat(2, 1fr);
        .right-content{
            display: flex;
            justify-content: ;
            flex-direction: column;
        }
    }
    .contact-title{
        h4{
            color: var(--white-color);
            padding: 1rem 0;
            font-size: 1.8rem;
        }
    }
        .form{
            
            width: 100%;
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -24px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding: .4rem .5rem;
                    color: inherit;
                }
                input{
                    border:1px solid var(--border-color);
                    outline: none;
                    background-color:transparent;
                    height:60px;
                    padding:25px 15px 3px 15px;
                    width: 100%;
                    color: inherit;
                    font-size: 23px;
                }
                textarea{
                    background-color: transparent;
                    border:1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;

                }
            }
        }
    
`;
export default ContactPage
