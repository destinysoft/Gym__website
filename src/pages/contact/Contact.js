import React from 'react'
import Header from '../../components/Header';
import HeaderImage from "../../images/vignette_003.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import './Contact.css'

const Contact = () => {
  return (
    <>
    <Header title='Get in Touch'  image={HeaderImage} >
      Address:57 Nosa Edugie Street off Mtn Mast Road, Ugbor Benin City, Edo State.  
    </Header>
    <section className='contact'>
        <div className='container contact__container'>
        <div className='contact__wrapper'>
            <a 
               href="mailto:destinyosamudiamen96@gmail.com"
               target="__blank"
               rel="noreferrer noopener"  >
              <MdEmail/>
            </a>
            
            <a
                href="http://m.me/destinyblack155"
                target="__blank"
                rel="noreferrer noopener" >
                <BsMessenger/>
            </a>

            <a
              href="https://wa.me/+2347051085315"
              target="__blank"
              rel="noreferrer noopener" >
              <IoLogoWhatsapp/>
            </a>
        </div>
        </div>
    </section>
    </>
  )
}

export default Contact;