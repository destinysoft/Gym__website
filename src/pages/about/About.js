import React from "react";
import Header from "../../components/Header";
import HeaderImage from "../../images/gym.jpg";
import StoryImage from "../../images/pexels-julia.jpg";
import VisionImage from "../../images/personal-training.jpg";
import MissionImage from "../../images/gear.jpg";
import "./About.css";
const About = () => {
	return (
		<>
			<Header title="About Us" image={HeaderImage}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
				soluta enim perferendis molestias ut minus? Eaque, deleniti maiores.
			</Header>
			<section className="about__story">
				<div className="container about__story-container">
					<div className="about__section-image">
						<img src={StoryImage} alt="Our Story" />
					</div>
					<div className="about__section-content">
						<h1>Our Story</h1>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
							accusantium. Animi enim aspernatur omnis alias quis architecto
							nulla laboriosam vel.
						</p>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
							accusantium. Animi enim aspernatur omnis alias quis architecto
							nulla laboriosam vel.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Architecto, labore odio culpa qui officiis animi.
						</p>
					</div>
				</div>
			</section>

			<section className="about__Vision">
				<div className="container about__Vision-container">
					<div className="about__section-content">
						<h1>Our Vision</h1>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
							accusantium. Animi enim aspernatur omnis alias quis architecto
							nulla laboriosam vel.
						</p>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
							facere magnam delectus eos vero, reiciendis quae sint libero error
							odit aspernatur assumenda vel dolorum praesentium. Quibusdam
							veniam nisi eligendi tempore?
						</p>
					</div>
					<div className="about__section-image">
						<img src={VisionImage} alt="Our Vision" />
					</div>
				</div>
			</section>

			<section className="about__Mission">
				<div className="container about__Mission-container">
					<div className="about__section-image">
						<img src={MissionImage} alt="Our Mission" />
					</div>
					<div className="about__section-content">
						<h1>Our Mission</h1>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
							accusantium. Animi enim aspernatur omnis alias quis architecto
							nulla laboriosam vel.
						</p>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
							facere magnam delectus eos vero, reiciendis quae sint libero error
							odit aspernatur assumenda vel dolorum praesentium. Quibusdam
							veniam nisi eligendi tempore?
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
