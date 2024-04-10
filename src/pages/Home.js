import React from 'react';
import MainSlider from '../components/MainSlider';
import Counter from '../components/Counter'
import Faq from '../components/Faq'
import Brand from '../components/Brand'
import Newsletter from '../components/NewsLetter'

import { Toaster } from 'sonner';


function Home() {


  return (

	
		  <main>
			 	<Toaster richColors position="top-right"/>
				<MainSlider/>
				<Counter/>
				<Faq afterElment="faq-area"/>
				<Newsletter/>
				
		</main>
	  
  )
}

export default Home;
