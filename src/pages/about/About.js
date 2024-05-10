import React from 'react'
import Header from '../../components/Header';
import HeaderImage from "../../images/gear.jpg";
import StoryImage from "../../images/pexels-julia.jpg";
import VisionImage from "../../images/personal-training.jpg";
import MissionImage from "../../images/teas.jpg";
import './About.css'

const About = () => {
  return (
    <>
    <Header  title='About us'  image={HeaderImage}>
       We thrive on nurturing a vibrant, diverse community of fitness enthusiasts.
      We welcome you to our Fitness center and hope you find it an enriching part of your day.
    </Header> 
     <section className='about__story'>
          <div className=' container about__story-container'>
          <div className="about__section-image">
						<img src={StoryImage} alt="Our Story" />
					</div>
            <div  className='about__section-content'>
              <h1>Our Story</h1>
              <p>
                        Sometimes great things can be achieved in the strangest of places. We met each other at a local gym, and one day while changing in the locker room, we were lamenting about disappointments that we were experiencing with our personal workouts.
					              The more we talked, the more excited we became close. The idea was so compelling to us both that we exchanged emails and continue the conversation.We shared a similar vision to create a place that encourages, supports and pushes people to reach and maintain their 
                        physical goals, while enhancing their emotional and social wellbeing.
                        We created this gym to fulfill needs that we personally experienced and to meet
                        needs of others in their lives, at various ages and stages in life.  
              </p>
            </div>
          </div>
     </section>
     
     <section className='about__vision'>
       <div className='container about__vision-container'>
         <div className='about__section-content'>
              <h1>Our Vision</h1>
              <p>
              To help as many people as possible achieve the benefits of
					   	a healthy lifestyle by creating a nationwide network of sports clubs,
					   	offering its members the widest range of amenities and the friendliest service at an affordable price.
              </p>
         </div>
          <div className='about__section-image'>
             <img src={VisionImage} alt='Our Vision Image'  />
          </div>
       </div>
     </section>
   
   <section className='about__mission'>
        <div  className='container about__mission-container'>
        <div className='about__section-image'>
           <img src={MissionImage} alt='Our Mission Image' />
        </div>

        <div className='about__section-content'>
          <h1>Our Mission</h1>
            <p>
            Our mission has been to make working out a good time. Today, 
						we are renowned for creating one-of-a-kind group fitness classes and unique programming for
						our wildly diverse members. With this much going on, we are more than a gym. we are a family.
            we have an obligation to listen to what our members are saying.
            </p>
        </div>
        </div>
   </section>






    </>
  )
}

export default About;