import React from 'react';
import Header from "../../components/Header";
import HeaderImage from "../../images/dff.jpg";
import './Gallery.css'




const Gallery = () => {
  // const picsLength = 15;
	let images = [];
	for (let i = 1; i <= 15; i++) {
		images.push(require(`../../images/pics${i}.jpg`));
	}



  return (
    <>
     <Header title='Our Gallery' image={HeaderImage}>
      our gallery is filled with beautiful pictures of our clients and trainers working out.
     </Header>
     <section className='gallery'>
     <div className="container gallery__container">
					{images.map((image, index) => (
						<article key={index}>
							<img src={image} alt={`Gallery ${index + 1}`} />
						</article>
					))}
				</div>
     </section>
    </>
  )
}

export default Gallery;