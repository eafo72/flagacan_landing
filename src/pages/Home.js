import {React, useRef} from 'react';
import MainSlider from '../components/MainSlider';
import Counter from '../components/Counter'
import Faq from '../components/Faq'
import Newsletter from '../components/NewsLetter'

import { Toaster } from 'sonner';


function Home() {

  const registerRef = useRef();
  const faqRef = useRef();

  return (

	
		  <main>
			 	<Toaster richColors position="top-right"/>
				<MainSlider registerRef={registerRef} faqRef={faqRef} />
				<Counter faqRef={faqRef}/>
				<Faq afterElment="faq-area" registerRef={registerRef}/>
				<Newsletter  />
				<div align="center">
					<p>¡Encuéntranos en la COMER más cercana a tu localidad en la sección de mascotas o compra en línea!</p>
					<a style={{textTransform:"none"}}className="btn" target='_blank' href="https://www.lacomer.com.mx/">https://www.lacomer.com.mx/</a>
				</div>	
				
		</main>
	  
  )
}

export default Home;
