import React from 'react';
import Header from './header.jsx';
import FilmCard from './filmCard.jsx';
import { films } from './Arrays.js';

function noxfilms(){
	return(
		<div>
			<Header></Header>
			<img src="https://i.pinimg.com/736x/25/d9/77/25d977db721f0ade25b025a9537fbd71.jpg" className="imgtop" />
            <section className="Section-About">
                <h1>Films</h1>
                <section className="films">
                    {films.map((films) => {
          			return (
           				<FilmCard 
	             			key={films.id}
              				NameOfFilm={films.NameOfFilm} 
              				FilmPhoto={films.FilmPhoto} 
              				FilmsLink={films.FilmsLink} 
						/>
					);
					})}
                </section>
            </section>
		</div>
	);
}

export default noxfilms;