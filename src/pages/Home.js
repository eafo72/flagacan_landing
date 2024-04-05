import React from 'react';
import MainSlider from '../components/MainSlider';
import Counter from '../components/Counter'
import Faq from '../components/Faq'
import Brand from '../components/Brand'
import Newsletter from '../components/NewsLetter'



function Home() {


  return (

	
		  <main>
				<MainSlider/>
				<Counter/>
				<Faq afterElment="faq-area"/>
				<Brand/>
				<Newsletter/>
				
		</main>
	  
  )
}

export default Home;
