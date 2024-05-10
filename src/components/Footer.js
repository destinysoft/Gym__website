import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../images/blissfulmed.png';
import { FaLinkedin, FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";



const Footer = () => {
  return (
   <footer>
       <div className='container footer__container'>
            <article>  	
              <Link to='/'  className='logo' > 
                <img  src={Logo} alt='footerimage'  />
              </Link>
                    <p>
				     	Creating a sanctuary for mind, body, and spirit, 
				    	for everyone from beginners to athletes.
					</p>
           <div className='footer__socials'> 
           <a
					   	href="https://linkedin.com/in/destiny-osamudiamen-2069501b6"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin />
						</a>
            <a
							href="https://facebook.com/destinyblack155"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaFacebookF />
						</a>
						<a
							href="https://twitter.com/DestinyOsamud12?t=Sd9T7_8FXzPA1FwEilOotQ&s=09"
							target="_blank"
							rel="noopener noreferrer"
						>
							<AiOutlineTwitter />
						</a>
						<a
							href="https://instagram.com/mattmaxsoft?igsh=MXdrcml2NnA3c3l1NA=="
							target="_blank"
							rel="noopener noreferrer"
						>
							<AiFillInstagram />
						</a>
           </div>
            </article>
         <article>
			   	<h4>Permalinks</h4>
					<Link to="/about">About</Link>
					<Link to="/plans">Plans</Link>
					<Link to="/trainers">Trainers</Link>
					<Link to="/gallery">Gallery</Link>
					<Link to="/contact">Contact</Link>
				</article>
        <article>
					<h4>Insights</h4>
					<Link to="/s">Blogs</Link>
					<Link to="/s">Case Studies</Link>
					<Link to="/s">Events</Link>
					<Link to="/s">Communities</Link>
					<Link to="/s">FAQs</Link>
				</article>
				<article>
					<h4>Get In Touch</h4>
					<Link to="/contact">Contact Us</Link>
					<Link to="/s">Support</Link>
				</article>
       </div>
       <div className="footer__copyright">
				<small>2024 Goppy &copy; All Rights Reserved</small>
			</div>
       
   </footer>
  )
}

export default Footer;