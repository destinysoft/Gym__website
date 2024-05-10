import React from 'react'
import image from '../images/pexels.jpg';
import {values} from '../data';
import { GiGymBag } from "react-icons/gi";
import SectionHead from './SectionHead'
import Card from '../UI/Card';


const Values = () => {
  return (
  <section className='values'>
       <div className='container values__container'>
          <div className='values__left'>
             <div className='values__image'>
                <img src={image} alt='values__image' />
             </div>
          </div>
          <div className='values__right'>
             <SectionHead  icon={<GiGymBag/>}  title='Values' />
             <p>
					Gym values statements should be clear, focused, and convey the core 
					values and objectives of the gym. They should inspire members and staff 
					alike to strive towards common goals. 
			</p>
            <div className='values__wrapper'>
                 {
                    values.map(({id, icon, title, desc}) => {
                        return <Card  key= {id} className='values__value'>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                          </Card>
                    })
                 }
            </div>
          </div>
       </div>
  </section>
  )
}

export default Values;