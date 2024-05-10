import React from 'react';
import Header from "../../components/Header";
import HeaderImage from "../../images/hrwsa.jpg";
import { trainers } from "../../data";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Trainer from "../../components/Trainer";

import './Trainers.css'

const Trainers = () => {
  return (
   <>
   <Header title='Our Trainers'  image={HeaderImage}> 
        Get fitter, healthier and reach your goals faster with the support of our friendly,dedicated personal trainers.
   </Header>
   <section className='trainers'>
      <div className='container trainers__container'>
         {
          trainers.map(({id, image,name,socials,job}) => {
           return  <Trainer
              image={image}
              name={name}
              job={job}
              socials={[
                 {icon: <BsInstagram/>, link: socials[0] },
               	{ icon: <AiOutlineTwitter />, link: socials[1] },
								{ icon: <FaFacebookF />, link: socials[2] },
								{ icon: <FaLinkedinIn />, link: socials[3] },
              ]}
              key={id}
            />
          })
         }
      </div>
   </section>
   </>
  )
}

export default Trainers;