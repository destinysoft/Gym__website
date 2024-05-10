import React from 'react'
import { useState } from "react";
import { testimonials } from "../data";
import SectionHead from "./SectionHead";
import { ImQuotesLeft } from "react-icons/im";
import Card from "../UI/Card";
import { IoIosArrowDropleftCircle,IoIosArrowDroprightCircle,} from "react-icons/io";

const Testimonial = () => {
    const [index, setIndex] = useState(0);
	const { name, avatar, job, quote } = testimonials[index];


    const  prevTestimonialHandle = () => {
        setIndex(prev => prev - 1);

        if(index <= 0 ) {
            setIndex(testimonials.length - 1);
        }
    }


    const nextTestimonialHandle = () => {
        setIndex(prev => prev + 1);
        
        if(index >= testimonials.length -1) {
            setIndex(0);
        }
    }

  return (
    <section className='testimonials'>
      <div className='container testimonials__container'>
        <SectionHead  icon={<ImQuotesLeft/>}   title='testimonials'  className="testimonials__head"/>
        <Card className='testimonial'>
          <div className='testimonial__avatar'>
           <img src={avatar} alt={name} />
          </div>
          <p className="testimonial__quote">{`"${quote} "`}</p>
          <h5>{name} </h5>
          <small className='testimonial__title'>{job} </small>
        </Card>
       <div className='testimonials__btn-container'>
          <button className='testimonials__btn'  onClick={prevTestimonialHandle}><IoIosArrowDropleftCircle/></button>
          <button className='testimonials__btn' onClick={nextTestimonialHandle}><IoIosArrowDroprightCircle/></button>
       </div>
      </div>
    </section>
  )
}

export default Testimonial;