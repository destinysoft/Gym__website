import React from 'react'
import Header from "../../components/Header";
import Headerimage from '../../images/sdff.jpg'
import Card from "../../UI/Card";
import { plans } from "../../data";
import './Plans.css'

const Plans = () => {
  return (
   <>
     	<Header image={Headerimage} title="Membership Plans">
			Personal training by appointment only.
      Group training size: 4-5 individuals.
			20% discount Off Personal training for 2 months!.
			</Header>
       <section className='plans'>
         <div className='container plans__container'>
             {
              plans.map(({id, name, desc, price, features}) =>  {
                 return <Card key={id} className='plan'>
                <h3>{name}</h3>
                 <small>{desc}</small>
                 <h1> {`$${price}`} </h1>
                 <h2>/month</h2>
                 <h4>features</h4>
                 {
                  features.map(({feature,available}, index) => {
                    return <p key={index} className={!available ?  'disabled' : ''}>
                     {feature}
                     </p>
                  })
                 }
                  <button className='btn lg'>Choose Plan </button>
                 </Card>
              })
             }
         </div>
       </section>
   </>
  )
}

export default Plans; 