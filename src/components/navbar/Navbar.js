import React from 'react'
import { useState } from "react";
import {Link, NavLink} from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import {links} from '../../data'
import Logo from  "../../images/blissfulmed.png"
import './Navbar.css'


const Navbar = () => {
	const [isNavshowing, setIsNavshowing] = useState(false);
  return (
	 <nav>
		<div  className="container nav__container" >
			<Link   to='/'  onClick={() => setIsNavshowing(false)}>
             <img   src={Logo}    alt='logoimage' className='logo'  />
			</Link>
            
			<ul className={`nav__links ${isNavshowing ? 'show__nav' : 'hide__nav '}`}>
			   {links.map(({ name, path }, index) =>  {
					return (
						<li key={index}>
                           <NavLink to={path}  className={({isActive}) => isActive ?  'active-nav' : ''} 
						    onClick={() => setIsNavshowing(prev => !prev)}   
						   >{name}</NavLink>
						</li>
					)
				})
			   }
			</ul>

               <button className='nav__toggle-btn' onClick={() => setIsNavshowing(prev => !prev)}>
			    {
					isNavshowing ?  <MdOutlineClose/>  :  < GiHamburgerMenu/>
				}
			   </button>
		</div>
	 </nav>
  )
}

export default Navbar;